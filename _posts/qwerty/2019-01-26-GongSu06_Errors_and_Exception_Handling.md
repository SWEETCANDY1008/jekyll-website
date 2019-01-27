---
layout: post
title: GongSu06_Errors_and_Exception_Handling
date: 2019-01-26 22:34:50 +0900
categories: qwerty
---
<h1>오류 및 예외 처리</h1>
<h4>수정 사항</h4>
<ul>
<li>좀 더 실용적인 수학함수 활용 가능</li>
</ul>
<h2>개요</h2>
<ul>
<li>
<p>코딩할 때 발생할 수 있는 다양한 <strong>오류</strong> 살펴 보기</p>
</li>
<li>
<p><strong>오류 메시지</strong> 정보 확인 방법</p>
</li>
<li>
<p><strong>예외 처리</strong>, 즉 오류가 발생할 수 있는 예외적인 상황을 미리 고려하는 방법 소개</p>
</li>
</ul>
<h2>오늘의 주요 예제</h2>
<p>아래 코드는 <code>input()</code> 함수를 이용하여 사용자로부터 숫자를 입력받아 
그 숫자의 제곱을 리턴하는 내용을 담고 있다. 
코드를 실행하면 숫자를 입력하라는 창이 나오며, 
여기에 숫자 3을 입력하면 정상적으로 작동한다. 
하지만, 예를 들어, 3.2를 입력하면 값 오류(value error)가 발생한다. </p>
<blockquote>
input_number = input("A number please: ")
number = int(input_number)

print("제곱의 결과는", number**2, "입니다.")
</blockquote>

<pre><code>A number please: 3.2



---------------------------------------------------------------------------

ValueError                                Traceback (most recent call last)

&lt;ipython-input-1-48fe2d735a99&gt; in &lt;module&gt;()
      1 input_number = input("A number please: ")
----&gt; 2 number = int(input_number)
      3 
      4 print("제곱의 결과는", number**2, "입니다.")


ValueError: invalid literal for int() with base 10: '3.2'
</code></pre>
<blockquote>
input_number = input("A number please: ")
number = int(input_number)

print("제곱의 결과는", number**2, "입니다.")
</blockquote>

<pre><code>A number please: 3
제곱의 결과는 9 입니다.
</code></pre>
<p>위 코드는 정수들의 제곱을 계산하는 프로그램이다. 
하지만 사용자가 경우에 따라 정수 이외의 값을 입력하면 시스템이 다운된다. 
이에 대한 해결책을 다루고자 한다.</p>
<h2>오류 예제</h2>
<p>먼저 오류의 다양한 예제를 살펴보자.
다음 코드들은 모두 오류를 발생시킨다.</p>
<h3>예제: 0으로 나누기 오류</h3>
<blockquote>
4.6/0
</blockquote>

<p>오류 설명: 0으로 나눌 수 없다.</p>
<h3>예제: 문법 오류</h3>
<blockquote>
sentence = 'I am a sentence
</blockquote>

<p>오류 설명: 문자열 양 끝의 따옴표가 짝이 맞아야 한다.
* 작은 따옴표끼리 또는 큰 따옴표끼리</p>
<h3>예제: 들여쓰기 문법 오류</h3>
<blockquote>
for i in range(3):
    j = i * 2
      print(i, j)
</blockquote>

<p>오류 설명: 2번 줄과 3번 줄의 들여쓰기 정도가 동일해야 한다.</p>
<h3>예제: 자료형 오류</h3>
<p>아래 연산은 모두 오류를 발생시킨다.</p>
<blockquote>
new_string = 'cat' - 'dog'
new_string = 'cat' * 'dog'
new_string = 'cat' / 'dog'

new_string = 'cat' + 3
new_string = 'cat' - 3
new_string = 'cat' / 3
</blockquote>

<p>이유: 문자열 끼리의 합, 문자열과 정수의 곱셈만 정의되어 있다.</p>
<h3>예제: 이름 오류</h3>
<blockquote>
print(party)
</blockquote>

<p>오류 설명: 미리 선언된 변수만 사용할 수 있다.</p>
<h3>예제: 인덱스 오류</h3>
<blockquote>
a_string = 'abcdefg'
a_string[12]
</blockquote>

