import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap'
import { Div } from 'glamorous'

import './index.scss'

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }))

  render() {
    return (
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Kevin Tovar</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Github
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <Div>
    <Helmet
      title="Kevin Tovar Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Container>
      {children()}
    </Container>
  </Div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default TemplateWrapper
