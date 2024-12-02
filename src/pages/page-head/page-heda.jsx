import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import './head.scss';

function PageHead(){
  return(
    <div className="main">
      <Helmet>
        <title>Jobby/time</title>
      </Helmet>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default PageHead;