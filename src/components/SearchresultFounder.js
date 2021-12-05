import React, {Component} from 'react';
import axios from "axios";
import { data } from 'autoprefixer';

class SearchresultFounder extends Component{

  constructor(props){
    super(props)

    this.state={
      details:[]
    }
  }

  componentDidMount(){
       let data;
       axios.get("http://3.144.102.191:8000/founder/estimate/")
       .then(res=>{
          data = res.data;
          this.setState({
              details:data
          });
          console.log(data)
      })
      .catch(err=>console.log("AXIOS ERR IN SEARCHRESULT FOUNDER"))
  }

  render(){
    const result_boxes = this.state.details.map((output, id)=>{
      console.log("keyword in SEARCHRESULT in founder : "+this.props.search)
      if(this.props.search == null)
        return
      else if(this.props.search == output.keyword){
        return(
          <div className="flex border-red-500  flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div className="mb-4 lg:mb-0">
                    <img
                        className="object-cover w-24 h-24 rounded-full shadow"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                      {output.title}
                    </h5>
                    <div className="relative pr-8">
                    <p className="text-base text-gray-700 md:text-lg">
                        {output.content}
                    </p>
                    </div>
                </div>
                <div className="flex justify-start w-56 lg:justify-end">
                    <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    Chat
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                    </a>
                </div>
            </div>
        )
      }
    })

    return(
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-light-blue-500">
          <div className="max-w-screen-lg sm:mx-auto ">
              {result_boxes}
          </div>
      </div>
    )
  }
}


export default SearchresultFounder;