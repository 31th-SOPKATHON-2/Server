# 👶잼민어 번역기

---

![image](https://user-images.githubusercontent.com/72034311/202852522-6a4efa0e-2c22-430e-b8ca-e3c9255d9a56.png)

> 신조어와 유행어를 익숙한 표현으로 번역해주는 서비스.
> (야 너두 잼민이 될 수 있어!)

## API Docs

### 🔗 [API Docs](https://www.notion.so/19eb999f9aa747b5843c2e21b61443de?v=e0ad37d72fdc40598556002c413f41a0)

## ERD
![image](https://user-images.githubusercontent.com/72034311/202863101-49dedec9-1d02-4806-960d-66055e086fcf.png)

## Architecture
![image](https://user-images.githubusercontent.com/72034311/202863136-919e8404-0fa7-4dc4-bc96-119b6e822290.png)

## Role

|   Route    |          Func          |  Role  | Done |
| :--------: | :--------------------: | :----: | :--: |
| TRANSLATOR |    잼민어 번역하기     | 정준서 |      |
|    QUIZ    | 퀴즈 문제 및 정답 주기 | 김경린 |      |

<hr>
</br>

# Commit Convention

-   [Commit Convention]
    git commit message convention

`ex) Feat: User API 파일 추가`

```ruby
- Chore : 코드 수정, 내부 파일 수정
- Feat : 새로운 기능 구현
- Add : Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시
- Fix : 버그, 오류 해결
- Del : 쓸모없는 코드 삭제
- Docs : README나 WIKI 등의 문서 개정
- Move : 프로젝트 내 파일이나 코드의 이동
- Rename : 파일 이름의 변경
- Merge: 다른브렌치를 merge하는 경우
- Style : 코드가 아닌 스타일 변경을 하는 경우
- Init : Initial commit을 하는 경우
```

# Code Convention

> 💡 **동료들과 말투를 통일하기 위해 컨벤션을 지정합니다.**
> 오합지졸의 코드가 아닌, **한 사람이 짠 것같은 코드**를 작성하는 것이 추후 유지보수나 협업에서 도움이 됩니다. 내가 코드를 생각하면서 짤 수 있도록 해주는 룰이라고 생각해도 좋습니다!

<details>
<summary>명명규칙(Naming Conventions)</summary>
<div markdown="1">

1. 이름으로부터 의도가 읽혀질 수 있게 쓴다.

-   ex)

    ```jsx
    // bad
    function q() {
        // ...stuff...
    }

    // good
    function query() {
        // ..stuff..
    }
    ```

2. 오브젝트, 함수, 그리고 인스턴스에는 `camelCase`를 사용한다.

-   ex)
    ```jsx
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

3. 클래스나 constructor에는 `PascalCase`를 사용한다.

-   ex)
    ```jsx
    // bad
    function user(options) {
        this.name = options.name;
    }

    const bad = new user({
        name: 'nope',
    });

    // good
    class User {
        constructor(options) {
            this.name = options.name;
        }
    }

    const good = new User({
        name: 'yup',
    });
    ```

4. 함수 이름은 동사 + 명사 형태로 작성한다.
   ex) `postUserInformation( )`
5. 약어 사용은 최대한 지양한다.
6. 이름에 네 단어 이상이 들어가면 팀원과 상의를 거친 후 사용한다
 </div>
 </details>

<details>
<summary>블록(Blocks)</summary>
<div markdown="1">

1. 복수행의 블록에는 중괄호({})를 사용한다.

-   ex)
    ```jsx
    // bad
    if (test)
      return false;

    // good
    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // bad
    function() { return false; }

    // good
    function() {
      return false;
    }

    ```

2. 복수행 블록의 `if` 와 `else` 를 이용하는 경우 `else` 는 `if` 블록 끝의 중괄호( } )와 같은 행에 위치시킨다.

-   ex)
        ```java
        // bad
        if (test) {
          thing1();
          thing2();
        }
        else {
          thing3();
        }

        // good
        if (test) {
          thing1();
          thing2();
        } else {
          thing3();
        }

        ```
    </div>
    </details>

<details>
<summary>코멘트(Comments)</summary>
<div markdown="1">

1. 복수형의 코멘트는 `/** ... */` 를 사용한다.

-   ex)
    ```jsx
    // good
    /**
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {
        // ...stuff...

        return element;
    }
    ```

2. 단일 행의 코멘트에는 `//` 을 사용하고 코멘트를 추가하고 싶은 코드의 상부에 배치한다. 그리고 코멘트의 앞에 빈 행을 넣는다.

-   ex)
        ```jsx
        // bad
        const active = true; // is current tab

        // good
        // is current tab
        const active = true;

        // good
        function getType() {
          console.log('fetching type...');

          // set the default type to 'no type'
          const type = this._type || 'no type';

          return type;
        }

        ```
    </div>
    </details>

<details>
<summary>문자열(Strings)</summary>
<div markdown="1">

1. 문자열에는 싱크쿼트 `''` 를 사용한다.

-   ex)
    ```jsx
    // bad
    const name = 'Capt. Janeway';

    // good
    const name = 'Capt. Janeway';
    ```

2. 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 `template strings`를 이용한다.

-   ex)
        ```jsx
        // bad
        function sayHi(name) {
          return 'How are you, ' + name + '?';
        }

        // bad
        function sayHi(name) {
          return ['How are you, ', name, '?'].join();
        }

        // good
        function sayHi(name) {
          return `How are you, ${name}?`;
        }

        ```
    </div>
    </details>

<details>
<summary>함수(Functions)</summary>
<div markdown="1">

1. 화살표 함수를 사용한다.

-   ex)
    ```jsx
    var arr1 = [1, 2, 3];
    var pow1 = arr.map(function (x) {
        // ES5 Not Good
        return x * x;
    });

    const arr2 = [1, 2, 3];
    const pow2 = arr.map((x) => x * x); // ES6 Good
    ```

</div>
</details>

<details>
<summary>조건식과 등가식(Comparison Operators & Equality)</summary>
<div markdown="1">

1. `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용한다.
2. 단축형을 사용한다.

-   ex)
    ```jsx
    // bad
    if (name !== '') {
        // ...stuff...
    }

    // good
    if (name) {
        // ...stuff...
    }
    ```

3. 비동기 함수를 사용할 때 `Promise`함수의 사용은 지양하고 `async`, `await`를 쓰도록 한다
 </div>
 </details>

<hr>
</br>

# Branch

<aside>
🌱 git branch 전략

`main branch` : 배포 단위 branch

`develop branch` : 주요 개발 branch, main merge 전 거치는 branch

`feature branch`: 각자 개발 branch

-   할 일 issue 등록 후 본인의 닉네임 branch 생성 후 작업
    -   ex) feature/'닉네임'
-   해당 branch 작업 완료 후 PR 보내기
    -   항상 local에서 충돌 해결 후 → remote에 올리기
    -   reviewer에 서로 tag후 code-review
    -   comment 전 merge 불가!

### branch 구조

```jsx
- main
- develop
- feature
   ├── kkl
   └── jjs
```

</aside>
<hr>
</br>

## Project Foldering

```
🗂 prisma
    - schema.prisma
🗂 src
    🗂 config
        - index.ts
    🗂 controller
        - index.ts
        - translatorController.ts
        - quizController.ts
    🗂 constants
        - index.ts
        - response.ts
        - responseMessage.ts
        - statusCode.ts
    🗂 route
        - index.ts
        - translatorRouter.ts
        - quizRouter.ts
    🗂 services
        - index.ts
        - translatorService.ts
        - quizService.ts
    - index.ts
```

<hr>

</br>

## package.json

```json
{
    "name": "soptkathon",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
        "dev": "nodemon",
        "build": "tsc && node dist",
        "db:pull": "npx prisma db pull",
        "db:push": "npx prisma db push",
        "generate": "npx prisma generate"
    },
    "devDependencies": {
        "@types/express": "^4.17.14",
        "@types/node": "^18.11.9",
        "nodemon": "^2.0.20",
        "prettier": "2.7.1"
    },
    "dependencies": {
        "@prisma/client": "^4.6.1",
        "express": "^4.18.2",
        "prisma": "^4.6.1"
    }
}
```

<hr>

</br>

## schema.prisma
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Example {
  id                           Int    @id @default(autoincrement())
  text                         String @db.VarChar(50)
  quiz_id                      Int
  Quiz_Example_quiz_idToQuiz   Quiz   @relation("Example_quiz_idToQuiz", fields: [quiz_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "example_quiz_id_fk")
  Quiz_ExampleToQuiz_answer_id Quiz[] @relation("ExampleToQuiz_answer_id")
}

model Quiz {
  id                              Int       @id @default(autoincrement())
  question                        String    @db.VarChar(100)
  answer_id                       Int?
  Example_ExampleToQuiz_answer_id Example?  @relation("ExampleToQuiz_answer_id", fields: [answer_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "quiz_example_id_fk")
  Example_Example_quiz_idToQuiz   Example[] @relation("Example_quiz_idToQuiz")
}

model Translator {
  input       String  @id @db.VarChar(50)
  result      String? @db.VarChar(100)
  description String  @db.VarChar(500)
  example     String? @db.VarChar(500)
}

```
