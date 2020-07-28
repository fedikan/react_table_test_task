import React, { Component } from "react";
import "./styles.css";
import Table from './table/table'
import Loader from './loader/loader.js'
import Information from './info/information'
import LoadChoser from './loadChoser/loadChoser'
import AddField from './table/addField/addField'

import ReactPaginate from 'react-paginate'
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
    sortItem: 'id',
    sortType: 'asc',
    contactData: false,
    isLoaded: false,
    currentPage: 0,
    search: '',
    addContact:false,
    newItem:{}
  }
  async loadData(src) {
    let response = await fetch(src)
    let data = await response.json();
    let sortedData = _.orderBy(data, this.state.sortItem, this.state.sortType);
    this.setState({
      isLoading: false,
      data: sortedData,
      isLoaded: true,
    })
  }


  showInfo = item => {
    this.setState({ contactData: item })
  }
  onSort = sortItem => {
    const clonedData = this.state.data.concat();
    const sortType = this.state.sortType === 'asc' ? 'desc' : 'asc';
    const sortedData = _.orderBy(clonedData, sortItem, sortType);
    this.setState({
      data: sortedData,
      sortType: sortType,
      sortItem: sortItem,
    });
  }
  setAmount = (src) => {
    this.loadData(src);
    this.setState({ isLoading: true });
  }
  handlePageClick = ({ selected }) => {
    this.setState({ currentPage: selected })

  }
  onSearch = search => {
    console.log(search);
    this.setState({ search, currentPage: 0 })
  }

  getFilteredData() {
    const { data, search } = this.state;
    if (!search) {
      return data;
    }
    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
      || item['lastName'].toLowerCase().includes(search.toLowerCase())
      || item['email'].toLowerCase().includes(search.toLowerCase())
      || item['phone'].includes(search)
    })
  }

  onAdd=()=>{
    this.setState({
      addContact:true
    });
  }
  submitHandler=newItem=>{
    this.setState({newItem});
    let clonedData=this.state.data.concat();
        clonedData.push(this.state.newItem);
    let sortedData = _.orderBy(clonedData, this.state.sortItem, this.state.sortType);
    this.setState({
      data:sortedData,
      addContact:false
    })
    console.log(this.state.data)
  }


  render() {
    const pageSize = 50;
    const filteredData = this.getFilteredData()     
    const pageCount = Math.round(filteredData.length/ pageSize) 

    const displayedData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    // debugger
    return (
      <div className="App">
        <div className="container">
          {
            this.state.isLoaded ?
            <React.Fragment>
              <AddField onAdd={this.onAdd} addContact={this.state.addContact} onSubmit={this.submitHandler}/>

              <Table data={displayedData}
               onSearch={this.onSearch}
               sortItem={this.state.sortItem}
               sortType={this.state.sortType}
               sort={this.onSort}
               showInfo={this.showInfo}
               onAdd={this.onAdd} />
              </React.Fragment>

              :
              <LoadChoser setAmount={this.setAmount} />

          }
          {
            this.state.isLoading ?
              <Loader />
              :
              null

          }
          {
            filteredData.length > 50 ?
              <div style={{

                width: "100%", display: "flex", justifyContent: "center"
              }}>
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'page-link'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'page-item'}
                  nextClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  nextLinkClassName={'page-link'}
                  forcePage={this.state.currentPage}
                />
              </div>
              : null
          }
          {

            this.state.contactData.address ?
              <Information contact={this.state.contactData} />
              : null
          }
        </div>

      </div>)
  }


}
export default App;
