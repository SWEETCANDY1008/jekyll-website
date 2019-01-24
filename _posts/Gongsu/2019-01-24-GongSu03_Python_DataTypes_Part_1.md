---
layout: post
title: GongSu03_Python_DataTypes_Part_1
date: 2019-01-24 13:33:40 +0900
categories: Gongsu
---
<h1>파이썬 기본 자료형 1부</h1>
<h4>수정 사항</h4>
<ul>
<li>다양한 기초연산 연습문제 추가 필요</li>
</ul>
<p>파이썬 언어에서 사용되는 값들의 기본 자료형을 살펴본다. </p>
<p>변수에 할당될 수 있는 가장 단순한 자료형에는 네 종류가 있다:</p>
<ul>
<li>
<p>정수
자료형(<code>int</code>): </p>
<ul>
<li>..., <code>-3</code>, <code>-2</code>, <code>-1</code>, <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, 등등</li>
<li><code>1 + 2</code>,
<code>-2 * 3</code>, 등등</li>
</ul>
</li>
<li>
<p>부동소수점 자료형(<code>float</code>): </p>
<ul>
<li><code>1.2</code>, <code>0.333333</code>, <code>-1.2</code>,
<code>-3.7680</code>, 등등 </li>
<li><code>2.0/3.5</code>, <code>3.555 + 3.4 * 7.9</code>, 등등</li>
</ul>
</li>
<li>
<p>불리언
자료형(<code>bool</code>): <code>True</code>, <code>False</code>를 포함하여 두 값으로 계산될 수 있는 값</p>
<ul>
<li>예: <code>1 == 1</code>, <code>2 &lt; 3</code>,
<code>1 + 1 &gt; 3 and 2 &lt; 3</code>, 등등</li>
</ul>
</li>
<li>
<p>문자열 자료형(<code>str</code>): </p>
<ul>
<li><code>'a'</code>, <code>'abc'</code>,
<code>'engineering'</code>, ... 등등</li>
<li><code>'abc' * 2</code>, <code>'engineering' + 'math'</code>, 등등</li>
</ul>
</li>
</ul>
<p>이번
장 주요 내용:</p>
<ul>
<li>
<p>정수, 부동소수점, 불리언 자료형을 소개. 문자열 자료형은 다음 장에서 다룸.</p>
</li>
<li>
<p>변수에 할당된 값과 그 값의 자료형을
알아내는 데에 사용하는 두 개의 함수의 기본적인 활용법 </p>
<ul>
<li><code>print()</code> 함수: 변수에 할당된 값을 확인할 때 사용 
*
<code>type()</code> 함수: 값의 자료형을 확인할 때 사용</li>
</ul>
</li>
<li>
<p>특정 자료형과 관련하여 많이 사용되는 함수와 메소드 살펴보기</p>
</li>
</ul>
<h2>파이썬 명령어 기초 사용법</h2>
<p>Spyder, IDLE 등을 사용하여 파이썬 명령어를 실행할 수 있다.</p>
<p>명령 프롬프트(prompt)는 보통 아래의 모양을 갖는다.</p>
<p>*
<code>&gt;&gt;&gt;</code></p>
<p>또는</p>
<ul>
<li><code>In [1]:</code></li>
</ul>
<p>파이썬은 "스크립트 언어"에 속한다. 즉, 코드를 작성한 후에 바로 실행시킬 수 있다. 
C와 Java 등의 언어는 코드를 작성한 후에 코드가
들어 있는 파일을 컴파일하여 생성된 목적코드(object code)를 실행하기 때문에 컴파일 언어라고 불린다.</p>
<p>예를 들어, <code>print()</code> 함수를 이용하여 터미널 화면에 문자열 값을 보여주고 싶다면 단순히 아래와 같이 코드를 작성하고 실행하면 된다.
주의: <code>print</code>는 "출력하다", "화면에 보여주다", "인쇄하다" 등으로 번역한다. 반면에 함수를 정의할 때 사용하는 <code>return</code>은
"값을 돌려준다" "리턴한다" 등으로 번역하여 사용한다. <code>print</code>와 <code>return</code>은 사용 용도다 서로 완전히 다르다. 나중에 차이점을
배우게 된다.</p>
<p><code>python
print("Hello World")</code></p>
<p>변수를 선언하고 값을 바로 확인할 수 있다.</p>
<p><code>python
a = 1 + 1
a</code></p>
<p>파이썬을 계산기처럼 활용할 수도 있다.</p>
<p><code>python
2 + 3</code></p>
<p><code>python
a = 2 + 3
a + 1</code></p>
<p><code>python
42 - 15.3</code></p>
<p><code>python
100 * 11</code></p>
<p><code>python
7 / 5</code></p>
<p><code>python
-7/5</code></p>
<p><code>python
7.0 / 5</code></p>
<p>주의: </p>
<ul>
<li>
<p>파이썬3에서는 나눗셈 연산자(<code>/</code>)는 무조건 부동소수점을 리턴한다. </p>
</li>
<li>
<p>파이썬2에서는 나눗셈 연산자(<code>/</code>)는 정수 자료형인
경우 몫을 계산한다. 반면에 부동소수점이 사용되면 부동소수점을 리턴한다.</p>
</li>
</ul>
<p><code>python
In [22]: 7 / 2
Out[22]: 3
In [23]: 7.0 / 2
Out[23]: 3.5</code></p>
<p>몫을 계산하는 연산자는 <code>//</code> 이다.</p>
<p><code>python
7//5</code></p>
<p><code>python
7.0//5</code></p>
<p><code>python
-7//5</code></p>
<p><code>python
-7.0//5</code></p>
<p>나머지를 계산하는 연산자는 <code>%</code> 이다.</p>
<p><code>python
7%5</code></p>
<p><code>python
-7%5</code></p>
<p><code>python
-7.0%5</code></p>
<p>지수 계산: 예를 들어, 2의 3승을 계산하고자 할 때 사용한다.</p>
<p><code>python
2 ** 3</code></p>
<p><code>python
9 ** 0.5</code></p>
<h2>변수 선언 및 활용</h2>
<p>컴퓨터 프로그램을 데이터를 이용하여 다음과 같은 일들을 처리하기 위한 명령문들의 나열로 생각할 수 있다.
<em> 데이터
읽기
</em> 데이터 생성하기
<em> 데이터 계산하기
</em> 데이터 변환하기
<em> 데이터 정리하기
</em> 데이터 저장하기</p>
<p>특정 데이터를 조작하기 위해서는 해당
데이터를 저장하거나 불러올 수 있어야 한다. 그러기 위해서 변수를 활용한다. 
변수를 일종의 그릇에 비유할 수 있으며, 변수에 할당된 데이터는
그릇에 담겨진 내용물에 해당한다. </p>
<p>파이썬에서 변수의 이름을 지으려면 기본적으로 세 가지 규칙을 따라야 한다.</p>
<ul>
<li>반드시 영어 알파벳
문자(<code>a-z,A-Z</code>) 또는 밑줄기호(<code>_</code>)로 시작해야 하며, 이후에는 알파벳, 숫자(<code>0-9</code>), 밑줄기호가 임의로 사용될 수 있다.</li>
</ul>
<p>*
파이썬 예약어(def, from, import 등)를 변수 이름으로 사용하면 안된다. </p>
<ul>
<li>
<p>대소문자를 구분해야 한다: 'YOU', 'you',
'You', 'yOu'는 모두 다른 이름으로 처리된다. </p>
</li>
<li>
<p>'-', '+', '*','/' 등의 연산자 기호는 이름에 사용될 수 없다.</p>
</li>
<li>'@', '$', '?' 등의 기호도 사용되지 않는다.</li>
</ul>
<h2>변수 선언</h2>
<p>변수에 특정 값을 할당하는 것을 변수 선언이라 부른다. 
변수 선언은 아래 모양을 갖춘다.</p>
<pre><code>변수이름 = 할당할 값
</code></pre>
<p>예를 들어
아래에서 <code>a_number</code>라는 변수이름에 정수 2가 할당되었고, <code>a_word</code> 변수에는 <code>dog</code>라는 문자열이 할당되었다.</p>
<p>주의:</p>
<ul>
<li>
<p>변수를 생성하고자 할 때 값을 초기화하면 된다. 즉, 변수를 미리 선언할 필요가 없다. C와 Java와의 주요 차이점 중의
하나이다.</p>
</li>
<li>
<p>자료형을 선언할 필요가 없다. 변수의 자료형을 파이썬이 알아서 판단한다. 이를 동적 타이핑(dynamic typing)이라
한다.</p>
</li>
</ul>
<p>```python</p>
<h1>int a_number = 2</h1>
<p>a_number = 2
a_word = 'dog'
```</p>
<p>예를 들어, C 언어의 경우 아래와 같이 선언해야 한다.</p>
<pre><code>int a_number = 2 
char a_word[] = 'dog'
</code></pre>
<p>변수에 할당된 값을 확인하기 위해 <code>print()</code> 함수를 이용한다.</p>
<p><code>python
print(a_number)</code></p>
<p><code>python
print(a_word)</code></p>
<p>변수에 할당된 값의 자료형을 확인하려면 <code>type()</code> 함수를 호출한다.</p>
<p><code>python
type(a_number)</code></p>
<p><code>python
type(a_word)</code></p>
<p>선언된 변수를 이용하여 연산을 할 수도 있다.</p>
<p><code>python
a_number + 7</code></p>
<p><code>python
(a_number * 6.0) / 5</code></p>
<p>연산의 결과를 변수에 할당할 수 있다. 해당 변수에는 연산의 결과만을 기억한다.</p>
<p><code>python
first_result = 8 / 3.5
first_result</code></p>
<p>계산된 결과의 자료형도 <code>type()</code> 함수를 이용하여 확인할 수 있다.</p>
<p><code>python
type(first_result)</code></p>
<p>문자열의 경우 덧셈과 곱셈 연산자를 사용할 수 있다.</p>
<p><code>python
"Bull " + a_word</code></p>
<p><code>python
a_word * 2</code></p>
<p>하지만 변수에 할당된 값의 자료형에 따라 연산의 가능여부가 결정된다. 
예를 들어, 숫자의 문자열의 합은 정의되어 있지 않으며, 실행할 경우
오류가 발생한다.</p>
<p><code>python
a_number + a_word</code></p>
<p>주의: 오류 내용을 초보자가 이해하기는 어렵다. 여기서는 자료형이 맞지 않아 오류가 발생할 경우에 <code>TypeError</code>가 발생한다는 사실만을
기억해 두면 좋다.</p>
<p>변수에 할당된 값은 변경이 가능하다. 원래 할당된 값을 변경할 수 있다는 의미에서 변수라 부른다. 변수가 아닌 숫자를 상수라 부른다.</p>
<p>```python
print(a_number)
a_number = 5</p>
<p>print(a_number)
```</p>
<h2>기본 자료형</h2>
<p>파이썬에는 8개의 자료형이 미리 선언되어 있다. 그중 네 개는 단순자료형이며, 나머지 네 개는 컬렉션 자료형(모음
자료형)이다. </p>
<h3>단순 자료형</h3>
<p>하나의 값만을 대상으로 한다는 의미에서 단순 자료형이다. 즉, 정수 하나, 부동소수점 하나, 불리언 값
하나, 문자열 하나 등등.</p>
<ul>
<li>정수(int)</li>
<li>부동소수점(float)</li>
<li>불리언 값(bool)</li>
<li>문자열(str)</li>
</ul>
<h3>컬렉션 자료형</h3>
<p>여러 개의 값들을 하나로 묶어서 다룬다는 의미에서 컬렉션 자료형이다.</p>
<ul>
<li>리스트(list)</li>
<li>튜플(tuple)</li>
<li>집합(set)
*
사전(dictionary)</li>
</ul>
<p>여기서는 단순 자료형을 소개하고, 컬렉션 자료형은 이후에 다룬다.</p>
<h3>정수(int)</h3>
<p>일반적으로 알고 있는 정수(자연수, 0, 음의 정수)들의 자료형을 나타내면 덧셈, 뺄셈, 곱셈, 나눗셈 등의 일반 연산이
가능하다.</p>
<h3>부동소수점(float)</h3>
<p>부동소수점은 원래 실수를 컴퓨터에서 다루기 위해 개발되었으나 실제로는 유리수 일부만을 다룬다. 
무리수인 원주율
$\pi$의 경우에도 컴퓨터의 한계로 인해 소수점 이하 적당한 자리에서 끊어서 사용한다.</p>
<p><code>python
new_float = 4.0
print(new_float)</code></p>
<p>정수와 실수 사이에 강제로 형변환 가능하다. 실수를 정수로 변환하고자 할 경우 <code>int()</code> 함수를 사용한다. 그러면 소수점 이하는 버려진다.</p>
<p><code>python
int(4.8)</code></p>
<p>정수를 실수로 형변환하려면 <code>float()</code> 함수를 사용한다.</p>
<p><code>python
float(2)</code></p>
<p><strong>주의</strong>: 변수를 형변환한다고 해서 변수에 할당된 값이 변하는 것은 아니다. 다만, 형변환한 값을 다른 변수에 저장해서 활용할 수는 있다.</p>
<p><code>python
basic_int = 2
print(float(basic_int))
print(type(basic_int))</code></p>
<p><code>python
float_basic_int = float(basic_int)
print(type(float_basic_int))</code></p>
<h3>키워드 관련 주의사항</h3>
<p>지금까지 살펴보았듯이 <code>float</code>, <code>int</code>, <code>print</code>, <code>type</code>와 같은 단어는 녹색으로 표시되는데
이는 그 단어들이 파이썬에서 특별한 역할을 수행하는 키워드이기 때문이다. </p>
<p>그런 키워드를 재정의할 수는 있지만 하지 않는 것이 좋다. 
혹여
실수로 아래와 같은 일을 할 수도 있는데 매우 조심해야 한다.</p>
<p><code>python
int = 4
print("What have we done to int?", int)
int(5.0)</code></p>
<p>즉, <code>int()</code> 함수의 본래의 정의가 사라졌다. 이럴 때는 아래와 같이 원래의 함수로 되돌릴 수 있다.</p>
<p><code>python
del int
int(5.0)</code></p>
<h3>연산자 우선순위</h3>
<p>일반적으로 알려진 연산자들 사이의 우선순위를 알아야 한다. 
줄여서 PEMDAS(펨다스)로 기억하면 좋다.
PEMDAS: 
<em> 괄호(Parentheses)
</em> 지수승(Exponents)
<em> 곱셈(Multiplication)
</em> 나눗셈(Division)
<em> 덧셈(Addition)
</em> 뺄셈(Subtraction).</p>
<p>왼쪽에 오는 연산자의 우선순위가 높다.
지수승을 나타내는 기호는 <code>**</code>이다.</p>
<p><code>python
eqn1 = 2 * 3 - 2
print(eqn1)</code></p>
<p><code>python
eqn2 = -2 + 2 * 3
print( eqn2 )</code></p>
<p><code>python
eqn3 = -2 + (2 % 3)
print( eqn3 )</code></p>
<p><code>python
eqn4 = (.3 + 5) // 2
print(eqn4)</code></p>
<p><code>python
eqn5 = 2 ** 4 // 2
print(eqn5)</code></p>
<h2>불리언 값(bool)</h2>
<p><code>if</code> 또는 <code>while</code> 문에서 사용되는 불리언 자료형에는 두 개의 값만 사용된다.
<em> <code>True</code>
</em>
<code>False</code></p>
<p>이 두 개의 값만을 이용하여 복잡한 프로그램을 구현할 수 있다.</p>
<p>예제: 강아지를 한 마리만 갖고 있다고 가정하자. </p>
<p>이것을
표현하기 위해 puppy(강아지 한마리)라는 변수에 True를 할당하고, 여러 마리의 강아지를 뜻하는 puppies 변수에는 False를
할당한다.</p>
<p><code>python
puppy = True</code></p>
<p><code>python
print(puppy)</code></p>
<p><code>python
type(puppy)</code></p>
<p><code>python
puppies = False</code></p>
<p>두 개의 변수 선언을 아래와 같이 동시에 할 수 있다. 등호기호 왼편과 오른편에 사용되는 변수와 값의 개수가 동일해야 함에 주의한다.</p>
<p><code>python
puppy, puppies = True, False</code></p>
<p><code>python
print("Do I have a puppy?", puppy)
print("Do I have puppies?", puppies)</code></p>
<p>주의: 위에서 사용된 print함수의 사용법을 기억해둔다. print 함수는 인자를 여러 개 받을 수 있으며 그 값들을 차례대로 동시에 한 줄에
출력한다. 각각의 값들은 스페이스(space)로 구분되어진다.</p>
<h3>불리언 연산자</h3>
<p><code>and</code>, <code>not</code>, <code>or</code> 세 개의 연산자를 이용하여 불리언 연산을 할 수 있다. 각 연산자의 의미는 일반적으로
알려진 것과 동일하다.</p>
<p><code>python
True and True</code></p>
<p><code>python
True and False</code></p>
<p>불리언 자료형의 변수를 이용하여 연산을 수행할 수도 있다.</p>
<p><code>python
puppy and puppies</code></p>
<p><code>python
not puppies</code></p>
<p><code>python
not puppy</code></p>
<h3>불리언 연산자 우선순위</h3>
<p>not 연산자의 우선순위가 가장 높다.</p>
<p><code>python
puppy and not puppies</code></p>
<p><code>python
puppy or puppies</code></p>
<p><code>python
False or False</code></p>
<h3>숫자 비교</h3>
<p>일반적으로 사용하는 숫자들의 비교를 나타내는 연산자들은 다음과 같다. 리턴값은 모두 불리언 자료형이다.</p>
<ul>
<li><code>!=</code>:
다른지 여부를 판단</li>
<li><code>==</code>: 같은지 여부를 판단</li>
<li><code>&lt;=</code>: 작거나 같은지 여부를 판단</li>
<li><code>&gt;=</code>: 크거나 같은지 여부를 판단
*
<code>&lt;</code>: 작은지 여부를 판단</li>
<li><code>&gt;</code>: 큰지 여부를 판단</li>
</ul>
<p><code>python
4 == 4</code></p>
<p><code>python
4 == 5</code></p>
<p><code>python
4 != 2</code></p>
<p><code>python
4 != 4</code></p>
<p><code>python
4 &gt; 2</code></p>
<p><code>python
4 &gt; 4</code></p>
<p><code>python
4 &gt;= 4</code></p>
<p><code>python
False or False</code></p>
<h2>연습문제</h2>
<h3>연습</h3>
<p>두 숫자의 평균값을 구하는 함수를 아래와 같이 작성할 수 있다.</p>
<p>주의: 함수에 대해서는 이후에 좀 더 자세히 다룬다. 여기서는 함수를 작성하는
방식에 주의한다. </p>
<p>함수 작성요령:
<code>def 함수이름(인자1, 인자2, ..., 인자k):
    함수본체
    return 리턴값</code></p>
