---
layout: post
title: GongSu10_Tuples
date: 2019-01-24 13:33:48 +0900
categories: Gongsu
---
<h1>튜플 활용</h1>
<h4>수정 사항</h4>
<ul>
<li>보다 실전적인 예제 활용 가능</li>
</ul>
<h2>주요 내용</h2>
<p>파이썬에 내장되어 있는 컬렉션 자료형 중에서 튜플에 대해 알아 본다.</p>
<p><strong>튜플(tuples)</strong>: 리스트와 비슷. 하지만 수정
불가능(immutable).
* 사용 형태: 소괄호 사용
<code>even_numbers_tuple = (2, 4, 6, 8, 10)
todays_datatypes_tuple = ('list', 'tuple', 'dictionary')</code></p>
<ul>
<li>
<p>특징: 임의의 자료형 값들을
섞어서 항목으로 사용 가능
<code>mixed_tuple = (1, 'abs', [2.1, 4.5])</code></p>
</li>
<li>
<p>인덱스 또는 슬라이싱을 이용하여
각각의 항목에 또는 여러 개의 항목에 대한 
    정보를 활용할 수 있다. 사용법은 문자열의 경우와 동일.</p>
</li>
<li>
<p>튜플은 수정 불가능하다. 즉,
불변 자료형이다. </p>
</li>
<li>
<p>튜플 자료형은 불변 자료형이라서 메소드가 별로 없다. 
    많이 사용되는 두 개이다.</p>
<ul>
<li><code>count()</code>:
튜플에 포함된 특정 항목이 몇 번 나타나는지 세어 줌.</li>
<li><code>index()</code>: 특정 항목의 인덱스가 몇 번인지 확인해 줌.</li>
</ul>
</li>
</ul>
<h2>오늘의 주요 예제</h2>
<p><code>Byun_Sato.txt</code> 파일에는 변사또 학생의 개인 신상정보가 아래와 같이 들어 있다. </p>
<p>```</p>
<h1>학생들의</h1>
<p>중요 개인정보이며, 배포 금지함.</p>
<p>Name:   Byun Sato
Date of Birth:  95.4.28
Email:
SatoByun@hknu.ac.kr
Department: Computer
Student ID: 201700251003 
```</p>
<p>파일의 내용을
읽어서 아래와 같은 형식으로 리턴하는 함수를 구현하고자 한다.</p>
<p><code>{'Date of Birth': (1995, 4, 28),
'Department': 'Computer',
 'Email': 'SatoByun@hknu.ac.kr',
 'Name': 'Byun Sato',
'Student ID': '201700251003'}</code></p>
<h2>튜플의 기본 활용</h2>
<p>오늘의 주요 예제의 문제를 해결하려면, 문자열과 사전 자료형과 더불어 튜플에 대해 
알아 보아야 한다.
튜플은 순서쌍이라고도 불리며, 리스트와
99% 비슷한 용도를 가진다.
리스트와 다른 점은 튜플이 불변 자료형이라는 것 뿐이다.
물론, 튜플이 불변 자료형이기에 리스트 자료형이 갖고
있는 다양한 메소드를 갖지 못한다.</p>
<p><code>python
t = (3, 50, "yellow")
print(t)</code></p>
<p><code>python
type(t)</code></p>
<p><code>python
l = [3, 50, "yellow"]
l</code></p>
<p><code>python
type(l)</code></p>
<p>튜플의 경우 인덱싱과 슬라이싱은 문자열 또는 리스트에서의 활용과 100% 동일</p>
<p><code>python
t[1]</code></p>
<p><code>python
t[-1]</code></p>
<p><code>python
t[:2]</code></p>
<p><code>python
t[: : 2]</code></p>
<p>튜플을 사용할 때 소괄호를 생략해도 된다. 하지만 기본적으로 소괄호를 사용한다.</p>
<p><code>python
a = 10, 20, 30
type(a)</code></p>
<p><code>python
print(a)</code></p>
<h4>튜플은 불변 자료형이다.</h4>
<p>리스트와는 달리 인덱싱을 사용하여 튜플 특정 원소의 값을 변경할 수 없다.</p>
<p><code>python
t[1] = 5</code></p>
<h4>튜플 자료형 활용 예제 1</h4>
<ul>
<li>절대로 변경되지 않거나 변경되어서는 안되는 값들을 저장할 때 사용<ul>
<li>예를 들어, 생년월일,
학과 전공 등등.</li>
</ul>
</li>
</ul>
<p><code>python
So_Ritgun_dob = (1996, 12, 16)</code></p>
<h4>튜플 자료형 활용 예제 2</h4>
<ul>
<li>여러 개의 변수들에 여러 개의 값들을 한 줄에 동시에 할당하기 위해 사용</li>
</ul>
<p><code>python
a, b = 1, 2</code></p>
<p><code>python
a</code></p>
<p>튜플을 이용하면 두 변수에 할당된 값을 스왑(swap)하는 것이 매우 간단하다.</p>
<p><code>python
a, b = b, a</code></p>
<p><code>python
a</code></p>
<p><strong>주의:</strong> <code>C, C#, Java</code> 등에서 앞서의 예제와 같은 스왑기능을 구현하려면 포인터를 사용해야 한다.</p>
<h4>튜플 자료형 활용 예제 3</h4>
<ul>
<li>여러 개의 값들을 리턴하는 함수를 정의할 때 사용</li>
</ul>
<p>함수의 리턴값은 무조건 하나이다. 
예를 들어,
2를 입력 받아서 2의 제곱과 2의 세제곱을 동시에 리턴하는 함수는 정의할 수 없다.
하지만, 두 개의 값을 튜플로 묶어서 하나의 값으로 리턴할
수는 있다.</p>
<p>아래 함수는 입력받은 값의 제곱과 세제곱을 튜플로 묶어서 리턴한다.</p>
<p><strong>주의:</strong> 소괄호 기호는 생략이 가능하다는 것에
주의한다.</p>
<p><code>python
def f(x):
    return x**2, x**3</code></p>
