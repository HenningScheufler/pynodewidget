import { Card } from '../../src/components/ui/card';

export function InfoBanner() {
  return (
    <Card className="p-4 bg-blue-50 border-blue-200 mb-5">
      <h3 className="text-sm font-semibold text-blue-900 mb-2">
        📦 Component Preview Mode
      </h3>
      <p className="text-xs text-blue-700 mb-1">
        <strong>Purpose:</strong> View and test individual node components in isolation
      </p>
      <p className="text-xs text-blue-700">
        <strong>Use cases:</strong> Test different layouts, verify styling, debug component behavior
      </p>
    </Card>
  );
}
