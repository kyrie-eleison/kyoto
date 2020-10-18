import React from 'react';
import PictureScrollElement from './PictureScrollElement.js';

class PictureScroll extends React.Component{
    
    render(){
        const placeArray = this.props.placeArray;
        const picturesArray = this.props.picturesUrl;
        let htmlArray = [];

        for (let i = 0; i < picturesArray.length; i++){
            htmlArray.push(<PictureScrollElement key = {i} id = {i} pictureArray = {picturesArray[i]} placeName = {placeArray[i]} scrollY = {this.props.scrollY} navigationLocation = {this.props.navigationLocation} navigationState = {this.props.navigationState}/>)
        }   

        return(
            <React.Fragment>
                {htmlArray}
            </React.Fragment>
        )
    }
}

export default PictureScroll;