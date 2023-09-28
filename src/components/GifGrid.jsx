import React, { useState } from 'react'
import PropTypes from 'prop-types'
import GifItem from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
const GifGrid = ({ categories }) => {
    const { images, isLoading } = useFetchGifs(categories)
    return (
        <>
            <h3>{categories}</h3>
            {isLoading ? 'Cargando...' : (
                <div className='card-grid'>
                    {images.map((image) => (
                        < GifItem key={image.id} {...image} />
                    ))}
                </div>
            )}



        </>
    )
}
GifGrid.propTypes = {
    categories: PropTypes.string.isRequired
}

export default GifGrid
