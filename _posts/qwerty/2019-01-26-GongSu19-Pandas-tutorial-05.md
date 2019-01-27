---
layout: post
title: GongSu19-Pandas-tutorial-05
date: 2019-01-26 22:35:05 +0900
categories: qwerty
---
<p>Pandas 튜토리얼에 있는 Lessons for new pandas users_05에 대한 내용이다.</p>
<p>본 장에서는 <code>stack</code>과 <code>unstack</code> 함수에 대해서 간략히 살펴본다.</p>
<blockquote>
# 라이브러리 임포트하기
import pandas as pd
</blockquote>

<blockquote>
# 데이터셋 만들기
d = {'Ansung': [1, 2], 'Seoul': [3, 4]}
i = [2017, 2018]

# 데이터프레임 만들기
df = pd.DataFrame(data = d, index = i)
df
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
      <th>Ansung</th>
      <th>Seoul</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2017</th>
      <td>1</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2018</th>
      <td>2</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>

<blockquote>
df.index
</blockquote>

<pre><code>Int64Index([2017, 2018], dtype='int64')
</code></pre>
<p>stack() : 데이터의 열(column)을 인덱스(index)로 회전시킨다.</p>
<p>unstack() : 데이터의 인덱스를 열로 회전시킨다.</p>
<p>stack과 unstack는 보통 가장 안쪽에 있는 것부터 회전시킨다.</p>
<blockquote>
stack = df.stack()
stack
</blockquote>

<pre><code>2017  Ansung    1
      Seoul     3
2018  Ansung    2
      Seoul     4
dtype: int64
</code></pre>
<blockquote>
# 인덱스를 살펴보면, df의 열 이름(column names)이 포함되어 있다.
stack.index
</blockquote>

<pre><code>MultiIndex(levels=[[2017, 2018], ['Ansung', 'Seoul']],
           labels=[[0, 0, 1, 1], [0, 1, 0, 1]])
</code></pre>
<blockquote>
unstack = df.unstack()
unstack
</blockquote>

<pre><code>Ansung  2017    1
        2018    2
Seoul   2017    3
        2018    4
dtype: int64
</code></pre>
<blockquote>
unstack.index
</blockquote>

<pre><code>MultiIndex(levels=[['Ansung', 'Seoul'], [2017, 2018]],
           labels=[[0, 0, 1, 1], [0, 1, 0, 1]])
</code></pre>
<p><code>T</code> (transpose) 함수를 이용해서 행과 열을 바꿀 수 있다.</p>
<blockquote>
transpose = df.T
transpose
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
      <th>2017</th>
      <th>2018</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Ansung</th>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Seoul</th>
      <td>3</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>

<blockquote>
transpose.index
</blockquote>

<pre><code>Index(['Ansung', 'Seoul'], dtype='object')
</code></pre>