//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.
var bands = [
{
	name: 'Monkeys',
	genre: 'Rock',
	numberOfPerformers: 4,
	numberOfGroupies: 0
	},
{
	name: 'Milton Menasco & The Big Fiasco',
	genre: 'Good Music',
	numberOfPerformers: 4,
	numberOfGroupies: 1000000
},
{
	name: 'Point of Exclamation',
	genre: 'Covers',
	numberOfPerformers: 5,
	numberOfGroupies: 23
}
];
//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.
var Band = function (name, genre, numberOfPerformers, numberOfGroupies) {
	this.name = name;
	this.genre = genre;
	this.numberOfPerformers = numberOfPerformers;
	this.numberOfGroupies = numberOfGroupies;
};
//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.
var monkeys = new Band('Monkeys', 'Rock', 4, 0);
var milton = new Band('Milton Menasco & the Big Fiasco', 'Good Music', 4, 1000000);
var point = new Band('Point of Exclamation', 'Covers', 5, 23);
//Now create a new array called newBands and push each of the objects that you made into that array.
var newBands = [];
newBands.push(monkeys, milton, point);
console.log(newBands);
//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype method for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.
Band.prototype.bandInfo = function(){
	console.log(this.name + this.genre);
};





