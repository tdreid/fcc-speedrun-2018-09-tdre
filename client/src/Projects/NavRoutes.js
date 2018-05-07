import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavRoutes = () => {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Frontend
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to="/projects/frontend/TributePage">Tribute Page</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/PersonalPortfolioWebpage">Personal Portfolio Webpage</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/RandomQuoteMachine">Random Quote Machine</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/LocalWeather">Local Weather</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/WikipediaViewer">Wikipedia Viewer</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/Twitchtv">Twitchtv</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/Calculator">Calculator</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/PomodoroClock">Pomodoro Clock</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/TicTacToeGame">Tic Tac Toe Game</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/frontend/SimonGame">Simon Game</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Data Visualization
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to="/projects/datavis/MarkdownPreviewer">Markdown Previewer</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/CamperLeaderboard">Camper Leaderboard</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/RecipeBox">Recipe Box</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/GameofLive">Gameof Live</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/RoguelikeGame">Roguelike Game</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/BarChart">Bar Chart</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/ScatterplotGraph">Scatterplot Graph</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/HeatMap">Heat Map</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/ForceDirectedGraph">Force Directed Graph</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/datavis/DataAcrosstheGlobe">Data Acrossthe Globe</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Backend
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to="/projects/backend/TimestampMicroservice">Timestamp Microservice</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/RequestHeaderParser">Request Header Parser</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/URLShortener">U R L Shortener</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/ImageSearch">Image Search</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/FileMetadata">File Metadata</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/VotingApp">Voting App</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/NightlifeCoordination">Nightlife Coordination</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/StockMarket">Stock Market</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/BookTradingClub">Book Trading Club</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects/backend/PinterestClone">Pinterest Clone</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
}
export default NavRoutes;
