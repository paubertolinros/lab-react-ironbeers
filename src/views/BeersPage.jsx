import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useState, useEffect } from 'react';

//<p>Not beers found by {searchBeer}, sorry</p>
const BeersPage = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchBeer, setSearchBeer] = useState("");

  const fetchData = async () => {
    try {
      const result = await axios('https://ih-beers-api2.herokuapp.com/beers');
      if (result) {
        setAllBeers(result.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`);
        if (result) {
        setAllBeers(result.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        };
      } catch (error) {
        console.error(error)
      };
    };
    fetchData();
    setSearchBeer(e.target.value)
  };

  return (
    <>
      <NavBar />
      <section className="beers_page_container">
        <div className="search_container">
          <label>Search a beer by name</label>
          <input type="text" value={searchBeer} onChange={handleChange} />
        </div>
        {loading && <p>Loading...</p>}
        {!loading && allBeers &&
          <div className='beers_container_map'>
            {allBeers.map((beer) => {
              return (
                <div className="beer_container" key={beer._id}>
                  <div className="beer_image"> 
                    <img src={beer.image_url} alt={beer.name} />
                  </div>
                  <div className="beer-info"> 
                    <Link to={`/beers/${beer._id}`} className="custom_link_beers">{beer.name}</Link>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </div>
              )
            })  }
          </div>}
        {error && <p>Something went wrong! Couldn't find beers</p>}
      </section>
    </>
  )
}

export default BeersPage;