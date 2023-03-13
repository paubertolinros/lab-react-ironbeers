import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

const HomePage = () => {
  return (
    <section className="home_page_container">
      <section className="home-page-beer-section">
        <img src={beers} alt="bar with beers" />
        <Link to='/beers' className="custom_link">All Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
      </section>
      <section className="home-page-beer-section">
        <img src={randomBeer} alt="bar with beers" />
        <Link to='/random-beer' className="custom_link">Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
      </section>
      <section className="home-page-beer-section">
        <img src={newBeer} alt="bar with beers" />
        <Link to='/new-beer' className="custom_link">New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
    </section>
    </section>
  )
}

export default HomePage;