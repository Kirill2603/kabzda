import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

const Accordion: React.FC<AccordionPropsType> = ({title, collapsed}) => {
    return collapsed ?
        <div>
            <AccordionTitle title={title}/>
        </div>
        :
        <div>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </div>
}

function AccordionTitle(props: { title: string }) {
    return (
        <h3>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

export default Accordion