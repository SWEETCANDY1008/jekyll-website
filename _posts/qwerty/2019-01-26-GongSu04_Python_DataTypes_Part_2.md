---
layout: post
title: GongSu04_Python_DataTypes_Part_2
date: 2019-01-26 22:34:48 +0900
categories: qwerty
---
<h1>파이썬 기본 자료형 2부</h1>
<h4>수정 사항</h4>
<ul>
<li>문자열 메소드 사용 예제: 보다 실용적인 예제였으면 함.</li>
</ul>
<h2>요약</h2>
<ul>
<li>문자열 자료형 다루기</li>
<li>문자열 메소드 활용</li>
<li>응용: 웹 상에 있는 데이터를 가져와서 정보 활용하기</li>
</ul>
<h2>준비 사항</h2>
<ul>
<li>문자열의 정의화 기초적인 활용법에 대한 자세한 설명은 
    <a href="https://github.com/liganega/bpp/blob/master/notes/02-ThinkPython-Strings.ipynb">여기</a>를
    참조한다.</li>
</ul>
<h3>최종 목표</h3>
<ul>
<li>아래 사이트에서 커피콩의 가격정보 자동으로 확인하여 응용하기</li>
</ul>
<p>http://beans-r-us.appspot.com/prices.html</p>
<p>위 사이트를 방문하면 실시간으로 변하는 커피콩의 시세를 아래와 같은 내용으로 확인할 수 있다. </p>
<p>참조: Head First Programming(한빛미디어) 2장</p>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/strings/coffee-beans01.jpg" | relative_url }}" style="width:600">
</td>
</tr>

</table>
</p>

<p>참조: http://beans-r-us.appspot.com/prices.html</p>
<p>이번 장에서는 언급된 웹사이트를 직접 방문하지 않으면서 실시간으로 변하는 
커피콩 가격(위 그림에서는 5달러 27센트)을 확인하는 방법을 배운다. </p>
<p>기본적으로 두 가지 기술이 필요하다. </p>
<ol>
<li>웹사이트 내용 읽어 들이기</li>
<li>문자열로 저장된 데이터에서 필요한 정보 확인하기</li>
</ol>
<h2>웹사이트 내용 읽어 들이기</h2>
<p>웹사이트 주소를 이용하여 해당 사이트의 내용 전체를 읽어 들일 수 있다.
예를 들어 앞서 언급된 사이트의 소스코드 전체를 아래 방식으로 가져올 수 있다.</p>
<blockquote>
import urllib.request

page = urllib.request.urlopen("http://beans-r-us.appspot.com/prices.html")
text = page.read().decode("utf8")
</blockquote>

<p>실제로 확인하면 웹사이트의 내용 전체가 하나의 문자열로 저장되어 있다.</p>
<p><strong>주의:</strong> html 관련 이해할 수 없는 기호들은 여기서는 일단 무시하고 넘어가는 게 좋다.
또한, 위 코드를 자세히 이해하지 못해도 상관 없다. 
특정 웹사이트의 소스크드를 가져오기 위해 위 코드 형식을 사용한다는 것만 기억해 두면 된다. </p>
<blockquote>
text
</blockquote>

<pre><code>'&lt;html&gt;&lt;head&gt;&lt;title&gt;Welcome to the Beans\'R\'Us Pricing Page&lt;/title&gt;\n&lt;link rel="stylesheet" type="text/css" href="beansrus.css" /&gt;\n&lt;/head&gt;&lt;body&gt;\n&lt;h2&gt;Welcome to the Beans\'R\'Us Pricing Page&lt;/h2&gt;\n&lt;p&gt;Current price of coffee beans = &lt;strong&gt;$6.84&lt;/strong&gt;&lt;/p&gt;\n&lt;p&gt;Price valid for 15 minutes from Wed Sep 12 02:51:59 2018.&lt;/p&gt;\n&lt;/body&gt;&lt;/html&gt;'
</code></pre>
<p>소스코드에서 줄바꾸기, 띄어쓰기, 인용부호 등 특수 기호를 적절하게 해석하여 출력하고자 하면 <code>print</code> 명령어를 사용한다.</p>
<blockquote>
print(text)
</blockquote>

<pre><code>&lt;html&gt;&lt;head&gt;&lt;title&gt;Welcome to the Beans'R'Us Pricing Page&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="beansrus.css" /&gt;
&lt;/head&gt;&lt;body&gt;
&lt;h2&gt;Welcome to the Beans'R'Us Pricing Page&lt;/h2&gt;
&lt;p&gt;Current price of coffee beans = &lt;strong&gt;$6.84&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Price valid for 15 minutes from Wed Sep 12 02:51:59 2018.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;
</code></pre>
<h3>문자열 자료형: <code>str</code> 과 <code>unicode</code></h3>
<h4>문자열(<code>str</code>)</h4>
<p><code>text</code>에 저장된 값의 자료형은 문자열이다.</p>
<blockquote>
type(text)
</blockquote>

