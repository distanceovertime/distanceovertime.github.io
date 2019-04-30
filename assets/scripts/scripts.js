$(document).ready(function() {
  var count = 0;
  var count2 = 0;
  var count3 = 0;
  var second = 1000;
  const distanceToNextImage = -450;
  var currentImageNumber = 0;
  var inArea = 0;
  var currentWeapon = "helloworld";
  var prevWeapon = "helloworld";
  var count3Tracker = 1;
  var fight_number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var maindialouge = true;
  var countTick = 0;
  var countTick2 = 0;
  var countTick3 = 0;
  var health = 100;
  var fightAction =  false;
  var enemyHealth = 0;
  var healthRegen = false;
  var usedEvents = [0,0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var enemyMod = 0;
  var currMaxImage = 1;
  var damage = 25;
  var maxHealth = 100;

  var dialouge = ["You can feel dark currents flowing beneath your fingertips.", "This will be useful.", "They are weak. You need more."]

  $("#right").click(function() {
    currentImageNumber = currentImageNumber+1;
    $("#carousel-strip").css("left", currentImageNumber*distanceToNextImage);
  });
  $("#left").click(function() {
    currentImageNumber = currentImageNumber-1;
    $("#carousel-strip").css("left", currentImageNumber*distanceToNextImage); 
  });

  $("#border").show();
  $(".home").hide();
  $("#homebutton").hide();
  $(".inventory").hide();
  $(".map").hide();

  $("#playbutton").click(function(){
    $(".home").show();
    $("#homebutton").show();
    countTick = 0.5;
    $(".startscreen").hide();
  });

  $("#playtestbutton").click(function(){
    $(".home").show();
    $("#homebutton").show();
    countTick = 0.5;
    $(".startscreen").hide();
    $("#invbutton").show();
    $("#weapon1").show();
    $("#weapon2").show();
    $("#weapon3").show();
    $("#weapon4").show();
    $("#weapon5").show();
    $("#weapon6").show();
    $("#weapon7").show();
    $("#weapon8").show();
    $("#mapbutton").show();
    $(".resourcebutttons").show();
    $("#infectedinc").show();
    $("#infectedinc2").show();
    $("#disasterinc").show();
    $(".counter2").show();
    $(".counter3").show();
    $(".devbuttons").show();
    currMaxImage = 2;


  });
  $("#mapbutton").click(function(){
      $(".home").hide();
      $("#homebutton").css({"border-bottom": "0px solid #ff9090"});
      $(".inventory").hide();
      $("#invbutton").css({"border-bottom": "0px solid #ff9090"});
      $(".map").show();
      $("#mapbutton").css({"border-bottom": "4px solid #ff9090"});
  });
  $("#homebutton").click(function(){
      $(".inventory").hide();
      $("#invbutton").css({"border-bottom": "0px solid #ff9090"});
      $(".map").hide();
      $("#mapbutton").css({"border-bottom": "0px solid #ff9090"});
      $(".home").show();
      $("#homebutton").css({"border-bottom": "4px solid #ff9090"});
  });
  $("#invbutton").click(function(){
      $(".map").hide();
      $("#mapbutton").css({"border-bottom": "0px solid #ff9090"});
      $(".home").hide();
      $("#homebutton").css({"border-bottom": "0px solid #ff9090"});
      $(".inventory").show();
      $("#invbutton").css({"border-bottom": "4px solid #ff9090"});
  });
  $(".mainhandweapon").click(function(){
    prevWeapon = currentWeapon;
    currentWeapon = $(this).text();
    $("#currently-equipped1").html("currently equipped: " + currentWeapon);

  });
  $(".offhandweapon").click(function(){
    currentWeapon2 = $(this).attr('id');
    $("#currently-equipped2").html("currently equipped: " + currentWeapon2);
  });

  $("#weapon1").click(function() {
        currentWeapon = "weapon1";
  });




  function area(currArea){
    inArea = currArea;
  }

  function updateDia(num){
      $("#gameplay_text").html(dialouge[num]);
      maindialouge = false;

  }

  function applyWeapon(weap){
    console.log("attempt" + weap);
    if (weap == "weapon1"){

      countTick = countTick + 0.5;
    }
    if (weap == "vitality shield (+ 1 health/sec)"){
      console.log("applied");
      healthRegen = true;
    }
    if (weap == "deepsword (+ 25 damage & + 25 max health)"){
      console.log("applied");
      damage = damage+25;
      health = health+25;
      maxHealth = maxHealth+25;
    }
    if (weap == "viralmancer (+ 6 population/sec)"){
      console.log("applied");
      countTick2 = countTick2+3;
    }
    if (weap == "bow of acceleration (+ 400000 souls/sec)"){
      console.log("applied");
      countTick = countTick+20000;
    }
    if (weap == "earthshaking hammer (+ 250 population/sec)"){
      console.log("applied");
      countTick2 = countTick2+125;
    }
    if (weap == "ultibreaker (+ 1 natural disaster/sec)"){
      console.log("applied");
      countTick3 = countTick3+0.5;
    }
    if (weap == "butterknife (+ 200 damage & + 500 max health)"){
      console.log("applied");
      damage = damage+200;
      health = health+500;
      maxHealth = maxHealth+500;
    }
    if (weap == "endbringer (+ 1000 damage & + 1000 max health)"){
      console.log("applied");
      damage = damage+1000;
      health = health+1000;
      maxHealth = maxHealth+1000;
    }

  }

  function reverseWeaponEffect(weap){
      if (weap == "helloworld"){
        console.log("removed")
      }
      if (weap == "weapon1"){
        countTick = countTick-0.5;
      }
      if (weap == "vitality shield (+ 1 health/sec)"){
        healthRegen = false;
      }
      if (weap == "deepsword (+ 25 damage & + 25 max health)"){
        damage = damage-25;
        health = health-25;
        maxHealth = maxHealth-25;
      }
      if (weap == "viralmancer (+ 6 population/sec)"){
      console.log("applied");
      countTick2 = countTick2-3;
    }
    if (weap == "bow of acceleration (+ 400000 souls/sec)"){
      console.log("applied");
      countTick = countTick-20000;
    }
    if (weap == "earthshaking hammer (+ 250 population/sec)"){
      console.log("applied");
      countTick2 = countTick2-125;
    }
    if (weap == "earthshaking hammer (+ 250 population/sec)"){
      console.log("applied");
      countTick2 = countTick2-125;
    }
    if (weap == "ultibreaker (+ 1 natural disaster/sec)"){
      console.log("applied");
      countTick3 = countTick3-0.5;
    }
    if (weap == "butterknife (+ 200 damage & + 500 max health)"){
      console.log("applied");
      damage = damage-200;
      health = health-500;
      maxHealth = maxHealth-500;
    }
    if (weap == "endbringer (+ 1000 damage & + 1000 max health)"){
      console.log("applied");
      enemyMod = enemyMod-1000;
      health = health-1000;
      maxHealth = maxHealth-1000;
    }

  }
  $("#infectedinc").unbind().click(function(){
      if (count > 100){
          count2 = count2 + 1;
          count = count-100;
        }
    });
  $("#infectedinc2").unbind().click(function(){
      if (count > 10000){
          count2 = count2 + 100;
          count = count-10000;
        }
    });

   $("#disasterinc").unbind().click(function(){
      if (count2 > 249){
          count2 = count2 - 250;
          count3 = count3+1;
          count = count+1000000;
        }
    });

   function deathFunc(){
    $(document.body).css("background-color","black");
    $("#losetext1").show();
    $("#okbutton").show();
    $("#border").hide();
   };
  function winFunc(){
    $(document.body).css("background-color","black");
    $("#losetext2").show();
    $("#okbutton").show();
    $("#border").hide();
   };

  $("#okbutton").click(function(){
    window.location.reload(true);
  });


  $(".increasebutton4").click(function(){
    deathFunc();
  })
  $(".increasebutton5").click(function(){
    winFunc();
  })



  //handles the first counter and the core gameplay loop
  var countUpFunction = function(){

    $(".health").html("Current power: " + Math.floor(health));



    $(".increasebutton").unbind().click(function(){
      countTick = countTick+10;
    });

    $(".decreasebutton").unbind().click(function(){
      countTick = countTick-10;
    });
    


    if (inArea != 1) {
      area(currentImageNumber);
    }





    // if (count3 > count3Tracker) {
    //   console.log(count3, count3Tracker)
    //   count3Tracker = count3;
    //   count = count+100;
    // }

    //gameplay
    
    if (count > 300 && count < 400){
      maindialouge = true;
     
    }

    if (count > 400 && maindialouge){
      updateDia(2);
    }
    if (count > 0 && count < 300 && maindialouge){
      updateDia(0);
    }
    if (count > 11 && count < 100 && usedEvents[0] == 0){
        usedEvents[0] = 1;
        if (fight_number[0] == 0){
            $("#gameplay_text2").html("A being approaches. Thinks himself a hero. He challenges your power. Fight him? Chance of winning: 100%");
            $(".fightbutton").show();
         }

        $(".fightbutton").unbind().click(function(){
            fight_number[0] = fight_number[0] + 1;
            $("#gameplay_text2").html("Not much of a challenge. He dropped a little something.");
            $("#weapon1").show();
            $("#invbutton").show();
            $(".fightbutton").hide();
            $(".nofightbutton").hide();
        });
    }
    if (count > 100 && count < 400 && usedEvents[1] == 0){
      console.log("inside");
        
        if (fight_number[1] == 0){
            $("#gameplay_text2").html("A friendly prescence approaches. She wants to negotiate.");
            $(".fightbutton").html("Entertain her");
            $(".nofightbutton").html("Not interested");
            $(".fightbutton").show();
            $(".nofightbutton").show();
         }
        if (fight_number[1] == 1){
            $("#gameplay_text2").html("'More life,' she explains, 'means more death.' \n Create a virus for 100 souls? (Each infected population increases soul catch rate by 5%.)");
            $(".fightbutton").html("yes");
            $(".nofightbutton").html("no");

        }
        if (fight_number[1] == 2){
            $("#gameplay_text2").html("Excellent.");
            count = count - 100;
            $(".counter2").show();
            $(".resourcebutttons").show();
            $("#infectedinc").show();
            $(".fightbutton").hide();
            $(".nofightbutton").hide();
            usedEvents[1] = 1;

        }
        if (fight_number[1] >= 4){
            $("#gameplay_text2").html("She scoffs and turns to leave.");
            $(".fightbutton").hide();
            $(".nofightbutton").hide();
            usedEvents[1] = 1;

        }
      
      

        $(".fightbutton").unbind().click(function(){
          fight_number[1] = fight_number[1] + 1;
        });
        $(".nofightbutton").unbind().click(function(){
          fight_number[1] = fight_number[1] + 5;
        });
      }


      if (count > 401 && count < 500 && usedEvents[2] == 0){
              usedEvents[2] = 1;
              $("#gameplay_text2").html("Your enemies grow stronger. Soon they will be yours.");
        };

      if (count > 501 && count < 1000 && usedEvents[3] == 0){
          
          if (fight_number[2] == 0){
              $("#gameplay_text2").html("An creture threatens your influence. Engage?");
              $(".fightbutton").html("Fight him");
              $(".nofightbutton").html("Flee");
              $(".fightbutton").show();
              $(".nofightbutton").show();
           }
          if (fight_number[2] == 1){
            fight_number[2] = fight_number[2] + 1;
            fightAction = true;
            enemyHealth = 25;
            enemyPower = 50;

          }
          if (fight_number[2] == 2){
             $("#gameplay_text2").html("enemy health: " + enemyPower);
             if (enemyPower <= 0){
              fight_number[2] = fight_number[2]+1;
             }
          }

          if (fight_number[2] == 3){
             $("#gameplay_text2").html("You find something on the body.");
             $("#gameplay_text").html("Your energy, it turns out, is not infinite");
             $("#weapon2").show();
             $("#weapon2.5").show();
             $(".fightbutton").hide();
             $(".nofightbutton").hide();
             usedEvents[3] = 1;
          }
      
          if (fight_number[2] >= 5){
              $("#gameplay_text2").html("An encounter won't be necessary.");
              $(".fightbutton").hide();
              $(".nofightbutton").hide();
              usedEvents[3] = 1;

        }



          $(".fightbutton").unbind().click(function(){
            fight_number[2] = fight_number[2] + 1;
          });
          $(".nofightbutton").unbind().click(function(){
            fight_number[2] = fight_number[2] + 5;
        });
      };

      if (count > 1001 && count < 99000 && usedEvents[4] == 0){

          if (fight_number[4] == 0){
              $("#gameplay_text").html("Progress is being made.")
              $("#gameplay_text2").html("'It is time to move on, child' a voice says. 'I will guide you.'");
              $(".fightbutton").html("Accept");
              $(".fightbutton").show();
              $(".nofightbutton").hide();
           };
          if (fight_number[4] == 1){
            $("#gameplay_text2").html("'Look around, my child.'");
            $("#mapbutton").show();
            usedEvents[4] = 1;
          };

            $(".fightbutton").unbind().click(function(){
            fight_number[4] = fight_number[4] + 1;
          });
       
            

          };

      if (count > 1001 && count < 1999999 && usedEvents[4] == 1 && usedEvents[5] == 0 && inArea == 1){

          if (fight_number[5] == 0){
              $("#gameplay_text").html("There are many more souls to gather here.")
              $("#gameplay_text2").html("'This place has many features that are... useful for our cause'");
              $(".fightbutton").hide();
              $(".counter3").show();
              countTick3 = 0;
              $("#disasterinc").show();
              $(".nofightbutton").hide();
              $(".resourcebutttons").show();
              usedEvents[5] = 1;
           };
          if (fight_number[5] == 1){
            $("#gameplay_text2").html("'Look around, my child.'");
            $("#mapbutton").show();

          };

          $(".fightbutton").unbind().click(function(){
            fight_number[5] = fight_number[5] + 1;
          });
          $(".nofightbutton").unbind().click(function(){
            fight_number[5] = fight_number[5] + 5;
          });

      };
      if (count > 99000 && count < 1999999 && usedEvents[6] == 0){

          if (fight_number[6] == 0){
              $("#gameplay_text2").html("A man approaches. He is armed.");
              $(".fightbutton").html("Fight him");
              $(".nofightbutton").html("Flee");
              $(".fightbutton").show();
              $(".nofightbutton").show();
           }
          if (fight_number[6] == 1){
            fight_number[6] = fight_number[6] + 1;
            fightAction = true;
            enemyHealth = 20;
            enemyPower = 80;

          }
          if (fight_number[6] == 2){
             $("#gameplay_text2").html("enemy health: " + enemyPower);
             if (enemyPower <= 0){
              fight_number[6] = fight_number[6]+1;
             }
          }

          if (fight_number[6] == 3){
             $("#gameplay_text2").html("He leaves a little something.");
             $("#gameplay_text").html("You can feel something ominous approaching.");
             $(".fightbutton").hide();
             $(".nofightbutton").hide();
             $("#weapon3").show();
             $("infectedinc2").show();
             usedEvents[6] = 1;
          }
      
          if (fight_number[6] >= 5){
              $("#gameplay_text2").html("An encounter won't be necessary.");
              $(".fightbutton").hide();
              $(".nofightbutton").hide();
              usedEvents[6] = 1;

          }

          $(".fightbutton").unbind().click(function(){
            fight_number[6] = fight_number[6] + 1;
          });
          $(".nofightbutton").unbind().click(function(){
            fight_number[6] = fight_number[6] + 5;
          });
       
            

      };

      if (count > 1999999 && count < 3999999 && usedEvents[7] == 0){

          if (fight_number[7] == 0){
              $("#gameplay_text2").html("A being enters your realm. He seems powerful.");
              $(".fightbutton").html("Fight him");
              $(".nofightbutton").html("Flee");
              $(".fightbutton").show();
              $(".nofightbutton").show();
           }
          if (fight_number[7] == 1){
            fight_number[7] = fight_number[7] + 1;
            fightAction = true;
            enemyHealth = 20;
            enemyPower = 120-enemyMod;

          }
          if (fight_number[7] == 2){
             $("#gameplay_text2").html("enemy health: " + enemyPower);
             if (enemyPower <= 0){
              fight_number[7] = fight_number[7]+1;
             }
          }

          if (fight_number[7] == 3){
             $("#gameplay_text2").html("Another enemy vanquished.");
             $("#gameplay_text").html("Your power grows");
             $("#weapon4").show();
             $("#weapon5").show();
             usedEvents[7] = 1;
          }
      
          if (fight_number[7] >= 5){
              $("#gameplay_text2").html("An encounter won't be necessary.");
              $(".fightbutton").hide();
              $(".nofightbutton").hide();
              usedEvents[7] = 1;

          }

          $(".fightbutton").unbind().click(function(){
            fight_number[7] = fight_number[7] + 1;
          });
          $(".nofightbutton").unbind().click(function(){
            fight_number[7] = fight_number[7] + 5;
          });
       
            

      };

      if (count > 999999999 && count < 2999999999 && usedEvents[8] == 0){

          if (fight_number[8] == 0){
              $("#gameplay_text2").html("Finally, a worthy challenger approaches.");
              $(".fightbutton").html("Fight him");
              $(".nofightbutton").html("Flee");
              $(".fightbutton").show();
              $(".nofightbutton").show();
           }
          if (fight_number[8] == 1){
            fight_number[8] = fight_number[8] + 1;
            fightAction = true;
            enemyHealth = 20;
            enemyPower = 120-enemyMod;

          }
          if (fight_number[8] == 2){
             $("#gameplay_text2").html("enemy health: " + enemyPower);
             if (enemyPower <= 0){
              fight_number[8] = fight_number[8]+1;
             }
          }

          if (fight_number[8] == 3){
             $("#gameplay_text2").html("Bit the dust.");
             $("#gameplay_text").html("You feel your journey... will not last forever");
             $("#weapon6").show();
             $("#weapon7").show();
             usedEvents[8] = 1;
          }
      
          if (fight_number[8] >= 5){
              $("#gameplay_text2").html("An encounter won't be necessary.");
              $(".fightbutton").hide();
              $(".nofightbutton").hide();
              usedEvents[8] = 1;

          }

          $(".fightbutton").unbind().click(function(){
            fight_number[8] = fight_number[8] + 1;
          });
          $(".nofightbutton").unbind().click(function(){
            fight_number[8] = fight_number[8] + 5;
          });
       
            

      };

      if (count > 3000000000 && count < 6999999999 && usedEvents[9] == 0){

          if (fight_number[9] == 0){
              $("#gameplay_text2").html("The floor trembles underfoot as a being comes into view");
              $(".fightbutton").html("Fight them");
              $(".nofightbutton").html("Flee");
              $(".fightbutton").show();
              $(".nofightbutton").show();
           }
          if (fight_number[9] == 1){
            fight_number[9] = fight_number[9] + 1;
            fightAction = true;
            enemyHealth = 90;
            enemyPower = 1200-enemyMod;

          }
          if (fight_number[9] == 2){
             $("#gameplay_text2").html("enemy health: " + enemyPower);
             if (enemyPower <= 0){
              fight_number[9] = fight_number[9]+1;
             }
          }

          if (fight_number[9] == 3){
             $("#gameplay_text2").html("Bit the dust.");
             $("#gameplay_text").html("You feel your journey... will not last forever");
             $("#weapon8").show();
             usedEvents[9] = 1;
          }
      
          if (fight_number[9] >= 5){
              $("#gameplay_text2").html("An encounter won't be necessary.");
              $(".fightbutton").hide();
              $(".nofightbutton").hide();
              usedEvents[9] = 1;

          }

          $(".fightbutton").unbind().click(function(){
            fight_number[9] = fight_number[9] + 1;
          });
          $(".nofightbutton").unbind().click(function(){
            fight_number[9] = fight_number[9] + 5;
          });
       
            

      };
      if (count > 7000000000){
        currMaxImage = 2;
        if (fight_number[10] == 0){
            $("#gameplay_text2").html("You stand at the doorstep of life itself. A piercing silence holds the moment suspended as you contemplate the circumstance.");
            $("#gameplay_text").html("Moving backwards could be the key to going forward.");
            $(".fightbutton").html("Fight it");
            $(".nofightbutton").html("Not interested");
            $(".fightbutton").show();
            $(".nofightbutton").show();
         }
        if (fight_number[10] == 1){
            fight_number[10] = fight_number[10] + 1;
            fightAction = true;
            enemyHealth = 51;
            enemyPower = 20000-enemyMod;

          }
         if (fight_number[10] == 2){
             $("#gameplay_text2").html("enemy health: " + enemyPower);
             if (enemyPower <= 0){
              fight_number[10] = fight_number[10]+1;
             }
          }

          if (fight_number[10] == 3){
             winFunc();
          }
        if (fight_number[10] >= 4){
            $("#gameplay_text2").html("Maybe later");
            $(".fightbutton").hide();
            $(".nofightbutton").hide();
            usedEvents[10] = 1;

        }
      
      

        $(".fightbutton").unbind().click(function(){
          fight_number[10] = fight_number[10] + 1;
        });
        $(".nofightbutton").unbind().click(function(){
          fight_number[10] = fight_number[10] + 5;
        });
      };

        
      if(currentImageNumber == currMaxImage){
        $("#right").hide();
        $("#left").show();
    };
      if(currentImageNumber == 0){
        $("#left").hide();
        $("#right").show();
    };
    if(currentImageNumber != 0 && currentImageNumber != currMaxImage){
      $("#left").show();
      $("#right").show();
    };
     
     if (fightAction){
      enemyPower = enemyPower-damage;
      if (enemyPower <= 0){
        fightAction = false;
      };
      health = health-enemyHealth;
      

     };

     if(health <= 0){
      deathFunc();
      $(".mainhandweapon").hide();
      $(".inventory").hide();
      $(".map").hide();
     }

    
    if (currentWeapon != prevWeapon){
      reverseWeaponEffect(prevWeapon);
      applyWeapon(currentWeapon);
      prevWeapon = currentWeapon;
    }

    if (healthRegen && health < maxHealth){
      health = health+0.5;
    }


    $(".counter").html(Math.floor(count) + " souls collected!");
    

    
    count = count+countTick+(0.05*count2);
    if (count <= 10000000000) {
      setTimeout(countUpFunction, second/2);
    }

  }



var countUpFunction2 = function(){
    $(".counter2").html(Math.floor(count2) + " populations infected");
    count2 = count2+countTick2;


    $(".increasebutton2").unbind().click(function(){
      countTick2 = countTick2+1
      }
      );

    $(".decreasebutton2").unbind().click(function(){
      countTick2 = countTick2-1;
    });

    if (inArea != 1) {
      area(currentImageNumber);
    }



    if (count2 <= 10000000000) {
      setTimeout(countUpFunction2, second/2);
    }
  }


  var countUpFunction3 = function(){
    $(".counter3").html(Math.floor(count3) + " natural disasters");
    count3 = count3+countTick3;


    $(".increasebutton3").unbind().click(function(){
      countTick3 = countTick3+1
      }
      );

    $(".decreasebutton3").unbind().click(function(){
      countTick3 = countTick3-1;
    });


    if (count3 <= 10000000000) {
      setTimeout(countUpFunction3, second/2);
    };
  };



  setTimeout(countUpFunction, count);
  setTimeout(countUpFunction2, count2);
  setTimeout(countUpFunction3, count3);






});
  


