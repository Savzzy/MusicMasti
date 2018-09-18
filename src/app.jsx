import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            artist: null
        }
    }
    componentDidMount() {
        var url = 'http://localhost:3001/getAccessToken';
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log('token received', JSON.stringify(res));
                this.setState({ accessToken: res.access_token });
            })
            .catch(error => console.error('Error', error));

    }
    search() {

        console.log("this.state", this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
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
                    this.state.artist !== null
                        ?
                        <div>
                            <Profile
                                artist={this.state.artist}
                            />
                            <div className="Gallery">
                                Gallery
                    </div>
                        </div>
                        : <div></div>
                }



            </div>
        );
    }


}
export default App;
