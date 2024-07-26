const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const task3 = document.body;
const task4 = document.querySelectorAll(".item");
const task5 = document.getElementById("task5");
const task6 = document.getElementById("task6");
const task7 = document.getElementById("task7");
const task8 = document.getElementById("task8");
const task9 = document.getElementById("task9");

task1.innerText = "Changed using 'innerText'.";

task2.innerHTML = "<button>Submit</button>";

task3.style.backgroundColor = "#232323";

for (item of task4) {
  item.style.border = "solid";
}

task5.href = "https://www.springboard.com/";

task6.value = "DOM Master";

task7.classList = "new-class";

task8.appendChild(document.createElement("button"));

task9.remove();
