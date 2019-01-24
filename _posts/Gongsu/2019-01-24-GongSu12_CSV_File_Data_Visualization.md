---
layout: post
title: GongSu12_CSV_File_Data_Visualization
date: 2019-01-24 13:33:49 +0900
categories: Gongsu
---
<h1>CSV 파일 다루기와 데이터 시각화</h1>
<h4>수정 사항</h4>
<ul>
<li>좀 더 복잡한 csv 데이터 활용 예제 추가 필요</li>
</ul>
<h2>주요 내용</h2>
<p>데이터 분석을 위해 가장 기본적으로 할 수 있고, 해야 하는 일이 데이터 시각화이다. 
데이터를 시각화하는 것은 어렵지
않지만, 적합한 시각화를 만드는 일은 매우 어려우며,
많은 훈련과 직관이 요구된다.</p>
<p>여기서는 데이터를 탐색하여 얻어진 데이터를 시각화하는
기본적인 방법 네 가지를 배운다.</p>
<ul>
<li>선그래프</li>
<li>막대그래프</li>
<li>히스토그램</li>
<li>산점도</li>
</ul>
<h2>오늘이 주요 예제</h2>
<p>서울과 수도권의 1949년부터 2010년까지 인구증가율 데이터가 아래와 같다.</p>
<p>
<table
cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/Seoul_pop04.jpg" | relative_url }}"
style="width:360">
</td>
</tr>

</table>
</p>

<p>이제 위 파일을 읽어서 서울과 수도권의 인구증가율 추이를 아래 그림에서처럼 선그래프로 나타내 보자.</p>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/Seoul_pop05.png" | relative_url }}"
style="width:360">
</td>
</tr>

</table>
</p>

