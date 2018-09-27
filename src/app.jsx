import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';
import Gallery from './gallery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            artist: null,
            tracks: []
        }
    }
    componentDidMount() {
        var url = 'http://localhost:3001/getAccessToken';
        fetch(url)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(res => {
                console.log('token received', JSON.stringify(res));
                this.setState({ accessToken: res.access_token });
            })
            .catch(error => console.error('Error while getting token', error));

    }
    search() {

        //console.log("this.state", this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

        console.log('FETCH_URL', FETCH_URL);
        //API call to spotify to get the author details
        fetch(FETCH_URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + this.state.accessToken
            }
        })
            .then(res => {
                return res.json();
            })
            .then(result => {
                const artist = result.artists.items[0];
                console.log('artists', artist);
                this.setState({ artist: artist });
                // console.log("searchResult",JSON.stringify(result));
                if (artist){
                    FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;

                    fetch(FETCH_URL, {
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer " + this.state.accessToken
                      }

                
                    })
                        .then(response => response.json())
                        .then(json => {
                            console.log("artist's top tracks:", json);
                            const tracks = json.tracks;
                            this.setState({ tracks: tracks });

                        })
                    const FEATURED_PLAYSIT_URL = "https://api.spotify.com/v1/browse/featured-playlists?country=US&limit=5";
                    fetch(FEATURED_PLAYSIT_URL , {
                        method : "GET",
                        headers : {
                            "Authorization" : "Bearer " + this.state.accessToken
                        }
                    })
                        .then(playlist => playlist.json())
                        .then(playlist_json => {
                            console.log("Artist's featured playlist : " , playlist_json)
                            const  playlists = playlist_json.playlists.items;
                            console.log("playlist",playlist_json.playlists.items);
                            this.setState({playlists : playlists});
                        })
                        .catch(error => console.log(error));

                }
            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Music Master
            </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for artists"
                            query={this.state.query}
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={
                                event => {
                                    if (event.key === "Enter") {
                                        this.search()
                                    }
                                }
                            }

                        />
                        <InputGroup.Addon onClick={() => { this.search() }}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                {
                    ((this.state.artist !== null))
                        ?
                        <div>
                            <Profile
                                artist={this.state.artist}
                            />
                            <Gallery
                            tracks ={this.state.tracks}/>
                        </div>
                        : <div></div>
                }



            </div>
        );
    }


}
export default App;
