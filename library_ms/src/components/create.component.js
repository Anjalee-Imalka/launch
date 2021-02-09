import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
    this.onChangeIsbnNumber = this.onChangeIsbnNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      book_name: '',
      author_name: '',
      isbn_number:''
    }
  }
  onChangeBookName(e) {
    this.setState({
      book_name: e.target.value
    });
  }
  onChangeAuthorName(e) {
    this.setState({
      author_name: e.target.value
    })  
  }
  onChangeIsbnNumber(e) {
    this.setState({
      isbn_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      book_name: this.state.book_name,
      author_name: this.state.author_name,
      isbn_number: this.state.isbn_number
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      book_name: '',
      author_name: '',
      isbn_number: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Book</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Book Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangeBookName}
                      />
                </div>
                <div className="form-group">
                    <label>Author Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.author_name}
                      onChange={this.onChangeAuthorName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.isbn_number}
                      onChange={this.onChangeIsbnNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Book" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}