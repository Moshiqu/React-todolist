import React from "react"
import { Card, Col, Row, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import NoDataView from "./NoDataView";


export default class AppForm extends React.Component {

    render() {
        if (this.props.data.length === 0) {
            return (
                <NoDataView />
            )
        } else {
            return (
                <div className="site-card-wrapper">
                    <Row gutter={25}>
                        {
                            this.props.data.map((item, index) => {
                                if (item.deletFlag) {
                                    return null
                                } else {
                                    return (
                                        <Col span={8} key={index}>
                                            <Card title={item.index + 1} bordered={false} hoverable={true}>
                                                {item.complete ? <p><s>{item.text}</s></p> : <p>{item.text}</p>}
                                                {
                                                    item.complete ? <CheckOutlined /> : <Button type="primary" onClick={() => { this.props.completed(item.id) }}>完成</Button>
                                                }
                                                <div className="btn">
                                                    <Button type="primary" danger onClick={() => { this.props.remove_card(item.id) }}>删除</Button>
                                                </div>
                                            </Card>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                </div>
            )
        }
    }
}

