import React from 'react';
import './KyotoPicture.css'

import Unsplash, {toJson} from 'unsplash-js';

class KyotoPicture extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            pictureUrl: null,
            isLoading: true,
        }
    }    

    getPicture = async function(){
        let unsplash = new Unsplash({
            accessKey: "FjGGq2MVYPJMJSo8B8q8Tf4pYg6paijuhLWM5MzwGXc",
            secret: "JvCLvuZjXj7S86EDGSk3IqrIib2W2wJYsmYuMbiSdDQ"
          });
        let pictureUrl; 
    
        await unsplash.search.photos("kyoto_street",1,1)
        .then(toJson)
        .then(json => {
        pictureUrl = json.results[0].urls.full;
        });
    
        this.setState({pictureUrl: pictureUrl, isLoading: false});
    }

    componentDidMount(){
        this.getPicture();
    }    

    render(){
        const {isLoading, pictureUrl} = this.state;
        return(
            <section className="kyotoPicture">
                {(isLoading)?
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                        </div>
                    :
                    <div>
                        <img className="picture" alt="KyotoStreet" src={pictureUrl} />
                        <div className="intro">
                            Discover Kyoto: <br />
                            Meet the City's Splendidness <br />
                            <span className="source">All pictures in this page are from unsplash.com(<a href="https://unsplash.com/s/photos/kyoto_street" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Link</a>)</span>
                        </div>    
                    </div>
                }
        </section>
        );
    }
}

export default KyotoPicture;

