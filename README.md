# angular-tutorial

## 챕터02

### 컴파일
- ES3이 기본으로 컴파일
```
$ tsc class-extend.ts
```
```
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));

```

- ES6으로 컴파일하기

```
$ tsc class-extend.ts --target es6
```
```
class Person {
}
class Employee extends Person {
}
```

- ES6로 수정

```
tsc class-es6.ts --target es6
```
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```