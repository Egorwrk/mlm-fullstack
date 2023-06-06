import React from 'react';
import {Link} from 'react-router-dom';

import 'css/OnboardingPage.css';

require('assets/onboarding.jpg');

const OnboardingPage = () => {

    return (
        <body className='OnboardingContainer'>
            <img src={require('assets/onboarding.jpg')} className='onboardingImage' alt='mobile phone'/>
            <div className='rightMenu'>
                <h3>
                    Mobile layouts manager will help in creating mobile application mockups. Here you can assemble a
                    demo screen from the proposed components, as well as share a link to your layout with another person
                    so that he can estimate it
                </h3>
                <Link to={{pathname: '/auth'}} className='getStartBtnContainer'>
                    Get start
                </Link>
            </div>
        </body>
    );
};

export default OnboardingPage;