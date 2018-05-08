########################################################
# generate-home.sh
# Uses a list of projects and generates home
# component that displays each of them in a card
########################################################

mkdir ../src/Home

# Frontend project list
declare -a Frontend_projects=(
  "TributePage"
  "PersonalPortfolioWebpage"
  "RandomQuoteMachine"
  "LocalWeather"
  "WikipediaViewer"
  "Twitchtv"
  "Calculator"
  "PomodoroClock"
  "TicTacToeGame"
  "SimonGame"
);

# Datavis project list
declare -a Datavis_projects=(
  "MarkdownPreviewer"
  "CamperLeaderboard"
  "RecipeBox"
  "GameofLive"
  "RoguelikeGame"
  "BarChart"
  "ScatterplotGraph"
  "HeatMap"
  "ForceDirectedGraph"
  "DataAcrosstheGlobe"
);

# Backend project list
declare -a Backend_projects=(
  "TimestampMicroservice"
  "RequestHeaderParser"
  "URLShortener"
  "ImageSearch"
  "FileMetadata"
  "VotingApp"
  "NightlifeCoordination"
  "StockMarket"
  "BookTradingClub"
  "PinterestClone"
);



# Create the Home Component
cat << EOT >> ../src/Home/Home.js
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
EOT

for project in ${Frontend_projects[@]}
do
NAME=`echo ${project} | sed -e 's/\([A-Z]\)/ \1/g' -e 's/^ //'`
cat << EOT >> ../src/Home/Home.js
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Image of ${NAME} Project" />
        <CardBody>
          <CardTitle>${NAME}</CardTitle>
          <CardSubtitle>FreeCodeCamp Frontend Project</CardSubtitle>
          <CardText>Description</CardText>
        </CardBody>
      </Card>
EOT
done
for project in ${Datavis_projects[@]}
do
NAME=`echo ${project} | sed -e 's/\([A-Z]\)/ \1/g' -e 's/^ //'`
cat << EOT >> ../src/Home/Home.js
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Image of ${NAME} Project" />
        <CardBody>
          <CardTitle>${NAME}</CardTitle>
          <CardSubtitle>FreeCodeCamp Datavis Project</CardSubtitle>
          <CardText>Description</CardText>
        </CardBody>
      </Card>
EOT
done
for project in ${Backend_projects[@]}
do
NAME=`echo ${project} | sed -e 's/\([A-Z]\)/ \1/g' -e 's/^ //'`
cat << EOT >> ../src/Home/Home.js
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Image of ${NAME} Project" />
        <CardBody>
          <CardTitle>${NAME}</CardTitle>
          <CardSubtitle>FreeCodeCamp Backend Project</CardSubtitle>
          <CardText>Description</CardText>
        </CardBody>
      </Card>
EOT
done
cat << EOT >> ../src/Home/Home.js
    </div>
  );
}

export default Home;
EOT

# Create the Home CSS
cat << EOT >> ../src/Home/Home.scss
.Home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  >.card {
    max-width: 400px;
    width: 400px;
    margin: 10px auto;
    display: block;
  }
}
EOT

cat << EOT >> ../src/Home/index.js
export { default as Home } from "./Home";
EOT
