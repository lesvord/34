class Quest {
  constructor(id, name, description, rewards) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rewards = rewards;
    this.isCompleted = false;
  }

  complete() {
    this.isCompleted = true;
    // Выполнение логики завершения квеста
  }
}

// Пример использования
const quest1 = new Quest(1, 'Quest 1', 'Complete the task', { experience: 100 });
quest1.complete();
