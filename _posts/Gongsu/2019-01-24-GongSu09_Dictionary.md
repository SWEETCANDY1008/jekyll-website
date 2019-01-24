---
layout: post
title: GongSu09_Dictionary
date: 2019-01-24 13:33:47 +0900
categories: Gongsu
---
<h1>사전 활용</h1>
<h4>수정사항</h4>
<ul>
<li>엑셀 그림 업데이트 필요: 내림차순 활용해야 함</li>
<li>연습문제 추가 필요</li>
</ul>
<h2>주요 내용</h2>
<p>파이썬에 내장되어 있는 컬렉션 자료형 중 사전에 대해 알아 본다.</p>
<p><strong>사전(dictionaries)</strong>: 키(keys)와 값(values)으로
이루어진 쌍(pairs)들의 집합</p>
<ul>
<li>
<p>사용 형태: 집합기호 사용
<code>eng_math = {'year': 2017, 'semester' :
2, 'subject': 'Data Science'}</code></p>
</li>
<li>
<p>특징</p>
<ul>
<li>키로 사용될 수 있는 자료형: 문자열 등 불변 자료형 값</li>
</ul>
</li>
<li>
<p>값으로 사용될 수 있는 자료형: 임의의 값</p>
</li>
<li>
<p>사전은 가변 자료형이다. </p>
<ul>
<li>
<p><code>사전이름[키이름] = 값</code> 을 이용해 특정 항목의
키에 해당하는 값을 변경할 수 있다.</p>
</li>
<li>
<p><code>update()</code> 메소드: 항목 추가</p>
</li>
<li><code>del</code> 함수 또는 <code>pop()</code> 메소드:
특정 항목 삭제</li>
</ul>
</li>
<li>
<p><code>items</code>, <code>keys</code>, <code>values</code> 등의 메소드를 이용하여 사전의 항목 확인 가능</p>
</li>
</ul>
<h2>준비 사항</h2>
<ul>
<li>사전 자료형의 정의와 기초적인 활용법에 대한 자세한 설명은
<a href="https://github.com/liganega/bpp/blob/master/notes/05-ThinkPython-
Dictionaries.ipynb">여기</a>를
    참조한다.</li>
</ul>
<h2>오늘의 주요 예제</h2>
<p><code>data</code> 디렉토리에 저장된 <code>scores_list.txt</code> 파일은 선수 여덟 명의 점수를 담고 있다.</p>
<p><code>txt
Name    Score
player1 21.09 
player2 20.32 
player3 21.81 
player4 22.97
player5 23.29 
player6 22.09 
player7 21.20 
player8 22.16</code></p>
<p>목표: 위 파일로부터 1~3등
선수의 이름과 기록을 아래와 같이 확인하기
<code>txt
1등 player5 23.29 
2등 player4 22.97 
3등 player8
22.16</code></p>
<p><strong>주의:</strong> 이전에는 1~3등의 점수만 확인하였다. 
하지만 이제는 선수 이름까지 함께 확인해야 한다.</p>
<p><strong>참조:</strong>
Head First Programming(한빛미디어) 5장</p>
<h2>사전 활용</h2>
<p>저장된 파일에서 데이터를 불러와서 한 줄씩 확인하는 방법은 다음과 같다.</p>
<p>```python
result_f = open("data/scores_list.txt")</p>
<p>for line in result_f: 
    print(line.strip())              # strip 메소드 활용하기</p>
<p>result_f.close()
```</p>
<h2>복습</h2>
<p>앞 장에서 1~3등의 점수를 확인하였다.</p>
<p>```python
result_f = open("data/scores_list.txt")</p>
<p>score_list = []                        </p>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_list.append(float(score))
    except:
        continue</p>
<p>result_f.close() </p>
<p>score_list.sort(reverse=True)           # 리스트를 내림차순으로 정렬</p>
<p>print("The top scores were:") 
print(score_list[0]) <br />
print(score_list[1]) <br />
print(score_list[2])
```</p>
<p><code>for</code> 반복문을 이용하여 다음과 할 수도 있다.</p>
<p>```python
result_f = open("data/scores_list.txt")</p>
<p>score_list = []                        </p>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_list.append(float(score))
    except:
        continue</p>
<p>result_f.close() </p>
<p>score_list.sort(reverse=True)           # 리스트를 내림차순으로 정렬</p>
<p>print("The top scores were:") </p>
<p>for i in range(3):
    print(score_list[i])
```</p>
<p>이제 위 코드를 수정하여 아래 결과를 얻고자 한다.
<code>txt
1등 player5 23.29 
2등 player4 22.97 
3등
player8 22.16</code>
즉, 각 등수의 선수 이름까지 필요하다.
어떻게 하면 선수이름과 점수를 동시에 움직이게 할 수 있을까?
마이크로소프트의 엑셀 프로그램을 활용하면 매우 간단하다.</p>
<p>
<table cellspacing="20">

