---
layout: post
title: GongSu07_Funcions_and_Modules
date: 2019-01-24 13:33:45 +0900
categories: Gongsu
---
<h1>함수와 모듈 알아보기</h1>
<hr />
<h4>수정해야 할 사항:</h4>
<ul>
<li><code>shopping</code> 함수의 명칭을 <code>openFile</code>로 변경하고 본문에 사용된 지역변수의 이름을
적당하게 수정할 것. <ul>
<li>이유: <code>shopping</code> 함수의 기능이 쇼핑과 무관함.</li>
</ul>
</li>
<li>
<p>좀 더 복잡한 함수 예제 활용</p>
</li>
<li>
<p>주의:
<code>sum</code>은 파이썬 내장함수임. 따라서 변수로 사용하지 말 것.</p>
</li>
</ul>
<hr />
<p>함수와 모듈을 이미 사용해 보았다.
이번 장에서 좀 더 자세히 함수와 모듈의 활용을 알아 본다.</p>
<p>함수와 모듈에 대한 보다 자세한 설명은 아래
사이트를 참조한다.</p>
<ul>
<li>
<p>함수의 정의와 기초적인 활용법에 대한 자세한 설명은
<a href="https://github.com/liganega/bpp/blob/master/notes/03-ThinkPython-
Functions.ipynb">여기</a>를 
    참조한다.</p>
</li>
<li>
<p>모듈의 정의와 기초적인 활용법에 대한 자세한 설명은
<a href="https://github.com/liganega/bpp/blob/master/notes/06b-ThinkPython-
Modules.ipynb">여기</a>를
    참조한다.</p>
</li>
</ul>
<h2>오늘의 주요 예제</h2>
<p>쇼핑할 항목을 담고 있는 <code>shopping_list.txt</code> 파일이 있을 때,
쇼핑할 때 필요한 비용을 계산하는 함수
구현하기.</p>
<p>예를 들어, 쇼핑 목록이 아래와 같을 때, 6,500원의 비용이 필요하다는 것을 계산해 주는 함수를 구현하고자 한다.
<code>항목
개수  금액
Bread  1    3000
Tomato 6    2000
Cola   1    1500</code></p>
<p>아래 한글을 사용하는 경우 아래 그림과 같은 방식으로 비용을 자동으로 계산할 수 있다.</p>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/hwp.png" | relative_url }}"
style="width:400">
</td>
</tr>
</table>
</p>

<p>그림 내용: 아래한글의 세로합계 자동계산</p>
<p>여기서는 파이썬을 이용하여 금액에 대한 정보를 추출하여 활용하는 방식을 구현하고자 한다.</p>
<h4>참고사항</h4>
<p><code>txt</code>라는 확장자를 가진 파일을 순수한 텍스트 파일이라 부른다. 
반면에 아래한글 파일, 워드 파일, 엑셀 파일 등은
순수한 텍스트 파일이 아니다. </p>
<p>위 그림에서 볼 수 있듯이 아래한글 파일은 표, 그림 등을 다룰 뿐만 아니라, 수식처리 및 계산 등을 동시에
다룰 수 있다.
반면에 순수한 텍스트 파일은 글자를 보여주는 것 이외에는 어떤 기능도 가지고 있지 않는다.</p>
<p>데이터를 저장하는 경우 보통 순수한
텍스트 파일로 저장한다.
이전 시간에 다룬 웹 상의 정보들도 기본적으로 순수한 텍스트 파일이다.
순수한 텍스트 파일에서 정보를 구하는 여러
방식이 알려져 있으며 오늘 그 중에 한 가지를 배우고자 한다.</p>
<h2>함수</h2>
<h3>함수 정의하기</h3>
<ul>
<li>함수를 정의하려면 <code>def</code>라는 키워드를 이용하며, 아래 형식을 따른다.
<code>def 함수이름(인자1,..., 인자n):
함수본체
      return 리턴값</code>   </li>
