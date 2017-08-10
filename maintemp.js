var jargonDictionary = {
   'Internet': 'The internet is a network of connected machines, with the ability to transfer data between one another.',
   'WWW': 'World Wide Web is the term for the vastly accessible network by the public to access data on other machines.',
   'Hypertext': 'Hypertext is a software system that takes data you give it and connects them together.',
   'Multimedia': 'Multimedia is all forms of media such as audio, video and images.',
   'CLI': 'CLI or command line interface, is a user interface that allows the user to communicate with the operating system.',
   'GUI': 'GUI or graphical user interface, is a visual interface that displays things such as buttons and forms to prompt user input.',
   'HCI': 'HCI or human computer interaction, is the observation and study of how humans interact with computers and allow for research into more optimized machines.',
   'FTP': 'FTP or file transfer protocol, is a network protocol or operation used to transfer files from servers to the users computer.',
   'SSH': 'SSH or secure shell, is a network protocol used on networks for secure transfers.',
   'HTTP': 'HTTP or hypertext transfer protocol, is a protocol for distributing hypertext structures and their links.',
   'Telnet': 'Telnet is network protocol that lets one machine access another on the same network.',
   'HTML': 'HTML or hypertext markup language, is a browser markup language tha allows for the positioning and addition of elements on a page.',
   'CSS': 'CSS or cascading style sheet, is a markup language that defines visual attributes of html elements.',
}


function onDomReady() {
   onExitClicked();
   var DELAY= 100;

   var items = document.querySelectorAll(".flex-item");

   items.forEach(function(item, index){
	   setTimeout(function() {
		   item.className = item.className + " flex-item--shown";
	   }, index * DELAY)
   });

   setupListeners();

}


function setupListeners() {
   document.querySelectorAll(".flex-item").forEach(function(item) {
	   item.addEventListener('click', onFlexItemClicked);

   });
   document.getElementById("btnexit").addEventListener('click', onExitClicked);

}
function showModal(){
   document.getElementById("containerBox").style.visibility = "visible";
}

function onFlexItemClicked(event) {
   var word = event.target.innerText.split(":")[0];

   setModalText(jargonDictionary[word] || "NOTHING FOUND");
   showModal();
}

function setModalText(data) {
   document.getElementById("the_modal").innerHTML = data;
}

function onExitClicked(){
   document.getElementById("containerBox").style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", onDomReady);
