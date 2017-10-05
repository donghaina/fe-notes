# 如何使用composer

1. 全局安装composer
2. 使用国内镜像
3. 创建composer.json
4. 安装包
```shell
$ composer update
$ composer require catfan/Medoo
```

查找是否有这个包
```shell
$ composer search monolog
```
查看包的信息
```shell
$ composer show --all monolog/monolog
```
安装包：
```shell
$ composer require symfony/http-foundation
```
修改环境变量，获得laravel 命令
```shell
$ vi ~/.bash_profile
export PATH=~/.composer/vendor/bin:$PATH
```