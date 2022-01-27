import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../components/search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => (
  { 
    //@ts-ignore
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }
))


describe('Pruebas en <SearchScreen />', () => {
  test('Debe mostrarse con valores por defecto', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un Heroe');
  });

  test('Debe mostrar a Batman y el input con el valor del query String', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>
    )

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('Debería de mostrar un error si no se encuentra resultado', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman13546']}>
        <SearchScreen />
      </MemoryRouter>
    )
    expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay registro para batman13546');
  });


  test('Debe cambiar de ruta por Navigate', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    })

    //@ts-ignore
    wrapper.find('form').prop('onSubmit')({preventDefault(){}})

    expect(mockNavigate).toHaveBeenCalled();

    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
