import { ProductType } from '../../../common/types'

export type Data = {
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

type Meta = {
  page_count: number
}

type Included = ReadonlyArray<{
  id: string
  attributes: {
    formatted_amount: string
  }
}>

export type ProductResponse<T = Data> = {
  data: T
  meta: Meta
  included: Included
}

export const formatProduct = (data: Data, included: Included): ProductType => ({
  id: data.id,
  ...data.attributes,
  price: included.find(
    price => price.id === data.relationships.prices.data[0].id
  )!.attributes,
})
