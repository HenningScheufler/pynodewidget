import { useState } from 'react';
import { nodeExamples, nodeTemplatesByHandleType, sampleNodeData } from '../constants';
import { InfoBanner } from './InfoBanner';
import { FilterControls } from './FilterControls';
import { NodePreviewCard } from './NodePreviewCard';

export function ComponentPreview() {
  const [layoutFilter, setLayoutFilter] = useState('all');
  const [handleFilter, setHandleFilter] = useState('all');
  const [showSelected, setShowSelected] = useState(false);

  // Use node examples for preview
  const layouts = nodeExamples;
  const handleTypes = Object.values(nodeTemplatesByHandleType);
  
  const filteredLayouts = layoutFilter === 'all' ? layouts : layouts.filter(l => l.type === layoutFilter);
  // Filter by the handleType in the defaultData, not the node type
  const filteredHandles = handleFilter === 'all' ? handleTypes : handleTypes.filter(h => h.defaultData?.handleType === handleFilter);
  
  const combinations = filteredLayouts.flatMap(layout => 
    filteredHandles.map(handle => ({
      layout,
      handle,
      label: `${layout.label} + ${handle.label}`
    }))
  );

  return (
    <div className="p-10">
      <div className="max-w-screen-xl mx-auto mb-8">
        <InfoBanner />
        <FilterControls
          layoutFilter={layoutFilter}
          handleFilter={handleFilter}
          showSelected={showSelected}
          onLayoutChange={setLayoutFilter}
          onHandleChange={setHandleFilter}
          onSelectedChange={setShowSelected}
        />
      </div>

      {combinations.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No combinations match the filters
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center max-w-screen-xl mx-auto">
          {combinations.map(combo => (
            <NodePreviewCard
              key={`${combo.layout.type}-${combo.handle.type}`}
              combo={combo}
              sampleNodeData={sampleNodeData}
              showSelected={showSelected}
            />
          ))}
        </div>
      )}
    </div>
  );
}
