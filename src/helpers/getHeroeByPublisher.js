import { heroes } from "../data/Heroes"

export const getHeroeByPublisher = (publisher)=>{

    const validPublisher = ['DC Comics', 'Marvel Comics']
    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} no es un término válido, o es desconocido.`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}