currentYear = new Date().getFullYear();
currentMonth = new Date().getMonth();

function nextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    document.body.innerHTML = "";
    genCalendar(currentYear, currentMonth);
    addButtons();
    addEventForm();
    iterDates();
}

function previousMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    document.body.innerHTML = "";
    genCalendar(currentYear, currentMonth);
    addButtons();
    addEventForm();
    iterDates();
}

function genCalendar(year, month) {
    var date = new Date();
    var firstDayOfMonth = (new Date(year, month, 1)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var body = document.getElementsByTagName("body")[0];
    var calendar = document.createElement("table");
    var calendarTitle = document.createElement("thead");
    var calendarTitleText = document.createElement("th");
    var calendarBody = document.createElement("tbody");
    
    // Set up calendar title
    calendarTitleText.textContent = months[month];
    calendarTitleText.setAttribute("colspan", 7);

    calendarTitle.appendChild(calendarTitleText);
    calendar.appendChild(calendarTitle);

    var date = 1;
    for (var i = 0; i < 6; i++) {
        var calendarRow = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            var calendarCell = document.createElement("td");
            if (i === 0) {
                var cellText = document.createTextNode(weekDays[j]);
                calendarCell.appendChild(cellText);
                calendarCell.setAttribute("class", "weekday");
            }
            else if (i === 1 && j < firstDayOfMonth) {
                var cellText = document.createTextNode("");
                calendarCell.appendChild(cellText);
            }
            else if (date > daysInMonth) {
                break;
            }
            else {
                var cellText = document.createTextNode(date);
                calendarCell.appendChild(cellText);
                calendarCell.setAttribute("class", "dayDate");
                if (month < 10 && date < 10) {
                    calendarCell.setAttribute("id", year + "-0" + (month+1) + "-0" + date);
                } else if (month < 10 && date > 10) {
                    calendarCell.setAttribute("id", year + "-0" + (month+1) + "-" + date);
                } else {
                    calendarCell.setAttribute("id", year + "-" + (month+1) + date);
                }
                var plusSign = document.createElement("i");
                plusSign.innerHTML = "+";
                plusSign.setAttribute("onclick", "openForm()");
                calendarCell.appendChild(plusSign);
                ++date;
            }
            calendarRow.appendChild(calendarCell);
        }
        calendarBody.appendChild(calendarRow);
    }
    calendar.appendChild(calendarBody);
    body.appendChild(calendar);
}

function addButtons() {
    var body = document.getElementsByTagName("body")[0];

    var previous = document.createElement("button");
    previous.innerHTML = "Previous";
    previous.setAttribute("onclick", "previousMonth();getEventData");
    previous.setAttribute("id", "prevBtn");
    body.appendChild(previous);

    var next = document.createElement("button");
    next.innerHTML = "Next";
    next.setAttribute("onclick", "nextMonth();getEventData");
    next.setAttribute("id", "nextBtn");
    body.appendChild(next);

    var documentation = document.createElement("a");
    var documentationBr = document.createElement("br");
    documentation.setAttribute("href", "documentation.html");
    documentation.innerHTML = "documentation.html";
    document.body.appendChild(documentationBr);
    document.body.appendChild(documentation);
}

