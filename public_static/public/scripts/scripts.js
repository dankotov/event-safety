function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks, newclass;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  if (tabName == "Front-end-content") {
    newclass = "animation start-front";
  } else {
    newclass = "animation start-back";
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById("bar").className = newclass;
  document.getElementById("bar").style.opacity = "1";
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}