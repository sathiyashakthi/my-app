import React from 'react';
import { CreateList } from './CreateList';

export class ListShow extends React.Component{
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
    render(){
        const {wantDelete} = this.state

        return(
            <div className='row'>
            <div className='col-md-4'>
            <div className='card text-center' >
              <div className='card-block'>
           <div>
               {
                   !wantDelete &&
                   <button onClick={()=>{this.showDeleteMenu()}} className=' btn-bwm-add' type='submit'>Add List</button> 

               }
            { 
                wantDelete &&
                <div>
                <div className='form-group'>
                <label htmlFor='guests'>Guests</label>
                <input  onChange={(event)=>this.selectGuest(event)}type='text' className='form-control' id='guests' aria-describedby='emailHelp' placeholder=''></input>
                </div>
                <div className='delete-menu'>
                Do you confirm?
                <button className='btn btn-danger'>Yes</button>
                <button onClick={()=>{this.closeDeleteMenu()}}className ='btn btn-success'>No</button>
                </div>
                </div>
            }
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
