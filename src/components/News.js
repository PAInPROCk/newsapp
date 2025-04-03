import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News    extends Component {
  constructor(){
    super();
    console.log("Hello I am Constructor from news component")
    this.state ={
      articles: [],
      loading: false 
    }
  }

  async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=998bc00b54a6455cb3677f195867e1b0"
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles : parsedData.articles})
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
      </div>
      
    )
  }
}

export default News