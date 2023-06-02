import React from 'react';

require('assets/onboarding.jpg');
import 'assets/OnboardingPage.css';
import {Link} from 'react-router-dom';

const OnboardingPage = () => {

    return (
        <div className='OnboardingContainer'>
            <img src={require('assets/onboarding.jpg')} className='onboardingImage' alt='mobile phone'/>
            <div className='rightMenu'>
                <p className='text'>
                    Mobile layouts manager will help in creating mobile application mockups. Here you can assemble a
                    demo screen from the proposed components, as well as share a link to your layout with another person
                    so that he can estimate it
                </p>
                <span className='getStartBtnContainer'>
                    <Link to={{pathname: '/auth',}}>
                        <p>Get start</p>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default OnboardingPage;