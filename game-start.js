document.getElementsByTagName("body_start")[0].style.display = "block";
document.getElementsByTagName("body_easy")[0].style.display = "none";
document.getElementsByTagName("body_medium")[0].style.display = "none";
document.getElementsByTagName("body_hard")[0].style.display = "none";
document.getElementsByTagName("body_end")[0].style.display = "none";
//Init for the start page
{
      var input_image_p1 = document.getElementById("input_image_p1");
      var input_image_p2 = document.getElementById("input_image_p2");
      var easy_button = document.getElementById("easy_button");
      var medium_button = document.getElementById("medium_button");
      var hard_button = document.getElementById("hard_button");
      var p1_name = document.getElementById("p1");
      var p2_name = document.getElementById("p2");
      var p1_label = document.getElementById("p1_label");
      var p2_label = document.getElementById("p2_label");
      var av1 = -1, av2 = -1;
      var av_p1 = [];
      var av_p2 = [];
      for (var x = 0; x < 4; x++) {
            av_p1[x] = document.getElementById("av" + (x + 1) + "_p1")
            av_p2[x] = document.getElementById("av" + (x + 1) + "_p2")
      }
}
//Init for the easy page
{
      var p1_easy_label = document.getElementById("p1_easy_label");
      var p2_easy_label = document.getElementById("p2_easy_label");
      var p1_easy_score = document.getElementById("p1_easy_score");
      var p2_easy_score = document.getElementById("p2_easy_score");
      var p1_easy_av = document.getElementById("p1_easy_av");
      var p2_easy_av = document.getElementById("p2_easy_av");
      var cards_easy = []
      var imgs_easy = []
      var remaining_cards_easy = 16;
      for (var x = 0; x < 16; x++) {
            cards_easy[x] = document.getElementById("cardE" + (x + 1));
      }
      for (var i = 0; i < 16; i++) {
            imgs_easy[i] = "easy/" + (i + 1) + ".jpg";
            if (i >= 8)
                  imgs_easy[i] = "easy/" + ((i - 8) + 1) + ".jpg";
      }
}
//Init for the medium page
{
      var p1_med_label = document.getElementById("p1_med_label");
      var p2_med_label = document.getElementById("p2_med_label");
      var p1_med_score = document.getElementById("p1_med_score");
      var p2_med_score = document.getElementById("p2_med_score");
      var p1_med_av = document.getElementById("p1_med_av");
      var p2_med_av = document.getElementById("p2_med_av");
      var cards_med = []
      var imgs_med = []
      var remaining_cards_med = 36;
      for (var x = 0; x < 36; x++) {
            cards_med[x] = document.getElementById("cardM" + (x + 1));
      }
      for (var i = 0; i < 36; i++) {
            imgs_med[i] = "med/" + (i + 1) + ".jpg";
            if (i >= 18)
                  imgs_med[i] = "med/" + ((i - 18) + 1) + ".jpg";
      }
}
//Init for the hard page
{
      var p1_hard_label = document.getElementById("p1_hard_label");
      var p2_hard_label = document.getElementById("p2_hard_label");
      var p1_hard_score = document.getElementById("p1_hard_score");
      var p2_hard_score = document.getElementById("p2_hard_score");
      var cards_hard = []
      var imgs_hard = []
      var remaining_cards_hard = 64;
      for (var x = 0; x < 64; x++) {
            cards_hard[x] = document.getElementById("cardH" + (x + 1));
      }
      for (var i = 0; i < 64; i++) {
            imgs_hard[i] = "hard/" + (i + 1) + ".jpg";
            if (i >= 32)
                  imgs_hard[i] = "hard/" + ((i - 32) + 1) + ".jpg";
      }
}
//Init Global
var final_image = document.getElementById("final_image");
var score1 = 0, score2 = 0;
var player = 1;
var selected;
var first = -1, second = -1;
var clicked = false;
var custom_image_p1 = 0;
var custom_image_p2 = 0;
var custom_image_source1 ;
var custom_image_source2 ;

function easy_button_onclick() {
      if (p1_name.value == "") {
            p1_name.value = "Player 1";

      }
      if (p2_name.value == "") {
            p2_name.value = "Player 2";
      }
      if (av1 == -1) {
            randomIndex = Math.floor(Math.random() * 4);
            av1 = randomIndex

      }
      if (av2 == -1) {
            randomIndex = Math.floor(Math.random() * 4);
            av2 = randomIndex
      }
      p1_easy_label.innerHTML = p1_name.value;
      p2_easy_label.innerHTML = p2_name.value;
      p1_easy_av.src = "avatars/avatar" + (av1 + 1) + ".jpg"
      p2_easy_av.src = "avatars/avatar" + (av2 + 1) + ".jpg"
      p1_easy_av.style.border = "6px solid #DE42FD"
      if(custom_image_p1){p1_easy_av.src = custom_image_source1}
      if(custom_image_p2){p2_easy_av.src = custom_image_source2}

      document.getElementsByTagName("body_start")[0].style.display = "none";
      document.getElementsByTagName("body_easy")[0].style.display = "block";



}

