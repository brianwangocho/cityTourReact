import React, {Component} from "react"
import "./Tour.scss";

class Tour extends Component{
    state={
        showinfo:false
    };
    handleInfoState=()=>{
        console.log("clicked");
        this.setState({
            showinfo:!this.state.showinfo
        })
    }
    render(){
        const {id,city,img,name,info}= this.props.tour;
        const { removeTours } =this.props
        return(
            <article className="tour">
            <div className="img-container">
            <img className="city-image"
            width="200"
            src={img} 
            alt=""/>
            <span className="close-btn" onClick={()=>{removeTours(id)}}>
                <i className="fa fa-window-close"/>
            </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info{""}
                     <span onClick={this.handleInfoState} >
                     <i className="fa fa-caret-down"></i>
                         </span>
                 </h5>
                 {this.state.showinfo?<p>{info}</p>:<p></p>}
                
            </div>
            </article>
        )
    }
}

export default Tour;