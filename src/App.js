import React, {Component} from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Recommendation from './components/Recommendation';
import SearchresultFounder from './components/SearchresultFounder'
import SearchResultFactory from './components/SearchResultFactory';
import FakeTab from './components/FakeTab';
import Facinfo from './components/Facinfo';
import Founderest from './components/Founderest';
import Footer from './components/Footer';
import Tab from './components/Tab';
import MypageContent from './components/MypageContent';
import {BrowserRouter, Route, Switch, Link, NavLink, withRouter} from 'react-router-dom';

//import axios from 'axios';

class App extends Component{

    constructor(props){
        super(props);
    
        this.state={
          search:null,
          user_id:"founder1"
        };
      }

    render(){
        return(
            <div className="App">
                <Header user_id={this.state.user_id}></Header>
                <Switch>
                    <Route exact path="/">
                        <div className="main">
                            <Searchbar onChange={function(_keyword){
                            this.setState({
                                search:_keyword
                            })}.bind(this)}/>
                            <Recommendation user_id={this.state.user_id}>
                            </Recommendation>
                        </div>
                    </Route>
                    <Route path="/search">
                        <div className="searchresult">
                            <Searchbar onChange={function(_keyword){
                                this.setState({
                                    search:_keyword
                                })}.bind(this)}/>
                            <Tab/>
                            <Route path="/search/factoryinfo">
                                <SearchResultFactory search={this.state.search}/>
                            </Route>
                            <Route path="/search/founderest">
                                <SearchresultFounder search={this.state.search}/>
                            </Route>
                        </div>
                    </Route>
                    <Route path="/factoryinfo/:info_id">
                        <Facinfo></Facinfo>
                    </Route>
                    <Route path="/founderest/:est_id">
                        <Founderest></Founderest>
                    </Route>
                    <Route path="/mypage/:user_id">
                        <MypageContent/>
                    </Route>
                </Switch>
                
                <Footer></Footer>          
                
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