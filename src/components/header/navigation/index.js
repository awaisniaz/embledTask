import React from 'react'
import './styles.scss'
import { Tabs } from 'antd'
class Navigation extends React.Component {
    render() {
        const { TabPane } = Tabs;
        return (
            <div className="navigation-header">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Open" key="1">
                        Content of Tab Pane 1
    </TabPane>
                    <TabPane tab="Fellow-up" key="2">
                        Content of Tab Pane 2
    </TabPane>
                    <TabPane tab="Resolution" key="3">
                        Content of Tab Pane 3
    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Navigation