<p>```python
def average(a, b):
    """ 두 개의 숫자 a와 b가 주어졌을 때,
    두 숫자의 평균을 리턴하는 함수"""</p>
<pre><code>return (a + b) * 0.5
</code></pre>
<p>```</p>
<p>주의: </p>
<ul>
<li>
<p>큰 따옴표 세 개("""...""")로 둘러싸인 부분은 문서화를 위해 사용되며 주석으로 처리된다.
즉, 정의되는 함수의 의미와
역할에 대한 설명을 담는다. 영어로 독스트링(docstring)이라 부른다. </p>
</li>
<li>
<p>주석 등에 한글을 사용하고자 할 경우 아래 문장이 문서 맨
첫줄에 있어야 한다.
<code># coding: utf-8</code></p>
</li>
</ul>
<p><code>python
average(10, 20)</code></p>
<p><code>python
average(10, 4)</code></p>
<p>함수에 대한 정보를 얻고자 할 경우 <code>help()</code> 함수를 활용할 수 있다. 
그러면 앞서 <code>average</code> 함수를 정의할 때 함께 적어 넣은
독스트링이 보여진다.</p>
<p><code>python
help(average)</code></p>
<h3>연습</h3>
<p>주어진 자연수 <code>n</code>이 짝수면 <code>True</code>를, 홀수면 <code>False</code>를 리턴하는 함수 <code>even_test(n)</code>을 정의하라.</p>
<p>활용
예:</p>
<p>```python
In <a href="circle_area(3)">11</a>: even_test(27)
Out<a href="circle_area(3)">11</a>: False</p>
<p>In [12]: even_test(4)
Out[12]: True
```</p>
<p>견본답안:</p>
<p><code>python
def even_test(n):
    if n%2 == 0:
        return True
    else:
        return False</code></p>
