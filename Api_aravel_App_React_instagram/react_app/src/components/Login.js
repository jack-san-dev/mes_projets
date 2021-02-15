import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirect: false,
            errors: []
        }
    }

    componentDidMount() {
        if(localStorage.getItem('token')) {
            this.setState({ redirect: true })
        }
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value}, () => {
            console.log(this.state)
        })
    }
    handlePasswordChange = event => {
        this.setState({password: event.target.value}, () => {
            console.log(this.state)
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        console.log('connexion')

        let bodyFormData = new FormData()
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)

        axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({ redirect: true })
            })
            .catch(error => {
                if(error.response.status === 401) {
                    this.setState({errors : error.response.data.errors}, () => {
                        console.log(this.state)
                    })
                }
            })
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to='/'/>)
        }
        return (
            <>
                <Navbar />
                <div class="container w-50">
                    <h2 class="text-center my-5">Connexion</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Adresse email</label>
                            <input onChange={this.handleEmailChange} type="email" class={`form-control ${this.state.errors && this.state.errors.email ? "is-invalid" : '' }`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            { this.state.errors && this.state.errors.email ? <div class="text-danger invalide-feedback">{ this.state.errors['email'] }</div> : '' }
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="password" class={`form-control ${this.state.errors && this.state.errors.password ? "is-invalid" : '' }`} id="exampleInputPassword1" />
                            { this.state.errors && this.state.errors.password ? <div class="text-danger invalide-feedback">{ this.state.errors['password'] }</div> : '' }
                        </div>
                        { this.state.errors && this.state.errors == 'bad_credentials' ? <div class="alert alert-warning">Vos identifiants de connexion sont incorrects !</div> : '' }
                        <button type="submit" class="btn btn-primary">Me connecter</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Login