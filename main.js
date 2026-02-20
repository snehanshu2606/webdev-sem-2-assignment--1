const titleInput = document.getElementById("eventTitle");
const dateInput = document.getElementById("eventDate");
const descInput = document.getElementById("eventDesc");
const addBtn = document.getElementById("addEventBtn");
const container = document.getElementById("eventContainer");


addBtn.addEventListener("click", function () {

    const title = titleInput.value;
    const date = dateInput.value;
    const desc = descInput.value;

    if (!title.trim()  || !date.trim()  || !desc.trim() ) {
        alert("Field(s) must not be empty, pal!");
        return;
    }

    
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p class="desc">${desc}</p>
        <button class="delete-btn">Delete</button>
    `;

    container.appendChild(card);

     const delBtn = card.querySelector(".delete-btn");
        delBtn.addEventListener("click", function () {
            container.removeChild(card);
    });

    
    titleInput.value = "";
    dateInput.value = "";
    descInput.value = "";
});

