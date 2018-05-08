import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Tribute Page Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Personal Portfolio Webpage Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Random Quote Machine Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Local Weather Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Wikipedia Viewer Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Twitchtv Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Calculator Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Pomodoro Clock Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Tic Tac Toe Game Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Simon Game Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Markdown Previewer Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Camper Leaderboard Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Recipe Box Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Gameof Live Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Roguelike Game Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Bar Chart Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Scatterplot Graph Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Heat Map Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Force Directed Graph Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Data Acrossthe Globe Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Timestamp Microservice Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Request Header Parser Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of U R L Shortener Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Image Search Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of File Metadata Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Voting App Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Nightlife Coordination Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Stock Market Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Book Trading Club Project"
          />
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
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Image of Pinterest Clone Project"
          />
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