<p>오류 설명: 인덱스는 문자열의 길이보다 작은 수만 사용할 수 있다.</p>
<h3>예제: 값 오류</h3>
<blockquote>
int(a_string)
</blockquote>

<p>오류 설명: <code>int()</code> 함수는 정수로만 구성된 문자열만 처리할 수 있다.</p>
<h3>예제: 속성 오류</h3>
<blockquote>
print(a_string.len())
</blockquote>

<p>오류 설명: 문자열 자료형에는 <code>len()</code> 메소드가 존재하지 않는다.</p>
<p><strong>주의:</strong> <code>len()</code> 이라는 함수는 문자열의 길이를 확인하지만 문자열 메소드는 아니다. 
이후에 다룰 리스트, 튜플 등에 대해서도 사용할 수 있는 함수이다.</p>
<h2>오류 확인</h2>
<p>앞서 언급한 코드들을 실행하면 오류가 발생하고 어디서 어떤 오류가 발생하였는가에 대한 정보를 
파이썬 해석기가 바로 알려 준다. </p>
<h3>예제</h3>
<blockquote>
sentence = 'I am a sentence
</blockquote>

<pre><code>  File "&lt;ipython-input-3-a6097ed4dc2e&gt;", line 1
    sentence = 'I am a sentence
                               ^
SyntaxError: EOL while scanning string literal
</code></pre>
<p>오류를 확인하는 메시지가 처음 볼 때는 매우 생소하다. 
위 오류 메시지를 간단하게 살펴보면 다음과 같다.</p>
<ul>
<li>
<p><code>File "&lt;ipython-input-3-a6097ed4dc2e&gt;", line 1</code></p>
<p>1번 줄에서 오류 발생</p>
</li>
<li>
<p><code>sentence = 'I am a sentence</code> 
                             ^</p>
<p>오류 발생 위치 명시</p>
</li>
<li>
<p><code>SyntaxError: EOL while scanning string literal</code></p>
<p>오류 종류 표시: 문법 오류(SyntaxError)</p>
</li>
</ul>
<h3>예제</h3>
<p>아래 예제는 0으로 나눌 때 발생하는 오류를 나타낸다.
오류에 대한 정보를 잘 살펴보면서 어떤 내용을 담고 있는지 확인해 보아야 한다.</p>
<blockquote>
a = 0
4/a
</blockquote>

<pre><code>---------------------------------------------------------------------------

ZeroDivisionError                         Traceback (most recent call last)

&lt;ipython-input-4-e9adcd46fbe1&gt; in &lt;module&gt;()
      1 a = 0
----&gt; 2 4/a


ZeroDivisionError: division by zero
</code></pre>
<h2>오류의 종류</h2>
<p>앞서 예제들을 통해 살펴 보았듯이 다양한 종류의 오류가 발생하며,
코드가 길어지거나 복잡해지면 오류가 발생할 가능성은 점차 커진다.
오류의 종류를 파악하면 어디서 왜 오류가 발생하였는지를 보다 쉽게 파악하여
코드를 수정할 수 있게 된다.</p>
<p>따라서 코드의 발생원인을 바로 알아낼 수 있어야 하며 이를 위해서는 오류 메시지를 
제대로 확인할 수 있어야 한다. 
하지만 여기서는 언급된 예제 정도의 수준만 다루고 넘어간다.</p>
<p>코딩을 하다 보면 어차피 다양한 오류와 마주치게 될 텐데 그때마다
스스로 오류의 내용과 원인을 확인해 나가는 과정을 통해 
보다 많은 경험을 쌓는 길 외에는 달리 방법이 없다.</p>
<h2>예외 처리</h2>
<p>코드에 문법 오류가 포함되어 있는 경우 아예 실행되지 않는다. 
그렇지 않은 경우에는 일단 실행이 되고 중간에 오류가 발생하면 바로 멈춰버린다.</p>
<p>이렇게 중간에 오류가 발생할 수 있는 경우를 미리 생각하여 대비하는 과정을 
<strong>예외 처리(exception handling)</strong>라고 부른다. </p>
<p>예를 들어, 오류가 발생하더라도 오류발생 이전까지 생성된 정보들을 저장하거나, 오류발생 이유를 좀 더 자세히 다루거나, 아니면 오류발생에 대한 보다 자세한 정보를 사용자에게 알려주기 위해 예외 처리를 사용한다. </p>
<p>사용방식은 다음과 같다.</p>
<blockquote>
try:
    코드1
