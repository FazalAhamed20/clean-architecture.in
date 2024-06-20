import product from './product'
import addproduct from './addproduct'

export  default(dependencies:any)=>{
    return {
        productListController:product(dependencies),
        productAddController:addproduct(dependencies)
    }
}