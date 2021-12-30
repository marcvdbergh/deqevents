//default data
de_data = {
	pageview : {
		  "pageDomain": location.hostname,
		  "platformEnvironment": "production",
		  "pageName": document.title,
		  "pageType": "content",
		  "pageId": "241788",
		  "event" : "pageview"
	},
	pageview2 : {
	  "purchaseID": 1640160445173,
	  "pageDomain": location.hostname,
	  "pageSiteSegment": "Particulier",
	  "pageName": document.title,
	  "userLoginStatus": "not logged in",
	  "platformEnvironment": "test",
	  "platformName": "xc:fp",
	  "pageType": "form",
	  "pageSiteSection": "Verzekeren",
	  "products": [
		{
		  "productName": "ASN Verzekering woonhuis",
		  "productCategory": "Verzekeren"
		},
		{
		  "productName": "ASN Verzekering algemeen",
		  "productCategory": "Verzekeren"
		}
	  ],
	  "analyticsEvents": [
		"pageview",
		"purchase"
	  ],
	  "event" : "pageview"
	},
	formstep : {
		  "purchaseID": 1234567890,
		  "previousPagePercentageViewed": 100,
		  "event": "form step",
		  "formName": "Formulier naam 1",
		  "formType": "Angular",
		  "formStepName": "Tweede stap",
		  "formStepNumber": 0,
		  "formFieldValues": [
			{
			  "name": "Veldnaam1",
			  "value": "veldwaarde2"
			},
			{
			  "name": "Veldnaam2",
			  "value": "veldwaarde2"
			}
		  ],
          "event" : "form step"
	},
	click : {
		  "clickedElement": "MyButton",
		  "clickAction": "Open",
		  "formName": "Clickdata",
		  "formStepName": "Button",		  
		  "event" : "click"
	},
	dyncontent : {
		"partName": "Testcontent",
		"partAction": "Loaded",
        "event" : "dyncontent"
	}
}
var de_data_store = "";
de_data_store = localStorage.getItem("deqeventsjson");
if(de_data_store) {
	de_data = JSON.parse(de_data_store);
	console.log('DEQ events: Event data read from local storage')
}
function DEQevents() {
  this.border_width = 5;
  this.border_padding = 2;
  this.de_div = document.getElementById('de_div');
}
DEQevents.prototype = new Object();
var de_val="";
var select_event = function(elem){
	de_val = elem.options[elem.selectedIndex].value;
    var JSONInPrettyFormat = JSON.stringify(de_data[de_val], undefined, 4);
	document.getElementById('de_data').innerHTML = JSONInPrettyFormat;
	console.log("Selected: " + de_val);
}  
var send_event = function(){
	de_event_data = JSON.parse(document.getElementById('de_data').value);
	de_data[de_val] = de_event_data;
	window.digitalData.push({command: "ADD EVENT", name: de_event_data.event, data: de_event_data});
	console.log('DEQ events: Event sent : ' + de_event_data.event);
}
var removeOptions = function(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}
DEQevents.prototype.makeInterface = function(me) {
	  var options = "";
	  for(event in de_data){
		options += '<option value="'+event+'">'+event+'</option>';
	  }
	  this.de_div.innerHTML = `
	  Send event:&nbsp;<a href="javascript:var elem = document.getElementById('de_div');elem.parentNode.removeChild(elem);void(0);">[X]</a>
	`;
	  this.de_div.innerHTML += '<select id="events" onchange="select_event(this)" name="events" id="events">'+ options + '</select>';
	  this.de_div.innerHTML += `
	  <textarea id="de_data" cols=50 rows=20></textarea>
	  <button name="Send" onclick="send_event()">Send event</button>
	  <input type="file" name="inputfile" id="inputfile">
	  <div id="deqmessage"></div>
	`;
	document.getElementById('inputfile')
		.addEventListener('change', function() {
		  
		var fr=new FileReader();
		fr.onload=function(){
			file_data=fr.result;
			var myselect = document.getElementById('events');
			removeOptions(myselect);
			de_data = JSON.parse(file_data);
			localStorage.setItem("deqeventsjson",  JSON.stringify(de_data));
			for(event in de_data){
				var x = document.getElementById("events");
				var option = document.createElement("option");
				option.value = event;
				option.text = event;
				x.add(option);
			}
			console.log('DEQ events: Event data read from file and saved in localstorage');

		}
		  
		fr.readAsText(this.files[0]);
	})
};

var deqmessage;
deq_events = new DEQevents();
deq_events.makeInterface();
select_event(document.getElementById('events'));
