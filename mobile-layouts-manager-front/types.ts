export interface Device {
  height: number;
  width: number;
  screens: MyScreen[];
}

export interface Devices {
  phone: Device | null;
  tablet: Device | null;
  miniPhone: Device | null;
}

export interface MyScreen {
  navigation: "bottomTab" | "drower" | "stack";
  bc: string;
}

export interface Template {
  name: string;
  devices: Devices;
}

export interface BottomTabNav {
  tabs: Tab[]
}

export interface Tab {
  name: string
  screenColor: string
  components: any
}