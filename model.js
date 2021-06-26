const getEventData = (ev) => {
    let event = {
        date: document.getElementById("date").value, 
        name: document.getElementById("name").value,
        startTime: document.getElementById("startTime").value,
        endTime: document.getElementById("endTime").value,
        place: document.getElementById("place").value,
        notes: document.getElementById("notes").value
    }

    document.getElementById("date").value = "";
    document.getElementById("name").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("place").value = "";
    document.getElementById("notes").value = "";

    localStorage.setItem(event['name'], JSON.stringify(event));
}

