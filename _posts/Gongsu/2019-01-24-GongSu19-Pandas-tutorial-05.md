---
layout: post
title: GongSu19-Pandas-tutorial-05
date: 2019-01-24 13:33:56 +0900
categories: Gongsu
---

<p>Pandas 튜토리얼에 있는 Lessons for new pandas users_05에 대한 내용이다.</p>
<p>본 장에서는 <code>stack</code>과 <code>unstack</code> 함수에 대해서 간략히 살펴본다.</p>
<p>```python</p>
<h1>라이브러리 임포트하기</h1>
<p>import pandas as pd
```</p>
<p>```python</p>
<h1>데이터셋 만들기</h1>
<p>d = {'Ansung': [1, 2], 'Seoul': [3, 4]}
i = [2017, 2018]</p>
<h1>데이터프레임 만들기</h1>
<p>df = pd.DataFrame(data = d, index = i)
df
```</p>
<p><code>python
df.index</code></p>
<p>stack() : 데이터의 열(column)을 인덱스(index)로 회전시킨다.</p>
<p>unstack() : 데이터의 인덱스를 열로 회전시킨다.
stack과 unstack는 보통 가장 안쪽에 있는 것부터 회전시킨다.</p>
<p><code>python
stack = df.stack()
stack</code></p>
<p>```python</p>
<h1>인덱스를 살펴보면, df의 열 이름(column names)이 포함되어 있다.</h1>
<p>stack.index
```</p>
<p><code>python
unstack = df.unstack()
unstack</code></p>
<p><code>python
unstack.index</code></p>
<p><code>T</code> (transpose) 함수를 이용해서 행과 열을 바꿀 수 있다.</p>
<p><code>python
transpose = df.T
transpose</code></p>
<p><code>python
transpose.index</code></p>