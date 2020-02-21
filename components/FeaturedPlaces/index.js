import React from 'react';
// import $ from 'jquery';
import dynamic from 'next/dynamic'

const OwlCarousel = dynamic(import('react-owl-carousel'),{ssr:false});
// const OwlCarousel = dynamic(
//     () => import 'react-owl-carousel';
//     { ssr: false }
// ); 
import dummyImagesList from './dummyImages.json';

console.log("OwlCarousel", OwlCarousel);
class FeaturedPlaces extends React.Component {
    
    render(){
        return(
            <div className="featured-places bg-grey">
                <div className="container">
                    <div className="title-left">
                        <div className="title-section">
                            <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Choose from the most visited places.</font></font></h3>
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Discover the wonders of Lake Garda, the history and the places to visit during your holiday in the numerous campsites and villages: you will immerse yourself in a territory full of charm, timeless villages theaters of legendary enterprises, landscapes that inspired poets and writers, and you will taste the typical products of a land that offers unique food and wine itineraries.</font></font></p>
                        </div>
                    </div>
                    
                    <div className="featured-places-grid">
                        <div className="featured-places-row owl-carousel owl-theme featured-places-carousel owl-loaded">
                        {
                            <OwlCarousel
                                items={dummyImagesList.length}
                                className="owl-theme"
                                loop
                                margin={10}
                                nav
                            >
                             {
                                dummyImagesList.map((data)=>(
                                    <div className="item place-item-featured">
                                        <a href="/discover-single.html">
                                            <div className="card-duplex">
                                                <div className="card-photo">
                                                    <img src={data.url} />
                                                </div>
                                                <div className="card-behind">
                                                    <div className="card-bottom">
                                                        <p className="card-label">
                                                            <font style={{verticalAlign: 'inherit'}}>
                                                                <font style={{verticalAlign: 'inherit'}}>{data.nome}</font>
                                                            </font>
                                                        </p>
                                                        <h3>
                                                            <font style={{verticalAlign: 'inherit'}}>
                                                                <font style={{verticalAlign: 'inherit'}}>{data.slug}</font>
                                                            </font>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            } 
                            </OwlCarousel>
                        }  
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedPlaces;