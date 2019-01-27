---
layout: post
title: GongSu13_Numpy_Intro
date: 2019-01-26 22:34:59 +0900
categories: qwerty
---
<h1>넘파이(Numpy) 소개</h1>
<p>파이썬에서 여러 개의 숫자를 동시에 다룰 수 있는 자료형은 크게 두 종류로 나뉘어진다.</p>
<ul>
<li>튜플(<code>tuple</code>), 리스트(<code>list</code>), 사전(<code>dictrionary</code>) 등 숫자들을 담을 수 있는 컬렉션 자료형</li>
</ul>
<p>그런데 튜플, 리스트, 사전은 다음과 같은 단점을 갖고 있다.</p>
<ul>
<li>튜플: 수정이 안되어 유연성이 떨어짐.</li>
<li>리스트: 길이가 몇 만, 몇 십만, 몇 백만 처럼 매우 길어지면 데이터를 조작하는 데에 많은 시간이 소요됨.</li>
<li>사전: 데이터 조작 속도는 매우 빠르나 키와 키값을 항상 사용해야 하는 문법상 제약이 따름
    또한 행렬 등 다차원 데이터는 처리하기 힘들다.</li>
</ul>
<p>넘파이(numpy) 모듈은 언급한 단점들을 극복하기 위해 만들어진 라이브러리이며, 다음의 특징을 갖고 있다.</p>
<ul>
<li>다차원 어레이 지원</li>
<li>빠른 처리 속도</li>
<li>과학용 수치 계산에 활용 용이</li>
</ul>
<h2>주요 내용</h2>
<p>숫자 데이터(numerical data)를 생성하고 조작하는 데에 매우 효율적으로 사용되는 라이브러리이다.
넘파이(Numpy)는 파이썬 표준라이브러리를 확장하는 모듈이며, 추가로 설치해야 하지만, 
아나콘다 팩키지에 기본적으로 포함되어 있다.</p>
<p>이번 장에서는 넘파이 모듈의 기본 사용법을 소개한다.</p>
<h2>오늘의 주요 예제</h2>
<p>아래 두 개의 그래프는 각각 균등분포(Uniform Distrubution)와 표준정규분포(Standard Normal Distrubution)의
예제들이다. </p>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/distribution/uniform_dist.png" | relative_url }}" style="width:300">
</td>
<td>
<img src="{{ "assets/images/distribution/std_normal_dist.png" | relative_url }}" style="width:300">
</td>
</tr>
</table>
</p>

<p>위 그래프들을 생성할 때 사용된 데이터를 간단하게 생성하는 방법을 알아 보도록 하자.</p>
<h2>넘파이 기본 사용법</h2>
<h3>numpy 모듈 임포트 하기</h3>
<p>넘파이 모듈을 사용하려면 먼저 numpy 모듈을 추가 설치해야 한다.
하지만 Anaconda 등을 사용하면 이미 설치되어 있고 넘파이 모듈을 임포트하기만 하면 된다.
numpy 모듈의 약칭으로 np를 관례적으로 사용한다.</p>
<blockquote>
import numpy as np
</blockquote>

<h3>넘파이 어레이(Array)  소개</h3>
<p>넘파이 모듈에서 가장 주요한 요소는 어레이(array)이다.
어레이의 사용법은 리스트의 경우와 기본적으로 비슷하다. </p>
<h4>어레이 예제</h4>
<p>예를 들어, <code>0, 1, 2, 3</code>으로 구성된 어레이를 생성하고자 하면 <code>array</code> 함수를 
사용하면 된다. </p>
<blockquote>
a = np.array([0, 1, 2, 3])
</blockquote>

<p>어레이의 모양과 활용은 리스트와 비슷하다. </p>
<blockquote>
print(a)
</blockquote>

<pre><code>[0 1 2 3]
</code></pre>
<p>하지만 자료형은 넘파이 모듈에서 정의된 어레이인 <code>ndarray</code> 이다.</p>
<blockquote>
print(type(a))
</blockquote>

<pre><code>&lt;class 'numpy.ndarray'&gt;
</code></pre>
<h4>어레이로 형변환 하기</h4>
<p><code>array</code> 함수는 리스트와 더불어 튜플도 입력받는다.
리스트와 튜플 어느 것을 써도 리턴값은 언제나 어레이이다.</p>
<p>예를 들어, 위 정의를 튜플을 이용하여 정의할 수 있다.</p>
<blockquote>
b = np.array((0, 1, 2, 3))
</blockquote>

<p><code>a</code>와 <code>b</code>가 동일한 항목으로 구성된 리스트임을 아래와 같이 확인할 수 있다.</p>
<blockquote>
c = (a == b)
c
</blockquote>

