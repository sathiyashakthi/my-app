import React from 'react';
import  CreateList  from './CreateList';
import {connect} from 'react-redux';
import CardShow from './CardShow';
import ListShow from './ListShow';


 class Card extends React.Component{
        constructor(){
           super()
           this.state={
               todoList:[],
               wantDelete:false
           }
        }
        
    render(){
        console.log(this.props.card)
        
        const {wantDelete} = this.state
        return(
            <div>
                {this.props.card.map((card) => <CardShow key={card.id} card={card} />)}
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        card:state.card
    }
}
export default Card
