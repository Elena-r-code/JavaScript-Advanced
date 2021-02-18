document.getElementById("myButton").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response){


        response.json().then(
            function(user){
                
                let table = document.getElementById("myTable");
                table.innerHTML = `
                <tr >
                    <td style="border: 2px solid red"> <strong> ID </strong> </td>
                    <td style="border: 2px solid red"> ${user.id} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>NAME </strong> </td>
                    <td style="border: 2px solid red"> ${user.name}</td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>USERNAME </strong> </td>
                    <td style="border: 2px solid red"> ${user.username} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>EMAIL </strong> </td>
                    <td style="border: 2px solid red"> ${user.email} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>ADDRESS </strong> </td>
                    
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>street </strong> </td>
                    <td style="border: 2px solid red"> ${user.address.street} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>suite </strong> </td>
                    <td style="border: 2px solid red"> ${user.address.suite} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>city </strong> </td>
                    <td style="border: 2px solid red"> ${user.address.city} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>zipcode </strong> </td>
                    <td style="border: 2px solid red"> ${user.address.zipcode} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>geo </strong> </td>
                    
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>lat </strong> </td>
                    <td style="border: 2px solid red"> ${user.address.geo.lat} </td>
                </tr>

                <tr >
                    <td style="border: 2px solid red"> <strong>lng </strong> </td>
                    <td style="border: 2px solid red"> ${user.address.geo.lng} </td>
                </tr>
                <tr >
                    <td style="border: 2px solid red"> <strong>PHONE </strong> </td>
                    <td style="border: 2px solid red"> ${user.phone} </td>
                </tr>
                <tr >
                <td style="border: 2px solid red"> <strong>WEBSITE </strong> </td>
                <td style="border: 2px solid red"> ${user.website} </td>
            </tr>
            <tr >
                    <td style="border: 2px solid red"> <strong>COMPANY </strong> </td>
                    
                </tr>
                <tr >
                    <td style="border: 2px solid red"> <strong>company name </strong> </td>
                    <td style="border: 2px solid red"> ${user.company.name} </td>
                </tr>
                <tr >
                    <td style="border: 2px solid red"> <strong>Catch Phrase </strong> </td>
                    <td style="border: 2px solid red"> ${user.company.catchPhrase} </td>
                </tr>
                <tr >
                    <td style="border: 2px solid red"> <strong>BS </strong> </td>
                    <td style="border: 2px solid red"> ${user.company.bs} </td>
                </tr>
                               
                `

            }
        )
        .catch(function(error){
            console.log(error);
        })
    });
});