<pre><code>array([ True,  True,  True,  True], dtype=bool)
</code></pre>
<p><strong> 주의사항 1: 어레이 객체들 사이의 비교는 각 항목별로 실행된다.</strong></p>
<p><code>a == b</code>의 실행결과는 새로운 어레이이며 각 항목별로 비교한 결과인 불(bool) 값을
갖게 된다.</p>
<p><code>c</code>의 실행결과를 보면 <code>dtype</code>이라는 키워드 인자가 추가되어 있다. 
<code>dtype</code> 키워드는 생성된 어레이 객체의 각 항목의 자료형을 갖고 있다. </p>
<p><strong> 주의사항 2: 어레이 객체의 각 항목들은 모두 동일한 자료형이어야 한다.</strong></p>
<p>리스트, 튜플과는 달리 어레이의 각 항목은 동일한 자료형들로 구성되어 있다.</p>
<h4>어레이의 자료형 예제</h4>
<p>변수 <code>a</code>에 할당된 어레이에는 <code>int</code>형 숫자들이 들어있는데, 
어레이의 자료형을 확인하는 방법은 다음과 같이 <code>dtype</code>이라는 속성을 이용한다. </p>
<blockquote>
a.dtype
</blockquote>

<pre><code>dtype('int64')
</code></pre>
<p><strong>주의:</strong> <code>int64</code> 처럼 <code>int</code> 다음에 숫자가 붙는 경우가 있다. 몇 비트 숫자들인지를 보여주는 정보이다.
즉, 여기서는 64비트 정수라는 의미이다.</p>
<p>변수 <code>b</code>에도 int형 숫자들로 구성된 어레이가 할당되어 있다.</p>
<blockquote>
b.dtype
</blockquote>

<pre><code>dtype('int64')
</code></pre>
<p>반면에 변수 <code>c</code>는 불값(bool)으로 구성되어 있다.</p>
<blockquote>
c.dtype
</blockquote>

<pre><code>dtype('bool')
</code></pre>
<p><code>a</code> 또는 <code>b</code>와는 달리 <code>c</code>의 경우 <code>dtype</code>이 명시되는 이유는 
<code>True, False</code>가 참, 거짓의 의미 외에 <code>1, 0</code>의 의미 또한 가질 수 있기 때문이다.</p>
<p>다음의 경우 <code>dtype</code> 키워드 인자값으로 <code>int</code>를 입력하면 자료형이 달리지는 것을
확인할 수 있다.</p>
<blockquote>
d = np.array([ True,  True,  True,  True], dtype=int)
d
</blockquote>

<pre><code>array([1, 1, 1, 1])
</code></pre>
<h4>어레이의 속성들</h4>
<p><code>array</code> 자료형은 <code>dtype</code> 이외에 <code>ndim</code>, <code>shapre</code>등 다양한 속성을 포함한다.
각 속성들의 의미와 활용은 필요할 때마다 추가로 설명될 것이다.</p>
<h3>넘파이 어레이의 장점: 빠른 처리 속도</h3>
<p>어레이는 리스트보다 빠르게 데이터를 처리한다. 
아래의 예제는 5천만 개의 홀수들로 이루어진 리스트와 어레이를 조작하는 속도를 비교한 것이다.
어레이를 이용하는 경우가 몇 십배 이상 빠름을 확인할 수 있다.</p>
<blockquote>
import time

start_time = time.clock()
a_list = range(0, 100000000, 2)
a_list_square = [i**2 for i in a_list]
end_time = time.clock()

list_time = end_time - start_time
print(list_time)
</blockquote>

<pre><code>12.486455
</code></pre>
<p>넘파이의 <code>arange</code> 함수는 <code>range</code>와 동일한 기능을 수행한다.
다만 리스트가 아닌 어레이를 리턴한다.</p>
<blockquote>
import time

start_time = time.clock()
an_array = np.arange(0, 100000000, 2)
an_array**2
end_time = time.clock()

array_time = end_time - start_time
print(array_time)
</blockquote>

<pre><code>0.3341150000000006
</code></pre>
<p><strong>주의:</strong> 앞서 두 개의 리스트를 비교할 때 처럼 어레이 관련 연산은 기본적으로 각 항목별로 실행된다. 
따라사 <code>a ** 2</code>는 각 항목을 제곱하라는 의미이다.</p>
<h2>어레이 생성하기</h2>
<h3>수동 생성</h3>
<h4>수동으로 1차원 어레이 생성하기</h4>
<blockquote>
a_1dim = np.array([0, 1, 2, 3])
a_1dim
</blockquote>

