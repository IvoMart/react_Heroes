import React, {useContext} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogout = ()=>{
        
        dispatch({type: types.logout});

        navigate('/login', {replace: true} )
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={({isActive})=>{ return 'nav-item nav-link ms-5' + (isActive && 'active')}} 
                        to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink className={({isActive})=>{ return 'nav-item nav-link me-5' + (isActive && 'active')}}
                        to="/dc">
                        DC
                    </NavLink>
                    
                    <NavLink className={({isActive})=>{ return 'nav-item nav-link me-5' + (isActive && 'active')}}
                        to="/search">
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{user.name}</span>
                    <button className="nav-item nav-link btn btn-sm text-uppercase" onClick={handleLogout} >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}