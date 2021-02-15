import React from 'react'
import Navbar from './Navbar'

class PostPicture extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    handleTitleChange = event => {
        this.setState({email: event.target.value}, () => {
            console.log(this.state)
        })
    }

    handleDescriptionChange = event => {
        this.setState({password: event.target.value}, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <div class="container w-50">
                    <h2 class="text-center my-5">Ajouter une nouvelle photo</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Titre</label>
                            <input onChange={this.handleEmailChange} type="text" class={`form-control ${this.state.errors && this.state.errors.email ? "is-invalid" : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {this.state.errors && this.state.errors.email ? <div class="text-danger invalide-feedback">{this.state.errors['email']}</div> : ''}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            {this.state.errors && this.state.errors.password ? <div class="text-danger invalide-feedback">{this.state.errors['password']}</div> : ''}
                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Image</label>
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </>
        )
    }
}

export default PostPicture