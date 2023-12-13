export type MergeUnion<T> = {
  [K in keyof T]: T[K];
} & {};
