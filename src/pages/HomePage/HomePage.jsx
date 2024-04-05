import Filters from '../../components/Filters/Filters';
import ProductSorts from '../../components/ProductSorts/ProductSorts';
import Search from '../../components/Search/Search';
import ProductsPage from '../ProductsPage/ProductsPage';
import './HomePage.css';

function HomePage() {
  return (
    <>
      
      <div className='m-3 d-flex justify-content-end align-items-center gap-1'>
      <Search/>
      <ProductSorts/>
      <Filters/>
      </div>
      <hr/>
      <ProductsPage/>
    </>
  )
}

export default HomePage