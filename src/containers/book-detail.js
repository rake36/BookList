import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectBook } from '../actions/index';
// import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book...</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        book: state.activeBook
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of the reducers
    // return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// This is what allows Redux to wire up the state used by BookList
//  read redux docs on 'connect' to see all of its capabilities (this is probably most common use-case)
// export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
export default connect(mapStateToProps)(BookDetail);