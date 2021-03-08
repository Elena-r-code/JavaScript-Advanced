$(document).ready(function(){
    function checkInput(input){
        return new Promise((resolve, reject) => {
            
            if (typeof(input) !== "string"){
                reject(console.log(`The input is not a string ${input}`));
            }
            setTimeout(() => {
                resolve(console.log(`${input.toUpperCase()}`));
            }, 4000)
        }
        )
    }

    checkInput("Sedc")
    .then( successMessage => {
        console.log(`Success`);
    })
    .catch(err => {
        console.log(`Error`)

    })
    .finally(() =>{
        console.log("The end")
    }
    )

 
})
