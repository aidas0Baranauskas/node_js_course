console.log('Client-side js is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const url = 'http://localhost:3000/weather?address='

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const location = search.value

	fetch(url + location).then((response) => {
			response.json().then((data) => {
				if (data.error) {
					console.log(data.error)
				} else {
					console.log(data.location)
					console.log(data.forecast)
					
				}
			})
	})
})


// weatherForm.addEventListener('submit', (e) => {
// 	console.log(1)
// 	e.preventDefault()

// 	const location = search.value

// 	fetch(url + location).then((response) => {
// 			response.json().then((data) => {
// 				if (data.error) {
// 					console.log(data.error)
// 				} else {
// 					console.log(data.location)
// 					console.log(data.forecast)
				
// 				}
// 			}).catch(error => {
//         console.log(`Error t2 ${error}`)
//       })
// 	}).catch(error => {
//     console.log(`Error t1 ${error}`)
//   })
// })




