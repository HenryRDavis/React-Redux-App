import React from 'react';
import {connect} from 'react-redux';
import People from './People';

function ThePeople(props){
    return <>
    <h3>The People</h3>
    {props.people.map((people) => {
        return <People people={people}/>
     })} 
    </>
}

function mapStateToProps(state) {
    return{
        people: state.people
    }
}

export default connect(mapStateToProps, {}) (ThePeople);