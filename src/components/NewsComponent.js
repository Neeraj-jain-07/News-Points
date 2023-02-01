import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import '../App.css';
import Loader from './Loader'
import PropTypes from 'prop-types'



export class NewsComponent extends Component {
    static defaultProps = {
        pageSize:10,
        country:'in',
        category:'all',
        api:''
      }
    static propTypes ={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        category:PropTypes.string,
        api:PropTypes.string,
    }
    //  neerajrajjain21@gmail.com     => b9e94d9186c443368b45e6b5d0be4e9f
    //  neerajrajjain12@gmail.com     => aad1b842a4194fa28011873a2483c55c
    //  jneha3743@gmail.com           => 9524ed7330d54261be91cca525908830
    //    temp email                  => 84eec0f43184461a912413f992cbd5bb
    //    temp email                  => e00424d1253e49658a6f365eea1ff732
                                                                        //   --- remian today
    //    temp email                  => 1470705f1cbb4da88a0d6cdb12f83408    
    //    temp email                  => 3f12ae4bc4584589b8523109091fcba5
    // api = 'e00424d1253e49658a6f365eea1ff732'
    
   
    hanbleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=in&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        axios.get(url).then(data => {
            let newArticles = data.data.articles;
            this.setState({
                articles: newArticles,
                page: this.state.page + 1,
                loading:false
            })
        })
    }
    hanblePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=in&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        axios.get(url).then((data) => {
            let newArticles = data.data.articles;
            this.setState({
                articles: newArticles,
                page: this.state.page - 1,
                loading:false
            })
        })
    }

    searchPage = async (e) => {
        let value = Number(document.getElementById('pageNumberQuery').value);
        document.getElementById('pageNumberQuery').value ='';
        if (!value || value > Math.floor(100/this.props.pageSize)  || value > Math.floor(this.state.totalResults/this.props.pageSize)) {
            alert('page search input value can not be null or greater than 5 please search again')
            console.log('page search input value can not be null or greater than 5 please search again')
        } else {
            let url = `https://newsapi.org/v2/top-headlines?q=in&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${value}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            await axios.get(url).then((data) => {
                let newArticles = data.data.articles;
                this.setState({
                    articles: newArticles,
                    page: value,
                    loading:false
                })
            })
        }
     }    

     constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

        async componentDidMount() {
            let url = `https://newsapi.org/v2/top-headlines?q=in&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            axios.get(url).then((data) => {
                let newArticles = data.data.articles;
                this.setState({ articles: newArticles, totalResults: data.data.totalResults ,loading:false})
            })
        }
    
    
    render() {
        return (
            <div className='container my-4' >
                <h1 className='my-5'>NewsPoints - Top  headlines</h1>
               
                <h4 className='my-3'>Total Matches : {this.state.totalResults}</h4>
                 {this.state.loading && <Loader/>} 
                 {!this.state.loading &&  <div className="shortNewsContainer row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newUrl={element.url} />
                        </div>
                    })}
                </div> }
                
                <div id='paidSectoinAlert' className={`alert alert-primary ${Math.floor(100/this.props.pageSize) < this.state.page +1? 'd-block':'d-none'}`} role="alert">
                    For More News Please Go to Paid Account
                </div>
                <div className="container d-flex justify-content-center my-4">
                    <div className="form d-flex">
                        <input className='px-2' type="number" name="pageNumberQuery" id="pageNumberQuery" />
                        <button className='btn btn-info ms-1 text-white f-bold ' onClick={this.searchPage}>Load Page</button>
                    </div>
                </div>
                <div className="container d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.hanblePrevClick}>&#8249; Previous</button>

                    <button disabled={true} type="button" className="btn btn-primary">
                        <span className="badge text-bg-secondary">Page : {this.state.page}</span>
                        <span className="badge text-bg-secondary m-1">{Math.floor(this.state.totalResults / this.props.pageSize)}</span>
                    </button>

                    <button disabled={this.state.page + 1 > Math.floor(this.state.totalResults /this.props.pageSize) || Math.floor(100/this.props.pageSize) < this.state.page +1} type="button" id='btnNext' className="btn btn-info" onClick={this.hanbleNextClick}>Next &#8250;</button>
                </div>
               
            </div>
        )
    }
}
// || this.state.page > 4

export default NewsComponent
