let promptAddition = parseInt(prompt("De combien est le montant total de l'addition ?"));

let promptPourboire = parseInt(prompt("De combien sera le pourboire ?\n15% pour un service correct, 20% pour un bon service, 25% pour un excellent service :"));


console.log(promptAddition);
console.log(promptPourboire);


let pourboire = promptAddition * (promptPourboire / 100)

console.log("Le pourboire est de : ",pourboire.toFixed(2));

let addition = pourboire + promptAddition

console.log("Le prix total est de : ",addition);
