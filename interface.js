console.log("Title:" + window.document.title);
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
	  "pageDomain": "www.asnbank.nl",
	  "pageSiteSegment": "Particulier",
	  "pageName": "Verzekeren:Afsluiten",
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
    var JSONInPrettyFormat = JSON.stringify(de_data[de_val], undefined, 4);
	document.getElementById('de_data').innerHTML = JSONInPrettyFormat;
	console.log("Selected: " + de_val);
}  
var send_event = function(){
	de_event_data = JSON.parse(document.getElementById('de_data').value);
	de_data[de_val] = de_event_data;
	window.digitalData.push({command: "ADD EVENT", name: de_event_data.event, data: de_event_data});
}
DEQevents.prototype.makeInterface = function(me) {
  console.log(this.de_div);
  this.de_div.innerHTML = `
  <a href="javascript:this.de_div.style.display='none';void(0);">[X]</a>
  <select id="events" onchange="select_event(this)" name="events" id="events">
  <option value="pageview">Page view</option>
  <option value="pageview2">Page view 2</option>
  <option value="formstep">Form step</option>
  <option value="click">Click</option>
  <option value="dyncontent">Dyn content</option>
  </select>
  <textarea id="de_data" cols=50 rows=20></textarea>
  <button name="Send" onclick="send_event()">Send event</button>
`;

};

deq_events = new DEQevents();
deq_events.makeInterface();
select_event(document.getElementById('events'));
