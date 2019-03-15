C.UserRegister = React.createClass({
    mixins: [],
    PropTypes: {

    },
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {

        }
    },
    onSubmit(event) {
        event.preventDefault();
        var username = $(event.target).find("[name=username]").val();
        var email = $(event.target).find("[name=email]").val();
        var password = $(event.target).find("[name=password]").val();
        var repeatpassword = $(event.target).find("[name=repeatpassword]").val();

        var errors = {};

        if (!username) {
            errors.username = "Username required"
        }

        if (!email) {
            errors.email = "Email required"
        }

        if (!password) {
            errors.password = "Password required"
        }

        this.setState({
            errors: errors
        });

        if (! _.isEmpty(errors)) {
            return;
        }

        Accounts.createUser({username:username, email:email, password:password, repeatpassword:password}, (err) => {
    
            if(err){
            this.setState({
              error: err.reason
            });

            return;
            } else{
                FlowRouter.go('Home');
            }
        });
    },
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Register</h1>

                        <form onSubmit={this.onSubmit}>
                            <C.AuthErrors errors={this.state.errors} />
                            <C.FormInput hasError={!!this.state.errors.name} name="Username" type="text" label="username"/>
                            <C.FormInput hasError={!!this.state.errors.email} name="Email" type="text" label="Email" />
                            <C.FormInput hasError={!!this.state.errors.password} name="Password" type="password" label="password" />
                            <C.FormInput hasError={!!this.state.errors.repeatpassword} name="Repeat Password" type="password" label="repeatpassword" />
                            <input type="submit" className="btn btn-default"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});
