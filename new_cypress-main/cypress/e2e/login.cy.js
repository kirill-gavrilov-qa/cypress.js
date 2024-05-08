describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Захожу на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввожу логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввожу пароль
         cy.get('#loginButton').click(); // Нажимаю войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю текст успешной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик
    })

     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввожу логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввожу пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст НЕуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик
    })

    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // Ввожу логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввожу пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст НЕ успешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик
    })

    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввожу логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввожу  верный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю текст 
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик
    })

    it('Проверка строчных буквnpx cypress open', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввожу логин с большими буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввожу  верный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст 
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю крестик
    })

    it('Проверка восстановления', function () {
        cy.visit('https://login.qa.studio/'); // Захожу на сайт
        cy.get('#forgotEmailButton').click(); // Нажимаю забыл пароль
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Проверяю текст 
        cy.get('#forgotForm > .header').should('be.visible'); // Текст виден пользователю
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click(); // Нажимаю отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю текст 
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    })
        
})