<pre><code>array([0, 1, 2, 3])
</code></pre>
<h4>생성된 어레이의 차원 확인</h4>
<p><code>a</code>에는 1차원 어레이가 할당되었다. 
차원 정보는 <code>ndim</code>이라는 속성에 담겨져 있다. </p>
<blockquote>
a_1dim.ndim
</blockquote>

<pre><code>1
</code></pre>
<h4>생성된 어레이의 모양(shape) 확인</h4>
<p>생성된 어레의 <strong>모양(shape)</strong>은 <code>shape</code>라는 속성을 이용하여 확인한다.</p>
<blockquote>
a_1dim.shape
</blockquote>

<pre><code>(4,)
</code></pre>
<p>즉, 변수 <code>a_1dim</code>에 할당된 어레이인 <code>array([0, 1, 2, 3])</code>는</p>
<ul>
<li>1차원 어레이이며,</li>
<li>길이가 4이다. 
    경우에 따라, 숫자 4에 추가로 알파벳 L이 붙을 수 있다. 
    이는 long int를 의미하며, 사용하는 컴퓨터마다 다른 형식을 사용할 수 있다.</li>
</ul>
<p>위 어레이를 1차원 리스트와 동일한 모양이다.
</blockquote>
[0, 1, 2, 3]
</blockquote></p>
<p>즉, 길이가 <code>d</code>인 1차원 어레이는 길이가 <code>d</code>인 리스트에 대응한다.</p>
<h4>수동으로 2차원 어레이 생성하기</h4>
<p>예를들어, 아래와 같은 <code>3 x 2</code> 행렬을 2차원 어레이로 구현할 수 있다.</p>
<p>$$\left [ \begin{matrix} 0 &amp; 1 \ 2 &amp; 3
\ 4 &amp; 5\end{matrix} \right ]$$</p>
<blockquote>
a_2dim = np.array([[0, 1], [2, 3], [4, 5]])
a_2dim
</blockquote>

<pre><code>array([[0, 1],
       [2, 3],
       [4, 5]])
</code></pre>
<p>즉, 앞서 언급된 행렬의 첫째 행이 위 어레이의 첫 번째 리스트로, 
그리고 둘째 행이 어레이의 두 번째 리스트에 해당한다.</p>
<p>어레이의 차원은 <code>ndim</code> 인스턴스변수를 이용하여 확인한다.</p>
<blockquote>
a_2dim.ndim
</blockquote>

<pre><code>2
</code></pre>
<p>변수 <code>a_2dim</code>에 할당된 어레이의 모양(shape)은 <code>3 x 2</code> 행령에 해당하는 <code>(3, 2)</code>이다.</p>
<blockquote>
a_2dim.shape
</blockquote>

<pre><code>(3, 2)
</code></pre>
<p><strong> 주의:</strong> <code>len</code> 함수는 마치 리스트의 길이를 리턴해 주는 것처럼 어레이 인자를 받으면, 첫 번째 차원의 길이를 리턴한다. 
</blockquote>
len(a_2dim) = len([[0, 1], [2, 3], [4, 5]]) = 3
</blockquote></p>
<blockquote>
len(a_2dim)
</blockquote>

<pre><code>3
</code></pre>
<p><strong> 주의:</strong> 넘파이 모듈에는 어레이의 모양 정보를 리턴하는 <code>shape()</code> 라는 함수가 따로 존재한다.
즉, 이 함수는 어레이의 <code>shape</code> 속성 정보를 리턴한다. </p>
<blockquote>
np.shape(a_2dim)
</blockquote>

<pre><code>(3, 2)
</code></pre>
<h4>예제</h4>
<p><code>len()</code> 함수와 <code>np.shape()</code> 함수, 그리고 <code>ndim</code> 인스턴스변수들 사이에 어떤 관계가 
있는지 설명하라.</p>
<p>견본답안:</p>
<p><code>np.shape()</code> 함수의 리턴값의 첫 번째 인자가 <code>len()</code> 함수의 리턴값과 동일하다.</p>
<blockquote>
np.shape(a_2dim)[0] == len(a_2dim)
</blockquote>

<pre><code>True
</code></pre>
<p>반면에 <code>ndim</code> 속성 값은 <code>np.shape()</code> 함수의 리턴값인 튜플의 길이와 동일하다.</p>
<blockquote>
len(np.shape(a_2dim)) == a_2dim.ndim
</blockquote>

<pre><code>True
</code></pre>
<h4>예제</h4>
<p>아래에 묘사된 행렬을 2차원 어레이로 구현하라.</p>
<p>$$\left [ \begin{matrix} 5 &amp; 3 &amp; 1 \ 2 &amp; 4 &amp; 6 \end{matrix} \right ]$$</p>
<p>아래와 같이 수동으로 구현할 수 있다.</p>
<blockquote>
a_2dim_exp = np.array([[5, 3, 1], [2, 4, 6]])
a_2dim_exp
</blockquote>

