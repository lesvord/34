class Dungeon {
  constructor(name, level, monsters) {
    this.name = name;
    this.level = level;
    this.monsters = monsters;
  }
}

// Пример использования
const dungeon1 = new Dungeon('Dungeon 1', 1, [monster1, monster2]);
