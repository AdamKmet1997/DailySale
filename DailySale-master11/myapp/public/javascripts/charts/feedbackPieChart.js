google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([

    ['Feedback', ''],
    ['Positive',     5],
    ['Neutral',    2],
    ['Negative',    3]

  ]);

  var options = {

    colors:['green','orange', 'red'],
    backgroundColor: 'transparent',

  };

  var chart = new google.visualization.PieChart(document.getElementById('feedbackPiechart'));

  chart.draw(data, options);
}
