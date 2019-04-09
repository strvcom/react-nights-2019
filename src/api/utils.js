export const formatProduct = (data, included) => ({
  id: data.id,
  ...data.attributes,
  price: included.find(
    price => price.id === data.relationships.prices.data[0].id
  ).attributes,
})
