import React, { Component } from 'react';
import './App.css';
class Gallery extends Component {

    constructor(props){
        super(props);
        this.playAudio = this.playAudio.bind(this);

    }
    
    playAudio(previewUrl){
    let audio = new Audio(previewUrl);
    audio.play()
    }
    render() {
        let tracks = this.props.tracks;
        console.log(tracks);

        if (tracks.length > 0) {
            return (
                
                <div>
                    {   
                        tracks.map(function (track, i) {
                            console.log("track", track);
                            const trackImg = track.album.images[0].url;
                            console.log(track.preview_url);
                            return (
                                <div key={i} className="track" onClick={() => this.playAudio(track)}>

                                <img src={trackImg} className="track-img" alt="track" />
                                <p className="track-text">{track.name}</p>
                            </div>
                            )
                        })
                    }
                </div>
            )
        } else {
            return null;
        }

    }
}
export default Gallery;