// Импортируйте Phaser и создайте экземпляр игры
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// Функции preload, create и update будут содержать логику игры

function preload() {
    // Загрузка ресурсов игры (изображений, звуков и т.д.)
    this.load.image('character', 'images/character.png');
    this.load.image('map', 'includes/map.png');
    this.load.image('arrow_up', 'includes/arrow_up.png');
    this.load.image('arrow_down', 'includes/arrow_down.png');
    this.load.image('arrow_left', 'includes/arrow_left.png');
    this.load.image('arrow_right', 'includes/arrow_right.png');
    this.load.image('map', 'includes/map.png');
    this.load.image('player', 'includesplayer.png');
    
    
}

function create() {
    // Создание игровых объектов и настройка сцены
      map = this.add.image(0, 0, 'map').setOrigin(0);
    layer = this.physics.world.staticGroup();

    // Создание игровых объектов (персонаж, кнопки передвижения и другие элементы)

    player = this.physics.add.image(400, 300, 'character');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    // Добавление кнопок передвижения на экран
    const arrowUp = this.add.image(50, 500, 'arrow_up').setInteractive();
    arrowUp.on('pointerdown', () => movePlayer('up'));
    const arrowDown = this.add.image(50, 650, 'arrow_down').setInteractive();
    arrowDown.on('pointerdown', () => movePlayer('down'));
    const arrowLeft = this.add.image(10, 575, 'arrow_left').setInteractive();
    arrowLeft.on('pointerdown', () => movePlayer('left'));
    const arrowRight = this.add.image(90, 575, 'arrow_right').setInteractive();
    arrowRight.on('pointerdown', () => movePlayer('right'));

    // Добавление блока меню
    const menuContainer = this.add.container(0, 0);
    const chatButton = this.add.text(10, 10, 'Chat', { fontSize: '16px', fill: '#ffffff' });
    const myCharacterButton = this.add.text(10, 40, 'My Character', { fontSize: '16px', fill: '#ffffff' });
    const onlinePlayersButton = this.add.text(10, 70, 'Online Players', { fontSize: '16px', fill: '#ffffff' });
    menuContainer.add([chatButton, myCharacterButton, onlinePlayersButton]);
}



    
    

function update() {
    if (cursors.up.isDown && player.y > 0) {
        player.y -= 5;
        sendData({ x: player.x, y: player.y });
    } else if (cursors.down.isDown && player.y < game.config.height) {
        player.y += 5;
        sendData({ x: player.x, y: player.y });
    }

    if (cursors.left.isDown && player.x > 0) {
        player.x -= 5;
        sendData({ x: player.x, y: player.y });
    } else if (cursors.right.isDown && player.x < game.config.width) {
        player.x += 5;
        sendData({ x: player.x, y: player.y });
    }
}

// Получение данных о позиции других игроков от сервера
receiveData(function(data) {
    // Обновление позиции других игроков на игровой карте
    // Ваш код для обновления позиции других игроков
});






// game.js (continued)

function movePlayer(direction) {
    // Обновление позиции персонажа на сервере
    // Обновление позиции персонажа в базе данных MySQL

    // Изменение позиции персонажа на игровой карте
    const speed = 5;
    switch (direction) {
        case 'up':
            player.y -= speed;
            break;
        case 'down':
            player.y += speed;
            break;
        case 'left':
            player.x -= speed;
            break;
        case 'right':
            player.x += speed;
            break;
    }
}
// game.js (continued)

function sendMessageToChat(message) {
    // Отправка сообщения в чат на сервере
    // Отправка сообщения в базу данных MySQL
}

function addItemsToMap(items) {
    // Добавление предметов на игровую карту на сервере
    // Добавление предметов на игровую карту в базе данных MySQL
}

// Добавление обработчика отправки сообщения в чат
document.getElementById("send-message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("message-input").value;
    sendMessageToChat(message);
});

// Добавление обработчика добавления предметов на карту
document.getElementById("add-items-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const items = []; // Получение данных предметов из формы
    addItemsToMap(items);
});

// Дополнительные функции и обработчики для игрового меню и администрирования

// game.js (continued)

// Функция для обновления игровой карты на основе данных из базы данных

function updateMapFromDatabase() {
    // Получение данных о расположении игроков и предметов из базы данных
    // Обновление игровой карты на основе полученных данных
}

// Функция для обновления игровой карты на сервере

function updateMapOnServer() {
    // Отправка данных о расположении игрока на сервер
}

// Обработка нажатий клавиш для перемещения игрока по игровой карте

function handlePlayerMovement() {
    // Обработка нажатий клавиш и изменение координат игрока
    // Обновление игровой карты на сервере
}

// Обработчик нажатий клавиш

document.addEventListener("keydown", function(event) {
    // Обработка нажатий клавиш передвижения игрока
});

// Инициализация игровой карты и обновление её с заданным интервалом

function initGameMap() {
    // Инициализация игровой карты
    // Установка интервала для обновления карты
}

// Инициализация игры

