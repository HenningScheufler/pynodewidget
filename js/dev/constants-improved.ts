/**
 * Improved constants.ts with better type safety, DRY principles, and maintainability
 * 
 * Key improvements:
 * 1. Extracted common patterns into helper functions
 * 2. Better type safety with proper type definitions
 * 3. Centralized color palette and spacing constants
 * 4. Reduced code duplication
 * 5. Better organization and documentation
 */

import type { NodeData } from './types';
import { 
  createHorizontalGridLayout, 
  createVerticalGridLayout, 
  createCompactGridLayout,
  createTwoColumnGridLayout,
  createSidebarGridLayout
} from '../src/index';
import type { 
  NodeGrid, 
  GridCell, 
  GridCoordinates, 
  CellLayout,
  HandleConfig,
  ComponentType,
  ButtonHandle,
  LabeledHandle,
  BaseHandle,
  TextField,
  NumberField,
  BoolField,
  SelectField,
  HeaderComponent,
  ButtonComponent,
  DividerComponent,
} from '../src/types/schema';

// =============================================================================
// CONSTANTS
// =============================================================================

/**
 * Color palette for consistent theming
 */
const COLORS = {
  blue: '#3b82f6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  green: '#10b981',
  purple: '#8b5cf6',
  violet: '#a855f7',
  amber: '#f59e0b',
  red: '#ef4444',
  white: '#ffffff',
} as const;

/**
 * Standard spacing values
 */
const SPACING = {
  none: '0px',
  sm: '8px',
  md: '12px',
  lg: '16px',
} as const;

/**
 * Standard column widths
 */
const COLUMN_WIDTHS = {
  auto: 'auto',
  narrow: '80px',
  medium: '120px',
  full: '1fr',
} as const;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Creates a grid cell with proper typing
 */
function createGridCell(
  id: string,
  coordinates: GridCoordinates,
  layout: CellLayout,
  components: ComponentType[]
): GridCell {
  return { id, coordinates, layout, components };
}

/**
 * Creates coordinates with defaults
 */
function createCoordinates(
  row: number,
  col: number,
  row_span = 1,
  col_span = 1
): GridCoordinates {
  return { row, col, row_span, col_span };
}

/**
 * Creates a flex layout with defaults
 */
function createFlexLayout(
  direction: 'row' | 'column',
  options: Partial<Omit<CellLayout, 'type' | 'direction'>> = {}
): CellLayout {
  return {
    type: 'flex',
    direction,
    gap: SPACING.sm,
    ...options,
  };
}

/**
 * Creates a button handle component
 */
function createButtonHandle(
  id: string,
  handle_type: 'input' | 'output',
  label: string,
  required = false
): ButtonHandle {
  return {
    type: 'button-handle',
    id,
    handle_type,
    label,
    required,
  };
}

/**
 * Creates a labeled handle component
 */
function createLabeledHandle(
  id: string,
  handle_type: 'input' | 'output',
  label: string,
  required = false
): LabeledHandle {
  return {
    type: 'labeled-handle',
    id,
    handle_type,
    label,
    required,
  };
}

/**
 * Creates a base handle component
 */
function createBaseHandle(
  id: string,
  handle_type: 'input' | 'output',
  label: string,
  required = false
): BaseHandle {
  return {
    type: 'base-handle',
    id,
    handle_type,
    label,
    required,
  };
}

/**
 * Creates a text field component
 */
function createTextField(
  id: string,
  label: string,
  value = '',
  placeholder = ''
): TextField {
  return { type: 'text', id, label, value, placeholder };
}

/**
 * Creates a number field component
 */
function createNumberField(
  id: string,
  label: string,
  value: number,
  min?: number,
  max?: number
): NumberField {
  return { type: 'number', id, label, value, min, max };
}

/**
 * Creates a boolean field component
 */
function createBoolField(
  id: string,
  label: string,
  value = false
): BoolField {
  return { type: 'bool', id, label, value };
}

/**
 * Creates a select field component
 */
function createSelectField(
  id: string,
  label: string,
  value: string,
  options: string[]
): SelectField {
  return { type: 'select', id, label, value, options };
}