except:
    코드2
</blockquote>

<ul>
<li>먼저 코드1 부분을 실행한다.</li>
<li>코드1 부분이 실행되면서 오류가 발생하지 않으면  코드2 부분은 무시하고 다음으로 넘어간다.</li>
<li>코드1 부분이 실행되면서 오류가 발생하면 더이상 진행하지 않고 바로 코드2 부분을 실행한다.</li>
</ul>
<h3>예제</h3>
<p>아래 코드는 <code>input()</code> 함수를 이용하여 사용자로부터 숫자를 입력받아 그 숫자의 제곱을 리턴하고자 하는 내용을 담고 있으며, 코드에는 문법적 오류가 없다. </p>
<p>그리고 코드를 실행하면 숫자를 입력하라는 창이 나온다. 
여기에 숫자 3을 입력하면 정상적으로 작동하지만 
예를 들어, 3.2를 입력하면 값 오류(value error)가 발생한다. </p>
<blockquote>
number_to_square = input("정수를 입력하세요: ")

# number_to_square 변수의 자료형이 문자열(str)임에 주의하라. 
# 따라서 연산을 하고 싶으면 정수형(int)으로 형변환을 먼저 해야 한다. 

number = int(number_to_square)

print("제곱의 결과는", number**2, "입니다.")
</blockquote>

<pre><code>정수를 입력하세요: 3
제곱의 결과는 9 입니다.
</code></pre>
<blockquote>
number_to_square = input("정수를 입력하세요: ")

# number_to_square 변수의 자료형이 문자열(str)임에 주의하라. 
# 따라서 연산을 하고 싶으면 정수형(int)으로 형변환을 먼저 해야 한다. 

number = int(number_to_square)

print("제곱의 결과는", number**2, "입니다.")
</blockquote>

<pre><code>정수를 입력하세요: 3.2



---------------------------------------------------------------------------

ValueError                                Traceback (most recent call last)

&lt;ipython-input-6-a17e482f369d&gt; in &lt;module&gt;()
      4 # 따라서 연산을 하고 싶으면 정수형(int)으로 형변환을 먼저 해야 한다.
      5 
----&gt; 6 number = int(number_to_square)
      7 
      8 print("제곱의 결과는", number**2, "입니다.")


ValueError: invalid literal for int() with base 10: '3.2'
</code></pre>
<p>3.2를 입력했을 때 오류가 발생하는 이유는 <code>int()</code> 함수가 정수 모양의 문자열만 
처리할 수 있기 때문이다. </p>
<p>사실 정수들의 제곱을 계산하는 프로그램을 작성하였지만 경우에 따라 
정수 이외의 값을 입력하는 경우가 발생하게 되며, 이런 경우를 대비해야 한다.
즉, 오류가 발생할 것을 미리 예상해야 하며, 어떻게 대처해야 할지 준비해야 하는데, 
<code>try ... except ...</code>문을 이용하여 예외를 처리하는 방식을 활용할 수 있다.</p>
<blockquote>
number_to_square = input("정수를 입력하세요: ")

try: 
    number = int(number_to_square)
    print("제곱의 결과는", number ** 2, "입니다.")
except:
    print("정수를 입력해야 합니다.")

</blockquote>

<pre><code>정수를 입력하세요: 3.2
정수를 입력해야 합니다.
</code></pre>
<p>올바른 값이 들어올 때까지 입력을 요구할 수 있다.</p>
<blockquote>
while True:
    try:
        number = int(input("정수를 입력하세요: "))
        print("제곱의 결과는", number**2, "입니다.")
        break
    except:
        print("정수를 입력해야 합니다.")
</blockquote>

<pre><code>정수를 입력하세요: 3.2
정수를 입력해야 합니다.
정수를 입력하세요: 3
제곱의 결과는 9 입니다.
</code></pre>
<p>오류 종류에 맞추어 다양한 대처를 하기 위해서는 오류의 종류를 명시하여 예외처리를 하면 된다.
아래 코드는 입력 갑에 따라 다른 오류가 발생하고 그에 상응하는 방식으로 예외처리를 실행한다.</p>
<h4>값 오류(ValueError)의 경우</h4>
<blockquote>
number_to_square = input("정수를 입력하세요: ")

