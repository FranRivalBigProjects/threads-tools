const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('mutex')) out+='- Mutex locking behavior\n';
if(txt.includes('schedule')) out+='- Thread scheduling pattern\n';
if(txt.includes('race')) out+='- Possible race condition\n';
if(txt.includes('deadlock')) out+='- Deadlock scenario detected\n';
if(txt.includes('pool')) out+='- Thread pool usage\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze concurrency, synchronization, and performance\n';

res.innerText=out;
}