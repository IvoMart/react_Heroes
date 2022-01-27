import { heroes } from '../data/Heroes';

export const getHeroeByName = ( name = '') => {
    name = name.toLowerCase();
    if (name === '') {
        return [];
    }
    return heroes.filter(heroes => heroes.superhero.toLowerCase().includes( name) ) ; 
};
