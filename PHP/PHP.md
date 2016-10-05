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
  $array = array("요소1", "요소2", "등등");

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





```php
<?php

?>
```
```php
<?php

?>
```
```php
<?php

?>
```
```php
<?php

?>
```
```php
<?php

?>
```
```php
<?php

?>
```
```php
<?php

?>
```
