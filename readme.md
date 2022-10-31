### build npm evn
[link](https://blog.csdn.net/zaq977684/article/details/126400630)
```text
  npm init
  npm install <package>
  工具 -> 构建npm
  modify project.config.json 
    setting {
      ...
      "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
      ]
    }
 ```


### add package
npm i <pkgname> --S --production

### gen js code
protoc --js_out=import_style=commonjs:./ *.proto