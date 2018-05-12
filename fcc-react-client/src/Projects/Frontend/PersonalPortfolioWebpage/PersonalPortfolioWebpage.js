import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardImg,
  CardText
} from "reactstrap";

import "./PersonalPortfolioWebpage.css";

const projects = [
  {
    key: 1,
    name: "Tribute Page",
    image: "/images/tribute_page.png"
  },
  {
    key: 2,
    name: "Random Quote",
    image: "/images/random_quote_machine.png"
  },
  {
    key: 3,
    name: "Local Weather",
    image: "/images/local_weather.png"
  },
  {
    key: 4,
    name: "Wikipedia Viewer",
    image: "/images/wikipedia_viewer.png"
  },
  {
    key: 5,
    name: "Twitch TV",
    image: "/images/twitch_tv.png"
  },
  {
    key: 6,
    name: "Calculator",
    image: "/images/javascript_calculator.png"
  },
  {
    key: 7,
    name: "Pomodoro Clock",
    image: "/images/pomodoro_clock.png"
  },
  {
    key: 8,
    name: "Tic Tac Toe",
    image: "/images/tic_tac_toe.png"
  }
];
class PersonalPortfolioWebpage extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <div class="PersonalPortfolioWebpage">
            <section class="PersonalPortfolioWebpage_about" id="about">
              <div>
                <Row>
                  <Col xs="12">
                    <h1>P1xt</h1>
                    <p>
                      Freelance Software Engineer specializing in full stack
                      JavaScript Web development.
                    </p>
                  </Col>
                  <Col xs="12">
                    <h2>Current Focus</h2>
                    <hr />
                    <h3>Professionally</h3>
                    <ul>
                      <li>Angular</li>
                      <li>Node.js</li>
                      <li>Ionic</li>
                    </ul>

                    <h3>Speedrun</h3>
                    <ul>
                      <li>React.js</li>
                      <li>Node.js</li>
                      <li>Phaser.js</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </section>
            <section class="PersonalPortfolioWebpage_portfolio" id="portfolio">
              <h1>Portfolio</h1>
              <p>Examples of my recent work:</p>
              <div class="projects">
                <Row>
                  {projects.map(project => (
                    <Col key={project.key} xs="12" md="6">
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          alt="project"
                          src={project.image}
                        />
                        <CardHeader>
                          <CardTitle>{project.name}</CardTitle>
                          <CardSubtitle>May 2018 Speedrun</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                          <CardText>
                            Implementation of the Free Code Camp {project.name}{" "}
                            project in React.js for May 2018 Speedrun.
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </section>
            <section class="PersonalPortfolioWebpage_contact" id="contact">
              <h1>Contact</h1>
              <p>
                You can get ahold of me on{" "}
                <a href="https://twitter.com/P1xt">Twitter</a> and sometimes I
                write some stuff on{" "}
                <a href="https://medium.com/@P1xt">Medium</a>.
              </p>
              <p>
                Though, truth be told, this is a throwaway project for a
                speedrun I'm doing so caveat emptor - if you're using this to
                contact me, you're probably going to be disappointed.
              </p>
            </section>
          </div>
        </Container>
      </div>
    );
  }
}

export default PersonalPortfolioWebpage;
