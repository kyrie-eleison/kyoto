import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import KyotoPicture from './banners/KyotoPicture.js';
import Map from './banners/Map.js';
import Contents from './banners/Contents.js';

class Index extends React.Component {

    state = {
            scrollY: 0,
    };
    
    handleScroll(event){
        let scrollY = document.documentElement.scrollTop;        
        this.setState({scrollY: scrollY});
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    render(){

        return(
            <React.Fragment>
                <KyotoPicture /> 
                <Map scrollY={this.state.scrollY}/> 
                <Contents scrollY={this.state.scrollY}/>
            </React.Fragment>
        );
    }
}

export default Index;
// ========================================

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
