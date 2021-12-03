import React from "react";
import emptyStar from "../img/empty-star.svg";
import fullStar from '../img/full-star.svg'

function Rating() {

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <img src={fullStar} alt="es"/>
    } else return <img src={emptyStar} alt=""/>

}

export default Rating