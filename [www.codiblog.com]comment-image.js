/************************************************************************
*************************************************************************
*  Video and Image Comments System
*  Modified By MD JILLUR RAHMAN
**************************************************************************
*************************************************************************/
var oetag=0,oetagname="video",oetube=-1;function oe_loadscript(a){var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(b)}function oe_jumptohash(){window.scrollTo(0,$("#"+window.location.hash.replace(/^#/,"")).offset().top)}var oe_tid,oe_elems={}; function oembed_callback(a){revurl=a.url.split("").reverse().join("");html=oe_elems[a.callID].html();ee=$(a.html);w=parseInt(ee.attr("width"));h=parseInt(ee.attr("height"));1==oetube&&(src=ee.attr("src"),src+=(-1==src.indexOf("?")?"?":"&")+"autoplay=1",ee.attr("src",src),ee.attr("style","vertical-align:top;"),htm=$("<div/>").append(ee).html(),htm=$("<div/>").text(htm).html().replace(/"/g,"&quot;"),a.html='<a href="'+a.url+'" class="youtube-tube-link" style="width: '+w+"px; height: "+h+"px; background: #000 url("+ a.thumbnail_url+') center center no-repeat;" onclick="$(this).replaceWith(\''+htm+'\');return false;"><div style="width:'+(w-4)+"px;height:"+(h-4)+'px;" class="youtube-tube-link-div"></div><div class="youtube-tube-link-info"><b>'+a.title+(a.playlist?"</b> [playlist]":"</b>")+"<br /><small>by "+a.author_name+"</small></div></a>");htmlx=html.replace(RegExp("\\["+oetagname+"="+a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")+"\\]")," "+a.url+" ");htmlx=htmlx.replace(RegExp("\\["+oetagname+ "="+a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")+" \\]")," "+a.url+" ");htmlx=htmlx.replace(RegExp('"'+a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")+'"',"g"),'"'+revurl+'"');htmlx=htmlx.replace(RegExp(a.url.replace("/","\\/").replace(".","\\.").replace("?","\\?")),'<div style="height:'+h+'px;" class="oembed youtube">'+a.html+"</div>");htmlx=htmlx.replace(RegExp('"'+revurl.replace("/","\\/").replace(".","\\.").replace("?","\\?")+'"',"g"),'"'+a.url+'"');html!=htmlx&& (oe_elems[a.callID].html(htmlx),0<window.location.hash.replace(/^#/,"").length&&(oe_tid&&window.clearTimeout(oe_tid),oe_tid=window.setTimeout("oe_jumptohash()",1E3)))}function oembed_yt(a,b,c){src="http://oembed-js.appspot.com/?url="+encodeURIComponent(a)+"&callback=oembed_callback&callID="+encodeURIComponent(c);b&&(src=src+"&maxwidth="+b+"&maxheight="+b);oe_loadscript(src)} $(document).ready(function(){det=$('<div class="youtube-tube-link-div" />');$("body").append(det);"absolute"==det.css("position")?0!=oetube&&(oetube=1):oetube=0;det.remove();window.setTimeout(function(){var a=0;$(".comment-content,.comment-body,.comment-body-author").each(function(){html=" "+$(this).html()+" ";if((matches=oetag?html.match(RegExp("\\["+oetagname+"=(https?:\\/\\/[^\\s<\\/]*youtu\\.*be[^\\]]+)","g")):html.match(/([>\s^]|\[\w+=)(https?:\/\/[^\s<\/]*youtu\.*be[^\s<\]]+)/g))&&matches.length)for(var b= 0;b<matches.length;b++)url=matches[b].match(/https?:\/\/[^\s<\/]*youtu\.*be[^\s<\]]+/),oe_elems[a]=$(this),oembed_yt(url,$(this).width(),a++)})},500)});
var _0x273a="innerHTML,comments,getElementById,length,<img src=',replace,<img width='100%' src=',' class='image'/>,<marquee>,</marquee>,<font size=',</font>,<font color=','>,<center>,</center>,<marquee direction='right'>,<table frame='box'><tr><td>,</td></tr></table>,<table align='center' frame='vsides' width='70%'><tr align='center'><td>,<hr/>,<table align='center' border='1' width='75%'><tr><td align='center' bgcolor=',<span style='background-color:,</span>,<font color='yellow' size='15'>&#9733;</font>,<font color='yellow' size='15'>&#9734;</font>,<font color='yellow' size='15'> &#9786; </font>,<font color='yellow' size='15'> &#9785; </font>,<,>".split(","); jrcomments=document[_0x273a[2]](_0x273a[1])[_0x273a[0]];0<jrcomments[_0x273a[3]]&&(jrcomments=jrcomments[_0x273a[5]](/\[img\]/gi,_0x273a[4]),jrcomments=jrcomments[_0x273a[5]](/\[im\#\]/gi,_0x273a[6]),jrcomments=jrcomments[_0x273a[5]](/\[\/img\]/gi,_0x273a[7]),document[_0x273a[2]](_0x273a[1])[_0x273a[0]]=jrcomments);

var _0x274a="innerHTML,comments,getElementById,length,<pre>,replace,<pre>,</pre>,<marquee>,</marquee>,<font size=',</font>,<font color=','>,<center>,</center>,<marquee direction='right'>,<table frame='box'><tr><td>,</td></tr></table>,<table align='center' frame='vsides' width='70%'><tr align='center'><td>,<hr/>,<table align='center' border='1' width='75%'><tr><td align='center' bgcolor=',<span style='background-color:,</span>,<font color='yellow' size='15'>&#9733;</font>,<font color='yellow' size='15'>&#9734;</font>,<font color='yellow' size='15'> &#9786; </font>,<font color='yellow' size='15'> &#9785; </font>,<,>".split(","); jrcomments=document[_0x274a[2]](_0x274a[1])[_0x274a[0]];0<jrcomments[_0x274a[3]]&&(jrcomments=jrcomments[_0x274a[5]](/\[pre\]/gi,_0x274a[4]),jrcomments=jrcomments[_0x274a[5]](/\[im\#\]/gi,_0x274a[6]),jrcomments=jrcomments[_0x274a[5]](/\[\/pre\]/gi,_0x274a[7]),document[_0x274a[2]](_0x274a[1])[_0x274a[0]]=jrcomments);