export default {
  functions: [
    {
      name: 'add-approved-contract',
      access: 'public',
      args: [
        {
          name: 'new-approved-contract',
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
      name: 'burn',
      access: 'public',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
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
      name: 'burn-fixed',
      access: 'public',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
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
      name: 'burn-fixed-many',
      access: 'public',
      args: [
        {
          name: 'senders',
          type: {
            list: {
              type: {
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
              },
              length: 200,
            },
          },
        },
      ],
      outputs: {
        type: {
          response: {
            ok: {
              list: {
                type: {
                  response: {
                    ok: 'bool',
                    error: 'uint128',
                  },
                },
                length: 200,
              },
            },
            error: 'uint128',
          },
        },
      },
    },
    {
      name: 'mint',
      access: 'public',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'recipient',
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
      name: 'mint-fixed',
      access: 'public',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'recipient',
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
      name: 'set-approved-contract',
      access: 'public',
      args: [
        {
          name: 'owner',
          type: 'principal',
        },
        {
          name: 'approved',
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
      name: 'set-decimals',
      access: 'public',
      args: [
        {
          name: 'new-decimals',
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
      name: 'set-name',
      access: 'public',
      args: [
        {
          name: 'new-name',
          type: {
            'string-ascii': {
              length: 32,
            },
          },
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
      name: 'set-symbol',
      access: 'public',
      args: [
        {
          name: 'new-symbol',
          type: {
            'string-ascii': {
              length: 10,
            },
          },
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
      name: 'set-token-uri',
      access: 'public',
      args: [
        {
          name: 'new-uri',
          type: {
            optional: {
              'string-utf8': {
                length: 256,
              },
            },
          },
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
      name: 'transfer',
      access: 'public',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
          type: 'principal',
        },
        {
          name: 'recipient',
          type: 'principal',
        },
        {
          name: 'memo',
          type: {
            optional: {
              buffer: {
                length: 34,
              },
            },
          },
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
      name: 'transfer-fixed',
      access: 'public',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
        {
          name: 'sender',
          type: 'principal',
        },
        {
          name: 'recipient',
          type: 'principal',
        },
        {
          name: 'memo',
          type: {
            optional: {
              buffer: {
                length: 34,
              },
            },
          },
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
      name: 'fixed-to-decimals',
      access: 'read_only',
      args: [
        {
          name: 'amount',
          type: 'uint128',
        },
      ],
      outputs: {
        type: 'uint128',
      },
    },
    {
      name: 'get-balance',
      access: 'read_only',
      args: [
        {
          name: 'who',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-balance-fixed',
      access: 'read_only',
      args: [
        {
          name: 'account',
          type: 'principal',
        },
      ],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
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
      name: 'get-decimals',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-name',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: {
              'string-ascii': {
                length: 32,
              },
            },
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-symbol',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: {
              'string-ascii': {
                length: 10,
              },
            },
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-token-uri',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: {
              optional: {
                'string-utf8': {
                  length: 256,
                },
              },
            },
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-total-supply',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
    {
      name: 'get-total-supply-fixed',
      access: 'read_only',
      args: [],
      outputs: {
        type: {
          response: {
            ok: 'uint128',
            error: 'none',
          },
        },
      },
    },
  ],
  variables: [
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
      name: 'ONE_8',
      type: 'uint128',
      access: 'constant',
    },
    {
      name: 'contract-owner',
      type: 'principal',
      access: 'variable',
    },
    {
      name: 'token-decimals',
      type: 'uint128',
      access: 'variable',
    },
    {
      name: 'token-name',
      type: {
        'string-ascii': {
          length: 32,
        },
      },
      access: 'variable',
    },
    {
      name: 'token-symbol',
      type: {
        'string-ascii': {
          length: 10,
        },
      },
      access: 'variable',
    },
    {
      name: 'token-uri',
      type: {
        optional: {
          'string-utf8': {
            length: 256,
          },
        },
      },
      access: 'variable',
    },
  ],
  maps: [
    {
      name: 'approved-contracts',
      key: 'principal',
      value: 'bool',
    },
  ],
  fungible_tokens: [],
  non_fungible_tokens: [],
  epoch: 'Epoch24',
  clarity_version: 'Clarity2',
} as const;