<pre><code>str
</code></pre>
<h4>유니코드(<code>unicode</code>)</h4>
<p>웹 상에서 정보를 추출할 경우 <code>text_str</code>의 경우처럼 유니코드(<code>Unicode</code>)로 
문자열을 변환하는 방식을 사용하는 것을 권장한다. </p>
<p>예를 들어 아래와 같이 <code>text_bytes</code>을 선언하면 다른 형식으로 저장된다.</p>
<blockquote>
page = urllib.request.urlopen("http://beans-r-us.appspot.com/prices.html")
text_bytes = page.read()
</blockquote>

<blockquote>
type(text_bytes)
</blockquote>

<pre><code>bytes
</code></pre>
<blockquote>
text_bytes
</blockquote>

<pre><code>b'&lt;html&gt;&lt;head&gt;&lt;title&gt;Welcome to the Beans\'R\'Us Pricing Page&lt;/title&gt;\n&lt;link rel="stylesheet" type="text/css" href="beansrus.css" /&gt;\n&lt;/head&gt;&lt;body&gt;\n&lt;h2&gt;Welcome to the Beans\'R\'Us Pricing Page&lt;/h2&gt;\n&lt;p&gt;Current price of coffee beans = &lt;strong&gt;$6.21&lt;/strong&gt;&lt;/p&gt;\n&lt;p&gt;Price valid for 15 minutes from Wed Sep 12 02:52:00 2018.&lt;/p&gt;\n&lt;/body&gt;&lt;/html&gt;'
</code></pre>
<h4>유니코드 대 문자열</h4>
<p>두 자료형은 거의 동일하며, 영어와 같은 라틴어 계열 이외에 
한국어, 일어 등의 언어를 처리하기 위해서 유니코드가 표준으로 사용된다.
하지만 파이썬3은 문자열(<code>str</code>)로 통일해서 사용한다. </p>
<p>여기서는, 텍스트에 한국어, 일어, 중국어 등이 사용되었을 경우 unicode 방식으로 
처리해 주어야 한다는 정도로만 기억하고 넘어간다.</p>
<h3>웹사이트 소스코드 확인 방법</h3>
<p>실제로 해당 웹사이트의 소스코드를 확인해보면 동일한 결과를 확인할 수 있다.</p>
<p>주의: 커피콩의 가격은 실시간으로 변한다. 하지만 가격 이외의 문장은 변하지 않는다.</p>
<ul>
<li>윈도우 크롬</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/strings/coffee-beans04.jpg" | relative_url }}" style="width:600">
</td>
</tr>
</table>
</p>

<ul>
<li>맥 크롬</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/strings/coffee-beans02.png" | relative_url }}" style="width:600">

</td>
</tr>

</table>
</p>

<h4>크롬에서 소스코드 확인하는 법</h4>
<ul>
<li>윈도우 크롬</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/strings/coffee-beans05.jpg" | relative_url }}" style="width:600">
</td>
</tr>
</table>
</p>

<ul>
<li>맥 크롬</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/strings/coffee-beans03.png" | relative_url }}" style="width:600">

</td>
</tr>

</table>
</p>

<h2>문자열로 저장된 데이터에서 필요한 정보 확인하기</h2>
<p><code>text</code>에 저장된 문자열을 다시 확인해보자.</p>
<blockquote>
print(text)
</blockquote>

<pre><code>&lt;html&gt;&lt;head&gt;&lt;title&gt;Welcome to the Beans'R'Us Pricing Page&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="beansrus.css" /&gt;
&lt;/head&gt;&lt;body&gt;
&lt;h2&gt;Welcome to the Beans'R'Us Pricing Page&lt;/h2&gt;
&lt;p&gt;Current price of coffee beans = &lt;strong&gt;$6.84&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Price valid for 15 minutes from Wed Sep 12 02:51:59 2018.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;
</code></pre>
<p>위 문자열에서 원하는 정보인 커피콩의 가격을 어떻게 추출할 것인가? </p>
<p>커피콩의 가격은 실시간으로 변한다. 하지만 다섯째 줄 끝부분에 위치하고
달러기호(<code>$</code>)로 시작하며 <code>x.xx</code> 형식의 소수로 표현된 부분이 커피콩의 가격 정보이다.</p>
<p>따라서, 예를 들어 문자열인 <code>"&gt;$"</code>의 위치를 알면 커피콩 가격정보를 얻을 수 있다.
그런데 특정 문자열 또는 문자의 위치를 어떻게 알 수 있을까?
바로 인덱스 정보와 슬라이싱 기능을 활용하면 된다.</p>
<h3>인덱스</h3>
<p>문자열에 사용되는 모든 문자의 위치는 인덱스(<code>index</code>)라는 고유한 번호를 갖는다.
인덱스는 0부터 시작하며 오른쪽으로 한 문자씩 이동할 때마다 1씩 증가한다. </p>
<p><strong>주의:</strong> 파이썬을 포함해서 많은 대부분의 프로그래밍 언어에서 인덱싱은 0부터 시작한다. 
따라서 첫 째 문자를 확인하고자 할 때는 1이 아닌 0을 인덱스로 사용해야 한다. </p>
<p>예제를 통해 인덱스와 친숙해질 필요가 있다.</p>
<blockquote>
a_food = "kebap"
</blockquote>

