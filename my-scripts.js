//create count in the database
if (localStorage.getItem("count") == null) {
	localStorage.setItem ("count", 0)
}

//update HTML to reflect database count//
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count") 
}

update()

//program button to add one to count//
function plusOne(){
	localStorage.setItem("count" ,Number(localStorage.getItem("count")) + 1)
	update()
}

//program reset button//
function reset (){ 
	if (confirm("Are you sure you want to start over?")) {
		localStorage.setItem("count" ,0)
		update()
	}
}