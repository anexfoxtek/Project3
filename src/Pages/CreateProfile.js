import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateProfile extends Component {
    state = {
        userName: "",
        //password: "",
        firstName: "",
        weight: "",
        height: "",
        age: "",
        diet: "Cut, Bulk, Maintain"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        alert(`Welcome ${this.state.firstName}`);
        this.setState({
            firstName: ""
        });
    };

render() {
    return (
        <div class="container">
            <div class="card-body">
                <form>
                    <div class="from-group">
                        <label for="exampleFormControlInput1">User Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name"></input>
                    </div>
                    <div class="from-group">
                        <label for="exampleFormControlInput1">Age</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Age"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select your diet type: </label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Cut (to lose fat)</option>
                            <option>Maintain (to stay at your current weight)</option>
                            <option>Bulk (to build muscle)</option>
                        </select>
                    </div>
                </form>
            </div>
            <Link to="/">← Back to Log In Page</Link>

        </div>
    )
}

}

export default CreateProfile;