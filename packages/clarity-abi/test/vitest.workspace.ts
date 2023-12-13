import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      name: 'clarity-abi',
      environment: 'node',
      setupFiles: [],
      include: ['./packages/clarity-abi/**/*.test.ts'],
    },
  },
]);
