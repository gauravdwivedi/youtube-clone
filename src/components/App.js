import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import VideList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'


const App=()=>{

  const [videos,search] = useVideos('cars')
    
    
    const [selectedVideo,setSelectedVideo] =useState(null)

    useEffect(() => {
        setSelectedVideo(videos[0])  
    }, [videos])
    

    

//   const  onVideoSelect=(video)=>{
//             setSelectedVideo(video)
//     }

    
        return(
                <div className="ui container">
                    <SearchBar onFormSubmit={search}/>
                    <div className="ui grid">
                        <div className="ui row"> 

                       <div className="eleven wide column"><VideoDetail video={selectedVideo}/></div>
                    <div className="five wide column"><VideList 
                     videos={videos} 
                     onVideoSelect={setSelectedVideo}/> </div></div>
                    
                </div>
                </div>

        )
    }


export default App