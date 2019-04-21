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

export const USER = {
  id: 1,
  email: 'michal@test.com',
  firstName: 'Michal',
  password: 'Heslo1234',
}

export const TOKEN = {
  access_token: 'accessToken',
  token_type: 'bearer',
  expires_in: 7200,
  refresh_token: 'refreshToken',
  scope: 'market:335',
  created_at: 1555858950,
  owner_id: 1,
  owner_type: 'customer',
}

export const LOGIN_DATA = {
  id: USER.id,
  type: 'customers',
  links: {
    self: `https://the-amber-brand-12.commercelayer.io/api/customers/${
      USER.id
    }`,
  },
  attributes: {
    email: USER.email,
    status: 'prospect',
    created_at: '2019-04-21T15:02:29.631Z',
    updated_at: '2019-04-21T15:02:29.631Z',
    reference: null,
    metadata: { firstName: USER.firstName },
  },
}

export const ERROR_EMAIL_ALREADY_TAKEN = {
  title: 'has already been taken',
  detail: 'email - has already been taken',
  code: 'VALIDATION_ERROR',
  source: { pointer: '/data/attributes/email' },
  status: '422',
  meta: {
    error: 'taken',
    value: 'test@test.com',
  },
}
