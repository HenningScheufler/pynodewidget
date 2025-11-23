/**
 * Registry for field type renderers.
 * Allows dynamic registration of custom field types.
 */

import type { FieldRenderer } from "../../types/fieldRenderer";

class FieldRegistry {
  private renderers = new Map<string, FieldRenderer>();
  
  /**
   * Register a field renderer for a specific type.
   * 
   * @param type - The JSON schema type (e.g., "string", "number", "date", "color")
   * @param renderer - The React component that renders this field type
   * 
   * @example
   * ```typescript
   * fieldRegistry.register("color", ({ value, onChange }) => (
   *   <input type="color" value={String(value)} onChange={(e) => onChange(e.target.value)} />
   * ));
   * ```
   */
  register(type: string, renderer: FieldRenderer): void {
    this.renderers.set(type, renderer);
  }
  
  /**
   * Get the renderer for a specific type.
   * 
   * @param type - The JSON schema type
   * @returns The renderer function, or undefined if not registered
   */
  get(type: string): FieldRenderer | undefined {
    return this.renderers.get(type);
  }
  
  /**
   * Check if a renderer exists for a specific type.
   * 
   * @param type - The JSON schema type
   * @returns True if a renderer is registered for this type
   */
  has(type: string): boolean {
    return this.renderers.has(type);
  }
  
  /**
   * Unregister a field renderer.
   * 
   * @param type - The JSON schema type to unregister
   * @returns True if the renderer was removed, false if it didn't exist
   */
  unregister(type: string): boolean {
    return this.renderers.delete(type);
  }
  
  /**
   * Get all registered types.
   * 
   * @returns Array of registered type names
   */
  getRegisteredTypes(): string[] {
    return Array.from(this.renderers.keys());
  }
  
  /**
   * Clear all registered renderers.
   */
  clear(): void {
    this.renderers.clear();
  }
}

/**
 * Global field registry instance.
 * Import this to register or use custom field types.
 */
export const fieldRegistry = new FieldRegistry();
