// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //영상이 재생할 유튜브 ID
    playerVars : {
        autoplay : true, //자동재생 여부
        loop : true, //반복재생 여부
        playlist : "An6LvWQuj_8" //반복재생할 id 한번 더 설정해줘야함
    },
    events: {
      'onReady': function(event){
          event.target.mute(); //음소거 설정
      }
    }
  });
}
