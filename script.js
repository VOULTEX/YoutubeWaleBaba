// Change the number (country code + number, no + or spaces) and message here
const WHATSAPP_NUMBER = "917878217955";
const MESSAGE = "Hello YouTube Wale Baba, I am interested in YouTube channel monetization. Please share the details.";

document.getElementById("wa").href =
  "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(MESSAGE);
