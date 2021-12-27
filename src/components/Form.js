import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
         super(props);
         /* TODO - set initial state for link name and URL */

        this.state = { name: ' ', URL: ' '};
        
    }

    handleChange = event => {
        /* TODO - Logic for changing state based on form change */
        if (event.target.id === "name"){
               return  this.setState({name: event.target.value});
            }
        else {
                return this.setState({URL: event.target.value});
        }
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /* TODO - Logic for calling props to handle submission and setting state changes */
        const newLink = {name: this.state.name, URL: this.state.URL};
        this.props.NewSubmit(newLink);

    }

    render() {

        console.log("name", this.state.name);
        console.log("url", this.state.URL);
        return ( < form > { /* TODO - Logic for returning a form element with labels and inputs for link name and URL */ }

            <label for = "name" > Name: </label> 
            <br / >
            <input type = "text"
            id = "name"
            name = "name"
            value = { this.state.name }
            onChange = { this.handleChange }/> 
            <br / >
            <label
            for = "url" > Last URL: </label> 
            <br / >
            <input type = "text"
            id = "url"
            name = "url"
            value = { this.state.URL }
            onChange = { this.handleChange }/> 
            <br / >
            <br / >
            <input type = "submit"
            value = "submit"
            onClick = { this.onFormSubmit }/> 
            </form>
        )
    
    }
}

export default Form;