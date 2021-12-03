import React, {Component} from "react";

class Recommendation extends Component{
    render(){
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              </div>
              <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                <a
                  href="/"
                  aria-label="View Item"
                  className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                  <div className="flex flex-col h-full">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-48"
                      alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                      <div className="p-5">
                        <h6 className="mb-2 font-semibold leading-5">
                          The doctor said
                        </h6>
                        <p className="text-sm text-gray-900">
                          Sportacus andrew weatherall goose Refined gentlemen super
                          mario des lynam alpha trion zap rowsdower.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
    }
};

export default Recommendation;