// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const allHearts = document.querySelectorAll(".like-glyph")
// selects all the items with class(because of the .) like-glyph 
// Don't know why I'm having such a hard time with . = class, # = id lately

function likeFunc (event) {
  const heart = event.target;
  mimicServerCall('someurl')
  //call the mimic server function and assign it a url that doesn't matter anyway, like the points 
    .then(function (response) {
    // after the server call, do this function
      if (heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.className = 'activated-heart'
      } // if the heart is an empty heart switch it for a full one with class 'activated-heart'
      else {
        heart.innerText = EMPTY_HEART 
      } // or switch it to an empty heart. with white color? maybe?
      // heart.style.color = 'white'
    })
    .catch(function(error) {
      const modal = document.getElementById("modal")
      // assign the element with the id of 'modal' a variable name
      modal.className = ""; 
      // take it out of the hidden class group
      modal.innerText = error;
      // feed the error text into the id 
      setTimeout(() => modal.className = "hidden", 3000)
      // add the hidden class after three seconds to hide it again
    });
}
// so all the hearts on a page are in an array type thing so you need a for each in
for (const token of allHearts) {
  token.addEventListener('click', likeFunc);
}
// i.e. do the thing for each heart in the allHearts array
//someday I actually am going to name a function doTheThingZhuLi 

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
