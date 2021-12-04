import React, {useState} from "react";

type OnOffPropsType = {
    active: boolean
}

const OnOff: React.FC<OnOffPropsType> = ({active}) => {

    const [on, setOn] = useState(active)

    const onStyle = {
        width: '30px',
        height: '20px',
        margin: '1px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : '',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        margin: '1px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: on ? '' : 'red',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        margin: '5px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}

export default OnOff