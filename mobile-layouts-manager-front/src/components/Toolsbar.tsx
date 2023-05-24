import React from 'react';
import {MenuItem, Select} from '@mui/material';

interface Props {
    setNavigationModeActive: React.Dispatch<React.SetStateAction<boolean>>
    navigationModeActive: boolean
    handleTypeSelect: (e: any) => void
    chosenNav: 'bottomTabs' | 'drawer' | null
    selectMultipleScreens?: any
    setAddNewScreenMode: React.Dispatch<React.SetStateAction<boolean>>
    addNewScreenMode: boolean
}

const Toolsbar = (props: Props) => {
    return (
        <div className='toolsbar'>
            <div className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.setNavigationModeActive(false)}>
                    <p>N</p>
                </button>
            </div>
            <div className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.setAddNewScreenMode(true)}>
                    <p>NS</p>
                </button>
            </div>
            <div className='toolsbarItem'>
                <button className='toolsbarItemBtn' onClick={() => props.selectMultipleScreens(false)}>
                    <p>MS</p>
                </button>
            </div>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>
            <div className='toolsbarItem'/>

            {!props.navigationModeActive
                ? <div className='select'>
                    <Select onChange={props.handleTypeSelect} value={props.chosenNav} style={{height: 30}}>
                        <MenuItem value={'bottomTabs'}>BottomTabs</MenuItem>
                        <MenuItem value={'drawer'}>Drawer</MenuItem>
                    </Select>
                </div>
                : null
            }

            <div className='prevOkBtnSeparator'/>

            {!props.navigationModeActive
                ? <button
                    className='okButton'
                    onClick={() => props.setNavigationModeActive(true)}>Ok</button>
                : null
            }
        </div>
    );
};

export default Toolsbar;