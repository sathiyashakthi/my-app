import React from 'react';
import {connect} from 'react-redux';

class CreateList extends React.Component{

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

            handleEdit = (e) => {
              e.preventDefault();
              const newTitle = this.getTitle.value;
              const data = {
                id: new Date(),
                card :[],
                newTitle
            
              }
              this.props.dispatch({
                type:'ADD_LIST',
                data});
                
                this.setState({
                    wantDelete:false
      
                  })
            }
            
    render(){
        const {wantDelete} =this.state
        return(
            <div>
            {
                !wantDelete &&
                <button onClick={()=>{this.showDeleteMenu()}} className=' btn-bwm-add' type='submit'>Add List</button> 

            }
         { 
             wantDelete &&
             <div>
             <div className='form-group'>
                 <form onSubmit={this.handleEdit}>
                 <input required type="text" ref={(input) => this.getTitle = input}
                 placeholder="Enter Post Title" />
             </form >
             </div>
             <div className='delete-menu'>
             <button onClick={()=>{this.AddList()}} className='btn btn-danger'>AddList</button>
             <button onClick={()=>{this.closeDeleteMenu()}}className ='btn btn-success'>Cancel</button>
             </div>
             </div>
         }
         </div>
        )
    }

   
   
}
export default connect()(CreateList);