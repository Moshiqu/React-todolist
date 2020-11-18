import React, { Fragment } from "react"
import AppForm from "./AppForm"
import AppHeader from "./AppHead"

export default class App extends React.Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        let newData = JSON.parse(localStorage.getItem("local-list"));
        if (newData === null) {
            this.setState({
                data: this.state.data
            })
        } else {
            this.setState({
                data: newData
            })
        }
    }

    setStore = () => {
        localStorage.setItem('local-list', JSON.stringify(this.state.data))
    }

    add_card = (newData) => {
        this.setState({
            data: this.state.data.concat(newData)
        }, this.setStore
        )
    }

    completed = (id) => {
        let newData = this.state.data.map((item, index) => {
            if (item.id === id) {
                item.complete = !item.complete
            }
            return item
        })
        this.setState({
            data: newData
        }, this.setStore)
    }

    remove_card = (id) => {
        let newData = this.state.data.map((item, index) => {
            if (item.id === id) {
                item.deletFlag = !item.deletFlag
            }
            return item
        })
        this.setState({
            data: newData
        }, this.setStore)
    }

    render() {
        return (
            <Fragment>
                <h3 className="title">My To-Do-List</h3>
                <AppHeader add_card={this.add_card} />
                <AppForm data={this.state.data} completed={this.completed} remove_card={this.remove_card} />
            </Fragment>
        )
    }
}