/**
 * Creates a header component
 */
function createHeader(
  id: string,
  label: string,
  icon?: string,
  bgColor?: string,
  textColor = COLORS.white
): HeaderComponent {
  return { type: 'header', id, label, icon, bgColor, textColor };
}

/**
 * Creates a button component
 */
function createButton(
  id: string,
  label: string,
  action: string,
  variant: 'primary' | 'secondary' = 'primary'
): ButtonComponent {
  return { type: 'button', id, label, action, variant };
}

/**
 * Creates a divider component
 */
function createDivider(
  id: string,
  orientation: 'horizontal' | 'vertical' = 'horizontal'
): DividerComponent {
  return { type: 'divider', id, orientation };
}

/**
 * Creates a standard header configuration
 */
function createHeaderConfig(
  icon: string,
  bgColor: string,
  show = true,
  textColor = COLORS.white
) {
  return { show, icon, bgColor, textColor };
}

// =============================================================================
// BASE NODE DATA
// =============================================================================

const baseNodeData = {
  label: 'Data Processor',
  parameters: {
    type: 'object' as const,
    properties: {
      name: { 
        type: 'string' as const, 
        title: 'Name', 
        default: 'processor' 
      },
      count: { 
        type: 'number' as const, 
        title: 'Count', 
        default: 10 
      },
      enabled: { 
        type: 'boolean' as const, 
        title: 'Enabled', 
        default: true 
      }
    },
    required: ['name']
  },
  inputs: [
    { id: 'input1', label: 'First Input' },
    { id: 'input2', label: 'Second Input' }
  ],
  outputs: [
    { id: 'output1', label: 'Result' },
    { id: 'output2', label: 'Stats' }
  ],
  values: {
    name: 'processor',
    count: 10,
    enabled: true
  }
};

export const sampleNodeData: NodeData = {
  ...baseNodeData,
  gridLayout: createHorizontalGridLayout(),
};

// =============================================================================
// HANDLE TYPE TEMPLATES
// =============================================================================

export const nodeTemplatesByHandleType = {
  base: {
    type: 'base_node',
    label: 'Base Handle Node',
    icon: '⚙️',
    description: 'Node with base handle style',
    defaultData: { 
      ...sampleNodeData, 
      handleType: 'base' as const,
      gridLayout: createHorizontalGridLayout()
    }
  },
  button: {
    type: 'button_node',
    label: 'Button Handle Node',
    icon: '🔘',
    description: 'Node with button handle style',
    defaultData: { 
      ...sampleNodeData, 
      handleType: 'button' as const,
      gridLayout: createHorizontalGridLayout()
    }
  },
  labeled: {
    type: 'labeled_node',
    label: 'Labeled Handle Node',
    icon: '🏷️',
    description: 'Node with labeled handle style',
    defaultData: { 
      ...sampleNodeData, 
      handleType: 'labeled' as const,
      gridLayout: createHorizontalGridLayout()
    }
  }
} as const;

// =============================================================================
// GRID LAYOUT EXAMPLES
// =============================================================================

/**
 * Creates a three-column grid layout (inputs | parameters | outputs)
 */
function createThreeColumnGrid(): NodeGrid {
  return {
    rows: ['1fr'],
    columns: [COLUMN_WIDTHS.auto, COLUMN_WIDTHS.full, COLUMN_WIDTHS.auto],
    gap: SPACING.sm,
    cells: [
      createGridCell(
        'left-cell',
        createCoordinates(1, 1),
        createFlexLayout('column', { align: 'stretch' }),
        [
          createButtonHandle('input1', 'input', 'First Input'),
          createButtonHandle('input2', 'input', 'Second Input'),
        ]
      ),
      createGridCell(
        'center-cell',
        createCoordinates(1, 2),
        createFlexLayout('column', { gap: SPACING.md }),
        [
          createTextField('name', 'Name', 'processor'),
          createNumberField('count', 'Count', 10, 1, 100),
          createBoolField('enabled', 'Enabled', true),
        ]
      ),
      createGridCell(
        'right-cell',
        createCoordinates(1, 3),
        createFlexLayout('column', { align: 'stretch' }),
        [
          createButtonHandle('output1', 'output', 'Result'),
        ]
      ),
    ],
  };
}

