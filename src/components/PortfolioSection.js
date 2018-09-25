import React, { Component } from 'react';
import PortfolioSectionItem from './PortfolioSectionItem';
import { portfolioItems } from '../ProfileInformation'
import PopUp from './PopUp'

class PortfolioSection extends Component {
  render() {
    return (
      <div className="PortfolioSection">
      <h1 className="PS-Title" >Recent Projects</h1>
      <div className="PS-List" >
                {portfolioItems.map(function(item,index){
                    return (
                      <PortfolioSectionItem
                      key = {index}
                      ImageUrl = {item.imageUrl}
                      Title =   {item.title}
                      Description = {item.description}
                      Link =  {item.link}
                      LinkText = {item.linkText}
                      Modal = {item.modal}
                      />
                    )
                })}
                </div>
      </div>
    );
  }
}

export default PortfolioSection;
