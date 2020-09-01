import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import { NavItem, Nav } from 'react-bootstrap';
import Menu from "./Menu";
import Logo from "./Logo";
import UserPanel from "./UserPanel";
import SearchForm from "./SearchForm";
export default class Aside extends Component {
    render() {
        return (
<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
<Logo/>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
<UserPanel/>
      {/* SidebarSearch Form */}
<SearchForm/>
      {/* Sidebar Aside */}
<Menu/>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
