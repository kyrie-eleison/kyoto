import React from 'react';
import ReactDOM from "react-dom";
import './Navigation.css';

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            componentHeight: null,
        };
    }

    componentDidMount(){
        const componentHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().y;
        this.setState({componentHeight: componentHeight});  
    }

    render(){
        const {componentHeight} = this.state;
        const {placeArray, navigationState} = this.props;
        let scrollY = this.props.scrollY;
        let htmlArray = [];

        for (let i = 0; i < placeArray.length; i++){
            let className_i = placeArray[i];
            let className_i_Nav;
            let className_i_Css;
            className_i_Nav = className_i.charAt(0).toUpperCase() + className_i.slice(1);
            className_i_Css = className_i + "Navigation";
            let color = "gray";

            switch(navigationState) {
                case "kiyomizudera":
                  if (i%3 === 0){
                      color = "black";
                  }
                  break;
                case "heian":
                  if (i%3 !== 2){
                      color = "black";
                  }
                  break;
                default:
                  color = "black";
              }
    
            htmlArray.push(<div key = {i} className={className_i_Css} style={{backgroundColor: color}}>
            <span className="locationName" style={{color: color}}>{className_i_Nav}</span></div>);
            
            if (i < 2){
                htmlArray.push(<div key = {i+3} className="middle"></div>);
            };
        }

        return(
            <div className="navigationElements">
                {(scrollY >= 0.9*componentHeight)?
                    htmlArray
                    :
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                }    
            </div>   
        )
    }
}

export default Navigation;
