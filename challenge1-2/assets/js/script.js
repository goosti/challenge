let cafe = parseInt(prompt("Combien de cafés ont été vendus ?"));
let croissant = parseInt(prompt("Combien de croissants ont été vendus ?"));
let jusOrange = parseInt(prompt("Combien de jus d'orange ont été vendus ?"));

let prixCafe = 2;
let prixCroissant = 1.5;
let prixJusOrange = 2.5;

let cafeVendu = cafe*prixCafe;
let croissantVendu = croissant*prixCroissant;
let jusOrangeVendu = jusOrange*prixJusOrange;


let total = cafeVendu+croissantVendu+jusOrangeVendu;

let totalVendu = cafe+croissant+jusOrange;


console.log("Voici le nombre de café vendu : ",cafe, "\nVoici le nombre de croissant vendu : ",croissant, "\nVoici le nombre de jus d'orange vendu : ",jusOrange);
console.log("Le nombre total d'article vendu est de :",totalVendu);
console.log("Le résultat de café est de : ",cafeVendu,"\nLe résultat de croissant est de : ",croissantVendu,"\nLe résultat de jus d'orange est de : ",jusOrangeVendu);
console.log("Le nombre total d'argent est de :",total);


