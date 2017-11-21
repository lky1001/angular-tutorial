# angular-tutorial

## 챕터 05
### 프로젝트 생성
```
// prefix 옵션
// 컴포넌트 생성시 selector에 붙여줄 접두어. 기본은 app
$ ng new mouse-pos-logger --prefix mpl
```

### 서비스 생성
```
$ cd mouse-pos-logger
$ ng g service my-special-logger
  create src/app/my-special-logger.service.spec.ts (430 bytes)
  create src/app/my-special-logger.service.ts (121 bytes)
```
- 타입스크립트는 접근자를 설정 안하면 기본 public

### 로그 레벨 enum 생성
```
$ ng g enum log-level
  create src/app/log-level.enum.ts (25 bytes)
```

### 시간 포맷터 설치
```
$ npm i --save date-fns
```

### 의존성 주입
- @Injectable
- @Inject
- @InjectionToken

### logger-service 클래스, another-logger 서비스 생성
```
$ ng g class logger-service
  create src/app/logger-service.ts (31 bytes)
$ ng g service another-logger
  create src/app/another-logger.service.spec.ts (417 bytes)
  create src/app/another-logger.service.ts (119 bytes)
```