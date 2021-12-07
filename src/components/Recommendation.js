import { data } from "autoprefixer";
import React, {Component} from "react";
//import {FounderRecommendation} from "../api/api";
import axios from "axios";
import {NavLink} from "react-router-dom"


class Recommendation extends Component{

  constructor(props){
    super(props)

    this.state={
      details:[],
      //user_id:nul
    }
  }

  componentDidMount(){
       let data;
       const user_id = this.props.user_id;
       //console.log("USER ID IN RC : "+user_id)
    
       axios.get("http://3.144.102.191:8000/recommend/"+user_id)
       .then(res=>{
          data = res.data;
          this.setState({
              details:data
          });
          console.log(data)
      })
      .catch(err=>console.log("AXIOS ERR2"))
  }

  render(){

        const recommend_boxes = this.state.details.map((output, id)=>{
          return(
            <a href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <NavLink to ={"/factoryinfo/"+output.id}>
              <div className="flex flex-col h-full">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      {output.title}
                    </h6>
                    <p className="text-sm text-gray-900">
                      {output.content}
                    </p>
                  </div>
                </div>
              </div>
              </NavLink>
            </a>
          )

        })
 
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <h1 className="text-3xl font-normal leading-normal mt-0 mb-2 text-pink-400">
                [사용자 맞춤화 추천 컨텐츠]
              </h1>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              </div>
              <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                
              {recommend_boxes}

              </div>
            </div>
        );
    }
};

export default Recommendation;