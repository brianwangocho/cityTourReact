import React,  { Component} from "react";
import "./TourList.scss";
import Tour from "../Tour/index";
import {tourData } from "../../TourData";


class TourList extends Component{

    state ={
        tours:tourData
    };
    removeTour =id=>{
        console.log(id);
        const {tours}= this.state;
        const sortedTours = tours.filter(tour=>tour.id !== id);
        this.setState({
            tours:sortedTours
        })

    }

    render(){
        const {tours} = this.state;
        
        return(
            <section className="tourList">
                {tours.map(tour=>{
                    return(
                        
                        <Tour key={tour.id} tour={tour} removeTours={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}

export default TourList;