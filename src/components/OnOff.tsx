import React from "react";

type OnOffPropsType = {
    active: boolean
}


const OnOff: React.FC<OnOffPropsType> = ({active}) => {
    if (active) {
        return (<div style={{display: 'flex', alignItems: 'center'}}>
            <button style={{backgroundColor: 'green'}}>On</button>
            <button>Off</button>
            <div style={{width: '10px', height: '10px', backgroundColor: 'green', borderRadius: '5px'}}></div>
        </div>)
    } else return (<div style={{display: 'flex', alignItems: 'center'}}>
        <button>On</button>
        <button style={{backgroundColor: 'red'}}>Off</button>
        <div style={{width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '5px'}}></div>
    </div>)
}

export default OnOff