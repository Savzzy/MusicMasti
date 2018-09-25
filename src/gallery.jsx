import React, { Component } from 'react';
import './App.css';
class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playingUrl: "",
            audio: null,
            playing: false
        }

    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
      
        if (this.state.playing) {
            this.state.audio.pause();
            this.setState({
                playing: false
            })
            if (this.state.playingUrl !== previewUrl) {
                audio.play()
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio: audio
                })
            }
       } else {
           audio.play();
           this.setState({
               playing : true,
               playingUrl : previewUrl,
               audio : audio 
           })
       }

    }

    render() {
        let tracks = this.props.tracks;
        console.log(tracks);

        if (tracks.length > 0) {
            return (

                <div>
                    {
                        tracks.map((track, i) => {
                            //console.log("track", track);
                            const trackImg = track.album.images[0].url;
                            console.log(track.preview_url);
                            return (
                                <div key={i} className="track" onClick={() => { this.playAudio(track.preview_url) }}>
                                    
                                    <img src={trackImg} className="track-img" alt="track" />
                                    <div className="track-play">
                                        <div className="track-play-inner">
                                        {
                                                this.state.playingUrl === track.preview_url 
                                                ? <span>I I</span> 
                                                :<span>&#9656;</span>
                                    }
                                        </div>
                                    </div>
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


// //es5

// //this is a function as well as a class constructor
// var Car = function(carName) {
//     this.name = carName;
// }

// var volvoCar = new Car("Volvo");

// //this is a function
// var justFunction = function() {

// }

// //es6

// //this is a class
// class Car {
//     constructor(carName) {
//         this.name = carName;
//     }
// }

// var volvoCar = new Car("Volvo");

// //this is a function and just a function and nothing more
// var justFunction = () => {

// }