<pre><code>array([[5, 3, 1],
       [2, 4, 6]])
</code></pre>
<h3>자동 생성</h3>
<p>수동으로 어레이를 생성하는 방법은 실전에서는 거의 사용하지 못한다.
이유는 실전에서 다루는 데이터는 매우 크기 때문이다.
따라서 보다 간단하게 원하는 어레이를 생성하는 다양한 방법을 살펴 보자.</p>
<h4><code>arange()</code> 함수 활용</h4>
<p>넘파이의 <code>arange()</code> 함수는 <code>range()</code> 함수와 기본적으로 동일하게 작동한다.
다만 어레이를 활용할 뿐이며, 앞서 살펴 보았듯이 보다 빠르게 데이터를 처리한다.</p>
<blockquote>
a = np.arange(10)   # range(10)과 동일
a
</blockquote>

<pre><code>array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
</code></pre>
<blockquote>
b = np.arange(1, 9, 2)   # range(1, 9, 2)와 동일
b
</blockquote>

<pre><code>array([1, 3, 5, 7])
</code></pre>
<p><code>range()</code> 함수와는 달리 <code>np.arange()</code> 함수는 0.1 등의 소수를 스텝으로 활용할 수 있다.</p>
<blockquote>
b = np.arange(1, 2, 0.2)
b
</blockquote>

<pre><code>array([ 1. ,  1.2,  1.4,  1.6,  1.8])
</code></pre>
<p><strong>주의:</strong> <code>np.arange()</code> 함수에 소수를 스텝으로 활용할 경우 종종 잘못된 어레이가 생성된다고 한다.
따라서 아래에서 설명하는 <code>np.linspace()</code> 함수를 대신 활용하는 것이 보다 안정적이다.</p>
<h4><code>linspace()</code> 함수 활용</h4>
<p>특정 구간을 일정한 크기로 쪼개어 어레이를 생성할 수 있다.
예를 들어, 0과 1 구간을 6개의 점으로 균등하게 쪼개어 어레이를 만들려면 아래와 같이 실행하면 된다.</p>
<blockquote>
c = np.linspace(0, 1, 6)   # 구간의 시작, 구간의 끝, 점의 개수
c
</blockquote>

<pre><code>array([ 0. ,  0.2,  0.4,  0.6,  0.8,  1. ])
</code></pre>
<p>반면에 구간의 오른쪽 끝을 제외하고 6개의 점으로 균등하게 쪼개어 어레이를 만들려면
    아래와 같이 실행하면 된다.</p>
<blockquote>
d = np.linspace(0, 1, 6, endpoint=False)
d
</blockquote>

<pre><code>array([ 0.        ,  0.16666667,  0.33333333,  0.5       ,  0.66666667,
        0.83333333])
</code></pre>
<p><strong>주의:</strong> 위 결과는 아래 결과에서 마지막 구간을 생략한 결과와 동일하다.</p>
<blockquote>
c = np.linspace(0, 1, 7)
c
</blockquote>

<pre><code>array([ 0.        ,  0.16666667,  0.33333333,  0.5       ,  0.66666667,
        0.83333333,  1.        ])
</code></pre>
<h4>1로 채워진 어레이 생성</h4>
<p><code>ones()</code> 함수는 원하는 모양의 어레이를 생성한다. 다만, 모든 항목은 1로 채워진다.
예를 들어, 1로 채워진 <code>3 x 4</code> 모양의 2차원 행렬에 대응하는 어레이는 아래와 같이 생성한다. </p>
<p><strong>주의:</strong> 인자는 원하는 모양(shape)의 튜플을 사용한다.</p>
<blockquote>
e = np.ones((3, 4))
e
</blockquote>

<pre><code>array([[ 1.,  1.,  1.,  1.],
       [ 1.,  1.,  1.,  1.],
       [ 1.,  1.,  1.,  1.]])
</code></pre>
<h4>0으로 채워진 어레이 생성</h4>
<p><code>zeros()</code> 함수는 원하는 모양의 어레이를 생성한다. 다만, 모든 항목은 0으로 채워진다.
예를 들어, 1로 채워진 <code>2 x 3</code> 모양의 2차원 행렬에 대응하는 어레이는 아래와 같이 생성한다. </p>
<p><strong>주의:</strong> 인자는 원하는 모양(shape)의 튜플을 사용한다.</p>
<blockquote>
e = np.zeros((2, 3))
e
</blockquote>

<pre><code>array([[ 0.,  0.,  0.],
       [ 0.,  0.,  0.]])