/**
 * Creates a vertical stack grid layout
 */
function createVerticalStackGrid(): NodeGrid {
  return {
    rows: [COLUMN_WIDTHS.auto, COLUMN_WIDTHS.full, COLUMN_WIDTHS.auto],
    columns: ['1fr'],
    gap: SPACING.sm,
    cells: [
      createGridCell(
        'top-cell',
        createCoordinates(1, 1),
        createFlexLayout('row', { justify: 'center', gap: SPACING.md }),
        [
          createLabeledHandle('x', 'input', 'X'),
          createLabeledHandle('y', 'input', 'Y'),
        ]
      ),
      createGridCell(
        'middle-cell',
        createCoordinates(2, 1),
        createFlexLayout('column', { gap: SPACING.md }),
        [
          createHeader('header', 'Calculator', '🧮'),
          createSelectField('operation', 'Operation', 'add', ['add', 'multiply', 'subtract', 'divide']),
        ]
      ),
      createGridCell(
        'bottom-cell',
        createCoordinates(3, 1),
        createFlexLayout('row', { justify: 'center' }),
        [
          createLabeledHandle('result', 'output', 'Result'),
        ]
      ),
    ],
  };
}

/**
 * Creates a header/body grid layout
 */
function createHeaderBodyGrid(): NodeGrid {
  return {
    rows: [COLUMN_WIDTHS.auto, COLUMN_WIDTHS.full],
    columns: ['1fr'],
    gap: SPACING.none,
    cells: [
      createGridCell(
        'header-cell',
        createCoordinates(1, 1),
        createFlexLayout('row', { justify: 'space-between', align: 'center' }),
        [
          createLabeledHandle('in', 'input', 'Input'),
          createHeader('title', 'Transform', '🔄', COLORS.blue),
          createLabeledHandle('out', 'output', 'Output'),
        ]
      ),
      createGridCell(
        'body-cell',
        createCoordinates(2, 1),
        createFlexLayout('column'),
        [
          createTextField('expression', 'Expression', 'x * 2', 'Enter expression'),
          createNumberField('scale', 'Scale', 1.0, 0.1, 10),
        ]
      ),
    ],
  };
}

/**
 * Creates a complex grid with header, body, and footer
 */
function createComplexGrid(): NodeGrid {
  return {
    rows: [COLUMN_WIDTHS.auto, COLUMN_WIDTHS.full, COLUMN_WIDTHS.auto],
    columns: [COLUMN_WIDTHS.narrow, COLUMN_WIDTHS.full, COLUMN_WIDTHS.narrow],
    gap: SPACING.none,
    cells: [
      // Header spanning all columns
      createGridCell(
        'header',
        createCoordinates(1, 1, 1, 3),
        createFlexLayout('row', { justify: 'space-between', align: 'center' }),
        [
          createHeader('title', 'Advanced Processor', '🚀', COLORS.sky),
          createButton('run', 'Run', 'execute', 'primary'),
        ]
      ),
      // Left: Input handles
      createGridCell(
        'inputs',
        createCoordinates(2, 1),
        createFlexLayout('column'),
        [
          createBaseHandle('in1', 'input', 'A'),
          createBaseHandle('in2', 'input', 'B'),
        ]
      ),
      // Center: Parameters
      createGridCell(
        'params',
        createCoordinates(2, 2),
        createFlexLayout('column', { gap: SPACING.md }),
        [
          createTextField('mode', 'Mode', 'auto', 'Select mode'),
          createNumberField('iterations', 'Iterations', 100, 1, 1000),
          createBoolField('verbose', 'Verbose Output', false),
          createDivider('div1'),
          createSelectField('output_format', 'Output Format', 'json', ['json', 'csv', 'xml']),
        ]
      ),
      // Right: Output handles
      createGridCell(
        'outputs',
        createCoordinates(2, 3),
        createFlexLayout('column'),
        [
          createBaseHandle('result', 'output', 'Result'),
          createBaseHandle('log', 'output', 'Log'),
        ]
      ),
      // Footer spanning all columns
      createGridCell(
        'footer',
        createCoordinates(3, 1, 1, 3),
        createFlexLayout('row', { justify: 'center' }),
        [
          createButton('reset', 'Reset', 'reset', 'secondary'),
        ]
      ),
    ],
  };
}

