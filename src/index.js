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
        this.state = {
            isToggleOn: true,
            name: '',
            age: ''
        };

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

function UserGreeting() {
    return <h1>Aloha, User!</h1>;
}

function GuestGreeting() {
    return <h1>Aloha! Please Login or Sign Up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function UserIn(props) {
    return <button onClick={props.onClick}>
        Logout
    </button>
}

function UserOut(props) {
    return <button onClick={props.onClick}>
        Login
    </button>
}

class LoginStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.UserLoggedIn = this.UserLoggedIn.bind(this);
        this.UserLoggedOut = this.UserLoggedOut.bind(this);
    }

    UserLoggedIn() {
        this.setState({isLoggedIn: true});
    }

    UserLoggedOut() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {isLoggedIn
                ? <UserIn onClick = {this.UserLoggedOut}/>
                : <UserOut onClick = {this.UserLoggedIn}/>
                }
            </div>
            
        )
        
    }
}

class WarningBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boolWarning: false
        }
        this.handleWarningButton = this.handleWarningButton.bind(this);
    }

    handleWarningButton() {
        this.setState(state => ({//try to remember this syntax
            boolWarning: !state.boolWarning
        }));
    }

    render() {
        return (
            <div>
            <button onClick={this.handleWarningButton}>
                {
                    this.state.boolWarning
                    ? 'Hide Warning'
                    : 'Show Warning'
                }
            </button>
                <WarningDiv warn={this.state.boolWarning}/>
            </div>
        )
    }
}

function WarningDiv(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div>
            WARNING!!!
        </div>
        )
}

class App extends React.Component {//second to run
    render() {//find the Welcome component then the clock component will run
        return <div>
        <Toggle />
        <Welcome name="Ben" age="12"/>
        <Welcome name="Ten" age ="18"/>
        <Clock />
        <Greeting isLoggedIn={false}/>
        <LoginStatus />
        <WarningBanner />
        <ListMaker inputList={[1,2,3,4,5]}/>
        <ShowList numbers={numbers}/>
        </div>
    };
}

class ListMaker extends React.Component {
    render() {
        const theList = this.props.inputList;
        const listItems = theList.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>)
        ;
        return (
            <div>
                <ul>
                {listItems}
                </ul>
            </div>
        )
    }
}

function ShowList(props) {
    const numbers = props.numbers;
    const listList = numbers.map((num) =>
        <li key={num.toString()}>
        {num}
        </li>
    );
    return (
        <ul>{listList}</ul>
    );
}

const numbers = [6,7,8,9,10];
ReactDOM.render(//first to run
    <App />,
    document.getElementById('root')
);