</ul>
<p><strong>주의사항:</strong>
<em> 콜론(<code>:</code>)을 항상 사용해야 함에 주의할 것.
</em> 함수의
본체(body)는 들여쓰기를 해야한다. 
* 들여쓰기는 선택이 아닌 의무사항이다.</p>
<p>예를 들어, 인자 두 개를 입력 받아 합을 리턴하는 함수인 <code>mysum</code> 함수를 다음과 
같이 정의한다. 
함수의 이름은 임의로 정할 수 있지만
함수의 기능에 맞추어 정해야 한다.</p>
<p><code>python
def mysum(a, b):
    return a + b</code></p>
<h3>문서화 문자열(docstring) 활용</h3>
<ul>
<li>
<p>프로그래밍 코드를 저장한 파일에는 코드 이외에 코드와 관련된 주석을 적절하게 포함하고 있어야 한다. 이를 "문서화"라 한다. </p>
</li>
<li>
<p>문서화는
코드 이상으로 중요하다. 
    문서화가 제대로 되어있지 않은 경우 코드 개발 및 관리를 매우 어렵게 만든다. </p>
</li>
<li>
<p>문서화의 기본은 함수에
주석을 추가하는 것이다. 
    함수정의에 사용되는 주석을 "docstring(문서화 문자열)"이라 부른다. </p>
</li>
<li>
<p>함수에 주석을 달아주면
<code>help</code> 함수를 이용하여 해당 함수의 역할 및 사용법을 확인할 수 있다.</p>
</li>
</ul>
<h4>예제</h4>
<p>입력값의 절대값을 리턴하는 함수인 <code>abs</code> 함수에 대한 정보를 확인하기 위해
<code>help("abs")</code>
를 실행해
보자.</p>
<p><code>python
abs(-3.2)</code></p>
<p><code>python
help("abs")</code></p>
<p>보이는 내용을 설명하면 다음과 같다.</p>
<ul>
<li>
<p>1번 줄:  abs는 <code>__builtin__</code> 이란 모듈에 정의된 내장 함수이다. </p>
</li>
<li>
<p>2번~3번
줄: abs(숫자) 형식으로 실행하면 어떤 숫자를 리턴한다.
    즉, 입력값과 리턴값의 자료형을 설명하고 있다.</p>
</li>
<li>
<p>4번 줄:
인자의 절대값을 리턴한다.
    즉, 어떤 값을 리턴하는지 설명한다.</p>
</li>
</ul>
<h4>예제</h4>
<p>이제 앞서 정의한 <code>mysum</code> 함수에 문서화 문자열(docstring)을 추가해 보자.</p>
<p><code>python
def mysum(a, b):
    """
    내가 정의한 덧셈이다.
    인자 a와 b에 각각 두 숫자를 입력받아 합을 되돌려준다.
    """
    return a + b</code></p>
