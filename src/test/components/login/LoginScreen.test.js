import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { MarvelScreen } from '../../../components/marvel/MarvelScreen';




describe('Pruebas en LoginScreen', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/marvel' element={<MarvelScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('Debe de hacer match con Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de realizar el Dispatch y la Navegación', () => {
      
        wrapper.find('button').simulate('click')

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            "payload":{
                "name": "Ivan",
            },
            "type": types.login,
        });
    });
    

});
