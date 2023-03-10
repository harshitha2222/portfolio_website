import React, { Component } from 'react';
import "../components/Portfolio.css";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
  <div>
    <span className="mywork">PROJECTS</span>
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    {/* <a href={`${item.link}`} target="_blank">
                      <img src={`${item.imgurl}`} className="img item-img"/>
                   
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a> */}
                    {/* <h5>{item.name}</h5>
                          <p>{item.description}</p> */}
                          <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>      
                  </div>
                </div>
              
              )
            })
          }
          </div>
          </div>
        </div>
  </section>
   </div>
        );
  }
}