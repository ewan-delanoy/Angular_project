import { ProductType } from "./product-type"

export interface Product {
    productID: number
    name: string
    productType: string // internally we convert that to ProductType
    unitPrice: number
    description: string
    stockpiled: number
}
