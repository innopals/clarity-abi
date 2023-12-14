export type MergeUnion<T> = {
  [K in keyof T]: T[K];
} & {};

export type Narrow<TType> =
  | (unknown extends TType ? unknown : never)
  | (TType extends Function ? TType : never)
  | (TType extends bigint | boolean | number | string ? TType : never)
  | (TType extends [] ? [] : never)
  | { [K in keyof TType]: Narrow<TType[K]> };