<p>특정 인덱스에 위치한 문자의 정보는 다음과 같이 확인한다.</p>
<ul>
<li>0번 인덱스 값, 즉 첫째 문자</li>
</ul>
<blockquote>
a_food[0]
</blockquote>

<pre><code>'k'
</code></pre>
<ul>
<li>1번 인덱스 값, 즉, 둘째 문자</li>
</ul>
<blockquote>
a_food[1]
</blockquote>

<pre><code>'e'
</code></pre>
<ul>
<li>2번 인덱스 값, 즉, 셋째 문자</li>
</ul>
<blockquote>
a_food[2]
</blockquote>

<pre><code>'b'
</code></pre>
<p>등등.</p>
<h4>-1번 인덱스</h4>
<p>문자열이 길 경우 맨 오른편에 위치한 문자의 인덱스 번호를 확인하기가 어렵다.
그래서 파이썬에서는 -1을 마지막 문자의 인덱스로 사용한다. </p>
<p>즉, 맨 오른편의 인덱스는 -1이고, 그 왼편은 -2, 등등으로 진행한다. </p>
<blockquote>
a_food[-1]
</blockquote>

<pre><code>'p'
</code></pre>
<blockquote>
a_food[-2]
</blockquote>

<pre><code>'a'
</code></pre>
<p>등등.</p>
<h4>문자열의 길이와 인덱스</h4>
<p>문자열의 길이보다 같거나 큰 인덱스를 사용하면 오류가 발생한다.
문자열의 길이는 <code>len()</code> 함수를 이용하여 확인할 수 있다.</p>
<blockquote>
a_food[5]
</blockquote>

<pre><code>---------------------------------------------------------------------------

IndexError                                Traceback (most recent call last)

&lt;ipython-input-15-7d78ea00cfa7&gt; in &lt;module&gt;()
----&gt; 1 a_food[5]


IndexError: string index out of range
</code></pre>
<blockquote>
len(a_food)
</blockquote>

<pre><code>5
</code></pre>
<h3>슬라이싱</h3>
<p>문자열의 하나의 문자가 아닌 특정 구간 및 부분을 추출하고자 할 경우 슬라이싱을 사용한다. 
슬라이싱은 다음과 같이 실행한다.</p>
<pre><code>문자열변수[시작인덱스 : 끝인덱스 : 계단(step)]
</code></pre>
<ul>
<li>시작인덱스: 해당 인덱스부터 문자를 추출한다.</li>
<li>끝인덱스: 해당 인덱스 <strong>전</strong>까지 문자를 추출한다.</li>
<li>계단: 시작인덱스부터 몇 계단씩 건너뛰며 문자를 추출할지 결정한다. 예를 들어 계단값이 2라면 하나 건너 추출한다. </li>
</ul>
<blockquote>
a_food
</blockquote>

<pre><code>'kebap'
</code></pre>
<p><code>kebap</code>에서 <code>ke</code> 부분을 추출하고 싶다면 다음과 같이 하면 된다:</p>
<blockquote>
a_food[0 : 2 : 1]
</blockquote>

<pre><code>'ke'
</code></pre>
<p>즉, 문자열 처음부터 2번 인덱스 전까지, 즉 두 번째 문자까지 모두 추출하는 것이다. 
반면에 하나씩 건너서 추출하려면 다음처럼 하면 된다:</p>
<blockquote>
a_food[0 : 4 : 2]
</blockquote>

<pre><code>'kb'
</code></pre>
<p>시작인덱스, 끝인덱스, 계단 각각의 인자가 경우에 따라 생략될 수도 있다. 
그럴 때는 각각의 위치에 기본값(default)이 들어 있는 것으로 처리되며, 각 자리의 기본값은 다음과 같다.</p>
<ul>
<li><code>시작인덱스</code>의 기본값 = <code>0</code></li>
<li><code>끝인덱스</code>의 기본값 = 문자열의 길이</li>
<li><code>계단</code>의 기본값 = <code>1</code></li>
</ul>
<blockquote>
a_food[0 : 2]
</blockquote>

<pre><code>'ke'
</code></pre>
<blockquote>
a_food[: 2]
</blockquote>

<pre><code>'ke'
</code></pre>
<blockquote>
a_food[: 4 : 2]
</blockquote>

<pre><code>'kb'
</code></pre>
<blockquote>
a_food[ : : 2]
</blockquote>

<pre><code>'kbp'
</code></pre>
<p>양수와 음수를 인덱스로 섞어서 사용할 수도 있다.</p>
<blockquote>
a_food[ : -1 : 2]
</blockquote>

<pre><code>'kb'
</code></pre>
<p><strong>주의</strong>: -1은 문자열의 끝인덱스를 의미한다.</p>
<p>끝인덱스가 문자열의 길이보다 클 수도 있다. 
다만 문자열의 길이 만큼만 문자를 확인한다. </p>
<blockquote>
a_food[: 10]
</blockquote>

<pre><code>'kebap'
</code></pre>
<p>아래와 같이 아무 것도 입력하지 않으면 해당 문자열 전체를 추출한다.</p>
<blockquote>
a_food[:]
</blockquote>

