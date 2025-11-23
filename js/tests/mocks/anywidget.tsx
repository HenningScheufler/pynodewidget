import * as React from 'react';
import { vi } from 'vitest';

// Mock state storage
let mockModelData: Record<string, any> = {};

export const setMockModelData = (data: Record<string, any>) => {
  mockModelData = data;
};

export const getMockModelData = () => mockModelData;

export const useModelState = vi.fn((key: string) => {
  const [value, setValue] = React.useState(mockModelData[key]);
  
  // Update mock data when setValue is called
  const wrappedSetValue = (newValue: any) => {
    mockModelData[key] = typeof newValue === 'function' ? newValue(mockModelData[key]) : newValue;
    setValue(newValue);
  };
  
  return [value, wrappedSetValue];
});

export const createRender = vi.fn((Component: React.ComponentType) => {
  return {
    render: ({ model, el }: { model: any; el: HTMLElement }) => {
      return vi.fn();
    }
  };
});

export const useModel = vi.fn(() => ({
  get: (key: string) => mockModelData[key],
  set: (key: string, value: any) => {
    mockModelData[key] = value;
  },
  save_changes: vi.fn(),
}));