<h2>데이터 시각화 도구 소개: <code>matplotlib</code> 라이브러리</h2>
<p>데이터 시각화를 위한 도구 중에서 간단한 막대 그래프, 히스토그램, 선
그래프, 산점도를 쉽게 그릴 수 있는
많은 도구들을 포함한 라이브러리이다. 
이 라이브러리에 포함된 모듈 중에서 여기서는 <code>pyplot</code> 모듈에
포함된 가장 기본적인 몇 개의 도구들의 활용법을
간단한 예제를 배우고자 한다.</p>
<p><code>python
import matplotlib.pyplot as plt</code></p>
<p><code>python
%matplotlib inline</code></p>
<h2>선그래프</h2>
<p><code>data</code> 디렉토리의 <code>Seoul_pop1.csv</code> 파일에는 1949년부터 5년 간격으로 측정된 서울시 인구수를 담은
데이터가 
들어 있으며, 그 내용은 다음과 같다.</p>
<p><code>1949    1,437,670
1955    1,568,746
1960
2,445,402
1966    3,793,280
1970    5,525,262
1975    6,879,464
1980
8,350,616
1985    9,625,755
1990   10,603,250
1995   10,217,177
2000
9,853,972
2005    9,762,546
2010    9,631,482</code>
출처: 국가통계포털(kosis.kr)</p>
<h3>파일에서 데이터 목록 추출하기</h3>
<p>연도별 서울시 인구수의 연도별 변화추이를 간단한 선그래프를 이용하여 확인하려면,
먼저 x축에 사용될 년도
목록과 y축에 사용될 인구수 목록을 구해야 한다.</p>
<p>먼저 이전에 배운 기술을 활용하고, 이후에 보다 쉽게 활용하는 고급기술을 활용한다.
<strong>주의:</strong> 확장자가 csv인 파일은데이터가 쉼표(콤마)로 구분되어 정리되어 있는 파일을 의미한다.
csv는 Comma-Separated
Values의 줄임말이다. 
따라서, csv 파일을 읽어들인 후, 각 줄을 쉼표 기준으로 분리(split)하면 이전에 공백 기분으로 데이터를
쪼개는 방식과
동일한 결과를 얻을 수 있다. 즉, <code>split</code> 메소드의 인자로 여기서는 쉼표를 사용하면 된다.</p>
<p>```python
data_f = open("data/Seoul_pop1.csv")</p>
<h1>년도 리스트</h1>
<p>years = []</p>
<h1>인구수 리스트</h1>
<p>populations = []</p>
<p>for line in data_f: 
    (year, population) = line.split(',')     <br />
    years.append(int(year))
    populations.append(int(population))</p>
<p>data_f.close() 
```</p>
<p><code>python
print(years)</code></p>
<p><code>python
print(populations)</code></p>
<p>```python</p>
<h1>그래프를 그릴 도화지 준비하기</h1>
<p>fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)</p>
<h1>x축에 년도, y축에 인구수가 있는 선 그래프 만들기</h1>
<p>plt.plot(years, populations, color='green', marker='o', linestyle='solid')</p>
<h1>제목 더하기</h1>
<p>plt.title("Seoul Population Change")</p>
<h1>y축에 레이블 추가하기</h1>
<p>plt.ylabel("10Million")
plt.show()
```</p>
<h2>막대그래프</h2>
<p>동일한 데이터를 막대그래프를 이용하여 보여줄 수 있다.
그렇게 하면 년도별 미세한 차이를 보다 자세히 나타낼 수 있다.</p>
<p>```python</p>
<h1>그래프를 그릴 도화지 준비하기</h1>
<p>fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)</p>
<h1>막대그래프 그리기</h1>
<p>plt.bar(years, populations)</p>
<h1>제목 더하기</h1>
<p>plt.title("Seoul Population Change")</p>
<h1>y축에 레이블 추가하기</h1>
<p>plt.ylabel("10Million")
plt.show()
```</p>
<p>그런데 이렇게 하면 막대 그래프의 두께가 좀 좁아 보인다. 그리고
년도가 정확히 5년 단위로 쪼개진 것이 아니기에 막대들 사이의 간격이 불규칙해
보인다.
따라서 먼저 막대의 두께를 좀 조절해보자.</p>
<p><strong>힌트:</strong> <code>plt.bar()</code> 함수의 세 번째 인자는 막대들의 두께를 지정한다.</p>
<p>```python</p>
<h1>그래프를 그릴 도화지 준비하기</h1>
<p>fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)</p>
<h1>막대그래프 그리기, 막대 두께 조절</h1>
<p>plt.bar(years, populations, 2.5)</p>
<h1>제목 더하기</h1>
<p>plt.title("Seoul Population Change")</p>
<h1>y축에 레이블 추가하기</h1>
<p>plt.ylabel("10Million")
plt.show()
```</p>
<p>막대들의 간격이 완전히 규칙적으로 되지는 않았지만 이전 그래프와는 좀 다른 느낌을 준다. 
이와 같이 막대들의 두께 뿐만아니라, 간격, 색상
모두 조절할 수 있지만, 
여기서는 그럴 수 있다는 사실만 언급하고 넘어간다.</p>
<h3>예제</h3>
<p>대한민국이 하계 올림픽에서 가장 많은 메일을 획득한 상위 여섯 종목과 메달 숫자는 아래와 같다.</p>
<p>
<table
cellspacing="20">

<tr>
    <td>종목</td>
    <td>메달 수</td>
</tr>
<tr>
<td>Archery(양궁)</td>
    <td>39</td>
</tr>
<tr>
    <td>Badminton(배드민턴)</td>
<td>19</td>
</tr>
<tr>
    <td>Boxing(복싱)</td>
    <td>20</td>
</tr>
<tr>
<td>Judo(유도)</td>
    <td>43</td>
</tr>
<tr>
    <td>Taekwondo(태권도)</td>
<td>19</td>
</tr>
<tr>
    <td>Wrestling(레슬링)</td>
    <td>36</td>
