
	function uponLoading() {
		document.getElementById('on').addEventListener("click", function() { onOff(); } )
		document.getElementById('back').addEventListener("click", function() { back(); } )
		document.getElementById('showInfo').addEventListener("click", function() { showInfo(); })
		document.getElementById('tour').addEventListener("click", function() { tour(); })
		document.getElementById('next').addEventListener("click", function() { tour(); })
		document.getElementById('setWallpaper').addEventListener("click", function() { setWallpaper(); })
		document.getElementById('contact').addEventListener("click", function() { contact(); })
		document.getElementById('galleryMap').addEventListener("click", function() { galleryMap(); })
		document.getElementById('shellChange').addEventListener("click", function() { changeShell(); })
		document.getElementById('red').addEventListener("click", function() { getNewShell('rgb(210, 60, 60)', 'rgb(120, 180, 180)'); })
		document.getElementById('orange').addEventListener("click", function() { getNewShell('#e99010', '#2060a5'); })
		document.getElementById('yellow').addEventListener("click", function() { getNewShell('rgb(240, 200, 102', 'rgb(130, 0, 100)'); })
		document.getElementById('turquoise').addEventListener("click", function() { getNewShell('rgb(0, 150, 150', 'rgb(150, 30, 30)'); })
		document.getElementById('blue').addEventListener("click", function() { getNewShell('rgb(60, 50, 180)', 'rgb(240, 80, 30'); })
		document.getElementById('green').addEventListener("click", function() { getNewShell('#AABB33', 'rgb(30, 160, 240'); })
		document.getElementById('brown').addEventListener("click", function() { getNewShell('rgb(100, 40, 40)', 'rgb(40, 40, 200)'); })
		document.getElementById('black').addEventListener("click", function() { getNewShell('rgb(10, 40, 40)', 'rgb(99, 100, 120)'); })
		document.getElementById('sEast').addEventListener("click", function() { move(1, 85, 120); })
		document.getElementById('nWest').addEventListener("click", function() { move(2, 200, 60); })
		document.getElementById('see').addEventListener("click", function() { tour(); })
		document.getElementById('backToMap').addEventListener("click", function() { galleryMap(); })
		document.getElementById('nextMapImage').addEventListener("click", function() { nextGalleryImage(); })
		setTimeout(function() { onOff(); }, 1000);
	}
        // Images for Tour
        var images = ['image3', 'image1', 'image2', 'image4', 'image5'];
        var imageIndex = 0;
        var prevImage = document.getElementById(images[2]);
        var currentImage = document.getElementById(images[0]);
        var ground = new Array();
        var backgroundCounter = 0;
        var prevWallpaper = prevImage;
        var wallpaperImage;
        var onOrOff = false;

        var t;	// setTimeout for digital clock

        // For Gallery Map
        var locale = 0;
		var mapImages = ['emptyGallery1', 'emptyGallery2', 'emptyGallery3', 'emptyGallery4', 'emptyGallery5'];
		var mapImageIndex = 1;
		var currentEmptyImage = document.getElementById(mapImages[0]);
		var previousEmptyImage = document.getElementById(mapImages[1]);
		
        // arrays of buttons
        var allApps = document.getElementsByClassName('apps');
        var colorButtons = document.getElementsByClassName('colors');
        var innerApp = document.getElementsByClassName("inApp");
        var gameButtons = document.getElementsByClassName("game");
        var gameRs = document.getElementsByClassName("gameR");
        var movers = document.getElementsByClassName("mapButtons");
		var mapNav = document.getElementsByClassName("mapNavButtons");
        
		// Map buttons to numbers 1-9
        var gameMap = new Map();
        var currentOrder = 0;
	    var zeroToEight;
	
		// Text for showInfo
		var text = ["#nomophobia", "(c)2017 James Secor", "See it at Studio Place Arts", "201 N Main St, Barre, VT 05641", "March 14 - April 15, 2017"];
	
        // Context for drawing on canvas
        var c = document.getElementById("phone");
        var ctx = c.getContext("2d");
		
	
	
	// Show Info
	function showInfo() {
		turnOff();
		ctx.fillStyle = "#445538";
		ctx.fillRect(0,0,phone.width, phone.height);
		ctx.font = "15px Lucida Sans Typewriter";
		ctx.fillStyle = "#EEEEFF";
		ctx.textAlign = "center";
		ctx.fillText(text[0], phone.width/2, phone.height/2 - 40);
		ctx.fillText(text[1], phone.width/2, phone.height/2 - 20);		
		ctx.fillText(text[2], phone.width/2, phone.height/2);		
		ctx.fillText(text[3], phone.width/2, phone.height/2 + 20);
		ctx.fillText(text[4], phone.width/2, phone.height/2 + 40);
	}

	function showGallery() {
	    ctx.clearRect(0, 0, phone.width, phone.height);
	    clearTimeout(t);
	    document.getElementById("time").innerHTML = "";
	    document.getElementById('phone').style.background = "#224466";

	    displayNone(allApps);
	    displayNone(innerApp);
	    displayNone(colorButtons);
	    displayNone(gameButtons);
	    displayNone(gameRs);
	    
	    displayNone(allApps);
        // Create Gallery
	    ctx.fillStyle = "#eeffff";
	    ctx.fillRect(70, 0, 30, 20);
	    ctx.fillRect(250, 10, 40, 40);
	    ctx.fillRect(0, 20, 100, 50);
	    ctx.fillRect(70, 50, 300, 30);
	    ctx.fillRect(70, 70, 100, 100);
	    displayInline(movers);
	    displayNone(mapNav);

	}

	function movePerson(x, y) {
	    showGallery();
        // Draw person
	    ctx.beginPath();
	    ctx.arc(x, y, 5.5, 0, 2*Math.PI);
	    ctx.stroke();
	    ctx.fillStyle = "#4Aa400";
	    ctx.fill();
	    ctx.closePath();
	    ctx.textAlign = "left";
	    ctx.font = "14px Lucida Sans Typewriter";
	    ctx.fillStyle = "#1190d0";
	    ctx.fillText("You", x, y - 8); 
	}
        // Moves person to middle, then to correct spot
	function move(spot, x, y) {
	    locale = spot;
	    //movePerson(body.width / 2, body.height / 2);
	    setTimeout(function () {
	        movePerson(x, y);
	    }, 250);
	    
	}

	function see(spot) {
	    var image;
	    switch (spot) {
	        case 0:
	            image = document.getElementById('emptyGallery4');
	        case 1:
	            image = document.getElementById('emptyGallery1');
	            break;
	        case 2:
	            image = document.getElementById('emptyGallery3');
	            break;
	        default:
	            image = document.getElementById('emptyGallery2');
				break;
	    }
	    ctx.drawImage(image, 0, 0, phone.width, phone.height);
	    displayNone(movers);
		displayInline(mapNav);
        
	
	}
	
	// Shows next gallery map image
	function nextGalleryImage() {
		turnOff();
		displayInline(mapNav);
		currentImage = document.getElementById(mapImages[mapImageIndex]);
		ctx.drawImage(currentImage, 0, 0, phone.width, phone.height);
		previousEmptyImage.style.display = "none";
		previousEmptyImage = currentEmptyImage;
		if (mapImageIndex < mapImages.length - 1) mapImageIndex++;
		else mapImageIndex = 0;
	}
    // Shows gallery map with figure
	function galleryMap() {
	    locale = 0;
	    // Display Gallery with person at starting point
	    movePerson(120, 100);

	}

	// When user picks change color
        function changeShell() {
            turnOff();	
            document.getElementById('phone').style.backgroundColor = '#8585FF';
            displayInline(colorButtons);
            displayNone(allApps);
        }
                
        // Changes phone and page body colors
        function getNewShell(color, background) {
            var shell = document.getElementById('phone');
            shell.style.borderLeft = `70px solid ${color}`;
            shell.style.borderRight = `80px solid ${color}`;
            shell.style.borderBottom = `10px solid ${color}`;
            shell.style.borderTop = `10px solid ${color}`;
            document.getElementById('back').style.background = color;
            document.body.style.background = background;
        }

        // Show digital clock
        function showTime() {
            var today = new Date();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            hours = addZero(hours);
            minutes = addZero(minutes);
            document.getElementById("time").innerHTML = `${hours}:${minutes}`;
            t = setTimeout(showTime, 3000);
        }
        function addZero(x) {
            if (x < 10) x = "0" + x;
            return x;
        }

        // Scroll through images from show
        function tour() {
            turnOff();
		    displayInline(innerApp);
            currentImage = document.getElementById(images[imageIndex]);
            ctx.drawImage(currentImage, 220, 220, 1300, 800, 0, 0, phone.width, phone.height);
            prevImage.style.display = "none";
            prevImage = currentImage;
            if (imageIndex < images.length - 1) imageIndex++;
            else imageIndex = 0;
        }

        // Sets the background image
        function setWallpaper() {
            // Create New Array Element
            ground[backgroundCounter] = document.createElement("img");

            // Set that element to the current image
            ground[backgroundCounter].src = currentImage.src;
            ground[backgroundCounter].setAttribute("style", "height:800px; width:1200px; margin:auto; display:block;");
            
            document.body.style.width = '120px';
            document.body.style.height = '800px';
            ground[backgroundCounter].style.display = 'inline';
            document.body.appendChild(ground[backgroundCounter]);

            // Display:None for previous background
            if (backgroundCounter > 0) ground[backgroundCounter - 1].style.display = 'none';
            // Display current background
            document.body.style.backgroundImage = ground[backgroundCounter];
            backgroundCounter++;
        }

        // Top button to switch phone on or off
        function onOff() {
            if (onOrOff === false) {
                onOrOff = true;
                turnOn();
            } else {
                onOrOff = false;
                turnOff();
            }
        }

        // Circle button take you to apps screen
        function back() {
		turnOff();
            turnOn();
            onOrOff = true;
        }
        function turnOn() {
            ctx.clearRect(0, 0, phone.width, phone.height);
            showTime();
            document.getElementById('phone').style.background = "#D0E0FA";
            // Display Screen with correct apps
            displayInline(allApps);
            displayNone(innerApp);
            displayNone(colorButtons);
            //displayNone(gameButtons);
            displayNone(movers);
        }
        function turnOff() {
            // Make screen grey
            ctx.clearRect(0, 0, phone.width, phone.height);
            clearTimeout(t);
            inGame = false;
            document.getElementById("time").innerHTML = "";
            document.getElementById('phone').style.background = "#555555";

            displayNone(allApps);
            displayNone(innerApp);
            displayNone(colorButtons);
            displayNone(gameButtons);
            displayNone(gameRs);
            displayNone(movers);
			//displayNone(mapNav);
        }
        // To hide buttons of a class
        function displayNone(buttonClass) {
            for (var i = 0; i < buttonClass.length; i++) {
                buttonClass[i].style.display = "none";
            }
        }

        // To display buttons of a class
        function displayInline(buttonClass) {
            for (var i = 0; i < buttonClass.length; i++) {
                buttonClass[i].style.display = "inline";
            }
        }
        function rotate() {
            var ph = document.getElementById("everything");
            ph.style.transitionDuration = '3s';
            ph.style.transform = 'translate(0, 1000px);';
            ph.style.webkitTransform = 'rotate(90deg)';

        }
        
        /*
        var c = document.getElementById("phone");
        var ctx = c.getContext("2d");
        ctx.moveTo(0, 10);
        ctx.lineTo(325, 10);
        ctx.moveTo(300, 0);
        ctx.lineTo(300, 200);
        // App 1
        ctx.fillStyle = "#FF4444";
        ctx.fillRect(30, 20, 30, 20);

        ctx.fillStyle = "#4444F0";
        ctx.fillRect(90, 20, 30, 20);
        ctx.stroke();
        */
    