function medium_button_onclick() {
      if (p1_name.value == "") {
            p1_name.value = "Player 1";

      }
      if (p2_name.value == "") {
            p2_name.value = "Player 2";
      }
      if (av1 == -1) {
            randomIndex = Math.floor(Math.random() * 4);
            av1 = randomIndex

      }
      if (av2 == -1) {
            randomIndex = Math.floor(Math.random() * 4);
            av2 = randomIndex
      }
      p1_med_label.innerHTML = p1_name.value;
      p2_med_label.innerHTML = p2_name.value;
      p1_med_av.src = "avatars/avatar" + (av1 + 1) + ".jpg"
      p2_med_av.src = "avatars/avatar" + (av2 + 1) + ".jpg"
      p1_med_av.style.border = "6px solid #DE42FD"
      if(custom_image_p1){p1_med_av.src = custom_image_source1}
      if(custom_image_p2){p2_med_av.src = custom_image_source2}

      document.getElementsByTagName("body_start")[0].style.display = "none";
      document.getElementsByTagName("body_medium")[0].style.display = "block";

}

function hard_button_onclick() {
      if (p1_name.value == "") {
            p1_name.value = "Player 1";

      }
      if (p2_name.value == "") {
            p2_name.value = "Player 2";
      }
      if (av1 == -1) {
            randomIndex = Math.floor(Math.random() * 4);
            av1 = randomIndex

      }
      if (av2 == -1) {
            randomIndex = Math.floor(Math.random() * 4);
            av2 = randomIndex
      }
      p1_hard_label.innerHTML = p1_name.value;
      p2_hard_label.innerHTML = p2_name.value;
      p1_hard_av.src = "avatars/avatar" + (av1 + 1) + ".jpg"
      p2_hard_av.src = "avatars/avatar" + (av2 + 1) + ".jpg"
      p1_hard_av.style.border = "6px solid #DE42FD"
      if(custom_image_p1){p1_hard_av.src = custom_image_source1}
      if(custom_image_p2){p2_hard_av.src = custom_image_source2}

      document.getElementsByTagName("body_start")[0].style.display = "none";
      document.getElementsByTagName("body_hard")[0].style.display = "block";

}

function av1_image_onclick(id) {
      av1 = id;
      for (var x = 0; x < 4; x++) {
            if (av1 == x) {
                  av_p1[x].style.border = "6px solid #228CFF";
                  continue;
            }
            av_p1[x].style.border = "none";

      }
}

function av2_image_onclick(id) {
      av2 = id;
      for (var x = 0; x < 4; x++) {
            if (av2 == x) {
                  av_p2[x].style.border = "6px solid #228CFF";
                  continue;
            }
            av_p2[x].style.border = "none";

      }
}

function onClick_card_easy(card, id) {

      if (clicked == false) //First pick
      {
            if (card.src.includes("cardback")) {
                  first = id;
                  card.src = imgs_easy[id - 1];
                  selected = card.src;
                  clicked = true;
            }
      }
      if (clicked == true) {
            second = id;
            if (card.src.includes("cardback")) {     
                  card.src = imgs_easy[id - 1]
                  cards_easy[0].removeEventListener('click', function (e) {
                        onClick_card_easy(cards_easy[0], 1)
                  });
                  if (card.src == selected) {
                        if (player == 1) {
                              score1 += 2;
                              p1_easy_score.innerHTML = "Score = " + score1;
                        }
                        if (player == 2) {
                              score2 += 2;
                              p2_easy_score.innerHTML = "Score = " + score2;
                        }
                        selected = null;
                        clicked = false;
                        if (player == 1) {
                              player = 2;
                              p2_easy_av.style.border = "6px solid #DE42FD";
                              p1_easy_av.style.border = "none";
                        }
                        else {
                              player = 1;
                              p1_easy_av.style.border = "6px solid #DE42FD";
                              p2_easy_av.style.border = "none";
                        }
                        remaining_cards_easy -= 2;
                        if (remaining_cards_easy == 0) {
                              check_score(score1, score2);
                        }
                        return;
                  }
                  cards_easy[first - 1].src = "images/cardback-easy.jpg"
                  cards_easy[second - 1].src = "images/cardback-easy.jpg"
                  clicked = false;
                  if (player == 1) {
                        player = 2;
                        p2_easy_av.style.border = "6px solid #DE42FD";
                        p1_easy_av.style.border = "none";
                  }
                  else {
                        player = 1;
                        p1_easy_av.style.border = "6px solid #DE42FD";
                        p2_easy_av.style.border = "none";
                  }
            }
      }
}

