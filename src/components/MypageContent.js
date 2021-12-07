import React, {Component} from 'react';
//import estimate from './estimate.png';
//import menubar from './menubar.png';

class MypageContent extends Component{
    render(){
        return(
            <div className="px-3 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 lg:py-10">
              <div className="border-b-2 max-w-screen-lg sm:mx-auto">
                <div class= "pt-10 bg-gray-100 flex flex-row items-start py-4 sm:px-4 lg:flex-row ">
                  <img
                  // w는 가로(사진 꽉 채우지 않음)
                          // 이미지 class name for 문 필요
                              className="object-cover w-32 h-32 rounded-full"
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                              alt="Person"
                      />
                  <div class='pl-5 pt-2'>
                    <p class='font-semibold text-xl'>
                      {/* user name DB 연동 필요 */}
                      User name
                      </p>
                      <p class='pb-3 pt-3 font-thin text-sm'>
                        안녕하세요. 저는 인천 광동구에서 패션 사업을 하고 있는 김명국입니다.
                      </p>
                      <button
                      type="edit profile"
                      className="inline-flex items-center justify-center w-full h-8 px-6 text-xs font-light tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-secondary hover:bg-deep-secondary focus:shadow-outline focus:outline-none"
                    >Edit your profile</button>
                  </div>
                </div>
             </div>
            </div>      
        )
    }
}
export default MypageContent;