</tr>
<caption align='bottom'>출처: 위키피디아</caption>
</table>
</p>

<p>이제 위 데이터를 막대 그래프로 시각화할 수 있다.</p>
<p>```python
sports = ['Archery', 'Badminton', 'Boxing', 'Jugdo', 'Taekwondo', 'Wrestling']
medals = [39, 19, 20, 43, 19, 36]</p>
<p>plt.bar(sports, medals)
plt.ylabel("Medals")
plt.title("Olympic Medals")
plt.show()
```</p>
<p>x축에 종목 이름 대신에 숫자를 넣을 수도 있지만 정확한 정보를 전달하지는 못한다.</p>
<p>```python
sports = ['Archery', 'Badminton', 'Boxing', 'Jugdo', 'Taekwondo', 'Wrestling']
medals = [39, 19, 20, 43, 19, 36]</p>
<p>plt.bar(range(6), medals)
plt.ylabel("Medals")
plt.title("Olympic Medals")
plt.show()
```</p>
<p>따라서 x축에 6개의 막대가 필요하고 각각의 막대에 레이블 형식으로 종목 이름을 지정해야 한다.</p>
<p>```python
sports = ['Archery', 'Badminton', 'Boxing', 'Jugdo', 'Taekwondo', 'Wrestling']
medals = [39, 19, 20, 43, 19, 36]</p>
<p>xs = range(6)
plt.bar(xs, medals)</p>
<p>plt.xticks(xs, sports)</p>
<p>plt.ylabel("Medals")
plt.title("Olympic Medals")
plt.show()
```</p>
<p>여전히 그래프가 좀 어색하다. 막대들이 좀 두껍다. 이럴 때는 x축에 사용되는 점들의 간격을 좀 벌리는 게 좋다.</p>
<p>```python
sports = ['Archery', 'Badminton', 'Boxing', 'Jugdo', 'Taekwondo', 'Wrestling']
medals = [39, 19, 20, 43, 19, 36]</p>
<p>xs = range(0, 12, 2)
plt.bar(xs, medals)</p>
<p>plt.xticks(xs, sports)</p>
<p>plt.ylabel("Medals")
plt.title("Olympic Medals")
plt.show()
```</p>
<p>이번에는 막대 두께가 좁아 보인다. 그래서 좀 넓히는 게 좋다.</p>
<p>```python
sports = ['Archery', 'Badminton', 'Boxing', 'Jugdo', 'Taekwondo', 'Wrestling']
medals = [39, 19, 20, 43, 19, 36]</p>
<p>xs = range(0, 12, 2)
plt.bar(xs, medals, 1.2)</p>
<p>plt.xticks(xs, sports)</p>
<p>plt.ylabel("Medals")
plt.title("Olympic Medals")
plt.show()
```</p>
<p>지금까지 살펴보았듯이 적합한 시각화는 경우에 따라 상당히 많은 노력을 요구하기도 한다.
여기서는 <code>matplotlib.pyplot</code> 라이브러리에
다양한 설정 옵션이 있다는 정도만 기억하면 좋겠다.</p>
<h2>히스토그램</h2>
<p>히스토 그램은 막대그래프와 비슷하다. 다만 막대 사이에 공간이 없다. 
따라서 연속적인 구간으로 구분된 범위에 포함된 숫자들의
도수를 나타내는 데에 효과적이다.</p>
<p>아래 예제는 임의로 생성된 1000개의 실수들의 분포를 보여주는 히스토그램이다. </p>
<p><strong>주의:</strong> 
<em> numpy 모듈의 randn 함수는
표준정규분포를 따르도록 실수들을 임의로 생성한다. 
</em> 표준정규분포: 데이터들의 평균이 0이고 표준편차가 1인 정규분포
* 여기서는
표준정규분포가 확률과 통계 분야에서 매우 중요한 역할을 수행한다는 정도만 알고 넘어간다.</p>
<p>```python
import numpy as np</p>
<p>gaussian_numbers = np.random.randn(1000)
plt.hist(gaussian_numbers, bins=10)</p>
<p>plt.title("Gaussian Histogram")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
```</p>
<h2>산점도</h2>
<p>두 변수 간의 연관관계를 보여 주는 데에 매우 적합한 그래프이다. </p>
<p>예를 들어, 카카오톡에 등록된 친구 수와 하룻동안의 스마트폰
사용시간 사이의 연관성을 보여주는 데이터가 아래와 같이 주어졌다고 하자.</p>
<p><strong>주의:</strong> 아래 데이터는 강의를 위해 임의로 조작되었으며, 어떠한
근거도 갖지 않는다.</p>
<p><code>python
num_friends = [41,  26,  90,  50,  18,  124, 152, 88,  72,  51]
phone_time =  [4.1, 3.3, 5.7, 4.2, 3.2, 6.4, 6.0, 5.1, 6.2, 3.7]</code></p>
<p><code>python
plt.scatter(num_friends, phone_time)
plt.show()</code></p>
<p>위 산점도를 보면 카카오톡에 등록된 친구 수가 많을 수록 스마트폰 사용시간이 증가하는 경향을 한 눈에 확인할 수 있다.
물론, 이는 주어진
(조작된) 데이터에 근거한 정보이다.</p>
<h2>오늘의 주요 예제 해결</h2>
<p>서울과 수도권의 1949년부터 2010년까지 인구증가율 데이터가 아래와 같다.</p>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/Seoul_pop04.jpg" | relative_url }}">
</td>
</tr>

