'use strict';

//Holds the current position of the div container.
let currentPosition = 0;

//Moves the container div left or right, based on the current position.
function move(){
  switch(currentPosition){
    case 0:
      document.getElementById('movable').setAttribute("class", "loc1");
      currentPosition = 1;
      return;
    case 1:
      document.getElementById('movable').setAttribute("class", "");
      currentPosition = 0;
      return;
  }
}