<p>이제 아래와 같이 리턴값 각각의 항목에 변수를 할당하여 사용할 수 있다.</p>
<p><code>python
a, b = f(2)</code></p>
<p><code>python
a</code></p>
<h3>불변성(immutability)대 가변성(mutability)</h3>
<p>튜플과 문자열은 불변성 자료형이다.
즉, 이미 생성된 값들을 절대 수정할
수 없다.</p>
<p>예를 들어, 아래와 같이 튜플의 특정 항목을 대체하려거나
문자열의 일부를 다른 문자열로 대체하려는 시도는 오류를 발생시킨다.</p>
<p><code>python
a = ('Hello', 'World')
a[0] = 'Hi'</code></p>
<p><code>python
a = ('Hello', 'World')
a[1][0] = 'w'</code></p>
<p>만약에 튜플의 특정 항목 또는 문자열의 일부를 다른 문자열로 대체하고 싶다면, 
기존의 값들을 이용하여 새로운 튜플과 문자열을 생성해야 한다.</p>
<p><code>python
b = ('Hi', a[1])
b</code></p>
<p><code>python
b = ('Hi',) + (a[1],)
b</code></p>
<p><strong>주의:</strong> 길이가 1인 튜플에는 반드시 콤마를 사용해야 한다.
그렇지 않으면 튜플로 간주하지 않는다.</p>
<p><code>python
a = (a[0], 'w' + a[1][1:])
a</code></p>
<p>비유해서 설명하면, 아파트가 문자열 또는 튜플 자료형이라면 아파트를 수선할 수는 없고, 대신에 기존 아파트를 부신 다음에 새로 원하는 대로
지어야 함을 의미한다.</p>
<h2>튜플과 사전 활용 예제</h2>
<p>튜플과 사전을 함께 활용하면 학생들의 신상정보 등을 저장할 때 유용하다. 
예를 들어 '학생이름', '학번',
'생일' 등을 키로 사용하고, 키값으로는 진짜 나이, 학번, 생일 등을 저장할 수 있다.</p>
<ul>
<li>아래 코드는 특정 디렉토리에 저장된 학생들의 신상정보 파일을 모두 읽어들여서 활용하는 프로그램을 위한 함수들을 구현하고 있다.</li>
</ul>
<p><code>python
import glob
import string</code></p>
<p>먼저 <code>std_record_list</code> 함수는 지정된 디렉토리에 포함된 모든 학생들의 신상정보 파일명을 읽어드린다.</p>
<p><code>glob</code> 모듈의
<code>glob</code> 함수의 활용을 기억해 두면 좋다.</p>
<p>```python
def std_record_list(dir):
    """
    지정된 디렉토리에 포함된 모든 학생들의 신상정보 파일명을 읽어드림.</p>
<pre><code>입력값:
    디렉토리 이름 - 문자열 이용.
리턴값:
    학생들 신상정보 파일이름으로 구성된 리스트
"""
files = glob.glob(dir + '/*.txt')

return sorted(files)
</code></pre>
<p>```</p>
<p>위 함수를 활용하여, 'data/Students_Record' 디렉토리에 있는 모든 파일들의 이름을 확인할 수 있다.</p>
<p><strong>주의:</strong>
<code>glob()</code> 함수의 리턴값은 해당 디렉토리에 저장된 파일을 임의의 순서대로 확인하여 리스트를 만든다. 따라서, 이름 순서대로 리스트를 얻기
위해서 <code>sorted()</code> 함수를 활용하였다.</p>
<p><code>python
filenames = std_record_list('data/Students_Records/')
filenames</code></p>
<ul>
<li><code>date_of_birth</code> 함수는 생년월일 정보를 (년, 월, 일) 형식으로 변경하는 함수이다.</li>
</ul>
<p>```python
def date_of_birth(date_birth):
    '''
    생년월일 정보를 (년, 월, 일) 형식으로 변경하는 함수</p>
<pre><code>입력값:
    * 생년월일 정보 문자열 - "년.월.일"
리턴값:
    * 생년월일 정보 튜플 - (년, 월, 일)
'''
year, month, day = date_birth.split('.')

year = int(year) + 1900
month = int(month)
day = int(day)

ymd = (year, month, day)

return ymd
</code></pre>
<p>```</p>
<p><code>python
date_of_birth("2017.09.27")</code></p>
<ul>
<li><code>record_getter</code> 함수는 지정된 학생의 신상정보를 리스트에 담아 리턴한다. 
    리스트의 각각의 항목은 항목명과 항목내용으로
