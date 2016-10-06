# PHP
### php란?
> 자바스크립트와 유사한 포지션의 프로그래밍 언어, html 문법과 결합되어 자주 사용됨

### php랑 자바스크립트의 차이점?
* 실행되는 곳:
  * php는 서버 단계에서 실행되어 브라우저에는 실행 결과값이 표시됨
  * 자바스크립트는 브라우저 단계에서 실행되기 때문에 브라우저의 지원 현황에 따라 결과가 차이가 난다
  * php의 장점 -> 브라우저와 관계없는 결과 출력

## 기본 문법
### php문 사용
```php
<?php
  //원하는 구문을 적는다.
?>
```

### 출력
```php
<?php
  //세미콜론(;)을 넣어주어야한다.
  //구문별로 닷(.)으로 구분지어줄 수 있다.
  echo "특정 구문";
  echo "구문1" . "구문2" . "구문3";

  print "특정 구문";
?>
```

### 변수 선언
```php
<?php
  //$변수이름
  $myName = "Noah";
?>
```

### 주석
```php
<?php
  //자바스크립트와 동일하게 슬래시 두개(//)를 사용한다.
  // This is comment!
?>
```

### 연산자
```php
<?php
  //비교연산자
  > //크다
  < //작다
  <=  //작거나 같다
  >=  //크거나 같다
  ==  //같다
  !=  //다르다
?>
```

### 흐름제어문
```php
<?php
//if문
  if (원하는 조건) {
    //실행될 구문
  } else {
    //실행될 구문
  }

//switch문
  //방법1
  switch (원하는 조건) {
    case 0:
      //실행될 구문
      break;
    case 1:
      //실행될 구문
      break;
    default:
      //실행될 구문
  }

  //방법2
  switch (원하는 조건):
    case 0:
      //실행될 구문
      break;
    case 1:
      //실행될 구문
      break;
    default:
      //실행될 구문
  endswitch;

//for문
  for (반복변수=시작조건; 반복변수 < 종료조건; 반복조건) {
    //실행될 구문
  }

  for ($leap = 2004; $leap < 2050; $leap = $leap + 4) {
    echo "<p>$leap</p>";
  }

//foreach문
  foreach (반복대상 as 개별요소로 사용될 이름) {
    //실행될 구문
  }

  $languages = array("HTML/CSS", "JavaScript", "PHP", "Python", "Ruby");
  foreach($languages as $lang) {
    print "<p>$lang</p>";
  }

//while문
  //방법1
  while (반복조건) {
    //실행될 구문
  }

  //방법2
  while (반복조건):
    //실행될 구문
  endwhile;

  //do-while문
  do {
    //실행될 구문
  } while (반복조건);
?>
```

### 배열
```php
<?php
  //선언
  $array = array(요소1, 요소2, 등등);
  $array = array(키1=>값1, 키2=>값2, 등등);

  //요소 접근
  $array[인덱스]
  $array{인덱스}

  //요소 제거
  unset(배열 전체 or 특정 배열 요소);
  unset($array);
  unset($array[0]);
?>
```

### string함수
```php
<?php
//strlen
//string의 길이를 반환
strlen("string");

//substr
//string을 자를 수 있음
substr("string", 시작인덱스, 자를 문자 갯수);

//strtoupper && strtolower
//string을 대/소문자 변환
strtoupper("string");
strtolower("string");

//strpos
//string에서 특정 문자의 인덱스를 반환
strpos("string", "특정문자");
?>
```

### math함수
```php
<?php
//M_PI
pi를 나타내는 수

//round
//숫자를 자리수에 맞게 반환, 기본값 0의자리(정수)
round(숫자, 자리수);
round(5.2323);
round(5.2323, 2);

//rand
//임의의 수를 반환
rand(시작숫자, 끝숫자);
rand();
rand(1, 10);
?>
```

### array함수
```php
<?php
//array_push
//배열에 특정 원소 추가
array_push(특정배열, 추가할 원소);

//count
//배열의 길이를 반환
count(특정배열);

//sort & rsort
//배열을 오름/내림차순으로 정렬
sort(특정배열);
rsort(특정배열);

//join
//배열의 각각의 원소에 특정구문을 삽입하여 반환
join(특정구문, 특정배열);
join(", ", $array);
?>
```

### 사용자 정의 함수
```php
<?php
  //함수 정의
  function 함수명(인자값) {
    //함수 내용
  }

  //함수 호출
  함수명(인자값);
?>
```

### 클래스
```php
<?php
  //클래스 정의
  class 클래스명 {
    //멤버변수 선언
    public 변수명;
    private 변수명;

    //생성자 정의
    public function __construct(인자값) {
      //생성자 내용
    }

    //멤버함수 선언
    public function 함수명(인자값) {
      //함수 내용
    }
  }

  //인스턴스 생성
  클래스변수명 = new 클래스명(생성자에서 정의한 인자값);

  //클래스 함수 호출
  클래스변수명->멤버함수(인자값);
?>
```

### 클래스 상속
```php
<?php
  class 부모클래스명 {
    //클래스 내용
  }

  //클래스 상속하기
  class 상속클래스명 extends 부모클래스명 {
    //클래스 내용
    //overriding이 가능함
  }
?>
```

### 다양한 키워드들
```php
<?php
  class 부모클래스명 {
    //final 키워드
    //final 키워드를 사용할 시, overriding이 불가능함
    final 멤버변수/멤버함수

    //const 키워드
    //const 키워드로 변수 선언 시, 값 변경이 불가능함
    const 멤버변수

    //static 키워드
    //static 키워드로 변수/함수 선언 시, 인스턴스 생성 없이 접근이 가능함
    public static 멤버변수;
    public static function 멤버함수(인자값) {
      //함수 내용
    }
  }

  //const 변수, static 함수에 접근
  부모클래스명::const변수
  부모클래스명::static변수
  부모클래스명::static함수(인자값)
?>
```


### 클래스 관련 함수
```php
<?php
//is_a
//해당 인스턴스가 해당 클래스의 인스턴스인지 체크
is_a(인스턴스명, 클래스명);

//property_exists
//해당 인스턴스에 멤버변수가 있는지 체크
propetry_exists(인스턴스명, 멤버변수명);

//method_exists
//해당 인스턴스에 멤버함수가 있는지 체크
method_exists(인스턴스명, 멤버함수명);
?>
```
