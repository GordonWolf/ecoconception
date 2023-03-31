import React from 'react'
import './opdn.css'
import logoElle from './assets/svg/logo-elle.svg'
import logoLeMonde from './assets/svg/logo-lemonde.svg'
import logoVogue from './assets/svg/logo-vogue.svg'
import logoTraveler from './assets/svg/logo-cntraveler.svg'
import logoFDP from './assets/svg/logo-fou-patesserie.svg'

function Opdn() {
    return(
        <div className='main-container'>
            <div className='sub-container'>
                <text className='title'>On parle de nous</text>

            </div>
            <div className='sub-container'>
                <text>Nos dernières parutions dans la presse et sur internet.</text>
            </div>
            <div className='sub-container'>
                <img src={logoElle} alt="logo ELLE" className='photo'></img>
                <img src={logoLeMonde} alt="logo le monde" className='photo'></img>
                <img src={logoVogue} alt="logo vogue" className='photo'></img>
                <img src={logoTraveler} alt="logo Traveler" className='photo'></img>
                <img src={logoFDP} alt="logo fou de patisserie" className='photo'></img>

            </div>
        </div>
    );
}

export default Opdn;