<p><code>mysum</code> 함수에 대해 알아보자.</p>
<p><code>python
help(mysum)</code></p>
<p><code>mysum</code> 함수를 정의할 때 추가한 문서화 문자열이 그대로 출력됨을 확인할 수 있다.
이와같이 문서화 문자열을 잘 활용하면 좀 더 효율적인
코딩을 할 수 있게 된다.</p>
<h3>함수 호출하기</h3>
<p>함수를 정의한 후에 사용하려면 __호출__해야 한다. </p>
<p>__함수를 호출한다__는 말은 필요한 만큼의 값을 인자로 사용하여 함수를 실행한다는
의미이다.
즉, 함수 호출은 아래 모양의 코드를 실행하는 것이다.
<code>함수이름(인자1,..., 인자n)</code></p>
<h4>예제</h4>
<p>2와 3을 더하려면 <code>mysum</code> 함수를 아래와 같은 모양으로 실행하면 된다.
<code>mysum(2, 3)</code></p>
<p>물론 변수를
인자로 사용할 수도 있으며, 리턴값을 다른 변수에 저장할 수도 있다.
다음 예제를 참조하라.</p>
<p><code>python
x = 2
y = 3
z = mysum(x,y)</code></p>
<p><code>python
print(z)</code></p>
<h4>주의</h4>
<p>파이썬에는 모든 함수들의 리턴값이 존재한다. 
하지만 경우에 따라서는 <code>return</code> 값이 없는 것처럼 보이는 함수도 존재한다.
대표적으로 <code>print</code> 함수가 그러하다.</p>
<p><code>python
no_return = print(3)</code></p>
<p><code>print()</code> 함수의 리턴값은 <code>None</code> 이다.</p>
<p><code>python
print(no_return)</code></p>
<p>파이썬에서 다루는 값은 모두 자료형을 갖고 있으며, <code>None</code>의 자료형은 <code>NoneType</code>이라 부른다.</p>
<p><code>python
type(no_return)</code></p>
<h4>주의</h4>
<p><code>NoneType</code>은 C 언어와 자바 언어에서 리턴값이 명시되지 않는 함수들을 정의할 때 사용하는 키워드인
<code>void</code> 에
해당한다. 아래 자바 예제 참조</p>
<p><code>java
public void test(int n) {
    if (n % 2 == 0) {
System.out.println("짝수")
        return; 
    }
    else if (n % 2 == 0) {
System.out.println("홀수")
        return;
    }
}</code></p>
<h4>연습</h4>
<p>다음 두 개의 함수를 비교해 보자.</p>
<p>```python
def print42():
    print(42)</p>
<p>def return42():
    return 42
```</p>
<p><code>python
b = return42()</code></p>
<p><code>python
b</code></p>
<p><code>python
print(b)</code></p>
<p><code>python
a = print42()</code></p>
<p><code>python
a</code></p>
<p><code>python
print(a)</code></p>
<h2>모듈(Module)</h2>
<p>모듈은 우선 단순한 파이썬 코드를 담고 있는, 확장자가 <code>py</code>인 파일이다. 
그리고 하나의 모듈에는 관련된 일을 처리할 때 사용하는 여러
프로그램 코드들이 포함되어 있다. 
주로 함수와 클래스 등이 포함된다.</p>
<p>예를 들어, <code>math</code> 모듈은 <code>sin</code>, <code>cos</code>, <code>log</code> 등
수학에서 매우 중요한 역할을 하는 함수들이 정의되어 있다. 
그리고 <code>time</code> 모듈에는 <code>sleep</code> 함수 처럼 시간의 활용과 관련된 다양한
함수가 포함되어 있다.</p>
<h3>모듈 사용법</h3>
<p>특정 모듈에 포함된 코드(예를 들어, 함수 또는 클래스)를 사용하려면 먼저 해당 모듈을 <code>import</code> 해야 한다. </p>
<p>예를 들어,
<code>sin(pi/2)</code> 값을 구하기 위해서는 먼저 <code>math</code> 모듈을 임포트해야 한다. 
<code>sin</code> 함수의 정의와 원주율 <code>pi</code> 값의 정의 모두
<code>math</code> 모듈에 포함되어 있다.</p>
<p><strong>주의:</strong> 모듈을 임포트하는 여러 방식이 존재한다.</p>
<h4>모듈 임포트 방법 1</h4>
<p><code>python
import math</code></p>
<p><code>python
math.pi</code></p>
<p><code>python
math.sin(math.pi / 2)</code></p>
<h4>모듈 임포트 방법 2</h4>
<p>모듈의 이름이 길 경우 별칭을 줄 수 있다.</p>
<p><code>python
import math as m</code></p>
<p><code>python
m.pi</code></p>
<p><code>python
m.sin(m.pi / 2)</code></p>
<h4>모듈 임포트 방법 3</h4>
<p>모듈에서 원하는 코드만 가져올 수 있다. 
이 경우 모듈 이름을 추가로 붙일 필요가 없어진다.</p>
<p>이 방식은 특정 코드를 자주 활용해야 할 경우
추천한다.</p>
<p><code>python
from math import sin, pi</code></p>
<p><code>python
pi</code></p>
<p><code>python
sin(pi/2)</code></p>
<p>이 경우 <code>math</code> 모듈에 포함된 다른 코드는 사용할 수 없다.</p>
<p><code>python
math.cos(10)</code></p>
<h4>모듈 임포트 방법 4</h4>
<p>특정 모듈에 포함된 코드 전체를 한꺼번에 임포트할 수도 있다.
다만 일반적으로 추천되는 방식이 아니다.</p>
<p>아래와
같이 <code>math</code> 모듈을 임포트 하면 그 안에 포함된 모든 코드를 모듈 이름을 
언급할 필요 없이 호출할 수 있다.</p>
<p><code>python
from math import *</code></p>
<p><code>python
exp(1)</code></p>
<h4><code>math</code> 모듈 내용 확인하기</h4>
<p>특정 모듈에 포함된 함수 등을 확인하는 방법이 있다.
<code>help("모듈이름")</code></p>
<p>예를
들어, 공업수학 강의에서 <code>math</code> 모듈은 매우 중요하다.
따라서 아래와 같이 <code>math</code> 모듈에 포함되어 있는 함수들을 확인할 수 있다.
<strong>주의:</strong> 파이썬 3의 경우 모듈이름에 인용부호를 사용하지 않아도 된다.</p>
<p><code>python
help("math")</code></p>
<h4>예제</h4>
<p>앞서 <code>help("math")</code>를 이용하여 <code>math</code> 모듈에 포함되어 있는 다양한 함수와 정의를 
확인해 보았다.</p>
<p>이제,
예를 들어, <code>sqrt</code> 함수에 대한 정보를 보다 얻고자 한다면 앞서 언급한
<code>help</code> 함수를 이용하면 된다.</p>
<p><code>python
help("math.sqrt")</code></p>
<p>앞서 <code>abs</code> 함수에서 살펴 보았듯이 2번줄 ~ 4번 줄 내용은 <code>sqrt</code> 함수를 호출하는 방법과
리턴값을 설명하고 있다. (<code>sqrt</code>
함수는 입력된 값의 제곱근을 리턴한다.)</p>
<h2>연습문제</h2>
<h3>연습</h3>
<p>쇼핑할 항목을 담고 있는 <code>shopping_list.txt</code> 파일이 있다고 가정하자.
<code>Bread 1 3000
Tomato
6 2000
Cola 1  1500</code></p>
<p>이제 쇼핑 목록 파일을 인자로 넣었을 때 내용을 확인해주는 <code>shopping</code> 함수를 구현해보자.</p>
<p>견본답안:</p>
<p>```python
def shopping(shopping_file):</p>
<pre><code>file = open(shopping_file, 'r')
buy_list = file.read()
file.close()
return buy_list
</code></pre>
<p>```</p>
<p>위 코드에서 파일 내용을 읽어드리는 부분은 다음과 같다.</p>
<p><code>python
file = open(shopping_file, 'r')
buy_list = file.read()
file.close()</code></p>
<ul>
<li>
<p><code>open</code> 함수는 지정된 파일 내용과 함께 파일과 관련된 많은
정보를 불러온다. </p>
<p><strong>주의:</strong> 컴퓨터에 저장된 파일은 단순히 파일에 저장된 내용뿐만 아니라, 파일의 생성과 수정, 
파일의
크기 등 추가 정보도 함께 포함한다.</p>
</li>
<li>
<p>따라서, 파일의 내용만을 따로 확인하고자 한다면 <code>read()</code> 메소드를 이용해야 한다.</p>
</li>
</ul>
<p>*
<code>close()</code> 메소드는 파일 내용을 읽은 후에 더 이상 파일을 필요로 하지 않을 때 사용한다. 
    그러면, 더 이상 파일 내용을
