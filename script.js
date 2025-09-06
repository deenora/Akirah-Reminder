function calculateDays() {
  let dob = document.getElementById("dob").value;
  if (!dob) {
    alert("Please enter your date of birth!");
    return;
  }

  let birthDate = new Date(dob);
  let today = new Date();
  let diffTime = today - birthDate;
  let daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById("result").innerHTML =
    `SubhanAllah! 🌿 You have lived <b>${daysPassed}</b> days so far. 
    Spend the rest in Deen before it's too late.`;

  // Random Islamic reminder
  let verses = [
    `"And the life of this world is nothing but amusement and play. But the Hereafter is better for those who fear Allah." (Qur’an 6:32)`,
    `"So remember Me; I will remember you. And be grateful to Me and do not deny Me." (Qur’an 2:152)`,
    `"Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater." (Qur’an 29:45)`,
    `"The Prophet ﷺ said: Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your preoccupation, and your life before your death." (Hadith)`,
    `"Every soul shall taste death. And only on the Day of Judgment will you be given your full recompense." (Qur’an 3:185)`
  ];

  let randomVerse = verses[Math.floor(Math.random() * verses.length)];
  document.getElementById("verse").innerText = randomVerse;

  // Show popup
  document.getElementById("popup").style.display = "flex";

  // Run the animated counter (avg deaths = 150,000)
  runCounter("deathNumber", 150000, 8000); // 8 seconds smooth count
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Counter animation
function runCounter(id, target, duration) {
  let element = document.getElementById(id);
  let start = 0;
  let intervalTime = 40; // update every 40ms (smoother)
  let increment = target / (duration / intervalTime);

  let interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    element.textContent = Math.floor(start);
  }, intervalTime);
}
// ---- Existing functions above ----

// Open image popup
function openImage(card) {
  let imgSrc = card.querySelector("img").src;
  let verseText = card.querySelector("p").innerText;

  document.getElementById("popupImg").src = imgSrc;
  document.getElementById("popupText").innerText = verseText;
  document.getElementById("imagePopup").style.display = "flex";
}

// Close image popup
function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}
function startShuffle() {
  let cards = document.querySelectorAll(".shuffle-deck .card");

  // Run shuffle animation repeatedly
  let shuffleInterval = setInterval(() => {
    cards.forEach(card => {
      card.classList.add("shuffle");
      setTimeout(() => card.classList.remove("shuffle"), 600);
    });
  }, 700);

  // After 3 seconds, stop shuffling and pick one
  setTimeout(() => {
    clearInterval(shuffleInterval);

    let randomIndex = Math.floor(Math.random() * cards.length);
    let chosenCard = cards[randomIndex];

    // Animate picked card lifting up
    chosenCard.classList.add("picked");

    setTimeout(() => {
      let imgSrc = chosenCard.querySelector("img").src;
      let verseText = chosenCard.getAttribute("data-text");

      document.getElementById("shuffleImg").src = imgSrc;
      document.getElementById("shuffleText").innerText = verseText;

      document.getElementById("shufflePopup").style.display = "flex";

      // Reset picked card after showing popup
      setTimeout(() => chosenCard.classList.remove("picked"), 800);

    }, 1000);
  }, 3000);
}

function closeShuffle() {
  document.getElementById("shufflePopup").style.display = "none";
}
