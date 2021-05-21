import React from 'react'
import './styles.scss'
import { Button, Input, Avatar, Rate } from 'antd'
import ChatIcon from '@material-ui/icons/Chat';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
class MainContainer extends React.Component {
    render() {
        const topicData = [{
            title: 'Initial Design Principal',
            rating: 3.5,
            followUp: 3,
            total: 5,
            comments: 15,
            author: 'Devid Jackson'
        },
        {
            title: 'Invoice Dashboard Wireframe',
            rating: 3.5,
            followUp: 5,
            total: 10,
            comments: 5,
            author: 'Jackson'
        },
        ]
        return (
            <div className="main-container" >
                <div className="content-container">
                    <Button className="text"><ChatIcon /> New Topic</Button>
                    <div className="input-container">
                        <h2>New Topic</h2>
                        <Input placeholder="Topic Name" size="large"></Input>
                        <div className="action-container">
                            <Button className="create">Create</Button>
                            <Button className="cancel">Cancel</Button>
                        </div>
                    </div>
                    <div className="topic-container">
                        {
                            topicData.map(item => {
                                return <div className="topic" key={item.title}>
                                    <div className="rating-container"><h3>{item.title}</h3>
                                        <Rate style={{ color: '#1890ff' }} character={<FiberManualRecordIcon />} count={item.total} value={item.followUp} />
                                    </div>
                                    <div className="Follow-up"><p style={{ fontWeight: 'bold' }}>Fellow-ups: {`${item.followUp} / ${item.total}`}</p></div>
                                    <div className="avatar-container">
                                        <div className="avatar-logo">
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            <p style={{ fontWeight: 'bold' }}>{item.author}</p>
                                        </div>
                                        <div className="comment">
                                            <p style={{ fontWeight: 'bold' }}>{item.comments}</p>
                                            <ChatBubbleOutlineIcon />
                                        </div>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer