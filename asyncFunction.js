const fetchData = async () => {
  try {
    const response = await fetch('https://api.github.com/users/zhuraveln')
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
  }
}

const user = fetchData()
user.then((data) => console.log(data))
