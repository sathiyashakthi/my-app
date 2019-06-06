import React from 'react';
import  CreateList  from './CreateList';
import {connect} from 'react-redux';
import ListShow from './ListShow';


 class List extends React.Component{
        constructor(){
           super()
           this.state={
               todoList:[],
               wantDelete:false
           }
        }
        
    render(){
        //console.log(this.props.list)
        const {wantDelete} = this.state
        return(
            <div className='row'>
                {this.props.list.map((list,index) => <ListShow key={list.id} list={list}/>
                        
                )}
                
            <div className='col-md-4'>
            <div className='card text-center toBeDeleted' >
              <div className='card-block'>
              <CreateList/>
              
              
              </div>
            </div>
            </div>
            </div>
        
           
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
export default connect(mapStateToProps)(List);
