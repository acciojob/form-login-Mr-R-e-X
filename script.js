function getFormvalue(event) {
    //Write your code here
event.preventDefault();
let firstName = document.getElementsByName('fname')[0].value;
let lastName = document.getElementsByName('lname')[0].value;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
let fullName = firstName + ' ' + lastName;
window.alert(fullName);
}
