const channelID='UCbO8XPuOW93PsUN0202PCxQ';$(window).on('load',function(){$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'+channelID,function(data){var link=data.items[0].link;var id=link.substr(link.indexOf('=')+1);$('#youtubeVideo').attr('src',(!localStorage.getItem('cookieconsent')?'https://www.youtube-nocookie.com/embed/':'https://youtube.com/embed/')+id+'?controls=0&showinfo=0&rel=0');});});

/*
$(document).on('click',function(){$('.collapse').collapse('hide');});(function(){if(!localStorage.getItem('cookieconsent')){document.body.innerHTML+='\
<div id="cookieconsent">\
    <i class="fas fa-exclamation-triangle"></i>\
    Questo sito fa uso di cookie per migliorare l\'esperienza di navigazione degli utenti, per presentare annunci pubblicitari personalizzati e per raccogliere informazioni sull\'utilizzo del sito stesso. Usando il sito accetti questo utilizzo. Consulta l\'<a href="../legal/cookie-policy.html" target="_blank">Informativa sui cookie</a>. \
    <a href="#" id="cookieclose"><i class="fas fa-times"></i></a>\
</div>\
';$('#cookieclose').on('click',function(e){e.preventDefault();$('#cookieconsent').hide();localStorage.setItem('cookieconsent',true);});}})();*/