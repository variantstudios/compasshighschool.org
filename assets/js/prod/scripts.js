var revealVideo,hideVideo;function resizeHeaderOnScroll(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("side-header");111<e?t.classList.add("smaller"):t.classList.remove("smaller")}$(document).ready(function(){Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq")}),$.getJSON("https://compass-social-feed.herokuapp.com/feed.json",function(e){$.each(e.slice(0,3),function(e,t){if("instagram"==t.source.name){var a='<a href="'+t.link+'" class="social-post" target="_blank"><span class="social-tag instagram"></span><img src="'+t.images.content.url+'" alt="instagram"><div class="social-text"><p class="date">'+t.created_time.slice(0,10)+"</p><p>"+t.content+"</p></div></a>";$(a).appendTo(".social-posts")}})}),revealVideo=function(e,t){var a=document.getElementById(t).src;document.getElementById(t).src=a+"&autoplay=1",document.getElementById(e).style.display="block"},hideVideo=function(e,t){var a=document.getElementById(t).src.replace("&autoplay=1","");document.getElementById(t).src=a,document.getElementById(e).style.display="none"},window.addEventListener("scroll",resizeHeaderOnScroll);