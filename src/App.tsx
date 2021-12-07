import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/rating";
import OnOff from "./components/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import UncontroledRating from "./components/uncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff";
import UncontrolledInput, {UnconrolledInput2} from "./components/UncontrolledInput";
import ControlledInput from "./components/controlledInput";
import ControlledCheckBox from "./components/controlledCheckBox";
import ControlledSelect from "./components/controlledSelect";

function PageTitle(props: { title: string }) {
    return <span>{props.title}</span>
}


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title="This is App component"/>

            <Rating value={3}/>

            <OnOff active={true}/>
            <OnOff active={false}/>

            <PageTitle title="My Friends"/>

            {/*<Accordion title="MENU" collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<Accordion title={"USERS"} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}

            <UncontrolledAccordion title={'Uncontrolled'} />

            <UncontroledRating />

            <UncontrolledOnOff active={false}  />

            <UncontrolledInput />

            <UnconrolledInput2 />

            <ControlledInput />

            <ControlledCheckBox />

            <ControlledSelect />
        </div>
    );
}

export default App;
