import React from 'react';
import {connect} from 'react-redux';

class CreateCard extends React.Component{

        constructor(props){
            super(props)
            this.state={
                todoList:[],
                wantDelete:false,
                enablebtt:false
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

            handleEdit = (e) => {
              e.preventDefault();
              const newTitle = this.getCardTitle.value;
              const data = {
                id: new Date(),
                list:this.props.list
               
            
              }
              this.props.onAdd(newTitle)
              this.setState({
                wantDelete:false
  
              })

            /*  this.props.dispatch({
                type:'ADD_CARD',
                data});
*/
            }
            deleteMultipleCards() {
              let filtered = this.props.card.filter(function(value){

                return value.isSelected === false;
            
            });
            this.props.onRmCard(filtered)
           
            }
            
    render(){
        const {wantDelete} =this.state
        
        console.log( this.props.enab);
        return(
            <div>
            {
              
                !wantDelete && 
                <div>
                <button class=" btn-bwm-add-card button add" disabled={this.props.enab} onClick={()=>{this.showDeleteMenu()}}  type='submit'>Add Card</button> 
                <button class=" btn-bwm-add-card button remove" onClick={()=>{this.deleteMultipleCards()}}>Remove Card</button>
                </div>
              
            }
         { 
             wantDelete &&
             <div>
             <div className='form-group'>
                 <form onSubmit={this.handleEdit}>
                 <input required type="text" ref={(input) => this.getCardTitle = input} maxLength='8'
                 placeholder="Enter a Title for this Card" />
                 <hr></hr>
             <div className='delete-menu'>
             <button type='submit'  className='btn btn-success '>Add</button>
             <button onClick={()=>{this.closeDeleteMenu()}}className ='btn btn-danger'>Cancel</button>
             </div>
             </form >
             </div>

             </div>
         }
         </div>
        )
    }

   
   
}
export default connect()(CreateCard);