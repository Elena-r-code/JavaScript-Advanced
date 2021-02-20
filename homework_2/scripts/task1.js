                            //==================== TASK 1 =================


$(document).ready(function () {
    let nextBtn = $("#nextBtn");
    let previousBtn = $("#previousBtn");
    let showPlatens = $("#myBtn");

    let createTable = response => {
        $("#myTable").append(`
                    <tr> 
                    <td style = "border: 3px solid green"> <strong>Planet name: </strong></td> 
                    <td style = "border: 3px solid green"> <strong>Population: </strong></td>
                    <td style = "border: 3px solid green"> <strong>Climate: </strong></td> 
                    <td style = "border: 3px solid green"> <strong>Gravity:</strong></td>
                    </tr>
                    `)
        for (let i of response.results) {
            $("#myTable").append(`
                    
                    <tr>
                    <td style = "border: 3px solid green"> ${i.name} </td> 
                    <td style = "border: 3px solid green"> ${i.population} </td> 
                    <td style = "border: 3px solid green"> ${i.climate} </td>
                    <td style = "border: 3px solid green"> ${i.gravity} </td>
                    </tr>
                 
                    `);
        }
    } 
    
    let makeCall = url => url ="https://swapi.dev/api/planets/?page=1"

    showPlatens.click(function () {
        $.ajax({
            url: makeCall(),
            success: function (response) {
                createTable(response)
            },
            error: function (err) {
                console.log(err);
            }

        })
        nextBtn.css("display", "block");
        showPlatens.css("display", "none")

    })

                            //============== TASK 2 =================


    previousBtn.css("display", "none");
    nextBtn.css("display", "none");

    nextBtn.click(function(){
        $.ajax({
            url: "https://swapi.dev/api/planets/?page=2",
            success: function(response){
                $("#myTable").text("");
                createTable(response);
                previousBtn.css("display", "block");
                nextBtn.css("display", "none")
            },
            error: function(err){
                console.log(err);
            }
        })
    })

    previousBtn.click(function(){
        $.ajax({
            url: "https://swapi.dev/api/planets/?page=1",
            success: function(response){
                $("#myTable").text("");
                createTable(response);
                previousBtn.css("display", "block");
                nextBtn.css("display", "none")
            },
            error: function(err){
                console.log(err);
            }
        })
    })



})