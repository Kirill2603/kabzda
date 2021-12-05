import React, {useState} from "react";
import emptyStar from "../img/empty-star.svg";
import fullStar from '../img/full-star.svg'


const UncontroledRating: React.FC = () => {

        const [value, setValue] = useState<number>(1)

        return (
            <div>
                <Star selected={value > 0} setValue={() => setValue(1)}/>
                <Star selected={value > 1} setValue={() => setValue(2)}/>
                <Star selected={value > 2} setValue={() => setValue(3)}/>
                <Star selected={value > 3} setValue={() => setValue(4)}/>
                <Star selected={value > 4} setValue={() => setValue(5)}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

const Star: React.FC<StarPropsType> = ({selected, setValue}) => {
    return <img src={selected ? fullStar : emptyStar}
                alt="*"
                style={{cursor: 'pointer'}}
                onClick={setValue}/>
}

export default UncontroledRating