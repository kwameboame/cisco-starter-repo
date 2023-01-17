import React from 'react';
import './Exhibit.css';

class Exhibit extends React.Component {
    render() {
        return (
            <div className='exhibit'>
                <h2 className='exTitle'>{this.props.name}</h2>
                <div className='exContent'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Exhibit;