<pre><code>'kebap'
</code></pre>
<p>시작인덱스 값이 끝 인덱스 값보다 같거나 작아야 제대로 추출한다. 
그렇지 않으면 공문자열이 추출된다.</p>
<blockquote>
a_food[3 : 1]
</blockquote>

<pre><code>''
</code></pre>
<p>이유는 슬라이싱은 기본적으로 작은 인덱스에 큰 인덱스 방향으로 확인하기 때문이다.
역순으로 추출하고자 한다면 계단을 음수로 사용하면 된다.</p>
<blockquote>
a_food[3 : 1 : -1]
</blockquote>

<pre><code>'ab'
</code></pre>
<blockquote>
a_food[-1 : : -1]
</blockquote>

<pre><code>'pabek'
</code></pre>
<h3><code>find()</code> 메소드 활용하기</h3>
<p>인덱스와 슬라이싱의 기능을 이해하였다면 이제 <code>text</code> 변수에 할당된 문자열에서 <code>"&gt;$"</code>라는
문자열의 시작위치를 알아내기만 하면 된다. </p>
<p>아주 간단한 방법이 있다. 0번부터 시작해서 주욱 세어가면서 <code>"&gt;$"</code>의 시작 문자인
<code>"&gt;"</code>의 인덱스를 확인하면 된다. 
하지만 이런 방식은 아래와 같은 이유로 매우 위험하다.</p>
<ul>
<li>셈이 틀릴 수 있다.</li>
<li>문자열이 길 경우 셈 자체가 불가능할 수 있다.</li>
<li>문자열이 조금만 변경되어도 새로 처음부터 세어야 하기 때문에 경우에 따라 재활용이 불가능하다.</li>
</ul>
<p>이런 문제를 해결하는 좋은 방법이 있다. 
바로 <code>find()</code>라는 문자열 메소드를 활용하면 된다.</p>
<blockquote>
text.find(">$")
</blockquote>

<pre><code>232
</code></pre>
<p>이제, 찾고자 하는 <code>"&gt;$"</code> 문자열이 232번 인덱스에서 시작한다는 것을 알았다.
따라서 커피콩의 가격정보는 인덱스가 2보다 큰 234번이고 거기서부터 길이가 4인
부분문자열에 담겨 있게 된다.</p>
<blockquote>
print(text[234: 238])
</blockquote>

<pre><code>6.84
</code></pre>
<p>하지만, 여기서 234를 사용하기 보다는 <code>find()</code> 메소드를 
직접 활용하는 것이 더욱 좋다.</p>
<blockquote>
price_index = text.find(">$") + 2
bean_price_str = text[price_index : price_index + 4]
print(bean_price_str)
</blockquote>

<pre><code>6.84
</code></pre>
<p><strong>주의:</strong></p>
<p><code>bean_price_str</code> 에 저장된 커피콩의 가격정보는 문자열로 저장되어 있다.</p>
<blockquote>
type(bean_price_str)
</blockquote>

<pre><code>str
</code></pre>
<p>그래서 예를 들어 커피콩 가격이 6달러 이상이면 커피숍의 아메리카노 가격을 올리고,
그렇지 않으면 가격을 그대로 유지하는 것을 실행하도록 하는 
코드를 작성할 수가 없다.</p>
<p>이유는, 문자열은 숫자가 아니라서 문자열과 숫자를 직접 비교할 수 없기 때문이다.
하지만 숫자로만 이루어닌 문자열을 진짜 숫자로 형변환시킬 수 있다.
예를 들어 <code>int()</code> 또는 <code>float()</code> 함수를 이용한다. </p>
<blockquote>
a_number = int('4')

print(a_number)
print(type(a_number))
</blockquote>

<pre><code>4
&lt;class 'int'&gt;
</code></pre>
<p><code>float()</code> 함수를 이용하면 부동소수점 모양의 문자열을 부동소수점으로 형변환시킬 수 있다.</p>
<blockquote>
float('4.2') * 2
</blockquote>

<pre><code>8.4
</code></pre>
<p><strong>주의:</strong> 문자열과 숫자의 곱은 의미가 완전히 다르다.</p>
<blockquote>
'4.2' * 2
</blockquote>

<pre><code>'4.24.2'
</code></pre>
<p><strong>주의:</strong> <code>int()</code> 함수는 정수모양의 문자열에만 사용할 수 있다.</p>
<blockquote>
int('4.2') * 2
</blockquote>

<pre><code>---------------------------------------------------------------------------

ValueError                                Traceback (most recent call last)

&lt;ipython-input-37-1264ce07b5b6&gt; in &lt;module&gt;()
----&gt; 1 int('4.2') * 2


ValueError: invalid literal for int() with base 10: '4.2'
</code></pre>
<p>부동소수점 모양의 문자열이 아니면 <code>float()</code> 함수도 오류를 발생시킨다.</p>
<blockquote>
float('4.5GB')
</blockquote>

<pre><code>---------------------------------------------------------------------------

ValueError                                Traceback (most recent call last)

&lt;ipython-input-38-f54447414779&gt; in &lt;module&gt;()
----&gt; 1 float('4.5GB')


