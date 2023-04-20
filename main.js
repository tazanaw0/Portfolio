
// Select the portfolio button link
const portfolioLink = document.querySelector('a[href="#projects"]');
//Click event listener added to create smooth scroll effect
portfolioLink.addEventListener('click', function(event) {
  event.preventDefault();
  const projectsSection = document.querySelector('#projects');
  const projectsSectionOffset = projectsSection.offsetTop;
  window.scrollTo({
    top: projectsSectionOffset,
    behavior: 'smooth'
  });
});
