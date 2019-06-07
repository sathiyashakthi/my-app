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
            <React.Fragment >
                {this.props.list.map((list,index) => <ListShow key={list.id} list={list}/>
                        
                )}
                
          
            </React.Fragment>
       
           
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
export default connect(mapStateToProps)(List);
