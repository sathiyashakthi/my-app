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
             });
             let test = document.getElementsByClassName("container");
             console.log(test);

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
        let fontColor = {
          color:'black',
          fontWeight: 'bold'
        }
        return(
          <div className='card ' >
            {
                !wantDelete &&
                <button onClick={()=>{this.showDeleteMenu()}} style={fontColor} className=' btn-bwm-add ' type='submit'>Add List</button> 

            }
            
         { 
             wantDelete &&
             <div>
                 <form class="form-style" onSubmit={this.handleEdit}>
                 <input required type="text" ref={(input) => this.getTitle = input} maxLength ='8'
                 placeholder="Enter List Title" />
                 <hr></hr>
             <div className='delete-menu'>
             <button type='submit' className='btn btn-success '>Add</button>
             <button onClick={()=>{this.closeDeleteMenu()}}className ='btn btn-danger'>Cancel</button>
             </div>
             </form >
             </div>
         }
         </div>
        )
    }

   
   
}
export default connect()(CreateList);