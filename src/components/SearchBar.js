import React, {Component}  from 'react';
import {Paper, TextField} from '@material-ui/core';


export default class SearchBar extends Component {
    state = {
        searchTerm: ''
    }
    handleChange =(event) =>{
        //console.log(event.target.value)
        this.setState({searchTerm:event.target.value});
    }
    handleSubmit = (event) =>{
        const {searchTerm} = this.state;
        const {onFormSubmit} =this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <p className="welcome">Welcome to Kaburu Streaming Center</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div>
                                <input className="input" type="search"  placeholder="search anything from youtube"
                                    onChange={this.handleChange}/>
                                <button className="btn btn-default" style={{color:'white'}} onChange={this.handleChange} >
                                    <i className="fa fa-search" style={{color:'white', width:'20'}} >
                                    </i> search </button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

{/*
    <Paper elevation={6} style={{padding: '25px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Search..." onChange={this.handleChange} />
                    </form>
                </Paper>
 */}
