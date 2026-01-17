function scrollToContact(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_ggn18kv",
    "template_nj0vhsx",
    this
  ).then(() => {
      document.getElementById("formMessage").innerText =
        "Message sent successfully. A broker will contact you.";
      this.reset();
  }, (error) => {
      document.getElementById("formMessage").innerText =
        "Message failed. Please try again.";
      console.log(error);
  });
});
