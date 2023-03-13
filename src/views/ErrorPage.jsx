import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <h2> Sorry, page not found! </h2>
      <Link to='/'>Back home</Link>
    </div>
  )
}

export default ErrorPage