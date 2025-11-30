/**
 * Validation utility functions for TypeScript.
 * 
 * Provides assertion helpers that throw descriptive errors with context.
 */

/**
 * Assert that a value is defined (not null or undefined)
 * @throws Error if value is null or undefined
 */
export function assertDefined<T>(
  value: T | null | undefined,
  message?: string
): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(message || `Expected value to be defined, but got ${value}`);
  }
}

/**
 * Assert that a value is not null
 * @throws Error if value is null
 */
export function assertNotNull<T>(
  value: T | null,
  message?: string
): asserts value is T {
  if (value === null) {
    throw new Error(message || 'Expected value to be not null');
  }
}

/**
 * Assert that a value matches a specific type predicate
 * @throws Error if predicate returns false
 */
export function assertType<T>(
  value: unknown,
  predicate: (val: unknown) => val is T,
  typeName: string
): asserts value is T {
  if (!predicate(value)) {
    throw new Error(
      `Expected value to be of type ${typeName}, but got ${typeof value}`
    );
  }
}

/**
 * Assert that a value is a valid field value primitive
 */
export function assertFieldValue(
  value: unknown
): asserts value is string | number | boolean | null {
  const type = typeof value;
  if (
    type !== 'string' &&
    type !== 'number' &&
    type !== 'boolean' &&
    value !== null
  ) {
    throw new Error(
      `Expected field value (string | number | boolean | null), but got ${type}`
    );
  }
}

/**
 * Assert that an object has a specific property
 * @throws Error if property doesn't exist
 */
export function assertHasProperty<K extends string>(
  obj: unknown,
  property: K,
  message?: string
): asserts obj is Record<K, unknown> {
  if (typeof obj !== 'object' || obj === null || !(property in obj)) {
    throw new Error(
      message || `Expected object to have property "${property}"`
    );
  }
}

/**
 * Assert that a value is in an array of allowed values
 * @throws Error if value is not in allowed array
 */
export function assertOneOf<T>(
  value: unknown,
  allowed: readonly T[],
  valueName?: string
): asserts value is T {
  if (!allowed.includes(value as T)) {
    const name = valueName || 'value';
    throw new Error(
      `Expected ${name} to be one of [${allowed.join(', ')}], but got: ${value}`
    );
  }
}

/**
 * Validation error class for structured error handling
 */
export class ValidationError extends Error {
  constructor(
    message: string,
    public readonly field?: string,
    public readonly value?: unknown
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Template not found error
 */
export class TemplateNotFoundError extends Error {
  constructor(
    public readonly templateType: string,
    public readonly availableTypes: string[]
  ) {
    super(
      `Template "${templateType}" not found. Available types: ${availableTypes.join(', ')}`
    );
    this.name = 'TemplateNotFoundError';
  }
}

/**
 * Node not found error
 */
export class NodeNotFoundError extends Error {
  constructor(public readonly nodeId: string) {
    super(`Node with id "${nodeId}" not found`);
    this.name = 'NodeNotFoundError';
  }
}
