function copyKakaoID() {
    // Get the Kakao ID
    const kakaoID = document.getElementById("kakaoID").textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(kakaoID).then(() => {
    // Show a confirmation message
    const message = document.getElementById("copyMessage");
    message.style.display = "block";
    setTimeout(() => {
        message.style.display = "none";
    }, 2000); // Hide after 2 seconds
    });
}
