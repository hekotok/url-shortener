import React, { useState } from 'react'

import './UrlShortener.css'
import { shortenUrl } from '../../utils/shortenUrl'

const UrlShortener = () => {
    const [ url, setUrl ] = useState('')

    const getShortUrl = async () => setUrl(await shortenUrl(url))

    return (
        <div>
            <input type="url" value={url} onChange={({ target }) => setUrl(target.value)} placeholder="Enter your long url"/>
            <button onClick={getShortUrl}>Take short url</button>
        </div>
    )
}

export default UrlShortener