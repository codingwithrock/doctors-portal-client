import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';


const Dashboard = () => {
    return (
        <main>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                      
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='/dashboard/users'>USER Collection</Link></li>
                    
                   
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </main>

    );
};

export default Dashboard;