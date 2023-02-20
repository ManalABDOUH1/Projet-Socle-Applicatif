import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> <u>User details </u></h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Id  =>  </label>
                            <div> { this.state.user.id }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Nom  => </label>
                            <div> { this.state.user.nom }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Prenom  => </label>
                            <div> { this.state.user.prenom }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Adresse  => </label>
                            <div> { this.state.user.adresse }</div>
                        </div>
                        <br></br>

                        <div className = "row">
                            <label> Role  => </label>
                            <div> { this.state.user.role }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
