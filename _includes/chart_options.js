{
    scales: {
        yAxes: [{
            ticks: {
                suggestedMax: {{ suggestedMax }},
                suggestedMin: {{ suggestedMin }},
            },
            gridLines: { color: "#555" },
        }],
        xAxes: [{
            type: 'time',
            distribution: 'series',
            time: {
                unit: 'quarter',
            },
            gridLines: { color: "#555" },
        }]
    }
}