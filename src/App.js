import React, { Component } from 'react';
2
import './App.css';
3
import ItemDetails from './item-details';
4
import NewItem from './new-item';
5
import EditItem from './edit-item';
6
import ItemService from './shared/mock-item-service';
7
8
class App extends Component {
9
10
  constructor(props) {
11
    super(props);
12
    this.itemService = new ItemService();
13
    this.onSelect = this.onSelect.bind(this);
14
    this.onNewItem = this.onNewItem.bind(this);
15
    this.onEditItem = this.onEditItem.bind(this);
16
    this.onCancel = this.onCancel.bind(this);
17
    this.onCancelEdit = this.onCancelEdit.bind(this);
18
    this.onCreateItem = this.onCreateItem.bind(this);
19
    this.onUpdateItem = this.onUpdateItem.bind(this);
20
    this.onDeleteItem = this.onDeleteItem.bind(this);
21
    this.state = {
22
      showDetails: false,
23
      editItem: false,
24
      selectedItem: null,
25
      newItem: null
26
    }
27
  }
28
29
  componentDidMount() {
30
      this.getItems();
31
  }
32
33
  render() {
34
    const items = this.state.items;
35
    if(!items) return null;
36
    const showDetails = this.state.showDetails;
37
    const selectedItem = this.state.selectedItem;
38
    const newItem = this.state.newItem;
39
    const editItem = this.state.editItem;
40
    const listItems = items.map((item) =>
41
      <li key={item.link} onClick={() => this.onSelect(item.link)}>
42
         <span className="item-name">{item.name}</span> |  {item.summary}
43
      </li>
44
    );
45
46
    return (
47
      <div className="App">
48
          <ul className="items">
49
            {listItems}
50
          </ul>
51
          <br/>
52
          <button type="button" name="button" onClick={() => this.onNewItem()}>New Item</button>
53
          <br/>
54
            {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}></NewItem>}
55
            {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem}  onDelete={this.onDeleteItem} ></ItemDetails>}
56
            {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} ></EditItem>}
57
      </div>
58
    );
59
  }
60
61
  getItems() {
62
    this.itemService.retrieveItems().then(items => {
63
          this.setState({items: items});
64
        }
65
    );
66
  }
67
68
  onSelect(itemLink) {
69
    this.clearState();
70
    this.itemService.getItem(itemLink).then(item => {
71
      this.setState({
72
          showDetails: true,
73
          selectedItem: item
74
        });
75
      }
76
    );
77
  }
78
79
  onCancel() {
80
    this.clearState();
81
  }
82
83
  onNewItem() {
84
    this.clearState();
85
    this.setState({
86
      newItem: true
87
    });
88
  }
89
90
  onEditItem() {
91
    this.setState({
92
      showDetails: false,
93
      editItem: true,
94
      newItem: null
95
    });
96
  }
97
98
  onCancelEdit() {
99
    this.setState({
100
      showDetails: true,
101
      editItem: false,
102
      newItem: null
103
    });
104
  }
105
106
  onUpdateItem(item) {
107
    this.clearState();
108
    this.itemService.updateItem(item).then(item => {
109
        this.getItems();
110
      }
111
    );
112
  }
113
114
  onCreateItem(newItem) {
115
    this.clearState();
116
    this.itemService.createItem(newItem).then(item => {
117
        this.getItems();
118
      }
119
    );
120
  }
121
122
  onDeleteItem(itemLink) {
123
    this.clearState();
124
    this.itemService.deleteItem(itemLink).then(res => {
125
        this.getItems();
126
      }
127
    );
128
  }
129
130
  clearState() {
131
    this.setState({
132
      showDetails: false,
133
      selectedItem: null,
134
      editItem: false,
135
      newItem: null
136
    });
137
  }
138
}
139 export default App;
