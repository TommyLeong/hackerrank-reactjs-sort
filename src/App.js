import React, {useEffect, useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [processedArticle, setProcessedArticle] = useState(articles)

    useEffect(()=>{
        sortBy();
    },[]);

    const sortBy = (type = 'mostRecent') => {
        console.log('fired')
        switch(type){
            case 'upvote':
                articles.sort((a,b)=>{
                    if(a.upvotes < b.upvotes){
                        return +1
                    }
        
                    if(a.upvotes > b.upvotes){
                        return -1
                    }
        
                    return 0;
                })        
                break;
            case 'mostRecent':
                articles.sort((a,b)=>{
                    return a.date - b.date
                })        
                break;
            default:
                // default as upvotes already    
                break;
        }
        console.log(articles);
        setProcessedArticle(articles)
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={()=>{sortBy('upvotes')}} >Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={()=>{sortBy('mostRecent')}} >Most Recent</button>
            </div>
            <Articles articles={processedArticle}/>
        </div>
    );

}

export default App;
