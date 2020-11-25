import React from 'react';

class Random extends React.Component {
    
    render () {
        const {min, max} = this.props
        return <p>Random value between {min} and {max} => {Math.floor(Math.random()*max) + min} </p> 
    }
    

}
export default Random;