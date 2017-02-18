#!/usr/bin/env bash

yum -y clean all

# Зарегистрируем репозитории пакетов EPEL (для nodejs и npm) и webtatic (для php)
sudo rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

# Регистрируем репозитории для npm
sudo curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -

yum -y update

# Устанавливаем системные пакеты,
# менеджер зависимостей PHP composer,
# фреймворк тестирования API Dredd
# и фреймворк веб-приложений Express JS для прототипирования API
sudo yum -y install curl git nodejs npm php70w-cli --skip-broken \
&& curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/bin --filename=composer \
&& yum -y install gcc-c++ make \
&& sudo npm cache clean \
&& sudo npm install dredd -g \
&& sudo npm install express -g