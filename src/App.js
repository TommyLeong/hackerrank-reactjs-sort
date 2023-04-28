import React, {useEffect, useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [processedArticle, setValue] = useState(articles)

    useEffect(()=>{
        sortBy('upvotes');
    },[]);

    const sortBy = (type) => {
        let newValue;
        switch(type){
            case 'upvotes':
                newValue = processedArticle.sort((a,b)=>{
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
                newValue = processedArticle.sort((a,b)=>{
                    return new Date(b.date) - new Date(a.date);
                })                
                break;
            default:
                // default as upvotes already    
                break;
        }
        console.log(newValue);
        setValue([...newValue]);
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
