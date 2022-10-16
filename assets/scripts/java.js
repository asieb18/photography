// PLAY SONG
var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function(){
	if (song.paused){
		song.play();
		icon.src = "assets/images/pause.png"
	} else {
		song.pause();
		icon.src = "assets/images/play.png"
	}
	
}



/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
 function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	lightboxID.classList.remove('hidden');
}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	let im1 = document.getElementById("im1");
	unhideLightbox(im1);
}

document.getElementById("picture-1").onclick = unhideLightbox1;

/**
 * Calls unhideLightbox with the id of the second lightbox
 */
 function unhideLightbox2() {
	let im2 = document.getElementById("im2");
	unhideLightbox(im2);
}

document.getElementById("picture-2").onclick = unhideLightbox2;

/**
 * Calls unhideLightbox with the id of the third lightbox
 */
 function unhideLightbox3() {
	let im3 = document.getElementById("im3");
	unhideLightbox(im3);
}

document.getElementById("picture-3").onclick = unhideLightbox3;


// PHOTO 
function unhideLightbox4() {
	let im4 = document.getElementById("im4");
	unhideLightbox(im4);
}

document.getElementById("picture-4").onclick = unhideLightbox4;

// PHOTO 
function unhideLightbox5() {
	let im5 = document.getElementById("im5");
	unhideLightbox(im5);
}

document.getElementById("picture-5").onclick = unhideLightbox5;

// PHOTO 
function unhideLightbox6() {
	let im6 = document.getElementById("im6");
	unhideLightbox(im6);
}

document.getElementById("picture-6").onclick = unhideLightbox6;

// PHOTO 
function unhideLightbox7() {
	let im7 = document.getElementById("im7");
	unhideLightbox(im7);
}

document.getElementById("picture-7").onclick = unhideLightbox7;

// PHOTO 
function unhideLightbox8() {
	let im8 = document.getElementById("im8");
	unhideLightbox(im8);
}

document.getElementById("picture-8").onclick = unhideLightbox8;

// PHOTO 
function unhideLightbox9() {
	let im9 = document.getElementById("im9");
	unhideLightbox(im9);
}

document.getElementById("picture-9").onclick = unhideLightbox9;


// PHOTO 
function unhideLightbox10() {
	let im10 = document.getElementById("im10");
	unhideLightbox(im10);
}

document.getElementById("picture-10").onclick = unhideLightbox10;


// 
// close the lightbox when we click outside the picture
// 
function closeLightbox(lightboxID) {
	// Adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	let im1 = document.getElementById("im1");
	let im2 = document.getElementById("im2");
	let im3 = document.getElementById("im3");
	let im4 = document.getElementById("im4");
	let im5 = document.getElementById("im5");
	let im6 = document.getElementById("im6");
	let im7 = document.getElementById("im7");
	let im8 = document.getElementById("im8");
	let im9 = document.getElementById("im9");
	let im10 = document.getElementById("im10");

	im1.classList.add('hidden');
	im2.classList.add('hidden');
	im3.classList.add('hidden');
	im4.classList.add('hidden');
	im5.classList.add('hidden');
	im6.classList.add('hidden');
	im7.classList.add('hidden');
	im8.classList.add('hidden');
	im9.classList.add('hidden');
	im10.classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
