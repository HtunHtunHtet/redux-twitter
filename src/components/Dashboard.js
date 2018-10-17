import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {

    render(){
        return(
            <div>
                Dashboard Component
            </div>
        )
    }
}

function mapStateToProps({tweets}){

    return{
        tweets
    }
}

export default connect(mapStateToProps)(Dashboard)