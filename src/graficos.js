import { statusFilter, genderFilter } from './src/data.js';
import data from "./data/rickandmorty/rickandmorty.js";

const element = data.results

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChartStatus);

function drawChartStatus () {
  let dataStatus = new google.visualization.DataTable;
  dataStatus.addColumn('string', 'Element');
  dataStatus.addColumn('number', 'percentege');
  dataStatus.addRows(statusFilter(element));
  let options = {
    heigth: 200,
    colors: ['#011C40', '#3CA6A6', '#014011', '#012623', '#022601'],
    'backgroundColor':{
      'fill': 'white',
      'opacity': 20,
    },
    legend: {
      textStyle: {
        color:'#022601',
        fontSize: 14,
      }
    }

  };
  let chart = new googlevisualization.PieChart(document.getElementById('grafic'));
}

