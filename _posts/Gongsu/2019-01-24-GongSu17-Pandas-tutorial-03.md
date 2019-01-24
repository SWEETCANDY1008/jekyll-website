---
layout: post
title: GongSu17-Pandas-tutorial-03
date: 2019-01-24 13:33:54 +0900
categories: Gongsu
---
<h1>pandas 3</h1>
<p><strong>자료 안내:</strong> </p>
<ol>
<li>
<p><a href="https://pandas.pydata.org/pandas-
docs/stable/tutorials.html">pandas 라이브러리 튜토리얼</a>에 
있는 Lessons for new pandas users의
<a href="http://nbviewer.jupyter.org/urls/bitbucket.org/hrojas/learn-
pandas/raw/master/lessons/03%20-%20Lesson.ipynb">03-Lesson</a> 내용을 담고 있다.</p>
</li>
<li>
<p>익명함수(<code>lambda</code>
함수), <code>GroupBy</code>, <code>apply</code>, <code>transform</code>에 대한 설명은 파이썬 튜토리얼, 
    pandas 튜토리얼과 한빛미디어의
&lt;파이썬 라이브러리를 활용한 데이터 분석&gt;책의 일부이다.</p>
</li>
<li>
<p>사분위수에 관한 내용은 자유아카데미의 &lt;통계학&gt;책의 일부이다.</p>
</li>
</ol>
<p><code>python
import pandas as pd
import matplotlib.pyplot as plt
import numpy.random as np</code></p>
<p>```python</p>
<h1>쥬피터 노트북에서 그래프를 직접 나타내기 위해 사용하는 코드</h1>
<h1>파이썬 전문 에디터에서는 사용하지 않음</h1>
<p>%matplotlib inline
```</p>
<p>분석을 위한 테스트 데이터를 만들어 보자.</p>
<p>```python</p>
<h1>seed 값을 111</h1>
<p>np.seed(111)</p>
<h1>테스트 데이터를 생성하는 함수 정의</h1>
<p>def CreateDataSet(Number=1):</p>
<pre><code>Output = []

for i in range(Number):

    # 2009년 1월 1일부터 2012년 12월 31일 사이에 있는 월요일에 해당하는 날짜를 생성
    rng = pd.date_range(start='1/1/2009', end='12/31/2012', freq='W-MON')

    # rng의 길이와 같은 크기의 랜덤한 수에 대한 리스트 만들기
    # 이때, 랜덤수는 25와 1000 사이에 있는 정수
    data = np.randint(low=25,high=1000,size=len(rng))

    # Status에 대한 리스트 만들기
    status = [1,2,3]

    # rng의 길이와 같은 크기의 랜덤한 statuses 리스트 만들기
    random_status = [status[np.randint(low=0,high=len(status))] for i in range(len(rng))]

    # State에 대한 리스트 만들기 
    states = ['GA','FL','fl','NY','NJ','TX']

    # rng의 길이와 같은 크기의 랜덤한 states 리스트 만들기 
    random_states = [states[np.randint(low=0,high=len(states))] for i in range(len(rng))]

    Output.extend(zip(random_states, random_status, data, rng))

return Output
</code></pre>
<p>```</p>
<p>위의 함수를 이용하여 테스트 데이터를 만들고, 이를 다시 데이터프레임으로 만들어보자.</p>
<p><code>python
dataset = CreateDataSet(4)
df = pd.DataFrame(data=dataset, columns=['State','Status','CustomerCount','StatusDate'])
df.info()</code></p>
<p><code>python
df.head()</code></p>
<p>위의 데이터프레임을 Excel 파일로 저장하자. 이 때 인덱스 값은 원래의 테스트 데이터셋의 일부가 아니기 때문에 저장하지 않는다.</p>
<p><code>python
df.to_excel('Lesson3.xlsx', index=False)
print('Done')</code></p>
<h2>1. Excel로부터 데이터 가져오기</h2>
<p><code>read_excel</code> 함수를 이용하여 Excel 파일을 읽을 수 있다. 이 함수는 특정한 이름 또는 위치의 탭(tab)을 읽을 수 있다.</p>
<p>```python</p>
<h1>파일의 위치</h1>
<p>Location = 'Lesson3.xlsx'</p>
<h1>아래의 코드에서 0은 첫번째 시트를 의미.</h1>
<h1>index_col = 'StatusDate'는 StatusDate를 인덱스로 가져오라는 의미</h1>
<p>df = pd.read_excel(Location, 0, index_col='StatusDate')
df.dtypes
```</p>
<p>```python</p>
<h1>데이터프레임의 인덱스를 확인</h1>
<p>df.index
```</p>
<p><code>python
df.head()</code></p>
<h2>2. 데이터 준비하기</h2>
<p>분석을 위해서 데이터에 다음과 같은 전처리를 해보자.</p>
<p>1) state 열의 값이 모두 대문자인지를 확인</p>
<p>2) status 값이 1인 레코드만
선택</p>
<p>3) state열에서 NJ를 NY으로 변경</p>
<p>4) 이상치 제거</p>
<p>1) state 열의 값이 모두 대문자인지를 확인</p>
<p>: State 열의 값이 대문자인지, 소문자인지를 빠르게 확인해 보자.</p>
<p><code>python
df['State'].unique()</code></p>
<p>State 열의 값을 모두 대문자로 변경하기 위해서 <code>upper()</code> 함수와 데이터프레임의 <code>apply</code>을 이용한다. <code>apply</code> 메소드를
통해서 각 로우(row)나 칼럼(column)의 1차원 배열에 함수를 적용할 수 있다. 그리고 <code>lambda</code>함수는 간단하게 State 열의 각
값을 대문자로 변경하도록 해준다.</p>
<p>먼저 <code>lambda</code> 함수에 대해서 간단히 알아보자.</p>
<p>[익명 함수 또는 <code>lambda</code> 함수]</p>
<p>파이썬은 익명 함수 또는 lambda 함수라고 하는, 값을 반환하는 단순한 한 문장으로 이루어진 함수를 지원한다. 람다 함수는 데이터 분석에서
특히 편리한데, 이는 람다 함수를 사용하면 코드를 적게 쓰며, 코드도 더 간결해지기 때문이다.</p>
<p>```python</p>
<h1>람다 함수는 아래와 같이 사용</h1>
<h1>lambda arguments : expression</h1>
<h1>예를 들어, 아래의 코드는 두 개의 argument의 합을 리턴</h1>
<p>x = lambda a, b : a + b
x(3, 5)
```</p>
<p>이제 State 열의 값을 대문자로 변경해 보자.</p>
<p>```python</p>
<h1>State 열의 값을 대문자로 변경</h1>
<p>df['State'] = df.State.apply(lambda x: x.upper())
```</p>
<p><code>python
df['State'].unique()</code></p>
<p>2) status 값이 1인 레코드만 선택</p>
<p>```python</p>
<h1>Only grab where Status == 1</h1>
<p>mask = df['Status'] == 1
df = df[mask]
```</p>
<p>3) state열에서 NJ를 NY으로 변경</p>
<p><code>[df.State == 'NJ']</code> - State 열의 값이 NJ 인 모든 레코드를 찾기
<code>df.State[df.State == 'NJ'] = 'NY'</code> - State 열의 값이 NJ인 모든 레코드의 NJ를 NY으로 변경.</p>
<p><code>python
mask = df.State == 'NJ'
df['State'][mask] = 'NY'</code></p>
<p>이제 정리된 데이터의 State의 열의 유일한 값들을 확인해 보자.</p>
<p><code>python
df['State'].unique()</code></p>
<p>4) 이상치 제거</p>
<p>본 절에서는 데이터프레임을 <code>State</code>와 <code>StatusDate</code>의 연도를 기준으로 그룹을 분리한 후, 각 그룹에 있는
<code>CustomeCount</code>에 대해서 사분위수를 이용하여 이상치 제거를 하려고 한다.</p>
<p>먼저 GroupBy과 <code>apply</code>, <code>transform</code> 메소드를 간단하게 살펴보자.</p>
<p>[GroupBy]</p>
<p>pandas는 데이터셋을 자연스럽게 나누고 요약할 수 있는 <code>groupby</code>라는 유연한 방법을 제공한다. 
그룹연산(분리-
적용-결합)의 첫 번째 단계는 데이터프레임에 들어있는 데이터를 하나 이상의 색인을 기준으로 분리한다. 예를 들어, 데이터프레임은 로우(<code>axis
= 0</code>)로 분리하거나 칼럼(<code>axis = 1</code>)로 분리할 수 있다. 분리하고 나면 함수를 각 그룹에 적용시켜 새로운 값을 얻어낸다. 그리고
마지막으로 함수를 적용한 결과를 하나의 객체로 결합한다.</p>
<p>[그림 9-1]은 그룹 연산의 예시이다.</p>
<p><code>python
from IPython.display import Image
Image("python_for_data_analysis_p346.png")</code></p>
<p>실제로 데이터프레임을 만들어 그룹 연산을 시행해 보자.</p>
<p><code>python
dftest = pd.DataFrame({'key': ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C' ], 'data' : [0, 5, 10, 5, 10, 15, 10, 15, 20]})
dftest</code></p>
<p>```python</p>
<h1>key라는 열에 대해서 그룹으로 분리하고, 각 그룹에 sum()를 적용</h1>
<p>dftest.groupby('key').sum()
```</p>
<p>[<code>apply</code> 과 <code>transform</code>]</p>
<p>위에서 생성한 데이터프레임 <code>dftest</code>에 <code>apply</code>와 <code>transform</code> 메소드로
그룹 연산을 수행해보자.</p>
<p><code>python
dftest.groupby('key')['data'].apply(lambda x : x.sum())</code></p>
<p><code>python
dftest.groupby('key')['data'].transform(lambda x : x.sum())</code></p>
<p><code>apply</code>의 결과는 병합된 것을 볼 수 있는 반면 <code>transform</code> 메소드는 데이터프레임의 크기를 유지하는 것을 볼 수 있다.</p>
<p>이제 <code>State</code>와 <code>StatusDate</code>를 기준으로 <code>CustomerCount</code> 값을 합해보자. 이때, 데이터프레임 <code>df</code>에는
<code>StatusDate</code>가 index이므로 <code>StatusDate</code>를 기준으로 그룹화하기 위해서 이를 일반열로 보내야 한다. 이를 위해
<code>reset_index()</code>를 이용한다.</p>
<p><code>python
df.reset_index().head()</code></p>
<p><code>python
Daily = df.reset_index().groupby(['State','StatusDate']).sum()
Daily.head()</code></p>
<p><code>Status</code>의 값은 필요가 없으므로, 아래와 같이 삭제한다.</p>
<p><code>python
del Daily['Status']
Daily.head()</code></p>
<p>데이터프레임 <code>Daily</code>의 인덱스를 확인해 보자.</p>
<p><code>python
Daily.index</code></p>
<p>다음과 같이 각각의 인덱스도 확인할 수 있다.</p>
<p>```python</p>
<h1>State 인덱스 확인</h1>
<p>Daily.index.levels[0]
```</p>
<p>```python</p>
<h1>StatusDate 인덱스 확인</h1>
<p>Daily.index.levels[1]
```</p>
<p>이제 데이터프레임을 State와 StatusDate의 연도를 기준으로 그룹을 분리해 보자.</p>
<p><code>python
StateYear = Daily.groupby([Daily.index.get_level_values(0), Daily.index.get_level_values(1).year])</code></p>
<p><code>StateYear</code>의 각 그룹에 있는 CustomerCount에 대해서 사분위수를 이용하여 이상치를 제거를 시행해 보고자 한다. 이를 위해
먼저 사분위수를 이용하여 이상치를 제거하는 방법에 대해서 간단하게 살펴보자.</p>
<p>[사분위수를 이용하여 이상치를 제거하는 방법]</p>
<p>(a) 사분위수</p>
<p>전체 관측값을 작은 순서로 배열하였을 때, 사분위수는 전체를 사등분하는
값이다. 전체의 사분의 1, 사분의 2, 사분의 3은 각각 전체의 25%, 50%, 75%이고, 이를 제 1사분위수(Q1), 제
2사분위수(Q2) = 중앙값, 제 3사분위수(Q3)라고 한다.</p>
<p>(c) 사분위수 범위</p>
<p>제 3 사분위수와 제 1사분위수 사이의 거리를 퍼진
정도의 측도로 사용할 수 있는데, 이를 사분위수 범위(IQR)이라고 한다. 즉, IQR = 제 3사분위수 - 제 1사분위수 = Q3 - Q1
(d) 사분위수를 이용하여 이상치를 제거하는 방법</p>
<p>관측값이 Q1 - 1.5 IQR 보다 작거나 Q3 + 1.5 IQR 보다 크면, 이 값을
이상치라고 한다.</p>
<p>예제로 살펴보자.</p>
<p><code>python
dftest1 = pd.DataFrame({'A' : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]})
dftest1</code></p>
<p>```python</p>
<h1>A 열의 값에 대한 제 1사분위수는 3.5</h1>
<p>Q1 = dftest1.quantile(q = 0.25)
Q1
```</p>
<p>```python</p>
<h1>A 열의 값에 대한 제 2사분위수는 5.5</h1>
<p>Q2 = dftest1.quantile(q = 0.5)
Q2
```</p>
<p>```python</p>
<h1>A 열의 값에 대한 제 3사분위수는 8.5</h1>
<p>Q3 = dftest1.quantile(q = 0.75)
Q3
```</p>
<p>```python</p>
<h1>Lower = Q1 - 1.5 IQR</h1>
<p>Lower = Q1 - 1.5*(Q3 - Q1)
Lower
```</p>
<p>```python</p>
<h1>Upper = Q3 + 1.5 IQR</h1>
<p>Upper = Q3 + 1.5*(Q3 - Q1)
Upper
```</p>
<p><code>dftest1</code>의 A열의 자료 중 100은 <code>Upper</code>보다 크므로 이상치라고 할 수 있다.</p>
<p>이제 StateYear의 각 그룹에 있는 CustomerCount에 대해서 사분위수를 이용하여 이상치를 제거 해보자.</p>
<p><code>python
Daily['Lower'] = StateYear['CustomerCount'].transform( lambda x: x.quantile(q=.25) - 1.5*(x.quantile(q=.75)-x.quantile(q=.25)))
Daily['Upper'] = StateYear['CustomerCount'].transform( lambda x: x.quantile(q=.75) + 1.5*(x.quantile(q=.75)-x.quantile(q=.25)))
Daily['Outlier'] = (Daily['CustomerCount'] &lt; Daily['Lower']) | (Daily['CustomerCount'] &gt; Daily['Upper'])</code></p>
<p>```python</p>
<h1>이상치를 제거해 보자.</h1>
<p>Daily = Daily[Daily['Outlier'] == False]
Daily.head()
```</p>