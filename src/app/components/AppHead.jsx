import { Button, Input } from "antd";
import React from "react";
import uuid from "react-uuid";

export default class AppHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newData: ""
        }
        this.textInput = React.createRef();
    }

    onChangeData = (e) => {

        let id = uuid();
        this.setState({
            newData: {
                id,
                text: e.target.value,
                complete: false,
                deletFlag: false
            }
        })

    }
    clean = () => {
        this.textInput.current.state.value = ''
    }

    onAdd_card = () => {
        if (!this.state.newData.text) {
            alert("输入框不能为空~")
            return
        }
        if (!this.state.newData.text.trim()) {
            this.clean();
            alert("不要只输入空格~")
            return
        }
        this.props.add_card(this.state.newData)
        this.clean();
        this.setState({
            newData: ""
        })
    }


    render() {
        return (
            <div className="input_add_box">
                <Input onChange={this.onChangeData} placeholder="To Do" ref={this.textInput} className="input-box" />
                <Button onClick={this.onAdd_card}>添加</Button>
            </div>
        )
    }
}