<tr>
<td align="center">
<img
src="{{ "assets/images/excel1.png" | relative_url }}" style="width:100%">
</td>
<td align="center">
<img
src="{{ "assets/images/excel1a.png" | relative_url }}" style="width:100%">
</td>
<td align="center">
<img
src="{{ "assets/images/excel2.png" | relative_url }}" style="width:100%">
</td>
</tr>

<tr>
<td
align="center">
기존 기록표
</td>
<td align="center">
점수 기준으로 정렬하기
</td>
<td
align="center">
정렬 후 기록표
</td>
</tr>

</table>
</p>

<h2>두 개의 리스트로 쪼개기</h2>
<p>먼저 앞서 사용한 방식을 약간 수정해서 기록들의 리스트와 선수이름들의 리스트를 생성해보자.</p>
<p>```python
result_f = open("data/scores_list.txt") </p>
<p>score_list = []                      <br />
name_list = []                           # 선수이름 리스트 생성</p>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_list.append(float(score))
        name_list.append(name)          # 선수이름 추가
    except:
        continue</p>
<p>result_f.close() 
```</p>
<p><code>python
print(score_list)</code></p>
<p><code>python
print(name_list)</code></p>
<p>현재 두 개의 리스트는 기존 테이블의 리스트의 순서와 동일한 순서대로 항목을 갖고 있다.
예를 들어, <code>name_list</code> 리스트의 첫 째
선수의 기록은 <code>score_list</code> 리스트의 첫 째 항목 값이다. </p>
<p>그런데 1~3등의 점수를 얻기 위해 <code>score_list</code> 리스트를
정렬하면 상위 세 명의 점수는 확인할 수 있었지만 어떤 선수가 수상을 해야 할지는 알 수 없었다. </p>
<p>어떻게 해야 할까? <code>name_list</code>
리스트도 정렬할까? 그런데 어떤 기준으로 정렬하나? 이름순으로? 그러면 <code>A</code> 또는 <code>Z</code>로 시작하는 선수가 항상 1등 아니면 꼴등이 되어
버리는 문제가 발생한다. </p>
<p>이런 문제는 두 개의 리스트를 다룰 때 항상 발생한다. 그리고 일반적으로 두 개의 리스트를 엑셀의 경우처럼 한 가지
기준으로 연동해서 정렬할 수는 없다. 
따라서 다른 접근방식이 요구된다.</p>
<p>여기서는 사전 자료형을 이용하여 문제를 해결하고자 한다.
하지만
해결법을 설명하기 전에 사전 자료형을 간단한 예제를 통해 공부하고자 한다.</p>
<h2>사전 자료형 예제</h2>
<p>사전 자료형에 대한 이해는 어학공부에 사용하는 사전을 떠올리면 쉽다. 
영어 사전의 경우 '단어 와 뜻'으로 이루어진
쌍들의 집합이라고 생각할 수 있다.
사전 자료형도 동일하게 작동한다.</p>
<p>예를 들어, 평택, 수원, 제주의 현재 온도에 대한 정보가 아래와 같다고
하자.
<code>Pyongtaek 22
Suwon 18
Jeju 25</code></p>
<p>이제 사전 자료형을 이용하여 위 정보를 저장하고 활용하는 방법은
다음과 같다.</p>
<p>먼저 빈 사전을 선언한다.</p>
<p><code>python
city_temperature = {}</code></p>
<p>이제 원하는 자료들의 쌍을 입력한다. 
예를 들어 '평택 온도는 22도' 라는 정보를 추가하고자 하면 아래와 같이 하면 된다.</p>
<p><code>python
city_temperature['Pyongtaek'] = 22</code></p>
<p>이제 평택의 정보가 추가되었음을 확인할 수 있다.</p>
<p><code>python
city_temperature</code></p>
<p>이제 수원과 제주의 정보를 추가하고 확인해보자.</p>
<p><code>python
city_temperature['Suwon'] = 18
city_temperature['Jeju'] = 25
city_temperature</code></p>
<p><strong>주의:</strong> 사전 자료형에서 각 항목의 순서는 전혀 의미가 없다.</p>
<h3>키(key) 와 키값(value)</h3>
<p>앞서 살펴보았듯 사전자료형의 항목들은 콜론(<code>:</code>)으로 구분된 두 개의 값들의 쌍으로 이루어진다.
왼쪽에 있는 값을 키(key), 오른쪽에 위치하는 값은 키값(value)라 부른다. </p>
<p>예를 들어 <code>city_temperature</code>에 사용된
키들은 <code>Pyeongtaek</code>, <code>Suwon</code>, <code>Jeju</code> 등이고 각 키들에 대응하는 키값은 각각 22, 18, 25이다. 
키에 해당하는
키값을 확인하고자 하면 아래와 같이 명령하면 된다.</p>
<p><code>python
city_temperature['Pyongtaek']</code></p>
<p><code>python
city_temperature['Jeju']</code></p>
<h4>키만 모아 놓은 리스트</h4>
<p>사전에 사용된 키들만 따로 모아놓은 리스트를 만들어주는 사전 자료형 메소드가 있다.</p>
<p><code>python
key_list = city_temperature.keys()
key_list</code></p>
<p><strong>주의:</strong> 도시명들의 순서 전혀 중요하지 않다.</p>
<h4>키값만 모아 놓은 리스트</h4>
<p>사전에 사용된 키값들만 따로 모아놓은 리스트를 만들어주는 사전 자료형 메소드가 있다.</p>
<p><code>python
value_list = city_temperature.values()
value_list</code></p>
<h4>각각의 항목을 리스트의 항목으로 묶는 방식</h4>
<p>사전에 사용된 항목들을 튜플로 묶어 리스트를 만들 수 있다.</p>
<p><code>python
item_list = city_temperature.items()
item_list</code></p>
<h3>사전 자료형 반복문</h3>
<p>사전자료형을 반복문에 활용할 수 있다.
이를 위해 <code>keys</code> 메소드를 사용한다.</p>
<p>예를 들어, 도시와 온도를
동시에 추출하여 모두 보여주고자 할 경우 아래와 같이 하면 된다.</p>
<p><code>python
for key in city_temperature.keys():
    print(key,"의 온도는", city_temperature[key], "도 이다.")</code></p>
