import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import '../App.css';
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


 class NewsComponent extends Component {
    static defaultProps = {
        pageSize:10,
        country:'in',
        category:'general',
        api:''   }

    static propTypes ={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        category:PropTypes.string,
        api:PropTypes.string  }
    

     async updateNews(pageNO){
        this.props.setBar(0)
        let url = `https://newsapi.org/v2/top-headlines?q=in&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${pageNO}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        this.props.setBar(30)
        axios.get(url).then(data => {
            let newArticles = data.data.articles;
            this.props.setBar(60)
            this.setState({
                articles: this.state.articles.concat(newArticles),
                loading:false,
                totalResults: data.data.totalResults
            })
            this.props.setBar(100)
        })
        
     }

  

      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
     constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsPoints`
    }

     componentDidMount() {          
        this.updateNews(this.state.page)
      }
    
      fetchMoreData = () => {
        this.setState({page:this.state.page+1})
        // console.log("start")
        let url = `https://newsapi.org/v2/top-headlines?q=in&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // console.log("The value of page inside fectmoreData is : ",this.state.page+1)
        axios.get(url).then(data => {
            let newArticles = data.data.articles;
            this.setState({
                articles: this.state.articles.concat(newArticles),
                loading:false,
                totalResults: data.data.totalResults
            })
            // console.log(this.state.articles.length)
            // console.log(this.state.totalResults)
        })
     
      };
    
    
    render() {
        return (
                 <div >

                
                        <h1 className='my-5 text-center text-danger fw-bolder'>NewsPoints - Top  headlines </h1>
                        <div className="container newsStatus d-flex justify-content-between">
                                <h3 className='my-4 ms-3'>Category : {(this.props.category)[0].toUpperCase()+(this.props.category).slice(1)}</h3>
                                <h4 className='my-4 me-5'>Total Matches : {this.state.totalResults}</h4>
                        </div>

                  <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length !== this.state.totalResults && this.state.articles.length < this.state.totalResults }
                  loader={<Loader/>} >
                    <div className="container">
                    <div className="row" style={{"paddingTop": "30px"}}>
                    {this.state.articles.map((element) => {
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
}


export default NewsComponent


//  <div id='paidSectoinAlert' className={`alert alert-primary ${Math.floor(100/this.props.pageSize) < this.state.page +1? 'd-block':'d-none'}`} role="alert">
//                     For More News Please Go to Paid Account
//                 </div>
//                 <div className="container d-flex justify-content-center my-4">
//                     <div className="form d-flex">
//                         <input className='px-2' type="number" name="pageNumberQuery" id="pageNumberQuery" />
//                         <button className='btn btn-sm btn-info ms-1 text-white f-bold ' onClick={this.searchPage}>Load Page</button>
//                     </div>
//                 </div>
//                 <div className="container d-flex justify-content-between my-4" style={{"height": "32px"}}>
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-info" onClick={this.hanblePrevClick}>&#8249; Previous</button>

//                     <button disabled={true} type="button" className="btn btn-sm btn-primary">
//                         <span className="badge text-bg-secondary">Page : {this.state.page}</span>
//                         <span className="badge text-bg-secondary m-1">{Math.ceil(this.state.totalResults / this.props.pageSize)}</span>
//                     </button>

//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize) || Math.floor(100/this.props.pageSize) < this.state.page +1} type="button" id='btnNext' className="btn btn-sm btn-info" onClick={this.hanbleNextClick}>Next &#8250;</button>
//                 </div> 



//  neerajrajjain21@gmail.com     => b9e94d9186c443368b45e6b5d0be4e9f
    //  neerajrajjain12@gmail.com     => aad1b842a4194fa28011873a2483c55c
    //  jneha3743@gmail.com           => 9524ed7330d54261be91cca525908830
    //    temp email                  => 84eec0f43184461a912413f992cbd5bb
    //    temp email                  => e00424d1253e49658a6f365eea1ff732
                                                                        //   --- remian today
    //    temp email                  => 1470705f1cbb4da88a0d6cdb12f83408    
    //    temp email                  => 3f12ae4bc4584589b8523109091fcba5
    // api = 'e00424d1253e49658a6f365eea1ff732'




 // hanbleNextClick = async () => {
    //     this.updateNews(this.state.page + 1)
    // }
    // hanblePrevClick = async () => {
    //         this.updateNews( this.state.page - 1 )
    // }



    // searchPage = async (e) => {
    //     let value = Number(document.getElementById('pageNumberQuery').value);
    //     document.getElementById('pageNumberQuery').value ='';
    //     if (!value || value > Math.floor(100/this.props.pageSize)  || value > Math.ceil(this.state.totalResults/this.props.pageSize)) {
    //         alert('page search input value can not be null or greater than 5 please search again')
    //         console.log('page search input value can not be null or greater than 5 please search again')
    //     } else {
    //         this.updateNews(value)
    //     }
    //  }  

    // !this.state.loading &&