export default class List {
  constructor(listItems) {
    this.listItems = listItems;
  }
  render() {
    let listStr = "`<ol>";
    this.listItems.forEach((item) => {
      listStr += `<ul>${item}</ul>`;
    });
    listStr += "</ol>";
    return listStr;
  }
}
