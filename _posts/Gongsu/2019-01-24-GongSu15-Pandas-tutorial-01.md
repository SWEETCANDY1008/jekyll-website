---
layout: post
title: GongSu15-Pandas-tutorial-01
date: 2019-01-24 13:33:52 +0900
categories: Gongsu
---
<h1>pandas 소개 1</h1>
<p><strong>자료 안내:</strong> 
<a href="https://pandas.pydata.org/pandas-
docs/stable/tutorials.html">pandas 라이브러리 튜토리얼</a>에 
있는 Lessons for new pandas users의
<a href="http://nbviewer.jupyter.org/urls/bitbucket.org/hrojas/learn-
pandas/raw/master/lessons/01%20-%20Lesson.ipynb">01-Lesson</a> 내용을 담고 있다.</p>
<p>```python</p>
<h1>pandas 모듈에서 DataFrame 함수와 read_csv 함수 임포트</h1>
<p>from pandas import DataFrame, read_csv</p>
<h1>matplolib.pyplot 모듈과 pandas 모듈을 각각 plt와 pd라는 별칭으로 임포트</h1>
<p>import matplotlib.pyplot as plt
import pandas as pd
```</p>
<p>```python</p>
<h1>쥬피터 노트북에서 그래프를 직접 나타내기 위해 사용하는 코드</h1>
<h1>파이썬 전문 에디터에서는 사용하지 않음</h1>
<p>%matplotlib inline
```</p>
<h2>데이터 생성</h2>
<p>1880년에 태어난 아이들 중에서 가장 많이 사용되는 5개의 이름을 담은 리스트 <code>names</code>와 
해당 이름으로 출생신고된 아이들의 숫자를 담은
데이터 <code>births</code>가 다음과 같다.</p>
<p>```python</p>
<h1>아이 이름과 출생신고 숫자 리스트</h1>
<p>names = ['Bob', 'Jessica', 'Mary', 'John', 'Mel']
births = [968, 155, 77, 578, 973]
```</p>
<p>두 개의 리스트를 합하여 이름과 숫자를 쌍으로 묶기 위해서 <code>zip</code> 함수를 이용한다.</p>
<ul>
<li><code>zip</code> 함수의 리턴값은 <code>zip</code> 클래스의
객체이다.<ul>
<li><code>zip</code> 객체는 순서쌍들의 리스트와 비슷하다.</li>
<li>다만 리스트처럼 색인을 사용하여 직접 항목을 선택할 수는 없다.</li>
</ul>
</li>
<li><code>zip</code> 객체는 <code>iterable</code> 자료형이다.
    즉, 예를 들어 <code>for</code> 반복문과 함께 사용하여 각 항목을 순서대로 활용할 수
있다.</li>
</ul>
<p><code>python
for item in zip(names, births):
    name, num = item
    print(name, "이름으로",num, "명이 신고되었다.")</code></p>
<ul>
<li><code>zip</code> 객체를 리스트 자료형으로 형변환을 하면 쌍들의 리스트로 활용할 수 있으며, 여기서는
    이 기능을 활용한다.</li>