ValueError: could not convert string to float: '4.5GB'
</code></pre>
<h2>커피콩 가격 정보 활용 코드 예제</h2>
<p>지금까지 배운 내용을 이용하여 커피콩 가격이 6.0달러 이상이면 커피숍의 아메리카노 가격을 올리고, 그렇지 않으면 가격을 그대로 유지하는 것을 실행하도록 하는 코드를 작성하면 다음과 같다. 
가격 확인은 1초에 한 번 하는 것으로 한다. </p>
<p>시차를 두고 코드를 실행하기 위해 <code>time</code> 모듈의 <code>sleep()</code> 함수를 활용할 수 있다.</p>
<p><strong>주의:</strong> 기준 가격을 높게 책정하면 너무 오랫동안 기다려야 할 수도 있다.</p>
<blockquote>
import urllib.request
import time             # 시간과 관련된 함수들의 모듈

price = 5.0

while price < 6.0:
    time.sleep(1)       # 코드 실행을 1초 정지한다.

    page = urllib.request.urlopen("http://beans-r-us.appspot.com/prices.html")
    text = page.read().decode("utf8")

    where = text.find(">$") + 2
    price_str = text[where : where + 4]      # 가격정보 문자열
    price = float(price_str)                 # 숫자로 형변환

print("커피콩 현재 가격이", price, "입니다. 아메리카노 가격을 인상하세요!")
</blockquote>

<pre><code>커피콩 현재 가격이 6.17 입니다. 아메리카노 가격을 인상하세요!
</code></pre>
<h2>문자열 관련 메소드</h2>
<p><code>find()</code> 메소드처럼 문자열 자료형에만 사용하는 함수들이 있다. 
이와같이 특정 자료형에만 사용하는 함수들을 __메소드__라 부른다.</p>
<p>보다 자세한 설명은 여기서는 하지 않는다.
다만 <code>find()</code> 메소드의 활용을 통해 보았듯이 특정 자료형을 잘 다루기 위해서는 
어떤 경우에 어떤 메소드를 유용하게 활용할 수 있는지를 잘 파악해두는 것이 매우 
중요하다는 점만 강조한다.</p>
<h3>메소드 호출 방법</h3>
<p>앞서 <code>find()</code> 메소드를 호출하는 방법을 기억해야 한다. </p>
<pre><code>text.find("&lt;$")
</code></pre>
<p>메소드는 일반적인 함수들과는 달리, 특정 자료형의 값이 먼저 언급된 다음에
호출된다. </p>
<p><strong>주의:</strong> 메소드의 호출방식은 다른 자료형의 경우에도 동일하다. </p>
<h3>문자열 메소드 추가 예제</h3>
<p><code>find()</code> 메소드 이외에 문자열과 관련된 메소드는 매우 많다. 
여기서는 가장 많이 사용되는 메소드 몇 개를 소개하고자 한다.</p>
<ul>
<li><code>strip()</code></li>
<li><code>split()</code></li>
<li><code>replace()</code></li>
<li><code>upper()</code></li>
<li><code>lower()</code></li>
<li><code>capitalize()</code></li>
<li><code>title()</code></li>
<li><code>startswith()</code></li>
<li><code>endswith()</code></li>
</ul>
<p>예제를 통해 각 메소드의 활용법을 간략하게 확인한다.</p>
<p>먼저 <code>week_days</code> 변수에 요일들을 저장한다.</p>
<blockquote>
week_days = " Mon, Tue, Wed, Thu, Fri, Sat, Sun "
</blockquote>

<ul>
<li><code>strip()</code> 메소드는 문자열의 양 끝을 지정한 문자열 기준으로 삭제하는 방식으로 정리한다.</li>
</ul>
<p>예를 들어, 문자열 양끝에 있는 스페이스를 삭제하고자 할 경우 아래와 같이 실행한다.</p>
<blockquote>
week_days.strip(" ")
</blockquote>

<pre><code>'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
</code></pre>
<p><code>strip()</code> 메소드를 인자 없이 호출하는 경우와 동일하다.</p>
<blockquote>
week_days.strip()
</blockquote>

<pre><code>'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
</code></pre>
<ul>
<li><code>split()</code> 메소드는 지정된 부분문자열을 기준으로 문자열을 쪼개어 문자열들의 리스트로 반환한다.
    리스트 자료형은 이후에 자세히 다룬다. 여기서는 기본적으로 알고 있는 내용으로 이해하면 된다.</li>
</ul>
<p>아래 예제는 <code>", "</code>, 즉 콤마와 스페이스를 기준으로 문자열을 쪼갠다.</p>
<blockquote>
week_days.split(", ")
</blockquote>

<pre><code>[' Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun ']
</code></pre>
<p>두 개 이상의 메소드를 조합해서 활용할 수도 있다.</p>
<p>예를 들어, <code>strip()</code> 메소드를 먼저 실행한 다음에 그 결과에 <code>split()</code> 메소드를 실행하면
좀 더 산뜻한 결과를 얻을 수 있다.</p>
<blockquote>
week_days.strip(" ").split(", ")
</blockquote>

