---
layout: post
title: GongSu17-Pandas-tutorial-03
date: 2019-01-26 22:35:03 +0900
categories: qwerty
---
<h1>pandas 3</h1>
<p><strong>자료 안내:</strong> </p>
<ol>
<li>
<p><a href="https://pandas.pydata.org/pandas-docs/stable/tutorials.html">pandas 라이브러리 튜토리얼</a>에 
있는 Lessons for new pandas users의 <a href="http://nbviewer.jupyter.org/urls/bitbucket.org/hrojas/learn-pandas/raw/master/lessons/03%20-%20Lesson.ipynb">03-Lesson</a> 내용을 담고 있다.</p>
</li>
<li>
<p>익명함수(<code>lambda</code> 함수), <code>GroupBy</code>, <code>apply</code>, <code>transform</code>에 대한 설명은 파이썬 튜토리얼, 
    pandas 튜토리얼과 한빛미디어의 &lt;파이썬 라이브러리를 활용한 데이터 분석&gt;책의 일부이다.</p>
</li>
<li>
<p>사분위수에 관한 내용은 자유아카데미의 &lt;통계학&gt;책의 일부이다. </p>
</li>
</ol>
<blockquote>
import pandas as pd
import matplotlib.pyplot as plt
import numpy.random as np
</blockquote>

<blockquote>
# 쥬피터 노트북에서 그래프를 직접 나타내기 위해 사용하는 코드
# 파이썬 전문 에디터에서는 사용하지 않음
%matplotlib inline
</blockquote>

<p>분석을 위한 테스트 데이터를 만들어 보자.</p>
<blockquote>
# seed 값을 111
np.seed(111)

# 테스트 데이터를 생성하는 함수 정의
def CreateDataSet(Number=1):

    Output = []

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
</blockquote>

<p>위의 함수를 이용하여 테스트 데이터를 만들고, 이를 다시 데이터프레임으로 만들어보자.</p>
<blockquote>
dataset = CreateDataSet(4)
df = pd.DataFrame(data=dataset, columns=['State','Status','CustomerCount','StatusDate'])
df.info()
</blockquote>

<pre><code>&lt;class 'pandas.core.frame.DataFrame'&gt;
RangeIndex: 836 entries, 0 to 835
Data columns (total 4 columns):
State            836 non-null object
Status           836 non-null int64
CustomerCount    836 non-null int64
StatusDate       836 non-null datetime64[ns]
dtypes: datetime64[ns](1), int64(2), object(1)
memory usage: 26.2+ KB
</code></pre>
<blockquote>
df.head()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>State</th>
      <th>Status</th>
      <th>CustomerCount</th>
      <th>StatusDate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>GA</td>
      <td>1</td>
      <td>877</td>
      <td>2009-01-05</td>
    </tr>
    <tr>
      <th>1</th>
      <td>FL</td>
      <td>1</td>
      <td>901</td>
      <td>2009-01-12</td>
    </tr>
    <tr>
      <th>2</th>
      <td>fl</td>
      <td>3</td>
      <td>749</td>
      <td>2009-01-19</td>
    </tr>
    <tr>
      <th>3</th>
      <td>FL</td>
      <td>3</td>
      <td>111</td>
      <td>2009-01-26</td>
    </tr>
    <tr>
      <th>4</th>
      <td>GA</td>
      <td>1</td>
      <td>300</td>
      <td>2009-02-02</td>
    </tr>
  </tbody>
</table>
</div>

<p>위의 데이터프레임을 Excel 파일로 저장하자. 이 때 인덱스 값은 원래의 테스트 데이터셋의 일부가 아니기 때문에 저장하지 않는다. </p>
<blockquote>
df.to_excel('Lesson3.xlsx', index=False)
print('Done')
</blockquote>

<pre><code>Done
</code></pre>
<h2>1. Excel로부터 데이터 가져오기</h2>
<p><code>read_excel</code> 함수를 이용하여 Excel 파일을 읽을 수 있다. 이 함수는 특정한 이름 또는 위치의 탭(tab)을 읽을 수 있다.</p>
<blockquote>
# 파일의 위치
Location = 'Lesson3.xlsx'

