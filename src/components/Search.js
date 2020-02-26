import React from 'react';
class Search extends React.Component{
    state={
        text:[]
    }
    onChange=(e)=>{
        this.setState({text:e.target.value})
        console.log(e.target.value);
        console.log(this.state.text)

    }
    onSubmit=(e)=>{
        e.preventDefault();
    
        if(this.state.text===''){
            this.props.setAlert('Please enter something!!','danger')

        }
        this.props.searchUser(this.state.text)
        this.setState({text:''});
    }
    render(){
        return(
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="search here">
                    </input>
                    <input type="submit" value="search" className="btn btn-dark btn-block" ></input>
                </form>
                {this.props.showClear && (<button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>)}
               
            </div>
        )
    }

}
export default Search;
