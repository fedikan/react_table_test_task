import React, { Component } from "react";
import "./styles.css";
import Table from './components/table/table'
import Loader from './components/loader/loader'
import Information from './components/info/information'
import LoadChoser from './components/loadChoser/loadChoser'
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
    newId:1001,
  }
   loadData = async src => {
    const { sortItem, sortType } = this.state;
     const response = await fetch(src);
     const data = await response.json();
     const  sortedData = _.orderBy(data, sortItem, sortType);
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
  setAmount = src => {
    this.setState({ isLoading: true });
    this.loadData(src);
  }
  handlePageClick = ({ selected }) => {
    this.setState({ currentPage: selected })

  }
  onSearch = search => {
    this.setState({ search, currentPage: 0 })
  }

  getFilteredData() {
    const { data, search } = this.state;
    const loweredSearch=search.toLowerCase()
    if (!search) {
      return data;
    }
    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(loweredSearch)
      || item['lastName'].toLowerCase().includes(loweredSearch)
      || item['email'].toLowerCase().includes(loweredSearch)
      || item['phone'].includes(search)
    })
  }

  onAdd=()=>{
    if (!this.state.addContact){
      this.setState({
        addContact:true
      });
    }else {
      this.setState({
        addContact:false
      });
    }
   
  }
  submitHandler=item=>{ 
   const newItem=_.cloneDeep(item);    
    newItem.id=this.state.newId
    this.setState(state => {
      const newId=Math.round(Math.random()*100);
      return {data: [...state.data, newItem],newId}
    })
}


  render() {
    const pageSize = 50;
    const filteredData = this.getFilteredData()     
    const pageCount = Math.round(filteredData.length/ pageSize) 
    const displayedData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="App">
        <div className="container">
          {
            this.state.isLoaded ?

              <Table data={displayedData}
               onSearch={this.onSearch}
               sortItem={this.state.sortItem}
               sortType={this.state.sortType}
               sort={this.onSort}
               showInfo={this.showInfo}
               onAdd={this.onAdd} addContact={this.state.addContact} onSubmit={this.submitHandler}
              />

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
