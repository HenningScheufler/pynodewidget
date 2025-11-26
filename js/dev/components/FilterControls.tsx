import { Label } from '../../src/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select';
import { Checkbox } from '../../src/components/ui/checkbox';

interface FilterControlsProps {
  layoutFilter: string;
  handleFilter: string;
  showSelected: boolean;
  onLayoutChange: (value: string) => void;
  onHandleChange: (value: string) => void;
  onSelectedChange: (checked: boolean) => void;
}

export function FilterControls({
  layoutFilter,
  handleFilter,
  showSelected,
  onLayoutChange,
  onHandleChange,
  onSelectedChange
}: FilterControlsProps) {
  return (
    <div className="flex gap-5 items-center p-4 bg-muted rounded-md mb-5">
      <div className="flex items-center gap-2">
        <Label htmlFor="layout-filter" className="text-sm font-medium">
          Layout:
        </Label>
        <Select value={layoutFilter} onValueChange={onLayoutChange}>
          <SelectTrigger id="layout-filter" className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Layouts</SelectItem>
            <SelectItem value="horizontal_grid">Horizontal Grid</SelectItem>
            <SelectItem value="vertical_grid">Vertical Grid</SelectItem>
            <SelectItem value="compact_grid">Compact Grid</SelectItem>
            <SelectItem value="two_column_grid">Two-Column Grid</SelectItem>
            <SelectItem value="sidebar_grid">Sidebar Grid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="handle-filter" className="text-sm font-medium">
          Handle Type:
        </Label>
        <Select value={handleFilter} onValueChange={onHandleChange}>
          <SelectTrigger id="handle-filter" className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Handles</SelectItem>
            <SelectItem value="base">Base Only</SelectItem>
            <SelectItem value="button">Button Only</SelectItem>
            <SelectItem value="labeled">Labeled Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox 
          id="show-selected"
          checked={showSelected}
          onCheckedChange={(checked) => onSelectedChange(checked === true)}
        />
        <Label htmlFor="show-selected" className="text-sm font-medium cursor-pointer">
          Show selected state
        </Label>
      </div>
    </div>
  );
}
