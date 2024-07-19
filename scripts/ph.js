// language menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const languageMenu = document.querySelector('.languagemenu');
  
  menuToggle.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent click from propagating to the document
      languageMenu.classList.toggle('open');
  });

  document.addEventListener('click', function(event) {
      if (!languageMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          languageMenu.classList.remove('open');
      }
  });
});


  // TABS
  
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  //VIDEO COVER

  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName !== 'Cover') {
        document.getElementById('Cover').style.display = 'none';
    } else {
        document.getElementById('Cover').style.display = 'block';
    }
}

// Set the default tab to open
document.addEventListener("DOMContentLoaded", function() {
    // Initially show the cover video
    document.getElementById('Cover').style.display = 'block';
    document.querySelector(".tablinks").click();
});