확인하지 못하게 된다.</p>
<pre><code>**주의:** `open` 함수의 리턴 자료형은 좀 특수한 자료형이며 굳이 이름을 알 필요는 없다.
</code></pre>
<p>여기서는 <code>read()</code>와 <code>close()</code> 메소드를 활용할 수 있다는 사실만 기억한다.</p>
<p><code>shopping</code> 함수를 <code>shopping_list.txt</code> 파일을 인자로 사용하여
호출해 보자.</p>
<p><strong>주의:</strong> 여기서는 <code>data</code> 폴더
안에 쇼핑 리스트 파일이 존재한다고 가정한다.</p>
<p><code>python
print(shopping("data/shopping_list.txt"))</code></p>
<p>리턴값의 자료형은 유니코드 문자열이다.</p>
<p><code>python
type(shopping("data/shopping_list.txt"))</code></p>
<p>이제 문자열의 <code>split</code> 메소드를 활용해서, 쇼핑 목록을 리스트로 작성해보자.</p>
<p>줄을 구분하는 기호는 <code>\n</code>(역슬래시 + n) 이며, 이를
기준으로 <code>split()</code> 메소드를 호출하면 된다.</p>
<p><code>python
buy_list = shopping("data/shopping_list.txt").split("\n")</code></p>
<p><code>buy_list</code>에는 이제 각 줄의 내용을 항목으로 갖는 리스트가 할당된다.</p>
<p>세 줄이 있으므로, <code>buy_list</code>의 길이는 3이 된다.
<strong>주의:</strong></p>
<p>리스트 자료형은 다음 시간에 좀 더 자세히 살펴볼 것이다.
여기서는 자바, C 언어 등에서 배운 리스트 또는 어레이 등의 개념
정도로 이해하면 된다.</p>
<p><code>python
print(buy_list)</code></p>
<p>리스트에 포함된 각각의 항목에 대해 <code>for</code> 반복문을 실행할 수 있다.</p>
<p>아래 코드는 쇼핑 목록의 각 줄을 한 줄씩 출력한다. 
앞서 다룬
<code>shopping("shopping_list.txt")</code>의 리턴값은 파일 내용 전체를 하나의 문자열로 리턴함에 주의하라.</p>
<p><code>python
for item in buy_list:
    print("===")
    print(item)</code></p>
