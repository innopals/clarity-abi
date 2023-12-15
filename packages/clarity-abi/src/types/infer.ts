import type {
  ClarityAbiFunction,
  ClarityAbiMap,
  ClarityAbiType,
  ClarityAbiTypeBool,
  ClarityAbiTypeBuffer,
  ClarityAbiTypeInt128,
  ClarityAbiTypeList,
  ClarityAbiTypeNone,
  ClarityAbiTypeOptional,
  ClarityAbiTypePrincipal,
  ClarityAbiTypeResponse,
  ClarityAbiTypeStringAscii,
  ClarityAbiTypeStringUtf8,
  ClarityAbiTypeTraitReference,
  ClarityAbiTypeTuple,
  ClarityAbiTypeUInt128,
  ClarityAbiVariable,
} from './abi.js';
import type { HexString, TContractPrincipal, TPrincipal } from './common.js';
import type { MergeUnion, Narrow } from './utils.js';

type InternalInferClarityAbiTypeTuple<
  T extends ClarityAbiTypeTuple['tuple'],
  R = {},
> = T extends readonly [
  infer F,
  ...infer Rest extends ClarityAbiTypeTuple['tuple'],
]
  ? F extends ClarityAbiTypeTuple['tuple'][number]
    ? InternalInferClarityAbiTypeTuple<
        Rest,
        R & Record<F['name'], InferClarityAbiType<F['type']>>
      >
    : R
  : R;

/**
 * Converts {@link ClarityAbiTypeTuple} to corresponding TypeScript object type.
 *
 * @param T - {@link ClarityAbiTypeTuple} to convert to TypeScript representations
 * @returns TypeScript object type
 */
export type InferClarityAbiTypeTuple<T extends ClarityAbiTypeTuple['tuple']> =
  MergeUnion<InternalInferClarityAbiTypeTuple<T>>;

/**
 * Converts {@link ClarityAbiType} to corresponding TypeScript representations.
 *
 * @param T - {@link ClarityAbiType} to convert to TypeScript representations
 * @returns TypeScript object type or primitive types
 */
export type InferClarityAbiType<T extends ClarityAbiType> =
  T extends ClarityAbiTypeBuffer
    ? Buffer
    : T extends ClarityAbiTypeStringAscii
      ? string
      : T extends ClarityAbiTypeStringUtf8
        ? string
        : T extends ClarityAbiTypeResponse
          ?
              | {
                  type: 'success';
                  value: InferClarityAbiType<T['response']['ok']>;
                }
              | {
                  type: 'error';
                  value: InferClarityAbiType<T['response']['error']>;
                }
          : T extends ClarityAbiTypeOptional
            ? InferClarityAbiType<T['optional']> | null
            : T extends ClarityAbiTypeTuple
              ? InferClarityAbiTypeTuple<T['tuple']>
              : T extends ClarityAbiTypeList
                ? Array<T['list']['type']>
                : T extends ClarityAbiTypeUInt128
                  ? bigint
                  : T extends ClarityAbiTypeInt128
                    ? bigint
                    : T extends ClarityAbiTypeBool
                      ? boolean
                      : T extends ClarityAbiTypePrincipal
                        ? TPrincipal | TContractPrincipal
                        : T extends ClarityAbiTypeTraitReference
                          ? string
                          : T extends ClarityAbiTypeNone
                            ? null
                            : never;

export type GetFunctionByName<
  Functions extends readonly ClarityAbiFunction[],
  FN,
  V extends ClarityAbiFunction['access'] = 'public' | 'read_only',
> = FN extends Functions[number]['name']
  ? Extract<
      Functions[number],
      {
        name: FN;
        access: V;
      }
    >
  : never;

export type GetFunctionArgsType<
  Functions extends
    | readonly ClarityAbiFunction[]
    | readonly unknown[] = readonly ClarityAbiFunction[],
  FN extends string = string,
  V extends ClarityAbiFunction['access'] = 'read_only' | 'public',
  TFunction extends
    ClarityAbiFunction = Functions extends readonly ClarityAbiFunction[]
    ? GetFunctionByName<Functions, FN, V>
    : ClarityAbiFunction,
  TArgs = InferClarityAbiTypeTuple<TFunction['args']>,
> = [TArgs] extends [never]
  ? { args?: unknown }
  : {} extends TArgs
    ? {}
    : { args: TArgs };

