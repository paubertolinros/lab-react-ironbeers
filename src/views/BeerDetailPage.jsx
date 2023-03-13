import NavBar from '../components/NavBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const BeerDetailPage = () => {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { beerId } = useParams();

  const fetchDataOneBeer = async () => {
    try {
      const onBeer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      if (onBeer) {
        setBeer(onBeer.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.error(error)
    };
  };

  useEffect(() => {
    fetchDataOneBeer();
  }, []);

  return (
    <>
      <NavBar />
      <section className="beer_page_container">
        {loading && <p>Loading...</p>}
        {!loading && beer &&
          <div className="beer_container" key={beer._id}>
            <div className="beer_image">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="beer_info">
              <div className="first">
                <h2>{beer.name}</h2>
                <p>{beer.attenuation_level}</p>
              </div>
              <div className="second">
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
              </div>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </div>}
        {error && <p>Something went wrong! Couldn't find beers</p>}
      </section>
    </>
  )
}

export default BeerDetailPage;