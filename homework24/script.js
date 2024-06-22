let users = []; // массив для хранения объектов карточек пользователей
let idNum = 0; // изменяемая переменная, хранящая идентификатор создаваемой карточки

const form = document.getElementById('userForm');
const placeForCards = document.querySelector('.userCardsContainer');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const card = {
        id: idNum++,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value
    };
    users.push(card);
    console.log('Создана карточка пользователя. Имя: ' + card.firstName + ', Фамилия: ' + card.lastName + ', Возраст: ' + card.age + ', id: ' + card.id);
    
    rerender(); // 
    form.reset(); // удаляем данные из полей
});

function rerender() {
    placeForCards.innerHTML = ''; // удаляем все старые карточки

    users.forEach(function(user, index) {
        const newCard = document.createElement('div');
        newCard.classList.add('userCard');
        newCard.setAttribute('data-id', user.id);

        const cardFirstName = document.createElement('p');
        cardFirstName.innerText = 'Имя: ' + user.firstName;
        
        const cardLastName = document.createElement('p');
        cardLastName.innerText = 'Фамилия: ' + user.lastName;
        
        const age = document.createElement('p');
        age.innerText = 'Возраст: ' + user.age;

        newCard.appendChild(cardFirstName);
        newCard.appendChild(cardLastName);
        newCard.appendChild(age);
        placeForCards.appendChild(newCard);

        // удаление
        newCard.addEventListener('dbclick', function() {
            // находим индекс карточки и удаляем из массива
            users.splice(index, 1);
            rerender(); 
        });
    });
}
