import React, { Component } from 'react';
import './App.css';
class Gallery extends Component {
    render() {
        let tracks = this.props.tracks;
        console.log(tracks);

        if(tracks.length > 0) {
            return (
                <div>
                    {
                        tracks.map(function (track, i) {
                           return <div>tracks</div>
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