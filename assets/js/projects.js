myProjects = [
  {
    name: "Wanderlust",
    subHeading:
      "Browse your favorite destinations and find your next adventure!",
    description:
      "Users can browse their favorite destinations and check the availabilty, price, and best time to visit. The bookings page gives an overview over selected trips and shows the final price.",
    images: [
      "wanderlust-1.png",
      "wanderlust-2.png",
      "wanderlust-3.png",
      "wanderlust-4.png",
    ],
    imageDescriptions: ["Home", "Destinations", "Details", "Bookings"],
    techStack: "Angular, Bootstrap, HTML, CSS",
    repositoryLink:
      "https://github.com/lukasneur267/FE2605-EXAM-3-LukasNeururer",
  },
  {
    name: "Book Tracker",
    subHeading: "Keep track of what you read and how you liked it",
    description:
      "Users can keep track of what books they read, rate them from 0 to 10 and automatically sort the books from worst to best.",
    images: ["book-tracker-1.png", "book-tracker-2.png"],
    imageDescriptions: ["Home", "Sorting Functionality"],
    techStack: "Bootstrap, HTML, CSS, JavaScript",
    repositoryLink:
      "https://github.com/lukasneur267/FE2605-EXAM-2-LukasNeururer",
  },
  {
    name: "Atelier Gallery",
    subHeading: "Find your favorite art pieces",
    description:
      "Interactive gallery for artists of all different genres, where users can explore unique art pieces and visit a featured exhibition that changes each month.",
    images: ["atelier-1.png", "atelier-2.png"],
    imageDescriptions: ["Home", "Featured Exhibition"],
    techStack: "HTML, CSS, JavaScript",
    repositoryLink:
      "https://github.com/lukasneur267/FE2605-EXAM-1-LukasNeururer",
  },
  {
    name: "VR Hand Rehabilitation Game",
    subHeading: "Virtual piano game for gamified hand rehabilitation",
    description:
      "Virtual-reality piano game where notes spawn randomly on the screen and users have to move the right finger of both hands at the right time to increase a score.",
    images: ["vr-1.png", "vr-2.png"],
    imageDescriptions: ["Piano Game", "User Interface"],
    techStack: "Unity, C#",
    repositoryLink: "https://github.com/lukasneur267/VirtuKeys-main",
  },
];

// Container to hold the project cards
const projectContainer = document.querySelector(".projectsContainer");

myProjects.forEach((project, index) => {
  const projectId = index + 1; // Use index for unique lightbox groups (expand images section)

  // Build hidden extra lightbox links
  let lightboxLinks = "";
  for (let i = 1; i < project.images.length; i++) {
    lightboxLinks += `<a
                          href="assets/images/${project.images[i]}"
                          data-lightbox="project-${projectId}"
                          data-title="${project.name}: ${project.imageDescriptions[i]}"
                        ></a>`;
  }

  // Build the isotope item HTML
  projectContainer.innerHTML += `
    <div class="isotope-item">
      <figure class="snip1321">
        <div class="imgContainer">
          <img
            src="assets/images/${project.images[0]}"
            alt="${project.name}"
          />
          <h5 class="my-3"><strong>${project.name}</strong></h5>
          <p class="text-light">
            ${project.description}
          </p>
        </div>

        <figcaption>
          <div class="lightbox-hidden">
            ${lightboxLinks}
          </div>
          <h4>${project.name}</h4>
          <span>${project.subHeading}</span><br />
          <p>
            <strong>Technology Stack:</strong> ${project.techStack}
          </p>

          <div class="d-flex justify-content-center g-2 align-items-center">
            <span>image gallery</span>
            <a
              class="p-1"
              href="assets/images/${project.images[0]}"
              data-lightbox="project-${projectId}"
              data-title="${project.name}"
            ><i class="fa fa-search"></i></a>
            <a
              class="p-1"
              href="${project.repositoryLink}"
              target="_blank"
            ><i class="fa fa-code"></i></a>
            <span>source code</span>
          </div>
        </figcaption>
      </figure>
    </div>
  `;
});
