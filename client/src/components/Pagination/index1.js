import React, { Component } from "react";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
// require("../../../node_modules/bootstrap/less/bootstrap.less");
// // @import "~bootstrap/less/bootstrap.less";
// @import "../../../node_modules/bootstrap/less/bootstrap.less";
// itemClass="page-item"
// linkClass="page-link"
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
 
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={25}
          totalItemsCount={175}
          pageRangeDisplayed={7}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default Page