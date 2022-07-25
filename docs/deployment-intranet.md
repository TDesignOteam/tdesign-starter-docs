# 内网部署

## Devcloud 部署

如果只是想在本地启动项目，让产品同学预览的话，由于网络隔离，本机 ip 无法被其他人访问，此时可以在 DevCloud 上直接运行 `npm run dev:linux`，等待服务器启动端口号， 直接访问
DevCloud 的 IP + port 即可访问。
举个例子：
若 ip 地址是 9.135.229.172， port：3001， 则访问 http://9.135.229.172:3001 即可。

如果您还没有 DevCloud 权限，可点击[申请](http://devcloud.woa.com/#!/cvm/cvm_man?page=1&size=10)

## CDN-GO 部署

orange-ci 中内置 CDN-Go 插件，可以通过触发 Git hook 将构建资源推送到 CDN-Go 上，以达到预览效果, 这个功能是 code review 最好的伙伴。
如何开启呢？ 本项目已经内置了 orange-ci 的配置文件 `orange-ci`如下

```yml
$:
  push:
    - stages:
      - *install
      - name: build
        image: $DOCKER_CACHE_IMAGE_NAME
        commands:
        - cp -r "$NODE_PATH" ./node_modules
        - npm run build
      - name: cdn-go
        type: cdn:go
        options:
          dist: dist
          // 开启 preview true 则链接有效期为 7 天
          preview: true
        exports:
          cdnUrl: CDN_URL
      - name: show CDN_URL
        script: echo $CDN_URL
```

只需要在工蜂项目中授予 orange-ci master 即可开启这项功能，更多可点击[这里](http://docs.orange-ci.oa.com/quick-start.html)
