import { assertType, test } from 'vitest';
import ammSwapPoolV11 from '../../test/abis/amm-swap-pool-v1-1.js';
import type { ClarityAbiFunction } from './abi.js';
import type {
  GetFunctionByName,
  GetMapKeyType,
  GetMapNames,
  GetMapValueType,
  GetVariableNames,
  GetVariableType,
  InferClarityAbiType,
  InferClarityAbiTypeTuple,
  MergeUnion,
} from './utils.js';

test('infer abi types', () => {
  assertType<
    InferClarityAbiType<{
      list: { type: { tuple: [{ name: 'a'; type: 'uint128' }] }; length: 200 };
    }>
  >([{ a: 1n }]);
});

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

test('infer function args type', () => {
  type InferFunctionArgsType<
    Functions extends readonly ClarityAbiFunction[],
    FunctionName extends string,
    V extends ClarityAbiFunction['access'] = 'read_only' | 'public',
    TFunction extends ClarityAbiFunction | never = GetFunctionByName<
      Functions,
      FunctionName,
      V
    >,
    TArgs extends
      | Record<string, unknown>
      | never = TFunction extends ClarityAbiFunction
      ? InferClarityAbiTypeTuple<TFunction['args']>
      : never,
  > = [TArgs] extends [never]
    ? { args?: unknown }
    : {} extends TArgs
      ? {}
      : { args: TArgs };

  async function callReadonlyFn<
    Functions extends readonly ClarityAbiFunction[],
    FN extends Functions[number]['name'],
    Args extends InferFunctionArgsType<Functions, FN, 'read_only' | 'public'>,
  >(_: {
    abi: Functions;
    functionName: FN;
    args: Args extends { args: Record<string, unknown> }
      ? MergeUnion<Args['args']>
      : unknown;
  }) {
    void _;
  }
  callReadonlyFn({
    abi: ammSwapPoolV11.functions,
    functionName: 'get-price',
    args: {
      factor: 100n,
      'token-x': 'SP123.456',
      'token-y': 'SP789.000',
    },
  });
});
