import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h2 className="text-center">Tableau de gestion des utilisateurs</h2>
                 <br></br>

                <hr></hr>

                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr className="text-center">
                                    <th> ID</th>
                                    <th> Nom</th>
                                    <th> Prenom</th>
                                    <th> Adresse</th>
                                    <th> Role</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> { user.id} </td>   
                                             <td> { user.nom} </td>   
                                             <td> {user.prenom}</td>
                                             <td> {user.adresse}</td>
                                             <td> {user.role}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Edit </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-success">Show</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Remove</button>

                                             </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                <br></br>
                <div className = "row">
                    <button className="btn btn-success" onClick={this.addUser}> Add User </button>
                </div>

            </div>
        )
    }
}

export default ListUserComponent
