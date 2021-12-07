import axios from 'axios';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Facinfo extends Component{
    
    constructor(props){
        super(props);

        this.state={
            details:[],
            f_id:null,
            fac_info:{
                "id":"Not Found",
                "title":"Not Found",
                "content": "Not Found",
                "date": "Not Found",
                "keyword": "Not Found",
                "factoryowner_id": "Not Found"
            }
        }
    }

    componentDidMount(){
        let data;
        //var params=this.props.match.params.id;
        var factory_id=this.props.match.params.factory_id;

        this.setState({
            f_id:factory_id
        })

        //var url="http://3.144.102.191:8000/factory/information"
        axios.get("http://3.144.102.191:8000/factory/information")
       .then(res=>{
          data = res.data;
          this.setState({
              details:data
          });
          console.log("TAG1:"+data)
      })
      .catch(err=>console.log("AXIOS ERR IN Factory Details "))
    }

    render(){

        this.state.details.map((output, id)=>{
            if(this.state.f_id == output.factoryowner_id){
                this.setState({
                    fac_info:output
                })
                console.log("TAG:"+this.state.fac_info.id)
                console.log("TAG:"+this.state.fac_info.title)
                return
            }
        })

        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center ">
                  <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      {this.state.fac_info.title}
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                      공장 주소 혹은 전화번호
                    </p>
                  </div>
                  <div className="grid gap-5 row-gap-100 lg:grid-row-2">
                    <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                      <div className="h-full p-5 border border-l-10 rounded-r">
                        <h6 className="mb-2 font-semibold leading-5">
                          키워드
                        </h6>
                        <p className="text-sm text-gray-900">
                          한줄 소개
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
                    {/* 뭔가 박스안에 싸여있음 좋을 것 같다... */}
                    <p class='overflow-y-scroll text-left '></p>
                    {this.state.fac_info.content}
                </div>
            </div>
          );
        }
    }
    export default withRouter(Facinfo);