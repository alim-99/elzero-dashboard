// Delete 
let taskRow = document.querySelectorAll(".task-row");

taskRow.forEach(taskRow => {
  let delButton = taskRow.querySelector(".delete");
  delButton.addEventListener("click", () => {
      taskRow.classList.toggle("done");
  });
});

// Progress 
let section = document.querySelector(".targets");
let spans = document.querySelectorAll(".details .progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100) {
      spans.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    };
};

// change attr
let email = document.querySelector(".email");
let change = document.querySelector(".change");


change.addEventListener("click", () => {
  if (email.hasAttribute("disabled")) {
    email.removeAttribute("disabled");
  } else {
    email.setAttribute("disabled", "true");
  }
});
