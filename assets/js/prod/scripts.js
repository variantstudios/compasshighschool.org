$(document).ready(function(){Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq"),window.addEventListener("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("side-header");e>111?t.classList.add("smaller"):t.classList.remove("smaller")}),$("a").each(function(){var e,t;"http:"!==this.protocol&&"https:"!==this.protocol||"_blank"!=this.target&&("youtube.com"===this.hostname||"www.youtube.com"===this.hostname?e=(t=this.search.match(/[?&]v=([^&]*)/))&&t[1]:"youtu.be"===this.hostname&&(e=this.pathname.substr(1)),e&&$(this).before('<div class="videoWrapper"><iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/'+e+'?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>').remove())})});