// let map
// let contentAllFestival = document.querySelectorAll('container-festivals td')

// contentAllFestival.forEach(element => {
//     element.addEventListener('click', () => {
//         alert(contentAllFestival)

//         console.log(element)
//     })
// })

// console.log(contentAllFestival)
// const printMap = () => {
//     map = new google.maps.Map(
//         document.querySelector('#myMap'), { zoom: 11, center: directions.ironhackBCN.coords }
//     )
// }

// const getCoords = () => {
//     navigator.geolocation.getCurrentPosition(
//         position => centerMap(position.coords),
//         error => console.log('ERROR', error)
//     )
// }

// const centerMap = ({ latitude, longitude }) => {
//     const position = { lat: latitude, lng: longitude }
//     map.setCenter(position)

//     new google.maps.Marker({ position, map })
// }

// initMap = () => {
//     printMap()
//     getCoords()
// }




function printPlaces(places, map) {

    // console.log(places)

    places.forEach(element => {

        // console.log(element.location.coordinates[0])
        let position = {
            lat: element.location.coordinates[0],
            lng: element.location.coordinates[1]
        }

        new google.maps.Marker({ map, position, title: element.name })
    });
}
function getPlace(map) {
    axios
        .get('/api/festivals')
        .then((response) => {
            // console.log(response.data)
            printPlaces(response.data, map)
        })
        .catch(error => console.error(error))
}

function initMap() {

    const map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 7,
            center: directions.ironhackMAD.coords,
            styles: mapStyles.retro
        }
    )
    getPlace(map)


}