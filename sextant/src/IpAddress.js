import React, { Component } from 'react';

class IpAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ip: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ip: data.ip }));
    }

    render() {
        return (
            <span className="ipAddress">
                {this.state.ip}
            </span>
        );
    }
}

export default IpAddress;