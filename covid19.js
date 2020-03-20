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
        // ----------   filter za MK--------------------------
        filterMK = data.filter(function(item) {
            return item.country === "North Macedonia"
        })
        let contentHtml2 = '<div class="title"><h2>Северна Македонија</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Земја</th>' +
            '<th class="title">Случаи</th>' +
            '<th class="title">Денешни случаи</th>' +
            '<th class="title">Смртни случаи</th>' +
            '<th class="title">Денешни смртни случаи</th>' +
            '<th class="title">Вкупно излечени</th>' +
            '<th class="title">Критични</th>' +
            '</tr></thead><tbody>';

        contentHtml2 += '<tr>' +
            '<td class="data">' + filterMK[0].country + '</td>' +
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
        //------TOP FIVE TODAY CASES

        var todayCasesDesc = data.sort(function(a, b) {
            return b.todayCases - a.todayCases;
        });
        var top5Today = todayCasesDesc.slice(0, 5);

        let contentHtml3 = '<div class="title"><h2>Top 5 Cases Today</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Country</th>' +
            '<th class="title">Today Cases</th>' +
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
        //-----TOP Five today deaths

        var todayDeathDesc = data.sort(function(a, b) {
            return b.todayDeaths - a.todayDeaths;
        });
        var top5TodayDeaths = todayDeathDesc.slice(0, 5);

        let contentHtml4 = '<div class="title"><h2>Top 5 today deaths</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Country</th>' +
            '<th class="title">Today Deaths</th>' +
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
        let contentHtml = '<div class="title"><h2>OVERVIEW</h2></div>' +
            '<table><thead><tr>' +
            '<th class="title">Cases</th>' +
            '<th class="title">Deaths</th>' +
            '<th class="title">Recovered</th>' +
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

function checkPopUpsClick() {
    hideAboutUs();
    // hideAll();
}

// function toggle(buttonId) {
//     switch (buttonId) {

//         case "aboutUs_btn":
//             toggleAboutUs();
//             break;
//         case "showMK_btn":
//             toggleMK();
//             break;
//             // case "allCountries_btn":
//             //     showAllCountries();
//             //     break;
//             // case "overview_btn":
//             //     ShowOverview();
//             //     break;
//             // case "top5cases_btn":
//             //     Show5Cases();
//             //     break:
//             // case "top5deaths_btn":
//             //     Show5Deaths();
//             //     break;


//         default:
//             break;
//     }
// }

function toggleAboutUs() {
    debugger;

    var x = document.getElementById("AboutUs_content");
    if (x.className.indexOf("w3-show") == -1) {
        showAboutUs();
    } else {
        hideAboutUs();
    }
}


function showAboutUs() {
    var x = document.getElementById("AboutUs_content");
    x.className += " w3-show";
}


function hideAboutUs() {
    var x = document.getElementById("AboutUs_content");
    x.className = x.className.replace(" w3-show", "");
}

// function hideAll() {
//     debugger;
//     var x = document.getElementsByClassName("classname");
//     for (let i = 0; i < x.length; i++) {
//         x[i].className = x[i].className.replace(" w3-show", "");

//     }
// }





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
            toggleTable("wrapper");
            break;
            // case "allCountries_btn":
            //     showAllCountries();
            //     break;
            // case "overview_btn":
            //     ShowOverview();
            //     break;
            // case "top5cases_btn":
            //     Show5Cases();
            //     break:
            // case "top5deaths_btn":
            //     Show5Deaths();
            //     break;
        default:
            break;
    }
}