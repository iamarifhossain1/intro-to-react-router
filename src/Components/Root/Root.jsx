import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'
import User from '../User/User';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sidebar></Sidebar>
                {isNavigating && <div className='flex justify-center'><span className="loading loading-spinner loading-xl">Loading....</span></div>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;