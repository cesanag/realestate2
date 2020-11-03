import React from 'react';
import './dashboard.scss';
import {Copy} from 'utilities/copy'

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="button-name">
                {Copy.listings}
            </div>
            <div className="button-container">
                <button className="button button-new">
                {Copy.create}
                </button>
                {/*
                    <button className="button button-edit">
                    Modifica
                </button>
                    */}
                <button className="button button-delete">
                {Copy.delete}
                </button>
            </div>
        </div> 
    );
  }
        
    