$(".modal_container").hide();
$(".item__image").click(getInfo);

function getInfo(event){
	console.log(event);
	var imageNumber = event.target.className.split(" ")[1].split("__")[1];
	var url = "assets/" + imageNumber + ".jpg";
	$(".modal_imgsrc").attr("src",url);
	$(".modal_container").show();
	window.currentImage = parseInt(event.target.id);
}

$(".modal_container").click(stopProp);
function hidemodal(){
	$(".modal_container").hide();
}
$(".modal_imgsrc").click(hidemodal);
function stopProp(event){
	event.stopImmediatePropagation();

}
$(".modal_close").click(hidemodal);


function setNewImage(increment) {
	var current = window.currentImage;

	var next = current + increment;

	if(next < 1) {
		next = 13;
	}

	if(next > 13) {
		next = 0;
	}

	$('#' + next).click();
}

$("#arrowleft").click(function() {
	setNewImage(-1);
});

function prevImage() {
	if ($(".modal_container").is(":visible"))  {

	}
}
$("#arrowright").click(function() {
	setNewImage(1);
});
function nextImage() {

}
