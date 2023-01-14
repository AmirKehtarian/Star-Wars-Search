import React, { useState, useEffect, useRef } from 'react'
import './Search.css'

const Search = (props) => {

    const inputRef = useRef(null)

    const { searchHandler, loadingHandler } = props
    const [search, setSearch] = useState('')

    useEffect(() => {
        const query = search.length === 0 ? null : search
        const BASE_URL = 'https://swapi.dev/api'

        query && fetch(`${BASE_URL}/people/?search=${query}`)
            .then(res => res.json())
            .then(data => {
                loadingHandler(false)
                searchHandler(data.results)
            })

    }, [search]);

    const clickHandler = (e) => {
        e.preventDefault()

        loadingHandler(true)
        setSearch(inputRef.current.value)
    }

    const enterHandler = (e) => {
        if (e.key === 'Enter') {
            clickHandler(e)
        }
    }

    return (
        <div className='search'>
            <div className='input'>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Search Character...'
                    onKeyUp={enterHandler}
                />
            </div>
            <div className='btn'>
                <button onClick={clickHandler}  >Search Character</button>
            </div>
        </div>
    )
}

export default Search