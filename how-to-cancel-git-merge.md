# 如何撤销一个merge操作
获取merge编号
```shell
$ git reset --hard
HEAD is now at c4d8b5e 推广大使
```
根据merge编号取消操作
```shell
$ git revert c4d8b5e
[master b5def9f] Revert "推广大使"
 1 file changed, 1 deletion(-)
```