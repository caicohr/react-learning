import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {//after the React.DOM finds this
    constructor(props) {//First, initiate the value
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {//Third, After the component is rendered. They sometimes call it "Mounting"
        this.thisisthetimerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {//Last to run. After this components unmounts
        clearInterval(this.thisisthetimerID);
    }

    tick() {//This is in the DidMount() lifecycle method
        this.setState({//sets the date to a new date. "the setState() call knows the state has changed"
            date: new Date()
        });
    }

    render() { //Second, renders the component whatever it is
        return (
            <div>
                <h1>The time is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

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

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }

}

class App extends React.Component {//second to run
    render() {//find the Welcome component then the clock component will run
        return <div>
        <Toggle />
        <Welcome name="Ben" age="12"/>
        <Welcome name="Ten" age ="18"/>
        <Clock />
        </div>
    };
}

ReactDOM.render(//first to run
    <App />,
    document.getElementById('root')
);