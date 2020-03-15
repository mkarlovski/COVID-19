(function() {
    axios.get('https://covid-ca.azurewebsites.net/api/covid/countries', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        let data = JSON.parse(response.data);
        let contentHtml = '<div class="title"><h2>Covid-19</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Country</th>' +
            '<th class="title">Cases</th>' +
            '<th class="title">Today Cases</th>' +
            '<th class="title">Deaths</th>' +
            '<th class="title">Today Deaths</th>' +
            '<th class="title">Recovered</th>' +
            '<th class="title">Critical</th>' +
            '</tr></thead><tbody>';
        data.forEach(element => {
            contentHtml += '<tr>' +
                '<td class="data">' + element.country + '</td>' +
                '<td class="data">' + element.cases + '</td>' +
                '<td class="data">' + element.todayCases + '</td>' +
                '<td class="data">' + element.deaths + '</td>' +
                '<td class="data">' + element.todayDeaths + '</td>' +
                '<td class="data">' + element.recovered + '</td>' +
                '<td class="data">' + element.critical + '</td>' +
                '</tr>';
        });
        contentHtml += '</tbody></table>';

        let content = document.getElementById('content');
        content.innerHTML = contentHtml;
    }).catch(error => {
        console.log(error);
    })
})();


(function() {
    axios.get('https://covid-ca.azurewebsites.net/api/covid/overview', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        let data = JSON.parse(response.data);
        let contentHtml = '<div class="title"><h2>OVERVIEW</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Cases</th>' +
            '<th class="title">Deaths</th>' +
            '<th class="title">Recovered</th>' +
            '</tr></thead><tbody>';

        contentHtml += '<tr>' +
            '<td class="data">' + data.cases + '</td>' +
            '<td class="data">' + data.deaths + '</td>' +
            '<td class="data">' + data.recovered + '</td>' +
            '</tr>';

        contentHtml += '</tbody></table>';

        let content = document.getElementById('overview');
        content.innerHTML = contentHtml;
    }).catch(error => {
        console.log(error);
    })
})();


var toggleAboutUs = function() {
    var forms = document.getElementById("AboutUs")
    if (forms.style.display == "block") {
        forms.style.display = "none";
    } else {
        forms.style.display = "block";
    }
};