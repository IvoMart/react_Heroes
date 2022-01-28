import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { Navbar } from '../../../components/ui/Navbar';


describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Testing Navbar'
        }
    }
    const wrapper = mount
        (
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path='/' element={<Navbar />} />
                        <Route path='/login' element={<LoginScreen />} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )


    test('Debe de mostrar correctamente el nombre', () => {

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.text-info').text().trim()).toBe('Testing Navbar');

    });

    test('Llamar al Logout, Llamar Navigate, Llamar dispatch', () => {

        wrapper.find('.btn').simulate('click');

        expect(contextValue.dispatch).toHaveBeenCalledWith({ "type": types.logout });

        expect(location.pathname).toBe('/');
    });


});
