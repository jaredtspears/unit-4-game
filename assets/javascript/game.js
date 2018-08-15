//game.js code for Crystal game

// array for number options, this will be randomized later so no stone is always the same amount
var numberOptions = [24, 10, 3, 12];

// appears to be console logging the target number which is good...not on screen yet.
var targetNumber = 53; 

//setting the target number and placing it in class on the screen
$(".targetNumber").before("Try to get to this exact number: " + targetNumber);
console.log(targetNumber);

//not sure if I need this var, but I may when it comes to locating the sum of the clicked images
var playerChoice;

//sum of players choice in an array that could be show instead of in an alert box (have not figured this out yet)
var sumPlayerChoices = [""];

 //calling for game restart with a call to rerun the intGame function to randomize the 
    //crystals again with the numberOptions array. NOT WORKING, in debugger it calls the game without clicking restart.
    $(".restart").append(intGame());

/* like the calculator game I wanted to have this large intGame function be able to
initialize the overall game and allow for a button reset.
didn't initially call it because it appears it is running on ln 21 with the reset button 
*/
function intGame() {
            //designating i to be going through the number options array (NEED TO RANDOMIZE IT!)
        for (var i = 0; i < numberOptions.length; i++) {
   
            // setting Crystal to image element; working 
            var Crystal = $("<img>");
        
                // First each crystal will be given the class ".crystal-image".
                // This will allow the CSS to take effect.
                Crystal.addClass("crystal-image");
                console.log(Crystal);
                
            //each crystal has a id for each img
                Crystal.attr("id", [i])
                
                // Each color crystal will be given a data attribute called data-crystalValue.
                // This data attribute will be set equal to the array value.
                Crystal.attr("data-crystalvalue", numberOptions[i]);
            $("data-crystalvalue").append(Crystal);
    
        }
    
        //individualizing each id and assigning to a specific variable assigned to the their specific color
        var pCrystal = $("#0");
        var cCrystal = $("#1");
        var bCrystal = $("#2");
        var gCrystal = $("#3");

        //console log appears to be showing these ... no not on screen yet
        console.log(pCrystal);
        console.log(cCrystal);
        console.log(bCrystal);
        console.log(gCrystal);

        // trying to have the attribute linked to the specific img
        pCrystal.attr("src", "https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/images/545000-549999/546183/569cbf57ab567.jpg");
        cCrystal.attr("src", "http://www.roadtripsavings.com/images/blue-gem.jpg");
        bCrystal.attr("src", "https://i.pinimg.com/originals/b5/39/46/b53946d8b6dffbcf80db49a711bdc362.jpg");
        gCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65M5apVjjKNVgmYFO4vkSW3PhY50z0eOPAFeaH8YV9uajF2Kk"); 

        // trying to append each crystal to be on the screen NOT WORKING
        //did try to append to a 0 div and it appears it was recognized..not showing image yet...
        $("#0").append(pCrystal);
        $(".cCrystal").append(cCrystal); 
        $(".bCrystal").append(bCrystal);   
        $(".gCrystal").append(gCrystal);

    }       
   
    //see ln 36 for adding of crystal-image
    $(".crystal-image").on("click", function() {

            // Determining the crystal's value requires us to extract the value from the data attribute.
            // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
            // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
            // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            
            counter += crystalValue;

            // for now leaving as alerts, will hopefully change to maybe an appended div with the alert info... 
            alert("New score: " + counter);

            if (counter === targetNumber) {
            alert("You win!");
            }

            else if (counter >= targetNumber) {
            alert("You lose!!");
            }

  });
 