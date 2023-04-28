import React from 'react';

function Articles({articles}) {

    console.log('received')
    console.log(articles)
    
    const renderArticles = (articles) => {
        return articles.map(article => {
            return(
                <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">{article.title}</td>
                    <td data-testid="article-upvotes">{article.upvotes}</td>
                    <td data-testid="article-date">{article.date}</td>
                </tr>
            )
        })
    }

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {renderArticles(articles)}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
