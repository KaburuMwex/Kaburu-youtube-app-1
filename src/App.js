
import React from 'react';

import './App.css';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import 'bootstrap/dist/css/bootstrap.min.css';



import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import SearchBar from'./components/SearchBar';





class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('bongo videos')
  }

  onVideoSelect = (video) =>{
      this.setState({ selectedVideo: video})
  }
  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search',{
      params:{
        part: 'snippet',
        maxResults: 40,
        key: 'AIzaSyCWR_P_OvzuaHTXDszWi-WtuJZVAZwxp9k',
        q: searchTerm,

    }
  });
    
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }
  render() { 
    const {selectedVideo, videos} = this.state;
    return ( 
      <React.Fragment>
        <div className="container-fluid">
        <div className="col-10 mx-auto col-md-6 col-lg-10 my-1 searchbar">
            <SearchBar onFormSubmit ={this.handleSubmit} />
            </div>
          <div className="row">
              <div className="col-md-8 videodetail ">
              <VideoDetail video={selectedVideo} />
              </div>
              <div className="col-md-4 videolist">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
        </div>
      </React.Fragment>
      );
  }
}

export default App;


{/*
  <Grid  container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            
            
            <Grid item xs={12}>
              
              <SearchBar onFormSubmit ={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
 */}
{/*
  import React, {Component} from 'react';

import './App.css';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends Component{
  state = {
    videos: [],
    selectedVideo: null,
  }
  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCWR_P_OvzuaHTXDszWi-WtuJZVAZwxp9k',
        q: searchTerm,
    }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }
  render(){
    const {selectedVideo, videos} = this.state;
    return (
      <React.Fragment>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                
                <VideoList/>
              </Grid>
            </Grid>
              
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  
}

export default App;

 */}