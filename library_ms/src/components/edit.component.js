import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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
  
    componentDidMount() {
        axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  book_name: response.data.book_name, 
                  author_name: response.data.author_name,
                  isbn_number: response.data.isbn_number });
            })
            .catch(function (error) {
                console.log(error);
            })
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
      axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
          .then(res => console.log(res.data));
      
      this.props.history.push('/index');
    }
   
    render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3 align="center">Update Business</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Book Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.book_name}
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
                      <label>ISBN Number: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.isbn_number}
                        onChange={this.onChangeIsbnNumber}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" 
                        value="Update Book" 
                        className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
    }
  }