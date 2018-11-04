import React from "react";
import "./Resources.css";
import axios from "axios";
import cheerio from "cheerio";
import Card from "../Card";
import Notebook from "../Notebook"


class Resources extends React.Component {
  state = {
    results: [],
    note: [],
    likeArticle :[]

  };




  componentDidMount = () => {

    // Scrape title and link from website.  Then sends scraped info to back-end route '/scrape/ in folder routes/api.js
    axios.get("https://cors-anywhere.herokuapp.com/http://www.echojs.com/").then(function (response) {
      console.log(response.data);
      var $ = cheerio.load(response.data);

      // var temparray = [];

      $("article h2").each(function (i, element) {
        var result = {};
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");

        // console.log(result) //Successful

        axios.post("/scrape", result);
        // temparray.push(result);
      })
    })
 this.getNote();
    this.getData(() => {
      this.forceUpdate()
    });
    ////// End of scrape ///////
  };
  getNote = () => {
    axios.get("/notecreated").then((response) => {
      console.log(response.data);
      this.setState({
        note: response.data
      });
    });
  }

  getData = (cb) => {

    axios.get("/articles").then((res) => {
      console.log(res)
      this.setState({
        results: res.data
      }, () => {
        cb(this.state.results)
      })

    })
  };

  clickMe = () => {
    this.getData((response) => {
      this.setState({
        results: response.sort(function (a, b) {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        })
      });
    });
  }

  render() {

    return (

      <div>
        <h1 className="currentPage"> This is the Resources page. </h1>
        <button id="button" className="btn btn-outline-primary btn-sm"
          onClick={this.clickMe} >Sort Article!</button>

        {this.state.note.map((memo) => {
          return (
            <Notebook body={memo.body} />
          );
        })
        }

        {
          this.state.results.map((item) => {
            // create a route-able link for each product
            return (
              <Card title={item.title} link={item.link} currentUser={this.props.currentUser}/>
            );
          })
        }

      </div>
    );
  }
}

export default Resources;