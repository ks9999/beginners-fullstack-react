import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

const News = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>News Stories</h2>
            <ul>
                <li>
                    <Link to={`${url}/northamerica`}>North America</Link>
                </li>
                <li>
                    <Link to={`${url}/southamerica`}>South America</Link>
                </li>
                <li>
                    <Link to={`${url}/europe`}>Europe</Link>
                </li>
                <li>
                    <Link to={`${url}/asia`}>Asia</Link>
                </li>     
                <li>
                    <Link to={`${url}/middleeast`}>Middle East</Link>
                </li> 
                <li>
                    <Link to={`${url}/africa`}>Africa</Link>
                </li>    
                <li>
                    <Link to={`${url}/australia`}>Australia</Link>
                </li>                                                            
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Select the news story.</h3>
                </Route>
                <Route path={`${path}/:storyId`}>
                    <Story />
                </Route>
            </Switch>
        </div>
    );
}

const Story = () =>  {

    let { storyId } = useParams();

    return (
        <div>
            <h3>{storyId}</h3>
        </div>
    );
}

export default News;