구성된 튜플들이다.</li>
</ul>
<p>```python
def record_getter(filename):
    '''
    지정된 학생의 신상정보를 리스트로 출력함.
    각 항목은 항목명과 내용의 튜플로 구성됨</p>
<pre><code>입력값:
    파일명을 가리키는 경로
리턴값:
    학생들의 신상정보의 각 항목을 담은 리스트
'''
std_data = []
a_file = open(filename, u"r")

for line in a_file.readlines():
    if line[0] == '#' or line in string.whitespace:
        continue
    else:
        item, value = line.split(':')
        item = item.strip()
        value = value.strip()

        if item.strip() == 'Date of Birth':
            value = date_of_birth(value)
        std_data.append((item, value))

return std_data
</code></pre>
<p>```</p>
<p>예를 들어 <code>Byun_Sato</code> 학생의 신상정보가 아래와 같이 확인된다.</p>
<p><code>python
record_getter('data/Students_Records/Byun_Sato.txt')</code></p>
<ul>
<li>이제 위 코드를 한 군데 모아서 아래와 같이 각각의 학생의 정보를 얻을 수 있다.
    아래 코드는 세 번째 학생의 정보를 확인한다.</li>
</ul>
<p>```python
filenames = std_record_list('data/Students_Records/')</p>
<p>So_data = record_getter(filenames[2])
So_data
```</p>
<h4>정보를 확인할 때는 튜플보다 사전이 효율적이다.</h4>
<p>위 코드는 학생들의 신상정보의 정리해서 잘 보여준다. 
하지만 소속학과, 생년월일 등에 대한 구체적인 정보를 추출하는 일은 좀 번거롭다.
예를 들어, <code>So Ritgun</code> 학생의 소속학과를 확인하려면 다음과 같이 해야 한다.</p>
<p><code>python
for i in range( len(So_data) ):
    if So_data[i][0] == 'Department':
        print("전공은", So_data[i][1], "입니다.")
        break</code></p>
