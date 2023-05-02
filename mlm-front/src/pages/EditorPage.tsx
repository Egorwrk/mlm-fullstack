import React, { useEffect, useState } from "react";
import { myTemplates } from "../tempConstants"
import { Devices, Template, MyScreen } from "../../types";
import axios from "axios";

const EditorPage = (props: any) => {
  const [screens, setScreens] = useState<MyScreen[][]>([])

  const screenReworking = (screens: MyScreen[]): MyScreen[][] => {
    const reworkedScreens: MyScreen[][] = [];
    let oneScreensRow: MyScreen[] = [];
    for (let i = 0; i < screens.length; i++) {
      oneScreensRow.push(screens[i]);
      if ((i + 1) % 3 === 0 || i + 1 === screens.length) {
        reworkedScreens.push(oneScreensRow);
        oneScreensRow = [];
      }
    }

    return reworkedScreens;
  };

  useEffect(() => {
    axios.get(`http://localhost:3002/index.php`)
        .then(res => {console.log(res.data); console.log(res.data.message)})
    console.log('useEffect')
    let devices: Devices = {
      phone: {
        height: 500,
        width: 300,
        screens: [
          {
            navigation: "bottomTab",
            bc: 'red'
          }
        ]
      },
      tablet: null,
      miniPhone: null,
    }

    if (props.location.state) {
      if (props.location.state.name) {
        myTemplates.forEach((value: Template) => {
          if (value.name === props.location.state.name) {
            devices = value.devices
          }
        })
      }
  
      let reworkedScreens: MyScreen[][] = []
      if (devices) {
  
        if (devices.phone) {
          reworkedScreens = screenReworking(devices.phone.screens)
        } else if (devices.tablet) {
          reworkedScreens = screenReworking(devices.tablet.screens)
        } else if (devices.miniPhone) {
          reworkedScreens = screenReworking(devices.miniPhone.screens)
        }
      }
  
      setScreens(reworkedScreens);
    } else {
      console.log('else')
    }
    

  }, [])

  return <div style={{ display: "flex", flex: 1, flexDirection: 'column' }}>
    {screens.map((value, ind) => {
      return (
        <div key={ind} style={{display: "flex", flexDirection: 'row'}}>
          <div style={{ height: 500, width: 300, background: value[0].bc }}>
          </div>
          <div style={{ height: 500, width: 300, background: value[1] ? value[1].bc : "white" }}>

          </div>
          <div style={{ height: 500, width: 300, background: value[2] ? value[2].bc : "white"}}>

          </div>
        </div>
      )
    })}
  </div>
};

export default EditorPage;
