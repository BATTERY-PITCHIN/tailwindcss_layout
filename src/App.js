import React, {Component} from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Recommendation from './components/Recommendation';
import SearchresultFounder from './components/SearchresultFounder'
import SearchResultFactory from './components/SearchResultFactory';
import FakeTab from './components/FakeTab';
import Facinfo from './components/Facinfo';
import {BrowserRouter, Route, Switch, Link, NavLink, useParmas} from 'react-router-dom';

//import axios from 'axios';

class App extends Component{

    constructor(props){
        super(props);
    
        this.state={
          search:null,
          
        };
      }

    render(){
        return(
            <div className="App">
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <div className="main">
                            <Searchbar onChange={function(_keyword){
                            this.setState({
                                search:_keyword
                            })}.bind(this)}/>
                            <Recommendation/>
                        </div>
                    </Route>
                    <Route path="/search">
                        <div className="searchresult">
                            <Searchbar onChange={function(_keyword){
                                this.setState({
                                    search:_keyword
                                })}.bind(this)}/>
                            <FakeTab/>
                            <Route path="/search/factoryinfo">
                                <SearchResultFactory search={this.state.search}/>
                            </Route>
                            <Route path="/search/founderest">
                                <SearchresultFounder search={this.state.search}/>
                            </Route>
                        </div>
                    </Route>
                    <Route path="/factoryinfo/:factory_id">
                        <Facinfo></Facinfo>
                    </Route>
                </Switch>                
                
                {/* <Searchbar onChange={function(_keyword){
                    this.setState({
                        search:_keyword
                    })}.bind(this)}>
                </Searchbar> */}
                {/* <Recommendation></Recommendation> */}
                {/* <SearchResultFactory search={this.state.search}>
                </SearchResultFactory> */}
                {/* <SearchresultFounder search={this.state.search}>
                </SearchresultFounder> */}
                {/* <Facinfo></Facinfo> */}
            </div>
        )
    }
}

export default App;