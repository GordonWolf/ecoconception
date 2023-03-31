import React from "react";
import './lechef.css'
import imgLechef from './assets/images/le-chef-1.webp'
import imgLechef2 from './assets/images/le-chef-2.webp'

function Lechef() {
    return (
        <div className="row">
            <div className="col1">
                <div>
                    <text>Le chef</text>
                </div>
                <div>
                    <text>Philippe Lugnac s'amuse à inventer qu'à réinventer, faire briller le répoertoire classique parisien, visiter de nouvelles terres avec attention et donner de l'éclat aux soirées festives qui se prolongent.</text>
                </div>
                <div>
                    <img src={imgLechef} className="photo1"/>
                </div>
            </div>
            <div className="col2">
                <img src={imgLechef2} className="photo1"/>
            </div>
        </div>
    );
}

export default Lechef;