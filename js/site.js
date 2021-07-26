// I think this solves the problem
// Kind of ugly right now, but I'll have to get it refined later 


// take in the user input from the page
function get_user_input() {

  document.getElementById("alert").classList.add("invisible");
 
  //user input goes here
  let my_string = document.getElementById("user_text").value;
  //alert("Word inputted by the user: "+my_string); 

  return my_string
}

// create the reversed string from user input 
function reverse() {
  
  // let's try an array
  let reverse = [];

  my_string = get_user_input();
  let my_len = my_string.length;
  let x = my_len-1;
  //for loop to iterate through user input and place in array
  for(i=x; i>-1; i--) {
    //add letters from user string to array
    reverse += my_string[i];

  }

  return reverse
}

// display the reverse string on the HTML page 
function display_reverse() {
  answer = reverse();

  my_result = `<h4>Your reversed string is: ${answer}</h4>`;
  //You nailed it! message 
  document.getElementById("msg").innerHTML = my_result;
  document.getElementById("alert").classList.remove("invisible");

}
