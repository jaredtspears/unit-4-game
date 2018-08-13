/*
will need these vars:

function for game:

    function(startNow) {
        if (pChristal){
            add
        }
    }

    =================================================================================================================
    the crystal game activity had this fuction:
  for (var i = 0; i < numberOptions.length; i++) {
   
    // For each iteration, we will create an Crystal
    var pCrystal = $("<img>");
    var cCrystal = $("<img>");
    var bCrystal = $("<img>");
    var gCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        pCrystal.addClass("crystal-image");
        cCrystal.addClass("crystal-image");
        bCrystal.addClass("crystal-image");
        gCrystal.addClass("crystal-image");

                // Each color crystal will be given a src link to the crystal image
            pCrystal.attr("src", "https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/images/545000-549999/546183/569cbf57ab567.jpg");
            cCrystal.attr("src", "http://www.roadtripsavings.com/images/blue-gem.jpg");
            bCrystal.attr("src", "https://i.pinimg.com/originals/b5/39/46/b53946d8b6dffbcf80db49a711bdc362.jpg");
            gCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65M5apVjjKNVgmYFO4vkSW3PhY50z0eOPAFeaH8YV9uajF2Kk");

        // Each color crystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        pCrystal.attr("data-crystalvalue", numberOptions[i]);
        cCrystal.attr("data-crystalvalue", numberOptions[i]);
        bCrystal.attr("data-crystalvalue", numberOptions[i]);
        gCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(pCrystal);
    $("#crystals").append(cCrystal); 
    $("#crystals").append(bCrystal);   
    $("#crystals").append(gCrystal);





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

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });

  }
    =================================================================================================================
*/

// array for number options, this will be randomized later so no stone is always the same amount
var numberOptions = [24, 10, 3, 12];

var targetNumber = 53; 
//sum of players choice in an array that could be show instead of in an alert box 
var sumPlayerChoices = [""];

for (var i = 0; i < numberOptions.length; i++) {
   
    // attempting to see
    var Crystal = $("<img>");
    
        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        Crystal.addClass("crystal-image");
       //each crystal has a id for each img
        Crystal.attr("id", [i])
            //     // Each color crystal will be given a src link to the crystal image
           

        // Each color crystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        Crystal.attr("data-crystalvalue", numberOptions[i]);
        
    }
    //individualizing each id and assigning to a specific variable assigned to the their specific color
        var pCrystal = $("#0");
        var cCrystal = $("#1");
        var bCrystal = $("#2");
        var gCrystal = $("#3");
    // trying to have the attribute linked to the specific img
        pCrystal.attr("src", "https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/images/545000-549999/546183/569cbf57ab567.jpg");
        cCrystal.attr("src", "http://www.roadtripsavings.com/images/blue-gem.jpg");
        bCrystal.attr("src", "https://i.pinimg.com/originals/b5/39/46/b53946d8b6dffbcf80db49a711bdc362.jpg");
        gCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65M5apVjjKNVgmYFO4vkSW3PhY50z0eOPAFeaH8YV9uajF2Kk");


    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(".pCrystal").append(pCrystal);
    $(".cCrystal").append(cCrystal); 
    $(".bCrystal").append(bCrystal);   
    $(".gCrystal").append(gCrystal);





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

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });

  
/*
trying to figure out how to display the target number and the current summed number

    $("#target#").html(targetNumber);
    $("#currentSummed#").html(Summed);
 */