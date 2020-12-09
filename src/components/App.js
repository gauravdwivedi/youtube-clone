import React from 'react'
import SearchBar from './SearchBar'
import VideList from './VideoList'
import youtube from '../apis/youtube'


class App extends React.Component{

    state ={ videos:[], selectedVideo:null}

    onTermSubmit=async (term)=>{
            const response =await youtube.get('/search',{
                 params:{
                     q:term
                 }
             })


            console.log(response.data.items)
            this.setState({ videos:response.data.items}) 
    }

    onVideoSelect=(video)=>{
        console.log('From the App!',video)
    }

    render(){
        return(
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <VideList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>

        )
    }
}

export default App