export type GetFunctionResultType<
  Functions extends
    | readonly ClarityAbiFunction[]
    | readonly unknown[] = readonly ClarityAbiFunction[],
  FN extends string = string,
  V extends ClarityAbiFunction['access'] = 'read_only' | 'public',
  TFunction extends
    ClarityAbiFunction = Functions extends readonly ClarityAbiFunction[]
    ? GetFunctionByName<Functions, FN, V>
    : ClarityAbiFunction,
  TResult = InferClarityAbiType<TFunction['outputs']['type']>,
> = [TResult] extends [never] ? unknown : TResult;

export type ExtractFunctionsByVisibility<
  Functions extends readonly ClarityAbiFunction[],
  V extends ClarityAbiFunction['access'],
> = Extract<Functions[number], { access: V }>;

export type InferFunctionName<
  Functions extends
    | readonly ClarityAbiFunction[]
    | readonly unknown[] = readonly ClarityAbiFunction[],
  FN extends string | undefined = string,
  V extends ClarityAbiFunction['access'] = ClarityAbiFunction['access'],
> = Functions extends readonly ClarityAbiFunction[]
  ? ExtractFunctionsByVisibility<
      Functions,
      V
    >['name'] extends infer FunctionNames
    ?
        | FunctionNames
        | (FN extends FunctionNames ? FN : never)
        | (ClarityAbiFunction[] extends Functions ? string : never)
    : never
  : FN;

export type InferReadonlyCallParameterType<
  Functions extends
    | readonly ClarityAbiFunction[]
    | readonly unknown[] = readonly ClarityAbiFunction[],
  FN extends string = string,
> = {
  abi: Narrow<Functions>;
  functionName: InferFunctionName<Functions, FN, 'read_only'>;
  sender?: TPrincipal;
  contract: TContractPrincipal;
  stacksEndpoint?: string;
  indexBlockHash?: HexString;
  timeout?: number;
} & (Functions extends readonly ClarityAbiFunction[]
  ? GetFunctionArgsType<Functions, FN, 'read_only'>
  : {});

export type InferReadonlyCallResultType<
  Functions extends
    | readonly ClarityAbiFunction[]
    | readonly unknown[] = readonly ClarityAbiFunction[],
  FN extends string = string,
> = Functions extends readonly ClarityAbiFunction[]
  ? GetFunctionResultType<Functions, FN, 'read_only'>
  : unknown;

export type GetMapNames<Maps extends readonly ClarityAbiMap[]> =
  Maps[number]['name'];

export type GetMapByName<
  Maps extends readonly ClarityAbiMap[],
  MN extends GetMapNames<Maps>,
> = MN extends GetMapNames<Maps> ? Extract<Maps[number], { name: MN }> : never;

export type GetMapKeyType<
  Maps extends readonly ClarityAbiMap[],
  MN extends GetMapNames<Maps>,
  Map extends ClarityAbiMap = GetMapByName<Maps, MN>,
  K = InferClarityAbiType<Map['key']>,
> = K extends never ? never : {} extends K ? never : K;

export type GetMapValueType<
  Maps extends readonly ClarityAbiMap[],
  MN extends GetMapNames<Maps>,
  Map extends ClarityAbiMap = GetMapByName<Maps, MN>,
> = InferClarityAbiType<Map['value']>;

type InternalGetVariablesByMutability<
  T extends readonly ClarityAbiVariable[],
  V extends ClarityAbiVariable['access'],
  R = {},
> = T extends readonly [
  infer F,
  ...infer Rest extends readonly ClarityAbiVariable[],
]
  ? F extends ClarityAbiVariable
    ? InternalGetVariablesByMutability<
        Rest,
        V,
        F extends { access: V } ? R & Record<F['name'], F> : R
      >
    : R
  : R;

export type GetVariablesByMutability<
  Variables extends readonly ClarityAbiVariable[],
  M extends ClarityAbiVariable['access'],
> = MergeUnion<InternalGetVariablesByMutability<Variables, M>>;

export type GetVariableNames<
  Variables extends readonly ClarityAbiVariable[],
  M extends ClarityAbiVariable['access'] = 'variable' | 'constant',
> = keyof GetVariablesByMutability<Variables, M>;

export type GetVariableByName<
  Variables extends readonly ClarityAbiVariable[],
  VN extends Variables[number]['name'],
> = Extract<Variables[number], { name: VN }>;

export type GetVariableType<
  Variables extends readonly ClarityAbiVariable[],
  VN extends Variables[number]['name'],
> = InferClarityAbiType<GetVariableByName<Variables, VN>['type']>;
