import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { PrivateRoutes } from '../../routers/PrivateRoutes';

describe('Pruebas sobre el Private Routes component <PrivateRoutes />  ', () => {

    Storage.prototype.setItem = jest.fn();

    test('Debe mostrar el componente si está autenticado el usuario, y guardar en el localStorage', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Damian'
            }
        }


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <h1>Componente PRIVADO</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // console.log(wrapper.html())
        expect(wrapper.text().trim()).toBe('Componente PRIVADO')
        expect(localStorage.setItem).toHaveBeenCalledWith('Last path', '/')

    });
    
});
