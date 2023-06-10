import React from "react";

class ChangingProgressProvider extends React.Component {
    static defaultProps = {
        interval: 2000
    };

    state = {
        valuesIndex: 0,
        finish: false
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
            });
        }, this.props.interval);
    }

    render() {
        //return this.state.finish ? this.props.children(this.props.values[this.props.values.length-1]) : this.props.children(this.props.values[this.state.valuesIndex]);
        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

export default ChangingProgressProvider;
