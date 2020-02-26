import React from 'react';

class Useritem extends React.Component{
render(){
   
    const {id,avatar_url,login,html_url}=this.props.user;
    return(
        
        <div className='card text-center'>
            <h2>{id}</h2>
            < img src= {avatar_url} 
            alt='' className='round-img' 
            style= {{width:'60px'}}/>
            <h3>{login}</h3>
            <a href={html_url}
            className='btn btn-dark btn-sm my-1'>
                More</a>
            </div>
        )

    
}
    
    
}
export default Useritem

