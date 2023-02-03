import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="p-0 navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow " container light>
                <img src="https://www.lkouniv.ac.in/images/logo.png"/>
         
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <div className="text-xl font-semibold ">
                        <ul className="navbar-nav flex-grow justify-end">
            
                            <NavItem className=" text-center ">
                                <NavLink tag={Link} className="text-dark hover:text-slate-50" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/studymaterials">Study Materials</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Forum</NavLink>
                            </NavItem>
                            

                    </ul>
                </div>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