<p><code>python
even_test(17)</code></p>
<p><code>python
even_test(4)</code></p>
<p>아래 방식도 가능하다. (이유를 스스로 설명할 수 있어야 한다.)</p>
<p><code>python
def even_test1(n):
    if not n%2:
        return True
    else:
        return False</code></p>
<p><code>python
even_test1(17)</code></p>
<p><code>python
even_test1(4)</code></p>
<h3>연습</h3>
<p>두 숫자 <code>a</code>와 <code>b</code>의 사이의 거리를 리턴하는 함수 <code>distance(a, b)</code>를 정의하라.</p>
<p>활용 예:
```
In</p>
<p>Out<a href="circle_area(3)">11</a>: 1</p>
<p>In [12]: distance(3, 1)
Out[12]: 2
```</p>
<p>아래 코드에서 <code>pass</code> 부분을 수정해서 채워야 한다. 
<code>def distance(a, b):
    """if-else문을 사용하지
않고도 가능하다."""
    pass</code></p>
<p>견본답안:</p>
<p><code>python
def distance(a, b):
    return abs(a-b)</code></p>
<p><code>abs</code> 함수는 인자로 입력된 숫자의 절대값을 리턴하는 함수이다.</p>
<p><code>python
distance(3, 4)</code></p>
<p><code>python
distance(3, 1)</code></p>
<h3>연습</h3>
<p>반지름이 <code>r</code>인 원의 넓이를 리턴하는 함수 <code>circle_area(r)</code>를 정의하라.</p>
<p>활용 예:</p>
<p>```python
In</p>
<p>Out<a href="circle_area(3)">11</a>: 28.274333882308138</p>
<p>In [12]: circle_area(pi)
Out[12]: 31.006276680299816
```</p>
<p><strong>주의:</strong> 원주율 <code>pi</code>를 사용하려면 <code>math</code> 모듈을 임포트해야 한다.</p>
<p>견본답안:</p>
<p>```python
import math</p>
<p>def circle_area(r):
    return math.pi * r**2
```</p>
<p><code>python
circle_area(3)</code></p>
<p><code>python
circle_area(math.pi)</code></p>
<h3>연습</h3>
<p>두 숫자의 기하평균(geometric mean)을 리턴하는 함수 <code>geometric_mean(a, b)</code> 함수를 정의하라. </p>
<p>두
숫자 <code>a</code>와 <code>b</code>의 기하평균을 <code>c</code>라 하면, 두 변의 길이가 각각 <code>a</code>와 <code>b</code>인 직사각형의 넓이와 변의 길이가 <code>c</code>인 정사각형의
넓이가 동일함을 의미한다. </p>
<p>활용 예:</p>
<pre><code>In [ ]: geometric_mean(2, 2)
Out[ ]: 2.0

