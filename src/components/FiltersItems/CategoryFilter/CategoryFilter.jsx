import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoys, fetchProducts } from '../../../features/Products/Products';
function CategoryFilter() {
    const dispatch = useDispatch()
    const apiData = useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchCategoys())    
    },[])


    const handleCategoryChange = (item) => {
        console.log(item)
        dispatch(fetchProducts(item))
    }

    if(apiData.isLoading){
        return <div className="text-center">Loading...</div>
    }
    if(apiData.error){
        return <div className="text-center text-danger">Error</div>
    }

  return (
    <Dropdown>
    <Dropdown.Toggle className="border-0 shadow-0 fw-bold d-flex  justify-content-between align-items-center w-100" variant="" id="dropdown-basic">
      Category Filter
    </Dropdown.Toggle>

    <Dropdown.Menu className='w-100'>
    {apiData.categories.map((item)=>{
        return <Dropdown.Item key={item} onClick={()=> handleCategoryChange(item)}>{item}</Dropdown.Item>
    })}
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default CategoryFilter