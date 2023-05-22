import React from 'react';
import {MenuItem, Select} from "@mui/material";

interface Props {
    setChoseScreenActive: React.Dispatch<React.SetStateAction<boolean>>
    choseScreenActive: boolean
    handleTypeSelect: (e: any) => void
    chosenNav: 'bottomTabs' | 'drawer' | null
}

const Toolsbar = (props: Props) => {
    return (
        <div className='toolsbar'>
            <div className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.setChoseScreenActive(false)}>
                    <p>N</p>
                </button>
            </div>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>

            {!props.choseScreenActive
                ? <div className='select'>
                    <Select onChange={props.handleTypeSelect} value={props.chosenNav} style={{height: 30}}>
                        <MenuItem value={'bottomTabs'}>BottomTabs</MenuItem>
                        <MenuItem value={'drawer'}>Drawer</MenuItem>
                    </Select>
                </div>
                : null
            }

            <div className='prevOkBtnSeparator'/>

            {!props.choseScreenActive
                ? <button
                    className='okButton'
                    onClick={() => props.setChoseScreenActive(true)}>Ok</button>
                : null
            }
        </div>
    );
};

export default Toolsbar;