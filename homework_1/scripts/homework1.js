$(document).ready(function () {

    $("#myBtn").click(function () {
        $.ajax({
            url: "https://api.openaq.org/v1/cities",
            success: function (data) {
                for (let i=0; i<10;i++) {
                    let country =data.results[i].country;
                    let name =data.results[i].name;
                    let city =data.results[i].city;
                    let count =data.results[i].count;
                    let location = data.results[i].locations

                   $("#myUlist").append(`<li> <i>Country:</i> ${country}<i> Name:</i> ${name}<i>City:</i> ${city} <i>Count:</i>${count} <i>Location:</i>${location} </li>`);
                }
               
            },

            error: function (err) {
                console.log(err);
            }
        })
    })
})