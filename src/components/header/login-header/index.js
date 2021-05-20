import React from 'react'
import './styles.scss'
import { Avatar } from 'antd'
import { HomeOutlined, ArrowRightOutlined, ThunderboltOutlined, CaretDownOutlined, EnvironmentOutlined } from '@ant-design/icons';
class Login extends React.Component {
    render() {
        return (
            <div className="login-header">
                <div className="logon-sidebar">
                    <div className="logo">
                        <h1 className="logo-icon">*</h1>
                        <h1 className="logoText">Spoke</h1>
                    </div>
                    <div className="header-options">
                        <div className="home"><HomeOutlined /></div>
                        <div className="arrow"><ArrowRightOutlined /></div>
                        <div className="Extra"><ThunderboltOutlined /></div>
                        <div className="Text"><h2>Design Team</h2></div>
                        <div className="scroll"><CaretDownOutlined /></div>
                    </div>

                </div>
                <div className="login-indicator">
                    <div><EnvironmentOutlined /></div>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                </div>

            </div>
        )
    }
}

export default Login
