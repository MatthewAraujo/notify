const url = 'http://localhost:8080/api/v1'

export const handleLogin = async () => {
  const res = await fetch(`${url}/auth/{provider}`)
  const data = await res.json()
  console.log(data)
}