import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-semibold">
                        {
                            isAdmin
                            &&
                            <>
                                <li><Link to='/dashboard'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allusers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/add-a-doctor'>Reported Items</Link></li>
                            </>
                        }
                        {
                            !isAdmin
                            &&
                            <>
                                <li><Link to='/dashboard/add-a-product'>Add a Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;