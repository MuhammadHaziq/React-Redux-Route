import React from "react";

 class User extends React.Component {
    render() {
console.log(this.props.resul)
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {this.props.resul}
                </div>
            </div>
            </div>
        );
    }
}

export default User;
