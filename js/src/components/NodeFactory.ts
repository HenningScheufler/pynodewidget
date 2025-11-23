// NodeFactory.ts
// Registry for node types with support for both parameters-based and custom nodes
import type { ComponentType } from "react";
import type { NodeProps } from "@xyflow/react";

export type NodeComponent = ComponentType<NodeProps>;

/**
 * NodeRenderer defines how a node type should be rendered.
 * - 'parameters': Use builder-generated component (default for Python-defined nodes)
 * - 'custom': Use a custom React component that doesn't follow the parameters pattern
 * - ComponentType: Direct component reference for maximum control
 */
export type NodeRenderer = 
  | 'parameters'       // Auto-render using NodeComponentBuilder based on data.parameters
  | 'custom'           // Use registered custom component
  | NodeComponent;     // Direct component reference

export interface NodeTypeRegistration {
  /** The React component to render this node type */
  component: NodeComponent;
  /** Indicates if this is a parameters-based node (uses builder-generated component) or custom */
  isParametersNode: boolean;
  /** Optional: Custom props to pass to the component */
  defaultProps?: Record<string, any>;
}

class NodeFactory {
  private registry: Record<string, NodeTypeRegistration> = {};
  private fallbackComponent?: NodeComponent;

  /**
   * Register a node type with a component
   * @param type - Node type identifier (matches Python node class type_name)
   * @param component - React component or renderer type
   * @param options - Additional registration options
   */
  register(
    type: string, 
    component: NodeComponent | NodeRenderer,
    options: { isParametersNode?: boolean; defaultProps?: Record<string, any> } = {}
  ) {
    const isParametersNode = options.isParametersNode ?? (component === 'parameters');
    const actualComponent = typeof component === 'string' 
      ? this.resolveRenderer(component)
      : component;
    
    this.registry[type] = {
      component: actualComponent,
      isParametersNode,
      defaultProps: options.defaultProps
    };
  }

  /**
   * Register a custom (non-parameters) node component
   * Use this for nodes that have completely custom rendering logic
   */
  registerCustom(type: string, component: NodeComponent, defaultProps?: Record<string, any>) {
    this.register(type, component, { isParametersNode: false, defaultProps });
  }

  /**
   * Register a parameters-based node component
   * Use this for nodes that follow the parameters pattern (generated from Pydantic models)
   */
  registerParameters(type: string, component: NodeComponent, defaultProps?: Record<string, any>) {
    this.register(type, component, { isParametersNode: true, defaultProps });
  }

  /**
   * Set the fallback component for unregistered types
   * Typically set to a builder-generated component for parameters-based rendering
   */
  setFallback(component: NodeComponent) {
    this.fallbackComponent = component;
  }

  /**
   * Get the component for a node type
   * Falls back to registered fallback component if type not found
   */
  get(type: string): NodeComponent | undefined {
    const registration = this.registry[type];
    return registration?.component ?? this.fallbackComponent;
  }

  /**
   * Get full registration info for a node type
   */
  getRegistration(type: string): NodeTypeRegistration | undefined {
    return this.registry[type];
  }

  /**
   * Get all registered node types as a simple component map
   * Compatible with ReactFlow's nodeTypes prop
   */
  getAll(): Record<string, NodeComponent> {
    const result: Record<string, NodeComponent> = {};
    for (const [type, registration] of Object.entries(this.registry)) {
      result[type] = registration.component;
    }
    return result;
  }

  /**
   * Get all registered types
   */
  getRegisteredTypes(): string[] {
    return Object.keys(this.registry);
  }

  /**
   * Check if a type is registered
   */
  has(type: string): boolean {
    return type in this.registry;
  }

  /**
   * Check if a type is a parameters-based node
   */
  isParametersNode(type: string): boolean {
    return this.registry[type]?.isParametersNode ?? false;
  }

  /**
   * Unregister a node type
   */
  unregister(type: string): boolean {
    if (type in this.registry) {
      delete this.registry[type];
      return true;
    }
    return false;
  }

  /**
   * Clear all registrations
   */
  clear() {
    this.registry = {};
    this.fallbackComponent = undefined;
  }

  private resolveRenderer(renderer: NodeRenderer): NodeComponent {
    if (typeof renderer === 'function') {
      return renderer;
    }
    
    // For string types like 'parameters' or 'custom', the caller must have already
    // set up the registry appropriately. This is just for type compatibility.
    throw new Error(`Cannot resolve renderer: ${renderer}. Component must be registered first.`);
  }
}

export const nodeFactory = new NodeFactory();

