import React from 'react'
import Feed from './Feed'

const Feeds = () => (

  <div className="row">
    <div className="col-sm">
        <Feed name="CNN" feedId="cnn" />   
        <Feed name="CNBC" feedId="cnbc" />       
        <Feed name="BBC" feedId="bbc-news" />
        <Feed name="Fox News" feedId="fox-news" />
        <Feed name="Associated Press" feedId="associated-press" />  
        <Feed name="National Geographic" feedId="national-geographic" /> 
        <Feed name="Newsweek" feedId="newsweek" />  
        <Feed name="Recode" feedId="recode" /> 
        <Feed name="Fortune" feedId="fortune" />  
        <Feed name="Hacker News" feedId="hacker-news" />          
                          
    </div>
    <div className="col-sm">
        <Feed name="Google News" feedId="google-news" />         
        <Feed name="Buzzfeed" feedId="buzzfeed" />
        <Feed name="Reuters" feedId="reuters" />
        <Feed name="TechRadar" feedId="techradar" />        
        <Feed name="New Scientist" feedId="new-scientist" />   
        <Feed name="The Huffington Post" feedId="the-huffington-post" /> 
        <Feed name="Time" feedId="time" /> 
        <Feed name="Business Insider" feedId="business-insider" />  
        <Feed name="Entertainment Weekly" feedId="entertainment-weekly" />           
        <Feed name="Independent" feedId="independent" />            
        
         
    </div>
         
  </div>
)

export default Feeds

