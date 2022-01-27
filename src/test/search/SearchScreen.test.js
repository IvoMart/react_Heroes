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
  
});
