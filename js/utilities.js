var utilities = (function() {
  function whichAnimationEvent() {
    var a,
        el = document.createElement('fakeelement'),
        animations = {
          'animation':'animationend',
          'OAnimation':'oAnimationEnd',
          'MozTransition':'animationend',
          'WebkitTransition':'webkitAnimationEnd'
        };

      for (a in animations){
        if(el.style[a] !== undefined){
          return animations[a];
        }
      }
    }

  function whichTransitionEvent() {
    var t,
        el = document.createElement('fakeelement'),
        transitions = {
          'transition':'transitionend',
          'OTransition':'oTransitionEnd',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
        };

    for (t in transitions){
      if(el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  return {
    whichAnimationEvent: whichAnimationEvent,
    whichTransitionEvent: whichTransitionEvent
  }
})();
