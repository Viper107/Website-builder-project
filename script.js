function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    console.log("initializing script.js");

    // Create the card
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    document.querySelector(".container").append(card);

    // Thumbnail container
    let thumbnailcon = document.createElement("div");
    thumbnailcon.setAttribute("class", "thumbnail");
    card.append(thumbnailcon);
    thumbnailcon.innerHTML = `<img src="${thumbnail}" alt="Thumbnail">`;

    // Time overlay
    let time = document.createElement("div");
    time.setAttribute("class", "time");
    time.innerHTML = duration;
    thumbnailcon.append(time);

    // Text section
    let text = document.createElement("div");
    text.setAttribute("class", "text");
    card.append(text);

    // Title and description
    let titles = document.createElement("div");
    titles.setAttribute("class", "title");
    titles.innerHTML = title;

    let descript = document.createElement("div");
    descript.setAttribute("class", "descript");

    text.append(titles);
    text.append(descript);

    // List details
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.style.listStyle = "none";
    li1.innerHTML = cName;

    let li2 = document.createElement("li");
    li2.innerHTML = viewscal(views);

    let li3 = document.createElement("li");
    li3.innerHTML = monthscal(monthsOld);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    descript.append(ul);
}

function viewscal(views) {
    if (views > 999 && views < 999999) {
        return `${(views / 1000).toFixed(1)}k`;
    } else if (views >= 1000000 && views < 10000000) {
        return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 10000000) {
        return `${(views / 10000000).toFixed(1)}Cr`;
    } else {
        return views;
    }
}

function monthscal(monthsOld) {
    if (monthsOld > 12) {
        let year = Math.floor(monthsOld / 12);
        return `${year} year${year > 1 ? 's' : ''} ago`;
    } else {
        return `${monthsOld} month${monthsOld > 1 ? 's' : ''} ago`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("btn");
    button.addEventListener("click", () => {
        createCard(
            "Introduction to Backend | Sigma Web Dev video #2",
            "CodeWithHarry",
            560000,
            7,
            "31:22",
            "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
        );
    });
});
