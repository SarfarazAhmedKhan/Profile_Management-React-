import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { NavLink as RouteNavLink } from "react-router-dom";
import '../../../App.css';

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Item: [
        {
          title: "Dashboard",
          to: "/home-overview",
          htmlBefore: '<i class="material-icons">home</i>',
        },
        {
          title: "Freelancer",
          htmlBefore: '<i class="material-icons">person_add</i>',
          to: "/freelancers",
        },
        {
          title: "Register",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/freelancers-regsitration"
        },
        {
          title: "View",
          htmlBefore: '<i class="material-icons">view_module</i>',
          to: "/view"
        },
        {
          title: "Search By",
          htmlBefore: '<i class="material-icons">search</i>',
          to: "/freelancers"
        },
        {
          title: "Software House",
          htmlBefore: '<i class="material-icons">person_add</i>',
          to: "/software-house",
        },
        {
          title: "Register",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/software-house-registration"
        },
        {
          title: "View",
          htmlBefore: '<i class="material-icons">view_module</i>',
          to: "/s"
        },
        {
          title: "Search By",
          htmlBefore: '<i class="material-icons">search</i>',
          to: "/wl"
        },
        {
          title: "Client",
          htmlBefore: '<i class="material-icons">person_add</i>',
          to: "vew",
        },
        {
          title: "Register",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/a;lsk"
        },
        {
          title: "View",
          htmlBefore: '<i class="material-icons">view_module</i>',
          to: "/askl"
        },
        {
          title: "Search By",
          htmlBefore: '<i class="material-icons">search</i>',
          to: "/;,"
        },
      ]
    };

  }


  render() {
    const { Item } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {Item.map((item, idx) => {
            if (item.title == "Register" || item.title == "View" || item.title == "Search By") {
              return (
                <NavLink className="navLink" tag={RouteNavLink} to={item.to}>
                  {item.htmlBefore && (
                    <div
                      className="d-inline-block item-icon-wrapper"
                      dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                    />
                  )}
                  {item.title && <span className="navbarItem">{item.title}</span>}
                </NavLink>
              )
            }
            if (item.title == "Freelancer" || item.title == "Software House" || item.title == "Client") {
              return (
                <NavItem>
                  <NavLink >
                    {item.htmlBefore && (
                      <div
                        className="d-inline-block item-icon-wrapper"
                        dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                      />
                    )}
                    {item.title && <span>{item.title}</span>}
                  </NavLink>
                </NavItem>
              )
            } else {
              return (
                <NavItem>
                  <NavLink tag={RouteNavLink} to={item.to}>
                    {item.htmlBefore && (
                      <div
                        className="d-inline-block item-icon-wrapper"
                        dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                      />
                    )}
                    {item.title && <span>{item.title}</span>}
                  </NavLink>
                </NavItem>
              )
            }
          })}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
