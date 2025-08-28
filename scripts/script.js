import { loadProjects } from "./loadProject.mjs";
import { fetchJSON, setupProjectModal } from "./utils.mjs";


loadProjects();

document.getElementById('scrollBtn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

const element = document.querySelector('.intro');
let infoIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect(infos) {
  const currentInfo = infos[infoIndex];
  const textDisplayed = currentInfo.slice(0, charIndex);
  element.textContent = textDisplayed;

  if (!isDeleting) {
    if (charIndex < currentInfo.length) {
      charIndex++;
      setTimeout(() => typingEffect(infos), 100);
    } else {
      isDeleting = true;
      setTimeout(() => typingEffect(infos), 2000);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(() => typingEffect(infos), 100);
    } else {
      isDeleting = false;
      infoIndex = (infoIndex + 1) % infos.length;
      setTimeout(() => typingEffect(infos), 1000);
    }
  }
}

// Load infos from JSON and start typing effect
fetchJSON('./json/infos.json').then((infos) => {
  if (infos.length > 0) {
    typingEffect(infos); // ✅ Pass infos into the function
  }
});