import React from 'react';
import { Link } from 'react-router-dom';

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const imgagePath = `/assets/${id}.jpg`

  return (
    <div className="animate__animated animate__bounceIn">
      <div className='card'>
        <Link to={`/heroe/${id}`} >
          <img src={imgagePath} alt={superhero} className='card-img' />
        </Link>
        <div className="card-body">
          <h4 className='card-title text-uppercase' >{superhero}</h4>
          <p className='card-text text-center text-muted'>{alter_ego}</p>

          {(alter_ego !== characters) && <p className='card-text text-center text-muted'>{characters}</p>}
          <p className="card-text text-muted">{first_appearance}</p>

          <button type='button' className='btn btn-lg btn btn-outline-info'>
            <Link to={`/heroe/${id}`} >Ver Más..</Link>
          </button>

        </div>
      </div>

    </div>
  )
};