<p>사실 <code>keys</code> 메소드를 굳이 사용하지 않아도 된다.</p>
<p><code>python
for key in city_temperature:
    print(key,"의 온도는", city_temperature[key], "도 이다.")</code></p>
<p>사전 자료형의 메소드는 그리 많지 않다.
특정 자료형의 메소드를 확인하고자 하면 <code>dir()</code> 함수를 활용한다.</p>
<p><code>python
dir(city_temperature)</code></p>
<p>주요 메소드들의 활용을 살펴보자.</p>
<ul>
<li><code>pop</code> 메소드: 키에 해당하는 항목을 삭제한다.</li>
</ul>
<p><code>python
city_temperature.pop("Suwon")
print(city_temperature)</code></p>
<p>키가 존재하지 않으면 오류('KeyError')가 발생한다.</p>
<p><code>python
city_temperature.pop("Suwon")
print(city_temperature)</code></p>
<p>특정 키의 존재여부를 확인하려면 <code>keys()</code> 메소드와 <code>in</code> 연산자를 활용한다.</p>
<p><code>python
"Suwon" in city_temperature.keys()</code></p>
<p><code>python
"Jeju" in city_temperature.keys()</code></p>
<p>아니면 단순히 <code>in</code> 연산자를 활용할 수도 있다.</p>
<p><code>python
"Suwon" in city_temperature</code></p>
<p><code>python
"Jeju" in city_temperature</code></p>
<ul>
<li><code>update</code> 메소드: 하나의 사전을 다른 자료형과 합칠 수 있다.</li>
</ul>
<p><code>python
other_city_temperature = {'Ansung': 21, 'Yongin': 23}
city_temperature.update(other_city_temperature)</code></p>
<p><code>python
city_temperature</code></p>
<ul>
<li><code>get</code> 메소드: 지정한 키(key)에 해당하는 키값(value)를 되돌려 준다.</li>
</ul>
<p><code>python
city_temperature.get('Ansung')</code></p>
<h3>선수이름과 기록 연동하기</h3>
<p>이제 선수이름과 기록을 연동하여 기록순으로 정렬하는 방법을 다루고자 하며, 
이를 위해 사전 자료형을 활용한다.</p>
<p>방식은 앞서 언급한 아래의
코드를 약간 수정하면 된다.</p>
<p>```python
result_f = open("data/scores_list.txt") </p>
<p>score_dict = dict()                        # 빈 사전 생성</p>
<h1>아래와 같이 선언해도 된다.</h1>
<h1>score_dict = {}</h1>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_dict[float(score)] = name   # 점수와 선수이름의 쌍을 사전에 추가
    except:
        continue</p>
<p>result_f.close() </p>
<p>print(score_dict)
```</p>
<p>이제 <code>score_dict</code>를 기록 기준으로 오름차순으로 정렬하면 된다.
하지만 사전 자료형에는 <code>sort()</code> 메소드가 없다.</p>
<p>대신에
<code>sorted()</code> 함수를 적용할 수 있다.
즉, <code>sorted()</code> 함수를 이용하여 기록을 정렬한 후에 그 순서대로 키값을 읽으면 된다.</p>
<p><code>python
sorted(score_dict.keys())</code></p>
<p>내림차순으로 정렬하려면 <code>reverse=True</code>라는 키워드 인자를 추가한다.</p>
<p><code>python
for each_record in sorted(score_dict.keys(), reverse=True):
    print(score_dict[each_record], each_record)</code></p>