try: 
    number = int(number_to_square)
    a = 5/(number - 4)
    print("결과는", a, "입니다.")
except ValueError:
    print("정수를 입력해야 합니다.")
except ZeroDivisionError:
    print("4는 빼고 하세요.")
</blockquote>

<pre><code>정수를 입력하세요: 3.2
정수를 입력해야 합니다.
</code></pre>
<h4>0으로 나누기 오류(ZeroDivisionError)의 경우</h4>
<blockquote>
number_to_square = input("A number please: ")

try: 
    number = int(number_to_square)
    a = 5/(number - 4)
    print("결과는", a, "입니다.")
except ValueError:
    print("정수를 입력해야 합니다.")
except ZeroDivisionError:
    print("4는 빼고 하세요.")
</blockquote>

<pre><code>A number please: 4
4는 빼고 하세요.
</code></pre>
<p><strong>주의:</strong> 이와 같이 발생할 수 예외를 가능한 한 모두 염두하는 프로그램을 구현해야 하는 일은
매우 어려운 일이다.</p>
<p>앞서 보았듯이 오류의 종류를 정확히 알 필요가 발생한다. </p>
<p>다음 예제에서 보듯이 오류의 종류를 틀리게 명시하면 예외 처리가 제대로 작동하지 않는다.</p>
<blockquote>
try:
    a = 1/0
except ValueError:
    print("This program stops here.")
</blockquote>

<pre><code>---------------------------------------------------------------------------

ZeroDivisionError                         Traceback (most recent call last)

&lt;ipython-input-13-8b3fef748b14&gt; in &lt;module&gt;()
      1 try:
----&gt; 2     a = 1/0
      3 except ValueError:
      4     print("This program stops here.")


ZeroDivisionError: division by zero
</code></pre>
<h3><code>raise</code> 함수</h3>
<p>강제로 오류를 발생시키고자 하는 경우에 사용한다.</p>
<h3>예제</h3>
<p>어떤 함수를 정확히 정의하지 않은 상태에서 다른 중요한 일을 먼저 처리하고자 할 때 
아래와 같이 함수를 선언하고 넘어갈 수 있다.</p>
<p>그런데 아래 함수를 제대로 선언하지 않은 채로 다른 곳에서 호출하면 </p>
<pre><code>"아직 정의되어 있지 않음"
</code></pre>
<p>이란 메시지로 정보를 알려주게 된다. </p>
<blockquote>
def to_define():
    """아주 복잡하지만 지금 당장 불필요"""
    raise NotImplementedError("아직 정의되어 있지 않음")
</blockquote>

<blockquote>
print(to_define())
</blockquote>

<pre><code>---------------------------------------------------------------------------

NotImplementedError                       Traceback (most recent call last)

&lt;ipython-input-15-45a5fc6cdf3f&gt; in &lt;module&gt;()
----&gt; 1 print(to_define())


&lt;ipython-input-14-40549825b2de&gt; in to_define()
      1 def to_define():
      2     """아주 복잡하지만 지금 당장 불필요"""
----&gt; 3     raise NotImplementedError("아직 정의되어 있지 않음")


NotImplementedError: 아직 정의되어 있지 않음
</code></pre>
<p><strong>주의:</strong> 오류 처리를 사용하지 않으면 오류 메시지가 보이지 않을 수도 있음에 주의해야 한다.</p>
<blockquote>
def to_define1():
    """아주 복잡하지만 지금 당장 불필요"""
</blockquote>

<blockquote>
print(to_define1())
</blockquote>

<pre><code>None
</code></pre>
<h2>코드의 안전성 문제</h2>
<p>문법 오류 또는 실행 중에 오류가 발생하지 않는다 하더라도 <strong>코드의 안전성</strong>이 보장되지는 않는다. 
코드의 안정성이라 함은 코드를 실행할 때 기대하는 결과가 산출된다는 것을 보장한다는 의미이다. </p>
<h3>예제</h3>
<p>아래 코드는 숫자의 제곱을 리턴하는 <code>square()</code> 함수를 제대로 구현하지 못한 경우를 다룬다.</p>
<blockquote>
def square(number):
    """
    정수를 인자로 입력 받아 제곱을 리턴한다.
    """

    square_of_number = number * 2

    return square_of_number

</blockquote>

