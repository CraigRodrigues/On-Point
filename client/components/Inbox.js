import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUnread } from '../actions/sockets/answer'
import { removeQuestionFromInbox } from '../actions/inbox'

class Inbox extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.showMessages = this.showMessages.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    if (this.props.user.data) {
      this.props.getUnread(this.props.user.data.id)
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.unreadExists && this.props.user.data) {
      this.props.getUnread(this.props.user.data.id)
    }
  }

  showMessages () {
    let list = document.getElementById('inboxList')
    if (list.style.display === 'none' || list.style.length < 1) {
      list.style.display = 'block'
    } else {
      list.style.display = 'none'
    }
  }

  handleClick (id) {
    this.showMessages()
    this.props.removeQuestionFromInbox(id)
    this.props.history.push(`/question/${id}`)
  }

  render () {
    return (
      <div>
        <img id='inboxImg' onClick={this.showMessages} src='/images/inbox.png' />
        <span id='inboxLabel' onClick={this.showMessages}>{this.props.unread[0] || ''}</span>
        <div id='inboxList'>
          {
            this.props.unread.map((entry, id) => {
              if (id > 0) {
                return (
                  <div key={entry.id}>
                    <p className='bold-link' onClick={() => this.handleClick(entry.id)}>{entry.question}</p>
                    {entry.answers.map((answer, id) => <p key={`${id}`}>{answer}</p>)}
                    <br />
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    unread: state.answers.unread,
    unreadExists: state.answers.unreadExist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUnread: (id) => dispatch(getUnread(id)),
    removeQuestionFromInbox: id => dispatch(removeQuestionFromInbox(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inbox))