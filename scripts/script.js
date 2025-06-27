const infos = [
  "Frontend Developer",
  "Python Developer",
  "Virtual Assistant",
  "Aspiring Software Developer"
];

document.getElementById('scrollBtn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
});


const element = document.querySelector('.intro');
let info = 0;
let char = 0;
let isDeleting = false;

function typingEffect() {
  const currentInfo = infos[info];
  const textDisplayed = currentInfo.slice(0, char);
  element.textContent = textDisplayed;

  if (!isDeleting) {
    if (char < currentInfo.length) {
      char++;
      setTimeout(typingEffect, 150);
    }
    else {
      isDeleting = true;
      setTimeout(typingEffect, 1000);
    }
  }
  else {
    if (char > 0) {
      char--;
      setTimeout(typingEffect, 100);
    }
    else {
      isDeleting = false;
      info = (info + 1) % infos.length
      setTimeout(typingEffect, 500);
    }
  }
}

typingEffect();