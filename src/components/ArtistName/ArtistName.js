import React, { useState, useCallback } from 'react'
import ActionAreaCard from '../ActionAreaCard/ActionAreaCard'
import Search from '../Search/Search'
import './ArtistName.css'

const ArtistName = () => {
    const [artistSearch, setArtistSearch] = useState()

    const searchArtistHandler = useCallback((item) => {
        setArtistSearch(item)
    }, [])

    return (
        <div className='artist'>
            <Search searchHandler={searchArtistHandler} />
            <div className='artist-card'>
            {
                artistSearch && artistSearch.map((artist, index) => {
                    return (
                        <div key={index} >
                            <ActionAreaCard artistName={artist.name} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ArtistName