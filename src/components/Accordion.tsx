import React from "react";

function Accordion(props: {title: string}) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>
    )
}

function AccordionTitle (props: {title: string}) {
    return (
        <h3>-- {props.title} --</h3>
    )
}

function AccordionBody () {
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