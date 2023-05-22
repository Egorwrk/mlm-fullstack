import { Template } from '../../types';

export const myTemplates: Template[] = [
  {
    name: 'my1',
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            name: '1',
            nav : {bottomTabs: ['1', '2', '5'], drawer: null},
            bc: 'green',
          },
          {
            name: '2',
            nav : {bottomTabs: ['1', '2', '5'], drawer: ['2', '4', '5']},
            bc: 'gray',
          },
          {
            name: '3',
            nav : {bottomTabs: null, drawer: null},
            bc: 'black',
          },
          {
            name: '4',
            nav : {bottomTabs: null, drawer: ['2', '4', '5']},
            bc: 'red',
          },
          {
            name: '5',
            nav : {bottomTabs: ['1', '2', '5'], drawer: ['2', '4', '5']},
            bc: 'green',
          },
          {
            name: '6',
            nav : {bottomTabs: null, drawer: null},
            bc: 'gray',
          },
          {
            name: '7',
            nav : {bottomTabs: null, drawer: null},
            bc: 'black',
          },
          {
            name: '8',
            nav : {bottomTabs: null, drawer: null},
            bc: 'red',
          },
          {
            name: '9',
            nav : {bottomTabs: null, drawer: null},
            bc: 'green',
          },
          {
            name: '10',
            nav : {bottomTabs: null, drawer: null},
            bc: 'gray',
          },
          {
            name: '11',
            nav : {bottomTabs: null, drawer: null},
            bc: 'black',
          },
          {
            name: '12',
            nav : {bottomTabs: null, drawer: null},
            bc: 'red',
          },
          {
            name: '13',
            nav : {bottomTabs: null, drawer: null},
            bc: 'green',
          },
          {
            name: '14',
            nav : {bottomTabs: null, drawer: null},
            bc: 'gray',
          },
          {
            name: '15',
            nav : {bottomTabs: null, drawer: null},
            bc: 'black',
          },
          {
            name: '16',
            nav : {bottomTabs: null, drawer: null},
            bc: 'red',
          },
          {
            name: '17',
            nav : {bottomTabs: null, drawer: null},
            bc: 'yellow',
          },
        ],
        nav : {bottomTabs: ['1', '2', '5'], drawer: ['2', '4', '5']},
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: 'my2',
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            name: '1',
            nav : {bottomTabs: null, drawer: null},
            bc: 'red',
          },
        ],
        nav: {bottomTabs: null, drawer: null}
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: 'my3',
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            name: '1',
            nav : {bottomTabs: null, drawer: null},
            bc: 'yellow',
          },
        ],
        nav: {bottomTabs: null, drawer: null}
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: 'my4',
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            name: '1',
            nav : {bottomTabs: null, drawer: null},
            bc: 'gray',
          },
        ],
        nav: {bottomTabs: null, drawer: null}
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: 'my5',
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            name: '1',
            nav : {bottomTabs: null, drawer: null},
            bc: 'gray',
          },
        ],
        nav: {bottomTabs: null, drawer: null}
      },
      tablet: null,
      miniPhone: null,
    },
  },
];

export const defaultTemplate: Template = {
  name: '',
  devices: {
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
    tablet: null,
    miniPhone: null
  },
}
