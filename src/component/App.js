import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = { videos: [] };

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term
            } 
        });
        console.log(response);
        this.setState({videos: response.data.items});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                {this.state.videos.length} Videos.
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;