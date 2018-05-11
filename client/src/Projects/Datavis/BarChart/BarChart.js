import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import "./BarChart.css";
import dataset from "./GDP-data.json";
import * as d3 from "d3";
import d3Tip from "d3-tip";
/**
 * BarChart
 * displays a d3 bar chart constructed from the
 * data in dataset
 * @class BarChart
 * @extends Component
 */
class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  /**
   * componentWillMount
   * Note, it's important to pull data in from json
   * file in componentWillMount so that it's available
   * on render
   * @return {void}@memberof BarChart
   */
  componentWillMount() {
    this.setState({
      data: [...dataset.data]
    });
  }

  /**
   *componentDidMount
   * Note, it's important to build the chart
   * after componentWillMount run to ensure the
   * data is available. So, build the chart here
   * in componentDidMount
   * @return {void}@memberof BarChart
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
   * @memberof BarChart
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

  /**
   * buildChart
   * builds a d3 chart
   * @return {void}@memberof BarChart
   */
  buildChart() {
    const dataset = this.state.data;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const padding = 40;
    const height = 500;
    const width = 750;

    // set the parameters for the x axis
    const x = d3
      .scaleLinear()
      .domain([1947, 2016])
      .range([padding, width - padding]);

    // set the parameters for the y axis
    const y = d3
      .scaleLinear()
      .domain([0, 18000])
      .range([height - padding, padding]);

    // configure the content of the tooltip
    // for when the user hovers over a bar
    const tip = d3Tip()
      .attr("class", "BarChart_d3-tip")
      .offset([-10, 0])
      .html(d => {
        const date = new Date(d[0]);
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        return (
          d3.format("$,.1f")(d[1]) +
          "&nbsp;Billion<br>" +
          year +
          " - " +
          month +
          ""
        );
      });

    // create d3 chart and append to DOM
    // object with id 'chart'
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .call(tip) // add tooltip
      .call(this.responsiveChart); // make chart responsive

    // Add heading 'Gross Domestic Product'
    svg
      .append("text")
      .attr("class", "heading")
      .attr("x", width / 2 - 150)
      .attr("y", 40)
      .text("Gross Domestic Product");

    // Add x axis
    svg
      .append("g")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(d3.axisBottom(x));

    // Add label 'Years' to the x axis
    svg
      .append("text")
      .attr("class", "label")
      .attr("x", width / 2)
      .attr("y", height)
      .text("Years");

    // Add y axis
    svg
      .append("g")
      .attr("transform", "translate(" + padding + ",0)")
      .call(d3.axisLeft(y));

    // Add label 'Gross Domestic Product (billions of USD)' to y axis
    svg
      .append("text")
      .attr("class", "label")
      .attr("text-anchor", "end")
      .attr("y", padding + 5)
      .attr("x", -80)
      .attr("dy", "1em")
      .attr("transform", "rotate(-90)")
      .text("Gross Domestic Product (billions of USD)");

    // Add data to the chart
    // The mathy bits are to size each bar appropriately
    // to fit the chart
    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr(
        "x",
        (d, i) => x(d[0].slice(0, 4)) + (i % 4) * width / dataset.length
      )
      .attr("y", (d, i) => y(d[1]))
      .attr("width", Math.ceil(width / dataset.length))
      .attr("height", (d, i) => height - padding - y(d[1]))
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide);
  }

  render() {
    return (
      <div className="BarChart">
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

export default BarChart;
