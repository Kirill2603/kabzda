import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, setCollapsed}) => {
    return collapsed ?
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed}/>
        </div>
        :
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            <AccordionBody/>
        </div>
}

function AccordionTitle(props: { title: string ,setCollapsed: (collapsed: boolean) => void, collapsed: boolean}) {
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>-- {props.title} --</h3>
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