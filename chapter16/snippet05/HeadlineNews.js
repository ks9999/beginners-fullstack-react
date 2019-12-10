import React from 'react'
import { connect } from 'react-redux'
import  NewsItem  from './NewsItem'

const HeadlineNews = ({ feeds, loading }) => {
    let headlineNews = "";

    if (feeds) {
        headlineNews = feeds.map((article, index) =>
            (
                <div key={`${index}`} className="row">
                    <NewsItem article={feeds[index]} />
                </div>
            )
        )
    }
    if (loading) {
        headlineNews =  <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>        
    }

    return (
        <div>
            {headlineNews}
        </div>
    )
}

export default connect(
    state => ({
        feeds: state.json,
        loading: state.loading
    })
)(HeadlineNews)
