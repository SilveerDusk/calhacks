"use strict";
const members = [
    {
        title: "Jason Jelincic",
        date: "10/22/23",
        description: "Second Year Computer Science Student",
        slug: "member1"
    },
    {
        title: "Logan Barker",
        date: "10/23/23",
        description: "Second Year Computer Science Student",
        slug: "member2"
    },
    {
        title: "Alon Evron",
        date: "10/23/23",
        description: "Second Year Computer Science Student",
        slug: "member3"
    }
];
function getMemeber() {
    const memberList = document.getElementById("member-list");
    members.forEach(({ slug, title, date, description }) => {
        const link = document.createElement("a");
        link.href = `teammembers/${slug}.html`;
        link.innerHTML = "Read More";
        const postPreview = document.createElement("div");
        postPreview.classList.add("post");
        postPreview.innerHTML = `
    <div class="top">
    <h2 class="post-title">${title}</h2>
    <h3 class="post-subtitle">${date}</h3>
    </div>
    <p class="post-description">${description}</p>`;
        postPreview.appendChild(link);
        if (memberList) {
            memberList.appendChild(postPreview);
        }
    });
}
getMemeber();
