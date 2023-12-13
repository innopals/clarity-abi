import { assertType, test } from 'vitest';
import { SIP010TraitABI } from '../abis.js';
import type { ClarityAbi } from './abi.js';
import type {
  GetFunctionsByVisibility,
  GetMapKeyType,
  GetMapNames,
  GetMapValueType,
  GetVariableNames,
  GetVariableType,
  InferClarityAbiType,
  InferReadonlyCallParameterType,
  InferReadonlyCallResultType,
} from './infer.js';

test('infer tuple', () => {
  const TupleABI = {
    tuple: [
      {
        name: 'amount',
        type: 'uint128',
      },
      {
        name: 'sender',
        type: 'principal',
      },
    ],
  } as const;
  assertType<InferClarityAbiType<typeof TupleABI>>({
    amount: 123n,
    sender: 'SP123',
  });
});

test('infer readonly function type', () => {
  async function callReadonly<
    ABI extends ClarityAbi,
    FN extends keyof GetFunctionsByVisibility<ABI['functions'], 'read_only'>,
    TParams = InferReadonlyCallParameterType<ABI, FN>,
    TResult = InferReadonlyCallResultType<ABI, FN>,
  >(_abi: ABI, _fn: FN, _options: TParams): Promise<TResult> {
    return null as unknown as TResult;
  }

  const r = callReadonly(SIP010TraitABI, 'get-balance', {
    contract: 'SP123.456',
    args: { who: 'SP123' },
  });
  assertType<
    Promise<
      | {
          type: 'success';
          value: bigint;
        }
      | {
          type: 'error';
          value: null;
        }
    >
  >(r);
});

test('infer map key value', () => {
  const ABIMaps = [
    {
      name: 'pools-data-map',
      key: {
        tuple: [
          {
            name: 'factor',
            type: 'uint128',
          },
          {
            name: 'token-x',
            type: 'principal',
          },
          {
            name: 'token-y',
            type: 'principal',
          },
        ],
      },
      value: {
        tuple: [
          {
            name: 'balance-x',
            type: 'uint128',
          },
          {
            name: 'balance-y',
            type: 'uint128',
          },
          {
            name: 'end-block',
            type: 'uint128',
          },
          {
            name: 'fee-rate-x',
            type: 'uint128',
          },
          {
            name: 'fee-rate-y',
            type: 'uint128',
          },
          {
            name: 'oracle-enabled',
            type: 'bool',
          },
          {
            name: 'pool-owner',
            type: 'principal',
          },
        ],
      },
    },
  ] as const;
  assertType<GetMapNames<typeof ABIMaps>>('pools-data-map');
  assertType<GetMapKeyType<typeof ABIMaps, 'pools-data-map'>>({
    factor: 100n,
    'token-x': 'SP123.456',
    'token-y': 'SP789.000',
  });
  assertType<GetMapValueType<typeof ABIMaps, 'pools-data-map'>>({
    'balance-x': 100n,
    'balance-y': 200n,
    'fee-rate-x': 10n,
    'fee-rate-y': 20n,
    'end-block': 0n,
    'oracle-enabled': true,
    'pool-owner': 'SP123',
  });
});

test('infer variable type', () => {
  const ABIVariables = [
    {
      name: 'ONE_8',
      type: 'uint128',
      access: 'constant',
    },
    {
      name: 'contract-owner',
      type: 'principal',
      access: 'variable',
    },
  ] as const;
  assertType<GetVariableNames<typeof ABIVariables, 'constant'>>('ONE_8');
  assertType<GetVariableNames<typeof ABIVariables, 'variable'>>(
    'contract-owner',
  );
  assertType<GetVariableType<typeof ABIVariables, 'ONE_8'>>(100_000_000n);
  assertType<GetVariableType<typeof ABIVariables, 'contract-owner'>>('ST123');
});
