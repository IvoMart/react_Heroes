import React, {useMemo} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../../helpers/getHeroeById';


export const HeroeScreen = () => {
  
  const navigate = useNavigate();
  const handlerReturn = ()=>{
    navigate(-1);
  }

  const {heroeId} = useParams();
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (!heroe) {
    return <Navigate to={'/'} />
  }

  const {id, publisher, alter_ego, characters, first_appearance, superhero} = heroe;
  const imagePath = `/assets/${id}.jpg`
  
  return (
  <div className='row justify-content-around'>
      <h1>Heroe</h1>
      <div className="col-4 animate__animated animate__backInUp">
        <img className='card-img' src={imagePath} alt={superhero} />
      </div>
      <div className="col-6 animate__animated animate__rubberBand">
        <h2>{superhero}</h2>
        <hr />
        <ul className='list-group list-group-flush text-center'>
          <li className='list-group-item'>{alter_ego}</li>
          <li className='list-group-item'>{first_appearance}</li>
          <li className='list-group-item'>{publisher}</li>
        </ul>
        <br />
        <h4 className='h4 mt-3'>Personajes:</h4>
        <p>{characters}</p>

        <button className='btn btn-lg btn-outline-success' onClick={handlerReturn}>Regresar</button>
      </div>
  </div>
  );
};
