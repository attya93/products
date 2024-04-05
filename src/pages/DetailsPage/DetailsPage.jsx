import { useNavigate, useParams } from 'react-router-dom'
import './DetailsPage.css'
import {  useSelector } from 'react-redux'

function DetailsPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const apiData = useSelector(state => state.products)

 const handleBack = () => {
   navigate(-1)
 }
  return (
    apiData.product&&<div className="row d-flex justify-content-center">
    <div className="col-md-10">
        <div className="card">
            <div className="row">
                <div className="col-md-6">
                    <div className="images p-3">
                        <div className="text-center p-4"> 
                          <img id="main-image" src={apiData.product.image} width="250" /> 
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center"> 
                            <i className="fa fa-long-arrow-left" onClick={handleBack}></i> 
                            <span className="mx-2 " onClick={handleBack}>Back</span> </div> 
                            <i className="fa fa-shopping-cart text-muted"></i>
                        </div>
                        <div className="mt-4 mb-3"> 
                          <span className="text-uppercase text-muted brand">
                          {apiData.product.product }
                          </span>
                            <h5 className="text-uppercase">{apiData.product.title}</h5>
                            <div className="price d-flex flex-row align-items-center"> 
                              <span className="act-price">${apiData.product.price}</span>    
                            </div>
                        </div>
                        <p className="about">{apiData.product.description}</p>
                      
                        <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default DetailsPage