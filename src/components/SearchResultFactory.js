import React, {Component} from 'react';
import axios from "axios";
import { data } from 'autoprefixer';

class SearchResultFactory extends Component{

  constructor(props){
    super(props)

    this.state={
      details:[]
    }
  }

  componentDidMount(){
       let data;
       axios.get("http://3.144.102.191:8000/factory/information/")
       .then(res=>{
          data = res.data;
          this.setState({
              details:data
          });
          console.log(data)
      })
      .catch(err=>console.log("AXIOS ERR IN SEARCHRESULT"))
  }

  render(){
    const result_boxes = this.state.details.map((output, id)=>{
      console.log("keyword in SEARCHRESULT1 : "+this.props.search)
      if(this.props.search == null)
        return
      else if(this.props.search == output.keyword){
        return(
          <a href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
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
          </a>
        )
      }
    })

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          
        {result_boxes}

        </div>
      </div>
    );
  }

    /* const result_boxes = this.state.founders.map((output, id)=>{
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
                        {output.item_name}
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
    })



    return(
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-light-blue-500">
          <div className="max-w-screen-lg sm:mx-auto ">
              {result_boxes}
          </div>
      </div>
    )
  } */
}

export default SearchResultFactory;