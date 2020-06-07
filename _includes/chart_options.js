{
    scales: {
        yAxes: [{
            ticks: {
                suggestedMax: {{ suggestedMax }},
                suggestedMin: {{ suggestedMin }},
            },
            gridLines: { color: "#333" },
        }],
        xAxes: [{
            type: 'time',
            distribution: 'series',
            time: {
                unit: 'quarter',
            },
            gridLines: { color: "#333" },
        }]
    }
}