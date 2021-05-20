import React from 'react'
import './styles.scss'
import LoginHeader from './login-header/index'
import Navigation from './navigation/index'
class Header extends React.Component {
    render() {
        return (
            <div className="main-header">
                <LoginHeader></LoginHeader>
                <Navigation></Navigation>

            </div>
        )
    }
}

export default Header
