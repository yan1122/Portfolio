import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import {Route, Redirect} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Redirect from={'/'} to={'/main'}/>
                <Header/>
                <Route exact path='/main' render={() => <Main/>}/>
                <Route path='/skills' render={() => <Skills/>}/>
                <Route path='/projects' render={() => <Projects/>}/>
                <Route path='/contacts' render={() => <Contacts/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
