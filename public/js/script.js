document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button = document.getElementById("send-data")
    const box = document.getElementById("day-box")
    const inputs = document.querySelectorAll(".billboard-container input")
    const select = document.querySelector(".billboard-container select")
    const festivalContainer = document.querySelector(".festival-container")


    button.addEventListener("click", function (e) {

      let containerDate = document.createElement('div')
      containerDate.classList.add()
      box.innerHTML += `<div class="day"><p class="billboard-container">${inputs[0].value}</p><p class="billboard-container">${inputs[1].value}</p><p class="billboard-container">${[select.value]}</p></div>`
      // festivalContainer.appendChild(box)



    })
    console.log("web-festivals JS imported successfully!");
  },
  false
);






