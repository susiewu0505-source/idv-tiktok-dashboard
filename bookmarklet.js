javascript:(function(){
  var tags=[],rows=document.querySelectorAll('tr,[class*="listItem"],[class*="list-item"]');
  rows.forEach(function(r){
    var t=r.innerText||'';
    var hm=t.match(/#([\w\u3040-\u30ff\u3400-\u9fff]+)/);
    var pm=t.match(/([\d.]+[KMB万]?)\s*投稿/);
    if(hm&&t.length<300){
      tags.push({tag:hm[1],posts:pm?pm[1]:'?',growth:t.includes('↑↑')?'↑↑':t.includes('↑')?'↑':'→',
        relevance:'mid',note:'',
        tiktok_url:'https://www.tiktok.com/tag/'+encodeURIComponent(hm[1]),
        url:'https://ads.tiktok.com/business/creativecenter/hashtag/'+encodeURIComponent(hm[1])+'/pc/ja'});
    }
  });
  var seen={};
  tags=tags.filter(function(h){return seen[h.tag]?false:(seen[h.tag]=true);}).slice(0,20);
  var data={updated:new Date().toISOString().slice(0,10),source:'TikTok Creative Center Japan',hashtags:tags,songs:[]};
  var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='trends.json';a.click();
  alert('✅ trends.json 下载完成！\n替换到 idv-dashboard 文件夹，运行 bash update.sh 即可更新网站。');
})();