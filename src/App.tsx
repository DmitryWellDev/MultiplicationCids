import React, {useState} from 'react';
import './App.css';
import {Multiple2} from "./Components/Multiple2/Multiple2";
import {Multiple3} from "./Components/Multiple3/Multiple3";
import {Multiple4} from "./Components/Multiple4/Multiple4";
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {Entry} from "./Components/Entry/Entry";

function App() {

    let [showTable, setShowTable] = useState<boolean>(false)

    let startHandler = () => {
        setShowTable(showTable = true)
    }

    return (
        <div className="App">
            {!showTable && <Entry startHandler={startHandler}/>}
            {showTable && <><p className='App_title'>Lets check your mathematic skill</p>
                <div className='nav_wrep'>
                <Navbar/>
                </div>
                <Route path='/Multiple2' render={() => <Multiple2/>}/>
                <Route path='/Multiple3' render={() => <Multiple3/>}/>
                <Route path='/Multiple4' render={() => <Multiple4/>}/></>}
        </div>
    );
}

export default App;
