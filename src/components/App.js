import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import VideList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'



const App=()=>{

  
    
    const [videos,setVideos] =useState([])
    const [selectedVideo,setSelectedVideo] =useState(null)

  

    useEffect(()=>{
        onTermSubmit('toys');
    },[])
    

 const   onTermSubmit=async (term)=>{
            const response =await youtube.get('/search',{
                 params:{
                     q:term
                 }
             })


            console.log(response.data.items)
            
                 setVideos(response.data.items)
                setSelectedVideo(response.data.items[0]) 
    }

//   const  onVideoSelect=(video)=>{
//             setSelectedVideo(video)
//     }

    
        return(
                <div className="ui container">
                    <SearchBar onFormSubmit={onTermSubmit}/>
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