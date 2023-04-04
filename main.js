// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeGlyphs = document.querySelectorAll(".like-glyph");

likeGlyphs.forEach(likeGlyph => {
  likeGlyph.addEventListener("click", handleLikeClick);
});


function handleLikeClick(event){
  if (event.target.innerHTML === EMPTY_HEART){
    mimicServerCall().then(() => {
      event.target.classList.add("activated-heart");
      event.target.innerHTML = FULL_HEART;

    }).catch((error) => {
      let modal = document.querySelector("#modal");
      modal.classList.remove("hidden");
      let modalMessage = document.querySelector("#modal-message");
      modalMessage.textContent = error;

      function removeErrorMessage() {
        modal.classList.add("hidden");
      }

      // Call removeErrorMessage() after 3 seconds
      setTimeout(removeErrorMessage, 3000);
    })
  }

  if (event.target.innerHTML === FULL_HEART){
    mimicServerCall()
    .then(() => {
      event.target.classList.remove("activated-heart");
      event.target.innerHTML = EMPTY_HEART;

    })
  }

}

if (element.classList.contains('class1')) {
  console.log('class1 exists');
}
if (element.classList.contains('class2')) {
  console.log('class2 exists');
}




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
