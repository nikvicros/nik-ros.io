// Bar Chart
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            "HMTL",
            "CSS",
            "JavaScript",
            "PHP",
            "WordPress",
            "NodeJS"
        ],
        datasets: [
            {
                data: [
                    90,
                    80,
                    75,
                    70,
                    90,
                    65
                ],
                backgroundColor: [
                    'rgba(153,255,51,0.4)',
                    'rgba(46, 204, 113,.5)',
                    'rgba(153,255,51,0.4)',
                    'rgba(46, 204, 113,.5)',
                    'rgba(153,255,51,0.4)',
                    'rgba(46, 204, 113,.5)'
                ]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Technical Summary',
            fontFamily: "'Bitter', 'serif'",
            fontSize: 24,
            fontColor: '#263238'
        },
        fontFamily: {},
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100,
                        steps: 5,
                        stepValue: 20
                    }
                }
            ]
        }
    }
});

// Radar Chart

var ctx2 = document.getElementById("myDonut").getContext('2d');
var myRadarChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
    labels: ["Coding", "Cycling", "Review", "Family", "Design", "Hobbies", "Interacting"],
    datasets: [{
      label: 'Work',
      backgroundColor: [
          "rgba(153,255,51,0.4)",
          "rgba(52, 73, 94,0.4)",
          "rgba(155, 89, 182,0.4)",
          "rgba(52, 152, 219,0.4)",
          "rgba(46, 204, 113,0.4)",
          "rgba(192, 57, 43,0.4)",
          "rgba(241, 196, 15,0.5)"

      ],   
      data: [30, 5, 20, 35, 10, 15, 20]
    }]
},
    options : {
        title: {
            display: true,
            text: 'My Typical Week',
            fontFamily: "'Bitter', 'serif'",
            fontSize: 24,
            fontColor: '#263238'
        }
    }

});