# 아래의 코드에서 0은 첫번째 시트를 의미.
# index_col = 'StatusDate'는 StatusDate를 인덱스로 가져오라는 의미
df = pd.read_excel(Location, 0, index_col='StatusDate')
df.dtypes
</blockquote>

<pre><code>State            object
Status            int64
CustomerCount     int64
dtype: object
</code></pre>
<blockquote>
# 데이터프레임의 인덱스를 확인
df.index
</blockquote>

<pre><code>DatetimeIndex(['2009-01-05', '2009-01-12', '2009-01-19', '2009-01-26',
               '2009-02-02', '2009-02-09', '2009-02-16', '2009-02-23',
               '2009-03-02', '2009-03-09',
               ...
               '2012-10-29', '2012-11-05', '2012-11-12', '2012-11-19',
               '2012-11-26', '2012-12-03', '2012-12-10', '2012-12-17',
               '2012-12-24', '2012-12-31'],
              dtype='datetime64[ns]', name='StatusDate', length=836, freq=None)
</code></pre>
<blockquote>
df.head()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>State</th>
      <th>Status</th>
      <th>CustomerCount</th>
    </tr>
    <tr>
      <th>StatusDate</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2009-01-05</th>
      <td>GA</td>
      <td>1</td>
      <td>877</td>
    </tr>
    <tr>
      <th>2009-01-12</th>
      <td>FL</td>
      <td>1</td>
      <td>901</td>
    </tr>
    <tr>
      <th>2009-01-19</th>
      <td>fl</td>
      <td>3</td>
      <td>749</td>
    </tr>
    <tr>
      <th>2009-01-26</th>
      <td>FL</td>
      <td>3</td>
      <td>111</td>
    </tr>
    <tr>
      <th>2009-02-02</th>
      <td>GA</td>
      <td>1</td>
      <td>300</td>
    </tr>
  </tbody>
</table>
</div>

<h2>2. 데이터 준비하기</h2>
<p>분석을 위해서 데이터에 다음과 같은 전처리를 해보자.</p>
<p>1) state 열의 값이 모두 대문자인지를 확인</p>
<p>2) status 값이 1인 레코드만 선택</p>
<p>3) state열에서 NJ를 NY으로 변경</p>
<p>4) 이상치 제거</p>
<p>1) state 열의 값이 모두 대문자인지를 확인</p>
<p>: State 열의 값이 대문자인지, 소문자인지를 빠르게 확인해 보자.</p>
<blockquote>
df['State'].unique()
</blockquote>

<pre><code>array(['GA', 'FL', 'fl', 'TX', 'NY', 'NJ'], dtype=object)
</code></pre>
<p>State 열의 값을 모두 대문자로 변경하기 위해서 <code>upper()</code> 함수와 데이터프레임의 <code>apply</code>을 이용한다. <code>apply</code> 메소드를 통해서 각 로우(row)나 칼럼(column)의 1차원 배열에 함수를 적용할 수 있다. 그리고 <code>lambda</code>함수는 간단하게 State 열의 각 값을 대문자로 변경하도록 해준다.</p>
<p>먼저 <code>lambda</code> 함수에 대해서 간단히 알아보자.</p>
<p>[익명 함수 또는 <code>lambda</code> 함수]</p>
<p>파이썬은 익명 함수 또는 lambda 함수라고 하는, 값을 반환하는 단순한 한 문장으로 이루어진 함수를 지원한다. 람다 함수는 데이터 분석에서 특히 편리한데, 이는 람다 함수를 사용하면 코드를 적게 쓰며, 코드도 더 간결해지기 때문이다.</p>
<blockquote>
# 람다 함수는 아래와 같이 사용
# lambda arguments : expression 
# 예를 들어, 아래의 코드는 두 개의 argument의 합을 리턴

x = lambda a, b : a + b
x(3, 5)
</blockquote>

<pre><code>8
</code></pre>
<p>이제 State 열의 값을 대문자로 변경해 보자.</p>
<blockquote>
# State 열의 값을 대문자로 변경
df['State'] = df.State.apply(lambda x: x.upper())
</blockquote>

<blockquote>
df['State'].unique()
</blockquote>

<pre><code>array(['GA', 'FL', 'TX', 'NY', 'NJ'], dtype=object)
</code></pre>
<p>2) status 값이 1인 레코드만 선택</p>
<blockquote>
# Only grab where Status == 1
mask = df['Status'] == 1
df = df[mask]
</blockquote>

