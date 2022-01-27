import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen />', () => {
  test('Debe mostrarse con valores por defecto', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen/>
      </MemoryRouter>
    )
    
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un Heroe');
  });
  
  test('Debe mostrar a Batman y el input con el valor del query String', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen/>
      </MemoryRouter>
    )

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });
 
  test('Debería de mostrar un error si no se encuentra resultado', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman13546']}>
        <SearchScreen/>
      </MemoryRouter>
    )
  expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay registro para batman13546');
  });
  


});
