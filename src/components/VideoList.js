import React from 'react';

import VideoItem from './VideoItem';

import {Grid} from '@material-ui/core';

const VideoList =({videos, onVideoSelect}) =>{
    const listOfVideos = videos.map((video, id) =>
        <VideoItem onVideoSelect={onVideoSelect}  key={id} video={video}/> )
    return (
        <Grid container spacing={8}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;


{/*import React, { Component } from 'react'

export default class VideoList extends Component {
    render() {
        return (
<React.Fragment>
    <h1>this is a VideoList</h1>
</React.Fragment>
        )
    }
}
 */}