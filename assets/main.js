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
