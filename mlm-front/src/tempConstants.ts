import { Template } from "../types";

export const myTemplates: Template[] = [
  {
    name: "my1",
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            navigation: "bottomTab",
            bc: "green",
          },
          {
            navigation: "stack",
            bc: "gray",
          },
          {
            navigation: "stack",
            bc: "black",
          },
          {
            navigation: "stack",
            bc: "red",
          },
        ],
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: "my2",
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            navigation: "drower",
            bc: "red",
          },
        ],
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: "my3",
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            navigation: "drower",
            bc: "yellow",
          },
        ],
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: "my4",
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            navigation: "drower",
            bc: "gray",
          },
        ],
      },
      tablet: null,
      miniPhone: null,
    },
  },
  {
    name: "my5",
    devices: {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            navigation: "drower",
            bc: "gray",
          },
        ],
      },
      tablet: null,
      miniPhone: null,
    },
  },
];
