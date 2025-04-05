import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello I am Constructor from news component")
    this.state ={
      articles: [],
      loading: false ,
      page: 1
    }
  }

  async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=998bc00b54a6455cb3677f195867e1b0&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles : parsedData.articles, totalResult: parsedData.totalResult})
  }

   handlePreviousClick = async() =>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=998bc00b54a6455cb3677f195867e1b0&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({})
    this.setState({
      page: this.state.page-1,
      articles : parsedData.articles
    })
  }

  handleNextClick= async() =>{
    console.log("Next")
    if(this.state.page+1 > Math.ceil(this.state.totalResult/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=998bc00b54a6455cb3677f195867e1b0&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
      page: this.state.page+1,
      articles : parsedData.articles
    })
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  title={  element.title && element.title.length >= 45
                  ? element.title.slice(0, 45) + "..."
                  : element.title} 
                  description={ element.description && element.description.length >= 60
                    ? element.description.slice(0, 60) + "..."
                    : element.description} imageurl={element.urlToImage} newsUrl={element.url}></NewsItem>
        </div>
        })}  
       </div>
       <div className='container my-3 d-flex justify-content-between'>
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div>
      
    )
  }
}

export default News