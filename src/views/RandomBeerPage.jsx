import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState({});

  const fetchDataRandom = async () => {
    try {
      const result = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      setRandomBeer(result.data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchDataRandom();
  }, [])

  return (
    <>
      <NavBar />
      <section className="beer_page_container">
        <div className="beer_container" key={randomBeer._id}>
            <div className="beer_image">
              <img src={randomBeer.image_url} alt={randomBeer.name} />
            </div>
            <div className="beer_info">
              <div className="first">
                <h2>{randomBeer.name}</h2>
              <p>{randomBeer.attenuation_level}</p>
            </div>
            <div className="second">
              <p>{randomBeer.tagline}</p>
              <p>{randomBeer.first_brewed}</p>
            </div>
              <p>{randomBeer.description}</p>
              <p>{randomBeer.contributed_by}</p>
            </div>
          </div>
      </section>
    </>
  )
}

export default RandomBeerPage;