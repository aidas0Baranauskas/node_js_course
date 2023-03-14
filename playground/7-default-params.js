const greeter = (name = "anonymous", age = 1) => {
	console.log('Hello ' + name + ' of age ' + age)
}

greeter('Aidas', 5)

greeter()