</table>
</p>

<p>위 도표의 데이터는 <code>'Seoul_pop2.csv'</code> 파일에 아래와 같이 저장되어 있다.</p>
<hr />
<p>```</p>
<h3>1949년부터 2010년 사이의</h3>
<p>서울과 수도권 인구 증가율(%)</p>
<h1>구간,서울,수도권</h1>
<p>1949-1955,9.12,-5.83
1955-1960,55.88,32.22
1960-1966,55.12,32.76
1966-1970,45.66,28.76
1970-1975,24.51,22.93
1975-1980,21.38,21.69
1980-1985,15.27,18.99
1985-1990,10.15,17.53
1990-1995,-3.64,8.54
1995-2000,-3.55,5.45
2000-2005,-0.93,6.41
2005-2010,-1.34,3.71
```</p>
<hr />
<p>이제 위 파일을 읽어서 서울과 수도권의 인구증가율 추이를 선그래프로 나타내 보자.</p>
<h3>단계 1: csv 파일 읽어드리기</h3>
<p>확장자가 csv인 파일은 데이터를 저장하기 위해 주로 사용한다. </p>
<p>csv 파일을 읽어드리는 방법은
<code>csv</code> 모듈의 <code>reader()</code> 함수를 활용하면 매우 쉽다.</p>
<p><code>python
import csv</code></p>
<p><code>python
with open('data/Seoul_pop2.csv') as f:
    reader = csv.reader(f)
    for row in reader:
        if len(row) == 0 or row[0][0] == '#':
            continue
        else:
            print(row)</code></p>
<p><code>csv.reader</code> 함수의 리턴값은 csv 파일의 내용을 줄 별로 리스트로 저장한 특별한 자료형이다.
여기서는 위 예제처럼 사용하는 정도만
기억하면 된다.</p>
<p><code>python
type(reader)</code></p>
<p><strong>주의:</strong> 위 코드의 5번 줄을 아래와 같이 하면 오류 발생
<code>if row[0][0] == '#' or len(row) == 0:</code></p>
<p>이유: <code>'A or B'</code>의 경우 먼저 <code>A</code>의 참, 거짓을 먼저 판단한 후에, A참이면 참으로 처리하고 끝낸다.
그리고 A가 거짓이면
그제서야 B의 참, 거짓을 확인한다. 
그래서 A의 참, 거짓을 판단하면서 오류가 발생하면 바로 멈추게 된다.</p>
<p>위 예제의 경우
<code>row[0][0]</code>이 셋째줄의 인덱스 오류가 발생하게 되서 코드 전체가 멈추게 된다.</p>
<p><strong>주의:</strong> </p>
<p>다음 형식은
<code>python
with open('Seoul_pop2.csv') as f:
    코드</code> </p>
