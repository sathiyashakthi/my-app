import React from 'react';
import  CreateList  from './CreateList';
import  CreateCard  from './CreateCard';

import {connect} from 'react-redux';


 class CardShow extends React.Component{
        constructor(){
           super()
           this.state={
               todoList:[],
               wantDelete:false
           }
        }
        showDeleteMenu(){
            this.setState({
              wantDelete:true
            })
          }
          closeDeleteMenu(){
            this.setState({
              wantDelete:false

            })
          }
          AddList(){}
    render(){
        const {wantDelete} = this.state
        console.log(this.props.card)
        return(
            <div class ='row'>
            <div className='col-md-4'>
              {this.props.card}

              <hr></hr>
            <div className='card-footer text-muted'>
           
            </div>
            </div>

            </div>
            
           
    
        )
    }
}

export default CardShow;
