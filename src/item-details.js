import React, { Component } from 'react';
2
import './App.css';
3
4
class ItemDetails extends Component {
5
6
  constructor(props) {
7
    super(props);
8
    this.onEdit = this.onEdit.bind(this);
9
    this.onDelete = this.onDelete.bind(this);
10
  }
11
12
  render() {
13
    const item = this.props.item;
14
    return (
15
      <div className="input-panel">
16
      <span className="form-caption">{ item.name}</span>
17
      <div><span className="field-name">Name:</span><br/> {item.name}</div>
18
      <div><span className="field-name">Summary:</span><br/> {item.summary}</div>
19
      <div><span className="field-name">Year:</span><br/> {item.year}</div>
20
      <div><span className="field-name">Country:</span><br/> {item.country}</div>
21
      <div><span className="field-name">Description:</span><br/> {item.description}</div>
22
      <br/>
23
      <button onClick={() => this.onDelete()}>Delete</button>
24
      <button onClick={() => this.onEdit()}>Edit</button>
25
      </div>
26
    );
27
  }
28
onEdit() {
30
    this.props.onEdit();
31
  }
32
33
  onDelete() {
34
    const item = this.props.item;
35
    if(window.confirm("Are you sure to delete item: " + item.name + " ?")) {
36
      this.props.onDelete(item.link);
37
    }
38
  }
39
40
}
41
42
export default ItemDetails;
