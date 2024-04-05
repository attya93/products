import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <article className="row p-0 m-0 error_page_container ">
      <section className='col-12 m-auto justify-content-center align-items-center'>
        <div className='text-center'>
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link className='btn btn-outline-primary' to="/">Go Home</Link>
        </div>
      </section>
    </article>
  )
}

export default ErrorPage