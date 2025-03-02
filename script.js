// Dictionary data
const dictionary = {
  "aku": "inyong",
  "kamu": "kowe",
  "rumah": "omah",
  "makan": "dhahar",
  "minum": "nginum",
  "hari": "dina",
  "malam": "sawetara",
  "pagi": "esuk",
  "siang": "tengahing dinten",
  "sore": "sonten",
  "terima kasih": "maturnuwun",
  "maaf": "nyuwun pangapunten"
};

// Function to handle search
document.getElementById("searchButton").addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (input.trim() === "") {
    resultDiv.textContent = "Silakan masukkan kata untuk dicari.";
    return;
  }

  const translation = dictionary[input];
  if (translation) {
    resultDiv.innerHTML = `<strong>${input}</strong> dalam Bahasa Jawa Dialek Banyumasan adalah <strong>${translation}</strong>.`;
  } else {
    resultDiv.textContent = `Kata "${input}" tidak ditemukan dalam kamus.`;
  }
});

// Optional: Enable search on pressing Enter key
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});
