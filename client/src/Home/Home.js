import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home_header">
        <h1>Projects</h1>
      </div>
      <div className="Home_contents">
        <Card>
          <CardBody>
            <CardTitle>Tribute Page</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/TributePage">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Personal Portfolio Webpage</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/PersonalPortfolioWebpage">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Random Quote Machine</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/RandomQuoteMachine">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Local Weather</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/LocalWeather">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Wikipedia Viewer</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/WikipediaViewer">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Twitchtv</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/Twitchtv">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Calculator</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/Calculator">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Pomodoro Clock</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/PomodoroClock">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Tic Tac Toe Game</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/TicTacToeGame">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Simon Game</CardTitle>
            <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/SimonGame">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Markdown Previewer</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/MarkdownPreviewer">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Camper Leaderboard</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/CamperLeaderboard">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Recipe Box</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/RecipeBox">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Gameof Live</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/GameofLive">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Roguelike Game</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/RoguelikeGame">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Bar Chart</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/BarChart">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Scatterplot Graph</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/ScatterplotGraph">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Heat Map</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/HeatMap">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Force Directed Graph</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/ForceDirectedGraph">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Data Acrossthe Globe</CardTitle>
            <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/DataAcrosstheGlobe">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Timestamp Microservice</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/TimestampMicroservice">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Request Header Parser</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/RequestHeaderParser">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>U R L Shortener</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/URLShortener">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Image Search</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/ImageSearch">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>File Metadata</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/FileMetadata">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Voting App</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/VotingApp">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Nightlife Coordination</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/NightlifeCoordination">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Stock Market</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/StockMarket">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Book Trading Club</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/BookTradingClub">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Pinterest Clone</CardTitle>
            <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
            <CardText>
              <br />
              Started:
              <br />
              Completed:
            </CardText>
            <Link to="/projects/frontend/PinterestClone">
              <Button color="primary">View Project</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Home;
