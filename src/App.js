import React, {Component} from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Recommendation from './components/Recommendation';
import axios from 'axios';

class App extends Component{

/*     state = {details:[],}

    componentDidMount(){
        let data;
        axios.get("http://3.144.102.191:8000/recommend/founder1")
        .then(res=>{

            data = res.data;
            this.setState({
                details:data
            });
        })
        .catch(err=>console.log("AXIOS ERR1"))
    }
 */
    render(){
        return(
            <div>
                <Header></Header>
                <Searchbar></Searchbar>
                <Recommendation></Recommendation>
                {/* {this.state.details.map((output, id)=>(
                    <div>
                        <h2>{output.title}</h2>
                    </div>
                )   )} */}
            </div>
        )
    }
}

export default App;