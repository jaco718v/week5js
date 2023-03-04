/*function add(n1, n2){
   return n1 +n2;
}

const sub = function(n1,n2){
  return n1 - n2
} 

function mul(n1,n2){
    return n1*n2
}

const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}
//console.log(cb(3,3,mul))
console.log(cb(3,3,(n1,n2)=>n1/n2))*/

//const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
//names.filter(n => n.length<=3).forEach(console.log)

//const upNames = names.map(n => n.toUpperCase())

//const nameLiString = "<ul>"+names.map(n => "<li>"+n+"</li>").join("")+"</ul>"
//console.log(nameLiString)

const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
//const newerCars =cars.filter(n=>n.year>1999)
//console.log(newerCars)

//const volvoCars = cars.filter(n=>n.make=="Volvo")
//console.log(volvoCars)

//const priceCars = cars.filter(n=>n.price<5000)
//console.log(priceCars)

