class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

// Пример использования
const playerInventory = new Inventory();
playerInventory.addItem(item1);
playerInventory.addItem(item2);
playerInventory.removeItem(item1);
