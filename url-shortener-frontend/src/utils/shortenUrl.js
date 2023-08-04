import axios from 'axios'

export const shortenUrl = async longUrl => {
    const url = 'http://localhost:3000/shorten'
    const headers = { 'Content-Type': 'application/json' }

    try {
        const response = await axios.post(url, { longUrl }, { headers })

        return response.data.shortUrl
    }
    catch (err) {
        console.error(err)
    }
}