export type cart = {
  items: item[]
  addedItems: addedItem[]
  total: number
}

export type item = {
  _id: string
  title: string
  desc: string
  price: number
  img: any
  qty?: number
}

export interface addedItem extends item {
  qty: number
}