<p>아래 코드에
대응한다.
<code>python
f = open('Seoul_pop2.csv')
코드
f.close()</code></p>
<h3>단계 2: 선그래프에 사용될 데이터 정리하기</h3>
<p>```python
year_intervals = []
Seoul_pop = []
Capital_region_pop = []</p>
<p>with open('data/Seoul_pop2.csv') as f:
    reader = csv.reader(f)
    for row in reader:
        if len(row) == 0 or row[0][0] == '#':
            continue
        else:
            year_intervals.append(row[0])
            Seoul_pop.append(float(row[1]))
            Capital_region_pop.append(float(row[2]))
```</p>
<p><code>python
print(year_intervals)</code></p>
<p><code>python
print(Seoul_pop)</code></p>
<p><code>python
print(Capital_region_pop)</code></p>
<h3>단계 3: 그래프 그리기</h3>
<p>```python</p>
<h1>그래프를 그릴 도화지 준비하기</h1>
<p>fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)</p>
<h1>x축에 년도, y축에 인구수가 있는 선 그래프 만들기</h1>
<p>plt.plot(range(12), Seoul_pop, color='green', marker='o', linestyle='solid', \
         label='Seoul')
plt.plot(range(12), Capital_region_pop, color='red', marker='o', linestyle='solid', \
         label='Capital Region')</p>
<p>plt.xticks(range(12), year_intervals, rotation=45)</p>
<p>plt.title("Population Change")
plt.ylabel("Percentage")</p>
<p>plt.legend()
plt.show()
```</p>
<h2>연습문제</h2>
<h3>연습</h3>
<p>원그래프(파이 차트)는 각 구성 요소가 전체에서 차지하는 비중을 한 눈에 알아볼 수 있도록 도와주는 그래프이다.
<code>matplotlib</code> 라이브러리를 이용하여 원그래프를 그리기 위해서는 <code>pie</code> 함수를 활용하면 된다. </p>
<p>아래 코드는 한 학년 <code>A</code>,
<code>B</code>, <code>C</code>, <code>D</code> 네 반 학생들의 숫자를 해당 학년 전체 학생들에서 차지하는 비중을 원그래프로
보여준다.</p>
<p>```python
classes = ['A', 'B', 'C', 'D']
slices = [30, 50, 20, 40]                # 하나의 조각을 의미하는 slice 변수이름 활용</p>
<p>colors = ['Blue', 'Green', 'Red', 'Yellow']
explode = [0.0, 0.0, 0.1, 0.0]          # 특정 조각을 돌출시키고자 할 때 사용</p>
<p>plt.pie(slices, explode = explode, autopct = '%2.3f%%', shadow = True, \
        colors = colors, labels = classes)</p>
<p>plt.show()
```</p>
<p>코드 설명:</p>
<ul>
<li><code>classes</code>: 각 학급의 이름의 리스트</li>
<li><code>slices</code>: 각 학급의 학생 수의 리스트. </li>
<li>
<p><code>labels</code>: 각
학급에 해당하는 조각을 지정하는 색의 리스트 </p>
</li>
<li>
<p><code>explode</code>: 특정 조각을 돌출시켜 강조하기 위한 값 지정</p>
</li>
<li><code>autopct</code>: 각
조각의 전체 대비 백분율 표시방법 지정 (부동소수점 서식 활용)</li>
<li><code>shadow</code>: 원 그래프에 그림자 추가 여부 확인</li>
</ul>