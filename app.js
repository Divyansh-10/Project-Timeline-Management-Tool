google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      //[task ID, task name, start date, end data, duration , percent complet, dependencies]

       let arr = [
         ['Initiation', 'Initiation',  new Date(2021, 0, 1), new Date(2021, 5 , 1), null,  100,  null],
         [ 'Planning' , 'Planning', null, null, daysToMilliseconds(30), 25, 'Initiation'],
         ['Execution', 'Execution',  null, null, daysToMilliseconds(30), 20, 'Planning'],
         ['Deployment', 'Deployment',null, null, daysToMilliseconds(60), 0, 'Execution'],
         ['Testing', 'Testing', null, null, daysToMilliseconds(30), 100, 'Deployment']
       ];

      data.addRows(arr);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
  }
