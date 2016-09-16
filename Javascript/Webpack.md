# Webpack
### 웹팩이란?
> **모듈을 번들링하는 도구**, 의존성을 지닌 모듈을 추적하여 정적인 asset을 생성함  
유사한 모듈 번들러로 Browserify가 있음

### 웹팩의 강점
* .js파일 뿐만아니라 .css, .png 등 다양한 파일 형식의 번들링을 제공함  
![https://scotch.io/tutorials/getting-started-with-webpack-module-bundling-magic](../resources/webpack-power.png)
* 다른 모듈 번들러, 개선이 필요한 영역을 감시함

### 웹팩의 목적
* 의존성 트리를 몇 개의 덩어리로 분할함
* 최초 파일 로드 시간을 단축함
* 모든 정적인 asset들은 모듈이 될 수 있어야함
* 써드파티 라이브러리와 모듈들을 통합함
* 모듈 번들러의 거의 모든 부분들을 커스터마이징 할 수 있어야함
* 대규모 프로젝트에 적합함

### 웹팩의 설치
```
(sudo) npm install -g webpack
```

# 참고자료
* [Scotch.io - Getting Started with Webpack](https://scotch.io/tutorials/getting-started-with-webpack-module-bundling-magic)
