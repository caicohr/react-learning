import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

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

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'coconut',
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('Color: ' + this.state.color + ' Is Going: ' + this.state.isGoing + ' Number of Guests: ' + this.state.numberOfGuests);
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite color:
                    <select value={this.state.color} onChange= {this.handleChange} name="color">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <br />
                </label>
                <label>
                Is going:
                <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange}>
                </input>
                </label>
                <br/>
                <label>
                Number of Guests:
                <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

function WillBoil(props) {
    if (props.celsius >= 100) {
        return (
        <p>The water would boil</p>
        );
    }
    return (
        <p>The water would not boil</p>
    );
}

class OwnCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            celTemperature: 0,
            farTemperature: 32,
            boolUnit: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.changeTemperatureUnit = this.changeTemperatureUnit.bind(this);
    }

    handleChange(e) {
        if (this.state.boolUnit) {
            this.setState({celTemperature: e.target.value});
        }
        this.setState({farTemperature: e.target.value});
    }

    changeTemperatureUnit() {
        this.setState(previousState => ({
            boolUnit: !previousState.boolUnit
        }));
    }

    render() {
        const cel = this.state.celTemperature;
        const far = this.state.farTemperature;

        return (
            this.state.boolUnit ?
                <div>
                    <fieldset>
                        <legend>At what celsius temperature:</legend>
                        <input type="number" value={cel} onChange={this.handleChange}></input> (This is {(cel * (9/5) + 32)} in farenheit)
                        <br />
                        <button onClick= {this.changeTemperatureUnit}>Change unit to Farenheit</button>
                        <WillBoil celsius={cel}/>
                    </fieldset>
                </div>
                :
                <div>
                    <fieldset>
                        <legend>At what farenheit temperature:</legend>
                        <input type="number" value={far} onChange={this.handleChange}></input> (This is {((far - 32) * (5/9))} in celsius)
                        <br />
                        <button onClick= {this.changeTemperatureUnit}>Change unit to Celsius</button>
                        <WillBoil celsius={((far - 32) * (5/9))}/>
                    </fieldset>
                </div>
        )
    }
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({temperature : e.target.value});
    }

    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale = "f" /> 
            </div>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
};

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''}
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onchange={this.handleChange} />
            </fieldset>
        )
    }
}

class App extends React.Component {//second to run
    render() {//find the Welcome component then the clock component will run
        return (
            <div>
                <p>Own Calclulator Style</p>
                <OwnCalculator />
                <p>React Style</p>
                <Calculator />
                <Welcome name="Ben" age="12"/>
                <Welcome name="Ten" age ="18"/>
                <Clock />
                <Greeting isLoggedIn={false}/>
                <LoginStatus />
                <WarningBanner />
                <ListMaker inputList={[1,2,3,4,5]}/>
                <ShowList numbers={numbers}/>
                <FormPage />
                <Toggle />
            </div>
        )
    };
}

const numbers = [6,7,8,9,10];
ReactDOM.render(//first to run
    <App />,
    document.getElementById('root')
);