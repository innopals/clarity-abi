import { assertType, test } from 'vitest';
import { OwnableTraitABI, SIP010TraitABI } from '../abis.js';
import type { ClarityAbi } from './abi.js';

test('known abis', () => {
  assertType<ClarityAbi>(SIP010TraitABI);
  assertType<ClarityAbi>(OwnableTraitABI);
});
