# <img src="https://use.fontawesome.com/releases/v5.0.9/svgs/brands/app-store-ios.svg" width="24px"> API를 이용한 어플리케이션 제작 예시


![node (scoped)](https://img.shields.io/badge/node-%3E=9.8.0-brightgreen.svg)
![vue-cli (scoped)](https://img.shields.io/badge/vue--cli-3.0.0-brightgreen.svg)


해당 repository는 Twitch API를 이용한 어플리케이션 작성의 예시코드입니다.

기술 스택을 먼저 정한후 순수 기술구현에 포커스를 맞추었습니다. 따라서 서비스로 불완전한 기능을 내포하고 있습니다.

## Usage
### Common
[Node.js](https://nodejs.org/en/)를 인스톨 합니다.
### Server
1. Twitch.tv와 통신에 필요한 client-id가 담긴 환경 파일을 생성합니다. client-id는 [이곳에서](https://dev.twitch.tv) 발급받을 수 있습니다.

```
cp ./server/config/config.default.js ./server/config/config.js
vi ./server/config/config.js
```
2. 서버 구동에 필요한 패키지를 설치하고 실행합니다.

```
npm i -g nodemon
cd ./server/npm install
npm run dev
```

### Client
1. ./client/config 의 dev.env.js와 prod.env.js에 각각 개발용, 프로덕션용 api endpoint를 입력합니다. 기본은 http://localhost:3000/api 입니다.

2. 서버 구동에 필요한 패키지를 설치하고 실행합니다. build할 경우 ./client/dist에 결과물이 생성됩니다. 빌드된 html은 어떤 웹서버에서든지 이용 가능합니다.
```
cd ./client/npm install
npm run dev
or
npm run build
```


## References
### Server
[<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWvcydc6q355c0sUW47uMF0s3JugZgKQQzildOyHW7AFJoQfc" height="42px">](https://nodejs.org/en/)

자바스크립트 엔진에 기반해 만들어진 서버 사이드 플랫폼.

[Express.js](https://expressjs.com/)

대중적인 웹서버 프레임워크

### Client
[<img src="https://vuetifyjs.com/static/vuetify-logo-300.png" height="42px">](https://vuetifyjs.com/en/)

프론트엔드 메터리얼 컴포넌트 프레임워크


[<img src="https://vuejs.org/images/logo.png" height="42px">](https://vuejs.org/)

js 프론트엔드 프레임 워크


[<img src="https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" height="42px">](https://pugjs.org/api/getting-started.html)

HTML 템플릿 엔진


