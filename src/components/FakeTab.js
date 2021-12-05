import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink, useParmas} from 'react-router-dom';

class FakeTab extends Component{

  render(){
    return (
      <div className="Tab">
          <ul>
            <li>
                <NavLink exact to="/search/factoryinfo">FACTORY</NavLink>
            </li>
            <li>
                <NavLink exact to="/search/founderest">FOUNDER</NavLink>
            </li>
          </ul>
      </div>
    );
  }
};

export default FakeTab;

