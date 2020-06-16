import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import  Reservation  from '../components/Reservation';

@inject("GeneralStore", "RestaurantStore")

@observer
class Restaurant extends Component{
    addRes=()=>{
     this.props.RestaurantStore.addRes( this.props.GeneralStore.name,this.props.GeneralStore.numPeople)
    }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>number of people in the restaurant:{this.props.RestaurantStore.restPopulation}</div>
                <div>number of completed tables in the restaurant:{this.props.RestaurantStore.completedTables}</div>
                <ResInput/>
                <button onClick={this.addRes} id="addRes">Add Reservation</button> 
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {this.props.RestaurantStore.reservations.map(r=><Reservation key={r.id} id={r.id} name={r.name}  completed={r.completed} />)}
                </div>
            </div>
        )
    }
}

export default Restaurant