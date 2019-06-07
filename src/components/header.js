import React from 'react';
export function Header(props){

    return(
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div>
            <div className='form-inline my-2 my-lg-0'>
            <input 
            className=' bwm-search' type='search' placeholder='' aria-label='Search'/>
            <button className=' btn-bwm-search' type='submit'>Search</button>
        </div>
        </div>  
        </nav>
    )
}