</ul>
<p><code>python
BabyDataSet = list(zip(names, births))
print(BabyDataSet)</code></p>
<p><strong>주의:</strong> <code>zip</code> 함수에 대한 정보는 아래 명령으로 확인할 수 있다.</p>
<blockquote>
<p>help(zip)</p>
</blockquote>
<p><code>zip</code>을 활용하여 이름과 숫자를 서로 쌍으로 묶었다. 하지만 데이터 분석을 위해서는 
<code>pandas</code> 모듈에서 데이터
프레임(<code>DataFrame</code>) 객체를 이용하는 것이 보다 유용하다.</p>
<p><code>BabyDataSet</code>을 데이터 프레임 객체로 변형하면 엑셀 파일에
사용되는 스프레스쉬트(spreadsheet)와 같은
표가 된다.</p>
<p><code>python
df = pd.DataFrame(data = BabyDataSet, columns = ['Names', 'Births'])</code></p>
<p><code>df</code>에 저장된 데이터 프레임을 확인하면 다음과 같다.</p>
<ul>
<li><code>columns</code>에 사용된 <code>Names</code>와 <code>Births</code>가 각 열의 항목이름으로
지정된 것을 확인할 수 있다.</li>
<li>첫재 줄은 따라서 헤더(header)라고 불린다.</li>
<li>반면에 첫째 열은 자동으로 줄 번호가 생성되며
색인(index)이라고 부른다.</li>
</ul>
<p><code>python
df</code></p>
<p>이 데이터 프레임을 <code>births 1880.csv</code>라는 이름의 <code>csv</code> 파일로 저장해보자. 
데이터 프레임 객체에 포함된 <code>to_csv</code>
메소드는 데이터 프레임 객체를 <code>csv</code> 파일로 변환 후 저장한다.
저장 위치는 데이터 프레임 객체와 동일한 디렉토리이다.
먼저 아래 명령으로
<code>to_csv</code> 메소드에 대해 정보를 확인하는 것을 권장한다.</p>
<blockquote>
<p>help(df.to_csv)</p>
</blockquote>
<p><code>to_csv</code> 메소드는 저장되는 파일의 이름 이외에 <code>index</code>와 <code>header</code>라는 두 개의 키워드 인자를 더 사용한다. 
각각 색인과
헤더 항목을 함께 사용할 것인지 여부를 결정한다.</p>
<p><code>python
df.to_csv('births1880.csv', index = False, header = False)</code></p>
<h2>데이터 호출</h2>
<p>csv 파일을 불러오기 위해, pandas 모듈의 <code>read_csv</code> 함수를 이용한다. 
<code>read_csv</code> 함수를 살펴보자.</p>
<blockquote>
<p>help(read_csv)</p>
</blockquote>
<p><code>read_csv</code> 함수는 많은 인자들을 받을 수 있지만 여기서 우리는 csv 파일의 위치만 사용한다.
나머지 인자는 키워드 인자로 지정된
기본값이 사용된다.</p>
<p><code>python
Location = 'births1880.csv'
df = pd.read_csv(Location)</code></p>
<p><code>df</code>를 확인하면 기존의 데이터와 비슷하게 보인다.</p>
<p><code>python
df</code></p>
<p>문제가 하나 있다.</p>
<p><code>read_csv</code> 함수가 csv 파일의 첫 번째 줄을 헤더(header)로 사용하였다. 
이를 해결하기 위해
<code>read_csv</code> 함수의 매개변수 <code>header</code>를 <code>None</code>으로 설정해보자. 
파이썬에서 <code>None</code>은 null 값을 의미한다.</p>
<p><code>python
df = pd.read_csv(Location, header=None)
df</code></p>
<p>열 항목으로 사용될 이름들을 지정하지 않았기 때문에 0, 1, 2 등의 색인을 기본값으로 사용하였다. 
만약 열에 특정한 이름들을 사용하고
싶다면, <code>names</code>라는 매개변수를 사용한다. 
이때, <code>header</code>라는 매개변수는 생략가능하다.</p>
<p><code>python
df = pd.read_csv(Location, names=['Names','Births'])
df</code></p>
<p>행 번호 0, 1, 2, 3, 4는 데이터 프레임 객체에 기본적으로 포함된 색인(<code>index</code>) 기능으로 사용된다.</p>
<p><strong>주의:</strong> 동일한
색인이 여러 번 나올 수 있다.</p>
<p>끝으로 지금까지 사용한 csv 파일을 삭제해 보자. 더 이상 필요 없다.</p>
<p><code>python
import os
os.remove('births1880.csv')</code></p>
<h2>데이터 클리닝(cleaning)</h2>
<p>데이터는 1880년에 태어난 아이의 이름과 출생수로 구성되어 있으며,
5개의 기록, 즉 5행으로 이루어져 있고, 결측치(missing
values)는 없다. 
즉, 모든 데이터가 완벽하다.</p>
<p>그런데 경우에 따라 어떤 열에 이질 데이터가 사용되거나 있어야 데이터가 없는 경우,
즉, 결측치가 존재하는 경우가 있다.
그런 경우가 발생하면 데이터 분석이 제대로 진행되지 않는다.
따라서 자료형이 서로 다른 데이터가 동일한
열에 위치하지 않는지, 
아니면 결측치가 있는지 여부를 먼저 확인하여 대처 방안을 강구해야 한다.</p>
<p>어떤 열(column)이 동일한 자료형으로 구성되어 있는지 여부를 확인하려면
데이터 프레임 객체의 속성 중에서 <code>dtypes</code>를 확인하면 된다.</p>
<p><code>python
df.dtypes</code></p>
<p>위 결과는 아래 내용을 담고 있다.</p>
<ul>
<li><code>Names</code> 항목을 사용한 첫째 열의 자료형은 <code>object</code>이다. <ul>
<li><code>object</code>는
파이썬에서 제공하는 최상위 클래스이다. </li>
<li>즉, 임의의 자료형이 첫째 열에 사용되도 된다는 의미이다.</li>
</ul>
</li>
<li><code>Births</code> 항목을 사용한
둘째 열의 자료형은 <code>int64</code>이다.<ul>
<li><code>int64</code>는 64비트용 정수 자료형을 나타낸다.</li>
<li>즉, 임의의 정수들만 둘 째
열에 사용될 수 있다는 의미이다.</li>
<li>예를 들어, 부동 소수점(<code>float</code>), 문자열 등 정수형 이외의 자료형을 사용하면 오류가
발생한다.</li>
</ul>
</li>
</ul>
<p>모든 열이 아니라, 예를 들어, <code>Births</code> 열의 타입을 알고 싶다면, 아래와 같은 코드를 작성하면 된다.</p>
<p><code>python
df.Births.dtype</code></p>
<h2>데이터 분석</h2>
<p>예를 들어, 가장 인기있는 이름 즉, 출생수가 가장 높은 이름을 찾기 위해서 다음 두 가지 방식 중에 
한 가지를 활용할 수 있다.</p>
<ul>
<li>방법
1: 둘 째 열을 기준으로 내림차순으로 정렬한 후 첫째 행 선택</li>
<li>방법 2: 둘째 열에 대해 <code>max()</code> 함수 적용</li>
</ul>
<p><strong>방법 1:</strong> 특정 열을 기준으로 내림차순으로 정렬하기</p>
<p><code>python
Sorted = df.sort_values(['Births'], ascending=False)</code></p>
<p>이제 첫째 행을 확인하면 된다.</p>
<p><code>python
Sorted.head(1)</code></p>
<p><strong>방법 2:</strong> 특정 열에 대해 일괄적으로 <code>max()</code> 메소드 적용하기</p>
<p><code>python
df['Births'].max()</code></p>
<h2>데이터 시각화</h2>
<p>지금까지 다룬 데이터는 겨우 5줄짜리이다. 
따라서 1880년도에 가장 인기 있었던 이름이 <code>Mel</code>이라는 사실을 한 눈에 알아 볼 수 있다.
하지만 데이터가 조금만 커져도 그런 정보를 쉽게 눈으로 확인할 수 없다.
따라서 일반인이 원하는 정보를 쉽게 얻을 수 있도록 하기 위해 데이터를
시각화하여 전달하는 일이
매우 중요하다.</p>
<p>데이터 프레임 객체는 <code>plot()</code> 이라는 시각화 메소드를 제공한다.</p>
<p>*
<code>df['Names']</code>: <code>df</code>에 저장된 데이터 프레임 객체의 <code>Names</code> 열을 가리킨다.</p>
<p><code>python
df['Births'].plot()
plt.xlabel("시간")
plt.show()</code></p>
<p>따라서 <code>Births</code> 열을 얻고자 하면 아래와 같이 명령하면 된다.</p>
<p><code>python
df['Births']</code></p>
<p>이제 앞서 최대 출생수를 확인했던 <code>df['Births'].max()</code>를 활용하여
최대 출생수가 사용된 모든 행을 확인할 수 있다.
다음과 같이
하면 된다.</p>
<p><code>python
df['Names'][df['Births'] == df['Births'].max()]</code></p>
<p>위 결과에 의하면 4번 색인 행, 즉, 다섯 번째 줄에서만 앞서 확인한 최대 출생수 973명이 사용되었다.
즉, <code>Mel</code> 이름 단독으로 가장
많이 출생아이들의 이름으로 사용되었다.</p>
<p>아래와 같이 명령해도 동일한 결과를 얻는다.</p>
<ul>
<li>내림 차순으로 정렬한 후에 위로부터 1개의 행만
보이라는 명령이다.</li>
</ul>
<p><code>python
Sorted['Names'].head(1)</code></p>
<p>시각화 그래프에 좀 더 다양한 정보를 제공할 수 도 있다.
아래 프로그램은 그래프에 다양한 텍스트 정보를 입력하는 방법을 보여주는 예제이다.</p>
<p>```python</p>
<h1>그래프 만들기</h1>
<p>df['Births'].plot()</p>
<h1>데이터셋에 있는 최댓값</h1>
<p>MaxValue = df['Births'].max()</p>
<h1>최댓값을 가진 이름 확인</h1>
<p>MaxName = df['Names'][df['Births'] == df['Births'].max()].values</p>
<h1>그래프 위에 보여줄 텍스트</h1>
<p>Text = str(MaxValue) + " - " + MaxName</p>
<h1>그래프에 텍스트 추가하기</h1>
<p>plt.annotate(Text, xy=(1, MaxValue), xytext=(8, 0), 
                 xycoords=('axes fraction', 'data'), textcoords='offset points')</p>
<p>plt.show()
```</p>