import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("RestaurantStore")
@observer
class Reservation extends Component{
    completeRes=()=>{
     this.props.RestaurantStore.completeRes(this.props.id)
  
    }

    seatRes=()=>{
        this.props.RestaurantStore.seatRes(this.props.id)
        
    }
    render () {
             console.log(this.props.completed)
        return (
      
            <div>
                
             {this.props.completed?<p className="conditional" key={this.props.id}>{this.props.name}<span><button onClick={this.completeRes}>completeRes</button>
                <button onClick={this.seatRes}>seatRes</button></span></p>:
                <p  key={this.props.id}>{this.props.name}
                <span><button onClick={this.completeRes}>completeRes</button>
                <button onClick={this.seatRes}>seatRes</button></span></p>}
            </div>
        //render the reservation data here
        //make sure you store the ID somewhere so you can find the reservation
        //use the class "conditional" to conditionally render completed reservations
        //You should hav ea complete reservation button to complete the reservation
        )
    }
}

export default Reservation