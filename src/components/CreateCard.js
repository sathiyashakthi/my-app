import React from 'react';
import {connect} from 'react-redux';

class CreateCard extends React.Component{

        constructor(props){
            super(props)
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

            handleEdit = (e) => {
              e.preventDefault();
              const newTitle = this.getCardTitle.value;
              const data = {
                id: new Date(),
                list:this.props.list
               
            
              }
              debugger;
              this.props.onAdd(newTitle)
              this.setState({
                wantDelete:false
  
              })

            /*  this.props.dispatch({
                type:'ADD_CARD',
                data});
*/
            }
            
    render(){
        const {wantDelete} =this.state
        return(
            <div>
            {
                !wantDelete &&
                <button onClick={()=>{this.showDeleteMenu()}} className=' btn-bwm-add-card' type='submit'>Add Card</button> 

            }
         { 
             wantDelete &&
             <div>
             <div className='form-group'>
                 <form onSubmit={this.handleEdit}>
                 <input required type="text" ref={(input) => this.getCardTitle = input}
                 placeholder="Enter Post Title" />
             </form >
             </div>
             <div className='delete-menu'>
             <button onClick={()=>{this.AddList()}} className='btn btn-danger'>Addcard</button>
             <button onClick={()=>{this.closeDeleteMenu()}}className ='btn btn-success'>Cancel</button>
             </div>
             </div>
         }
         </div>
        )
    }

   
   
}
export default connect()(CreateCard);