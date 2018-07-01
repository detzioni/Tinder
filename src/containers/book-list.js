import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions/index";

class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return(
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Whatever return from this function will show up in props
	// inside of BookList
	return{
		books: state.books
	};
}

// Anything returned from this function will end up as a props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the results should be passed 
	// to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promot BookList from component to redux container - it needs to know 
// about this new dispatch method, selectBook. Make it available as a props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);