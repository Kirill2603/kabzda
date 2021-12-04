import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}


const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({title}) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)

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

type AccordionTitlePropsType = {
    title: string,
    setCollapsed: any
    collapsed: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    return (
        <div >
            <h3
                style={{cursor: 'pointer'}}
                onClick={() => props.setCollapsed(!props.collapsed)}>-- {props.title} --</h3>
        </div>

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

export default UncontrolledAccordion