"use strict";
const runScript = () => {

   const runSound = (key, type) => {
      const characterCode = getCharacterCode(key, type);

      const sound = document.querySelector(`audio[data-key="${characterCode}"]`);
      const keyBtn = document.querySelector(`button[data-key="${characterCode}"]`);

      if (sound) { // if specific sound responds to a correspond key (in data-key attribute) then we play sound

         sound.currentTime = 0; // rewind a sound (to start from the beginning immediately)
         sound.play();

         keyBtn.classList.add("active");
      }
   };

   //get the keycode from a keypress or click events
   function getCharacterCode(key, type) {
      if (type === "click") {
         return soundOnClick(key);
      } else if (type === "press") {
         return soundOnPress(key);
      }
   }

   //get a particular keycode
   function soundOnPress(key) {
      const keyCode = key.keyCode;
      return keyCode;
   }

   //get a particular clicked btn with a certain data-key value
   function soundOnClick(key) {
      const keyCode = key.path[0].getAttribute("data-key");
      return keyCode;
   }


   function removeTransition(event) {

      if (event.propertyName !== "transform") return;

      this.classList.remove("active"); // remove an active class from a certain pressed key
   };

   function removeActiveClass() {
      const keys = document.querySelectorAll(".drum-kit__key");

      keys.forEach(key => {
         key.addEventListener("transitionend", removeTransition);// remove transition (animation) on a specific key when it's finished 
      });
   };

   // Add an event listeners in order to listen to a keypress or click
   window.addEventListener("keydown", (key) => {
      const type = "press";
      runSound(key, type);
   });

   window.addEventListener("click", (key) => {
      const type = "click";
      runSound(key, type);
   });

   // call functions
   removeActiveClass();
}

if (document.readyState === "loading") {
   document.addEventListener("DOMContentLoaded", runScript);
} else {
   runScript();
}