// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if
});
});

// Form validation
$("form").submit(function(event){
var name = $("#name").val();
var email = $("#email").val();
var phone = $("#phone").val();
var veteranStatus = $("#veteran-status").val();

if (name == "" || email == "" || phone == "" || veteranStatus == "") {
alert("Please fill out all fields before submitting the form.");
event.pre
$(document).ready(function(){
// code to hide and show different sections on navigation click
$("nav ul li a").click(function(){
var sectionId = $(this).attr("href");
$("main > section").hide();
$(sectionId).show();
});

// code to toggle background color of selected navigation link
$("nav ul li a").click(function(){
$("nav ul li a").removeClass("active");
$(this).addClass("active");
});

// code to show registration form on page load
$("#register").show();
});

//code to validate the registration form
$("form").submit(function(event){
var name = $("#name").val();
var email = $("#email").val();
var phone = $("#phone").val();
var veteranStatus = $("#veteran-status").val();

if(name == "" || email == "" || phone == "" || veteranStatus == ""){
alert("Please fill out all fields before submitting.");
event.preventDefault();
}
});

// code to show a success message after form submission
$("form").submit(function(){
alert("Thank you for registering! A confirmation email will be sent to the email address provided.");
});

// code to validate the phone number field
$("#phone").on("input", function(){
var phoneNumber = $(this).val();
var phoneNumberRegEx = /^(?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(!phoneNumberRegEx.test(phoneNumber)){
alert("Please enter a valid phone number.");
}
});

// code to show a tooltip on hover of the veteran status field
$("#veteran-status").hover(function(){
$(this).attr("title", "Please select 'Yes' if you are a veteran, and 'No' if you are not.");
});

// code to change background color on hover of the submit button
$("form input[type='submit']").hover(function(){
$(this).css("background-color", "#3498db");
}, function(){
$(this).css("background-color", "#2980b9");
});

// code to show a confirmation dialog before form submission
$("form").submit(function(event){
var confirmSubmission = confirm("Are you sure you want to submit the form?");
if(!confirmSubmission){
event.preventDefault();
}
});

// code to show a message if the form is successfully submitted
$("form").submit(function(){
alert("Form submitted successfully!");
});



