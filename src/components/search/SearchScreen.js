import React, {useMemo} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { HeroeCard } from '../../data/HeroeCard';
import { getHeroeByName } from '../../helpers/getHeroeByName';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const {search} = useLocation();

  const {q = ""} =  queryString.parse(search);

  
  const [values, handleInputChange] = useForm({
    searchText: q,
  });
  
  const { searchText } = values;
  //@ts-ignore
  const heroeSearch = useMemo(() => getHeroeByName(q), [q]);
  
  const handlerSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }
  
  return (
    <>
      <h1>Buscar Heroe</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h3>Buscar</h3>
          <form onSubmit={handlerSearch}>
            <input type="text" placeholder='Heroe .. ' className='form-control' name='searchText' 
            //@ts-ignore
            onChange={handleInputChange} value={searchText} />

            <button type="submit" className='btn btn-info mt-3' onClick={handlerSearch}>Buscar...</button>
          </form>
        </div>
        <div className="col-4 animate__animated animate__fadeInUp">
          <h4>Resultado</h4>
          {
            (q === '') ? <div className="alert alert-info animate__animated animate__fadeInDown">Buscar un Heroe</div>
                      : (heroeSearch.length === 0) && <div className="alert alert-danger animate__animated animate__fadeInDown">No hay registro para {q}</div>
          }
          {
            heroeSearch.map((heroe)=>(
              <HeroeCard key={heroe.id} {...heroe }/>
            ))
          }
        </div>
      </div>
    </>
  );
};