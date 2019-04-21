const FIRST_PRODUCT = {
  id: 1,
  attributes: {
    name: 'First Test Product',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque in neque vitae tincidunt. In gravida eu ipsum non condimentum. Curabitur libero leo, gravida a dictum vestibulum, sollicitudin vel quam.',
    image_url: 'https://img.commercelayer.io/skus/1.png',
  },
  relationships: {
    prices: {
      data: [{ id: 1 }],
    },
  },
}

const SECOND_PRODUCT = {
  id: 2,
  attributes: {
    name: 'Second Test Product',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque in neque vitae tincidunt. In gravida eu ipsum non condimentum. Curabitur libero leo, gravida a dictum vestibulum, sollicitudin vel quam.',
    image_url: 'https://img.commercelayer.io/skus/1.png',
  },
  relationships: {
    prices: {
      data: [{ id: 2 }],
    },
  },
}

const INCLUDES = [
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
]

export const PRODUCTS = {
  data: [FIRST_PRODUCT, SECOND_PRODUCT],
  included: INCLUDES,
  meta: {
    page_count: 1,
    record_count: 2,
  },
}

export const PRODUCT = {
  data: FIRST_PRODUCT,
  included: INCLUDES,
}
