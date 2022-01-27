import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
  test('Debe retornar el Estado por Default', () => {
    const state =  authReducer({logged:false}, {})

    expect(state).toEqual({logged:false});

  });
  
  test('Debe de autenticar y colocar el "user.name"', () => {
    const action ={
        type: types.login,
        payload:{
            name: 'Wara Test'
        }
    }

    const state = authReducer({logged:false}, action)

    expect(state).toEqual({
        logged: true,
        name: 'Wara Test'
    })
  });

  test('Debe eliminar el usuario', () => {
    const action ={
        type: types.logout
    }

    const state =  authReducer({logged: true, name: 'Wara'},action)
    console.log(state)
    expect(state).toEqual({logged: false});

  });
  
});