function onClick_card_med(card, id) {

      if (clicked == false) //First pick
      {
            first = id;
            if (card.src.includes("cardback")) {
                  card.src = imgs_med[id - 1];
                  selected = card.src;
                  clicked = true;
            }
      }
      if (clicked == true) {
            second = id;
            if (card.src.includes("cardback")) {
                  card.src = imgs_med[id - 1];
                  if (card.src == selected) {
                        if (player == 1) {
                              score1 += 2;
                              p1_med_score.innerHTML = "Score = " + score1;
                        }
                        if (player == 2) {
                              score2 += 2;
                              p2_med_score.innerHTML = "Score = " + score2;
                        }
                        selected = null;
                        clicked = false;
                        if (player == 1) {
                              player = 2;
                              p2_med_av.style.border = "6px solid #228B22";
                              p1_med_av.style.border = "none";
                        }
                        else {
                              player = 1;
                              p1_med_av.style.border = "6px solid #228B22";
                              p2_med_av.style.border = "none";
                        }
                        remaining_cards_med -= 2;
                        if (remaining_cards_med == 0) {
                              check_score(score1, score2);
                        }
                        return;
                  }
                  cards_med[first - 1].src = "images/cardback-med.jpg"
                  cards_med[second - 1].src = "images/cardback-med.jpg"
                  clicked = false;
                  if (player == 1) {
                        player = 2;
                        p2_med_av.style.border = "6px solid #228B22";
                        p1_med_av.style.border = "none";
                  }
                  else {
                        player = 1;
                        p1_med_av.style.border = "6px solid #228B22";
                        p2_med_av.style.border = "none";
                  }
            }
      }
}

function onClick_card_hard(card, id) {

      if (clicked == false) //First pick
      {
            first = id;
            if (card.src.includes("cardback")) {
                  card.src = imgs_hard[id - 1];
                  selected = card.src;
                  clicked = true;
            }
      }
      if (clicked == true) {
            second = id;
            if (card.src.includes("cardback")) {
                  card.src = imgs_hard[id - 1];
                  if (card.src == selected) {
                        if (player == 1) {
                              score1 += 2;
                              p1_hard_score.innerHTML = "Score = " + score1;
                        }
                        if (player == 2) {
                              score2 += 2;
                              p2_hard_score.innerHTML = "Score = " + score2;
                        }
                        selected = null;
                        clicked = false;
                        if (player == 1) {
                              player = 2;
                              p2_hard_av.style.border = "6px solid #228B22";
                              p1_hard_av.style.border = "none";
                        }
                        else {
                              player = 1;
                              p1_hard_av.style.border = "6px solid #228B22";
                              p2_hard_av.style.border = "none";
                        }
                        remaining_cards_hard -= 2;
                        if (remaining_cards_hard == 0) {
                              check_score(score1, score2);
                        }
                        return;
                  }
                  cards_hard[first - 1].src = "images/cardback-hard.jpg"
                  cards_hard[second - 1].src = "images/cardback-hard.jpg"
                  clicked = false;
                  if (player == 1) {
                        player = 2;
                        p2_hard_av.style.border = "6px solid #228B22";
                        p1_hard_av.style.border = "none";
                  }
                  else {
                        player = 1;
                        p1_hard_av.style.border = "6px solid #228B22";
                        p2_hard_av.style.border = "none";
                  }
            }
      }
}

function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
      }
      return array;
}

function check_score(score1, score2) {
      if (score1 > score2) {
            final_image.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);;
            final_image.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            document.getElementsByTagName("body_end")[0].style.display = "block";
            document.getElementsByTagName("body_start")[0].style.display = "none";
            document.getElementsByTagName("body_easy")[0].style.display = "none";
            document.getElementsByTagName("body_medium")[0].style.display = "none";
            document.getElementsByTagName("body_hard")[0].style.display = "none";
      }
      else if (score1 < score2) {
            final_image.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);;
            final_image.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            document.getElementsByTagName("body_end")[0].style.display = "block";
            document.getElementsByTagName("body_start")[0].style.display = "none";
            document.getElementsByTagName("body_easy")[0].style.display = "none";
            document.getElementsByTagName("body_medium")[0].style.display = "none";
            document.getElementsByTagName("body_hard")[0].style.display = "none";
      }
      else if (score1 == score2) {
            final_image.src = "images/sadface.jpg"
            final_image.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);;
            final_image.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            document.getElementsByTagName("body_end")[0].style.display = "block";
            document.getElementsByTagName("body_start")[0].style.display = "none";
            document.getElementsByTagName("body_easy")[0].style.display = "none";
            document.getElementsByTagName("body_medium")[0].style.display = "none";
            document.getElementsByTagName("body_hard")[0].style.display = "none";
      }
}