function addEventForm() {

    var addEventContainer = document.createElement("div");
    addEventContainer.setAttribute("id", "addEventContainer");
    document.body.appendChild(addEventContainer);
    var divAddEvent = document.createElement("div");
    divAddEvent.setAttribute("id", "addEvent");
    addEventContainer.appendChild(divAddEvent);

    // Form header
    var formHeader = document.createElement("h3");
    formHeader.innerHTML = "Add Event";
    divAddEvent.appendChild(formHeader);

    // Enter date
    var labelDate = document.createElement("label");
    labelDate.setAttribute("for", "date");
    labelDate.innerHTML = "Select Date: ";
    var enterDate = document.createElement("input");
    enterDate.setAttribute("id", "date");
    enterDate.setAttribute("type", "date");
    divAddEvent.appendChild(labelDate);
    divAddEvent.appendChild(enterDate);
    var newlineDate = document.createElement("br");
    divAddEvent.appendChild(newlineDate);

    // Enter event name
    var labelName = document.createElement("label");
    labelName.setAttribute("for", "name");
    labelName.innerHTML = "Event Name: ";
    var enterName = document.createElement("input");
    enterName.setAttribute("id", "name");
    enterName.setAttribute("type", "text");
    divAddEvent.appendChild(labelName);
    divAddEvent.appendChild(enterName);
    var newlineName = document.createElement("br");
    divAddEvent.appendChild(newlineName);

    // Enter start time for event
    var labelStartTime = document.createElement("label");
    labelStartTime.setAttribute("for", "startTime");
    labelStartTime.innerHTML = "Start Time: ";
    var enterStartTime = document.createElement("input");
    enterStartTime.setAttribute("id", "startTime");
    enterStartTime.setAttribute("type", "time");
    divAddEvent.appendChild(labelStartTime);
    divAddEvent.appendChild(enterStartTime);
    var newlineStartTime = document.createElement("br");
    divAddEvent.appendChild(newlineStartTime);

    // Enter end time for event
    var labelEndTime = document.createElement("label");
    labelEndTime.setAttribute("for", "endTime");
    labelEndTime.innerHTML = "End Time: ";
    var enterEndTime = document.createElement("input");
    enterEndTime.setAttribute("id", "endTime");
    enterEndTime.setAttribute("type", "time");
    divAddEvent.appendChild(labelEndTime);
    divAddEvent.appendChild(enterEndTime);
    var newlineEndTime = document.createElement("br");
    divAddEvent.appendChild(newlineEndTime);

    // Enter place for event
    var labelPlace = document.createElement("label");
    labelPlace.setAttribute("for", "place");
    labelPlace.innerHTML = "Location: ";
    var enterPlace = document.createElement("input");
    enterPlace.setAttribute("id", "place");
    enterPlace.setAttribute("type", "text");
    divAddEvent.appendChild(labelPlace);
    divAddEvent.appendChild(enterPlace);
    var newlinePlace = document.createElement("br");
    divAddEvent.appendChild(newlinePlace);

    // Enter notes for event
    var labelNotes = document.createElement("label");
    labelNotes.setAttribute("for", "notes");
    labelNotes.innerHTML = "Notes: ";
    var enterNotes = document.createElement("input");
    enterNotes.setAttribute("id", "notes");
    enterNotes.setAttribute("type", "text");
    divAddEvent.appendChild(labelNotes);
    divAddEvent.appendChild(enterNotes);
    var newlineNotes = document.createElement("br");
    divAddEvent.appendChild(newlineNotes); 

    // Add event button
    var addEventBtn = document.createElement("button");
    addEventBtn.innerHTML = "Add to Calendar";
    addEventBtn.setAttribute("id", "btn");
    addEventBtn.setAttribute("onclick", "getEventData();iterDates();nextMonth();previousMonth()");
    divAddEvent.appendChild(addEventBtn);

    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Close";
    closeBtn.setAttribute("id", "closeBtn");
    closeBtn.setAttribute("onclick", "closeForm()");
    divAddEvent.appendChild(closeBtn);
}

genCalendar(currentYear, currentMonth);
addButtons();
addEventForm();

function iterDates() {
    var allDates = document.getElementsByClassName('dayDate');
    for (var i = 0; i < allDates.length; i++) {
        var comp = allDates[i];
        for (var j = 0; j < localStorage.length; j++) {
            var key = localStorage.key(j);
            var compareDate = localStorage.getItem(key);
            var eventObject = JSON.parse(compareDate);
            var calendarDate = eventObject['date'];
            if (comp.id === calendarDate) {
                var eventDisplay = document.createElement("div");
                eventDisplay.setAttribute("class", "eventDisplay");
                eventDisplay.setAttribute("id", calendarDate);
                eventDisplay.addEventListener('click', function(){
                    document.getElementById("details-" + this.id).style.opacity = "1";
                    document.getElementById("details-" + this.id).style.pointerEvents = "auto";
                })
                eventDisplay.innerHTML = `- ${eventObject['name']}`;
                comp.appendChild(eventDisplay);

                var detailContainer = document.createElement("div");
                detailContainer.setAttribute("class", "detailContainer");
                detailContainer.setAttribute("id", "details-" + eventObject['date']);
                var details = document.createElement("div");
                details.setAttribute("class", "details");

                var eventName = document.createElement("h1");
                eventName.innerHTML = eventObject['name'];

                var eventStartTime = document.createElement("p");
                eventStartTime.innerHTML = "Start Time: " + eventObject['startTime'];

                var eventEndTime = document.createElement("p");
                eventEndTime.innerHTML = "End Time: " + eventObject['endTime'];

                var eventPlace = document.createElement("p");
                eventPlace.innerHTML = "Location: " + eventObject['place'];

                var eventNotes = document.createElement("p");
                eventNotes.innerHTML = "Notes: " + eventObject['notes'];

                var closeDetails = document.createElement("button");
                closeDetails.innerHTML = "Close";
                closeDetails.addEventListener('click', function() {
                    var allDetailContainers = document.getElementsByClassName("detailContainer");
                    for (var j = 0; j < allDetailContainers.length; j++) {
                        allDetailContainers[j].style.opacity = "0";
                        allDetailContainers[j].style.pointerEvents = "none";
                    }
                })

                details.appendChild(eventName);
                details.appendChild(eventStartTime);
                details.appendChild(eventEndTime);
                details.appendChild(eventPlace);
                details.appendChild(eventNotes);
                details.appendChild(closeDetails);
                detailContainer.appendChild(details);
                document.body.appendChild(detailContainer);
            }
        }
    }
}

iterDates();

function openForm() {
    document.getElementById("addEventContainer").style.opacity = "1";
    document.getElementById("addEventContainer").style.pointerEvents = "auto";
}

function closeForm() {
    document.getElementById("addEventContainer").style.opacity = "0";
    document.getElementById("addEventContainer").style.pointerEvents = "none";
}