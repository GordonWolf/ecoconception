import React from "react";
import './nospat.css'
import imgnospat from './assets/images/nos-patisseries.webp'


function NosPat() {
    return (
        <div className="row">
            <div className="col1">
                    <img src={imgnospat} alt="patisserie" className="photo1"/>
            </div>
            <div className="col2">
                <div>
                    <text>Nos pâtisseries</text>
                </div>
                <div>
                    <text>Créations originales, grands classiquess revisités, gâteaux de voyage ou pour vos événements, découvrez le catalogue de nos produits disponibles en boutique...</text>
                </div>
            </div>
        </div>
    );
}

export default NosPat;