import React from "react";
import { Route } from "react-router-dom";

import { TributePage } from "./Frontend/TributePage";
import { PersonalPortfolioWebpage } from "./Frontend/PersonalPortfolioWebpage";
import { RandomQuoteMachine } from "./Frontend/RandomQuoteMachine";
import { LocalWeather } from "./Frontend/LocalWeather";
import { WikipediaViewer } from "./Frontend/WikipediaViewer";
import { Twitchtv } from "./Frontend/Twitchtv";
import { Calculator } from "./Frontend/Calculator";
import { PomodoroClock } from "./Frontend/PomodoroClock";
import { TicTacToeGame } from "./Frontend/TicTacToeGame";
import { SimonGame } from "./Frontend/SimonGame";
import { MarkdownPreviewer } from "./Datavis/MarkdownPreviewer";
import { CamperLeaderboard } from "./Datavis/CamperLeaderboard";
import { RecipeBox } from "./Datavis/RecipeBox";
import { GameofLive } from "./Datavis/GameofLive";
import { RoguelikeGame } from "./Datavis/RoguelikeGame";
import { BarChart } from "./Datavis/BarChart";
import { ScatterplotGraph } from "./Datavis/ScatterplotGraph";
import { HeatMap } from "./Datavis/HeatMap";
import { ForceDirectedGraph } from "./Datavis/ForceDirectedGraph";
import { DataAcrosstheGlobe } from "./Datavis/DataAcrosstheGlobe";
import { TimestampMicroservice } from "./Backend/TimestampMicroservice";
import { RequestHeaderParser } from "./Backend/RequestHeaderParser";
import { URLShortener } from "./Backend/URLShortener";
import { ImageSearch } from "./Backend/ImageSearch";
import { FileMetadata } from "./Backend/FileMetadata";
import { VotingApp } from "./Backend/VotingApp";
import { NightlifeCoordination } from "./Backend/NightlifeCoordination";
import { StockMarket } from "./Backend/StockMarket";
import { BookTradingClub } from "./Backend/BookTradingClub";
import { PinterestClone } from "./Backend/PinterestClone";
const ProjectRoutes = () => {
  return (
    <div>
      <Route path="/projects/frontend/TributePage" component={TributePage} />
      <Route
        path="/projects/frontend/PersonalPortfolioWebpage"
        component={PersonalPortfolioWebpage}
      />
      <Route
        path="/projects/frontend/RandomQuoteMachine"
        component={RandomQuoteMachine}
      />
      <Route path="/projects/frontend/LocalWeather" component={LocalWeather} />
      <Route
        path="/projects/frontend/WikipediaViewer"
        component={WikipediaViewer}
      />
      <Route path="/projects/frontend/Twitchtv" component={Twitchtv} />
      <Route path="/projects/frontend/Calculator" component={Calculator} />
      <Route
        path="/projects/frontend/PomodoroClock"
        component={PomodoroClock}
      />
      <Route
        path="/projects/frontend/TicTacToeGame"
        component={TicTacToeGame}
      />
      <Route path="/projects/frontend/SimonGame" component={SimonGame} />
      <Route
        path="/projects/datavis/MarkdownPreviewer"
        component={MarkdownPreviewer}
      />
      <Route
        path="/projects/datavis/CamperLeaderboard"
        component={CamperLeaderboard}
      />
      <Route path="/projects/datavis/RecipeBox" component={RecipeBox} />
      <Route path="/projects/datavis/GameofLive" component={GameofLive} />
      <Route path="/projects/datavis/RoguelikeGame" component={RoguelikeGame} />
      <Route path="/projects/datavis/BarChart" component={BarChart} />
      <Route
        path="/projects/datavis/ScatterplotGraph"
        component={ScatterplotGraph}
      />
      <Route path="/projects/datavis/HeatMap" component={HeatMap} />
      <Route
        path="/projects/datavis/ForceDirectedGraph"
        component={ForceDirectedGraph}
      />
      <Route
        path="/projects/datavis/DataAcrosstheGlobe"
        component={DataAcrosstheGlobe}
      />
      <Route
        path="/projects/backend/TimestampMicroservice"
        component={TimestampMicroservice}
      />
      <Route
        path="/projects/backend/RequestHeaderParser"
        component={RequestHeaderParser}
      />
      <Route path="/projects/backend/URLShortener" component={URLShortener} />
      <Route path="/projects/backend/ImageSearch" component={ImageSearch} />
      <Route path="/projects/backend/FileMetadata" component={FileMetadata} />
      <Route path="/projects/backend/VotingApp" component={VotingApp} />
      <Route
        path="/projects/backend/NightlifeCoordination"
        component={NightlifeCoordination}
      />
      <Route path="/projects/backend/StockMarket" component={StockMarket} />
      <Route
        path="/projects/backend/BookTradingClub"
        component={BookTradingClub}
      />
      <Route
        path="/projects/backend/PinterestClone"
        component={PinterestClone}
      />
    </div>
  );
};

export default ProjectRoutes;
