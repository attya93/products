import { useDispatch,useSelector } from "react-redux";
import { clearProduct, fetchProducts } from "../../features/Products/Products";
import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import CPaginiation from "../../components/Paginations/CPaginiation";
import './ProdcutsPage.css'
function ProductsPage() {
    const dispatch = useDispatch()
    const apiData = useSelector(state => state.products)
    const [page,setPage] = useState(1)
    const [productListSize] =useState(5)
    useEffect(() => {
        dispatch(clearProduct())
        dispatch(fetchProducts())    
    },[])


    const handlePageChange = (page) =>{
        setPage(page)
    }
    if(apiData.isLoading){
        return <div className="text-center">Loading...</div>
    }
    if(apiData.error){
        return <div className="text-center text-danger">Error</div>
    }
    const viewedData =()=>{
        return apiData.products
        .slice((page - 1) * productListSize, (page - 1) * productListSize + productListSize)
    }
  return (
    <article className='row p-2 m-0 rounded shadow bg-gradient'>
        <ProductList products={viewedData()} />
        {apiData.products.length > 0 && 
        <CPaginiation total={apiData.products.length /productListSize } current={page} onChangePage={handlePageChange}/>}
    </article>
  )
}

export default ProductsPage