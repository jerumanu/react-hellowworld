import React, { Component } from 'react';
2
import './App.css';
3
import Validator from './shared/validator';
4
5
class NewItem extends Component {
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
    this.state = {
14
      name: '',
15
      summary: '',
16
      year: '',
17
      country: '',
18
      description: ''
19
    };
20
  }
21
22
  handleInputChange(event) {
23
    const target = event.target;
24
    const value = target.value;
25
    const name = target.name;
26
27
    this.setState({
28
      [name]: value
29
    });
30
  }
31
32
  onCancel() {
33
    this.props.onCancel();
34
  }
35
36
  onSubmit() {
37
    if(this.validator.validateInputs(this.state)) {
38
        this.props.onSubmit(this.state);
39
    }
40
  }
41
42
  render() {
43
    return (
44
      <div className="input-panel">
45
      <span className="form-caption">New item:</span>
46
      <div>
47
        <label className="field-name">Name:<br/>
48
          <input value={this.state.name} name="name" maxLength="40" required onChange={this.handleInputChange} placeholder="item name" />
49
        </label>
50
      </div>
51
      <div>
52
        <label className="field-name">Summary:<br/>
53
          <input value={this.state.summary} name="summary" maxLength="40" required onChange={this.handleInputChange} placeholder="summary" />
54
        </label>
55
      </div>
56
      <div>
57
        <label className="field-name">Year:<br/>
58
          <input value={this.state.year} name="year" maxLength="4" pattern="[0-9]{1,4}" onChange={this.handleInputChange} placeholder="year" />
59
        </label>
60
      </div>
61
      <div>
62
        <label className="field-name">Country:<br/>
63
          <input value={this.state.country} name="country" maxLength="2" pattern="[a-z|A-Z]{2}" onChange={this.handleInputChange} placeholder="country code" />
64
        </label>
65
      </div>
66
      <div>
67
        <label className="field-name">Description:<br/>
68
          <textarea value={this.state.description} name="description" onChange={this.handleInputChange} placeholder="description" />
69
        </label>
70
      </div>
71
      <br/>
72
      <button onClick={() => this.onCancel()}>Cancel</button>
73
      <button onClick={() => this.onSubmit()}>Create</button>
74
      </div>
75
    );
76
  }
77
}
78
79
export default NewItem;