<p>3) state열에서 NJ를 NY으로 변경</p>
<p><code>[df.State == 'NJ']</code> - State 열의 값이 NJ 인 모든 레코드를 찾기</p>
<p><code>df.State[df.State == 'NJ'] = 'NY'</code> - State 열의 값이 NJ인 모든 레코드의 NJ를 NY으로 변경.</p>
<blockquote>
mask = df.State == 'NJ'
df['State'][mask] = 'NY'
</blockquote>

<p>이제 정리된 데이터의 State의 열의 유일한 값들을 확인해 보자.</p>
<blockquote>
df['State'].unique()
</blockquote>

<pre><code>array(['GA', 'FL', 'NY', 'TX'], dtype=object)
</code></pre>
<p>4) 이상치 제거</p>
<p>본 절에서는 데이터프레임을 <code>State</code>와 <code>StatusDate</code>의 연도를 기준으로 그룹을 분리한 후, 각 그룹에 있는 <code>CustomeCount</code>에 대해서 사분위수를 이용하여 이상치 제거를 하려고 한다.</p>
<p>먼저 GroupBy과 <code>apply</code>, <code>transform</code> 메소드를 간단하게 살펴보자.</p>
<p>[GroupBy]</p>
<p>pandas는 데이터셋을 자연스럽게 나누고 요약할 수 있는 <code>groupby</code>라는 유연한 방법을 제공한다. 
그룹연산(분리-적용-결합)의 첫 번째 단계는 데이터프레임에 들어있는 데이터를 하나 이상의 색인을 기준으로 분리한다. 예를 들어, 데이터프레임은 로우(<code>axis = 0</code>)로 분리하거나 칼럼(<code>axis = 1</code>)로 분리할 수 있다. 분리하고 나면 함수를 각 그룹에 적용시켜 새로운 값을 얻어낸다. 그리고 마지막으로 함수를 적용한 결과를 하나의 객체로 결합한다.</p>
<p>[그림 9-1]은 그룹 연산의 예시이다.</p>
<blockquote>
from IPython.display import Image
Image("python_for_data_analysis_p346.png")
</blockquote>

