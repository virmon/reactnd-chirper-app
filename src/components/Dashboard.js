import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h3 className='center'>Timeline</h3>
                <ul className='dashboard-list'>
                {
                    this.props.tweetsId.map((id) =>
                        <li key={id}>TWEET ID: {id}</li>
                    )
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ tweets }) {
    return {
        tweetsId: Object.keys(tweets)
        .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)