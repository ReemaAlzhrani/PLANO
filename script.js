// Pomodoro logic
let seconds = 1500;
let timer;

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 1500;
  updateTimer();
}

function updateTimer() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById("timer").textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
updateTimer();

// Task logic
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;
    span.onclick = () => {
      span.classList.toggle("completed");
      updateProgress();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = () => {
      li.remove();
      updateProgress();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateProgress();
  }
}

function updateProgress() {
  const all = document.querySelectorAll("#taskList li span");
  const done = document.querySelectorAll("#taskList li span.completed");
  const percent = all.length === 0 ? 0 : Math.round((done.length / all.length) * 100);

  document.getElementById("progressText").textContent = `${percent}% Completed`;
  document.getElementById("progress-fill").style.width = `${percent}%`;
}