<p>이제 코드를 정리하면 다음과 같다.</p>
<p>```python
result_f = open("data/scores_list.txt") </p>
<p>score_dict = dict()                        # 빈 사전 생성</p>
<h1>아래와 같이 선언해도 된다.</h1>
<h1>score_dict = {}</h1>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_dict[float(score)] = name   # 점수와 선수이름의 쌍을 사전에 추가
    except:
        continue</p>
<p>result_f.close() </p>
<p>score_keys = sorted(score_dict.keys(), reverse=True)</p>
<p>for key in score_keys:
    print("Name:", score_dict[key], ", Score:", key)
```</p>
<p>위 코드를 좀 더 수정하면 등수까지도 보여줄 수 있다.</p>
<p>```python
result_f = open("data/scores_list.txt") </p>
<p>score_dict = dict()                        # 빈 사전 생성</p>
<h1>아래와 같이 선언해도 된다.</h1>
<h1>score_dict = {}</h1>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_dict[float(score)] = name   # 점수와 선수이름의 쌍을 사전에 추가
    except:
        continue</p>
<p>result_f.close() </p>
<p>score_keys = sorted(score_dict.keys(), reverse=True)</p>
<p>count = 1
for key in score_keys:
    print(str(count)+"등은", score_dict[key], "이고, 점수는", key, "입니다.")
    count = count+1
```</p>
<h3>연습</h3>
<p>위 코드를 수정하여 3등까지만 출력되도록 하라.</p>
<p>힌트: <code>break</code> 활용</p>
<p>견본답안 1: <code>break</code> 명령문 활용</p>
<p>```python
result_f = open("data/scores_list.txt") </p>
<p>score_dict = dict()                        # 빈 사전 생성</p>
<h1>아래와 같이 선언해도 된다.</h1>
<h1>score_dict = {}</h1>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_dict[float(score)] = name   # 점수와 선수이름의 쌍을 사전에 추가
    except:
        continue</p>
<p>result_f.close() </p>
<p>score_keys = sorted(score_dict.keys(), reverse=True)</p>
<p>count = 1
for key in score_keys:
    print(str(count)+"등은", score_dict[key], "이고, 점수는", key, "입니다.")
    if count &lt; 3:
        count = count+1
    else:
        break
```</p>
<p>견본답안 2: 아래와 같이 <code>range()</code> 함수를 활용할 수도 있다.</p>
<p>```python
result_f = open("data/scores_list.txt") </p>
<p>score_dict = dict()                        # 빈 사전 생성</p>
<h1>아래와 같이 선언해도 된다.</h1>
<h1>score_dict = {}</h1>
<p>for line in result_f: 
    (name, score) = line.split()     <br />
    try:
        score_dict[float(score)] = name   # 점수와 선수이름의 쌍을 사전에 추가
    except:
        continue</p>
<p>result_f.close() </p>
<p>score_keys = sorted(score_dict.keys(), reverse=True)</p>
<p>for i in range(3):
    key = score_keys[i]
    print(str(i+1)+"등은", score_dict[key], "이고, 점수는", key, "입니다.")
```</p>
<h3>연습</h3>
<p>수영 선수의 1등 - 3등까지 보여주는 코드를 수정하여, 특정 값 이상의 점수를 획득한 선수의 이름과 점수를 보여주는 코드를
작성해보자.</p>
<p>견본답안:</p>
<p>```python
result_f = open('data/scores_list.txt')
score_dict = {}</p>
<p>for line in result_f:
  (name, score) = line.split()
  try:
    score_dict[float(score)] = name
  except:
    continue
result_f.close()
score_keys = sorted(score_dict.keys(), reverse = True)</p>
<p>n_input = float(input('기준이 되는 점수: '))
for key in score_keys:
  if key &gt;= n_input:
    print(score_dict[key])
```</p>
<h3>연습</h3>
<p>수영 점수의 기록에서 가장 높은 점수와 낮은 점수의 차를 구하는 코드를 작성하라</p>
<p>견본답안:</p>
<p>```python</p>
<h1>정렬된 코드 score_keys 가 있다면, <code>(score_keys[0] - score_keys[-1]</code> 로 구할 수도 있다.</h1>
<p>result_f = open('data/scores_list.txt')
score_dict = {}</p>
<p>for line in result_f:
  (name, score) = line.split()
  try:
    score_dict[float(score)] = name
  except:
    continue
result_f.close()</p>
<p>scores = score_dict.keys()
max_score = max(scores)
min_score = min(scores)
print('점수 차는', max_score - min_score)
```</p>