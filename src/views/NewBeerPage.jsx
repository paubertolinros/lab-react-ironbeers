import { useNavigate} from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import axios from 'axios';


const NewBeerPage = () => {
  const initialState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  }
  const [newBeer, setNewBeer] = useState(initialState);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setNewBeer(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: newBeer.name,
      tagline: newBeer.tagline,
      description: newBeer.description,
      first_brewed: newBeer.first_brewed,
      brewers_tips: newBeer.brewers_tips,
      attenuation_level: parseInt(newBeer.attenuation_level),
      contributed_by: newBeer.contributed_by,
    };
    try {
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
      setNewBeer(initialState)
      Navigate('/beers')
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <NavBar />
      <section className="new_beer_page_container">
        <form className="form">
          <label>Beer Name</label>
          <input type='text' value={newBeer.name} name="name" onChange={handleChange} />

          <label>Tagline</label>
          <input type='text' value={newBeer.tagline} name="tagline" onChange={handleChange} />

          <label>Description</label>
          <input type='text' value={newBeer.description} name="description" onChange={handleChange} />

          <label>First Brewed</label>
          <input type='text' value={newBeer.first_brewed} name="first_brewed" onChange={handleChange} />

          <label>Brewers Tips</label>
          <input type='text' value={newBeer.brewers_tips} name="brewers_tips" onChange={handleChange} />

          <label>Attenuation Level</label>
          <input type='number' value={newBeer.attenuation_level} name="attenuation_level" onChange={handleChange} />

          <label>Countributed By</label>
          <input type='text' value={newBeer.contributed_by} name="contributed_by" onChange={handleChange} />
          
          <div className="button_form">
            <button type="submit" onClick={handleSubmit}> ADD NEW </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewBeerPage;