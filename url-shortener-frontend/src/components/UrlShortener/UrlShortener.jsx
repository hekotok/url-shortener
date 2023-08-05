import React, { useState } from 'react'

import { shortenUrl } from 'utils/shortenUrl'

import './styles/main.scss'

const UrlShortener = () => {
    const [ url, setUrl ] = useState('')

    const getShortUrl = () => shortenUrl(url)
        .then(resUrl => {
            let currentLength = -1
            const maxLength = resUrl.length - 1

            setUrl('')

            const intervalId = setInterval(() => {
                if (currentLength >= maxLength)
                    clearInterval(intervalId)
                else {
                    setUrl(tempUrl => `${tempUrl}${resUrl[currentLength]}`)
                    currentLength++
                }
            }, 12)
        }).catch(() => setUrl(''))

    return (
        <main>
            <section className="input-container">
                <input
                    type="url"
                    value={url}
                    onKeyDown={({ key }) => key === 'Enter' && getShortUrl()}
                    onChange={({ target }) => setUrl(target.value)}
                    placeholder="Enter your long url"
                />
                <button
                    className="button"
                    type="button"
                    onClick={getShortUrl}
                >Take a short url</button>
            </section>
        </main>
    )
}

export default UrlShortener