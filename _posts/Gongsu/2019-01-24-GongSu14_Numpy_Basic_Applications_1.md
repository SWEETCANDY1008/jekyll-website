---
layout: post
title: GongSu14_Numpy_Basic_Applications_1
date: 2019-01-24 13:33:51 +0900
categories: Gongsu
---
<h4>자료 안내: 여기서 다루는 내용은 아래 사이트의 내용을 일부 참고하여 생성되었음.</h4>
<p>http://www.scipy-
lectures.org/</p>
<h1>넘파이 활용 기초</h1>
<p><code>python
import matplotlib.pyplot as plt
import numpy as np</code></p>
<p><code>python
%matplotlib inline</code></p>
<h2>주요 내용</h2>
<p>실전 문제를 넘파이 모율을 이용하여 해결하는 두 가지 예제를 살펴본다.
넘파이 모듈을 사용하면 이전에 복잡하게 했던 일을 훨씬 간단하게, 그리고
빠르게 처리할 수 있음에 주의해야 한다.</p>
<p>여기서는 아래 함수 또는 방법들의 활용을 배운다.</p>
<ul>
<li><code>np.linspace()</code>
*
<code>np.loadtxt()</code></li>
<li>전치행렬 생성하는 방법</li>
</ul>
<h2>넘파이 활용: 함수 그래프 그리기</h2>
<p><code>np.linspace</code> 함수를 이용하여 간단한 점, 또는 선 그래프를 그려보자.</p>
<h3>예제</h3>
<p>아래 함수의 그래프를 그려보자.
<code>times_3(x) = 3*x</code></p>
<p>먼저 x축의 구간을 정한다. 
예를 들어, <code>[0, 3]</code>의 구간으로 하자. 
이제 그 구간을 균등하게 쪼개어 x축 상에서 30개의 x좌표를
구해 보자.</p>
<p><code>python
xs = np.linspace(0, 3, 30)
xs</code></p>
<p>이제 <code>y = 3 * x</code> 함수를 정의하자.</p>
<p><code>python
def times_3(x):
    return 3*x</code></p>
<p>이제 y축 상에 x좌표에 해당하는 30개의 y좌표를 구할 수 있다.</p>
<p><strong>힌트:</strong> 넘파이 모듈에서 함수에 어레이를 인자로 사용하면, 함수는
각각의 항목을 인자로 사용하여
새로운 어레이를 생성하여 리턴한다.</p>
<p><code>python
ys = times_3(xs)
ys</code></p>
<p><strong>주의:</strong> <code>ys</code>는 아래와 같이 정의할 수도 있다.</p>
<p><code>python
ys = 3 * xs
ys</code></p>
<p><code>3 * xs</code>는 <code>xs</code>의 각각의 항목에 3을 곱한다. 이와 같이 어레이의 연산은 각각의 항목에 대해 실행된다.</p>
<p>이제 <code>xs</code>와 <code>ys</code>를
이용하여 <code>times_3</code> 함수의 그래프를 다음과 같이 그릴 수 있다.</p>
<p><code>python
plt.plot(xs, ys)</code></p>
<p><code>plt.plot</code> 함수에 세번 째 인자를 옵션으로 사용하여 그래프 모양을 변경할 수 있다.
예를 들어, 'o' 옵션은 점으로 좌표를 찍으라는
것을 나타낸다.</p>
<p><code>python
plt.plot(xs, ys, 'o')</code></p>
<p>두 경우를 합쳐서 그래프를 그려서 그래프가 어떻게 그려졌는지 쉽게 확인할 수도 있다.</p>
<p><code>python
plt.plot(xs, ys)
plt.plot(xs, ys, 'o')</code></p>
<h3>예제</h3>
<p>아래 함수의 그래프를 그려보자.
<code>squar(x) = x ** 2</code></p>
<p>이번에는 <code>x</code>좌표값의 구간을 <code>[-1, 1]</code>로 정한 후, 그 구간에서 균등하게 20개의 x좌표값을 구하자.</p>
<p><code>python
xs = np.linspace(-1, 1, 20)
xs</code></p>
<p>이제 숫자를 제곱해서 리턴하는 함수를 정의한다.</p>
<p><code>python
def square(x):
    return x**2</code></p>
