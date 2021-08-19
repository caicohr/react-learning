import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "Content from state..."
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.state.content}</h2>
            </div>
        );
    }
}
App.defaultProps = {
    headerProp: "Header from props!!!..."
}
export default App;