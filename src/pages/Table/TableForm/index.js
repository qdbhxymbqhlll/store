import React from "react";
import { Row, Col,Form, Input,Radio } from 'antd';
import './index.css';



class TableFrom extends React.Component{

    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return(
            <div className="gutter-example">
                <Row gutter={50}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box"><Form.Item>
                            <span>姓名：</span>
                            <Input placeholder="请填写姓名" />
                        </Form.Item></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box"><Form.Item>
                            <span>性别：</span>
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                        </Form.Item></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box"><Form.Item>
                            <span>年龄：</span>
                            <Input type="number" placeholder="请填写年龄" />
                        </Form.Item></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box"><Form.Item>
                            <span>电话：</span>
                            <Input type="number" placeholder="请输入电话号码" />
                        </Form.Item></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TableFrom;