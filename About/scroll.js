document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".text-container section");
    const title = document.getElementById("mainTitle");
    const paragraph = document.getElementById("mainParagraph");
  
    // Hide all sections except the first one initially
    sections.forEach((section, index) => {
      if (index !== 0) {
        section.style.display = "none";
      }
    });
  
    window.addEventListener("scroll", function () {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
  
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
          // Set the title and paragraph content of the current center section
          title.innerText = section.querySelector("h2").innerText;
          paragraph.innerText = section.querySelector("p").innerText;
  
          // Show the current section and hide the others
          sections.forEach((s, i) => {
            s.style.display = i === index ? "flex" : "none";
          });
        }
      });
    });
  });
  
  