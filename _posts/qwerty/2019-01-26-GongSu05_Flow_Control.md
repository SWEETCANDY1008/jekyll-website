---
layout: post
title: GongSu05_Flow_Control
date: 2019-01-26 22:34:49 +0900
categories: qwerty
---
<h1>흐름 제어: 조건문과 반복문(루프) 활용</h1>
<h4>수정 사항</h4>
<ul>
<li>gcd 함수 위주로 반복문 작성 가능여부 확인</li>
<li>좀 더 실용적인 수학함수 활용 가능</li>
</ul>
<h2>요약</h2>
<ul>
<li>
<p>조건문 활용</p>
<ul>
<li><code>if</code>문: 불리언 값을 이용하여 조건을 제시하는 방법</li>
</ul>
</li>
<li>
<p>반복문(루프) 활용</p>
<ul>
<li>
<p><code>while</code> 반복문(루프): 특정 조건이 만족되는 동안 동일한 과정을 반복하는 방법</p>
</li>
<li>
<p><code>for</code> 반복문(루프): 특정 구간 내에서 동일한 과정을 반복하는 방법.</p>
<ul>
<li><code>range</code> 함수의 활용</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>최종 목표</h3>
<ul>
<li>
<p>두 정수의 최대공약수를 구하는 함수: <code>gcd()</code>
</blockquote>
gcd(6, 8) = 2
gcd(14, 21) = 3
</blockquote></p>
</li>
<li>
<p>자연수 n이 주어졌을 때, 1부터 n까지의 자연수 중에서 3의 배수이거나 숫자 3을 포함하는
숫자들의 합을 구하는 함수 <code>sum_of_3s()</code> 구현하기:
</blockquote>
sum_of_3s(10) = 3 + 6 + 9
sum_of_3s(15) = 3 + 6 + 9 + 12 + 13 + 15
</blockquote></p>
</li>
</ul>
<h2>조건문</h2>
<p>어떤 일은 특정 조건 하에서만 할 수 있는 경우가 있다. </p>
<p>예를 들어, <strong>숫자 k가 3의 배수이거나 3으로 끝나는 경우에만</strong> 그 값을 다른 값에 더하라고 할 수 있다.</p>
<p>위 문장을 코드로 나타내려면 아래 요소들이 필요하다. </p>
<ul>
<li><strong>이런저런</strong> 경우에만 __무엇무엇__을 해라.</li>
<li>숫자 k가 3의 배수이다.</li>
<li>
<p>숫자 k가 숫자 3으로 끝난다.</p>
</li>
<li>
<p>"이런저런 경우에만 무엇, 무엇을 해라"는 <code>if</code>문으로 나타낸다.
</blockquote>
if 이런저런:
     무엇
     무엇
</blockquote></p>
</li>
<li>
<p>"숫자 k가 3의 배수이다"는 아래 수식으로 표현된다.
</blockquote>
k % 3 == 0
</blockquote></p>
</li>
<li>
<p>"숫자 k가 숫자 3으로 끝난다"는 좀 더 어렵지만, 앞서 배운 문자열 메소드를 활용하면 된다.
</blockquote>
str(k).endswith('3')
</blockquote></p>
</li>
</ul>
<p>여기서 <code>str()</code> 함수는 숫자를 문자열로 형변환 시키는 함수이다. 
<code>int()</code> 또는 <code>float()</code> 함수와 반대의 일을 한다.</p>
<h3>예제</h3>
<p>두 개의 숫자 k, m이 주어졌을 때, 만약 m이
3의 배수이거나 3으로 끝나는 숫자일 경우에만
k와 m을 더하는 함수 <code>sum_if_3()</code>를 구현하라.</p>
<p>견본답안:</p>
<blockquote>
def sum_if_3(k, m):
    if (m % 3 == 0) or (str(m).endswith('3')):
        return k + m
    else:
        return k
</blockquote>

<p><strong>주의:</strong> <code>else</code>문은 <code>if</code>문에서 다루는 경우가 성립하지 않을 때 무슨 일을 해야할지를 정한다.</p>
<blockquote>
sum_if_3(5, 18)
</blockquote>

