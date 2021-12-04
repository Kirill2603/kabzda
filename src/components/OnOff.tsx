import React from "react";

type OnOffPropsType = {
    active: boolean
}

const OnOff: React.FC<OnOffPropsType> = ({active}) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        margin: '1px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: active ? 'green' : ''
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        margin: '1px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: active ? '' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        margin: '5px',
        border: '1px solid black',
        backgroundColor: active ? 'green' : 'red'
    }

        return (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>)
}

export default OnOff