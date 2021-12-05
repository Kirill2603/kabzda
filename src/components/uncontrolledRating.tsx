import React, {useState} from "react";
import emptyStar from "../img/empty-star.svg";
import fullStar from '../img/full-star.svg'

type UncontroledRatingPropsType = {
    // value: 1 | 2 | 3 | 4 | 5
}

const UncontroledRating: React.FC<UncontroledRatingPropsType> = () => {

        const [value, setValue] = useState(1)

        return (
            <div>
                <Star selected={value > 0} setValue={setValue} value={1}/>
                <Star selected={value > 1} setValue={setValue} value={2}/>
                <Star selected={value > 2} setValue={setValue} value={3}/>
                <Star selected={value > 3} setValue={setValue} value={4}/>
                <Star selected={value > 4} setValue={setValue} value={5}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: number) => void
    value: number
}

const Star: React.FC<StarPropsType> = ({selected, setValue, value}) => {
    return selected ?
        <img onClick={() => setValue(value)}
        src={fullStar} alt="full"/>
        :
        <img onClick={() => setValue(value)}
        src={emptyStar} alt="empty"/>
}

export default UncontroledRating