<pre><code>23
</code></pre>
<blockquote>
sum_if_3(4, 7)
</blockquote>

<pre><code>4
</code></pre>
<h3>예제</h3>
<p>두 개의 숫자 k, m이 주어졌을 때, 만약 m이
3의 배수이거나 숫자 3을 포함하는 경우에만
k와 m을 더하는 함수 <code>sum_if_3s()</code>를 구현하라.</p>
<p>이 문제를 풀기 위해서는 문자열에 특정 문자열이 부분문자열로 포함되어 있는지를 판단해야 하는데 
아래 예제와 같이 <code>in</code> 함수를 이용할 수 있다.</p>
<blockquote>
if 'bc' in 'abcde':
    print("'bc'가 'abcde'의 부분문자열이다.")
</blockquote>

<pre><code>'bc'가 'abcde'의 부분문자열이다.
</code></pre>
<p>견본답안:</p>
<blockquote>
def sum_if_3s(k, m):
    if (m % 3 == 0) or ('3' in str(m)):
        return k + m
    else:
        return k
</blockquote>

<blockquote>
sum_if_3s(2, 31)
</blockquote>

<pre><code>33
</code></pre>
<blockquote>
sum_if_3s(3, 15)
</blockquote>

<pre><code>18
</code></pre>
<blockquote>
sum_if_3s(13, 28)
</blockquote>

<pre><code>13
</code></pre>
<h3>중첩 조건문과 일반화된 조건문</h3>
<p><code>if ... else ...</code> 문은 두 가지 경우를 처리할 때 사용한다.</p>
<p>반면에, 예를 들어, 크거나, 같거나, 작거나 등 세 가지 이상의 경우를 
처리하려면 <code>if ... else ...</code>문을 중첩해서 사용하거나
<code>if ... elif ... elif ... else ...</code> 처럼 다중 조건문을
사용할 수 있다.</p>
<ul>
<li>중첩 조건문(중첩 if문) 활용 예제</li>
</ul>
<blockquote>
num1 = 5
num2 = 10

if num1 < num2:
    print("num1이 num2 보다 작다.")
else:
    if num1 == num2:
        print("num1이 num2와 같다.")
    else:
        print("num1이 num2 보다 크다.")
</blockquote>

<pre><code>num1이 num2 보다 작다.
</code></pre>
<ul>
<li>다중 조건문(다중 if문) 활용 예제</li>
</ul>
<blockquote>
num1 = 5
num2 = 10

if num1 < num2:
    print("num1이 num2 보다 작다.")
elif num1 == num2:
    print("num1이 num2와 같다.")
else:
    print("num1이 num2 보다 크다.")
</blockquote>

<pre><code>num1이 num2 보다 작다.
</code></pre>
<p><strong>주의:</strong> <code>if</code>문의 중첩 정도는 임의로 복잡해질 수 있다. 
따라서 가능하면 일반화된 조건문을 사용하면 다루기가 보다 쉬워진다.</p>
<h2>반복문(루프)</h2>
<p><strong>반복문(루프)</strong>은 동일한 코드를 반복해서 실행시킬 때 사용한다. 
루프를 만들기 위해 <code>for</code>문과 <code>while</code>문을 사용한다. </p>
<ul>
<li><code>for</code> 반복문: 반복을 몇 번 할지 미리 알 수 있는 경우 사용</li>
<li><code>while</code> 반복문: 특정 조건이 만족되는 동안 반복하고자 할 경우</li>
</ul>
<p>여기서는 먼저 <code>while</code> 반복문을 살펴보고 이후에 <code>for</code> 반복문을 살펴본다.</p>
<h2><code>while</code> 반복문</h2>
<p><code>while</code> 반복문은 항상 아래 모양을 갖는다:</p>
<blockquote>
while 조건:
    본문코드1
    본문코드2
    ...
</blockquote>