<p>이제 x좌표값들에 대응하는 y좌표값들을 구하자.</p>
<p><code>python
ys = square(xs)
ys</code></p>
<p><strong>주의:</strong> <code>ys</code>를 아래와 같이 선언할 수 있다.</p>
<p><code>python
ys ** 2
ys</code></p>
<p>이제 각각 <code>xs</code>와 <code>ys</code>로 이루어진 x좌표값 y좌표값들을 이용하여 제곱함수의 그래프를 그려보자.</p>
<p><code>python
plt.plot(xs, ys)
plt.plot(xs, ys, 'o')</code></p>
<h2>넘파이 활용: 통계 분석</h2>
<p>어레이를 활용하면 통계 분석이 매우 간단해 진다.</p>
<h3>예제</h3>
<p>먼저 아래 사이트에서 populations.txt 파일을 다운 받는다. 
파일을 다운 받으려면 링크에 마우스를 가져간 다음 마우스
오른쪽 버튼을 눌러 링크에 연결된 파일을 다운받으면 된다.</p>
<p><a href="https://github.com/scipy-
lectures/scipy-lecture-notes/blob/master/data/populations.txt">https://github.com/scipy-lectures/scipy-
lecture-notes/blob/master/data/populations.txt</a></p>
<p>해당 파일은 1900년부터
1920년까지 캐나다 북부지역에서 서식한 산토끼(hare)와 스라소니(lynx)의 숫자, 
그리고 채소인 당근(carrot)의 재배숫자를 순수
텍스트 데이터로 담고 있다.</p>
<p>파일의 내용은 아래와 같다.</p>
<p><strong> 주의:</strong> 아래 코드는 파이썬 코드가 아님에 주의할 것.
<em> !type:
윈도우
</em> !cat: 맥 또는 리눅스</p>
<p>```python
!cat data/populations.txt</p>
<h1>!type populations.txt</h1>
<p>```</p>
<p>앞서 설명한 대로 각 연도별로 산토끼, 스라소니, 당근의 개체수를 담고 있다. </p>
<p>이제 해당 파일을 파이썬으로 불러 들이자.
여기서는 파이썬의
<code>open</code> 함수 대신에 <code>numpy</code>의 <code>loadtxt</code> 함수를 이용한다.</p>
<p><code>python
data = np.loadtxt('data/populations.txt')</code></p>
<p><code>data</code>를 확인해 보면 주석처리, 즉, 무시 해야 할 첫째 행을 제외한 나머지가 
2차원 어레이로 저장되었음을 확인할 수 있다.</p>
<p><code>python
data</code></p>
<p>1900년부터 1920년까지, 즉, 21년 동안 산토끼, 스라소니, 당근의 개체수를 조사한 데이터이다. 
따라서 위 데이터는 <code>21 x 4</code>
모양의 2차원 행렬에 해당한다.</p>
<p>실제로 위 데이터의 모양(shape)를 확인하면 동일한 결과를 얻는다.</p>
<p><code>python
data.shape</code></p>
<p>이제 위 데이터를 이용하여 1900년부터 1920년 사이에 각 개체별로 어떤 변화가 발생하였는지를 분석하고자 한다.
분석을 위해서는 그래프를
이용하는 것이 가장 효율적이다.</p>
<h4>전치(transposition) 함수 활용</h4>
<p>각 개체별 개체수의 21년간의 데이터를 먼저 구해야 한다.
그러기 위해 전치(transposition) 함수를 이용한다. 
<code>data.T</code></p>
<p><strong>주의:</strong> 전치함수는 행과 열을 서로 바꾼다.</p>
<p><code>python
data.T</code></p>
<p>즉, <code>data.T</code>는 <code>4 x 21</code> 모양의 2차원 어레이이며,
각각의 행은 차례대로 년도, 산토끼 수, 스라소니 수, 당근 수를 연도별로
담고 있다.
각각의 행을 독립된 어레이로 추출해야 하는데, 넘파이는 각각의 행에 대해 변수를 선언할 수 있는 기능을 제공한다. </p>
<p><strong>주의:</strong>
튜플의 경우 각각의 항목에 변수를 선언할 수 있는 것과 동일하다.</p>
<p><code>python
year, hares, lynxes, carrots = data.T</code></p>
<p>예를 들어 <code>year</code> 변수에는 연도들로 이루어진 1차원 어레이가 할당된다.</p>
<p><code>python
year</code></p>
<p><code>hares</code> 변수에는 각 연도별 개체수로 이루어진 1차원 어레이가 할당된다.</p>
<p><code>python
hares</code></p>
<p><code>lynxes</code>, <code>carrots</code> 경우도 동일하게 작동한다.</p>
<h4>그래프 그리기</h4>
<p>아래 그림은 연도별 산토끼의 개체수, 스라소니의 개체수, 당근의 재배수를 
각각 파란색, 녹색, 빨간색 그래프를
이용하여 동시에 표현한 것이다.</p>
<p><code>plot</code>, <code>axes</code>, <code>legned</code> 함수의 활용방법에 대해서는 우선 너무 많은 
신경을 쓰지 않아도
된다. 여기서는 기본 사용법만 알면 된다.</p>
<ul>
<li>
<p><code>plot</code> 함수: 여러 개의 선 그래프를 동시에 그릴 수 있다.</p>
</li>
<li>
<p><code>axes</code> 함수:
셋째, 넷째 인자는 그래프의 크기를 결정한다. 
    반면에 첫째, 둘째 인자는 그래프의 위치를 지정할 때 사용한다.
    하지만
<code>plot</code> 함수 등 그래프를 그리는 함수가 한 번만 호출된 경우에는 별 의미가 없다.</p>
</li>
<li>
<p><code>legend</code> 함수: 범례를 추가하며, <code>loc</code>
키워드 인자는 범례의 위치를 지정한다.</p>
</li>
</ul>
<p><code>python
plt.axes([0.2, 0.1, 0.5, 0.8])
plt.plot(year, hares, year, lynxes, year, carrots)
plt.legend(('Hare', 'Lynx', 'Carrot'), loc=(1.05, 0.5))</code></p>
<h4>그래프 분석</h4>
<p>산토끼의 개체수와 스라소니의 개체수, 그리고 당근의 재배수의 관계를 위 그림을 통해 어느정도 쉽게 알아낼 수 있다.
(연습문제 참조)</p>
<h2>연습문제</h2>
<h3>연습</h3>
<p>수학에서 많이 사용되는 싸인(<code>sin()</code>) 함수의 그래프를 그려보아라.</p>
<h3>연습</h3>
<p>산토끼, 스라소니, 당근의 예제에서 1900년부터 1921년 사이에 개체별 개체수의 변화에 대해 어떤 분석을 할 수 있는지
그래프를 이용하여 설명하라.</p>