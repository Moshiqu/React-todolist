//@flow

import React from "react"
import { Result } from "antd";
import Image from "../../image/todolist.jpg"

export default class NoDataView extends React.Component {
    render() {
        return (
            <div >
                <Result
                    status="success"
                    title="开始你的第一个小目标!"
                />
                <div className="no-data-img">
                    <img src={Image} alt="" />
                </div>
            </div>
        )
    }
}