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
  GridLayoutComponent,
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

/**
 * Base sample node data using the new grid+components architecture
 */
const baseSampleNode: NodeData = {
  label: 'Data Processor',
  grid: createThreeColumnGrid(),
  values: {
    name: 'processor',
    count: 10,
    enabled: true
  }
};

export const sampleNodeData: NodeData = baseSampleNode;

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
      grid: createThreeColumnGrid()
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
      grid: createThreeColumnGrid()
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
      grid: createThreeColumnGrid()
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
        createFlexLayout('row', { justify: 'space-between', gap: SPACING.md }),
        [
          createButtonHandle('input1', 'input', 'First Input'),
          createButtonHandle('input2', 'input', 'Second Input'),
        ]
      ),
      createGridCell(
        'middle-cell',
        createCoordinates(2, 1),
        createFlexLayout('column', { gap: SPACING.md }),
        [
          createTextField('name', 'Name', 'processor'),
          createNumberField('count', 'Count', 10, 1, 100),
          createBoolField('enabled', 'Enabled', true),
        ]
      ),
      createGridCell(
        'bottom-cell',
        createCoordinates(3, 1),
        createFlexLayout('row', { justify: 'center' }),
        [
          createButtonHandle('output1', 'output', 'Result'),
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

/**
 * Creates a nested sidebar grid layout
 */
function createNestedSidebarGrid(): NodeGrid {
  return {
    rows: ['auto'],
    columns: ['1fr'],
    gap: SPACING.sm,
    cells: [
      createGridCell(
        'main-container',
        createCoordinates(1, 1),
        createFlexLayout('column'),
        [
          {
            id: 'nested-sidebar',
            type: 'grid-layout',
            rows: ['auto', '1fr'],
            columns: ['200px', '1fr'],
            gap: SPACING.md,
            cells: [
              // Header spanning both columns
              createGridCell(
                'header-cell',
                createCoordinates(1, 1, 1, 2),
                createFlexLayout('row'),
                [
                  createHeader('main-header', 'Nested Sidebar Layout', '🔲', COLORS.blue),
                ]
              ),
              // Sidebar
              createGridCell(
                'sidebar',
                createCoordinates(2, 1),
                createFlexLayout('column', { gap: SPACING.sm }),
                [
                  createHeader('sidebar-header', 'Sidebar', '📋', COLORS.cyan),
                  createLabeledHandle('data_input', 'input', 'Data'),
                  createTextField('sidebar_name', 'Name', 'Item'),
                  createNumberField('priority', 'Priority', 1, 1, 10),
                ]
              ),
              // Content
              createGridCell(
                'content',
                createCoordinates(2, 2),
                createFlexLayout('column', { gap: SPACING.md }),
                [
                  createTextField('description', 'Description', ''),
                  createBoolField('enabled', 'Enabled', true),
                  createSelectField('mode', 'Mode', 'auto', ['auto', 'manual', 'scheduled']),
                  createLabeledHandle('result_output', 'output', 'Result'),
                ]
              ),
            ],
          } as GridLayoutComponent,
        ]
      ),
    ],
  };
}

/**
 * Creates a nested dashboard grid layout
 */
function createNestedDashboardGrid(): NodeGrid {
  return {
    rows: ['auto'],
    columns: ['1fr'],
    gap: SPACING.sm,
    cells: [
      createGridCell(
        'dashboard-container',
        createCoordinates(1, 1),
        createFlexLayout('column'),
        [
          {
            id: 'dashboard-grid',
            type: 'grid-layout',
            rows: ['auto', '1fr'],
            columns: ['1fr', '1fr'],
            gap: SPACING.lg,
            cells: [
              // Header spanning all columns
              createGridCell(
                'dashboard-header',
                createCoordinates(1, 1, 1, 2),
                createFlexLayout('row'),
                [
                  createHeader('dash-title', 'Dashboard Layout', '📊', COLORS.green),
                ]
              ),
              // Widget 1 (nested grid)
              createGridCell(
                'widget1',
                createCoordinates(2, 1),
                createFlexLayout('column'),
                [
                  {
                    id: 'widget1-grid',
                    type: 'grid-layout',
                    rows: ['auto', '1fr'],
                    columns: ['1fr'],
                    gap: '4px',
                    cells: [
                      createGridCell(
                        'w1-header',
                        createCoordinates(1, 1),
                        createFlexLayout('row'),
                        [
                          createHeader('w1-title', 'Widget 1', '📈', COLORS.amber),
                        ]
                      ),
                      createGridCell(
                        'w1-content',
                        createCoordinates(2, 1),
                        createFlexLayout('column', { gap: '4px' }),
                        [
                          createNumberField('metric1', 'Metric 1', 85),
                          createNumberField('metric2', 'Metric 2', 92),
                        ]
                      ),
                    ],
                  } as GridLayoutComponent,
                ]
              ),
              // Widget 2 (nested grid)
              createGridCell(
                'widget2',
                createCoordinates(2, 2),
                createFlexLayout('column'),
                [
                  {
                    id: 'widget2-grid',
                    type: 'grid-layout',
                    rows: ['auto', '1fr'],
                    columns: ['1fr'],
                    gap: '4px',
                    cells: [
                      createGridCell(
                        'w2-header',
                        createCoordinates(1, 1),
                        createFlexLayout('row'),
                        [
                          createHeader('w2-title', 'Widget 2', '📉', COLORS.sky),
                        ]
                      ),
                      createGridCell(
                        'w2-content',
                        createCoordinates(2, 1),
                        createFlexLayout('column', { gap: '4px' }),
                        [
                          createSelectField('status', 'Status', 'active', ['active', 'pending', 'completed']),
                          createBoolField('alerts', 'Enable Alerts', true),
                        ]
                      ),
                    ],
                  } as GridLayoutComponent,
                ]
              ),
            ],
          } as GridLayoutComponent,
        ]
      ),
    ],
  };
}

/**
 * Creates a deeply nested grid layout (3 levels)
 */
function createDeeplyNestedGrid(): NodeGrid {
  return {
    rows: ['auto'],
    columns: ['1fr'],
    gap: SPACING.sm,
    cells: [
      createGridCell(
        'outer-container',
        createCoordinates(1, 1),
        createFlexLayout('column'),
        [
          {
            id: 'outer-grid',
            type: 'grid-layout',
            rows: ['auto', '1fr', 'auto'],
            columns: ['1fr'],
            gap: SPACING.sm,
            cells: [
              // Header
              createGridCell(
                'header-cell',
                createCoordinates(1, 1),
                createFlexLayout('row'),
                [
                  createHeader('title', 'Deep Nesting Demo', '🎨', COLORS.purple),
                ]
              ),
              // Body with LEVEL 2 nested grid
              createGridCell(
                'body-cell',
                createCoordinates(2, 1),
                createFlexLayout('column'),
                [
                  {
                    id: 'middle-grid',
                    type: 'grid-layout',
                    rows: ['1fr'],
                    columns: ['1fr', '1fr'],
                    gap: SPACING.lg,
                    cells: [
                      // Left panel
                      createGridCell(
                        'left-panel',
                        createCoordinates(1, 1),
                        createFlexLayout('column', { gap: SPACING.sm }),
                        [
                          createHeader('left-header', 'Left Panel', '◀️', COLORS.cyan),
                          createLabeledHandle('left-input', 'input', 'Input A'),
                          createNumberField('value1', 'Value 1', 42),
                          createTextField('text1', 'Text 1', 'Hello'),
                        ]
                      ),
                      // Right panel with LEVEL 3 nested grid
                      createGridCell(
                        'right-panel',
                        createCoordinates(1, 2),
                        createFlexLayout('column'),
                        [
                          {
                            id: 'inner-grid',
                            type: 'grid-layout',
                            rows: ['auto', '1fr', 'auto'],
                            columns: ['1fr'],
                            gap: SPACING.sm,
                            minHeight: '200px',
                            cells: [
                              createGridCell(
                                'inner-header',
                                createCoordinates(1, 1),
                                createFlexLayout('row'),
                                [
                                  createHeader('inner-title', 'Inner Grid (Level 3!)', '🔷', COLORS.amber),
                                ]
                              ),
                              createGridCell(
                                'inner-content',
                                createCoordinates(2, 1),
                                createFlexLayout('column', { gap: SPACING.sm }),
                                [
                                  createTextField('nested-text', 'Deep Field', 'Nested!'),
                                  createBoolField('nested-bool', 'Deep Toggle', true),
                                  createDivider('div1'),
                                  createSelectField('nested-select', 'Deep Select', 'option2', ['option1', 'option2', 'option3']),
                                ]
                              ),
                              createGridCell(
                                'inner-footer',
                                createCoordinates(3, 1),
                                createFlexLayout('row'),
                                [
                                  createButtonHandle('inner-output', 'output', 'Output'),
                                ]
                              ),
                            ],
                          } as GridLayoutComponent,
                        ]
                      ),
                    ],
                  } as GridLayoutComponent,
                ]
              ),
              // Footer
              createGridCell(
                'footer-cell',
                createCoordinates(3, 1),
                createFlexLayout('row', { justify: 'center' }),
                [
                  createButton('submit-btn', 'Submit', 'submit', 'primary'),
                ]
              ),
            ],
          } as GridLayoutComponent,
        ]
      ),
    ],
  };
}

// =============================================================================
// COMPATIBILITY WRAPPERS FOR LEGACY LAYOUT NAMES
// =============================================================================

/**
 * Horizontal grid layout - simple three-column layout
 * Alias for createThreeColumnGrid()
 */
function createHorizontalGridLayout(): NodeGrid {
  return createThreeColumnGrid();
}

/**
 * Vertical grid layout - stacked layout with inputs on top, fields in middle, outputs on bottom
 * Alias for createVerticalStackGrid()
 */
function createVerticalGridLayout(): NodeGrid {
  return createVerticalStackGrid();
}

/**
 * Compact grid layout - just fields, no handles
 */
function createCompactGridLayout(): NodeGrid {
  return {
    rows: ['1fr'],
    columns: ['1fr'],
    gap: SPACING.sm,
    cells: [
      createGridCell(
        'content-cell',
        createCoordinates(1, 1),
        createFlexLayout('column', { gap: SPACING.sm }),
        [
          createTextField('name', 'Name', 'processor'),
          createNumberField('count', 'Count', 10, 1, 100),
          createBoolField('enabled', 'Enabled', true),
        ]
      ),
    ],
  };
}

/**
 * Two-column grid layout - handles on top row, fields below
 */
function createTwoColumnGridLayout(): NodeGrid {
  return {
    rows: [COLUMN_WIDTHS.auto, COLUMN_WIDTHS.full],
    columns: [COLUMN_WIDTHS.auto, COLUMN_WIDTHS.auto],
    gap: SPACING.md,
    cells: [
      createGridCell(
        'handles-left',
        createCoordinates(1, 1),
        createFlexLayout('column', { gap: SPACING.sm }),
        [
          createButtonHandle('input1', 'input', 'Input 1'),
          createButtonHandle('input2', 'input', 'Input 2'),
        ]
      ),
      createGridCell(
        'handles-right',
        createCoordinates(1, 2),
        createFlexLayout('column', { gap: SPACING.sm }),
        [
          createButtonHandle('output1', 'output', 'Output'),
        ]
      ),
      createGridCell(
        'content',
        createCoordinates(2, 1, 1, 2), // Span both columns
        createFlexLayout('column', { gap: SPACING.md }),
        [
          createTextField('name', 'Name', 'processor'),
          createNumberField('count', 'Count', 10, 1, 100),
          createBoolField('enabled', 'Enabled', true),
        ]
      ),
    ],
  };
}

/**
 * Sidebar grid layout - fixed sidebars with center content
 */
function createSidebarGridLayout(): NodeGrid {
  return {
    rows: ['1fr'],
    columns: [COLUMN_WIDTHS.narrow, COLUMN_WIDTHS.full, COLUMN_WIDTHS.narrow],
    gap: SPACING.md,
    cells: [
      createGridCell(
        'left-sidebar',
        createCoordinates(1, 1),
        createFlexLayout('column', { gap: SPACING.sm }),
        [
          createButtonHandle('input1', 'input', 'In 1'),
          createButtonHandle('input2', 'input', 'In 2'),
        ]
      ),
      createGridCell(
        'center-content',
        createCoordinates(1, 2),
        createFlexLayout('column', { gap: SPACING.md }),
        [
          createHeader('header', 'Processor', '⚙️', COLORS.blue),
          createDivider('div1'),
          createTextField('name', 'Name', 'processor'),
          createNumberField('count', 'Count', 10, 1, 100),
          createBoolField('enabled', 'Enabled', true),
        ]
      ),
      createGridCell(
        'right-sidebar',
        createCoordinates(1, 3),
        createFlexLayout('column', { gap: SPACING.sm }),
        [
          createButtonHandle('output1', 'output', 'Out'),
        ]
      ),
    ],
  };
}

// =============================================================================
// NODE EXAMPLES
// =============================================================================

export const nodeExamples = [
  // Simple starter example
  {
    type: 'simple_node',
    label: '✨ Simple Node',
    icon: '✨',
    description: 'Minimal example: single text field',
    defaultData: {
      label: 'Simple Node',
      grid: {
        rows: ['1fr'],
        columns: ['1fr'],
        gap: '8px',
        cells: [
          createGridCell(
            'content',
            createCoordinates(1, 1),
            createFlexLayout('column', { gap: '8px' }),
            [
              createTextField('message', 'Message', 'Hello World!', 'Enter your message'),
            ]
          ),
        ],
      },
      header: createHeaderConfig('✨', COLORS.blue),
      values: {
        message: 'Hello World!'
      }
    }
  },
  // Horizontal layout
  {
    type: 'horizontal',
    label: '↔️ Horizontal',
    icon: '↔️',
    description: 'Three columns: inputs | fields | outputs',
    defaultData: {
      label: 'Horizontal Node',
      grid: createHorizontalGridLayout(),
      header: createHeaderConfig('↔️', COLORS.green),
      values: {
        name: 'processor',
        count: 10,
        enabled: true
      }
    }
  },
  // Vertical layout
  {
    type: 'vertical',
    label: '↕️ Vertical',
    icon: '↕️',
    description: 'Stacked: inputs / fields / outputs',
    defaultData: {
      label: 'Vertical Node',
      grid: createVerticalGridLayout(),
      header: createHeaderConfig('↕️', COLORS.cyan),
      values: {
        name: 'processor',
        count: 10,
        enabled: true
      }
    }
  },
  // Component-based with custom header
  {
    type: 'header_body',
    label: '🎨 Header & Body',
    icon: '🎨',
    description: 'Custom header with handles and form body',
    defaultData: {
      label: 'Transform Node',
      grid: createHeaderBodyGrid(),
      header: { show: false },
    }
  },
  // Complex with nested components
  {
    type: 'complex',
    label: '🚀 Complex Layout',
    icon: '🚀',
    description: 'Advanced layout with header, footer, and buttons',
    defaultData: {
      label: 'Advanced Processor',
      grid: createComplexGrid(),
      header: { show: false },
    }
  },
];
