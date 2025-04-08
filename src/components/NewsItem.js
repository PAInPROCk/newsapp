import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
    let {title, description, imageurl, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="card">
          <img src={!imageurl ? "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
                <p className="card-text"><small>By {author? author : "unknown"} on {new Date(date).toUTCString()}</small></p> 
              <p className="card-text">{description}</p>
              <span class="badge text-bg-secondary">{source}</span><br></br>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem