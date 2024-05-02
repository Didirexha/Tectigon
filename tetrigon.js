// var views = ['about-us-view', 'contact-us-view', 'register-view']
function homePage(){
    const home = document.getElementById("home-page")
    if (home){
      home.style.display = "block"
    }
    const register = document.getElementById("register-view")
    const login = document.getElementById("login-view")
    if (register) {
      register.style.display = "none";
    }
    if (login) {
      login.style.display = "none";
    }
    const view = document.getElementById("contact-us-view");
    if (view) {
      view.style.display = "none";
    }
    const aboutUsView = document.getElementById("about-us-view");
    if (aboutUsView) {
      aboutUsView.style.display = "none";
    }
    const software = document.getElementById("software");
    if (software) {
      software.style.display = "block";
    }
    const renditja = document.getElementById("renditja");
  if (renditja) {
    renditja.style.display = "block";
  }
    
  
  
  }
  function setAboutView() {
    const aboutUsView = document.getElementById("about-us-view");
    if (aboutUsView) {
      aboutUsView.style.display = "block";
    }
    const contactUsView = document.getElementById("contact-us-view");
    if (contactUsView) {
      contactUsView.style.display = "none";
    }
    const login = document.getElementById("login-view");
    if (login) {
      login.style.display = "none";
    }
    const registerview = document.getElementById("register-view");
    if (registerview) {
      registerview.style.display = "none";
    }
    const software = document.getElementById("software");
    if (software) {
      software.style.display = "none";
    }
  }
  
  function setContactView() {
    const view = document.getElementById("contact-us-view");
    if (view) {
      view.style.display = "block";
    }
    const aboutUsView = document.getElementById("about-us-view");
    if (aboutUsView) {
      aboutUsView.style.display = "none";
    }
    const login = document.getElementById("login-view");
    if (login) {
      login.style.display = "none";
    }
    const registerview = document.getElementById("register-view");
    if (registerview) {
      registerview.style.display = "none";
    }
    const software = document.getElementById("software");
    if (software) {
      software.style.display = "none";
    }
  }
  function registerForm() {
    const registerview = document.getElementById("register-view");
    if (registerview) {
      registerview.style.display = "none";
    }
    const login = document.getElementById("login-view");
    if (login) {
      login.style.display = "block";
    }
    const view = document.getElementById("contact-us-view");
    if (view) {
      view.style.display = "none";
    }
    const aboutUsView = document.getElementById("about-us-view");
    if (aboutUsView) {
      aboutUsView.style.display = "none";
    }
    const software = document.getElementById("software");
  if (software) {
    software.style.display = "none";
  }
  const renditja = document.getElementById("renditja");
  if (renditja) {
    renditja.style.display = "none";
  }
  }
  function createAcc(){
    const register = document.getElementById("register-view")
    const login = document.getElementById("login-view")
    if (register) {
      register.style.display = "block";
    }
    if (login) {
      login.style.display = "none";
    }
    const view = document.getElementById("contact-us-view");
    if (view) {
      view.style.display = "none";
    }
    const aboutUsView = document.getElementById("about-us-view");
    if (aboutUsView) {
      aboutUsView.style.display = "none";
    }
  
  const software = document.getElementById("software");
  if (software) {
    software.style.display = "none";
  }
  }
  function backToSignIn(){
    const register = document.getElementById("register-view")
    const login = document.getElementById("login-view")
    if (register) {
      register.style.display = "none";
    }
    if (login) {
      login.style.display = "block";
    }
    const view = document.getElementById("contact-us-view");
    if (view) {
      view.style.display = "none";
    }
    const aboutUsView = document.getElementById("about-us-view");
    if (aboutUsView) {
      aboutUsView.style.display = "none";
    }
  
  const software = document.getElementById("software");
  if (software) {
    software.style.display = "none";
  }
  }
  