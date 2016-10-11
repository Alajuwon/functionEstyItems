console.log("loaded")

//#1

	var avgPrice =0;
	for (var i = 0;i<items.length; i++){
	avgPrice=avgPrice+items[i].price
}
	items.length
	var total=avgPrice/items.length
console.log(avgPrice)
var answer1=document.getElementById("answer1")
answer1.innerHTML=total; //used "total" not "avgPrice"











	

//..................................................................
//#2
	var list = items.filter(function(element){
	 return element.price > 14 && element.price < 18;	
})

	// var list = items.filter(function(element){
	// 	return element.price > 14 && element.price < 18;
	// })


console.log(list);
var answer2=document.getElementById("answer2")
list.forEach(function(item){
	answer2.innerHTML += item.title;
	// answer2.innerHTML = answer2.innerHTML + item.title; <== same as line above.
})
// answer2.innerHTML=list;







//...................................................................


//#3

	var code = items.filter(function(element){
	return (element.currency_code === "GBP")
})
//variable name "code",so use code for .ForEach
	var answer3=document.getElementById("answer3")
	code.forEach(function(item){
   	answer3.innerHTML += item.title
})
   	console.log(code)


// trouble for me up until this morning came from me not using the same variable name when using .ForEach and thats why I either kept getting undefined or nothing at all in my html file.












//....................................................................

//#4 
	var tree = items.filter(function(x){
		return (x.materials.includes("wood"))
	})


var answer4=document.getElementById("answer4")
//variable name "tree",so use tree for .ForEach
tree.forEach(function(item){
	answer4.innerHTML +=item.title
})
 
console.log(tree)











//...................................................................
//#5
	var materials = items.filter(function(y){
		return(y.materials.length > 8)
	})
//variable name "materials",so use materials for .ForEach
var answer5=document.getElementById("answer5")
	materials.forEach(function(item){
		answer5.innerHTML += item.title; 

	})

	












//...................................................................
//#6
	var sellers = items.filter(function(z){
		return(z.who_made==="i_did")
	})
//variable name "sellers",so use sellers for .ForEach
var answer6=document.getElementById("answer6")
sellers.forEach(function(item){
	answer6.innerHTML = sellers.length + ' ' + "were made by their seller";
})





