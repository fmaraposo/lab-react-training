import React from 'react';
import './Greetings.css'

class Greetings extends React.Component {
    
    render() {
       const {lang,children} = this.props;
        
       switch (lang) {
        case 'de':
            return <p className="greetings">Halo {children} </p>;
        case 'en':
            return <p className="greetings">Hello {children} </p>;
        case 'es':
            return <p className="greetings">Hola {children} </p>;
        case 'fr':
            return <p className="greetings">Bonjour {children} </p>
        default:
       }
    }
}


export default Greetings;