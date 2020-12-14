import axios from 'axios'

const KEY = 'AIzaSyDUderPJQs7L6oc0GKDPH1XnBQFw5LnUNI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:20,
        key:KEY,
    }
})