<pre><code>['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</code></pre>
<ul>
<li><code>replace()</code> 메소드는 하나의 문자열을 다른 문자열로 대체한다.</li>
</ul>
<p>예를 들어, <code>" Mon"</code>을 <code>"Mon"</code>으로 대체할 경우 아래와 같이 실행한다.</p>
<blockquote>
week_days.replace(" Mon", "Mon")
</blockquote>

<pre><code>'Mon, Tue, Wed, Thu, Fri, Sat, Sun '
</code></pre>
<ul>
<li><code>upper()</code> 메소드는 모든 문자를 대문자로 변환시킨다.</li>
</ul>
<blockquote>
week_days.upper()
</blockquote>

<pre><code>' MON, TUE, WED, THU, FRI, SAT, SUN '
</code></pre>
<blockquote>
week_days.strip().upper()
</blockquote>

<pre><code>'MON, TUE, WED, THU, FRI, SAT, SUN'
</code></pre>
<ul>
<li><code>lower()</code> 메소드는 모든 문자를 소문자로 변환시킨다.</li>
</ul>
<blockquote>
week_days.lower()
</blockquote>

<pre><code>' mon, tue, wed, thu, fri, sat, sun '
</code></pre>
<blockquote>
week_days.strip().lower()
</blockquote>

<pre><code>'mon, tue, wed, thu, fri, sat, sun'
</code></pre>
<blockquote>
week_days.strip().lower().split(", ")
</blockquote>

<pre><code>['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
</code></pre>
<ul>
<li><code>capitalize()</code> 메소드는 제일 첫 문자를 대문자로 변환시킨다.</li>
</ul>
<p>아래 예제는 변화가 없어 보인다. 이유는 첫 문자가 스페이스이기 때문이다.</p>
<blockquote>
week_days.capitalize()
</blockquote>

<pre><code>' mon, tue, wed, thu, fri, sat, sun '
</code></pre>
<blockquote>
week_days.strip().capitalize()
</blockquote>

<pre><code>'Mon, tue, wed, thu, fri, sat, sun'
</code></pre>
<ul>
<li><code>title()</code> 메소드는 각각의 단어의 첫 문자를 대문자로 변환시킨다.</li>
</ul>
<p>참조: 영문 책 제목의 타이틀에서 각 단어의 첫 알파벳이 대문자로 쓰여지는 경우가 많다.</p>
<blockquote>
week_days.title()
</blockquote>

<pre><code>' Mon, Tue, Wed, Thu, Fri, Sat, Sun '
</code></pre>
<blockquote>
week_days.strip().title()
</blockquote>

<pre><code>'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
</code></pre>
<ul>
<li><code>startswith()</code> 메소드는 문자열이 특정 문자열로 시작하는지 여부를 판단해준다.</li>
</ul>
<blockquote>
week_days.startswith(" M")
</blockquote>

<pre><code>True
</code></pre>
<ul>
<li><code>endswith()</code> 메소드는 문자열이 특정 문자열로 끝나는지 여부를 판단해준다.</li>
</ul>
<blockquote>
week_days.endswith("n ")
</blockquote>

<pre><code>True
</code></pre>
<h2>불변 자료형</h2>
<p>파이썬의 문자열 자료형의 값들은 변경이 불가능하다. 
앞서  <code>week_days</code>에 할당된 문자열에 다양한 메소드를 적용하여 새로운 문자열을 생성하였지만
<code>week_days</code>에 할당된 문자열 자체는 전혀 변하지 않았음을 아래와 같이 확인할 수 있다.</p>
<blockquote>
week_days
</blockquote>

<pre><code>' Mon, Tue, Wed, Thu, Fri, Sat, Sun '
</code></pre>
<p>이와 같이 한 번 정해지면 절대 변경이 불가능한 자료형을 불변(immutable) 자료형이라 부른다.</p>
<p>주어진 문자열을 이용하여 새로운 문자열을 생성하고 활용하려면 새로운 변수에 저장하여 활용해야 한다.</p>
<blockquote>
stripped_week_days = week_days.strip()
</blockquote>

<blockquote>
stripped_week_days
</blockquote>

<pre><code>'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
</code></pre>
<h2>연습문제</h2>
<p>애완동물의 목록을 할당받는 <code>pets</code> 변수가 아래와 같이 선언되어 있다. </p>
<blockquote>
pets = 'dog cat hedgehog pig swan fish bird'
</blockquote>

<h3>연습</h3>
<p>애완동물의 종류를 의미하는 단어의 첫알파벳을 대문자로 바꾸려면 어떻게 해야 하는가? 
단, 특정 메소드를 사용하여 한 줄 코드로 작성해야 한다.</p>
<p>견본답안:</p>
<blockquote>
pets.title()
</blockquote>

<pre><code>'Dog Cat Hedgehog Pig Swan Fish Bird'
</code></pre>
<h3>연습</h3>
<p><code>pets</code>으로부터 대문자 <code>C</code> 문자 하나를 추출하라.</p>
<p>견본답안:</p>
<blockquote>
pets.title()[4]
</blockquote>

<pre><code>'C'
</code></pre>
<h3>연습</h3>
<p><code>hedgehog</code>을 추출하려면?</p>
<p>견본답안:</p>
<blockquote>
pets[8 : 16]
</blockquote>

<pre><code>'hedgehog'
</code></pre>
<h3>연습 (이전 문제 이어서)</h3>
<p><code>hdeo</code>을 추출하려면?</p>
<p>견본답안:</p>
<blockquote>
pets[8 : 16 : 2]
</blockquote>

<pre><code>'hdeo'
</code></pre>
<h3>연습</h3>
<p><code>gohegdeh</code>을 추출하려면?</p>
<p>견본답안:</p>
<blockquote>
pets[15: 7 : -1]
</blockquote>

<pre><code>'gohegdeh'
</code></pre>
<h3>연습</h3>
<p><code>dogs</code>와 <code>cats</code> 두 개의 변수가 다음과 같이 선언되었다.</p>
<blockquote>
dogs, cats = '8', '4'
</blockquote>

<ul>
<li>강아지와 고양이를 몇 마리씩 갖고 있는지 확인하는 방법은?</li>
<li>강아지가 고양이보다 몇 마리 더 많은지 확인하는 방법은?</li>
</ul>
<p>견본답안:</p>
<blockquote>
print(int(dogs))
</blockquote>

<pre><code>8
</code></pre>
<blockquote>
print(int(cats))
</blockquote>

<pre><code>4
</code></pre>
<blockquote>
print(abs(int(dogs) - int(cats)))
</blockquote>

<pre><code>4
</code></pre>
<h3>연습</h3>
<p>입력받은 문자열이 <code>dog</code>라는 부분문자열을 갖고 있는지 여부를 판별하는 함수 
<code>find_dog</code>를 구현하라.</p>
<pre><code>find_dog('Bull dog')
True

find_dog('강아지')
False
</code></pre>
<p>힌트: 특정 문자열이 주어진 문자열에 부분문자열로 포함되어 있는지 여부를 판단해 주는 방식을
활용한다. 아래 예제들을 참조하라.</p>
<blockquote>
'ab' in 'abc'
</blockquote>

<pre><code>True
</code></pre>
<blockquote>
'cat' in 'casting'
</blockquote>

<pre><code>False
</code></pre>
<p>견본답안:</p>
<blockquote>
def find_dog(word):
    if 'dog' in word:
        found_dog = True
    else:
        found_dog = False

    return found_dog
</blockquote>

<blockquote>
find_dog('Bull dog')
</blockquote>

<pre><code>True
</code></pre>
<blockquote>
find_dog('강아지')
</blockquote>

<pre><code>False
</code></pre>
<h3>연습</h3>
<p>아래 코드는 커피콩의 현재 가격을 알아내어 일정 가격 이상이면 
커피숍의 아메리카노 가격을 인상할 것을 권유하는 프로그램이다.</p>
<hr />
<p><blockquote>
import urllib.request
import time             # 시간과 관련된 함수들의 모듈</p>
<p>price = 5.0</p>
<p>while price &lt; 6.0:
    time.sleep(1)       # 코드 실행을 1초 정지한다.</p>
<pre><code>page = urllib.request.urlopen("http://beans-r-us.appspot.com/prices.html")
text = page.read().decode("utf8")

where = text.find("&gt;$") + 2
price_str = text[where : where + 4]      # 가격정보 문자열
price = float(price_str)                 # 숫자로 형변환
</code></pre>
<p>print("커피콩 현재 가격이", price, "입니다. 아메리카노 가격을 인상하세요!")
</blockquote></p>
<hr />
<p>위 코드를 수정하여, 아래 내용을 수행하는 함수를 작성하라.</p>
<ul>
<li>
<p>함수 이름: <code>price_setter</code></p>
</li>
<li>
<p>함수에 사용되는 인자 두 개</p>
<ul>
<li>첫째 인자(<code>b_price</code>): 기존의 커피콩 가격</li>
<li>둘째 인자(<code>a_price</code>): 아메리카노 인상 또는 인하 가격</li>
</ul>
</li>
<li>
<p><code>price_setter(b_price, a_price)</code>를 실행할 때</p>
<ul>
<li><code>b_price</code>는 커피콩의 기존 가격을 의미한다. 
    서버의 특징 상 5.5와 6.0 사이의 숫자로 주는 게 좋다.</li>
<li>커피콩의 실시간 가격이 <code>b_price</code> 보다 0.5 달러 이하면
    아메리카노 가격을 <code>a_price</code> 만큼 내릴 것을 권유</li>
<li>커피콩의 실시간 가격이 <code>b_price</code> 보다 0.5 달러 이상이면
    아메리카노 가격을 <code>a_price</code> 만큼 올릴 것을 권유</li>
</ul>
</li>
</ul>
<p>견본답안:</p>
<blockquote>
import urllib.request
import time             # 시간과 관련된 함수들의 모듈

def price_setter(b_price, a_price):

    price = b_price

    while 5.5 < price < 6.0:
        time.sleep(1)       # 코드 실행을 1초 정지한다.

        page = urllib.request.urlopen("http://beans-r-us.appspot.com/prices.html")
        text = page.read().decode("utf8")

        where = text.find(">$") + 2
        price_str = text[where : where + 4]      # 가격정보 문자열
        price = float(price_str)                 # 숫자로 형변환

    print("현재 커피콩 가격이", price, "달러 입니다.")

    if price <= 5.5:
        print("아메리카노 가격을", a_price, "달러만큼 인하하세요!")
    else:
        print("아메리카노 가격을", a_price, "달러만큼 인상하세요!")
</blockquote>

<p>예를 들어, 현재 커피콩의 가격이 5.7달러이고, 커피콩의 실시간 가격이
5.2달러 이하이면 아메리카노의 가격을 50센트 내리고
6.2달러 이상이면 50센트 올리라고 권유하고자 한다면 아래와 같이 
<code>price_setter()</code> 함수를 호출하면 된다.</p>
<blockquote>
price_setter(5.7, 0.5)
</blockquote>

<pre><code>현재 커피콩 가격이 5.25 달러 입니다.
아메리카노 가격을 0.5 달러만큼 인하하세요!
</code></pre>
<h3>연습</h3>
<p><a href="http://www.weather.go.kr/weather/main.jsp">기상청</a>에서 날씨 정보를 확인하는 프로그램을 작성하고자 한다.</p>
<p>먼저 기상청 정보를 담고 있는 아래 사이트의 소스코드를 읽어 온다.</p>
<p></blockquote>
http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId-108
</blockquote></p>
<blockquote>
import urllib.request

page = urllib.request.urlopen("http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId-108")
text = page.read().decode("utf8")
</blockquote>

<p>읽어 온 소소크드 내용의 앞 부분을 확인하면 다음과 같다.</p>
<blockquote>
text[0:1000]
</blockquote>

<pre><code>'&lt;?xml version="1.0" encoding="utf-8" ?&gt;\r\n&lt;rss version="2.0"&gt;\r\n&lt;channel&gt;\r\n&lt;title&gt;기상청 육상 중기예보&lt;/title&gt;\r\n&lt;link&gt;http://www.kma.go.kr/weather/forecast/mid-term_01.jsp&lt;/link&gt;\r\n&lt;description&gt;기상청 날씨 웹서비스&lt;/description&gt;\r\n&lt;language&gt;ko&lt;/language&gt;\r\n&lt;generator&gt;기상청&lt;/generator&gt;\r\n&lt;pubDate&gt;2018년 09월 12일 (수)요일 06:00&lt;/pubDate&gt;\r\n &lt;item&gt;\r\n&lt;author&gt;기상청&lt;/author&gt;\r\n&lt;category&gt;육상중기예보&lt;/category&gt;\r\n&lt;title&gt;전국 육상 중기예보 - 2018년 09월 12일 (수)요일 06:00 발표&lt;/title&gt;\r\n&lt;link&gt;http://www.kma.go.kr/weather/forecast/mid-term_01.jsp&lt;/link&gt;\r\n&lt;guid&gt;http://www.kma.go.kr/weather/forecast/mid-term_01.jsp&lt;/guid&gt;\r\n&lt;description&gt;\r\n\t&lt;header&gt;\r\n\t\t&lt;title&gt;전국 육상중기예보&lt;/title&gt;\r\n\t\t&lt;tm&gt;201809120600&lt;/tm&gt;\r\n\t\t&lt;wf&gt;&lt;![CDATA[기압골의 영향으로 15일은 전국(제주도 제외)에 비가 오겠고, 그 밖의 날은 고기압의 영향으로 대체로 맑겠습니다.&lt;br /&gt;기온은 평년(최저기온: 11~20℃, 최고기온: 23~27℃)과 비슷하거나 조금 높겠습니다.&lt;br /&gt;강수량은 평년(3~9mm)보다 조금 많겠습니다.]]&gt;&lt;/wf&gt;\r\n\t&lt;/header&gt;\r\n\t&lt;body&gt;\r\n\t\t\t\t\r\n\r\n\t\t&lt;location wl_ver="3"&gt;\r\n\t\t\t\t&lt;province&gt;서울ㆍ인천ㆍ경기도&lt;/province&gt;\r\n\t\t\t\t&lt;city&gt;서울&lt;/city&gt;\r\n\t\t\t\t\r\n\t\t\t\t&lt;data&gt;\r\n\t\t\t\t\t&lt;mode&gt;A02&lt;/mode&gt;\r\n\t\t\t\t\t&lt;tmEf&gt;2018-09-15 00:00&lt;/t'
</code></pre>
<p>이제 비가 올지 여부를 설명하는 부분을 찾아서 <code>비</code>라는 단어의 포함여부에 따라 우산을 가져가야 하는지 여부를 결정하는 코드를 아래와 같이 작성할 수 있다.</p>
<blockquote>
where_s = text.find("CDATA[]") + 6
where_e = text.find("]]></wf>")

text_weather = text[where_s : where_e]
text_weather_clean = text_weather.replace("<br />", " ")

if '비' in text_weather_clean:
    print("우산을 가져가세요!")
else:
    print("우산이 필요 없습니다!")
</blockquote>

<pre><code>우산을 가져가세요!
</code></pre>