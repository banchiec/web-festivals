

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

let allBillboard = []

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button = document.getElementById("add-date")
    const box = document.getElementById("form")
    const inputs = document.querySelectorAll(".billboard-container input")
    const select = document.querySelector(".billboard-container select")

    const valueSelector = document.querySelectorAll(".bands")
    const festivalContainer = document.querySelector(".festival-container")

    const valuesImputsForm = document.querySelectorAll('#form input').values
    const idDates = document.querySelectorAll('.bandas select').values


    function allFestivals() {
      axios.get('http://localhost:3000/api/festivals')
        .then(response => {
          // console.log(response.data)
        })
    }
    allFestivals()

    button?.addEventListener("click", function (e) {
      e.preventDefault()
      const values = getSelectValues(select)
      axios.post('http://localhost:3000/api/create', { date: inputs[0].value, price: inputs[1].value, band_id: values })
        .then(response => {
          console.log(response.data._id)
          box.innerHTML += `<div class="day card"><div class="card-body">
          <label >${inputs[0].value}</label>
          <input name="billboard" value="${response.data._id}" type="hidden">
          <label class="billboard-container" >${inputs[1].value}</label>
          <p class="billboard-container">${values}</p></div></div>`
        })
    })

    box.addEventListener("submit", function (e) {

      const values = getSelectValues(select)
      allBillboard.push(values)
      console.log(allBillboard)

      const valuesImputsForm = document.querySelectorAll('#form input')
      let valuesInputs = []
      console.log(valuesImputsForm.values)

      valuesImputsForm.forEach(Element => {
        valuesInputs.push(Element.value)
        console.log(Element.value)
      })
    })

    console.log("web-festivals JS imported successfully!");
  },
  false
);