</code></pre>
<h4>단위행렬 생성</h4>
<p>선형대수에서 중요한 역할을 수행하는 단위행렬(unit matrix)은 대각선은 1로 채우고 나머지는 모두 0으로 채워진다. 
<code>eye()</code> 함수를 이용하여 원하는 모양의 단위행렬에 해당하는 어레이를 생성할 수 있다.</p>
<p><strong>주의:</strong> 인자는 원하는 모양(shape)의 어레이의 길이(len)를 사용한다.</p>
<blockquote>
e = np.eye(4)
e
</blockquote>

<pre><code>array([[ 1.,  0.,  0.,  0.],
       [ 0.,  1.,  0.,  0.],
       [ 0.,  0.,  1.,  0.],
       [ 0.,  0.,  0.,  1.]])
</code></pre>
<h4><code>diag()</code> 함수 활용</h4>
<p>숫자들의 리스트가 주어졌을 경우 리스트의 항목들을 대각선 값으로 갖는 어레이를 구현할 수 있다.</p>
<blockquote>
e1 = np.diag((1, 2, 3, 4)) # 인자: 튜플, 리스트 또는 1차원 어레이
e1
</blockquote>

<pre><code>array([[1, 0, 0, 0],
       [0, 2, 0, 0],
       [0, 0, 3, 0],
       [0, 0, 0, 4]])
</code></pre>
<blockquote>
e2 = np.diag([1, 2, 3, 4]) # 인자: 튜플, 리스트 또는 1차원 어레이
e2
</blockquote>

<pre><code>array([[1, 0, 0, 0],
       [0, 2, 0, 0],
       [0, 0, 3, 0],
       [0, 0, 0, 4]])
</code></pre>
<blockquote>
e3 = np.diag(np.arange(1,5)) # 인자: 튜플, 리스트 또는 1차원 어레이
e3
</blockquote>

<pre><code>array([[1, 0, 0, 0],
       [0, 2, 0, 0],
       [0, 0, 3, 0],
       [0, 0, 0, 4]])
</code></pre>
<p>생성된 어레이는 모두 동일하다.</p>
<blockquote>
e1 == e2
</blockquote>

<pre><code>array([[ True,  True,  True,  True],
       [ True,  True,  True,  True],
       [ True,  True,  True,  True],
       [ True,  True,  True,  True]], dtype=bool)
</code></pre>
<blockquote>
e2 == e3
</blockquote>

<pre><code>array([[ True,  True,  True,  True],
       [ True,  True,  True,  True],
       [ True,  True,  True,  True],
       [ True,  True,  True,  True]], dtype=bool)
</code></pre>
<h4>난수로 구성된 어레이</h4>
<p>난수(random number)로 구성된 어레이를 생성하기 위해
<code>numpy.random</code> 모듈에 있는 <code>rand()</code>, <code>randn()</code> 함수를 활용할 수 있다.</p>
<ul>
<li><code>numpy.random.rand()</code> 함수: 균등분포를 사용하여 지정된 수만큼 [0, 1) 구간에서 
    난수를 구한다.</li>
<li><code>numpy.random.randn()</code> 함수: 표준정규분포 방식을 사용하여 지정된 수만큼
    난수를 구한다. </li>
</ul>
<p>각 함수의 인자는 원하는 모양(shape)에 해당하는 튜플이다. </p>
<p><strong>주의:</strong> <code>numpy.ones</code> 또는 <code>numpy.zeros</code> 함수들과는 달리 추가로 괄호를 사용하지 않는다. </p>
<ul>
<li>1차원 난수 어레이 생성</li>
</ul>
<blockquote>
f = np.random.rand(4) 
f
</blockquote>

<pre><code>array([ 0.90530391,  0.22319661,  0.19010215,  0.97812319])
</code></pre>
<ul>
<li>2차원 난수 어레이 생성</li>
</ul>
<p>예를 들어, <code>2 x 3</code> 행렬 모양의 난수 어레이를 아래와 같이 생성할 수 있다.
먼저 6개의 난수를 생성하고 (2, 3) 모양의 2차원 어레이를 만든다.</p>
<blockquote>
f1 = np.random.rand(2, 3)
f1
</blockquote>

<pre><code>array([[ 0.48547679,  0.14894625,  0.32572015],
       [ 0.05018328,  0.36187814,  0.06335426]])
</code></pre>
<p>동일한 일을 <code>np.random.randn()</code> 함수를 활용하여 할 수 있다. 
<code>np.random.rand()</code> 함수와 동일한 방식으로 작동하지만 생성된 난수들이 표준정규분포를 따른다.
즉, 생성된 난수 데이터의 평균은 0이고 표준편차는 1이다.</p>
<blockquote>
g = np.random.randn(4) 
g
</blockquote>

