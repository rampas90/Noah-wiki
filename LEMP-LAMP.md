# LEMP(LAMP)
### LEMP(LAMP)란?
> Linux, Nginx(Apache), MySQL, PHP로 구성된 서버를 지칭하는 용어, 주로 동적 웹 페이지/웹 어플리케이션 구축에 사용됨  
Linux: 기반이 되는 OS  
Nginx/Apache: 웹서버로 사용  
MySQL: 백엔드 데이터 저장을 위한 DB  
PHP: 동적인 프로세스를 제어하는 데에 이용

## 구축 순서
> 리눅스 운영체제가 설치되어있어야함, 이 문서에서는 **우분투 16.04**를 기준으로 서술

1. 엔진엑스(아파치) 설치

```bash
# 엔진엑스
sudo apt-get update
sudo apt-get install nginx

# 아파치
sudo apt-get update
sudo apt-get install apache2
```
  1. 아파치 설치되었는지 확인
  ```bash
  # 본인의 ip를 확인함
  ifconfig

  ```
  ![apache-success](./resources/apache.png)
  브라우저에서 본인의 ip로 접속  
  아래와 같은 화면이 나오면 성공  
  기본적으로 아파치의 root는 `/var/www/html`로 설정됨

  2. 아파치 설정 변경하기
  ```bash
  vim /etc/apache2/sites-available/000-default.conf
  ```

# 참고자료
* [How To Install Linux, Nginx, MySQL, PHP (LEMP stack) in Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04)
