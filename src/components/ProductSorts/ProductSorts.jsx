import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { SortProducts } from '../../features/Products/Products';

import './ProductSorts.css'
const LISTOFACTIONS = [
    {id:1, name:'Form A to Z',icon:'fa-solid fa-arrow-down-a-z'},
    {id:2, name:'Form Z to A',icon:'fa-solid fa-arrow-down-a-z'},
    {id:3, name:'Form Low Pice to High Price',icon:'fa-solid fa-arrow-down-1-9'},
    {id:4, name:'Form High Price to Low Price',icon:'fa-solid fa-arrow-down-9-1'},
    {id:5, name:'Form Low Rate to High Rate',icon:'fa-solid fa-arrow-down-wide-short'},
    {id:6, name:'Form High Rate to Low Rate',icon:'fa-solid fa-arrow-up-wide-short'},
]
function ProductSorts() {
    const dispactch = useDispatch()

  const handleProductSort = (item) => {
      dispactch(SortProducts(item))
  }
  return (
    <Dropdown>
    <Dropdown.Toggle className="border-0 shadow-0 fw-bold d-flex  justify-content-between align-items-center w-100" variant="" id="dropdown-basic">
    <i className="fa-solid fa-sort"></i>
    </Dropdown.Toggle>

    <Dropdown.Menu className='dropWidth'>
     {LISTOFACTIONS.map((item)=>(
        <Dropdown.Item key={item.id}  className='d-flex justify-content-between' onClick={()=> handleProductSort(item)}>{item.name} <i className={item.icon}></i></Dropdown.Item>
     ))}
    
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default ProductSorts