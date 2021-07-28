import React, { Component } from 'react';
2
import './App.css';
3
import Validator from './shared/validator';
4
5
class EditItem extends Component {
6
7
  constructor(props) {
8
    super(props);
9
    this.validator = new Validator();
10
    this.onCancel = this.onCancel.bind(this);
11
    this.onSubmit = this.onSubmit.bind(this);
12
    this.handleInputChange = this.handleInputChange.bind(this);
13
    const itemToEdit = props.item;
14
    this.state = {
15
      name: itemToEdit.name,
16
      summary: itemToEdit.summary,
17
      year: itemToEdit.year,
18
      country: itemToEdit.country,
19
      description: itemToEdit.description,
20
      link: itemToEdit.link
21
    };
22
  }
23
24
  handleInputChange(event) {
25
    const target = event.target;
26
    const value = target.value;
27
    const name = target.name;
28
29
    this.setState({
30
      [name]: value
31
    });
32
  }
33
34
  onCancel() {
35
    this.props.onCancel();
36
  }
37
38
  onSubmit() {
39
    if (this.validator.validateInputs(this.state)) {
40
      this.props.onSubmit(this.state);
41
    }
42
  }
43
44
  render() {
45
    return (
46
      <div className="input-panel">
47
      <span className="form-caption">Edit item:</span> <span>{this.state.name}</span>
48
      <div>
49
        <label className="field-name">Name:<br/>
50
          <input value={this.state.name} name="name" maxLength="40" required onChange={this.handleInputChange} placeholder="item name" />
51
        </label>
52
      </div>
53
      <div>
54
        <label className="field-name">Summary:<br/>
55
          <input value={this.state.summary} name="summary" maxLength="40" required onChange={this.handleInputChange} placeholder="summary" />
56
        </label>
57
      </div>
58
      <div>
59
        <label className="field-name">Year:<br/>
60
          <input value={this.state.year} name="year" maxLength="4" pattern="[0-9]{1,4}" onChange={this.handleInputChange} placeholder="year" />
61
        </label>
62
      </div>
63
      <div>
64
        <label className="field-name">Country:<br/>
65
          <input value={this.state.country} name="country" maxLength="2" pattern="[a-z|A-Z]{2}" onChange={this.handleInputChange} placeholder="country" />
66
        </label>
67
      </div>
68
      <div>
69
        <label className="field-name">Description:<br/>
70
          <textarea value={this.state.description} name="description" onChange={this.handleInputChange} placeholder="description" />
71
        </label>
72
      </div>
73
      <br/>
74
      <button onClick={() => this.onCancel()}>Cancel</button>
75
      <button onClick={() => this.onSubmit()}>Update</button>
76
      </div>
77
    );
78
  }
79
}
80
81
export default EditItem;
