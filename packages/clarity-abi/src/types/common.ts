export type TPrincipal = `SP${string}` | `ST${string}`;
export type TContractPrincipal = `${TPrincipal}.${string}`;
export type HexString = `0x${string}`;
