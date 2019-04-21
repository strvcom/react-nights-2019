export const PRODUCTS = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'First Test Product',
      },
      relationships: {
        prices: {
          data: [{ id: 1 }],
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: 'Second Test Product',
      },
      relationships: {
        prices: {
          data: [{ id: 2 }],
        },
      },
    },
  ],
  included: [
    {
      id: 1,
      attributes: {
        amount_cents: 1000,
        amount_float: 10,
        formatted_amount: '$10',
      },
    },
    {
      id: 2,
      attributes: {
        amount_cents: 2000,
        amount_float: 20,
        formatted_amount: '$20',
      },
    },
  ],
  meta: {
    page_count: 1,
    record_count: 2,
  },
}
