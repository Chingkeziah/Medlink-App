document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const monthYear = document.getElementById("monthYear");
  const daysContainer = document.querySelector(".days");

  let currentDate = new Date();

  renderCalendar(currentDate);

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  function renderCalendar(date) {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    monthYear.textContent = `${month} ${year}`;

    const firstDayOfMonth = new Date(year, date.getMonth(), 1);
    const lastDayOfMonth = new Date(year, date.getMonth() + 1, 0);

    daysContainer.innerHTML = "";

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const day = document.createElement("div");
      day.classList.add("day");
      day.textContent = i;

      if (i === 1) {
        day.style.gridColumnStart = firstDayOfMonth.getDay() + 1;
      }

      daysContainer.appendChild(day);
    }
  }
});