function sleep(milliseconds) {
      const date = Date.now();
      let now = null;
      do {
        now = Date.now();
      } while (now - date < milliseconds);
    }

window.onload = function () {
      shuffle(imgs_easy);
      shuffle(imgs_med);
      shuffle(imgs_hard);
      //Start page action listeners
      {

            input_image_p1.addEventListener('change', function selectedFileChanged() {
                  if (this.files.length === 0) {
                    console.log('No file selected.');
                    return;}
                    const reader = new FileReader();
                    reader.onload = function fileReadCompleted() {
                        const img = new Image();          // creates an <img> element
                        img.src = reader.result;          // loads the data URL as the image source
                        custom_image_source1 = img.src
                        custom_image_p1 = 1;
                    };
                    reader.readAsDataURL(this.files[0]);
                  });
            input_image_p2.addEventListener('change', function selectedFileChanged() {
                  if (this.files.length === 0) {
                    console.log('No file selected.');
                    return;}
                    const reader = new FileReader();
                    reader.onload = function fileReadCompleted() {
                        const img = new Image();          // creates an <img> element
                        img.src = reader.result;          // loads the data URL as the image source
                        custom_image_source2 = img.src
                        custom_image_p2 = 1;
                    };
                    reader.readAsDataURL(this.files[0]);
                  });

            easy_button.addEventListener('click', function (e) {
                  easy_button_onclick()
            });
            medium_button.addEventListener('click', function (e) {
                  medium_button_onclick()
            });
            hard_button.addEventListener('click', function (e) {
                  hard_button_onclick()
            });
            hard_button.addEventListener('click', function (e) {
                  hard_button_onclick()
            });

            av_p1[0].addEventListener('click', function (e) {
                  av1_image_onclick(0)
            });
            av_p1[1].addEventListener('click', function (e) {
                  av1_image_onclick(1)
            });
            av_p1[2].addEventListener('click', function (e) {
                  av1_image_onclick(2)
            });
            av_p1[3].addEventListener('click', function (e) {
                  av1_image_onclick(3)
            });
            av_p2[0].addEventListener('click', function (e) {
                  av2_image_onclick(0)
            });
            av_p2[1].addEventListener('click', function (e) {
                  av2_image_onclick(1)
            });
            av_p2[2].addEventListener('click', function (e) {
                  av2_image_onclick(2)
            });
            av_p2[3].addEventListener('click', function (e) {
                  av2_image_onclick(3)
            });
      }
      //Easy page action listeners
      {
            cards_easy[0].addEventListener('click', function () {
                  onClick_card_easy(cards_easy[0], 1)
            });
            cards_easy[1].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[1], 2)
            });
            cards_easy[2].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[2], 3)
            });
            cards_easy[3].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[3], 4)
            });
            cards_easy[4].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[4], 5)
            });
            cards_easy[5].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[5], 6)
            });
            cards_easy[6].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[6], 7)
            });
            cards_easy[7].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[7], 8)
            });
            cards_easy[8].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[8], 9)
            });
            cards_easy[9].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[9], 10)
            });
            cards_easy[10].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[10], 11)
            });
            cards_easy[11].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[11], 12)
            });
            cards_easy[12].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[12], 13)
            });
            cards_easy[13].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[13], 14)
            });
            cards_easy[14].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[14], 15)
            });
            cards_easy[15].addEventListener('click', function (e) {
                  onClick_card_easy(cards_easy[15], 16)
            });
      }
      //medium page action listeners
      {
            cards_med[0].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[0], 1)
            });
            cards_med[1].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[1], 2)
            });
            cards_med[2].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[2], 3)
            });
            cards_med[3].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[3], 4)
            });
            cards_med[4].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[4], 5)
            });
            cards_med[5].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[5], 6)
            });
            cards_med[6].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[6], 7)
            });
            cards_med[7].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[7], 8)
            });
            cards_med[8].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[8], 9)
            });
            cards_med[9].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[9], 10)
            });
            cards_med[10].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[10], 11)
            });
            cards_med[11].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[11], 12)
            });
            cards_med[12].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[12], 13)
            });
            cards_med[13].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[13], 14)
            });
            cards_med[14].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[14], 15)
            });
            cards_med[15].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[15], 16)
            });
            cards_med[16].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[16], 17)
            });
            cards_med[17].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[17], 18)
            });
            cards_med[18].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[18], 19)
            });
            cards_med[19].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[19], 20)
            });
            cards_med[20].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[20], 21)
            });
            cards_med[21].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[21], 22)
            });
            cards_med[22].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[22], 23)
            });
            cards_med[23].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[23], 24)
            });
            cards_med[24].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[24], 25)
            });
            cards_med[25].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[25], 26)
            });
            cards_med[26].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[26], 27)
            });
            cards_med[27].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[27], 28)
            });
            cards_med[28].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[28], 29)
            });
            cards_med[29].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[29], 30)
            });
            cards_med[30].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[30], 31)
            });
            cards_med[31].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[31], 32)
            });
            cards_med[32].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[32], 33)
            });
            cards_med[33].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[33], 34)
            });
            cards_med[34].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[34], 35)
            });
            cards_med[35].addEventListener('click', function (e) {
                  onClick_card_med(cards_med[35], 36)
            });
      }
      //Hard page action listeners
      {
            cards_hard[0].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[0], 1)
            });
            cards_hard[1].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[1], 2)
            });
            cards_hard[2].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[2], 3)
            });
            cards_hard[3].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[3], 4)
            });
            cards_hard[4].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[4], 5)
            });
            cards_hard[5].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[5], 6)
            });
            cards_hard[6].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[6], 7)
            });
            cards_hard[7].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[7], 8)
            });
            cards_hard[8].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[8], 9)
            });
            cards_hard[9].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[9], 10)
            });
            cards_hard[10].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[10], 11)
            });
            cards_hard[11].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[11], 12)
            });
            cards_hard[12].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[12], 13)
            });
            cards_hard[13].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[13], 14)
            });
            cards_hard[14].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[14], 15)
            });
            cards_hard[15].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[15], 16)
            });
            cards_hard[16].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[16], 17)
            });
            cards_hard[17].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[17], 18)
            });
            cards_hard[18].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[18], 19)
            });
            cards_hard[19].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[19], 20)
            });
            cards_hard[20].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[20], 21)
            });
            cards_hard[21].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[21], 22)
            });
            cards_hard[22].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[22], 23)
            });
            cards_hard[23].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[23], 24)
            });
            cards_hard[24].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[24], 25)
            });
            cards_hard[25].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[25], 26)
            });
            cards_hard[26].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[26], 27)
            });
            cards_hard[27].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[27], 28)
            });
            cards_hard[28].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[28], 29)
            });
            cards_hard[29].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[29], 30)
            });
            cards_hard[30].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[30], 31)
            });
            cards_hard[31].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[31], 32)
            });
            cards_hard[32].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[32], 33)
            });
            cards_hard[33].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[33], 34)
            });
            cards_hard[34].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[34], 35)
            });
            cards_hard[35].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[35], 36)
            });
            cards_hard[36].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[36], 37)
            });
            cards_hard[37].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[37], 38)
            });
            cards_hard[38].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[38], 39)
            });
            cards_hard[39].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[39], 40)
            });
            cards_hard[40].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[40], 41)
            });
            cards_hard[41].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[41], 42)
            });
            cards_hard[42].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[42], 43)
            });
            cards_hard[43].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[43], 44)
            });
            cards_hard[44].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[44], 45)
            });
            cards_hard[45].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[45], 46)
            });
            cards_hard[46].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[46], 47)
            });
            cards_hard[47].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[47], 48)
            });
            cards_hard[48].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[48], 49)
            });
            cards_hard[49].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[49], 50)
            });
            cards_hard[50].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[50], 51)
            });
            cards_hard[51].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[51], 52)
            });
            cards_hard[52].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[52], 53)
            });
            cards_hard[53].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[53], 54)
            });
            cards_hard[54].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[54], 55)
            });
            cards_hard[55].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[55], 56)
            });
            cards_hard[56].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[56], 57)
            });
            cards_hard[57].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[57], 58)
            });
            cards_hard[58].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[58], 59)
            });
            cards_hard[59].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[59], 60)
            });
            cards_hard[60].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[60], 61)
            });
            cards_hard[61].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[61], 62)
            });
            cards_hard[62].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[62], 63)
            });
            cards_hard[63].addEventListener('click', function (e) {
                  onClick_card_hard(cards_hard[63], 64)
            });
      }
}