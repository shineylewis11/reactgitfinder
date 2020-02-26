import React from 'react';
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
            
            <nav className='navbar navbar-light bg-primary'>
                <h1><i className={this.props.iconClassNames}></i>
                {this.props.name}</h1>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                        </li>
                        <li>
                        <Link to='/'>Home
                        </Link>
                        </li>
                </ul>
                </nav>
                
        )
    }

}
export default Navbar