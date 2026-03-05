import { animateCards, setupProjectModal } from './utils.mjs';

export const loadProjects = async () => {
  try {
    const res = await fetch('json/projects.json');
    const projects = await res.json();

    // Show newest projects first
    const sortedProjects = projects.reverse();

    const container = document.querySelector('.cards');
    container.innerHTML = ''; // Clear existing cards

    // Check screen width to apply left/right layout
    const isMediumScreen = window.innerWidth >= 640 && window.innerWidth <= 720;

    sortedProjects.forEach(({ title, description, image, alt, tech, links }, index) => {
      const card = document.createElement('div');

      // Only alternate left/right on medium screens
      if (isMediumScreen) {
        card.className = `card ${index % 2 === 0 ? 'left' : 'right'}`;
      } else {
        card.className = 'card'; // Image on top for other screen sizes
      }

      const techList = tech.map(item => `<li>${item}</li>`).join('');
      const siteLink = links.site ? `<a href="${links.site}" target="_blank">visit site</a>` : '';
      const sourceLink = links.source ? `<a href="${links.source}" target="_blank">source code</a>` : '';

      card.innerHTML = `
        <div class="project-img">
          <img src="${image}" alt="${alt}">
        </div>
        <div class="project-desc">
          <h3>${title}</h3>
          <p>${description}</p>
          <div class="project-apps">
            <ul><strong>Techstack:</strong> ${techList}</ul>
          </div>
          <div class="project-links">
            ${siteLink}
            ${sourceLink}
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    setupProjectModal();
    animateCards();

  } catch (error) {
    console.error('Error loading projects:', error);
  }
};