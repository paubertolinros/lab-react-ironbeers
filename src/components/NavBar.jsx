import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="navbar_container">
      <Link to="/" className="custom_link_nav">Home</Link>
    </section>
  )
}

export default NavBar