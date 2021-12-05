import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/rating";
import OnOff from "./components/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import UncontroledRating from "./components/uncontrolledRating";

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
            <OnOff active={false}/>
            <OnOff active={true}/>

            <PageTitle title="My Friends"/>

            <Accordion title="MENU" collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Accordion title={"USERS"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            
            <UncontrolledAccordion title={'Uncontrolled'} />

            <UncontroledRating />

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

export default App;
