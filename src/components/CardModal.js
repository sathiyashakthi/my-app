import React from 'react';
import Modal from 'react-responsive-modal';
export class CardModal extends React.Component{

    constructor(){
        super()
        this.state ={
            open:false,
            message:[],
            desc:'',
            wantDelete:false,
            enablebutt:false,
            
        }
        this.openModal= this.openModal.bind(this);
        this.closeModal= this.closeModal.bind(this);
    
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

    openModal(){
        this.setState({open:true});
    }
    closeModal(){
        this.setState({open:false});
    }
/*
    renderBookings(bookings){
        return bookings.map((booking,index)=>
        <React.Fragment>
            <p><span>Date:</span></p>
            <p><span>Guests:</span></p>
            <p><span>Total Price:</span></p>
           {index +1 !== bookings.length &&  
            <hr></hr>
            }      
    </React.Fragment>
    )
    }
    */
   handleEdit = (e) => {
    e.preventDefault();
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      
      message
  
    }
   
    this.onMessageAdd(message)
    this.getMessage.value = "";
}
handleEdit2 = (e) => {
    e.preventDefault();
    const desc = this.getDescription.value;
    const data = {
      id: new Date()
      

  
    }
   
    this.onDescAdd(desc)
    this.setState({
        wantDelete:false
    })
}
onMessageAdd(message){
    const messageArr = this.state.message.slice();

    messageArr.push(message)
    
    this.setState({
        message:messageArr
    })
  }
  onDescAdd(desc){
    
    
    this.setState({
        desc
    })
  }
//   chgButton(){
//       console.log(typeof(this.props.card));
//       let data = this.props.cardData.filter(function(value){
//           return value.isSelected === true;
//       });
//     this.setState({
//         enablebutt:data.length>0?true:false
//     })
   
//     this.props.onchgBt(this.state.enablebutt)
//   }
  printMessage(message){
    return  message.map((item, i) =><div><i class="fa fa-comments" aria-hidden="true"></i>{" "}{" "}{" "}<p key={i}>{item}</p></div>)
  }
    render(){
        const {card,list,cardData} = this.props;
        const {message,desc,wantDelete}=this.state;
        return(
            
<React.Fragment> 
<li class="list-style"> 
 <input type='checkbox' class="checkbox" onClick={()=>{card.isSelected = !card.isSelected}}></input>
  <button type='button' onClick={this.openModal} className='btn btn-bwm-add-card'>{card.title}</button>
  </li>
  <Modal open={this.state.open} onClose={this.closeModal} little classNames={{ modal: 'rental-booking-modal' }}>
     <h4 className='modal-title title'>CardDetails</h4>
     <div className='modal-body bookings-inner-container'>
            
     <React.Fragment>
     <h3><span> <i class="fa fa-credit-card font-color" aria-hidden="true"></i></span>{" "}{" "}{" "}{card.title}</h3>
            <h5><span><i class="fa fa-outdent" aria-hidden="true"></i></span> {"   "}{" "}{" "}{" "}Description{"  "}{" "}{" "}{" "} 
            { desc &&
            <button onClick={()=>{this.showDeleteMenu()}} className='btn btn-secondary'>Edit</button>
            }
  </h5>
            {desc &&
            <p> {desc}</p>

            }
   
    </React.Fragment>
    

            {
                !wantDelete && !desc &&
                <React.Fragment>
                 <div className='form-group'>
                <button onClick={()=>{this.showDeleteMenu()}} className=' btn-bwm-add-card' type='submit'>Add more detailed Description</button> 
                </div>
                </React.Fragment>
            }
   
  
    { 
             wantDelete &&
             <React.Fragment>
     <span>   <h4>Add a Description</h4></span>
        <div className='form-group'>
                 <form onSubmit={this.handleEdit2}>
                 <textarea required rows="5" ref={(input)=>this.getDescription = input} cols="28" 
                 placeholder="Enter Description" />
                 
             <div className='delete-menu'>
             <button type='submit' className='btn btn-success'>Save</button>
             <button onClick={()=>{this.closeDeleteMenu()}}className ='btn btn-secondary'>Cancel</button>
             </div>
             </form >
             </div>
             </React.Fragment>

    }

    <React.Fragment>
    <span>
    <h4><i class="fa fa-comment" aria-hidden="true"></i>Add a Comment</h4>
    </span>
    <div className='form-group'>
                 <form onSubmit={this.handleEdit}>
                 <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
                 placeholder="Enter Post" />
                 
             <div className='delete-menu'>
             <button type='submit' className='btn btn-info'>Comment</button>
             
             </div>
             </form >
             </div>
             </React.Fragment>
            <React.Fragment>
            <p><span>Comments:</span><bold>{this.printMessage(message)}</bold></p>
            <hr></hr>
            </React.Fragment>
    </div>

    <div className='modal-footer'>
      <button type='button' onClick={this.closeModal} className='btn btn-danger'>Cancel</button>
    </div>
  </Modal>
</React.Fragment>
        )
    }
    
}