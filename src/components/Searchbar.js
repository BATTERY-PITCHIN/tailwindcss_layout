import React, {Component} from 'react';

class Searchbar extends Component{
  render(){
    return (
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
        <div className="max-w-xl mb-10 lx:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        </div>
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="검색어를 적어주세요"
            required=""
            type="text"
            className="flex-grow w-full h-10 px-4 mb-3 transition duration-200 bg-white border border-gray-200 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-300 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-secondary hover:bg-deep-secondary focus:shadow-outline focus:outline-none"
          >
            SEARCH
          </button>
        </form>
      </div>
    );
  }
};

export default Searchbar;

