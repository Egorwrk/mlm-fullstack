import React from 'react';

interface Props {
    placeholderText: string
    valueText: string
    setter: React.Dispatch<React.SetStateAction<string>>
}

const InputField = (props: Props) => {
    return (
        <input className='inputField'
               placeholder={props.placeholderText}
               value={props.valueText}
               onChange={(event) => props.setter(event.target.value)}
        />
    );
};

export default InputField;