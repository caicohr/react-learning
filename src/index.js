import React from 'react';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <p>You're {this.props.age}, right?</p>
            </div>
        );
    }
}
class App extends React.Component {
    render() {
        return <div>
        <Welcome name="Ben" age="12"/>
        <Welcome name="Ten" age ="18"/>
        </div>
    };
}

function WelcomeFunction(props){
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p>You're {props.age}, right?</p>
        </div>
    );
}

function Triple(){
    return (
        <div>
            <WelcomeFunction name="Benny" age="12"/>
            <WelcomeFunction name="Tenny" age ="18"/>
        </div>
    );
}

ReactDOM.render(
    <Triple />,
    document.getElementById("root")
);