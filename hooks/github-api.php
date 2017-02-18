<?php

// Использовать это пространство имён
use Dredd\Hooks;

// Этот идентификатор используется в спецификациях в github-api.md
// Мы будем заменять его на лету на идентификатор,
// полученный после выполнения запроса на создание нового ресурса
const DEFAULT_GIST_ID = "a123456bcd";

// Это контекст теста со структурой данных,
// которые мы будем передавать между разными запросами
$scope = [
    'lastGistId' => ''
];

// В этом хуке мы вы перехватываем результат создания нового Gist ПОСЛЕ вызова
Hooks::after("Gists Collection > Creating new Gist", function (&$transaction) use (&$scope) {
    $scope['lastGistId'] = ''; // обнулим возможное значение из других тестов, выполненных ранее
    if (!isset($transaction->real->body)) { // если нет тела, считаем что тест не пройден
        $transaction->fail = true;

        return;
    }
    $body = json_decode($transaction->real->body, true); // раскодируем JSON в ассоциативный массив
    if (!isset($body['id'])) { // если не существует идентификатор созданного Gist, тест не пройден
        $transaction->fail = true;

        return;
    }
    $scope['lastGistId'] = $body['id']; // сохраним идентификатор в контекст для следующих тестов
});

// В этом хуке, ПЕРЕД вызовом API чтения, в нескольких местах подменим данные
// идентификатора Gist из документации на полученный при создании нового
Hooks::before("Gists Collection > Load a Gist", function (&$transaction) use (&$scope) {
    $transaction->expected->body = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->expected->body);
    $transaction->id = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->id);
    $transaction->request->uri = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->request->uri);
    $transaction->fullPath = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->fullPath);
});

// В этом хуке, ПЕРЕД вызовом API удаления, в нескольких местах подменим данные
// идентификатора Gist из документации на полученный при создании нового
Hooks::before("Gists Collection > Delete a Gist", function (&$transaction) use (&$scope) {
    $transaction->expected->body = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->expected->body);
    $transaction->id = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->id);
    $transaction->request->uri = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->request->uri);
    $transaction->fullPath = str_replace(DEFAULT_GIST_ID, $scope['lastGistId'], $transaction->fullPath);
});
