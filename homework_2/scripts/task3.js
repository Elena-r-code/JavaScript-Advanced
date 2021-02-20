let fNames = ["Elena", "Maria", "Ana", "Simona", "Ivana"];
let lNames = ["Markovska", "Jovanova", "Stojanova", "Simonovska", "Ivanova"];

for(let i in fNames){
     (function(first, last){
         console.log(`${first[i]} ${last[i]}`);
     })(fNames, lNames);
}


