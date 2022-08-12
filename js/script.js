'use strict'; // added in ES5

// # Responsive Navbar
const toggleBtn = document.querySelector('.navbar_toggleBnt');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// # Validation - checkAll
function checkAll() {
    if (!checkName1(form.fname.value)) {
      return false;
    }
    if (!checkName2(form.lname.value)) {
      return false;
    }
    if (!checkMail(form.mail.value)) {
      return false;
    }
    let conf = confirm("Are you ready to send?");
    if(conf == false){
      return false
    }
    return true;
  }

// input check  >> resolved with 'required' in html 
// 2. >> if it is empty, js alert also pop up with a message like "Sorry, this is invalid ---."

// 1. first name validation
function checkName1(fname) {    
    // input check  >> resolved with 'required' in html 

    //valid check    
    let nameRegExp1 = /^[a-zA-z ]{2,20}$/; // allow space.
    if (!nameRegExp1.test(fname)) {
        alert("Sorry, this is invalid name.(first)");
        form.fname.value = ""; // clear first name input section
        form.fname.focus();
        return false;
    }
    return true; // check confirmed
  }  

// 2. last name validation
function checkName2(lname) {
    // input check  >> resolved with 'required' in html 

    // name valid check    
    let nameRegExp2 = /^[a-zA-z ]{2,20}$/; // allow space.
    if (!nameRegExp2.test(lname)) {
        alert("Sorry, this is invalid name.(last)");
        form.lname.value = ""; // clear last name input section
        form.lname.focus();
        return false;
    }
    return true; // check confirmed
  }    

// 3. email validation
function checkMail(mail) {
    // input check  >> resolved with 'required' in html 
    // email address valid check
    let emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(mail)) {
        alert("Your email is invalid! \nEx) abcde123@google.com");
        form.mail.value = ""; // clear email input section
        form.mail.focus();
        return false;
    }
    return true; // check confirmed
  }  

//# event.html 
const coverImage = document.querySelector('#circle'); /*mouse over function*/
coverImage.onmouseover = function(){
  circle.style.animationPlayState = "paused";
  }

coverImage.onmouseout = function(){ /*mouse out function*/
  circle.style.animationPlayState = "running";
}
