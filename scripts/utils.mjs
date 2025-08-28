// export const animateCards = () => {
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target); // Animate only once
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   document.querySelectorAll('.card').forEach(card => observer.observe(card));
// };

// export const enableCardTilt = () => {
//   document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('mousemove', e => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
//       const rotateX = -(y - centerY) / 20;
//       const rotateY = (x - centerX) / 20;

//       card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     });

//     card.addEventListener('mouseleave', () => {
//       card.style.transform = 'rotateX(0deg) rotateY(0deg)';
//     });
//   });
// };

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

// export const enableCardTilt = () => {
//   document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('mousemove', e => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
//       const rotateX = -(y - centerY) / 20;
//       const rotateY = (x - centerX) / 20;

//       // Combine tilt with scroll animation
//       const baseTransform = card.classList.contains('visible') ? 'translateY(0)' : 'translateY(50px)';
//       card.style.transform = `${baseTransform} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     });

//     card.addEventListener('mouseleave', () => {
//       // Reset to scroll animation position only
//       const baseTransform = card.classList.contains('visible') ? 'translateY(0)' : 'translateY(50px)';
//       card.style.transform = baseTransform;
//     });
//   });
// };

// export const enableScreenshotModal = (card) => {
//   const imageEl = card.querySelector('.card-image');
//   const modal = card.querySelector('.modal');
//   const closeBtn = modal.querySelector('.close');

//   if (!imageEl || !modal || !closeBtn) return;

//   imageEl.addEventListener('click', () => {
//     modal.style.display = 'block';
//   });

//   closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// };


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