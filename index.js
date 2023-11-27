const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];

  function randomFreelancer() {
    const nameNum = Math.floor(Math.random()*names.length)
    const occupationNum = Math.floor(Math.random()*occupations.length)
    const price = Math.round(Math.random()*10)*10
    const freelancer = {
        name: names[nameNum],
        job: occupations[occupationNum],
        cost: price
    }
    return freelancer
  }
  
  const randomFreelancerOne = randomFreelancer()
  const randomFreelancerTwo = randomFreelancer()
  const arrayOfFreelancers = [randomFreelancerOne, randomFreelancerTwo]
  const container = document.querySelector(".container")
  const span = document.querySelector("span")
  const arrayOfPrices = []

  function render() {
    const html = arrayOfFreelancers.map((freelancer) => {
        arrayOfPrices.push(freelancer.cost)
        return `<div>${freelancer.name} ${freelancer.job} $${freelancer.cost}`        
    })
    const totalCost = arrayOfPrices.reduce((acc, cost) => {
         return acc = acc + cost
    }, 0)
    //console.log(arrayOfPrices)
    const aveCost = Math.round(totalCost/arrayOfPrices.length)
    container.innerHTML = html.join("")
    span.textContent = `$${aveCost}`
    //console.log(container)
  }

  const interval = setInterval(() => {
    const obj = randomFreelancer()
    arrayOfFreelancers.push(obj)
    render()
    if(arrayOfFreelancers.length === 20) {
        clearInterval(interval)
    }
  },5000)

  render()
  