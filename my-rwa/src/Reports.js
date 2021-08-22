import React, { Component } from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
    //  Line Chart
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }
    chart.data = data;
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    this.chart = chart;
    // Create chart instance
    var pieChart = am4core.create("pieChart", am4charts.PieChart);
    // Add data
    pieChart.data = [{
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czech Republic",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }];
    // Add and configure Series
    let pieSeries = pieChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div className="page" id='page'>
        <table id="newtable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shubham Rai</td>
              <td>shubham.rai@globant.com</td>
              <td>Address line1</td>
            </tr>
            <tr>
              <td>Ramneet Nannra</td>
              <td>ramneet.nannra@globant.com</td>
              <td>Address line1</td>
            </tr>
          </tbody>
        </table>
        <div className="wrapper">
          <div className="header">Reports</div>
          <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
          <br /><br />
          <div id="pieChart" style={{ width: "100%", height: "500px" }}></div>
        </div>
      </div>
    );
  }
}

export default App;