import React, {Component} from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';

class App extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Searchbar></Searchbar>
            </div>
        )
    }
}

export default App;