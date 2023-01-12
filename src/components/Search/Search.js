import React, { useState, useEffect, useRef } from 'react'
import './Search.css'

const Search = (props) => {

    const inputRef = useRef(null)

    const { searchHandler } = props
    const [search, setSearch] = useState('')

    useEffect(() => {
        const query = search.length === 0 ? null : search
        const BASE_URL = 'https://swapi.dev/api'

        fetch(`${BASE_URL}/people/?search=${query}`)
            .then(res => res.json())
            .then(data => searchHandler(data.results))

    }, [search, searchHandler]);

    const clickHandler = (e) => {
        e.preventDefault()

        setSearch(inputRef.current.value)
    }

    return (
        <div className='search'>
            <div className='input'>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Search Character...'
                />
            </div>
            <div className='btn'>
                <button onClick={clickHandler} >Search Character</button>
            </div>
        </div>
    )
}

export default Search