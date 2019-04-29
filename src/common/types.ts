export type ProductType = {
  id: string
  image_url: string
  name: string
  description: string
  price: {
    formatted_amount: string
  }
}

export type CustomerType = {
  id: string
  attributes: {
    email: string
    metadata: {
      firstName: string
    }
  }
}
