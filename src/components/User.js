import React from 'react'
import Useritem from './Useritem.js'


class User extends React.Component {
    
    render() {
        return (
            <div style={userStyle}>
            {this.props.users.map(user=>(
               <Useritem key={user.id} user={user}/>
            ))}
            </div>
        )
    }
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1px'
}
export default User;