<p>__조건__이 참이 되는 동안 본문코드들이 실행된다.</p>
<h3>예제</h3>
<p>정수들을 나누어 몫을 구하는 코드를 작성해보자.
몫을 어떻게 구현할까? </p>
<ul>
<li>먼저 몫이 어떤 의미인가를 알아야 한다.</li>
<li>그 다음에 그 의미를 구현하는 코드를 작성한다. </li>
</ul>
<p>어떤 정수 <code>a</code>를 다른 정수 <code>b</code>로 나누었을 때의 몫은 <code>a</code>에서 <code>b</code>를 몇 번 뺄 수 있는가와 동일한 의미를 갖는다.
즉, <code>a</code>에서 <code>b</code>를 반복해서 빼주는 과정이 필요하고 이 과정을 음수가 되지 않을 때까지만 반복해야 한다. </p>
<p>예를 들어 43을 7로 나누었을 때의 몫은 다음과 같이 구할 수 있다.</p>
<blockquote>
number = 43
divisor = 7
answer = 0

# While 루프
while number > 0:
    number = number - divisor
    # 음수가 아니라면 빼주는 횟수를 1회 늘린다.
    if number > 0:
        answer += 1

# 이제 answer를 출력하면 된다.
print('몫은', answer, '이다')
</blockquote>

<pre><code>몫은 6 이다
</code></pre>
<p>'while' 루프를 작성할 때 조건문이 언젠가는 만족되지 않아서 더 이상 루프가 돌지 않도록 코드를 작성하는 것이 가장 중요하다. </p>
<h3>연습</h3>
<p>두 정수의 최대공약수(gcd)를 리턴하는 함수를 구현하라.</p>
<p>힌트: 유클리드 호제법을 활용하라. 아래 사이트 참조: http://tibyte.kr/224</p>
<p>견본답안:</p>
<blockquote>
def gcd(a, b):
    if a < b:
        # 이 경우에는 a와 b의 값을 서로 바꾼다.
        a, b = b, a
    while b != 0:
        a, b = b, a % b
    return a
</blockquote>

<p><strong>주의:</strong> 파이썬에서 두 변수에 할당된 값을 맞교환 하는 방법이 매우 간단하다.
하지만 C 또는 자바에서는 다르게 처리해야 한다. 
예를 들어, 아래와 같은 방식을 이용할 수 있다.
</blockquote>C
int a = 3
int b = 5
int temp</p>
<p>temp = a
a = b
b = temp
</blockquote></p>
<blockquote>
gcd(6, 8)
</blockquote>

<pre><code>2
</code></pre>
<blockquote>
gcd(14, 21)
</blockquote>

<pre><code>7
</code></pre>
<h2><code>for</code> 루프</h2>
<p><code>while</code> 반복문과는 달리 몇 번 반복되어야 하는지를 아는 경우 <code>for</code> 반복문을 사용할 수 있으며, 아래 형식을 따른다.
<blockquote>
    for 항목변수 in 컬렉션 자료형 값:
        코드1
        코드2
        ...
</blockquote></p>
<p>컬렉션 자료형: 리스트, 튜플, 문자열, 어레이 등 여러 개의 값을 동시에 다룰 수 있는 자료형을 의미하며, 다음 시간에 보다 자세히 다룬다.</p>
<p>여기서는 문자열과 <code>range()</code> 함수를 이용하여 <code>for</code> 반복문을 사용하는 법을 익힌다.</p>
<h3>문자열과 <code>for</code> 문</h3>
<h3>예제</h3>
<p>아래 코드는 문자열에 포함된 문자 각각을 출력한다.</p>
<blockquote>
for char in "adam":
    print(char)
</blockquote>

<pre><code>a
d
a
m
</code></pre>
<h3>연습</h3>
<p>문자열에 있는 소문자 <code>a</code>를 대문자 <code>A</code>로 변경하여 새로운 문자열을 생성하는 코드를 작성하라.</p>
<p>예를 들어, "aardvarks"를 이용하여 "AArdvArks"를 생성하는 코드를 작성하라.</p>
<p>견본답안1: </p>
<blockquote>
a_word = 'aardvarks'
new_word = ''
for char in a_word:
    if char == 'a':
        new_word = new_word + 'A'
    else:
        new_word = new_word + char

