import React from 'react'
import { connect } from 'react-redux'
import { selectFeed } from './actions'

const Feed = ({ name, onClick }) => (
    <div>
        <button type="button" className="btn btn-primary btn-sm btn-block" style={{margin:10}} onClick={onClick}
            aria-pressed="true">
            <p style={{fontWeight: "bold", fontSize: 20}}>{name}</p>
        </button>
    </div>
)

export default connect(
    state => ({active: state.newsfeed}),
    (dispatch, ownProps) => ({
        onClick: () => {
            dispatch(selectFeed(ownProps.feedId));
        }
    })
)(Feed)
