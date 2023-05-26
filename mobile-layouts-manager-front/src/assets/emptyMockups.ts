import {Template} from '../../types';

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
            chosen: false
        }
    ],
    navigator: {
        bottomTabs: null,
        drawer: null
    }
}