In

Out[ ]: 4.0

In [ ]: geometric_mean(2, 1)
</code></pre>
<p>Out[ ]: 1.4142135623730951</p>
<p>힌트: 제곱근을 계산해주는 <code>sqrt()</code>를 이용한다. 단, <code>sqrt()</code> 함수를
이용하려면 먼저 <code>math</code> 라는 모듈을 아래와 같이 임포트 해야 한다.
<code>import math</code></p>
<p>이후에
<code>math.sqrt(3)</code>와 같은 형식으로 제곱근 함수를 호출할 수 있다.</p>
<p>견본답안:</p>
<p>```python
import math</p>
<p>def geometic_mean(a, b):
    c = math.sqrt(a * b)
    return c
```</p>
<p>sqrt에 대해 알고 싶으면 help 함수를 활용한다.
<code>help(math.sqrt)</code></p>
<p><code>python
geometic_mean(2, 2)</code></p>
<p><code>python
geometic_mean(2, 8)</code></p>
<p><code>python
geometic_mean(2, 1)</code></p>
<h3>연습</h3>
<p>바닥면적이 <code>A</code>이고 높이가 <code>h</code>인 피라미드의 부피를 리턴하는 함수 <code>pyramid_volume(A, h)</code>를 정의하라.
활용 예:</p>
<pre><code>In [ ]: pyramid_volume(1, 2)
Out[ ]: 0.6666666666666666
</code></pre>
<p>견본답안:</p>
<p>```python
def pyramid_volume(A, h):
    """4각뿔의 부피는 밑면적 * 높이 * 1/3
    리턴값이 항상 float 자료형이 되도록 한다."""</p>
<pre><code>V = A * h / 3.0
return V
</code></pre>
<p>```</p>
<p>주의: 3이 아니라 3.0으로 나누는 것에 주의하라. 파이썬3에서는 상관이 없다.</p>
<p><code>python
pyramid_volume(1, 2)</code></p>
<h3>연습</h3>
<p>초(second) 단위의 숫자를 받아서 일(day) 단위의 값으로 되돌려주는 <code>seconds2days(sec)</code> 함수를 정의하라.
입력값은 <code>int</code> 또는 <code>float</code> 일 수 있으며 리턴값은 <code>float</code> 자료형이어야 한다.</p>
<p>활용 예:</p>
<pre><code>In [ ]:
</code></pre>
<p>seconds2days(43200)
    Out[ ]: 0.5</p>
