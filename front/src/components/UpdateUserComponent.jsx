import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            adresse: '',
            role: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({
                nom: user.nom,
                prenom: user.prenom,
                adresse : user.adresse,
                role : user.role
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {nom: this.state.nom, prenom: this.state.prenom, adresse: this.state.adresse, role: this.state.role};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changePrenomHandler= (event) => {
        this.setState({prenom: event.target.value});
    }

    changeJobHandler= (event) => {
        this.setState({adresse: event.target.value});
    }

    changeJobHandler= (event) => {
        this.setState({role: event.target.role});
    }

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Nom" name="nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Pr??nom: </label>
                                            <input placeholder="Pr??nom" name="prenom" className="form-control" 
                                                value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adresse: </label>
                                            <input placeholder="Adresse" name="adresse" className="form-control"
                                                value={this.state.adresse} onChange={this.changeAdresseHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="Role" name="role" className="form-control"
                                                   value={this.state.role} onChange={this.changeRoleHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Add</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUserComponent
