function onLoading() {
	document.getElementById('topButton').addEventListener("click", function() { onOff(); } );
	//document.getElementById('back').addEventListener("click", function
}

// Button arrays
var apps = document.getElementsByClassName('app');

// Phone Screen (canvas element)
var c = document.getElementById('phone');
var ctx = c.getContext("2d");


// Makes using onOff possible
var onOrOff = false;

function onOff() {
	if(onOrOff===false) turnOn();
	else turnOff();
}

function turnOn() {
	displayObjects(apps);
	ctx.fillStyle = '#eff';
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
	onOrOff = true;
}

function turnOff() {
	hideObjects(apps);
	ctx.fillStyle = '#555';
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
	onOrOff = false;
}

function displayObjects(objectsArray) {
	for(var i = 0; i < objectsArray.length; i++) {
        objectsArray[i].style.display = "inline";
	}
}

function hideObjects(objectsArray) {
	for(var i = 0; i < objectsArray.length; i++) {
		objectsArray[i].style.display = "none";
	}
}