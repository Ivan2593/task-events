/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let myButton = document.createElement('button');
    myButton.innerHTML = 'Удали меня';
    document.body.insertAdjacentElement('beforeend', myButton);
    myButton.addEventListener('click', function () {
        myButton.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.insertAdjacentHTML('beforeend', '<ul></ul>');
    let list = document.body.querySelector('ul');
    for (let i = 0; i < arr.length; i++) {
        list.insertAdjacentHTML('beforeend', '<li>' + arr[i] + '</li>');
    }
    [...document.body.querySelectorAll('li')].forEach(($li) => {
        $li.addEventListener('mouseover', function () {
            $li.setAttribute('title', $li.innerHTML);
        });
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<a href="https://tensor.ru/">tensor</a>',
    );
    let link = document.body.querySelector('a');
    link.addEventListener('click', function (e) {
        if (!link.innerHTML.includes(link.href)) {
            e.preventDefault();
        }
        link.innerHTML = link.innerHTML + ' ' + link.href;
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );
    let $ul = document.body.querySelector('ul');
    $ul.addEventListener('click', (e) => {
        e.target.innerHTML += '!';
    });
    document.body
        .querySelector('button')
        .addEventListener('click', function () {
            $ul.insertAdjacentHTML('beforeend', '<li>Пункт</li>');
        });
}
