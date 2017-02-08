import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { contentWrapper } from './app.css';


const App = (props) => {
    return(<div className='main'>
            <Header {...props.location}/>
                <div className={contentWrapper}>
                    {props.children}
                </div>
            <Footer />
        </div>
    );
}

export default App;
