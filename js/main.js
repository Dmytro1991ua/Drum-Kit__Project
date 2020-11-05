"use strict";
const runScript = () => {

   const runSound = (event) => {
      const physicalKey = event.code; // get a particular pressed key (physical key on the keyboard)
    
      const sound = document.querySelector(`audio[data-key="${physicalKey}"]`) 
      const key = document.querySelector(`button[data-key="${physicalKey}"]`);


      if (sound) { // if specific sound responds to a correspond key (in data-key attribute) then we play sound

         sound.currentTime = 0; // rewind a sound (to start from the beginning immediately)
         sound.play();

         key.classList.add("active");
      }
   }


   function removeTransition(e) {
      if (e.propertyName !== "transform") return;

      this.classList.remove("active"); // remove an active class from a certain pressed key
   };

   const removeActiveClass = () => {
      const keys = document.querySelectorAll(".drum-kit__key");

      keys.forEach(key => {
         key.addEventListener("transitionend", removeTransition);// remove transition (animation) on a specific key when it's finished 
      });
   };

   document.addEventListener("keydown", runSound);

   //call functions
   removeActiveClass(); 
}

if (document.readyState === "loading") {
   document.addEventListener("DOMContentLoaded", runScript);
} else {
   runScript();
}