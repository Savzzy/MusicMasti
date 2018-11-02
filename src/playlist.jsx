import React, { Component } from 'react';
import './App.css'

class Playlist extends Component {


    render() {
        let playlists = this.props.playlists;
        if (playlists.length > 0) {
            return (
                <div>
                    {
                        playlists.map((playlist, k) => {
                            const playlistImg = playlist.images[0].url;
                            console.log("single playlist", playlist);
                            return (
                                <div key={k} className="playlist">
                                    <div>
                                        <img src={playlistImg} className="playImg" alt="playlist" />
                                        <span className="playlistText">{(playlist.name) ? (playlist.name) : <p></p>}</span>
                                    </div>
                            
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
export default Playlist;
