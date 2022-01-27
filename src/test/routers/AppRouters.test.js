import React from 'react';

import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';


describe('Pruebas en AppRouters', () => {
    test('Debe dirigir al Login si el user no está autenticado-', () => {

        const context = { user: { logged: false } }

        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('h1').text().trim()).toBe('Login');

    });
    test('Debe mostrar componente de Inicio si está autenticado', () => {

        const context = { user: { logged: true, name: 'Test' } }

        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.navbar').exists() ).toBeTruthy();

    });
    
});