// =============================================================================
// EXPORTED GRID LAYOUT EXAMPLES
// =============================================================================

export const gridLayoutExamples = [
  // Legacy layouts using old system
  {
    type: 'horizontal_grid',
    label: 'Horizontal Grid Layout',
    icon: '↔️',
    description: 'Classic horizontal layout: inputs | parameters | outputs',
    defaultData: {
      ...baseNodeData,
      label: 'Horizontal Layout',
      gridLayout: createHorizontalGridLayout(),
      header: createHeaderConfig('↔️', COLORS.blue),
    }
  },
  {
    type: 'vertical_grid',
    label: 'Vertical Grid Layout',
    icon: '↕️',
    description: 'Vertical stacked layout: inputs / parameters / outputs',
    defaultData: {
      ...baseNodeData,
      label: 'Vertical Layout',
      gridLayout: createVerticalGridLayout(),
      header: createHeaderConfig('↕️', COLORS.green),
    }
  },
  {
    type: 'compact_grid',
    label: 'Compact Grid Layout',
    icon: '⬜',
    description: 'Minimal layout: just parameters',
    defaultData: {
      ...baseNodeData,
      label: 'Compact Layout',
      gridLayout: createCompactGridLayout(),
      inputs: [] as HandleConfig[],
      outputs: [] as HandleConfig[],
      header: createHeaderConfig('⬜', COLORS.purple),
    }
  },
  {
    type: 'two_column_grid',
    label: 'Two-Column Grid Layout',
    icon: '⚡',
    description: 'Two columns: handles on top, parameters below',
    defaultData: {
      ...baseNodeData,
      label: 'Two-Column Layout',
      gridLayout: createTwoColumnGridLayout(),
      header: createHeaderConfig('⚡', COLORS.amber),
    }
  },
  {
    type: 'sidebar_grid',
    label: 'Sidebar Grid Layout',
    icon: '📊',
    description: 'Fixed sidebars with flexible center content',
    defaultData: {
      ...baseNodeData,
      label: 'Sidebar Layout',
      gridLayout: createSidebarGridLayout(),
      header: createHeaderConfig('📊', COLORS.red),
      style: {
        minWidth: '400px'
      }
    }
  },
  // New three-layer grid system examples
  {
    type: 'three_layer_horizontal',
    label: '🆕 Three-Column (New)',
    icon: '🎯',
    description: 'NEW: Component-based three-column layout with button handles',
    defaultData: {
      label: 'Three-Column Layout',
      grid: createThreeColumnGrid(),
      header: createHeaderConfig('🎯', COLORS.cyan),
    }
  },
  {
    type: 'three_layer_vertical',
    label: '🆕 Vertical Stack (New)',
    icon: '📚',
    description: 'NEW: Component-based vertical stack with labeled handles',
    defaultData: {
      label: 'Vertical Stack',
      grid: createVerticalStackGrid(),
      header: createHeaderConfig('📚', COLORS.violet),
    }
  },
  {
    type: 'three_layer_header_body',
    label: '🆕 Header/Body (New)',
    icon: '🎨',
    description: 'NEW: Component-based header/body layout with handles in header',
    defaultData: {
      label: 'Transform Node',
      grid: createHeaderBodyGrid(),
      header: { show: false }, // Header is part of the grid now
    }
  },
  {
    type: 'three_layer_complex',
    label: '🆕 Complex Grid (New)',
    icon: '🚀',
    description: 'NEW: Advanced component-based layout with header, footer, and action buttons',
    defaultData: {
      label: 'Advanced Processor',
      grid: createComplexGrid(),
      header: { show: false }, // Header is part of the grid
    }
  }
];
