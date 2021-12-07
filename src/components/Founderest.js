import axios from 'axios';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Founderest extends Component{
    
    constructor(props){
        super(props);

        this.state={
            details:[],
        }
      }

    componentDidMount(){
        let data;
        var est_id=this.props.match.params.est_id;
        console.log("EST_ID : "+est_id)
        

        var url="http://3.144.102.191:8000/founder/estimate/"+est_id+"/"
        console.log("FOUNDER ESTIMATE URL : "+url)
        axios.get(url)
       .then(res=>{
          data = res.data;
          this.setState({
              details:data
          });
        })
      .catch(err=>console.log("AXIOS ERR IN Factory Details "))
    }

    render(){
      const est_detail=this.state.details.map((output, id)=>{
      
        return(
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center ">
                  <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      {output.title}
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                      FACTORY ADDR OR P.NO
                    </p>
                  </div>
                  <div className="grid gap-5 row-gap-100 lg:grid-row-2">
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                      <div className="h-full p-5 border border-l-10 rounded-r">
                        <h6 className="mb-2 font-semibold leading-5">
                          {output.keyword}
                        </h6>
                        <p className="text-sm text-gray-900">
                          SHORT INRODUCTION
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                //   버튼 이벤트 생성이 필요합니다
                    type="START CHAT"
                    className="inline-flex items-center justify-center w-full h-10 px-10 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-secondary hover:bg-deep-secondary focus:shadow-outline focus:outline-none"
                    >START CHAT</button>
                </div>
                <div>
                  <img
                //   여기에 공장 썸네일이 들어가야 합니다
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt=""
                  />
                </div>
              </div>
                <div class='flex flex-col justify-center'>
                    <p class='overflow-y-scroll text-left '></p>
                    {output.content}
                </div>
            </div>
        )
      })

      return (
        <div>{est_detail}</div>
        );
      }
}

export default withRouter(Founderest);