var filterMK = [];
var data = [];
var data2 = [];
(function() {
    axios.get('https://covid-ca.azurewebsites.net/api/covid/countries', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        data = JSON.parse(response.data);
        let contentHtml = '<div class="title"><h2>Covid-19 \n Низ Светот</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Држава</th>' +
            '<th class="title">Случаи</th>' +
            '<th class="title">Денешни случаи</th>' +
            '<th class="title">Смртни случаи</th>' +
            '<th class="title">Денешни смртни случаи</th>' +
            '<th class="title">Вкупно излечени</th>' +
            '<th class="title">Критични</th>' +
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
        // ----------   filter za MK---------------------------------------------------------------------------------
        filterMK = data.filter(function(item) {
            return item.country === "Macedonia"
        })
        let contentHtml2 = '<div class="title"><h2>Северна Македонија</h2></div>' +
            '<table><thead><tr>' +
            // '<th class="title">Држава</th>' +
            '<th class="title">Случаи</th>' +
            '<th class="title">Денешни случаи</th>' +
            '<th class="title">Смртни случаи</th>' +
            '<th class="title">Денешни смртни случаи</th>' +
            '<th class="title">Вкупно излечени</th>' +
            '<th class="title">Критични</th>' +
            '</tr></thead><tbody>';

        contentHtml2 += '<tr>' +
            // '<td class="data">' + filterMK[0].country + '</td>' +
            '<td class="data">' + filterMK[0].cases + '</td>' +
            '<td class="data">' + filterMK[0].todayCases + '</td>' +
            '<td class="data">' + filterMK[0].deaths + '</td>' +
            '<td class="data">' + filterMK[0].todayDeaths + '</td>' +
            '<td class="data">' + filterMK[0].recovered + '</td>' +
            '<td class="data">' + filterMK[0].critical + '</td>' +
            '</tr>';

        contentHtml2 += '</tbody></table>';
        let contentMK = document.getElementById('contentMK');
        contentMK.innerHTML = contentHtml2;
        //------TOP FIVE TODAY CASES-------------------------------------------------------------------------------------------

        var todayCasesDesc = data.sort(function(a, b) {
            return b.todayCases - a.todayCases;
        });
        var top5Today = todayCasesDesc.slice(0, 5);

        let contentHtml3 = '<div class="title"><h2>Држави со најголем број на заразеност денес</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Држава</th>' +
            '<th class="title">Денешни случаи</th>' +
            '</tr></thead><tbody>';
        top5Today.forEach(element => {
            contentHtml3 += '<tr>' +
                '<td class="data">' + element.country + '</td>' +
                '<td class="data">' + element.todayCases + '</td>' +
                '</tr>';
        });
        contentHtml3 += '</tbody></table>';

        let contentTop5 = document.getElementById('top5Today');
        contentTop5.innerHTML = contentHtml3;
        //-----TOP Five today deaths-----------------------------------------------------------

        var todayDeathDesc = data.sort(function(a, b) {
            return b.todayDeaths - a.todayDeaths;
        });
        var top5TodayDeaths = todayDeathDesc.slice(0, 5);

        let contentHtml4 = '<div class="title"><h2>Денешни смртни случаи</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Држава</th>' +
            '<th class="title">Денешни смртни случаи</th>' +
            '</tr></thead><tbody>';
        top5TodayDeaths.forEach(element => {
            contentHtml4 += '<tr>' +
                '<td class="data">' + element.country + '</td>' +
                '<td class="data">' + element.todayDeaths + '</td>' +
                '</tr>';
        });
        contentHtml4 += '</tbody></table>';

        let contentTop5Deaths = document.getElementById('top5TodayDeath');
        contentTop5Deaths.innerHTML = contentHtml4;


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
        data2 = JSON.parse(response.data);
        let contentHtml = '<div class="title"><h2>Вкупен број на случаи низ светот</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Случаи</th>' +
            '<th class="title">Смртни случаи</th>' +
            '<th class="title">Вкупно излечени</th>' +
            '</tr></thead><tbody>';

        contentHtml += '<tr>' +
            '<td class="data">' + data2.cases + '</td>' +
            '<td class="data">' + data2.deaths + '</td>' +
            '<td class="data">' + data2.recovered + '</td>' +
            '</tr>';

        contentHtml += '</tbody></table>';

        let content = document.getElementById('overview');
        content.innerHTML = contentHtml;
    }).catch(error => {
        console.log(error);
    })
})();

function toggleTable(divID) {
    var forms = document.getElementById(divID)
    if (forms.style.display == "block") {
        forms.style.display = "none";
    } else {
        forms.style.display = "block";
    }
};


function toggle(buttonId) {
    switch (buttonId) {

        case "showMK_btn":
            toggleTable("wrapperMK");
            break;
        case "closeMK":
            toggleTable("wrapperMK");
            break;
        case "allCountries_btn":
            toggleTable("wrapper5Content");
            break;
        case "closeContent":
            toggleTable("wrapper5Content");
            break;
        case "overview_btn":
            toggleTable("wrapperOverview");
            break;
        case "closeOverview":
            toggleTable("wrapperOverview");
            break;
        case "top5cases_btn":
            toggleTable("wrapper5Today");
            break;
        case "close5Today":
            toggleTable("wrapper5Today");
            break;
        case "top5deaths_btn":
            toggleTable("wrapper5Deaths");
            break;
        case "close5Deaths":
            toggleTable("wrapper5Deaths");
            break;
        default:
            break;
    }
}