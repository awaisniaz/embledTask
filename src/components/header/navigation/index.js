import React from 'react'
import './styles.scss'
import { Button } from 'antd'
class Navigation extends React.Component {
    render() {
        const action = [{
            title: 'Open',
            class: 'active',
            action: () => {
            }
        },
        {
            title: 'Felllow-ups',
            class: '',
            action: () => {
            }
        },
        {
            title: 'Resolutions',
            class: '',
            action: () => {
            }
        }]
        return (
            <div className="navigation-header">
                {action.map(item => {
                    return <Button className={item.class} key={item.title}>{item.title}</Button>
                })}
            </div>
        )
    }
}

export default Navigation