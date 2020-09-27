import React from 'react';
import './style/css/Dashboard.css';
import {CopyDashboard} from './Copy/Copy'


function Dashboard() {
    return (
            <div className="dashboard-container">
                <div className="button-name">
                    {CopyDashboard.listings}
                </div>
                <div className="button-container">
                    <button className="button button-new">
                    {CopyDashboard.create}
                    </button>
                    {/*
                        <button className="button button-edit">
                        Modifica
                    </button>
                        */}
                    <button className="button button-delete">
                    {CopyDashboard.delete}
                    </button>
                </div>
            </div>
        
    );
  }

  export default Dashboard;
        
    