<p>그런데 사전을 이용하면 보다 쉽게 할 수 있다. </p>
<p>먼저 <code>So_data</code>를 사전으로 만들어보자.</p>
<p>```python
So_data_dict = {}
for i in range( len(So_data) ):
    So_data_dict[So_data[i][0]] = So_data[i][1]</p>
<p>So_data_dict
```</p>
<p>그러면 소속학과 또는 좋아하는 색깔 등을 확인하는 일이 매우 쉽다.</p>
<p><code>python
So_data_dict['Department']</code></p>
<p><code>python
So_data_dict['Email']</code></p>
<p><strong>주의:</strong> 하나의 항목의 키값을 변경하거나 새로운 (키, 값) 항목을 추가하려면 아래 형식을 이용한다.
<code>사전이름[키] = 키값</code>
반면에 여러 항목을 사전에 추가하려면 <code>update()</code> 메소드를 이용한다.</p>
<p>```python
So_data_dict['Residence'] = 'Anseong'</p>
<p>So_data_dict
```</p>
<p><strong>주의:</strong> 순서는 전혀 중요하지 않다.</p>
<p>```python
So_data_dict.update({'Grade': '2', 'Semester': '2'})</p>
<p>So_data_dict
```</p>
<p>항목을 삭제하려면 <code>del</code> 함수 또는 <code>pop()</code> 메소드를 사용한다.
존재하지 않는 <code>key</code>를 이용할 경우 어떤 일이 일어나는지 확인하라.</p>
<p>```python
del So_data_dict['Residence']</p>
<p>So_data_dict
```</p>
<p><code>python
print(So_data_dict.pop('Grade'))</code></p>
<p><code>python
print(So_data_dict.pop('Semester'))</code></p>
<p><code>python
So_data_dict</code></p>
<p><code>python
So_data_dict['Date of Birth']</code></p>
<p><code>python
So_data_dict['Name']</code></p>
<ul>
<li>이제 사전 자료형을 이용하여 <code>record_getter</code> 함수를 수정하자.</li>
</ul>
<p>```python
def record_getter(filename):
    '''
    지정된 학생의 신상정보를 리스트로 출력함.
    각 항목은 항목명과 내용의 튜플로 구성됨</p>
<pre><code>입력값:
    파일명을 가리키는 경로
리턴값:
    학생들의 신상정보의 각 항목을 담은 사전 자료형
'''
std_data = {}
a_file = open(filename, u"r")

for line in a_file.readlines():
    if line[0] == '#' or line in string.whitespace:
        continue
    else:
        item, value = line.split(':')
        item = item.strip()
        value = value.strip()

        if item.strip() == 'Date of Birth':
            value = date_of_birth(value)
        std_data[item] = value

return std_data
</code></pre>
<p>```</p>
<p><code>python
record_getter('data/Students_Records/Byun_Sato.txt')</code></p>
<ul>
<li>아래 코드에서 <code>all_records</code> 변수에는 모든 학생의 신상정보를 리스트로 담고 있다.
각 항목은 각 학생의 신상정보를 담은 사전
자료형이다.</li>
</ul>
<p>```python
filenames = std_record_list('data/Students_Records/')</p>
<p>all_records = []
for file in filenames:
    data = record_getter(file)
    all_records.append(data)</p>
<p>all_records
```</p>
<p>이런 식으로 예를 들어 두 번째 학생이 소속학과를 다음처럼 확인 가능하다.</p>
<p><code>python
all_records[1]['Department']</code></p>
<p>또는 첫 번째 학생의 이름을 확인한다.</p>
<p><code>python
all_records[0]['Name']</code></p>
<h2>연습문제</h2>
<h3>연습</h3>
<p>첫 번째 학생의 신상정보를 아래 형식으로 출력하는 코드를 작성하라.
<code>제 이름은 ___이며, 나이는 ___살 입니다.</code></p>
<h3>연습</h3>
<p>전공이 <code>Computer</code>인 학생 이름의 리스트를 구하라.</p>
<h3>연습</h3>
<p>전공을 인자로 입력하면 해당 전공 학생들의 이름으로 구성된 리스트를 리턴하는 함수 <code>faculty_member</code> 함수를 구현하라.</p>