<pre><code>array([ 0.44985681, -0.07773289,  0.21901692, -0.55167823])
</code></pre>
<blockquote>
g1 = np.random.randn(2, 3)
g1
</blockquote>

<pre><code>array([[ 0.6679633 , -0.62353135,  0.77954617],
       [ 0.7846167 , -1.65039024, -0.21515919]])
</code></pre>
<h4><code>seed()</code> 함수 활용</h4>
<p>난수 관련 함수들이 생성하는 난수는 사실 정말로 무작위로 
생성되지는 않는다.
각 프로그래밍 언어마다 난수를 만드는 방식이 정해져 있고,
정해진 방식에 맞추어 이미 난수표를 갖고 있다.
즉, <code>rand</code> 함수가 호출되는 순서에 따라 사실 동일한 숫자를 
생성하지만 사람 눈에는 무작위 숫자들로 보이는 것 뿐이다.</p>
<p>이런 현상을 해결하기 위해 시드(seed) 값을 사용하여 
생성되는 난수의 순서를 보다 무작위적으로 보여지게 할 수 
있다. 예를 들어 시드값을 0으로 하면 매번 동일한 난수들이 
생성되는 것을 아래와 같이 확인할 수 있다.</p>
<blockquote>
np.random.seed(0)
np.random.rand(4)
</blockquote>

<pre><code>array([ 0.5488135 ,  0.71518937,  0.60276338,  0.54488318])
</code></pre>
<blockquote>
np.random.seed(0)
np.random.rand(4)
</blockquote>

<pre><code>array([ 0.5488135 ,  0.71518937,  0.60276338,  0.54488318])
</code></pre>
<p>반면에 시드값을 변경하면 생성되는 난수들을 정말로 무작위처럼 보이게 할 수 있다.</p>
<blockquote>
np.random.seed(1234)
np.random.rand(4)
</blockquote>

<pre><code>array([ 0.19151945,  0.62210877,  0.43772774,  0.78535858])
</code></pre>
<blockquote>
np.random.seed(2000)
np.random.rand(4)
</blockquote>

<pre><code>array([ 0.57051729,  0.56452876,  0.48844183,  0.33647775])
</code></pre>
<h3>어레이에서 사용되는 기본 자료형</h3>
<p>앞서 몇 개의 예제에서 <code>dtype</code> 속성에 저장되는 자료형을 알아 보았다. 
여기서는 어레이에서 사용되는 자료형을 좀 더 알아보고자 한다. </p>
<p>앞선 예제에서 <code>2., 3.</code> 등등 정수에 점이 사용되는 경우를 본 적이 있는데,
이는 어레이의 자료형이 int가 아닌 float임을 보여주려 하기 때문이다.</p>
<p>아래 예제는 정수들의 어레이를 생성한다.</p>
<blockquote>
a = np.array([1, 2, 3])
a.dtype
</blockquote>

<pre><code>dtype('int64')
</code></pre>
<p>앞서 생성된 정수들의 어레이를 부동소수점들의 어레이로 형변환 시키고자 한다면
<code>dtype</code> 속성을 <code>float</code>로 바꾸면 된다.</p>
<blockquote>
b = np.array([1, 2, 3], dtype=float)
b.dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<p>새로 생성된 어레이의 모양도 다르다.</p>
<blockquote>
b
</blockquote>

<pre><code>array([ 1.,  2.,  3.])
</code></pre>
<p>애초부터 float 자료형으로 선언하려면 일부 정수를 부동소수점으로 표시하면 된다.</p>
<blockquote>
a = np.array([1., 2, 3.])
a.dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<p>어레이가 기본적으로 사용하는 자료형은 <code>float</code>이다.</p>
<ul>
<li><code>np.ones()</code>, <code>np.zeros()</code>, <code>np.eye()</code>, <code>np.linspace()</code> 등은 모두 부동소점의 어레이를 생성한다. </li>
</ul>
<blockquote>
np.ones((3,3)).dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<blockquote>
np.zeros((3,3)).dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<blockquote>
np.eye(4).dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<p><strong>주의:</strong> <code>np.arange()</code>, <code>np.array()</code>, <code>np.diag()</code> 등은 인자에 따라 생성된 어레이의 자료형을 결정한다.</p>
<blockquote>
np.arange(4).dtype
</blockquote>

<pre><code>dtype('int64')
</code></pre>
<blockquote>
np.arange(0, 4, 0.5).dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<blockquote>
np.array([1, 2, 3]).dtype
</blockquote>

<pre><code>dtype('int64')
</code></pre>
<blockquote>
np.array([1, 2, 3.]).dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<blockquote>
np.diag([1, 2, 3]).dtype
</blockquote>

<pre><code>dtype('int64')
</code></pre>
<blockquote>
np.diag([1, 2, 3.]).dtype
</blockquote>

