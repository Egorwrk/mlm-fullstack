import {Devices, MyScreen} from '../../types';

export const emptyDevices: Devices = {
    phone: {
        height: 500,
        width: 300,
        screens: [
            {
                name: '',
                nav: {
                    bottomTabs: null,
                    drawer: null
                },
                bc: '#dddddd'
            }
        ],
        nav: {
            bottomTabs: null,
            drawer: null
        }
    },
    miniPhone: null,
    tablet: null
}

export const emptyPhoneScreen: MyScreen = {
    name: '',
    nav: {
        bottomTabs: null,
        drawer: null
    },
    bc: '#dddddd'
}