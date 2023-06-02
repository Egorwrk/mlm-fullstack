import {Template} from 'types';

export const emptyTemplate: Template = {
    name: '',
    height: 500,
    width: 300,
    screens: [
        {
            name: '',
            navigator: {
                bottomTabs: null,
                drawer: null
            },
            bc: '#dddddd',
            chosen: false,
            emptyBlocks: [],
            textBlocks: [],
            imageBlocks: [],
            registrationBlocks: []
        }
    ],
    navigator: {
        bottomTabs: null,
        drawer: null
    }
}

export const emptyBlock = {
    height: 100,
    width: 100,
    top: 0,
    left: 0,
}