<p>견본답안:</p>
<p>```python</p>
<h1>하루는 아래 숫자만큼의 초로 이루어진다.</h1>
<h1>하루 = 24시간 * 60분 * 60초.</h1>
<p>daysec = 60 * 60 * 24</p>
<h1>이제 초를 일 단위로 변경할 수 있다.</h1>
<p>def seconds2days(sec):
    """ sec을 일 단위로 변경하는 함수.
    강제형변환에 주의할 것"""</p>
<pre><code>return (sec/daysec)
</code></pre>
<p>```</p>
<p><code>python
seconds2days(43200)</code></p>
<p>파이썬2의 경우에는 아래와 같이 정의해도 된다.</p>
<p><code>python
def seconds2days(sec):
    return
(float(sec)/daysec)</code></p>
<h3>연습</h3>
<p>변의 길이가 각각 <code>a</code>, <code>b</code>, <code>c</code>인 직각육면체의 표면적을 계산해주는 함수 <code>box_surface(a, b, c)</code>를
정의하라. 
예를 들어, 박스를 페인트칠하고자 할 때 필요한 페인트의 양을 계산하는 문제이다.</p>
<p>활용 예:</p>
<pre><code>In [ ]:
</code></pre>
<p>box_surface(1, 1, 1)
    Out[ ]: 6</p>
