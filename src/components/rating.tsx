import React from "react";
import emptyStar from "../img/empty-star.svg";
import fullStar from '../img/full-star.svg'

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

const Rating: React.FC<RatingPropsType> = ({value}) => {
        return (
            <div>
                <Star selected={value > 0}/>
                <Star selected={value > 1}/>
                <Star selected={value > 2}/>
                <Star selected={value > 3}/>
                <Star selected={value > 4}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
}

const Star: React.FC<StarPropsType> = ({selected}) => {
    return selected ? <img src={fullStar} alt="full"/> : <img src={emptyStar} alt="empty"/>
}

export default Rating