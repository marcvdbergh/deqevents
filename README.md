# deqevents
Bookmarklet for sending custom deq events.


Add bookmarklet:
![image](https://user-images.githubusercontent.com/40234569/199436000-dbc51e43-1fef-443f-ae5f-4a92880edd52.png)

javascript:(function(){var s=document.createElement('div');s.setAttribute('id', 'de_div');s.innerHTML='Loading...';s.style.color='black';s.style.padding='20px';s.style.position='fixed';s.style.zIndex='9999';s.style.fontSize='3.0em';s.style.border='2px solid black';s.style.right='40px';s.style.top='40px';s.style.width='430px';s.style.fontSize='14px';s.style.height='430px';document.body.appendChild(s);s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('id','deqevents');s.setAttribute('data-version','v1.96');s.setAttribute('src','https://cdn.jsdelivr.net/gh/marcvdbergh/deqevents@v1.96/events.js?d=%27+Date.now());document.body.appendChild(s);})();

![image](https://user-images.githubusercontent.com/40234569/199434056-a4beffef-3acc-4e01-b513-d98e9cdeb557.png)

Send event (link) = Download json file

Dropdown = Select event to send

Send event (button) = Send event to DEQ

Textarea = Editable event

File button = Choose custom json file (Stored in localStorage)
