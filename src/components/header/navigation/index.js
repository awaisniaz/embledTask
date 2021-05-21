import React, { useState } from 'react'
import './styles.scss'
const Navigation = () => {
    const [name, setName] = useState('open')
    const action = [{
        title: 'Open',
        name: 'open',
        action: () => {
        },
        id: 1
    },
    {
        title: 'Felllow-ups',
        name: 'fellowup',
        action: () => {
        },
        id: 2
    },
    {
        title: 'Resolutions',
        name: 'resolutions',
        action: () => {
        },
        id: 3
    }]
    return (
        <div className="navigation-header">
            {action.map(item => {
                return <button className={`ant-btn ${name == item.name ? 'active' : ''}`} key={item.title} name={item.name} onClick={(e) => {
                    setName(e.target.name)
                }}>{item.title}</button>
            })}
        </div>
    )
}


export default Navigation