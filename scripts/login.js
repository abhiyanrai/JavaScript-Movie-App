var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
  console.log(regdUsers);


  document.querySelector("#loginform").addEventListener("submit", loginSubmit);

  var form = document.querySelector("#loginform");

  //console.log(form.user.value);
  // form.id.value
  function loginSubmit(event) {
    event.preventDefault();

    var email = loginform.email.value;
    var password = loginform.password.value;
    console.log(email, password);

    var flag= false;
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].email== email && regdUsers[i].password == password) {
        flag=true;
      } else {
        flag=false;
      }
    }
    if(flag==true){
      console.log("Login Sucess");
      alert("Login Sucessfully");
      window.location.href="index.html";
    }
    else{
      console.log("Invalid Login");
      alert("Invalid Login Id & Password");
    }

  }
