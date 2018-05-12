import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import dataset from "./countries.json";
import * as d3 from "d3";
import d3Tip from "d3-tip";
import * as d3ScaleChromatic from "d3-scale-chromatic";

import "./ForceDirectedGraph.css";

class ForceDirectedGraph extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  /**
   * componentWillMount
   * Note, it's important to pull data in from json
   * file in componentWillMount so that it's available
   * on render
   * @return {void}
   * @memberof ForceDirectedGraph
   */
  componentWillMount() {
    const data = JSON.parse(JSON.stringify(dataset));
    this.setState({
      data
    });
  }

  /**
   *componentDidMount
   * Note, it's important to build the chart
   * after componentWillMount run to ensure the
   * data is available. So, build the chart here
   * in componentDidMount
   * @return {void}
   * @memberof ForceDirectedGraph
   */
  componentDidMount() {
    this.buildChart();
  }

  /**
   * responsiveChart
   * Turns the selected chart responsive
   *
   * Adapted from:
   * https://brendansudol.com/writing/responsive-d3
   * @memberof ForceDirectedGraph
   */
  responsiveChart = svg => {
    const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width"), 10),
      height = parseInt(svg.style("height"), 10),
      aspect = width / height;

    const resize = () => {
      const targetWidth = parseInt(container.style("width"), 10);
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
    };

    svg
      .attr("viewBox", "0 0 " + width + " " + height)
      .attr("perserveAspectRatio", "xMinYMid")
      .call(resize);

    d3.select(window).on("resize." + container.attr("id"), resize);
  };

  buildChart() {}

  render() {
    return (
      <div className="ForceDirectedGraph">
        <div className="wrapper">
          <Card>
            <CardBody>
              <div id="chart" />
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default ForceDirectedGraph;
