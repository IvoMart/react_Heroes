import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { HeroeScreen } from '../../../components/heroe/HeroeScreen';


describe('Pruebas en el componente <HeroeScreen />', () => {

    test('Debe de mostrar un mensaje si no existe un heroe en la ruta', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <Routes>
                    <Route path='/heroe' element={<HeroeScreen />} />
                    <Route path='/' element={<h1>No existe un heroe</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').text().trim()).toBe('No existe un heroe')

    });

    test('Debería encontrar los datos del heroe que se indica en la ruta (hero id)', () => {
        const heroeID = 'marvel-iron';
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/' + heroeID]}>
                <Routes>
                    <Route path='/heroe/:heroeId' element={<HeroeScreen />} />
                    <Route path='/' element={<h1>No existe un heroe</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('img').prop('src').trim()).toBe(`/assets/${heroeID}.jpg`)
    });

});
