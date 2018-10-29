!function(){
try {
var license = document.querySelector(&#39;#HTML99 .license-code&#39;).innerText;
var password = &#39;gboecs&#39;;
var url = window.location.origin;
var code = btoa(license + &#39;#&#39; + password + &#39;#&#39; + url);
var oReq = new XMLHttpRequest();
oReq.addEventListener(&quot;load&quot;, function(){
  var result = JSON.parse(this.responseText);
  if (result[&#39;valid&#39;]) {
    return true;
  } else {
$(&#39;html&#39;)[&#39;html&#39;](&#39;&lt;img border=&quot;0&quot; data-original-height=&quot;493&quot; data-original-width=&quot;644&quot; height=&quot;488&quot; src=&quot;https://4.bp.blogspot.com/-UaySFepFlpQ/W7XnvHbS_2I/AAAAAAAAAhc/1WCQNsLdBbQWEbDHClLBy3pPuo97VvY0QCLcBGAs/s1600/redirect.png&quot; width=&quot;640&quot; style=&quot;    position: fixed;top: calc(34% - 160px);right: calc(45% - 240px);&quot; /&gt;&#39;); 
  }
});
oReq.open(&quot;GET&quot;, &quot;https://script.google.com/macros/s/AKfycbwykQ938LbP5OVDDN_I4fqQFLylYSfeb4JlmnOKekwaRcXddaCt/exec?check=&quot;+code);
oReq.send();
} catch (e) {
$(&#39;html&#39;)[&#39;html&#39;](&#39;&lt;img border=&quot;0&quot; data-original-height=&quot;493&quot; data-original-width=&quot;644&quot; height=&quot;488&quot; src=&quot;https://4.bp.blogspot.com/-UaySFepFlpQ/W7XnvHbS_2I/AAAAAAAAAhc/1WCQNsLdBbQWEbDHClLBy3pPuo97VvY0QCLcBGAs/s1600/redirect.png&quot; width=&quot;640&quot; style=&quot;    position: fixed;top: calc(34% - 160px);right: calc(45% - 240px);&quot; /&gt;&#39;); 
}
}();
console.log(&quot;%cQeumag %cResponsive Template \n%c&gt;&gt; Information : %chttps://www.facebook.com/abd0.elbanaa \n%c&gt;&gt; Designed By : %cAbdo Elbanaa&quot;,&quot;font-weight:bold;color:#f88a04;font-family:Tahoma;font-size:18px;&quot;,&quot;font-weight:bold;color:#444;font-family:Tahoma;font-size:18px;&quot;,&quot;color:#999&quot;,&quot;color:#444&quot;,&quot;color:#999&quot;,&quot;color:#444&quot;);
