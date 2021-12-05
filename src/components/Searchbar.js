import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink, useParmas} from 'react-router-dom';

class Searchbar extends Component{

  constructor(props){
    super(props);

    this.state = {
      keyword:null,
    }
  }

  render(){
    return (
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
        <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="검색어를 적어주세요"
            required=""
            type="text"
            className="flex-grow w-full h-10 px-4 mb-3 transition duration-200 bg-white border border-gray-200 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-300 focus:outline-none focus:shadow-outline"
            onChange = {function(e){
              let _keyword = e.target.value;
              this.setState({
                keyword:_keyword
              })
            }.bind(this)}
          />
          <button onClick={(event)=>{
            this.props.onChange(this.state.keyword)
            console.log("TAG : "+this.state.keyword)

          }}
            type="submit"
            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-secondary hover:bg-deep-secondary focus:shadow-outline focus:outline-none"
          >
            <NavLink exact to="/search">
            SEARCH
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
};

export default Searchbar;

