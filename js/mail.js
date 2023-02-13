const firebaseConfig = {
  apiKey: "AIzaSyD-vq-uEc3QKadpVe-2q5e1OFztG5mXn1w",
  authDomain: "contact-form-37ca7.firebaseapp.com",
  databaseURL: "https://contact-form-37ca7-default-rtdb.firebaseio.com",
  projectId: "contact-form-37ca7",
  storageBucket: "contact-form-37ca7.appspot.com",
  messagingSenderId: "324626561227",
  appId: "1:324626561227:web:6f7bf90e1d9370b569c34e"
};


//   initialize firebase
firebase.initializeApp(firebaseConfig);

//   reference database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var emailid = getElementVal('emailid');
  var msgContent = getElementVal('txtarea');

  saveMessages(name, emailid, msgContent);



  // enable alert
  document.querySelector('.alert').style.display = "block";

  // remove the alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = "none";

  }, 3000);

  // reset the form
  document.getElementById('contactForm').reset();

}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};