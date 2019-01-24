---
layout: post
title: GongSu18-Pandas-tutorial-04
date: 2019-01-24 13:33:55 +0900
categories: Gongsu
---
<p>Pandas 튜토리얼에 있는 Lessons for new pandas users_04에 대한 내용이다.</p>
<p>본 장에서는 새로운 열(columns)을 추가, 삭제하고, 데이터를 슬라이싱(slicing)하는 여러 가지 방법을 다룬다.</p>
<p>```python</p>
<h1>라이브러리 임포트하기</h1>
<p>import pandas as pd
```</p>
<p>```python</p>
<h1>데이터셋 만들기</h1>
<p>d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
<h1>데이터프레임 만들기</h1>
<p>df = pd.DataFrame(d)
df
```</p>
<p>```python</p>
<h1>열(column)의 이름 변경하기</h1>
<p>df.columns = ['Rev']
df
```</p>
<p>```python</p>
<h1>열(column) 추가하기</h1>
<p>df['NewCol'] = 5
df
```</p>
<p>```python</p>
<h1>새로 만든 열(column) 수정하기</h1>
<p>df['NewCol'] = df['NewCol'] + 1
df
```</p>
<p>```python</p>
<h1>열(column) 삭제하기</h1>
<p>del df['NewCol']
df
```</p>
<p>```python</p>
<h1>두 개의 열(column) 추가하기</h1>
<p>df['test'] = 3
df['col'] = df['Rev']
df
```</p>
<p>```python</p>
<h1>인덱스(index)의 이름 변경하기</h1>
<p>i = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
df.index = i
df
```</p>
<p><code>loc</code> 을 이용하여 데이터프레임의 일부를 선택할 수 있다.</p>
<p><code>python
df.loc['a']</code></p>
<p>```python</p>
<h1>df.loc[inclusive:inclusive]</h1>
<p>df.loc['a':'d']
```</p>
<p>```python</p>
<h1>df.iloc[inclusive:exclusive]</h1>
<p>df.iloc[0:3]
```</p>
<p><code>iloc</code>은 <code>loc</code>와 달리 순서를 나타내는 정수형(integer) 인덱스만 받는다.</p>
<p>열(column) 이름을 사용하여 열을 선택할 수 있다.</p>
<p><code>python
df['Rev']</code></p>
<p><code>python
df[['Rev', 'test']]</code></p>
<p>```python</p>
<h1>df.ix[row, columns]</h1>
<h1>ix 함수 대체하기</h1>
<h1>df.ix[0:3, 'Rev']</h1>
<p>df.loc[df.index[0:3], 'Rev']
```</p>
<p>```python</p>
<h1>ix 함수 대체하기</h1>
<h1>df.ix[5:, 'col']</h1>
<p>df.loc[df.index[5:], 'col']
```</p>
<p>```python</p>
<h1>ix 함수 대체하기</h1>
<h1>df.ix[:3, ['col', 'test']]</h1>
<p>df.loc[df.index[:3], ['col', 'test']]
```</p>
<p>데이터프레임의 처음 또는 끝에 있는 관측치(observation)를 확인하려면 다음과 같이 하면 된다.</p>
<p><code>python
df.head()</code></p>
<p><code>python
df.tail()</code></p>