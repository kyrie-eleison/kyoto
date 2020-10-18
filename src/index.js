import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

        (function(l) {
            if (l.search[1] === '/' ) {
            var decoded = l.search.slice(1).split('&').map(function(s) { 
                return s.replace(/~and~/g, '&')
            }).join('?');
            window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
            );
            }
        }(window.location))

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
