import { useState } from "react"
import { Rating } from '@smastrom/react-rating'
import { useDispatch } from "react-redux"
import { setRateRange } from "../../../features/Products/Products"

function RateFilter() {
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    
    const handleRate = (value) => {
        setRating(value)
        dispatch(setRateRange(value))
    }
  return (
    <section className="mx-2 px-1 d-flex flex-column">
        <h6 className="fw-bold">Products Rate</h6>
        <Rating style={{ maxWidth: "100%",height: "30px" }} value={rating} onChange={handleRate}  />
    </section>
  )
}

export default RateFilter