print(new_word)
</blockquote>

<pre><code>AArdvArks
</code></pre>
<h3>연습</h3>
<p>아래 문자열</p>
<p>' n o r t h w e s t e r n'</p>
<p>을 이용하여 아래 문자열을 생성하는 코드를 구현하라:</p>
<p>'Northwestern'</p>
<blockquote>
a_word = ' n o r t h w e s t e r n'

temp_word = ''
for char in a_word:
    if char != ' ':
        temp_word = temp_word + char

new_word = temp_word.title()

print(new_word)
</blockquote>

<pre><code>Northwestern
</code></pre>
<h3><code>range()</code> 함수와 <code>for</code> 문</h3>
<p><code>range()</code> 함수는 일정한 규칙에 따라 나열된 수열을 생성한다. </p>
<blockquote>
a_range = range(10)
print(a_range)
</blockquote>

<pre><code>range(0, 10)
</code></pre>
<p><code>range()</code> 함수의 리턴값의 자료형은 리스트이다.</p>
<p><strong>주의:</strong> 파이썬3에서 <code>range()</code> 함수의 리턴값은 <code>range</code>라는 자료형이다. 
리스트와 거의 비슷하지만 용도가 좀 다르다는 정도만 기억하고 넘어가도 좋다.</p>
<blockquote>
type(a_range)
</blockquote>

<pre><code>range
</code></pre>
<p><code>range()</code> 함수는 인자를 최대 세 개까지 받을 수 있다. 각 인자들의 역할은 슬라이싱에 사용되는 세 개의 인자들의 역할과 동일하다.</p>
<ul>
<li><code>range([start,] stop [, step])</code></li>
<li><code>start</code>의 경우 주어지지 않으면 <code>0</code>을 기본값으로 갖는다.</li>
<li><code>step</code>의 경우 주어지지 않으면 <code>1</code>을 기본값으로 갖느다.</li>
</ul>
<blockquote>
a_range_1 = range(3, 10)
a_range_1
</blockquote>

<pre><code>range(3, 10)
</code></pre>
<blockquote>
a_range_2 = range(3, 10, 2)
a_range_2
</blockquote>

<pre><code>range(3, 10, 2)
</code></pre>
<p><code>range</code> 함수는 <code>for</code>문에서 유용하게 활용된다. </p>
<blockquote>
for i in range(6):
    print(i,"의 제곱은", i ** 2, "이다.")
</blockquote>

<pre><code>0 의 제곱은 0 이다.
1 의 제곱은 1 이다.
2 의 제곱은 4 이다.
3 의 제곱은 9 이다.
4 의 제곱은 16 이다.
5 의 제곱은 25 이다.
</code></pre>
<blockquote>
for i in range(0, 6, 2):
    print(i,"의 제곱은", i ** 2, "이다.")
</blockquote>

<pre><code>0 의 제곱은 0 이다.
2 의 제곱은 4 이다.
4 의 제곱은 16 이다.
</code></pre>
<p>단순한 카운트 역할을 수행하는 용도로 <code>range</code>함수를 활용할 수도 있다.
즉, 어떤 일을 특정 횟수만큼 반복하고자 할 때 사용한다.</p>
<blockquote>
for i in range(5):
    print("다섯 번 출력합니다.")
</blockquote>

<pre><code>다섯 번 출력합니다.
다섯 번 출력합니다.
다섯 번 출력합니다.
다섯 번 출력합니다.
다섯 번 출력합니다.
</code></pre>
<p><code>range()</code> 함수와 문자열 인덱싱을 활용하면 문자열에 대해 <code>for</code>문을 직접 활용하는 것과 동일한 일을 할 수 있다. </p>
<p>예를 들어, 문자열의 길이와 <code>range()</code> 함수를 다음처럼 활용할 수 있다.</p>
<blockquote>
a_word = 'hamster'

for i in range(7):
    print(a_word[i])
</blockquote>

<pre><code>h
a
m
s
t
e
r
</code></pre>
<blockquote>
a_word = 'hamster'

for i in a_word:
    print(i)
</blockquote>

