import { assertType, test } from 'vitest';
import ammSwapPoolV11 from '../../test/abis/amm-swap-pool-v1-1.js';
import type {
  GetFunctionByName,
  GetMapKeyType,
  GetMapNames,
  GetMapValueType,
  GetVariableNames,
  GetVariableType,
} from './utils.js';

test('infer function types', () => {
  assertType<
    GetFunctionByName<
      typeof ammSwapPoolV11.functions,
      'accumulate_division',
      'private'
    >
  >(ammSwapPoolV11.functions[0]);
});

test('infer map key value', () => {
  assertType<GetMapNames<typeof ammSwapPoolV11.maps>>('pools-data-map');
  assertType<GetMapKeyType<typeof ammSwapPoolV11.maps, 'pools-data-map'>>({
    factor: 100n,
    'token-x': 'SP123.456',
    'token-y': 'SP789.000',
  });
  assertType<GetMapValueType<typeof ammSwapPoolV11.maps, 'pools-id-map'>>({
    factor: 1n,
    'token-x': 'SP123.456',
    'token-y': 'SP789.000',
  });
});

test('infer variable type', () => {
  assertType<GetVariableNames<typeof ammSwapPoolV11.variables, 'constant'>>(
    'ONE_8',
  );
  assertType<GetVariableNames<typeof ammSwapPoolV11.variables, 'variable'>>(
    'contract-owner',
  );
  assertType<GetVariableType<typeof ammSwapPoolV11.variables, 'ONE_8'>>(
    100_000_000n,
  );
  assertType<
    GetVariableType<typeof ammSwapPoolV11.variables, 'contract-owner'>
  >('ST123');
});
