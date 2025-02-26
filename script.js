// Function to generate a random password
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Function to copy password to clipboard
function copyToClipboard() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  showNotification("Password copied to clipboard! 📋");
}

// Function to show notifications
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Event listeners
document.getElementById("generate-btn").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  if (length < 4 || length > 32) {
    showNotification("Password length must be between 4 and 32.");
    return;
  }
  const password = generatePassword(length);
  document.getElementById("password").value = password;
  showNotification(`You requested a password of ${length} characters.`);
});

document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
