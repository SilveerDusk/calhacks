type TeamMember = {
  title: string;
  linkenIn: string;
  description: string;
  slug: string;
}

const members: TeamMember[] = [
  {
    title: "Jason Jelincic",
    linkenIn: "jasonjelincic/",
    description: "Second Year Computer Science Student",
    slug: "member1"
  },
  {
    title: "Logan Barker",
    linkenIn: "logan-barker-aa1980293/",
    description: "Second Year Computer Science Student",
    slug: "member2"
  },
  {
    title: "Alon Evron",
    linkenIn: "alon-evron/",
    description: "Second Year Computer Science Student",
    slug: "member3"
  }
];

function getMemeber() {
  const memberList = document.getElementById("member-list");

  members.forEach(({slug, title, linkenIn, description}) => {
    const postPreview = document.createElement("div");
    postPreview.classList.add("post");
    postPreview.innerHTML = `
    <div class="top">
    <h2 class="post-title">${title}</h2>
    <h3 class="post-subtitle"><a href="https://www.linkedin.com/in/${linkenIn}">LinkedIn Profile</a></h3>
    </div>
    <p class="post-description">${description}</p>`;
    
    if(memberList){
      memberList.appendChild(postPreview)
    }
  });
}

getMemeber();