<p>앞서 배운 <code>range</code> 함수와 인덱스를 활용하여 동일한 일을 수행할 수도 있다.</p>
<p><code>python
for i in range(len(buy_list)):
    print("===")
    print(buy_list[i])</code></p>
<p>이제 시장을 볼 때 필요한 총 비용이 얼마인지 계산할 수 있다.
먼저 각 물품의 비용을 확인해 볼 수 있는데, 그러려면
각 줄이 하나의
문자열이면서 물품, 개수, 가격이 스페이스로 구분되어 있다는 정보를 활용하면 된다.</p>
<p>즉, <code>split()</code> 메소드를 다시 한 번 활용한다.</p>
<p><code>python
for item in buy_list:
    each_item = item.split()
    print(each_item[0], each_item[1], "개의 가격은", each_item[2], "원 입니다.")</code></p>
<p>이제 총 비용을 계산할 수 있다.</p>
<p>```python
total = 0</p>
<p>for item in buy_list:
    total = total + int(item.split()[2])</p>
<p>print("총 비용은", total, "입니다.")  <br />
```</p>
<h3>연습</h3>
<p>앞서 정의한 <code>shopping</code> 함수는 지정된 텍스트 파일 내용을 반환하는 내용을 담고 있다. 
하지만 지정된 파일이 존재하지
않거나 지정된 경로가 다를 경우 오류가 발생한다.
이를 방지하기 위해 예외 처리 기능을 추가해서 <code>shopping</code> 함수를 재정의하라.</p>
<p>힌트:
6장에서 다룬 예외 처리 기능을 활용한다.</p>
<p>견본답안:</p>
<p>먼저 앞서 정의된 <code>shopping</code> 함수를 그대로 사용하면서 <code>shopping_list.txt</code> 파일의 경로를 
틀리게 사용하면 아래처럼
오류가 발생한다.</p>
<p><code>python
shopping("shopping_list.txt")</code></p>
<p>오류가 발생하면서 실행이 멈춘 이유를 설명하기는 하지만 부가 설명이 필요한 경우에는 아래와 같이
예외 처리 기능을 추가하는 것이 좋다.</p>
<p><code>python
def shopping(shopping_file):
    try: 
        file = open(shopping_file, 'r')
        buy_list = file.read()
        file.close()
        return buy_list
    except FileNotFoundError:
        raise FileNotFoundError("해당 파일의 이름 또는 경로를 확인하세요.")</code></p>
