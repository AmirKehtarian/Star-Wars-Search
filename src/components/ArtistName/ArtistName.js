import React, { useState, useCallback } from 'react'
import ActionAreaCard from '../ActionAreaCard/ActionAreaCard'
import Search from '../Search/Search'
import './ArtistName.css'
import { MagnifyingGlass } from 'react-loader-spinner'


const ArtistName = () => {
    const [artistSearch, setArtistSearch] = useState('')
    const [loading, setLoading] =useState(false)

    const searchArtistHandler = useCallback((item) => {
        setArtistSearch(item)
    }, [])

    const loadingHandler = (item) => {
        setLoading(item)
    }

    return (
        <div className='artist'>
            <Search searchHandler={searchArtistHandler} loadingHandler={loadingHandler}/>
            <div className='artist-card'>
         { loading && loading === true ? (<MagnifyingGlass
  visible={true}
  height="90"
  width="90"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>) : (
                artistSearch && artistSearch.length === 0 ? (<h2 className='item'>No artist with this name found!</h2>) : (artistSearch && artistSearch.map((artist, index) => {
                    return (
                        <div key={index} >
                            <ActionAreaCard artistName={artist.name} />
                        </div>
                    )
                }))
            )}
            </div>
        </div>
    )
}

export default ArtistName
