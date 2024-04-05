import { memo } from "react";
import Product from "../Product/Product";
function ProductList({products}) {
    return (
   <>
    {products.map(product => <Product className="col-3" key={product.id} product={product}/>) }
   </>
  )
}

export default memo(ProductList)