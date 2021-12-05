import React, {Component} from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Recommendation from './components/Recommendation';
import Searchresult from './components/Searchresult'
import SearchResultFactory from './components/SearchResultFactory';
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
                <Searchbar onChange={function(_keyword){
                    this.setState({
                        search:_keyword
                    })
                    }.bind(this)}></Searchbar>
                
                {/* <Recommendation></Recommendation> */}
                <SearchResultFactory search={this.state.search}>
                </SearchResultFactory>
                {/* <Searchresult search={this.state.search}></Searchresult> */}
            </div>
        )
    }
}

export default App;