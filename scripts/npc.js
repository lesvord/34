class NPC {
  constructor(name, quests) {
    this.name = name;
    this.quests = quests;
  }

  giveQuest(quest) {
    this.quests.push(quest);
  }
}

// Пример использования
const npc1 = new NPC('NPC 1', []);
const quest1 = new Quest(1, 'Quest 1', 'Complete the task', { experience: 100 });
npc1.giveQuest(quest1);
