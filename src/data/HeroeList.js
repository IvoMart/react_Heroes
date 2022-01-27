import React, {useMemo} from 'react';
import { getHeroeByPublisher } from '../helpers/getHeroeByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() =>  getHeroeByPublisher(publisher), [publisher]);

    return (
        <div className='row row-cols-md-4 row-cols-sm-1 g-3'>
        {
            heroes.map(heroe => (<HeroeCard key={ heroe.id } {...heroe} />))           
        }
        </div> 
    )
};
