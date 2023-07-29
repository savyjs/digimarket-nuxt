import {defineEventHandler} from "h3";

export default defineEventHandler((event) => {
    let product: Zoho.Product = {}
    product.name = "Product number 2"
    product.variants = [
        {
            sku: event.context.params.sku
        }
    ]
    return product
})