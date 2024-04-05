import { memo } from 'react'
import { Rating } from '@smastrom/react-rating'
import { useNavigate } from "react-router-dom";
import './Product.css'
import { useDispatch } from 'react-redux';
import { setProduct } from '../../features/Products/Products';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Product({product}) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const {id,title,price,image,rating} = product
  const cardStyle = {
    width: '18rem',
    margin: '10px'
  }
  const Linkz = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <p href="#">{children}</p>
    </OverlayTrigger>
  );

  const handleShowProduct = (id) => {
    dispatch(setProduct(id))
    navigate(`/${id}`);
  }
  return (
    <div className="card g-0  rounded shadow" style={cardStyle}>
    <img src={image} className="card-img-top product_img rounded-0" onClick={()=> handleShowProduct(id)} alt={title}/>
    <div className="card-body mt-3 mb-3">
        <div className="row g-0">
            <div className="col-10">
                <h4 className="card-title " onClick={()=> handleShowProduct(id)}>
                <Linkz title={title} id="t-1">
                  {title.length > 10 ? title.slice(0, 10) + '...' : title}
                </Linkz>
               </h4>
                <div className="card-text d-flex justify-content-between align-items-center">
                <Rating style={{width: '80%'}} value={rating.rate} readOnly={true} />
                  ({rating.count})
                </div>
            </div>
            <div className="col-2">
                <i className="bi bi-bookmark-plus fs-2"></i>
            </div>
        </div>
    </div>
    <div className="row align-items-center text-center g-0">
        <div className="col-4">
            <h5>${price}</h5>
        </div>
        <div className="col-8">
            <a href="#" className="btn btn-dark w-100 p-3 rounded-0 rounded-bottom text-warning">ADD TO CART</a>
        </div>
    </div>
</div>
  )
}

export default memo( Product)