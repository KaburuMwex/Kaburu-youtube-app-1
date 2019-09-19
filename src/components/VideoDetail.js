import React from 'react';
import {Paper, Typography} from '@material-ui/core';


const VideoDetail = ({ video }) =>{

    if(!video) return <div>Loading...</div>
        console.log(video);
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <div className=" card">
                <div className="img-container" style={{height:'600px', width:'100%',position:'relative'}} >
                    <iframe className="card-img-top" height="100%" width="100%" src={videoSrc} />
                </div>
                <div className="card-footer card-footer d-flex justify-content-between">
                    <h6>{video.snippet.title} - {video.snippet.channelTitle}</h6>
                    <h5>{video.snippet.channelTitle}</h5>
                    
                </div>
                <div>
                    <p>{video.snippet.description}</p>
                    <h5>publishedAt: {video.snippet.publishedAt}</h5>
                    </div>
            </div>
        </React.Fragment>
        
    );
}
export default VideoDetail;

{/*
    <Paper elevation={6} style={{height:'5%'}}>
                <iframe frameBorder="0" height="100%" width="100%" 
                title="video player" src={videoSrc} />
            </Paper>
            <Paper elevation={6}  style={{padding:'8px'}}>


                <Typography variant="h4">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </Typography>


                <Typography variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography>


                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
 */}


    {/*
        <div className="" >
            <iframe frameBorder="0" height="100%" width="100%" 
                title="video player" src={videoSrc} />
            </div>
     */}


    {/*
        <Paper elevation={6} style={{height:'5%'}}>
                <iframe frameBorder="0" height="100%" width="100%" 
                title="video player" src={videoSrc} />
            </Paper>
            <Paper elevation={6}  style={{padding:'8px'}}>


                <Typography variant="h4">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </Typography>


                <Typography variant="subtitle1">
                    {video.snippet.channelTitle}
                </Typography>


                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
     */}