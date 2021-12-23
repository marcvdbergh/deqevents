console.log("Title:" + window.document.title);
de_data = {
	pageview : {
		  "pageDomain": "www.snsbank.nl",
		  "platformEnvironment": "production",
		  "pageName": "Particulier:Betalen:Jongerenrekening",
		  "pageType": "content",
		  "pageId": "241788"
	},
	click : {
		  "clickedElement": "MyButton",
		  "clickAction": "Open",
		  "formName": "Clickdata",
		  "formStepName": "Button"		  
	},
	dyncontent : {
		"partName": "Testcontent",
		"partAction": "Loaded",
	}
}

function DEQevents() {
  this.border_width = 5;
  this.border_padding = 2;
  this.de_div = document.getElementById('de_div');
  console.log('Function DEQevents')
}
DEQevents.prototype = new Object();
var de_val="";
var select_event = function(elem){
	de_val = elem.options[elem.selectedIndex].value;
	console.log(JSON.stringify(de_data[de_val]));
	document.getElementById('de_data').value = JSON.stringify(de_data[de_val]);
	console.log("Selected: " + de_val);
}  
var send_event = function(){
	de_event_data = JSON.parse(document.getElementById('de_data').value);
	de_data[de_val] = de_event_data;
	window.digitalData.push({command: "ADD EVENT", name: de_val, data: de_event_data});
}
DEQevents.prototype.makeInterface = function(me) {
  console.log(this.de_div);
  this.de_div.innerHTML = `
  <a href="javascript:this.de_div.style.display='none';void(0);">[X]</a><br>
  <select id="events" onchange="select_event(this)" name="events" id="events">
  <option value="pageview">Page view</option>
  <option value="click">Click</option>
  <option value="dyncontent">Dyn content</option>
  </select>
  <textarea id="de_data" cols=50 rows=20></textarea>
  <button name="Send" onclick="send_event()">Send event</button>
`;

};

deq_events = new DEQevents();
deq_events.makeInterface();