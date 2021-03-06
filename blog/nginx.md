### 常用的nginx命令
> nginx作为Web服务器的基础知识，前端应该了解一些重要的Nginx命令。

**下列命令默认需要管理员权限**

#### 0.安装
先更新一下镜像源，如果长时间没有响应[参考这里](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)替换镜像源
+ 更新
```
brew update
```
+ 查看信息

```
brew search nginx
```
+ 安装

```
brew install nginx
```
+ 操作

```
# 启动
brew services start nginx
# 重启
brew services restart nginx
# 暂停
brew services stop nginx

# 重新加载config文件 不成功就重启
nginx -s reload
```
+ 查看安装目录
```
brew info nginx 
```

#### 1.启动Nginx (非 brew 安装)
如果是 brew 安装参考上面的方式
```
service nginx start
```
如果您使用的是基于systemd的版本，例如Ubuntu Linux 16.04LTS及更高版本，请systemctl在命令中使用，如下所示：
```
systemctl start nginx
```
#### 2.停止Nginx
终止所有nginx系统进程
```
service nginx stop
systemctl stop nginx
```
快速终止进程
```
killall -9 nginx
```
#### 3.退出Nginx
```
service nginx quit
systemctl quit nginx

```
无效的时候可以用 killall

```
killall nginx
```

#### 4.重启Nginx
```
service nginx restart
systemctl restart nginx
```
#### 5.重新加载Nginx
当你修改配置文件后可以使用此命令，使修改生效
```
service nginx reload
systemctl reload nginx
```
#### 6.查看Nginx服务状态
```
service nginx status
systemctl status nginx
```

#### 6.测试Nginx配置
修改配置reload后看服务启动是否正常
```
nginx -t
```
#### 7.检查Nginx版本
```
service nginx -v
systemctl -v nginx
```
#### 8.显示命令帮助
```
service nginx -h
systemctl -h nginx
```


#### 单个项目配置文件详解
```
//端口的方式
server {
        listen  80;
        location / {
            root   /home/xt_one/fork/vue-project/vue-blog2/dist;
            index  index.html index.htm;

            #禁止IP访问
            #deny 112.97.160.1/200 1-200 都不能访问

            #白名单 先出现的设置会覆盖后出现的设置allow覆盖deny
            #allow 112.97.160.1/200;
            #deny all;剩下的都不能访问
        }

        #也可配置成网址
        #error_page 404  http://xxx.com;
        error_page 404  /404.html;
        location = /404.html { 
          root /var/www/html;
        }
        # =是精确匹配符 可以设置外部用户是否能够访问某个文件或文件夹,正则
        location  ~\.js$ { 
          deny all
        }
 }


```

域名的方式以及反向代理
+ proxy_set_header :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。
+ proxy_connect_timeout:配置Nginx与后端代理服务器尝试建立连接的超时时间。
+ proxy_read_timeout : 配置Nginx向后端服务器组发出read请求后，等待相应的超时时间。
+ proxy_send_timeout：配置Nginx向后端服务器组发出write请求后，等待相应的超时时间。
+ proxy_redirect :用于修改后端服务器返回的响应头中的Location和Refresh。
```
server{
        listen 80;
        server_name xxx.com;
        location / {
          root /usr/share/nginx/pc;
          if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
              root /usr/share/nginx/mobile;
          }
          index index.html;
        }
}
```

#### Gzip
```
http{
  ##
  # Gzip Settings
  ##

  gzip on;
  gzip_disable "msie6";

  # 是否在http header中添加Vary: Accept-Encoding，建议开启
  # gzip_vary on;
  # gzip_proxied any;
  # gzip_comp_level 6;
  # gzip_buffers 16 8k;
  # gzip_http_version 1.1;
  # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
  # nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩
  # gzip_static on|off;
}
```