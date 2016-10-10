console.log("loaded")

//#1

	var avgPrice =0;
	for (var i = 0;i<items.length; i++){
	avgPrice=avgPrice+items[i].price
}

	items.length
	var total=avgPrice/items.length
	



//#2
	var list = items.filter(function(element){
	if (element.price > 14 && element.price <18){
		return true;
	} else { return false;}
})

	



//#3

	var code = items.filter(function(element){
	return (element.currency_code === "GBP")

})




//#4 
	var tree = items.filter(function(x){
		return (x.materials.includes("wood"))
	})


//#5
	var materials = items.filter(function(y){
		return(y.materials.length > 8)
	})

	
//#6
	var sellers = items.filter(function(z){
		return(z.who_made==="i_did")
	})





