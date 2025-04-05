import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am Constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=998bc00b54a6455cb3677f195867e1b0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  handlePreviousClick = async () => {
    console.log("Previous");
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, this.fetchNews);
    }
  };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({ page: this.state.page + 1 }, this.fetchNews);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Monkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={
                  element.title && element.title.length >= 45
                    ? element.title.slice(0, 45) + "..."
                    : element.title
                }
                description={
                  element.description && element.description.length >= 60
                    ? element.description.slice(0, 60) + "..."
                    : element.description
                }
                imageurl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
