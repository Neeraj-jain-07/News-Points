import React , {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import '../App.css';
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


 const  NewsComponent =(props)=> {
   
    

     async function updateNews(pageNO){
        props.setBar(0)
        let url = `https://newsapi.org/v2/top-headlines?q=in&country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${pageNO}&pageSize=${props.pageSize}`;
        // page.setState({loading:true})
        setloading(true)
        props.setBar(30)
        axios.get(url).then(data => {
            let newArticles = data.data.articles;
            props.setBar(60)
            setarticles(articles.concat(newArticles))
            setloading(false)
            settotalResults(data.data.totalResults)
            props.setBar(100)
        })
        
     }

    function  capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)


    useEffect(() => {
        updateNews(page);
         document.title = `${capitalizeFirstLetter(props.category)} - NewsPoints`
          // eslint-disable-next-line
    },[])
    
   
    
     const  fetchMoreData = () => {
        // page.setState({page:page+1})
       
        // console.log("start")
        let url = `https://newsapi.org/v2/top-headlines?q=in&country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
        // console.log("The value of page inside fectmoreData is : ",page+1)
        setpage(page+1)
        axios.get(url).then(data => {
            let newArticles = data.data.articles;
            setarticles(articles.concat(newArticles))
            setloading(false)
            settotalResults(data.data.totalResults)
            // page.setState({
            //     articles: page.state.articles.concat(newArticles),
            //     loading:false,
            //     totalResults: data.data.totalResults
            // })
            // console.log(page.state.articles.length)
            // console.log(page.state.totalResults)
        })
     
      };
    
        return (
                 <div >

                
                        <h1 className='my-5 text-center text-danger fw-bolder'>NewsPoints - Top  headlines </h1>
                        <div className="container newsStatus d-flex justify-content-between">
                                <h3 className='my-4 ms-3'>Category : {(props.category)[0].toUpperCase()+(props.category).slice(1)}</h3>
                                <h4 className='my-4 me-5'>Total Matches : {totalResults}</h4>
                        </div>
                  {loading && <Loader/>}
                  <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchMoreData}
                  hasMore={articles.length !== totalResults && articles.length < totalResults }
                  loader={<Loader/>} >
                    <div className="container">
                    <div className="row" style={{"paddingTop": "30px"}}>
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                        </div>
                    })}  
                     </div> 
                     </div>
                    </InfiniteScroll>          
                    
            
                  </div>
                
            
        )
}

NewsComponent.defaultProps = {
    pageSize:10,
    country:'in',
    category:'general',
    api:''   }
 NewsComponent.propTypes ={
    pageSize:PropTypes.number,
    country:PropTypes.string,
    category:PropTypes.string,
    api:PropTypes.string  }

export default NewsComponent