<p>이제 다시 <code>shopping_list.txt</code> 파일의 경로를 틀리게 사용하면 다음과 같이 예외 처리가 실행된다.</p>
<p><code>python
shopping("shopping_list.txt")</code></p>
<h3>연습</h3>
<p>쇼핑 목록 파일을 인자로 받았을 때 쇼핑 금액의 총합을 계산해주는 함수인 
<code>amount_shopping</code> 함수를 구현하라.
<strong>힌트:</strong> <code>shopping</code> 함수를 활용하라.</p>
<p>견본답안:</p>
<p>```python
def shopping_amount(shopping_file):
    buy_list = shopping(shopping_file).split('\n')</p>
<pre><code>total = 0
for item in buy_list:
    total = total + int(item.split()[2])

return total
</code></pre>
<p>```</p>
<p><code>python
shopping_amount("data/shopping_list.txt")</code></p>
<h3>연습</h3>
<p>쇼핑 목록 파일 <code>shopping_list.txt</code> 과 품목을 입력 받아 입력받은 품목 금액의 총합을 계산해주는 함수
<code>shopping_item()</code> 함수를 구현하라.</p>
<p>견본답안 1:</p>
<p><code>python
def shopping_item(shopping_file, items):
    buy_list = shopping(shopping_file).split('\n')
    total = 0
    if 'bread' in items.lower():
        total += int(buy_list[0].split()[2])
    if 'tomato' in items.lower():
        total += int(buy_list[1].split()[2])
    if 'cola' in items.lower():
        total += int(buy_list[2].split()[2])
    return total</code></p>
<p><code>python
item = input("Bread, Tomato, Cola 중 살 품목을 적어주세요: ")
print(shopping_item("data/shopping_list.txt", item))</code></p>
<p>견본답안 2: 내장함수인 <code>sum</code>을 활용할 수 있다. <code>sum</code>에 대한 설명은
<a href="https://dojang.io/mod/page/view.php?id=981">여기</a>를 참조하면 된다.</p>
<p><code>python
def shopping_item(shopping_file, items):
    buy_list = shopping(shopping_file).split('\n')
    price_list = []
    if 'bread' in items.lower():
        price_list.append(int(buy_list[0].split()[2]))
    if 'tomato' in items.lower():
        price_list.append(int(buy_list[1].split()[2]))
    if 'cola' in items.lower():
        price_list.append(int(buy_list[2].split()[2]))
    return sum(price_list)</code></p>
<p><code>python
item = input("Bread, Tomato, Cola 중 살 품목을 적어주세요: ")
print(shopping_item("data/shopping_list.txt", item))</code></p>
<h3>연습</h3>
<p>쇼핑 항목의 인덱스를 활용하여 <code>shopping_item</code> 함수를 구현하라.</p>
<h3>연습</h3>
<p>쇼핑 목록 파일 <code>shopping_list.txt</code>와  Bread, Tomato, Cola의 주문 수량을 입력 받아 주문한 물품
금액의 총합을 계산해주는 함수 <code>shopping_amount_n()</code> 함수를 구현하라.</p>
<p>견본답안:</p>
<p><code>python
def shopping_amount_n(shopping_file, n):
    buy_list = shopping(shopping_file).split('\n')
    total = 0
    for i in range(len(buy_list)):
        total += int(buy_list[i].split()[2]) * n[i]
    return total</code></p>
<p>```python
while True:
    try:
        n = list(map(int, input("Bread, Tomato, Cola을 구매할 수량을 차례대로 입력하세요: ").split(', ')))
        break
    except ValueError:
        print("정수로 입력하세요.")</p>
<p>print(shopping_amount_n("data/shopping_list.txt", n))
```</p>