function initGame() {
    // Инициализация игровых элементов
    // Инициализация игровой карты
}

// Запуск игры после полной загрузки страницы

window.addEventListener("load", function() {
    initGame();
});
// game.js (continued)

// Функция для обновления списка игроков онлайн

function updateOnlinePlayers(players) {
    const onlinePlayersList = document.getElementById("online-players-list");
    onlinePlayersList.innerHTML = "";

    players.forEach(player => {
        const playerItem = document.createElement("li");
        playerItem.textContent = player.name;
        onlinePlayersList.appendChild(playerItem);
    });
}

// Функция для загрузки списка игроков онлайн с сервера

function loadOnlinePlayers() {
    const url = "php/get_online_players.php";

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}
// game.js (continued)

// Обработка события нажатия клавиш для перемещения игрока

function handlePlayerMovement() {
    const cursors = game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        movePlayer("left");
    } else if (cursors.right.isDown) {
        movePlayer("right");
    } else if (cursors.up.isDown) {
        movePlayer("up");
    } else if (cursors.down.isDown) {
        movePlayer("down");
    }
}

// Функция для отправки данных о перемещении игрока на сервер

function sendPlayerMovement(direction) {
    const url = "php/update_player_position.php";
    const data = new FormData();
    data.append("direction", direction);

    fetch(url, {
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// Функция для перемещения игрока на клиентской стороне

function movePlayer(direction) {
    // Изменение позиции игрока на карте в соответствии с выбранным направлением
    // ...

    sendPlayerMovement(direction);
}
// game.js (continued)

// Обработка события отправки сообщения в чат

function handleChatSubmission() {
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value;

    if (message.trim() !== "") {
        sendMessage(message);
        chatInput.value = "";
    }
}

// Функция для отправки сообщения в чат на сервер

function sendMessage(message) {
    const url = "php/send_message.php";
    const data = new FormData();
    data.append("message", message);

    fetch(url, {
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// Функция для обновления чата с новыми сообщениями

function updateChat(messages) {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML = "";

    messages.forEach(message => {
        const chatMessage = document.createElement("div");
        chatMessage.textContent = message;
        chatContainer.appendChild(chatMessage);
    });
}
// game.js (continued)

// Обработка события отправки предмета на карту администратором

function handleItemPlacement() {
    const itemXInput = document.getElementById("item-x-input");
    const itemYInput = document.getElementById("item-y-input");
    const itemNameInput = document.getElementById("item-name-input");

    const item = {
        x: parseInt(itemXInput.value),
        y: parseInt(itemYInput.value),
        name: itemNameInput.value
    };

    placeItem(item);
}

// Функция для отправки данных о предмете на карту на сервер

function placeItem(item) {
    const url = "php/place_item.php";
    const data = new FormData();
    data.append("item", JSON.stringify(item));

    fetch(url, {
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error));
}
// game.js (continued)

// Функция для загрузки списка предметов на карту с сервера

function loadMapItems() {
    const url = "php/get_map_items.php";

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

// Функция для отображения предметов на карту

function displayMapItems(items) {
    items.forEach(item => {
        // Отобразить предмет на карту
        // ...
    });
}
// game.js (continued)

// Обработка события взаимодействия с предметом

function handleItemInteraction(item) {
    // Ваш код обработки взаимодействия с предметом
    // ...
}

// Функция для проверки столкновения игрока с предметами на карте

function checkItemCollision() {
    const playerBounds = player.getBounds();
    const items = getMapItems(); // Получение списка предметов с сервера

    items.forEach(item => {
        const itemBounds = item.getBounds();

        if (Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, itemBounds)) {
            handleItemInteraction(item);
        }
    });
}
// game.js (continued)

// Создание игровой сцены

class GameScene extends Phaser.Scene {
    // ...

    update() {
        // Обновление игровой логики
        checkItemCollision(); // Проверка столкновения игрока с предметами
        // ...
    }

    // ...
}
// game.js (continued)

// Обработка события отображения информации о персонаже

function handleShowCharacterInfo() {
    const characterInfo = getCharacterInfo(); // Получение информации о персонаже с сервера

    // Отображение информации о персонаже
    // ...
}
// game.js (continued)

// Функция для отправки сообщения в чат

function sendMessage(message) {
    const url = "php/send_message.php";

    const data = {
        message: message
    };

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// Функция для получения сообщений чата с сервера

function getChatMessages() {
    const url = "php/get_chat_messages.php";

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

// Функция для отображения сообщений чата

function displayChatMessages(messages) {
    // Отобразить сообщения чата
    // ...
}
// game.js (continued)

// Функция для отправки команды администрирования на сервер

function sendAdminCommand(command) {
    const url = "php/send_admin_command.php";

    const data = {
        command: command
    };

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}
// game.js (continued)

// Функция для добавления предмета в игровую карту

function addGameItem(x, y, item) {
    const url = "php/add_game_item.php";

    const data = {
        x: x,
        y: y,
        item: item
    };

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}
window.addEventListener('load', function () {
    var config = {
        type: Phaser.AUTO,
        parent: 'game-container',
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload() {
        // Preload game assets (sprites, tilemaps, etc.)
        // ...

        // Load game map data from the server
        this.load.on('complete', function () {
            loadGameMap();
        }, this);
    }

    function create() {
        // Create game objects (player, NPCs, etc.)
        // ...
    }

    function update() {
        // Update game logic (player movement, collision detection, etc.)
        // ...
    }

    function loadGameMap() {
        // Fetch game map data from the server
        fetch('game_map.php')
            .then(function (response) {
                return response.json();
            })
            .then(function (gameMapData) {
                // Process the game map data and create the game map using Phaser
                // ...
            })
            .catch(function (error) {
                console.error('Failed to load game map:', error);
            });
    }
});
// ...

function updateCharacterInfo(name, class) {
    // Отправка данных на сервер для обновления информации о персонаже
    var data = {
        name: name,
        class: class
    };

    fetch('update_character.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        console.log(responseData);
    })
    .catch(function(error) {
        console.error('Failed to update character info:', error);
    });
}

// ...

// Пример обновления информации о персонаже (вызывается при необходимости)
var newName = 'New Name';
var newClass = 'Warrior';

updateCharacterInfo(newName, newClass);

// ...
<?php
session_start();

// Проверка, аутентифицирован ли пользователь
if (!isset($_SESSION["user_id"])) {
    // Пользователь не аутентифицирован, перенаправляем на страницу входа
    header("Location: login.php");
    exit();
}

// ...
?>
// ...

function getChatMessages() {
    // Запрос на сервер для получения сообщений чата
    fetch('get_chat_messages.php')
        .then(function(response) {
            return response.json();
        })
        .then(function(chatMessages) {
            // Обработка полученных сообщений чата и их отображение
            // ...
        })
        .catch(function(error) {
            console.error('Failed to get chat messages:', error);
        });
}

// ...

// Пример получения сообщений чата (вызывается при необходимости)
getChatMessages();

// ...
// ...

function getOnlinePlayers() {
    // Запрос на сервер для получения списка игроков онлайн
    fetch('online_players.php')
        .then(function(response) {
            return response.json();
        })
        .then(function(onlinePlayers) {
            // Обработка полученного списка игроков онлайн и их отображение
            // ...
        })
        .catch(function(error) {
            console.error('Failed to get online players:', error);
        });
}

// ...

// Пример получения списка игроков онлайн (вызывается при необходимости)
getOnlinePlayers();

// ...
// ...

function displayChat() {
    // Отображение чата
    // ...
}

function displayCharacterInfo() {
    // Отображение информации о персонаже
    // ...
}

function displayOnlinePlayers() {
    // Отображение списка игроков онлайн
    // ...
}

// ...

// Пример вызова функций для отображения блока меню (вызывается при необходимости)
displayChat();
displayCharacterInfo();
displayOnlinePlayers();

// ...
// ...

function adminAction(action) {
    // Отправка запроса администрирования на сервер
    var data = {
        action: action
    };

    fetch('admin.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        console.log(responseData);
    })
    .catch(function(error) {
        console.error('Admin action failed:', error);
    });
}

// ...

// ...

function manageChat() {
    // Администрирование чата
    // ...
}

function addItems() {
    // Добавление предметов в игровую карту
    // ...
}

// ...

// Пример вызова функций для выполнения действий администрирования (вызывается при необходимости)
manageChat();
addItems();

// ...
// ...

// Обработка перемещения игрока по карте
function movePlayer(direction) {
    // Отправка запроса на сервер с информацией о перемещении игрока
    var data = {
        direction: direction
    };

    fetch('move_player.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        // Обработка ответа от сервера и обновление игровой карты
        // ...
    })
    .catch(function(error) {
        console.error('Failed to move player:', error);
    });
}

// ...

// Пример вызова функции для перемещен

// ...

function sendMessage(message) {
    // Отправка сообщения чата на сервер
    var data = {
        message: message
    };

    fetch('send_message.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        // Обработка ответа от сервера (например, обновление отображения чата)
        // ...
    })
    .catch(function(error) {
        console.error('Failed to send message:', error);
    });
}

// ...
// Обработка нажатий клавиш
function handleKeyboardInput(event) {
    switch (event.keyCode) {
        case 37: // Левая стрелка
            moveCharacter('left');
            break;
        case 38: // Верхняя стрелка
            moveCharacter('up');
            break;
        case 39: // Правая стрелка
            moveCharacter('right');
            break;
        case 40: // Нижняя стрелка
            moveCharacter('down');
            break;
    }
}

// Передвижение персонажа
function moveCharacter(direction) {
    // Обновление координат персонажа на игровой карте
    // ...

    // Обновление координат в базе данных MySQL
    // ...
}

// Привязка обработчика событий к нажатию клавиш
document.addEventListener('keydown', handleKeyboardInput);
import { sendData, receiveData } from './network.js';
import { sendMessage, receiveMessage } from './chat.js';
