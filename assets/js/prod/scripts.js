var revealVideo,hideVideo;function resizeHeaderOnScroll(){var e=window.pageYOffset||document.documentElement.scrollTop,d=document.getElementById("side-header");111<e?d.classList.add("smaller"):d.classList.remove("smaller")}$(document).ready(function(){Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq")}),revealVideo=function(e,d){var t=document.getElementById(d).src;document.getElementById(d).src=t+"&autoplay=1",document.getElementById(e).style.display="block"},hideVideo=function(e,d){var t=document.getElementById(d).src.replace("&autoplay=1","");document.getElementById(d).src=t,document.getElementById(e).style.display="none"},window.addEventListener("scroll",resizeHeaderOnScroll);