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
          
               card:[],
               wantDelete:false,
               modal:false,
               enab:false
           }
           this.onAdd = this.onAdd.bind(this);
           this.onRmCard =this.onRmCard.bind(this);
           this.onchgBt = this.onchgBt.bind(this);
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
            const data = {
              title:card,
              isSelected:false
          
            }

            
            cardArr.push(data)
            
            this.setState({
                card:cardArr,
                enab:false
            })
          }
          onRmCard(filtered){
            const cardArr = this.state.card.slice();
            this.setState({
              card:JSON.parse(JSON.stringify(filtered))

          })
          this.forceUpdate()
          }
          cancelConfirmation(){
            this.setState({
                modal:
                {
                    open:false
                }
    
            })
        }
        onchgBt(enablebutt){
          this.setState({
            enab:enablebutt
          })
        }
          printArr(card,list){
            
            return card.map((item, i) => <CardModal key={i} className=' btn-bwm-add-card' card={item} list={list} onchgBt={this.onchgBt} />);

          }
    render(){
        const {wantDelete ,card,enab} = this.state
       const {list } = this.props;
       // list.lenght>0 
       // console.log(list.newTitle) 
       
        return(
            <div className='card card-byepass' >
              <div className='card-block'>   
              <div class="list-header"> 
             <div class=".px-2"><h2>{list.newTitle}</h2></div><button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:list.id})} class=" btn remove" aria-hidden="true"><i class="fa fa-trash"></i></button>
            </div>
              {this.printArr(card,list)}
             
            <div className='card-footer text-center'>
            <CreateCard onAdd ={this.onAdd}
                  card={card}
                 onRmCard={this.onRmCard}
                 enab={enab} />
            </div>
            </div>

            </div>
           
    
        )
    }
}

export default connect()(ListShow);

