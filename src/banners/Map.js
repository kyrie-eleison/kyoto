import React from 'react';
import ReactDOM from "react-dom";
import './Map.css'
import streetMap from './streetMap.png';

class Map extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            componentHeight: null,
        }
      }
    // getPicture = async function(){
        
    // };

    componentDidMount(){
        // this.getMap();
        const componentHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().y;
        this.setState({componentHeight: componentHeight});
    };

    render(){
        const {componentHeight} = this.state;
        const scrollY = this.props.scrollY;
        
        return (
            <section className="map">
                {(scrollY >= 0.7*componentHeight)?
                    <div className="mapGrid">
                        <img className="streetMap" alt="Street Map" src={streetMap} />
                        <div className="mapIntro">
                            <p>How About This Route: <br />
                            From Kiyomizu-Dera to Ginkakuji <br />
                            <span className="mapSource">This map is from www.google.com(<a href="https://www.google.com/maps/dir/%E6%B8%85%E6%B0%B4%E5%AF%BA,+%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92605-0862+%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E6%9D%B1%E5%B1%B1%E5%8C%BA%E6%B8%85%E6%B0%B4%EF%BC%92%EF%BC%99%EF%BC%94/ginkakuji/@35.0113979,135.7700995,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x600108d385dcfb07:0x62af658650c434ba!2m2!1d135.7850463!2d34.9948561!1m5!1m1!1s0x600109050b426fe1:0x258aca1ce888abc9!2m2!1d135.7982058!2d35.0270213" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Link</a>)</span></p>
                        </div>
                    </div>
                    :
                    <div className="loader">
                            <span className="loader__text"></span>
                    </div>
                }
            </section>
        )
    }
}

export default Map;