import React, { Component } from  'react'
import {connect} from 'react-redux'
import {handleAddTweet} from "../actions/tweets";

class NewTweet extends  Component {

    state = {
        text: ''
    }

    handleSubmit = (e) => {
        console.log('in');

        const {text} = this.props

        const {dispatch, id} = this.props

        dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            state: {
                text: ''
            }
        }))

    }

    handleChange = (e) => {
        const text = e.target.value
        this.setState(() => ({
            text
        }))
    }

    render() {

        const {text} = this.state
        const tweetLeft = 290 - text.length

        console.log("New Tweet", text);
        console.log("length Left", tweetLeft);
        return (
            <div>
                <h3 className='center'>Compose new Tweet </h3>

                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />

                    {
                        tweetLeft <= 0 &&
                        (
                            <div className='tweet-length'>
                                {tweetLeft}
                            </div>
                        )


                    }

                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default connect () (NewTweet)