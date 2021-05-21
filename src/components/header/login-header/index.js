import React from 'react'
import './styles.scss'
import { Avatar } from 'antd'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { HomeOutlined, ArrowRightOutlined, ThunderboltOutlined } from '@ant-design/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
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
                        <div className="scroll"><UnfoldMoreIcon /></div>
                    </div>

                </div>
                <div className="login-indicator">
                    <div style={{ marginTop: '5px', cursor: 'pointer' }}><NotificationsNoneIcon /></div>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                </div>

            </div>
        )
    }
}

export default Login
