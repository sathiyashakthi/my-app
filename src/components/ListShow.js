import React from 'react';
import  CreateList  from './CreateList';
import  CreateCard  from './CreateCard';
import CardShow from './CardShow'
import {connect} from 'react-redux';
import Card from './Card'
import {Link} from 'react-router-dom'
import { CardModal} from './CardModal';


 class ListShow extends React.Component{
        constructor(){
           super()
           this.state={
               todoList:[],
               card:[],
               wantDelete:false,
               modal:false
           }
           this.onAdd = this.onAdd.bind(this);
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
          onAdd(card){
            const cardArr = this.state.card.slice();
  
            cardArr.push(card)
            
            this.setState({
                card:cardArr
            })
          }
          cancelConfirmation(){
            this.setState({
                modal:
                {
                    open:false
                }
    
            })
        }
          printArr(card,list){
            
            return card.map((item, i) => <CardModal key={i} className=' btn-bwm-add-card' card={item} list={list}/>);
        }
    render(){
        console.log(this.state.card)
        const {wantDelete ,card} = this.state
       const {list } = this.props;
       // list.lenght>0 
       // console.log(list.newTitle) 
       
        return(
            <div class ='row'>
            
            
          
            <div className='col-md-4'>
            <div className='card text-center' >
              <div className='card-block'>   
             <h2>{list.newTitle}</h2>
              {this.printArr(card,list)}
              <CreateCard onAdd ={this.onAdd}/>

            <div className='card-footer text'>
            </div>
            </div>

            </div>
            </div>
          
        
            </div>
           
    
        )
    }
}

export default ListShow;
