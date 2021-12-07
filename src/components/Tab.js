import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class Tab extends Component{
  constructor(props){
    super(props)
    
    this.state={
      color:"pink",
      openTab:0,

    }
  }


  render(){
    return(
      /* <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink exact to="/search/factoryinfo">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab == 1
                    ? "text-white bg-" + this.state.color + "-600"
                    : "text-" + this.state.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    openTab:1
                  })
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Factory
              </a>
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <NavLink exact to="/search/founderest">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab == 2
                    ? "text-white bg-" + this.state.color + "-600"
                    : "text-" + this.state.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    openTab:2
                  })
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Founder
              </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div> */
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab == 1
                    ? "text-white bg-" + this.state.color + "-600" +" bg-secondary"
                    : "text-" + this.state.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    openTab:1
                  })
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <NavLink exact to="/search/factoryinfo">
                Factory
                </NavLink>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (this.state.openTab == 2
                    ? "text-white bg-" + this.state.color + "-600 "  + " bg-secondary"
                    : "text-" + this.state.color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    openTab:2
                  })
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <NavLink exact to="/search/founderest">
                 Founder
                 </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Tab;

/* const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Options
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="pink" />;
    </>
  );
} */