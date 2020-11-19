// Word of the Day API

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        document.getElementById("word").innerHTML = apiResult.word;
        document.getElementById("defin").innerHTML = apiResult.definitions[0].text;

    }
};
xmlhttp.open('GET', 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=kiwsji19uz5pmm10k06q2s5sutf99le8ot3rs21d1x8y9yhrr', true);
xmlhttp.send();




// Pop-up ad

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

window.addEventListener("load",
  function() {
    setTimeout(showPopup, 3000);
  });

function showPopup() {
  document.getElementById("myModal").style.opacity = 1;
  document.getElementById("myModal").style.visibility = "visible";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
