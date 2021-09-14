document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button = document.getElementById("send-data")
    const box = document.getElementById("day-box")
    const inputs = document.querySelectorAll(".billboard-container input")
    const select = document.querySelector(".billboard-container select")


    button.addEventListener("click", function (e) {


      console.log(select.value)
      box.innerHTML = `<div class="day"><p class="data"></p><p class="data"></p><p class="data"></p></div>`

    })
    console.log("web-festivals JS imported successfully!");
  },
  false
);






