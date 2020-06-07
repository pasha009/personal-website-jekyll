{
    scales: {
        yAxes: [{
            ticks: {
                suggestedMax: 10,
                suggestedMin: 0,
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