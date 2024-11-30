function copyKakaoID() {
    const kakaoID = document.getElementById("kakaoID").textContent;
    const hiddenInput = document.getElementById("hiddenInput");

    // Use Clipboard API if supported
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(kakaoID).then(() => {
        showConfirmation();
      }).catch(() => {
        fallbackCopy(hiddenInput, kakaoID);
      });
    } else {
      // Fallback for unsupported browsers
      fallbackCopy(hiddenInput, kakaoID);
    }
  }

  function fallbackCopy(input, text) {
    input.value = text;        // Set the value of the input to the text
    input.select();            // Select the text
    document.execCommand("copy"); // Copy the text
    showConfirmation();        // Show the confirmation message
  }

  function showConfirmation() {
    const message = document.getElementById("copyMessage");
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000); // Hide after 2 seconds
  }
