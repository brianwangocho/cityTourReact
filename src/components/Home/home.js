import React from 'react'
import "./Home.scss"

function Home(){

    return (
        <div className="container">

        <div className="jumbotron">
            <h1>City Tours</h1>      
             <p>We offer the best city tours the world has ever seen . explore our site and see for your self</p>
        </div>

        <div className="wrapper">
            <div>


          
            </div>
            <div>
                <h4>Top Cities List</h4>
                <ul className="list-group">
                    <li className="list-group-item">Nairobi<span className="badge">1</span></li>
                    <li className="list-group-item">Ethiopia <span className="badge">2</span></li>
                    <li className="list-group-item">Mombasa <span className="badge">3</span></li>
                    <li className="list-group-item">Mombasa <span className="badge">4</span></li>
                    <li className="list-group-item">Mombasa <span className="badge">5</span></li>
                </ul> 

            </div>

        </div>
 
        
        
        </div>
    )

}

export default Home;