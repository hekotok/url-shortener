import axios from 'axios'

export const shortenUrl = async longUrl => {
    const url = 'http://localhost:3000/shorten'
    const headers = { 'Content-Type': 'application/json' }

    try {
        const response = await axios.post(url, { longUrl }, { headers })
        console.log(response.data)

        //await axios.get(response.data.url)
        return response.data.shortUrl
    }
    catch (error) {
        console.error('susika', error)
    }
}