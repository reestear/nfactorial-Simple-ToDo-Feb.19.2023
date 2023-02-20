import React from 'react'
import './styles.css'

export default function FeatureButton({title, filterUpdate}) {
    return (
        <button className='btn' onClick={filterUpdate}>{title}</button>
    )
}
