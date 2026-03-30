import React, { Component } from "react";
import { NewsComponents } from "./NewsComponent"; // or default import if needed
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
      pageSize:8,
      category:'sports'
    }
    static propTypes={
      pageSize:PropTypes.number,
      category:PropTypes.string,
    }

    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0,
        };
    }
    //componentDidMount runs after render
    async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=102558a965554749ad99f1aa1c84bd69&page=1&pageSize=${this.props.pageSize}`;
      let data=await fetch(url)
      let parseData=await data.json()
      console.log(parseData);
      this.setState({articles:parseData.articles || [], totalResults:parseData.totalResults})

    }
handleNext=async()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
  else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=102558a965554749ad99f1aa1c84bd69&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      let data=await fetch(url)
      let parseData=await data.json()
      console.log(parseData);
      
  this.setState({
    page:this.state.page+1,
    articles:parseData.articles || []
  })
  }
   
}
handlePrevious=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=102558a965554749ad99f1aa1c84bd69&page=${this.state.page-1}&pageSize=20`
      let data=await fetch(url)
      let parseData=await data.json()
      console.log(parseData);
      
  this.setState({
    page:this.state.page-1,
    articles:parseData.articles || []
  })
}
  render() {
    return (
      <div className="container my-3">
        <div className="row g-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsComponents
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 45) : ""
                  }
                  imageurl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevious}>Previous &larr;</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark"onClick={this.handleNext}> Next &rarr;</button>
        </div>
      </div>
    );
  }
}
