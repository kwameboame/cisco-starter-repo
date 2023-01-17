import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    render() {
        return (
            <div className='banner'>
                <h1>{this.props.bannerTitle}</h1>
            </div>
        )
    }
}

export default Banner;
