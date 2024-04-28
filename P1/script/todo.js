function openDay(dayName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active-tab", "");
    }
    document.getElementById(dayName).style.display = "block";
    event.currentTarget.className += " active-tab";
}

function addTask(dayId) {
    var input = document.getElementById(dayId + '-new-task');
    var newTaskText = input.value.trim();
    if(newTaskText !== '') {
      var ul = document.getElementById(dayId + '-tasks');
      var li = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(newTaskText));
      ul.appendChild(li);
      input.value = ''; // Clear the input field
    }
}