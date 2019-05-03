import { ProductType } from '../../../common/types'

type Data = {
  id: string
  attributes: {
    name: string
    description: string
    image_url: string
  }
  relationships: {
    prices: {
      data: ReadonlyArray<{
        id: string
      }>
    }
  }
}

type Included = ReadonlyArray<{
  id: string
  attributes: {
    formatted_amount: string
  }
}>

export const formatProduct = (data: Data, included: Included): ProductType => ({
  id: data.id,
  ...data.attributes,
  price: included.find(
    price => price.id === data.relationships.prices.data[0].id
  )!.attributes,
})
