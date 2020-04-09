import React, { Component } from 'react';
import NavBar from '../src/components/NavBar/Navbar'
// import TourList from '../src/components/TourList/index'
import './App.scss';

class App  extends Component{
render(){

  return(
    <main>
    <NavBar/>
    {/* <TourList/> */}
    </main>
  )
}

}

export default App;
