import React, {useState} from 'react'
import axios from 'axios'
import NewsUI from './News-UI'

const News = () => {

const [news,setNews] = useState([])    

axios.get("https://newsdata.io/api/1/news?apikey=pub_65940dd47f8c725cf5ef39fa683d900b87ae")
.then((res) => {
    setNews(res.data.results)
})

  return (
    <div>
    Newsssssssss
    {news.map((val) => (
        <div>
            <NewsUI 
                key={val.content}
                image={val.image_url}
                title={val.title}
                link={val.link}
                info={val.description}
            />
         </div>
    ))}
    </div>
    )
    }
export default News