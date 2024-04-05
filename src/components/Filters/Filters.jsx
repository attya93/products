import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CategoryFilter from '../FiltersItems/CategoryFilter/CategoryFilter';
import PriceRangeFilter from '../FiltersItems/PriceRangeFilter/PriceRangeFilter';
import RateFilter from '../FiltersItems/RateFilter/RateFilter';
import { useDispatch } from 'react-redux';
import { RestAllFilters } from '../../features/Products/Products';

function Filters() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRestFilter = () => {
      dispatch(RestAllFilters())
  }

  return (
    <>
      <button className='border-0 bg-transparent text-dark fs-6' onClick={handleShow}>
      <i className="fa-solid fa-filter"></i>
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <section className="d-flex flex-column gap-2">
                <div className='d-flex justify-content-end mx-2'>
                    <button className="border-0 shadow-0 cursor-pointer bg-transparent text-dark" onClick={handleRestFilter}>Rest Filters <i className="fa-solid fa-repeat"></i></button>
                </div>
                <hr/>
                <CategoryFilter/>
                <hr/>
                <PriceRangeFilter/>
                <hr/>
                <RateFilter/>
            </section>  
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Filters