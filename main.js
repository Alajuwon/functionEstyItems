console.log("loaded")

//#1

var avgPrice =0;
for (var i = 0;i<items.length; i++){
	avgPrice=avgPrice+items[i].price
}

items.length
var total=avgPrice/items.length
console.log(total)



//#2
var list = items.filter(function(element){
	if (element.price > 14 && element.price <18){
		return true;
	} else { return false;}
})

console.log(list);










