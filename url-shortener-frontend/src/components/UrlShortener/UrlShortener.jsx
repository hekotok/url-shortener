import React, { useState } from 'react'

import { shortenUrl } from 'utils/shortenUrl'

import './styles/main.scss'
import './styles/media.scss'

const UrlShortener = () => {
    const [ url, setUrl ] = useState('')

    const getShortUrl = () => shortenUrl(url)
        .then(resUrl => {
            let currentLength = 0
            const maxLength = resUrl.length
            setUrl('')

            let intervalId = setInterval(() => {
                if (currentLength >= maxLength)
                    clearInterval(intervalId)

                else {
                    setUrl(tempUrl => `${tempUrl}${resUrl[currentLength]}`)
                    currentLength++
                }
            }, 500)
        }).catch(() => setUrl(''))

    return (
        <main>
            <section className="input-container">
                <input
                    type="url"
                    value={url}
                    onKeyDown={event => event.key === 'Enter' && getShortUrl()}
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
/*

  }*/