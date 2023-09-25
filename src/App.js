import React from "react";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import './App.css';
  

const App = () =>{

/**
 * 
 * head
 * body
 *    sidebar
 *      menuitems
 *    mainContainer
 *      button List
 *      videocontainer
 *          video card
 * 
 */

    return (
        <div>
            <Head />
            <Body />
        </div>
    )
}
export default App;