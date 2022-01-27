import React from 'react';

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas en DashboardRoutes', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Testing Dashboard'
        }
    }



    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount
        (
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html())

        expect(wrapper).toMatchSnapshot();

        // console.log(wrapper.find( '.text-info' ).text().trim());

        expect(wrapper.find( '.text-info' ).text().trim()).toBe('Testing Dashboard');

    });

    test('Debe mostrarse correctamente DC', () => {
        const wrapper = mount
        (
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html())

        expect(wrapper).toMatchSnapshot();

        // console.log(wrapper.find( '.text-info' ).text().trim());

        expect(wrapper.find( '.text-info' ).text().trim()).toBe('Testing Dashboard');
    });
    

});
