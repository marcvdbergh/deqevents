# deqevents
For deq events addon


add bookmarklet:

javascript:(function(){var s=document.createElement('div');s.setAttribute('id', 'de_div');s.innerHTML='Loading...';s.style.color='black';s.style.padding='20px';s.style.position='fixed';s.style.zIndex='9999';s.style.fontSize='3.0em';s.style.border='2px solid black';s.style.right='40px';s.style.top='40px';s.style.width='430px';s.style.fontSize='14px';s.style.height='430px';document.body.appendChild(s);s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('id','deqevents');s.setAttribute('data-version','v1.92');s.setAttribute('src','https://cdn.jsdelivr.net/gh/marcvdbergh/deqevents@v1.92/events.js?d=%27+Date.now());document.body.appendChild(s);})();
