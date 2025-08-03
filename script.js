function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    console.log("initializing script.js");
    
    //Creating card class
    let card = document.createElement("div");
    card.setAttribute("class","card");
    document.querySelector(".container").append(card);
    
    //creting thumbnail class
    let thumbnailcon = document.createElement("div");
    thumbnailcon.setAttribute("class","thumbnail");
    document.querySelector(".container").lastElementChild.append(thumbnailcon);
    thumbnailcon.innerHTML =`<img src=${thumbnail} alt ="Thumbnail"></img>`;
    
    //creting time div
    let time = document.createElement("div");
    time.setAttribute("class","time");
    thumbnailcon.append(time);
    time.innerHTML = duration;
    
    let text = document.createElement("div");
    text.setAttribute("class","text");
    document.querySelector(".container").lastElementChild.append(text);

    // creating title div
    let titles = document.createElement("div");
    let descript = document.createElement("div");
    
    titles.setAttribute("class","title");
    descript.setAttribute("class","descript");
   
    text.append(titles);
    text.append(descript);
    

    titles.innerHTML = title;

    //Creating list inside descript
    let ul = document.createElement("ul");
    descript.append(ul);

    let li1 =document.createElement("li");
    li1.setAttribute("style","list-style:none");
    let li2 =document.createElement("li");
    let li3 =document.createElement("li");
    li1.innerHTML = cName;
    li2.innerHTML = viewscal(views);
    li3.innerHTML = monthscal(monthsOld);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
}

function viewscal(views){
    if(views>999 && views<999999){
        views/=1000;
        return `${views}k`;
    }

    else if(views>999999 && views<9999999){
        views/=1000000;
        return `${views}M`;
    }

    else if(views>9999999 && views<999999999){
        views/=1000000;
        return `${views}Cr`;
    }
}

function monthscal(monthsOld){
    if(monthsOld>12){
        let year = monthsOld/12;
        return `${year} year ago`
    }
    else return `${monthsOld} months ago`
}



// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

/*
<div class="card">
            <div class="thumbnail">
                <img src="https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCEa9W2nQ1t70wKcR3UvWLzaPivNw"
                    alt="Thumbnail">
                    
                <div class="time">31:21</div>

            </div>
            <div class="text">
                <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, at.</div>
                <div class="descript">
                    <ul>
                        <li style="list-style: none;">CodeWithHarry</li>
                        <li>730k</li>
                        <li>2 months ago</li>
                    </ul>
                </div>
            </div>
        </div>

*/