<p><img alt="png" src="GongSu17-Pandas-tutorial-03_files/GongSu17-Pandas-tutorial-03_39_0.png" /></p>
<p>실제로 데이터프레임을 만들어 그룹 연산을 시행해 보자.</p>
<blockquote>
dftest = pd.DataFrame({'key': ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C' ], 'data' : [0, 5, 10, 5, 10, 15, 10, 15, 20]})
dftest
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>key</th>
      <th>data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>5</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>10</td>
    </tr>
    <tr>
      <th>3</th>
      <td>A</td>
      <td>5</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>10</td>
    </tr>
    <tr>
      <th>5</th>
      <td>C</td>
      <td>15</td>
    </tr>
    <tr>
      <th>6</th>
      <td>A</td>
      <td>10</td>
    </tr>
    <tr>
      <th>7</th>
      <td>B</td>
      <td>15</td>
    </tr>
    <tr>
      <th>8</th>
      <td>C</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
</div>

<blockquote>
# key라는 열에 대해서 그룹으로 분리하고, 각 그룹에 sum()를 적용
dftest.groupby('key').sum()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>data</th>
    </tr>
    <tr>
      <th>key</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>15</td>
    </tr>
    <tr>
      <th>B</th>
      <td>30</td>
    </tr>
    <tr>
      <th>C</th>
      <td>45</td>
    </tr>
  </tbody>
</table>
</div>

<p>[<code>apply</code> 과 <code>transform</code>]</p>
<p>위에서 생성한 데이터프레임 <code>dftest</code>에 <code>apply</code>와 <code>transform</code> 메소드로 그룹 연산을 수행해보자.</p>
<blockquote>
dftest.groupby('key')['data'].apply(lambda x : x.sum())
</blockquote>

<pre><code>key
A    15
B    30
C    45
Name: data, dtype: int64
</code></pre>
<blockquote>
dftest.groupby('key')['data'].transform(lambda x : x.sum())
</blockquote>

<pre><code>0    15
1    30
2    45
3    15
4    30
5    45
6    15
7    30
8    45
Name: data, dtype: int64
</code></pre>
<p><code>apply</code>의 결과는 병합된 것을 볼 수 있는 반면 <code>transform</code> 메소드는 데이터프레임의 크기를 유지하는 것을 볼 수 있다.</p>
<p>이제 <code>State</code>와 <code>StatusDate</code>를 기준으로 <code>CustomerCount</code> 값을 합해보자. 이때, 데이터프레임 <code>df</code>에는 <code>StatusDate</code>가 index이므로 <code>StatusDate</code>를 기준으로 그룹화하기 위해서 이를 일반열로 보내야 한다. 이를 위해 <code>reset_index()</code>를 이용한다. </p>
<blockquote>
df.reset_index().head()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>StatusDate</th>
      <th>State</th>
      <th>Status</th>
      <th>CustomerCount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2009-01-05</td>
      <td>GA</td>
      <td>1</td>
      <td>877</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2009-01-12</td>
      <td>FL</td>
      <td>1</td>
      <td>901</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2009-02-02</td>
      <td>GA</td>
      <td>1</td>
      <td>300</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2009-03-09</td>
      <td>NY</td>
      <td>1</td>
      <td>992</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2009-04-06</td>
      <td>FL</td>
      <td>1</td>
      <td>291</td>
    </tr>
  </tbody>
</table>
</div>

<blockquote>
Daily = df.reset_index().groupby(['State','StatusDate']).sum()
Daily.head()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Status</th>
      <th>CustomerCount</th>
    </tr>
    <tr>
      <th>State</th>
      <th>StatusDate</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">FL</th>
      <th>2009-01-12</th>
      <td>1</td>
      <td>901</td>
    </tr>
    <tr>
      <th>2009-02-02</th>
      <td>1</td>
      <td>653</td>
    </tr>
    <tr>
      <th>2009-03-23</th>
      <td>1</td>
      <td>752</td>
    </tr>
    <tr>
      <th>2009-04-06</th>
      <td>2</td>
      <td>1086</td>
    </tr>
    <tr>
      <th>2009-06-08</th>
      <td>1</td>
      <td>649</td>
    </tr>
  </tbody>
</table>
</div>

<p><code>Status</code>의 값은 필요가 없으므로, 아래와 같이 삭제한다.</p>
<blockquote>
del Daily['Status']
Daily.head()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>CustomerCount</th>
    </tr>
    <tr>
      <th>State</th>
      <th>StatusDate</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">FL</th>
      <th>2009-01-12</th>
      <td>901</td>
    </tr>
    <tr>
      <th>2009-02-02</th>
      <td>653</td>
    </tr>
    <tr>
      <th>2009-03-23</th>
      <td>752</td>
    </tr>
    <tr>
      <th>2009-04-06</th>
      <td>1086</td>
    </tr>
    <tr>
      <th>2009-06-08</th>
      <td>649</td>
    </tr>
  </tbody>
</table>
</div>

<p>데이터프레임 <code>Daily</code>의 인덱스를 확인해 보자.</p>
<blockquote>
Daily.index
</blockquote>

<pre><code>MultiIndex(levels=[['FL', 'GA', 'NY', 'TX'], [2009-01-05 00:00:00, 2009-01-12 00:00:00, 2009-01-19 00:00:00, 2009-02-02 00:00:00, 2009-02-23 00:00:00, 2009-03-09 00:00:00, 2009-03-16 00:00:00, 2009-03-23 00:00:00, 2009-03-30 00:00:00, 2009-04-06 00:00:00, 2009-04-13 00:00:00, 2009-04-20 00:00:00, 2009-04-27 00:00:00, 2009-05-04 00:00:00, 2009-05-11 00:00:00, 2009-05-18 00:00:00, 2009-05-25 00:00:00, 2009-06-08 00:00:00, 2009-06-22 00:00:00, 2009-07-06 00:00:00, 2009-07-13 00:00:00, 2009-07-20 00:00:00, 2009-07-27 00:00:00, 2009-08-10 00:00:00, 2009-08-17 00:00:00, 2009-08-24 00:00:00, 2009-08-31 00:00:00, 2009-09-07 00:00:00, 2009-09-14 00:00:00, 2009-09-21 00:00:00, 2009-09-28 00:00:00, 2009-10-05 00:00:00, 2009-10-12 00:00:00, 2009-10-19 00:00:00, 2009-10-26 00:00:00, 2009-11-02 00:00:00, 2009-11-23 00:00:00, 2009-11-30 00:00:00, 2009-12-07 00:00:00, 2009-12-14 00:00:00, 2010-01-04 00:00:00, 2010-01-11 00:00:00, 2010-01-18 00:00:00, 2010-01-25 00:00:00, 2010-02-08 00:00:00, 2010-02-15 00:00:00, 2010-02-22 00:00:00, 2010-03-01 00:00:00, 2010-03-08 00:00:00, 2010-03-15 00:00:00, 2010-04-05 00:00:00, 2010-04-12 00:00:00, 2010-04-26 00:00:00, 2010-05-03 00:00:00, 2010-05-10 00:00:00, 2010-05-17 00:00:00, 2010-05-24 00:00:00, 2010-05-31 00:00:00, 2010-06-14 00:00:00, 2010-06-28 00:00:00, 2010-07-05 00:00:00, 2010-07-19 00:00:00, 2010-07-26 00:00:00, 2010-08-02 00:00:00, 2010-08-09 00:00:00, 2010-08-16 00:00:00, 2010-08-30 00:00:00, 2010-09-06 00:00:00, 2010-09-13 00:00:00, 2010-09-20 00:00:00, 2010-09-27 00:00:00, 2010-10-04 00:00:00, 2010-10-11 00:00:00, 2010-10-18 00:00:00, 2010-10-25 00:00:00, 2010-11-01 00:00:00, 2010-11-08 00:00:00, 2010-11-15 00:00:00, 2010-11-29 00:00:00, 2010-12-20 00:00:00, 2011-01-03 00:00:00, 2011-01-10 00:00:00, 2011-01-17 00:00:00, 2011-02-07 00:00:00, 2011-02-14 00:00:00, 2011-02-21 00:00:00, 2011-02-28 00:00:00, 2011-03-07 00:00:00, 2011-03-14 00:00:00, 2011-03-21 00:00:00, 2011-03-28 00:00:00, 2011-04-04 00:00:00, 2011-04-18 00:00:00, 2011-04-25 00:00:00, 2011-05-02 00:00:00, 2011-05-09 00:00:00, 2011-05-16 00:00:00, 2011-05-23 00:00:00, 2011-05-30 00:00:00, 2011-06-06 00:00:00, 2011-06-20 00:00:00, 2011-06-27 00:00:00, 2011-07-04 00:00:00, 2011-07-11 00:00:00, 2011-07-25 00:00:00, 2011-08-01 00:00:00, 2011-08-08 00:00:00, 2011-08-15 00:00:00, 2011-08-29 00:00:00, 2011-09-05 00:00:00, 2011-09-12 00:00:00, 2011-09-26 00:00:00, 2011-10-03 00:00:00, 2011-10-24 00:00:00, 2011-10-31 00:00:00, 2011-11-07 00:00:00, 2011-11-14 00:00:00, 2011-11-28 00:00:00, 2011-12-05 00:00:00, 2011-12-12 00:00:00, 2011-12-19 00:00:00, 2011-12-26 00:00:00, 2012-01-02 00:00:00, 2012-01-09 00:00:00, 2012-01-16 00:00:00, 2012-02-06 00:00:00, 2012-02-13 00:00:00, 2012-02-20 00:00:00, 2012-02-27 00:00:00, 2012-03-05 00:00:00, 2012-03-12 00:00:00, 2012-03-19 00:00:00, 2012-04-02 00:00:00, 2012-04-09 00:00:00, 2012-04-23 00:00:00, 2012-04-30 00:00:00, 2012-05-07 00:00:00, 2012-05-14 00:00:00, 2012-05-28 00:00:00, 2012-06-04 00:00:00, 2012-06-18 00:00:00, 2012-07-02 00:00:00, 2012-07-09 00:00:00, 2012-07-16 00:00:00, 2012-07-30 00:00:00, 2012-08-06 00:00:00, 2012-08-20 00:00:00, 2012-08-27 00:00:00, 2012-09-03 00:00:00, 2012-09-10 00:00:00, 2012-09-17 00:00:00, 2012-09-24 00:00:00, 2012-10-01 00:00:00, 2012-10-08 00:00:00, 2012-10-22 00:00:00, 2012-10-29 00:00:00, 2012-11-05 00:00:00, 2012-11-12 00:00:00, 2012-11-19 00:00:00, 2012-11-26 00:00:00, 2012-12-10 00:00:00]],
           labels=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [1, 3, 7, 9, 17, 19, 20, 21, 23, 25, 27, 28, 29, 30, 31, 35, 38, 40, 41, 44, 45, 46, 47, 48, 49, 52, 54, 56, 57, 59, 60, 62, 66, 68, 69, 70, 71, 72, 75, 76, 77, 78, 79, 85, 88, 89, 92, 96, 97, 99, 100, 101, 103, 104, 105, 108, 109, 110, 112, 114, 115, 117, 118, 119, 125, 126, 127, 128, 129, 131, 133, 134, 135, 136, 137, 140, 146, 150, 151, 152, 153, 157, 0, 3, 7, 22, 23, 24, 27, 28, 34, 37, 42, 47, 50, 55, 58, 66, 67, 69, 71, 73, 74, 75, 79, 82, 83, 84, 85, 91, 93, 95, 97, 106, 110, 120, 124, 125, 126, 127, 132, 133, 139, 143, 158, 159, 160, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 19, 21, 22, 24, 26, 28, 29, 30, 31, 32, 33, 36, 39, 40, 42, 43, 51, 56, 61, 62, 63, 66, 67, 70, 71, 72, 73, 75, 78, 80, 81, 82, 83, 86, 87, 90, 91, 92, 94, 101, 102, 103, 105, 107, 108, 111, 113, 116, 118, 122, 125, 129, 130, 131, 132, 138, 139, 141, 142, 143, 144, 148, 149, 154, 156, 159, 160, 15, 16, 17, 18, 45, 47, 50, 53, 57, 61, 64, 65, 68, 84, 88, 94, 98, 107, 110, 112, 115, 121, 122, 123, 128, 130, 134, 135, 145, 146, 147, 148, 155]],
           names=['State', 'StatusDate'])
</code></pre>
<p>다음과 같이 각각의 인덱스도 확인할 수 있다.</p>
<blockquote>
# State 인덱스 확인
Daily.index.levels[0]
</blockquote>

<pre><code>Index(['FL', 'GA', 'NY', 'TX'], dtype='object', name='State')
</code></pre>
<blockquote>
# StatusDate 인덱스 확인
Daily.index.levels[1]
</blockquote>

<pre><code>DatetimeIndex(['2009-01-05', '2009-01-12', '2009-01-19', '2009-02-02',
               '2009-02-23', '2009-03-09', '2009-03-16', '2009-03-23',
               '2009-03-30', '2009-04-06',
               ...
               '2012-09-24', '2012-10-01', '2012-10-08', '2012-10-22',
               '2012-10-29', '2012-11-05', '2012-11-12', '2012-11-19',
               '2012-11-26', '2012-12-10'],
              dtype='datetime64[ns]', name='StatusDate', length=161, freq=None)
</code></pre>
<p>이제 데이터프레임을 State와 StatusDate의 연도를 기준으로 그룹을 분리해 보자.</p>
<blockquote>
StateYear = Daily.groupby([Daily.index.get_level_values(0), Daily.index.get_level_values(1).year])
</blockquote>

<p><code>StateYear</code>의 각 그룹에 있는 CustomerCount에 대해서 사분위수를 이용하여 이상치를 제거를 시행해 보고자 한다. 이를 위해 먼저 사분위수를 이용하여 이상치를 제거하는 방법에 대해서 간단하게 살펴보자.</p>
<p>[사분위수를 이용하여 이상치를 제거하는 방법]</p>
<p>(a) 사분위수</p>
<p>전체 관측값을 작은 순서로 배열하였을 때, 사분위수는 전체를 사등분하는 값이다. 전체의 사분의 1, 사분의 2, 사분의 3은 각각 전체의 25%, 50%, 75%이고, 이를 제 1사분위수(Q1), 제 2사분위수(Q2) = 중앙값, 제 3사분위수(Q3)라고 한다.</p>
<p>(c) 사분위수 범위</p>
<p>제 3 사분위수와 제 1사분위수 사이의 거리를 퍼진 정도의 측도로 사용할 수 있는데, 이를 사분위수 범위(IQR)이라고 한다. 즉, IQR = 제 3사분위수 - 제 1사분위수 = Q3 - Q1</p>
<p>(d) 사분위수를 이용하여 이상치를 제거하는 방법</p>
<p>관측값이 Q1 - 1.5 IQR 보다 작거나 Q3 + 1.5 IQR 보다 크면, 이 값을 이상치라고 한다. </p>
<p>예제로 살펴보자.</p>
<blockquote>
dftest1 = pd.DataFrame({'A' : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]})
dftest1
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
    </tr>
    <tr>
      <th>5</th>
      <td>6</td>
    </tr>
    <tr>
      <th>6</th>
      <td>7</td>
    </tr>
    <tr>
      <th>7</th>
      <td>8</td>
    </tr>
    <tr>
      <th>8</th>
      <td>9</td>
    </tr>
    <tr>
      <th>9</th>
      <td>10</td>
    </tr>
    <tr>
      <th>10</th>
      <td>100</td>
    </tr>
  </tbody>
