import React from "react";
import { Table, Divider, Button } from 'antd';
import './index.css';

class TableRow extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        const { Column } = Table;
        const {title}=this.props;

        return(
            <div className="main">
                <span className="title" >●{title}</span>
                <Table dataSource={this.props.data}>
                    <Column title="过敏原" dataIndex="allergens" key="allergens" />
                    <Column title="风团大小" dataIndex="size" key="size" />
                    <Column title="结果" dataIndex="result" key="result" />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <span>
          <a href="javascript:;">删除</a>
        </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

export default TableRow;