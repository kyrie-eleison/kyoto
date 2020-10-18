import React from 'react';
import ReactDOM from "react-dom";
import './PictureScrollElement.css'

class PictureScrollElement extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            componentHeight: null,
        }
      }

    componentDidMount(){
        const componentHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().y;
        this.setState({componentHeight: componentHeight});
        this.props.navigationLocation(this.props.id, componentHeight);
    }

    render(){
        let {id, pictureArray, placeName, scrollY} = this.props;
        const {componentHeight} = this.state;
        let htmlArray_i = []
        const placeName_i = placeName.charAt(0).toUpperCase() + placeName.slice(1);
    
        for(let j = 0; j < pictureArray.length; j++){
            htmlArray_i.push(<img key = {j} alt = "pictures" src = {pictureArray[j]} className="picturesElement" />)
        }

        return(
            <div key = {id} className={placeName} >
                <h1>{placeName_i}</h1>
                {(scrollY >= 0.9*componentHeight)?
                    htmlArray_i
                    :
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                }        
            </div>
        )
    }
}

export default PictureScrollElement;