<pre><code>dtype('float64')
</code></pre>
<p><code>int</code>와 <code>float</code> 이외에도 다음의 자료형들이 어레이에서 사용된다.</p>
<h4>복소수 자료형(<code>complex</code>)</h4>
<blockquote>
np.array([1+2j, 3+4j, 5+6j]).dtype
</blockquote>

<pre><code>dtype('complex128')
</code></pre>
<h4>불리언 자료형(<code>bool</code>)</h4>
<blockquote>
np.array([True, False, False, True]).dtype
</blockquote>

<pre><code>dtype('bool')
</code></pre>
<h4>문자열 자료형(<code>S</code>)</h4>
<blockquote>
np.array(['Hi', 'Hello']).dtype
</blockquote>

<pre><code>dtype('&lt;U5')
</code></pre>
<p><strong>주의:</strong></p>
<p><code>int32</code>, <code>int64</code>, <code>float64</code>, <code>S5</code> 처럼 자료형 이름 뒤에 숫자가 사용되기도 한다.
이는 어레이에서 사용되는 각각의 항목의 값들이 가질 수 있는 최대 크기를 의미한다. 
즉, 사용된 정수들이 32비트로 모두 담을 수 있는지, 또는 사용된 문자열들의 길이가 최대 5바이트 또는 12바이트 인지를 나타낸다. </p>
<p>예를 들어 아래 문자열로 이루어진 어레이에서 가장 긴 문자열이 4바이트이기 때문에, 
<code>dtype</code>이 <code>S4</code>이다.</p>
<blockquote>
np.array(['ab', 'abc', 'abcd']).dtype
</blockquote>

<pre><code>dtype('&lt;U4')
</code></pre>
<h2>오늘의 주요 예제 해결</h2>
<p>균등분포와 표준정규분포를 시각적으로 쉽게 이해할 수 있는 방법이 있다.
바로 히스토그램을 이용하면 된다.</p>
<p>먼저 히스토그램을 그릴 준비를 한다. </p>
<blockquote>
import matplotlib.pyplot as plt
</blockquote>

<blockquote>
%matplotlib inline
</blockquote>

<h4>균등분포(Uniform Distribution)</h4>
<p>먼저 <code>np.random.rand()</code> 함수가 생성한 난수들이 균등분포를 따른다는 사실을 히스토그램을 이용하여 확인하자.
아래 코드는 1,000개의 난수를 균등분포를 사용하여 생성한 다음에 히스토그램을 그린다.</p>
<blockquote>
gaussian_numbers = np.random.rand(1000)
plt.hist(gaussian_numbers, bins=10)

plt.title("Uniform Distribution")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
</blockquote>

<p><img alt="png" src="GongSu13_Numpy_Intro_files/GongSu13_Numpy_Intro_143_0.png" /></p>
<p>위 그래프를 통해 알 수 있듯이 생성된 난수들은 0과 1사이에 골고루 퍼져 있도록 생성되었음을 대략 확인할 수 있다.</p>
<h4>표준정규분포(Standard Normal Distribution)</h4>
<p>먼저 <code>np.random.randn()</code> 함수가 생성한 난수들이 표준정규분포를 따른다는 사실을 히스토그램을 이용하여 확인하자.
아래 코드는 1,000개의 난수를 표준정규분포를 사용하여 생성한 다음에 히스토그램을 그린다.</p>
<blockquote>
gaussian_numbers = np.random.randn(1000)
plt.hist(gaussian_numbers, bins=10)

plt.title("Standard Normal Distribution")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
</blockquote>

<p><img alt="png" src="GongSu13_Numpy_Intro_files/GongSu13_Numpy_Intro_147_0.png" /></p>
<p>위 그래프를 통해 알 수 있듯이 생성된 난수들은 0과 1사이에 표준정규분포를 따르도록 생성되었음을 대략 확인할 수 있다.</p>
<h2>연습</h2>
<h3>연습문제</h3>
<p>다음 6개의 함수의 정의와 차이점을 설명하라.</p>
<ul>
<li><code>np.empty()</code></li>
<li><code>np.empty_like()</code></li>
<li><code>np.ones()</code></li>
<li><code>np.ones_like()</code></li>
<li><code>np.zeros()</code></li>
<li><code>np.zeros_like()</code></li>
</ul>
<p>견본답안:</p>
<p>아래 사이트를 참조한다. </p>
<p><a href="https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.empty_like.html">https://docs.scipy.org/doc/numpy-1.13.0/reference/generated/numpy.empty_like.html</a></p>
<h3>연습문제</h3>
<p>아래 모양의 어레이를 생성하라. 단, 3줄 이내로 코딩해야 한다.</p>
<pre><code>[[1, 1, 1, 1],
 [1, 1, 1, 1],
 [1, 1, 1, 2],
 [1, 6, 1, 1]]
