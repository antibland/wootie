"use strict";
var wootie = (function() {
  var transitionend = utilities.whichTransitionEvent(),
      animationend  = utilities.whichAnimationEvent(),
      main          = document.querySelector("main");

  function init() {
    bindings();
  }

  function loaded() {
    document.querySelector("body").setAttribute("aria-busy", "false");
  }

  function bindings() {
    window.addEventListener("load", loaded);
  }

  function chain(obj) {
    var waiting_for = document.querySelector(obj.waiting_for),
        next_up     = document.querySelector(obj.next_up),
        apply       = obj.apply;

    transitionend && waiting_for.addEventListener(transitionend, function() {
      next_up.classList.add(apply);
    });
  }

  return {
    init: init,
    chain: chain
  };

})();