<pre><code>h
a
m
s
t
e
r
</code></pre>
<p><strong>주의:</strong> 문자열의 길이가 <code>range()</code> 함수에 사용되는 인자보다 작으면 오류가 발생한다. 
이유는 문자열의 길이보다 긴 인덱스가 사용되기 때문이다. </p>
<blockquote>
for i in range(8):
    print(a_word[i])
</blockquote>

<pre><code>h
a
m
s
t
e
r



---------------------------------------------------------------------------

IndexError                                Traceback (most recent call last)

&lt;ipython-input-27-b2a0345b7976&gt; in &lt;module&gt;()
      1 for i in range(8):
----&gt; 2     print(a_word[i])


IndexError: string index out of range
</code></pre>
<p>이제 아래 문제를 해결할 수 있다.</p>
<h3>연습</h3>
<p>자연수 n이 주어졌을 때, 1부터 n까지의 자연수 중에서 3의 배수이거나 숫자 3을 포함하는 숫자들의 합을 구하는 함수 sum_of_3s() 구현하기:
</blockquote>
sum_of_3s(10) = 3 + 6 + 9 = 18
sum_of_3s(15) = 3 + 6 + 9 + 12 + 13 + 15 = 58
</blockquote></p>
<p>견본답안:</p>
<blockquote>
def sum_of_3s(n):
    sum = 0
    for i in range(1, n+1):
        if i % 3 == 0:
            sum = sum + i
        elif '3' in str(i):
            sum = sum + i
    return sum
</blockquote>

<blockquote>
sum_of_3s(10)
</blockquote>

<pre><code>18
</code></pre>
<blockquote>
sum_of_3s(15)
</blockquote>

<pre><code>58
</code></pre>
<h3>연습</h3>
<p>두 정수의 최대공약수(gcd)를 리턴하는 함수를 구현하라.</p>
<p>견본답안:</p>
<blockquote>
def gcd(a, b):
    if a < b :
        a, b = b, a
    while b != 0:
        a, b = b, a % b
    return a
</blockquote>

<blockquote>
gcd(10, 25)
</blockquote>

<pre><code>5
</code></pre>
<blockquote>
gcd(124, 36)
</blockquote>

<pre><code>4
</code></pre>
<h3>연습</h3>
<p>두 정수의 최소공배수(lcm)를 리턴하는 함수를 구현하라.</p>
<p>견본답안:</p>
<blockquote>
def lcm(a, b):
    g = gcd(a, b)
    c = a/g
    return c*b
</blockquote>

<blockquote>
lcm(10, 25)
</blockquote>

<pre><code>50.0
</code></pre>
<blockquote>
lcm(124, 36)
</blockquote>

<pre><code>1116.0
</code></pre>
<h3>연습</h3>
<p>아래 노래 가사를 활용하는 문제이다.</p>
<blockquote>
song = "When you are smiling, the whole world smiles with you"
</blockquote>

<p>(1) 위 문자열에서 <code>a</code>가 등장하는 횟수를 구하는 코드를 작성하라.</p>
<p>견본답안:</p>
<blockquote>
count_a = 0
for word in song:
    if word == 'a':
        count_a += 1

print(count_a)
</blockquote>

<pre><code>1
</code></pre>
<p>(2) 위 문자열에서 대소문자 구별없이 <code>w</code>가 등장하는 횟수를 구하는 코드를 작성하라.</p>
<p>견본답안:</p>
<blockquote>
count_w = 0
for word in song.lower():
    if word == 'w':
        count_w += 1

print(count_w)
</blockquote>

<pre><code>4
</code></pre>
<p>(3) 다음 문자열을 이용하여, <code>whnyrsmlngthwhlwrldsmlswthyu</code>를 생성하는 코드를 작성하라. 
    (힌트: 모음(<code>aeiou</code>)와 공백 제거)</p>
<p>견본답안:</p>
<blockquote>
new_song = ''
for word in song.lower():
    if word not in 'aeiou, ':
        new_song += word

print(new_song)
</blockquote>

<pre><code>whnyrsmlngthwhlwrldsmlswthy
</code></pre>