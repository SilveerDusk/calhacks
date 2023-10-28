"use strict";
const members = [
    {
        title: "Jason Jelincic",
        linkenIn: "https://www.linkedin.com/in/jasonjelincic/",
        description: "Second Year Computer Science Student",
        slug: "member1"
    },
    {
        title: "Logan Barker",
        linkenIn: "https://www.linkedin.com/in/logan-barker-aa1980293/",
        description: "Second Year Computer Science Student",
        slug: "member2"
    },
    {
        title: "Alon Evron",
        linkenIn: "https://www.linkedin.com/in/alon-evron/",
        description: "Second Year Computer Science Student",
        slug: "member3"
    }
];
function getMemeber() {
    const memberList = document.getElementById("member-list");
    members.forEach(({ slug, title, linkenIn, description }) => {
        const link = document.createElement("a");
        link.href = `teammembers/${slug}.html`;
        link.innerHTML = "Read More";
        const postPreview = document.createElement("div");
        postPreview.classList.add("post");
        postPreview.innerHTML = `
    <div class="top">
    <h2 class="post-title">${title}</h2>
    <h3 class="post-subtitle"><a href={linkenIn}>LinkedIn Profile</a></h3>
    </div>
    <p class="post-description">${description}</p>`;
        postPreview.appendChild(link);
        if (memberList) {
            memberList.appendChild(postPreview);
        }
    });
}
getMemeber();