<pre><code>In [ ]: box_surface(2, 2, 3)
Out[ ]:
</code></pre>
<p>32</p>
<p>견본답안:</p>
<p>```python
def box_surface(a, b, c):
    """ 각 변의 길이가 각각 a, b, c인 박스의 표면적을 리턴하는 함수.
    힌트: 6개의 면의 합을 구하면 된다"""</p>
<pre><code>s1, s2, s3 = a * b, b * c, c * a
return 2 * (s1 + s2 + s3)
</code></pre>
<p>```</p>
<p><code>python
box_surface(1, 1, 1)</code></p>
<p><code>python
box_surface(2, 2, 3)</code></p>
<h3>연습</h3>
<p>변의 길이가 각각 <code>a</code>, <code>b</code>, <code>c</code>인 삼각형의 면적 <code>A</code>를 계산하는 함수 <code>triangle_area(a, b, c)</code>를
정의하라. 
다음 등식을 이용할 수 있다. </p>
<pre><code>A = (s * (s - a) * (s - b) * (s - c)) ** 0.5
s
</code></pre>
<p>= (a + b + c) / 2</p>
<p>아래 사이트 참조:
https://ko.wikipedia.org/wiki/%EC%82%BC%EA%B0%81%ED%98%95</p>
<p>견본답안:</p>
<p>```python
def triangle_area(a, b, c):
    s = (a + b + c) / 2.0
    A = (s * (s - a) * (s - b) * (s - c))</p>
<pre><code>return math.sqrt(A)
</code></pre>
<p>```</p>
<p><code>python
triangle_area(2, 2, 3)</code></p>