</table>
</div>

<blockquote>
# A 열의 값에 대한 제 1사분위수는 3.5
Q1 = dftest1.quantile(q = 0.25)
Q1
</blockquote>

<pre><code>A    3.5
Name: 0.25, dtype: float64
</code></pre>
<blockquote>
# A 열의 값에 대한 제 2사분위수는 5.5
Q2 = dftest1.quantile(q = 0.5)
Q2
</blockquote>

<pre><code>A    6.0
Name: 0.5, dtype: float64
</code></pre>
<blockquote>
# A 열의 값에 대한 제 3사분위수는 8.5
Q3 = dftest1.quantile(q = 0.75)
Q3
</blockquote>

<pre><code>A    8.5
Name: 0.75, dtype: float64
</code></pre>
<blockquote>
#  Lower = Q1 - 1.5 IQR
Lower = Q1 - 1.5*(Q3 - Q1)
Lower
</blockquote>

<pre><code>A   -4.0
dtype: float64
</code></pre>
<blockquote>
# Upper = Q3 + 1.5 IQR
Upper = Q3 + 1.5*(Q3 - Q1)
Upper
</blockquote>

<pre><code>A    16.0
dtype: float64
</code></pre>
<p><code>dftest1</code>의 A열의 자료 중 100은 <code>Upper</code>보다 크므로 이상치라고 할 수 있다.  </p>
<p>이제 StateYear의 각 그룹에 있는 CustomerCount에 대해서 사분위수를 이용하여 이상치를 제거 해보자. </p>
<blockquote>
Daily['Lower'] = StateYear['CustomerCount'].transform( lambda x: x.quantile(q=.25) - 1.5*(x.quantile(q=.75)-x.quantile(q=.25)))
Daily['Upper'] = StateYear['CustomerCount'].transform( lambda x: x.quantile(q=.75) + 1.5*(x.quantile(q=.75)-x.quantile(q=.25)))
Daily['Outlier'] = (Daily['CustomerCount'] < Daily['Lower']) | (Daily['CustomerCount'] > Daily['Upper']) 
</blockquote>

<blockquote>
# 이상치를 제거해 보자.
Daily = Daily[Daily['Outlier'] == False]
Daily.head()
</blockquote>

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>CustomerCount</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Outlier</th>
    </tr>
    <tr>
      <th>State</th>
      <th>StatusDate</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">FL</th>
      <th>2009-01-12</th>
      <td>901</td>
      <td>117.0</td>
      <td>1133.0</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2009-02-02</th>
      <td>653</td>
      <td>117.0</td>
      <td>1133.0</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2009-03-23</th>
      <td>752</td>
      <td>117.0</td>
      <td>1133.0</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2009-04-06</th>
      <td>1086</td>
      <td>117.0</td>
      <td>1133.0</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2009-06-08</th>
      <td>649</td>
      <td>117.0</td>
      <td>1133.0</td>
      <td>False</td>
    </tr>
  </tbody>
</table>
</div>