import React from 'react';
import Modal from 'react-responsive-modal';
export class CardModal extends React.Component{

    constructor(){
        super()
        this.state ={
            open:false
        }
        this.openModal= this.openModal.bind(this);
        this.closeModal= this.closeModal.bind(this);
    
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
    render(){
        const {card,list} = this.props;
        return(
            
<React.Fragment>
  <button type='button' onClick={this.openModal} className='btn btn-bwm-add-card'>{card}</button>
  <Modal open={this.state.open} onClose={this.closeModal} little classNames={{ modal: 'rental-booking-modal' }}>
     <h4 className='modal-title title'>CardDetails</h4>
     <div className='modal-body bookings-inner-container'>

     <React.Fragment>
            <p><span>List:</span><bold>{list.newTitle}</bold></p>

            <p><span>Description:</span>{card}</p>
   
    </React.Fragment>
    </div>
    <div className='modal-footer'>
      <button type='button' onClick={this.closeModal} className='btn btn-bwm'>Cancel</button>
    </div>
  </Modal>
</React.Fragment>
        )
    }
    
}