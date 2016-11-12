// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui/datepicker
//= require jquery_ujs
//= require bootstrap-sprockets
//= require raphael.min
//= require morris
//= require_tree .


$(document).ready(function(){
  $('#exercise_workout_date').datepicker({ dateFormat: 'dd-mm-yy' });

  new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'chart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: $('#chart').data('workouts'),
  // The name of the data record attribute that contains x-values. xkey: 'workout_date',
  // A list of names of data record attributes that contain y-values. ykeys: ['duration_in_min'],
  // Labels for the ykeys -- will be displayed when you hover over the // chart.
    xkey: 'workout_date',
    ykeys: ['duration_in_min'],
    labels: ['Duration (min)'],
    xLabels: "day",
    xLabelAngle: 60,
    xLabelFormat: function (x) {
    date_string = x.getFullYear() + "/" + parseInt(x.getMonth() + 1) + "/" + x.getDate();
    return date_string;
    },
    yLabelFormat: function(y) { return y + ' min'; }
    });
  });

