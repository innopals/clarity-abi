/* eslint-disable */
export default {
  functions: [
    {
      name: 'accumulate_division',
      access: 'private',
      args: [
        {
          name: 'x_a_pre',
          type: {
            tuple: [
              {
                name: 'a_pre',
                type: 'int128',
              },
              {
                name: 'use_deci',
                type: 'bool',
              },
              {
                name: 'x_pre',
                type: 'int128',
              },
            ],
          },
        },
        {
          name: 'rolling_a_sum',
          type: {
            tuple: [
              {
                name: 'a',
                type: 'int128',
              },
              {
                name: 'sum',
                type: 'int128',
              },
            ],
          },
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'a',
              type: 'int128',
            },
            {
              name: 'sum',
              type: 'int128',
            },
          ],
        },
      },
    },
    {
      name: 'accumulate_product',
      access: 'private',
      args: [
        {
          name: 'x_a_pre',
          type: {
            tuple: [
              {
                name: 'a_pre',
                type: 'int128',
              },
              {
                name: 'use_deci',
                type: 'bool',
              },
              {
                name: 'x_pre',
                type: 'int128',
              },
            ],
          },
        },
        {
          name: 'rolling_x_p',
          type: {
            tuple: [
              {
                name: 'product',
                type: 'int128',
              },
              {
                name: 'x',
                type: 'int128',
              },
            ],
          },
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'product',
              type: 'int128',
            },
            {
              name: 'x',
              type: 'int128',
            },
          ],
        },
      },
    },
    {
      name: 'check-is-owner',
      access: 'private',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'div-down',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'uint128',
        },
        {
          name: 'b',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'div-up',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'uint128',
        },
        {
          name: 'b',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'exp-fixed',
      access: 'private',
      args: [
        {
          name: 'x',
          type: 'int128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'int128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'exp-pos',
      access: 'private',
      args: [
        {
          name: 'x',
          type: 'int128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'int128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-position-given-burn-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'total-supply',
          type: 'uint128',
        },
        {
          name: 'token-amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'dx',
              type: 'uint128',
            },
            {
              name: 'dy',
              type: 'uint128',
            },
          ],
        },
      },
    },
    {
      name: 'get-position-given-mint-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'total-supply',
          type: 'uint128',
        },
        {
          name: 'token-amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'dx',
              type: 'uint128',
            },
            {
              name: 'dy',
              type: 'uint128',
            },
          ],
        },
      },
    },
    {
      name: 'get-price-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-token-given-position-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'total-supply',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'dy',
              type: 'uint128',
            },
            {
              name: 'token',
              type: 'uint128',
            },
          ],
        },
      },
    },
    {
      name: 'get-x-given-price-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'price',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-x-given-y-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-x-in-given-y-out-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-y-given-price-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'price',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-y-given-x-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-y-in-given-x-out-internal',
      access: 'private',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'ln-fixed',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'int128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'int128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'ln-priv',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'int128',
        },
      ],
      outputs: {
        type: 'int128',
      },
    },
    {
      name: 'log-fixed',
      access: 'private',
      args: [
        {
          name: 'arg',
          type: 'int128',
        },
        {
          name: 'base',
          type: 'int128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'int128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'mul-down',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'uint128',
        },
        {
          name: 'b',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'mul-up',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'uint128',
        },
        {
          name: 'b',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'pow-down',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'uint128',
        },
        {
          name: 'b',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'pow-fixed',
      access: 'private',
      args: [
        {
          name: 'x',
          type: 'uint128',
        },
        {
          name: 'y',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'pow-priv',
      access: 'private',
      args: [
        {
          name: 'x',
          type: 'uint128',
        },
        {
          name: 'y',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'pow-up',
      access: 'private',
      args: [
        {
          name: 'a',
          type: 'uint128',
        },
        {
          name: 'b',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'rolling_div_sum',
      access: 'private',
      args: [
        {
          name: 'n',
          type: 'int128',
        },
        {
          name: 'rolling',
          type: {
            tuple: [
              {
                name: 'seriesSum',
                type: 'int128',
              },
              {
                name: 'term',
                type: 'int128',
              },
              {
                name: 'x',
                type: 'int128',
              },
            ],
          },
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'seriesSum',
              type: 'int128',
            },
            {
              name: 'term',
              type: 'int128',
            },
            {
              name: 'x',
              type: 'int128',
            },
          ],
        },
      },
    },
    {
      name: 'rolling_sum_div',
      access: 'private',
      args: [
        {
          name: 'n',
          type: 'int128',
        },
        {
          name: 'rolling',
          type: {
            tuple: [
              {
                name: 'num',
                type: 'int128',
              },
              {
                name: 'seriesSum',
                type: 'int128',
              },
              {
                name: 'z_squared',
                type: 'int128',
              },
            ],
          },
        },
      ],
      outputs: {
        type: {
          tuple: [
            {
              name: 'num',
              type: 'int128',
            },
            {
              name: 'seriesSum',
              type: 'int128',
            },
            {
              name: 'z_squared',
              type: 'int128',
            },
          ],
        },
      },
    },
    {
      name: 'add-to-position',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'max-dy',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dx',
                  type: 'uint128',
                },
                {
                  name: 'dy',
                  type: 'uint128',
                },
                {
                  name: 'supply',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'create-pool',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'pool-owner',
          type: 'principal',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'pause',
      access: 'public',
      args: [
        {
          name: 'new-paused',
          type: 'bool',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'reduce-position',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'percent',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dx',
                  type: 'uint128',
                },
                {
                  name: 'dy',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-contract-owner',
      access: 'public',
      args: [
        {
          name: 'owner',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-end-block',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-end-block',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-fee-rate-x',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'fee-rate-x',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-fee-rate-y',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'fee-rate-y',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-fee-rebate',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'fee-rebate',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-max-in-ratio',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-max-in-ratio',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-max-out-ratio',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-max-out-ratio',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-oracle-average',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-oracle-average',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-oracle-enabled',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'enabled',
          type: 'bool',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-pool-owner',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'pool-owner',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-start-block',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-start-block',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-switch-threshold',
      access: 'public',
      args: [
        {
          name: 'new-threshold',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-threshold-x',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-threshold',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'set-threshold-y',
      access: 'public',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'new-threshold',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'swap-helper',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'min-dy',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'swap-helper-a',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-z-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'min-dz',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'swap-helper-b',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-z-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-w-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'factor-z',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'min-dw',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'swap-helper-c',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-z-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-w-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-v-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'factor-z',
          type: 'uint128',
        },
        {
          name: 'factor-w',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'min-dv',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'swap-x-for-y',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'min-dy',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dx',
                  type: 'uint128',
                },
                {
                  name: 'dy',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'swap-y-for-x',
      access: 'public',
      args: [
        {
          name: 'token-x-trait',
          type: 'trait_reference',
        },
        {
          name: 'token-y-trait',
          type: 'trait_reference',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
        {
          name: 'min-dx',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dx',
                  type: 'uint128',
                },
                {
                  name: 'dy',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'check-pool-status',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'fee-helper',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'fee-helper-a',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'token-z',
          type: 'principal',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'fee-helper-b',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'token-z',
          type: 'principal',
        },
        {
          name: 'token-w',
          type: 'principal',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'factor-z',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'fee-helper-c',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'token-z',
          type: 'principal',
        },
        {
          name: 'token-w',
          type: 'principal',
        },
        {
          name: 'token-v',
          type: 'principal',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'factor-z',
          type: 'uint128',
        },
        {
          name: 'factor-w',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-balances',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'balance-x',
                  type: 'uint128',
                },
                {
                  name: 'balance-y',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-contract-owner',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'principal',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-end-block',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-fee-rate-x',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-fee-rate-y',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-fee-rebate',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-helper',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-helper-a',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'token-z',
          type: 'principal',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-helper-b',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'token-z',
          type: 'principal',
        },
        {
          name: 'token-w',
          type: 'principal',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'factor-z',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-helper-c',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'token-z',
          type: 'principal',
        },
        {
          name: 'token-w',
          type: 'principal',
        },
        {
          name: 'token-v',
          type: 'principal',
        },
        {
          name: 'factor-x',
          type: 'uint128',
        },
        {
          name: 'factor-y',
          type: 'uint128',
        },
        {
          name: 'factor-z',
          type: 'uint128',
        },
        {
          name: 'factor-w',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-invariant',
      access: 'read_only',
      args: [
        {
          name: 'balance-x',
          type: 'uint128',
        },
        {
          name: 'balance-y',
          type: 'uint128',
        },
        {
          name: 't',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-max-in-ratio',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-max-out-ratio',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-oracle-average',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-oracle-enabled',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'bool',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-oracle-instant',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-oracle-resilient',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-pool-details',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
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
                  name: 'fee-rebate',
                  type: 'uint128',
                },
                {
                  name: 'max-in-ratio',
                  type: 'uint128',
                },
                {
                  name: 'max-out-ratio',
                  type: 'uint128',
                },
                {
                  name: 'oracle-average',
                  type: 'uint128',
                },
                {
                  name: 'oracle-enabled',
                  type: 'bool',
                },
                {
                  name: 'oracle-resilient',
                  type: 'uint128',
                },
                {
                  name: 'pool-id',
                  type: 'uint128',
                },
                {
                  name: 'pool-owner',
                  type: 'principal',
                },
                {
                  name: 'start-block',
                  type: 'uint128',
                },
                {
                  name: 'threshold-x',
                  type: 'uint128',
                },
                {
                  name: 'threshold-y',
                  type: 'uint128',
                },
                {
                  name: 'total-supply',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-pool-details-by-id',
      access: 'read_only',
      args: [
        {
          name: 'pool-id',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
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
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-pool-exists',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          optional: {
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
                name: 'fee-rebate',
                type: 'uint128',
              },
              {
                name: 'max-in-ratio',
                type: 'uint128',
              },
              {
                name: 'max-out-ratio',
                type: 'uint128',
              },
              {
                name: 'oracle-average',
                type: 'uint128',
              },
              {
                name: 'oracle-enabled',
                type: 'bool',
              },
              {
                name: 'oracle-resilient',
                type: 'uint128',
              },
              {
                name: 'pool-id',
                type: 'uint128',
              },
              {
                name: 'pool-owner',
                type: 'principal',
              },
              {
                name: 'start-block',
                type: 'uint128',
              },
              {
                name: 'threshold-x',
                type: 'uint128',
              },
              {
                name: 'threshold-y',
                type: 'uint128',
              },
              {
                name: 'total-supply',
                type: 'uint128',
              },
            ],
          },
        },
      },
    },
    {
      name: 'get-pool-owner',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'principal',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-position-given-burn',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'token-amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dx',
                  type: 'uint128',
                },
                {
                  name: 'dy',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-position-given-mint',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'token-amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dx',
                  type: 'uint128',
                },
                {
                  name: 'dy',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-price',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-start-block',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-switch-threshold',
      access: 'read_only',
      args: [],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-threshold-x',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-threshold-y',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-token-given-position',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
        {
          name: 'max-dy',
          type: {
            optional: 'uint128',
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              tuple: [
                {
                  name: 'dy',
                  type: 'uint128',
                },
                {
                  name: 'token',
                  type: 'uint128',
                },
              ],
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-x-given-price',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'price',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-x-given-y',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-x-in-given-y-out',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dy',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-y-given-price',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'price',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-y-given-x',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'get-y-in-given-x-out',
      access: 'read_only',
      args: [
        {
          name: 'token-x',
          type: 'principal',
        },
        {
          name: 'token-y',
          type: 'principal',
        },
        {
          name: 'factor',
          type: 'uint128',
        },
        {
          name: 'dx',
          type: 'uint128',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'is-paused',
      access: 'read_only',
      args: [],
      outputs: {
        type: 'bool',
      },
    },
  ],
  variables: [
    {
      name: 'ERR-EXCEEDS-MAX-SLIPPAGE',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-INVALID-EXPONENT',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-INVALID-LIQUIDITY',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-INVALID-POOL',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-MAX-IN-RATIO',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-MAX-OUT-RATIO',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-NO-LIQUIDITY',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-NOT-AUTHORIZED',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-ORACLE-AVERAGE-BIGGER-THAN-ONE',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-ORACLE-NOT-ENABLED',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-OUT-OF-BOUNDS',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-PAUSED',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-PERCENT-GREATER-THAN-ONE',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-POOL-ALREADY-EXISTS',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-PRODUCT-OUT-OF-BOUNDS',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-SWITCH-THRESHOLD-BIGGER-THAN-ONE',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-X-OUT-OF-BOUNDS',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'ERR-Y-OUT-OF-BOUNDS',
      type: {
        response: {
          ok: 'none',
          error: 'uint128',
        },
      },
      access: 'constant',
    },
    {
      name: 'MAX_NATURAL_EXPONENT',
      type: 'int128',
      access: 'constant',
    },
    {
      name: 'MAX_POW_RELATIVE_ERROR',
      type: 'uint128',
      access: 'constant',
    },
    {
      name: 'MILD_EXPONENT_BOUND',
      type: 'uint128',
      access: 'constant',
    },
    {
      name: 'MIN_NATURAL_EXPONENT',
      type: 'int128',
      access: 'constant',
    },
    {
      name: 'ONE_8',
      type: 'uint128',
      access: 'constant',
    },
    {
      name: 'UNSIGNED_ONE_8',
      type: 'int128',
      access: 'constant',
    },
    {
      name: 'x_a_list',
      type: {
        list: {
          type: {
            tuple: [
              {
                name: 'a_pre',
                type: 'int128',
              },
              {
                name: 'use_deci',
                type: 'bool',
              },
              {
                name: 'x_pre',
                type: 'int128',
              },
            ],
          },
          length: 10,
        },
      },
      access: 'constant',
    },
    {
      name: 'x_a_list_no_deci',
      type: {
        list: {
          type: {
            tuple: [
              {
                name: 'a_pre',
                type: 'int128',
              },
              {
                name: 'use_deci',
                type: 'bool',
              },
              {
                name: 'x_pre',
                type: 'int128',
              },
            ],
          },
          length: 1,
        },
      },
      access: 'constant',
    },
    {
      name: 'contract-owner',
      type: 'principal',
      access: 'variable',
    },
    {
      name: 'paused',
      type: 'bool',
      access: 'variable',
    },
    {
      name: 'pool-nonce',
      type: 'uint128',
      access: 'variable',
    },
    {
      name: 'switch-threshold',
      type: 'uint128',
      access: 'variable',
    },
  ],
  maps: [
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
            name: 'fee-rebate',
            type: 'uint128',
          },
          {
            name: 'max-in-ratio',
            type: 'uint128',
          },
          {
            name: 'max-out-ratio',
            type: 'uint128',
          },
          {
            name: 'oracle-average',
            type: 'uint128',
          },
          {
            name: 'oracle-enabled',
            type: 'bool',
          },
          {
            name: 'oracle-resilient',
            type: 'uint128',
          },
          {
            name: 'pool-id',
            type: 'uint128',
          },
          {
            name: 'pool-owner',
            type: 'principal',
          },
          {
            name: 'start-block',
            type: 'uint128',
          },
          {
            name: 'threshold-x',
            type: 'uint128',
          },
          {
            name: 'threshold-y',
            type: 'uint128',
          },
          {
            name: 'total-supply',
            type: 'uint128',
          },
        ],
      },
    },
    {
      name: 'pools-id-map',
      key: 'uint128',
      value: {
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
    },
  ],
  fungible_tokens: [],
  non_fungible_tokens: [],
  epoch: 'Epoch22',
  clarity_version: 'Clarity2',
} as const;
