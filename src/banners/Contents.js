import React from 'react';
import './Contents.css';
import Navigation from './scrollEvent/Navigation.js';
import PictureScroll from './scrollEvent/PictureScroll.js';

import Unsplash, {toJson} from 'unsplash-js';

class Contents extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            placeArray: ["kiyomizudera", "heian", "ginkakuji"],
            picturesUrl: [],
            isLoading: true,
            navigationNumber: [],
        };
        this.navigationLocation = this.navigationLocation.bind(this);
    }

    getPictures = async function(){
        let unsplash = new Unsplash({
            accessKey: "FjGGq2MVYPJMJSo8B8q8Tf4pYg6paijuhLWM5MzwGXc",
            secret: "JvCLvuZjXj7S86EDGSk3IqrIib2W2wJYsmYuMbiSdDQ"
          });
        
        let picturesUrl = [];
        
        
    
        for (let i = 0; i < this.state.placeArray.length; i++){
            await unsplash.search.photos(this.state.placeArray[i],1,3)
            .then(toJson)
            .then(json => {     
            picturesUrl.push(json.results.map(element => {return element.urls.full}))            
            });
        }
        
        this.setState({picturesUrl: picturesUrl, isLoading: false});
    };

    componentDidMount(){
        this.getPictures();
    };

    navigationLocation(i, componentHeight){
        this.setState((state) => {
            return {navigationNumber: state.navigationNumber.concat(componentHeight)}
            });
    };

    render(){
        const {placeArray, picturesUrl, isLoading, navigationNumber} = this.state;
        const scrollY = this.props.scrollY;

        let navigationState;

        if (this.state.navigationLocation !== []){
            if (scrollY >= navigationNumber[0] && scrollY < navigationNumber[1]){
                navigationState = placeArray[0];
            } else if (scrollY >= navigationNumber[1] && scrollY < navigationNumber[2]){
                navigationState = placeArray[1];
            } else if (scrollY >= navigationNumber[2]){
                navigationState = placeArray[2];
            }
        }

        return (
            <section className="contents">
                {(!isLoading)?
                <div className="contentsGrid">
                    <div className="navigation">
                        <Navigation placeArray = {placeArray} scrollY = {this.props.scrollY} navigationState = {navigationState}/>
                    </div>
                    <div className="pictures">
                        <PictureScroll placeArray = {placeArray} picturesUrl = {picturesUrl} scrollY = {this.props.scrollY} navigationLocation = {this.navigationLocation} navigationState = {this.state.navigationState}/>
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

export default Contents;


