import { useState } from 'react'
import ReactSlider from 'react-slider'
import './PriceRangeFilter.css'
import { useDispatch } from 'react-redux'
import { setPriceRage } from '../../../features/Products/Products'
const MIN = 0
const MAX = 400
function PriceRangeFilter() {
    const dispatch = useDispatch()
    const [price, setPrice] = useState([MIN,MAX])

    const handleSetPrice = (value) => {
        setPrice(value)
        dispatch(setPriceRage(value))
    }
  return (
    <section className="mx-2 px-1 d-flex flex-column">
        <h6 className="fw-bold">Price Range</h6>
        <p className="text-primary">${MIN} - ${MAX}</p>
        <small>
            current Range:$ {price[1] - price[0]}
        </small>
        <ReactSlider
            className="slider"
            thumbClassName="thumb"
            trackClassName="example-track"
            defaultValue={price}
            pearling
            max={MAX} 
            min={MIN}
            onChange={handleSetPrice}
            minDistance={1}
        />
    </section>
  )
}

export default PriceRangeFilter