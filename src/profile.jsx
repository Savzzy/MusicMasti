import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        let artist = { name: '', followers: { total: '' }, images: [{ url: '' }], genres: [] };
        artist = this.props.artist !== null ? this.props.artist : artist
        const stockImage = "https://image.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg"
        if (this.props.artist){

            return (
                <div className='profiles'>
                    <img
                        alt="Profile"
                        className='profile-img'
                        src={artist.images[0] ? artist.images[0].url : stockImage}
                    />
                    <div className='profile-info'>
                        <div className='profile-name'>{artist.name}</div>
                        <div className='profile-followers'>{artist.followers.total} followers</div>
                        <div className='profile=genre'>
                            {
                                artist.genres.map((genre, k) => {
                                    genre = genre !== artist.genres[artist.genres.length - 1] ? `${genre},` : `& ${genre}`;
                                    return (
                                        <span key={k}>{genre}</span>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            )

        }
        else {
            return(
                <div> No album exist for the entered author.. </div>
            )
        }
        
    }
}

export default Profile;