<p>위 함수를 아래와 같이 호출하면 오류가 전혀 발생하지 않지만,
엉뚱한 값을 리턴한다.</p>
<blockquote>
square(3)
</blockquote>

<pre><code>6
</code></pre>
<p><strong>주의:</strong> <code>help()</code> 를 이용하여 어떤 함수가 무슨 일을 하는지 내용을 확인할 수 있다.
단, 함수를 정의할 때 함께 적힌 문서화 문자열(docstring) 내용이 확인된다.
따라서, 함수를 정의할 때 문서화 문자열에 가능한 유효한 정보를 입력해 두어야 한다.</p>
<blockquote>
help(square)
</blockquote>

<pre><code>Help on function square in module __main__:

square(number)
    정수를 인자로 입력 받아 제곱을 리턴한다.
</code></pre>
<h3>오류에 대한 보다 자세한 정보</h3>
<p>파이썬에서 다루는 오류에 대한 보다 자세한 정보는 아래 사이트들에 상세하게 안내되어 있다.</p>
<ul>
<li>
<p>파이썬 기본 내장 오류 정보 문서:
    https://docs.python.org/3.4/library/exceptions.html</p>
</li>
<li>
<p>파이썬 예외처리 정보 문서: 
    https://docs.python.org/3.4/tutorial/errors.html</p>
</li>
</ul>
<h2>연습문제</h2>
<h3>연습</h3>
<p>아래 코드는 100을 입력한 값으로 나누는 함수이다.
다만 0을 입력할 경우 0으로 나누기 오류(<code>ZeroDivisionError</code>)가 발생한다.</p>
<blockquote>
number_to_square = input("100을 나눌 숫자를 입력하세요: ")

number = int(number_to_square)
print("100을 입력한 값으로 나눈 결과는", 100/number, "입니다.")
</blockquote>

<pre><code>100을 나눌 숫자를 입력하세요: 0



---------------------------------------------------------------------------

ZeroDivisionError                         Traceback (most recent call last)

&lt;ipython-input-22-2769f9a68b46&gt; in &lt;module&gt;()
      2 
      3 number = int(number_to_square)
----&gt; 4 print("100을 입력한 값으로 나눈 결과는", 100/number, "입니다.")


ZeroDivisionError: division by zero
</code></pre>
<p>아래 내용이 충족되도록 위 코드를 수정하라.</p>
<ul>
<li>나눗셈이 부동소수점으로 계산되도록 한다. </li>
<li>0이 아닌 숫자가 입력될 경우 100을 그 숫자로 나눈다.</li>
<li>0이 입력될 경우 0이 아닌 숫자를 입력하라고 전달한다. </li>
<li>숫자가 아닌 값이 입력될 경우 숫자를 입력하라고 전달한다.</li>
</ul>
<p>견본답안:</p>
<blockquote>
number_to_square = input("A number to divide 100: ")

try: 
    number = float(number_to_square)
    print("100을 입력한 값으로 나눈 결과는", 100/number, "입니다.")
except ZeroDivisionError:
    raise ZeroDivisionError('0이 아닌 숫자를 입력하세요.')
except ValueError:
    raise ValueError('숫자를 입력하세요.')    
</blockquote>

<pre><code>A number to divide 100: 0



---------------------------------------------------------------------------

ZeroDivisionError                         Traceback (most recent call last)

&lt;ipython-input-23-345acef7d417&gt; in &lt;module&gt;()
      4     number = float(number_to_square)
----&gt; 5     print("100을 입력한 값으로 나눈 결과는", 100/number, "입니다.")
      6 except ZeroDivisionError:


ZeroDivisionError: float division by zero


During handling of the above exception, another exception occurred:


ZeroDivisionError                         Traceback (most recent call last)

&lt;ipython-input-23-345acef7d417&gt; in &lt;module&gt;()
      5     print("100을 입력한 값으로 나눈 결과는", 100/number, "입니다.")
      6 except ZeroDivisionError:
----&gt; 7     raise ZeroDivisionError('0이 아닌 숫자를 입력하세요.')
      8 except ValueError:
      9     raise ValueError('숫자를 입력하세요.')


ZeroDivisionError: 0이 아닌 숫자를 입력하세요.
</code></pre>
<blockquote>
number_to_square = input("A number to divide 100: ")

try: 
    number = float(number_to_square)
    print("100을 입력한 값으로 나눈 결과는", 100/number, "입니다.")
