export const animateCards = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card').forEach(card => observer.observe(card));

  // Observe About section elements
  const aboutElements = document.querySelectorAll('#about h1, #about .img img, #about p');
  aboutElements.forEach(el => observer.observe(el));

};

export const fetchJSON = async (path) => {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};


export const setupProjectModal = () => {
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = modal.querySelector('.close-btn');

  // Attach click listeners to project images
  document.querySelectorAll('.project-img img').forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.showModal();
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.close();
  });


  // Optional: close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
};