/*
    ************************
    DONE BY:-SUDHANSHU KUMAR
    ************************
*/

// Variable to control the speed of the visualization
var speed = 1000;

// Event listener for the input element that controls speed
inp_aspeed.addEventListener("input", vis_speed);

// Function to handle changes in visualization speed based on user input
function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch(parseInt(array_speed)) {
        case 1: speed = 1;
                break;
        case 2: speed = 10;
                break;
        case 3: speed = 100;
                break;
        case 4: speed = 1000;
                break;
        case 5: speed = 10000;
                break;
    }
    
    // Calculate delay time based on the speed and size of the array
    delay_time = 10000 / (Math.floor(array_size / 10) * speed); // Decrease numerator to increase speed.
}

// Initial delay time calculation based on the initial speed and array size
var delay_time = 10000 / (Math.floor(array_size / 10) * speed); // Decrease numerator to increase speed.
var c_delay = 0; // This is updated on every div change so that visualization is visible.

// Function to update the properties of a div element (used for visualization)
function div_update(cont, height, color) {
    window.setTimeout(function() {
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}

// Function to enable the buttons after the sorting visualization is complete
function enable_buttons() {
    window.setTimeout(function() {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = []; // Clear any existing classes
            butts_algos[i].classList.add("butt_unselected"); // Add the 'unselected' class

            butts_algos[i].disabled = false; // Enable the algorithm buttons
            inp_as.disabled = false; // Enable array size input
            inp_gen.disabled = false; // Enable array generation button
            inp_aspeed.disabled = false; // Enable speed input
        }
    }, c_delay += delay_time);
}

/*
    ************************
    DONE BY:-SUDHANSHU KUMAR
    ************************
*/