except ZeroDivisionError:
    raise ZeroDivisionError('0이 아닌 숫자를 입력하세요.')
except ValueError:
    raise ValueError('숫자를 입력하세요.')    
</blockquote>

<pre><code>A number to divide 100: 3
100을 입력한 값으로 나눈 결과는 33.333333333333336 입니다.
</code></pre>
<h3>연습</h3>
<p>두 개의 정수 <code>a</code>와 <code>b</code>를 입력 받아 <code>a/b</code>를 계산하여 출력하는 코드를 작성하라.</p>
<p>견본답안 1:</p>
<blockquote>
while True:
    try:
        a, b = input("정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.\n").split(',')
        a, b = int(a), int(b)
        print("계산의 결과는", a/b, "입니다.")
        break
    except ValueError:
        print("정수 두 개를 쉼표로 구분해서 입력해야 합니다.\n")
    except ZeroDivisionError:
        print("둘째 수는 0이 아니어야 합니다.\n")
</blockquote>

<pre><code>정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.
3, 0
둘째 수는 0이 아니어야 합니다.

정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.
3 4
정수 두 개를 쉼표로 구분해서 입력해야 합니다.

정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.
3, 4
계산의 결과는 0.75 입니다.
</code></pre>
<p>견본답안 2: <code>map</code> 함수를 활용하여 <code>a</code>, <code>b</code> 각각에 <code>int</code> 함수를 자동으로 적용할 수 있다.
<code>map</code> 함수에 대한 설명은 <a href="https://wikidocs.net/32#map">여기</a>를 참조하면 된다.</p>
<blockquote>
while True:
    try:
        a, b = map(int, input("정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.\n").split(','))
        print("계산의 결과는", a/b, "입니다.")
        break
    except ValueError:
        print("정수 두 개를 쉼표로 구분해서 입력해야 합니다.\n")
    except ZeroDivisionError:
        print("둘째 수는 0이 아니어야 합니다.\n")
</blockquote>

<pre><code>정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.
3, 0
둘째 수는 0이 아니어야 합니다.

정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.
3 4
정수 두 개를 쉼표로 구분해서 입력해야 합니다.

정수 두 개를 입력하세요. 쉼표를 사용해야 합니다.
3, 4
계산의 결과는 0.75 입니다.
</code></pre>
<h3>연습</h3>
<p>키와 몸무게를 인자로 받아 체질량지수(BMI)를 구하는 코드를 작성하라.
아래 사항들을 참고한다. </p>
<p>$$BMI = \frac{weight}{height^2}$$</p>
<ul>
<li>단위:<ul>
<li>몸무게(weight): <code>kg</code></li>
<li>키(height): <code>m</code></li>
</ul>
</li>
<li><code>BMI</code> 수치에 따른 체중 분류<ul>
<li><code>BMI &lt;= 18.5</code>이면 저체중</li>
<li><code>18.5 &lt; BMI &lt;= 23</code>이면 정상</li>
<li><code>23 &lt; BMI &lt;= 25</code>이면 과체중</li>
<li><code>25 &lt; BMI &lt;= 30</code>이면 비만</li>
<li><code>BMI &gt; 30</code>이면 고도비만</li>
</ul>
</li>
</ul>
<p>견본답안:</p>
<blockquote>
while True:
    try:
        print("키와 몸무게를 입력하세요: ")
        a, b = map(float, input().split(", "))
        BMI = b/(a**2)
        if BMI <= 18.5:
            print("BMI는", BMI, "입니다. 저체중입니다.")
        elif 18.5 < BMI <= 23:
            print("BMI는", BMI, "입니다. 정상 체중입니다.")
        elif 23 < BMI <= 25:
            print("BMI는", BMI, "입니다. 비만입니다.")
        elif 25 < BMI <= 30:
            print("BMI는", BMI, "입니다. 과체중입니다.")
        else:
            print("BMI는", BMI, "입니다. 고도비만입니다.")
        break
    except ValueError:
        print("숫자를 입력하세요.")
    except ZeroDivisionError:
        print("0이 아닌 숫자를 입력하세요.")
</blockquote>

<pre><code>키와 몸무게를 입력하세요: 
1.8, 70
BMI는 21.604938271604937 입니다. 정상 체중입니다.
</code></pre>