</code></pre>
<p><em>힌트</em>: <code>np.ones</code> 함수와 인덱싱 활용.     </p>
<blockquote>
a = np.ones((4,4))
a[2,3] = 2
a[3,1] = 6
a
</blockquote>

<pre><code>array([[ 1.,  1.,  1.,  1.],
       [ 1.,  1.,  1.,  1.],
       [ 1.,  1.,  1.,  2.],
       [ 1.,  6.,  1.,  1.]])
</code></pre>
<h3><code>np.diag()</code> 함수 활용</h3>
<p><code>np.diag()</code> 함수는 최대 2개의 인자를 받는다.</p>
<pre><code>np.diag(v, k=0)
</code></pre>
<ul>
<li>
<p><code>v</code>: 1차원 또는 2차원 어레이 (리스트, 튜플 가능)</p>
<ul>
<li><code>v</code>가 2차원 어레일 때: 해당 어레이의 <code>k</code> 번째 대각선을 1차원 어레이로 리턴한다.</li>
<li><code>v</code>가 1차원 어레일 때: 해당 어레이를 <code>k</code> 번째 대각선으로 갖는 2차원 어레이를 리턴한다.</li>
</ul>
</li>
<li>
<p><code>k</code> : 정수 (옵션 키워드 인자)</p>
<ul>
<li><code>k</code> 번째 대각선을 의미함.</li>
<li><code>k &gt; 0</code> 인 경우: 중앙 대각선에서 윗쪽으로 <code>k</code>번째 위치한 대각선</li>
<li><code>k &lt; 0</code> 인 경우: 중앙 대각선에서 아랫쪽으로 <code>k</code>번째 위치한 대각선</li>
</ul>
</li>
</ul>
<h4>예제</h4>
<blockquote>
x = np.arange(9).reshape((3,3))
x
</blockquote>

<pre><code>array([[0, 1, 2],
       [3, 4, 5],
       [6, 7, 8]])
</code></pre>
<blockquote>
np.diag(x)
</blockquote>

<pre><code>array([0, 4, 8])
</code></pre>
<blockquote>
np.diag(x, k=1)
</blockquote>

<pre><code>array([1, 5])
</code></pre>
<blockquote>
np.diag(x, k=-1)
</blockquote>

<pre><code>array([3, 7])
</code></pre>
<blockquote>
np.diag(np.diag(x))
</blockquote>

<pre><code>array([[0, 0, 0],
       [0, 4, 0],
       [0, 0, 8]])
</code></pre>
<blockquote>
np.diag(np.diag(x, k=-1), k=1)
</blockquote>

<pre><code>array([[0, 3, 0],
       [0, 0, 7],
       [0, 0, 0]])
</code></pre>
<h3>연습문제</h3>
<p>아래 모양의 어레이를 생성하라. 단, 3줄 이내로 코딩해야 한다.</p>
<pre><code>[[0., 0., 0., 0., 0.],
 [2., 0., 0., 0., 0.],
 [0., 3., 0., 0., 0.],
 [0., 0., 4., 0., 0.],
 [0., 0., 0., 5., 0.],
 [0., 0., 0., 0., 6.]]
</code></pre>
<blockquote>
np.diag(np.arange(2, 7), k=-1)
</blockquote>

<pre><code>array([[0, 0, 0, 0, 0, 0],
       [2, 0, 0, 0, 0, 0],
       [0, 3, 0, 0, 0, 0],
       [0, 0, 4, 0, 0, 0],
       [0, 0, 0, 5, 0, 0],
       [0, 0, 0, 0, 6, 0]])
</code></pre>
<h3>연습문제</h3>
<p>아래 모양의 어레이를 생성하라. 단, 3줄 이내로 코딩해야 한다.</p>
<pre><code>[[4, 3, 4, 3, 4, 3],
 [2, 1, 2, 1, 2, 1],
 [4, 3, 4, 3, 4, 3],
 [2, 1, 2, 1, 2, 1]]
</code></pre>
<p><em>힌트</em>: <code>np.tile</code> 함수 활용법을 숙지해야 한다. 
또한 <code>np.arange</code> 함수, <code>reshape</code> 어레이 메소드 등을 활용할 수 있다.</p>
<blockquote>
a = np.arange(4, 0, -1).reshape((2,2))
b = np.tile(a, (2,3))
b
</blockquote>

<pre><code>array([[4, 3, 4, 3, 4, 3],
       [2, 1, 2, 1, 2, 1],
       [4, 3, 4, 3, 4, 3],
       [2, 1, 2, 1, 2, 1]])
</code></pre>