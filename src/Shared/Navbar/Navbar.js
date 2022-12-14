import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext';

const Navbar = () => {

    const { user, logOut } = useContext(userAuthContext);

    const navItem = <React.Fragment>
        <NavLink className='mx-2' to='/'>Home</NavLink>
        <NavLink className='mx-2' to='/about'>About</NavLink>
        <NavLink className='mx-2' to='/appointment'>Appointment</NavLink>
        <NavLink className='mx-2' to='/reviews'>Reviews</NavLink>
        <NavLink className='mx-2' to='/contact-us'>Contact Us</NavLink>
        {

            user ? <>
                <NavLink className='mx-2' to='/dashboard'>Dashboard</NavLink>
                <NavLink onClick={() => logOut()}>Logout</NavLink>
            </>
                :
                <>
                    <NavLink className='mx-2' to='/login'>Login</NavLink>
                    <NavLink className='mx-2' to='/register'>Register</NavLink>
                </>


        }
        <NavLink>{user?.email}</NavLink>
    </React.Fragment>





    return (
        <header>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={1} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost  text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItem}
                    </ul>
                </div>



            <label htmlFor="dashboard-drawer"  tabIndex={2} className="btn absolute right-3 btn-ghost lg:hidden">
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            </nav>
        </header>
    );
};

export default Navbar;