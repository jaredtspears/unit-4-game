//game.js code for Crystal game
//global var
var targetNumber = 0;

//calling a random number function (REUSABLE)
function randomNum(max){
    return Math.floor(Math.random() * max );
}

// need this document.ready fuction to surround everything
$(document).ready(function(){

    var counter = 0;

    /*calling for game restart with a call to rerun the intGame function to randomize the 
    crystals again with the numberOptions array. NOT WORKING, in debugger it calls the 
    game without clicking restart. */
    $(".restart").on("click", function(){ 
        //this is a must! you have to clear the div out so that when it resets the old target number is erased
        $(".targetNumber").empty(); 
        $(".youLose").empty();
        $(".youWin").empty();
        intGame(); 
    });
    

    /* like the calculator game I wanted to have this large intGame function be able to
    initialize the overall game and allow for a button reset.
    didn't initially call it because it appears it is running on ln 21 with the reset button 
    */
    function intGame() {
        counter = 0;
        //setting to the 
        targetNumber = randomNum(120);
        console.log( "random target num is " + targetNumber);

        $(".targetNumber").append("Try to get to this exact number: " + targetNumber);
        
        $(".currentSummed").html("Where you stand currently: " + counter );
       
        //designating i to be going through the number options array (NEED TO RANDOMIZE IT!)
        for (var i = 0; i < 4; i++) {
                var randomNumber = Math.floor(Math.random( ) * 12 ) +1; 
                console.log(randomNumber);
                // setting Crystal to image element; working 
                var Crystal = $("<img>");
            Crystal.attr("alt", "crystal-image");
                // First each crystal will be given the class ".crystal-image".
                // This will allow the CSS to take effect.
                Crystal.addClass("crystal-image");
            
                    
                //each crystal has a id for each img
                Crystal.attr("id", [i])
        
                // Each color crystal will be given a data attribute called data-crystalValue.
                // This data attribute will be set equal to the array value.
                Crystal.attr("data-crystalvalue", randomNumber);
                //building up string of classes "."" which is i (found in line 27) followed by crystal
                $("."+i+"Crystal").html(Crystal);
                
        }

    //individualizing each id and assigning to a specific variable assigned to the their specific color
    var pCrystal = $("#0");
    var cCrystal = $("#1");
    var pearlCrystal = $("#2");
    var gCrystal = $("#3");

    // trying to have the attribute linked to the specific img
    pCrystal.attr("src", "https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/162939.jpg");
    cCrystal.attr("src", "https://settlersofsamaria.org/wp-content/uploads/2018/06/landscape-river-rock-for-sale-inspirational-landscape-rock-natural-sandstone-appearance-low-profile-boulder-of-landscape-river-rock-for-sale.jpg");
    pearlCrystal.attr("src", "https://cdn3.volusion.com/qz29d.hncd6/v/vspfiles/photos/PRL-206-2.jpg?1487081183");
    gCrystal.attr("src", "https://i.ebayimg.com/images/g/GskAAOSwpkFY5Ul9/s-l300.jpg"); 


    // trying to append each crystal to be on the screen NOT WORKING
    //did try to append to a 0 div and it appears it was recognized..not showing image yet...


    }       
    
        //see ln 36 for adding of crystal-image
        $(document).on("click",".crystal-image", function() {
        
                /* Determining the crystal's value requires us to extract the value from the data attribute.
                Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
                Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
                Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter.*/

                var crystalValue = ($(this).attr("data-crystalvalue"));

                crystalValue = parseInt(crystalValue);
            

                // We then add the crystalValue to the user's "counter" which is a global variable.
                // Every click, from every crystal adds to the global counter.
                
                counter += crystalValue;
                
                        
                    //setting where the current summed ammount from the player interaction will be located
                    //below line NOT APPENDING, perhaps because I can select the <img> yet?
                    $(".currentSummed").html("Where you stand currently: " + counter );


                // integrated this alert into a bootstrap alert box.(reminder ln 7 locates var targetNumber)
                if (counter === targetNumber) {
                 $(".youWin").html("You won!?..That must have been luck - best out of 3! GO FASTER!" );
                }

                // integrated this alert into a bootstrap alert box.
                else if (counter >= targetNumber) {
                $(".youLose").html("You lost, the Crystals are supreme! Try again if you are not jaded by this experience." );
                }

    });

    
    //mindful to be callign this intGame when page is loaded.
    intGame();
    
});