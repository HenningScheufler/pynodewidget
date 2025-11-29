import React, { useEffect } from 'react';
import { toPng, toJpeg } from 'html-to-image';

export interface ImageExportTrigger {
  format: 'png' | 'jpeg';
  filename: string;
  quality: number;
  pixelRatio: number;
  saveToFile: boolean;
  browserDownload: boolean;
  exportId: number;
}

/**
 * Hook to handle browser-based image export of the ReactFlow viewport.
 * 
 * This hook watches for changes to the export trigger list from Python and
 * exports the flow visualization to the specified image format for each trigger.
 * Can send data back to Python for filesystem saving and/or trigger browser download.
 * 
 * Supported formats:
 * - PNG: Raster format with transparency support
 * - JPEG: Compressed raster format (no transparency)
 * 
 * @param exportTriggers - Array of export configurations from Python widget
 * @param containerRef - Optional ref to the container element to export
 * @param onDataExported - Callback to send image data back to Python
 */
export function useImageExport(
  exportTriggers: ImageExportTrigger[] | ImageExportTrigger | undefined,
  containerRef?: React.RefObject<HTMLElement>,
  onDataExported?: (dataUrl: string) => void
) {
  // Track the last processed export ID to avoid duplicate exports
  const lastExportIdRef = React.useRef<number>(0);
  
  useEffect(() => {
    // Normalize to array
    const triggers = Array.isArray(exportTriggers) ? exportTriggers : 
                     exportTriggers ? [exportTriggers] : [];
    
    // Process each trigger that hasn't been processed yet
    triggers.forEach(exportTrigger => {
      // Only trigger on valid export ID
      if (!exportTrigger?.exportId) return;
      
      // Skip if this export ID was already processed
      if (exportTrigger.exportId <= lastExportIdRef.current) {
        return;
      }
      
      // Mark this export ID as processed
      lastExportIdRef.current = exportTrigger.exportId;
    
    // Function to find and export the ReactFlow element
    const attemptExport = (attemptsLeft: number) => {
      let targetElement: HTMLElement | null = null;
      
      // Strategy 0: Use provided ref if available
      if (containerRef?.current) {
        // Find ReactFlow within the ref container
        const reactFlow = containerRef.current.querySelector('.react-flow') as HTMLElement;
        if (reactFlow) {
          targetElement = reactFlow;
        } else if (containerRef.current.classList.contains('react-flow')) {
          targetElement = containerRef.current;
        } else {
          // Use the container itself
          targetElement = containerRef.current;
        }
      }
      
      // Strategy 1: Direct selector from document
      if (!targetElement) {
        targetElement = document.querySelector('.react-flow') as HTMLElement;
      }
      
      // Strategy 2: Find viewport and use its parent
      if (!targetElement) {
        const viewport = document.querySelector('.react-flow__viewport');
        if (viewport) {
          // The ReactFlow wrapper is typically 2-3 levels up from viewport
          let parent = viewport.parentElement;
          while (parent) {
            if (parent.classList.contains('react-flow') || 
                parent.style.width === '100%') {
              targetElement = parent;
              break;
            }
            parent = parent.parentElement;
            // Don't go too far up
            if (!parent || parent.tagName === 'BODY') break;
          }
        }
      }
      
      // Strategy 3: Find the div that contains ReactFlow
      if (!targetElement) {
        const allDivs = document.querySelectorAll('div');
        for (let i = 0; i < allDivs.length; i++) {
          const div = allDivs[i] as HTMLElement;
          if (div.querySelector('.react-flow__viewport')) {
            targetElement = div;
            break;
          }
        }
      }
      
      // If still not found and we have retries left, try again
      if (!targetElement && attemptsLeft > 0) {
        setTimeout(() => attemptExport(attemptsLeft - 1), 500);
        return;
      }
      
      if (!targetElement) {
        console.error('ReactFlow container not found. Make sure the widget is displayed in the browser.');
        return;
      }
      
      // Configure export options
      const options = {
        cacheBust: true,
        pixelRatio: exportTrigger.pixelRatio || 2,
        quality: exportTrigger.quality || 1.0,
        // Filter out UI controls and panels from the export
        filter: (node: HTMLElement) => {
          // Exclude ReactFlow controls, panels, and attribution
          const excludeClasses = [
            'react-flow__controls',
            'react-flow__panel',
            'react-flow__attribution',
            'react-flow__minimap'
          ];
          return !excludeClasses.some(className => 
            node.classList?.contains(className)
          );
        }
      };
      
      // Select appropriate export function based on format
      const exportFunctions = {
        'jpeg': toJpeg,
        'png': toPng
      };
      
      const exportFn = exportFunctions[exportTrigger.format] || toPng;
      
      // Execute export and trigger download/send to Python
      exportFn(targetElement as HTMLElement, options)
        .then((dataUrl: string) => {
          // Send data to Python if save_to_file=True
          if (exportTrigger.saveToFile && onDataExported) {
            // Append export ID to data URL so Python can match it to the filename
            const dataUrlWithId = `${dataUrl}|exportId=${exportTrigger.exportId}`;
            onDataExported(dataUrlWithId);
          }
          
          // Trigger browser download if browser_download=True
          if (exportTrigger.browserDownload) {
            const link = document.createElement('a');
            link.download = exportTrigger.filename;
            link.href = dataUrl;
            link.click();
            console.log(`✓ Browser download triggered - check your browser's download folder for ${exportTrigger.filename}`);
          }
          
          if (exportTrigger.saveToFile && !exportTrigger.browserDownload) {
            console.log(`✓ Image data sent to Python for saving to ${exportTrigger.filename}`);
          }
        })
        .catch((error: Error) => {
          console.error('Image export failed:', error);
        });
    };
    
    // Start export attempt with 5 retries
    const timeoutId = setTimeout(() => attemptExport(5), 300);
    
    return () => clearTimeout(timeoutId);
    }); // Close forEach
  }, [exportTriggers]); // Watch the entire triggers array
}
