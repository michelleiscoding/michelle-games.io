var count = 0;

function like() {
  count = count + 1
  updateUI();
}

function dislike() {
  count = count - 1
   updateUI();
}

function updateUI() {
   document.getElementById('count').innerHTML = count;
}
