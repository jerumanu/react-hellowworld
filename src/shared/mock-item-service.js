class ItemService {
2
3
  constructor() {
4
    this.items = [
5
      {link:1, name:"test1", summary:"Summary Test 1", year:"2001", country:"us", price:"1000", description:"Desc 1"},
6
      {link:2, name:"test2", summary:"Summary Test 2", year:"2002", country:"uk", price:"2000", description:"Desc 2"},
7
      {link:3, name:"test3", summary:"Summary Test 3", year:"2003", country:"cz", price:"3000", description:"Desc 3"},
8
    ];
9
  }
10
11
  async retrieveItems() {
12
      return Promise.resolve(this.items);
13
  }
14
15
  async getItem(itemLink) {
16
    for(var i = 0; i < this.items.length; i++) {
17
      if ( this.items[i].link === itemLink) {
18
        return Promise.resolve(this.items[i]);
19
      }
20
    }
21
    return null;
22
  }
23
24
  async createItem(item) {
25
    console.log("ItemService.createItem():");
26
    console.log(item);
27
    return Promise.resolve(item);
28
  }
29
30
  async deleteItem(itemId) {
31
    console.log("ItemService.deleteItem():");
32
    console.log("item ID:" + itemId);
33
  }
34
35
  async updateItem(item) {
36
    console.log("ItemService.updateItem():");
37
    console.log(item);
38
  }
39
40
}
41
42
export default ItemService;
