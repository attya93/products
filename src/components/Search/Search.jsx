import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { seachProduct } from '../../features/Products/Products'
import './Search.css'

function Search() {
    const [search, setSearch] = useState('')
    const disptch = useDispatch()
    const handleUserInput = (event) => {
        setSearch(event.target.value)
        disptch(seachProduct(event.target.value))
    }
  return (
    <div className="row height d-flex justify-content-center align-items-center">
    <div className="col">
      <div className="form">
        <i className="fa fa-search"></i>
        <input type="text" 
        value={search}
        onChange={handleUserInput} 
        className="form-control form-input" 
        placeholder="Search anything..."/>
      </div>
      
    </div>
    
  </div>
  )
}

export default Search