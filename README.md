<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS-Project-BoardApp
NestJS 백엔드 게시판 웹 서비스의 Angular+IONIC 프론트엔드 서버 페이지


## 🖥️ 프로젝트 소개 
- 기본적인 게시판 NestJS 백엔드 서버의 Angular+IONIC 클라이언트를 구현해보는 프로젝트 입니다.
- 개발 블로그를 통해 개념/과정을 상세히 확인 할 수 있습니다.
https://www.citefred.com/tags/nestjs
<br>

- `root/.env` 파일 작성이 필요합니다. 현재 AWS 연동 과정 진행으로 `RDS Bucket주소`, `AccessKey`, `SecretKey` 필요한 상태
- 발급 과정은 블로그의 정리 내용을 참고하시길 바랍니다. https://www.citefred.com/nestjs/21
```.env
# DATABASE 설정 정보
DB_HOST=본인의RDS주소
DB_PORT=3306
DB_USERNAME=본인의RDS계정명
DB_PASSWORD=본인의RDS계정비밀번호
DB_NAME=boardapp

# JWT Secret Key
JWT_SECRET=본인의JWT토큰암호화키
JWT_EXPIRATION=36000

# 서버
SERVER_PORT=3000
SERVER_HOST=localhost

# 로깅
LOG_LEVEL=info

# Kakao Login API
KAKAO_CLIENT_ID=본인의카카오클라이언트ID
KAKAO_CALLBACK_URL=본인의카카오콜백URL

# AWS Keys
AWS_ACCESS_KEY_ID=본인의AWS_AccessKey
AWS_SECRET_ACCESS_KEY=본인의AWS_SecretKey

# 외부 API관련 Key 등 필요 시 추가
```

## 🗄️ 서버 Github
- Backend Server 
https://github.com/citeFred/nestjs-board-app/
- Frontend Server(현재 페이지)
https://github.com/citeFred/nest-js-board-frontend

## 🕰️ 개발 기간
* 24.8 - 현재

### 🧑‍🤝‍🧑 맴버구성 
 - 김인용
   - 백엔드 : JWT 인증/인가, 게시판 기본 CRUD, 기능 추가 예정
   - 프론트엔드 : Angular IONIC 컴포넌트를 통한 CSR

### ⚙️ 개발 환경 
- **MainLanguage** : `TypeScript`
- **IDE** : `VSCode`
- **Framework** : `Angular`, `Ionic`
- **Database** : `MySQL@8.0`
- **Server** : `Express`

## 📌 주요 기능
#### 로그인
- JWT + Cookie 로그인
- 카카오 API 로그인

#### 회원가입
- 다음 주소 API 연동
- Bcrypt Password 해싱

#### 게시글
- 글 작성, 읽기, 수정, 삭제(CRUD)
- 게시판 카테고리 추가 기능(예정)
- 페이징처리 및 무한스크롤 기능(예정)

#### 댓글, 대댓글
- 댓글 작성, 읽기, 수정, 삭제(CRUD)(예정)

<br>

## 📌 About ANGULAR & IONIC
<h1 align="center">Angular - The modern web developer's platform</h1>

<p align="center">
  <img src="adev/src/assets/images/press-kit/angular_icon_gradient.gif" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <em>Angular is a development platform for building mobile and desktop web applications
    <br> using TypeScript/JavaScript and other languages.</em>
  <br>
</p>

<p align="center">
  <a href="https://angular.dev/"><strong>angular.dev</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/angular/angular/issues">Submit an Issue</a>
  ·
  <a href="https://blog.angular.dev/">Blog</a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://circleci.com/gh/angular/workflows/angular/tree/main">
    <img src="https://img.shields.io/circleci/build/github/angular/angular/main.svg?logo=circleci&logoColor=fff&label=CircleCI" alt="CI status" />
  </a>&nbsp;
  <a href="https://www.npmjs.com/@angular/core">
    <img src="https://img.shields.io/npm/v/@angular/core.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Angular on npm" />
  </a>&nbsp;
  <a href="https://discord.gg/angular">
    <img src="https://img.shields.io/discord/463752820026376202.svg?logo=discord&logoColor=fff&label=Discord&color=7389d8" alt="Discord conversation" />
  </a>
</p>

<p align="center">
  <a href="https://app.circleci.com/insights/github/angular/angular/workflows/default_workflow?branch=main">
    <img src="https://dl.circleci.com/insights-snapshot/gh/angular/angular/main/default_workflow/badge.svg" alt="InsightsSnapshot" />
  </a>
</p>

<hr>

## Documentation

Get started with Angular, learn the fundamentals and explore advanced topics on our documentation website.

- [Getting Started][quickstart]
- [Architecture][architecture]
- [Components and Templates][componentstemplates]
- [Forms][forms]
- [API][api]

<p align="center">
  <a href="#">
    <img alt="Ionic" src="https://github.com/ionic-team/ionic-framework/blob/main/.github/assets/logo.png?raw=true" width="60" />
  </a>
</p>

<h1 align="center">
  Ionic
</h1>

<p align="center">
  Ionic is an open source app development toolkit for building modern, fast, top-quality cross-platform native and Progressive Web Apps from a single codebase with JavaScript and the Web.
</p>
<p align="center">
  Ionic is based on <a href="https://www.webcomponents.org/introduction">Web Components</a>, which enables significant performance, usability, and feature improvements alongside support for popular web frameworks like <a href="https://angular.io/">Angular</a>, <a href="https://reactjs.com/">React</a>, and <a href="https://vuejs.org/">Vue</a>.

</p>

<p align="center">
  <a href="https://github.com/ionic-team/ionic-framework/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Ionic Framework is released under the MIT license." />
  </a>
  <a href="https://github.com/ionic-team/ionic-framework/blob/main/docs/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/Ionicframework">
    <img src="https://img.shields.io/twitter/follow/ionicframework.svg?label=Follow%20@IonicFramework" alt="Follow @IonicFramework">
  </a>
  <a href="https://ionic.link/discord">
    <img src="https://img.shields.io/discord/520266681499779082?color=7289DA&label=%23ionic&logo=discord&logoColor=white" alt="Official Ionic Discord" />
  </a>
</p>

<h2 align="center">
  <a href="https://ionicframework.com/docs/intro/cli">Quickstart</a>
  <span> · </span>
  <a href="https://ionicframework.com/docs/">
    Documentation
  </a>
  <span> · </span>
  <a href="https://github.com/ionic-team/ionic-framework/blob/main/docs/CONTRIBUTING.md">Contribute</a>
  <span> · </span>
  <a href="https://blog.ionicframework.com/">Blog</a>
  <br />
  Community:
  <a href="https://ionic.link/discord">Discord</a>
  <span> · </span>
  <a href="https://forum.ionicframework.com/">Forums</a>
  <span> · </span>
  <a href="https://twitter.com/Ionicframework">Twitter</a>
</h2>
<p> hello </p>
