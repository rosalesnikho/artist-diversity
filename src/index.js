const {getArtistData} = require('./api.js');
import Chart from 'chart.js';

// Chart Variables


// function sevenDayTime(currentWeatherTimeLine) {
//     let sevenDayTime = [];
//     let times = currentWeatherTimeLine.daily.data;
//     times.forEach(function (time) {
//         let t = [1];
//         t = new Date(time.time * 1000).toDateString()
//         sevenDayTime.push(t);
//     })

//     return sevenDayTime
// }

// let sevenDayTemps = sevenDayForecast(weatherData);


getArtistData().then((data) => {
    // Start Filtering Data
    data.filter((artistData) => {

        const artist = artistData.artist;
        const ethnic = artistData.ethnicity;
        const gender = artistData.gender;
        const museum = artistData.museum;
        const geoData = artistData.GEO3major;
        const year = artistData.year;

        //
        let blackDemoData = (gen, eth) => {
            let blacksInMuseums = []
            if (gen == "woman" && eth == "black") {
                let demo = [];
                demo = museum;
                blacksInMuseums.push(demo)
            }
            return blacksInMuseums
        }

        let demoData = blackDemoData(gender, ethnic);


    })

    ///////
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#7E44DE", "#EC483E", "#DB44DE", "#DE447B", "#DE6944"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Artist Geographic Location'
            }
        }
    });
    ///////


    ///////
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Artist Geographic Location",
                    backgroundColor: ["#7E44DE", "#EC483E", "#DB44DE", "#DE447B", "#DE6944"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: 'Artist Geographic Location'
            }
        }
    });

    //////
}).catch((error) => {
    console.log(error);
});
