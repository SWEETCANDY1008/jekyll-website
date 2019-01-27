---
layout: post
title: GongSu08_Files_and_Lists
date: 2019-01-26 22:34:53 +0900
categories: qwerty
---
<h1>텍스트 파일 불러오기와 리스트 활용</h1>
<h4>수정 사항</h4>
<ul>
<li>적절한 연습문제 추가 필요</li>
</ul>
<p>처리해야 할 데이터 양이 많아지면 파일에 저장한 후에 필요한 경우 재활용해야 한다.
또한 개별 데이터를 따로따로 처리하기 보다는 하나의 데이터로 묶어서 처리할 수 있어야 한다.
많은 데이처를 하나의 데이터로 묶어서 처리하는 다양한 자료형이 제공되며 여기서는 파이썬의 리스트 자료형의 활용을 알아본다.</p>
<h2>주요 내용</h2>
<p>텍스트 파일의 내용을 읽어드리는 방법과 파이썬에 내장되어 있는 컬렉션 자료형 중의 하나인 리스트(list)를 
활용하는 방법에 대해 알아본다.</p>
<p><strong>리스트(lists)</strong>: 파이썬에서 사용할 수 있는 <strong>임의의</strong> 값들을 모아서 
하나의 값으로 취급하는 자료형</p>
<ul>
<li>
<p>사용 형태: 대괄호 사용
<blockquote>
even_numbers_list = [2, 4, 6, 8, 10]
todays_datatypes_list = ['list', 'tuple', 'dictionary']
</blockquote></p>
</li>
<li>
<p>특징: 임의의 자료형 값들을 섞어서 항목으로 사용 가능
<blockquote>
mixed_list = [1, 'abs', [2.1, 4.5]]
</blockquote></p>
</li>
<li>
<p>인덱스 또는 슬라이싱을 이용하여 각각의 항목에 또는 여러 개의 항목에 대한 
    정보를 활용할 수 있다. 사용법은 문자열의 경우와 동일.</p>
</li>
<li>
<p>리스트는 수정 가능하다. 즉, 가변 자료형이다. </p>
</li>
<li>
<p>리스트와 관련되어 많이 사용되는 메소드는 다음과 같다.</p>
<ul>
<li><code>append()</code>: 기존의 리스트 끝에 항목 추가</li>
<li><code>extend()</code>: 두 개의 리스트 이어붙이기</li>
<li><code>insert()</code>: 기존의 리스트 중간에 항목 삽입</li>
<li><code>pop()</code>, <code>remove()</code>, <code>del</code>: 항목 삭제</li>
<li><code>count()</code>: 리스트에 포함된 특정 항목이 몇 번 나타나는지 세어 줌.</li>
<li><code>index()</code>: 특정 항목의 인덱스가 몇 번인지 확인해 줌.</li>
</ul>
</li>
</ul>
<h2>오늘의 주요 예제</h2>
<p><code>data</code> 디렉토리에 위치한
<code>scores_list.txt</code> 파일은 선수 여덟 명의 점수를 담고 있다.</p>
<p><blockquote>txt
Name    Score
player1 21.09 
player2 20.32 
player3 21.81 
player4 22.97 
player5 23.29 
player6 22.09 
player7 21.20 
player8 22.16
</blockquote></p>
<p>목표: 위 파일로부터 1~3등 선수의 점수를 아래와 같이 확인하기
<blockquote>txt
1등 23.29 
2등 22.97 
3등 22.16 
</blockquote></p>
<p><strong>참조:</strong> Head First Programming(한빛미디어) 4장</p>
<h2>준비 사항</h2>
<ul>
<li>
<p>파일에 저장된 데이터를 불러오거나 파일에 데이터를 저장하는 방법에 대한 설명은 
    <a href="https://github.com/liganega/bpp/blob/master/notes/04a-ThinkPython-Files.ipynb">여기</a>를 
    참조한다.</p>
</li>
<li>
<p>리스트의 정의와 기초적인 활용법에 대한 자세한 설명은 
    <a href="https://github.com/liganega/bpp/blob/master/notes/04b-ThinkPython-Lists.ipynb">여기</a>를
    참조한다.</p>
</li>
</ul>
<h2>파일에 저장된 데이터 불러오기</h2>
<p>즉, 첫째 줄은 선수이름(Name)과 점수(Score)의 항목이 표시되어 있으며
둘째 줄부터 선수이름과 점수가 작성되어 있다.</p>
<p>위 파일의 내용을 아래와 같이 파이썬 코드로 확인할 수 있다.</p>
<blockquote>
result_f = open("data/scores_list.txt")   # 파일 열기

for line in result_f:                                  # 각 줄 내용 출력하기
    print(line)

result_f.close()                                       # 파일 닫기
</blockquote>

<pre><code>Name    Score

player1 21.09

player2 20.32

player3 21.81

player4 22.97

player5 23.29

player6 22.09

player7 21.20

player8 22.16
</code></pre>
<h4>주의사항</h4>
<p>줄 사이에 새로운 줄이 포함된 이유는 파일을 작성하면서 줄바꾸기를 할 때 사용하는 엔터에 의해 줄바꾸기 기호(<code>\n</code>)가
각 줄의 맨 끝에 포함되기 때문이다.
따라서 줄바꾸기를 한 번 더 하는 것을 방지하기 위해서 <code>strip</code> 메소드를 활용하는 것이 좋다.</p>
<blockquote>
result_f = open("data/scores_list.txt")

for line in result_f: 
    print(line.strip())              # strip 메소드 활용하기

result_f.close() 
</blockquote>

<pre><code>Name    Score
player1 21.09
player2 20.32
player3 21.81
player4 22.97
player5 23.29
player6 22.09
player7 21.20
player8 22.16
</code></pre>
<h4>주의사항</h4>
<ul>
<li><code>strip</code> 메소드를 활용하여 데이터를 보다 깔끔하게 정리하는 것은 좋은 버릇이다.</li>
<li>하지만 반드시 필요한 것은 아닐 수도 있기 때문에 사용여부를 판단해야 한다.</li>
<li>경우에 따라 <code>strip</code> 메소드를 사용해도 되고 그렇지 않아도 된다.</li>
</ul>
<p>이제 1등 점수를 확인하고자 한다. 이때 이전에 배운 예외처리 기술을 활용해보자.</p>
<h3>예제</h3>
<p>아래 예제는 없는 파일을 <code>open</code> 함수로 열려고 할 때 발생하는 문제를 처리하는 기술이다.</p>
<p>먼저 없는 파일을 열려고 할 때 오류가 발생함을 확인하자.</p>
<blockquote>
file = open('data/no_file.txt')
</blockquote>

<pre><code>---------------------------------------------------------------------------

FileNotFoundError                         Traceback (most recent call last)

&lt;ipython-input-3-b7955c7e557c&gt; in &lt;module&gt;()
----&gt; 1 file = open('data/no_file.txt')


FileNotFoundError: [Errno 2] No such file or directory: 'data/no_file.txt'
</code></pre>
<p>이런 경우에는 열고자 하는 파일이 존재하지 않는다는 정보를 전달하는 것이 단순히 오류가 발생하면서 실행이 멈추는 것보다 훨씬 유익하다.</p>
<blockquote>
try:
    file = open('data/no_file.txt')
except:
    print("열고자 하는 파일이 존재하지 않습니다.")
</blockquote>

<pre><code>열고자 하는 파일이 존재하지 않습니다.
</code></pre>
<h2>1, 2, 3등 점수 확인하기</h2>
<h3>1등 점수 확인하기</h3>
<p>앞서 파일 내용을 확인해 보았듯 각 줄마다 선수이름과 점수가 공백을 사이로 두고 각 줄에 적혀 있다.
따라서 아래와 같이 <code>split</code> 메소드를 활용하여 각 줄을 쪼개어 두 번째 항목을 확인할 수 있다.</p>
<h4>주의사항</h4>
<p><code>split</code> 메소드의 기능을 확인해야 한다.
예를 들어 <code>Name   Score</code>라는 문자열을 공백을 기준으로 쪼개면 길이가 두 개의 단어로 구성된 리스트가 생성된다.</p>
<blockquote>
'Name   Score'.split()
</blockquote>

<pre><code>['Name', 'Score']
</code></pre>
<p>파일의 각 줄이 동일한 모양을 갖고 있다는 점에 착안하여 아래와 같이 각줄의 내용 중에서 점수에 해당하는 부분을
아래와 같이 확인할 수 있다.</p>
<p><strong>주의:</strong> 리스트의 색인도 문자열의 경우처럼 0부터 시작한다. 따라서 리스트의 둘째 항목의 색인은 1인다.</p>
<blockquote>
result_f = open("data/scores_list.txt")

for line in result_f: 
    record = line.split()
    print(record[1])

result_f.close() 
</blockquote>

<pre><code>Score
21.09
20.32
21.81
22.97
23.29
22.09
21.20
22.16
</code></pre>
<p>그런데 첫째 줄 내용은 점수를 비교하는 데에 필요없다. 
따라서 무시하는 방법을 사용하도록 하자.</p>
<p>특정 줄을 무시하는 방법은 여러 기술이 있지만 여기서는 <code>try ... except ...</code> 명령문을 이용한 <strong>예외처리</strong> 기술을 활용한다.</p>
<p><strong>주의:</strong>
여기서 예외처리 기술을 이용하는 이유는 다음과 같다.
<em> <code>split</code> 메소드로 쪼개진 값들은 모두 문자열로 처리된다.
</em> 하지만 점수를 비교하기 위해서는 부동소수점으로 형변환 시키는 것이 좋다.
<em> 그런데 첫째 줄에 <code>float</code> 함수를 적용하면 오류가 발생한다.
</em> 따라서 오류가 발생할 때 프로그램의 실행을 멈추지 않고 다른 일을 하도록 예외처리를 해주어야 한다.
* 아래 코드에서는 <code>float</code> 함수를 실행할 때 오류가 발생하면 무시하고 다음 줄로 넘어가는 식으로 오류처리를 하였다.</p>
<blockquote>
result_f = open("data/scores_list.txt")

highest_score = 0                   # 1등 점수 저장

for line in result_f: 
    record = line.split()

    try:                           # 첫줄 제외 용도
        score = float(record[1])
    except:
        continue

    if highest_score < score:       # 1등 점수 갱신 경우 확인
        highest_score = score
    else:
        continue

result_f.close() 

print("1등 점수는", highest_score, "입니다.")
</blockquote>

<pre><code>1등 점수는 23.29 입니다.
</code></pre>
<h3>2등 점수 확인하기</h3>
<p>2등 점수까지 확인하려면 2등 점수를 기억할 변수가 하나 더 필요하며
확인된 점수가 기존의 1등 점수보다 큰지, 2등 점수보다 큰지 여부에 따라 1, 2등 점수를 기억하는 변수의 값들을 
업데이트 해야 한다.</p>
<blockquote>
result_f = open("data/scores_list.txt")

highest_score = 0
second_highest_score = 0                    # 2등 점수 저장

for line in result_f: 
    record = line.split()

    try: 
        score = float(record[1])
    except:
        continue

    if highest_score < score:               # 1, 2등 점수 갱신 경우 확인
        second_highest_score = highest_score
        highest_score = score
    elif second_highest_score < score:      # 2등 점수 갱신 경우 확인
        second_highest_score = score
    else:
        continue

result_f.close() 

print("1등 점수는", highest_score, "입니다.")
print("2등 점수는", second_highest_score, "입니다.")
</blockquote>

<pre><code>1등 점수는 23.29 입니다.
2등 점수는 22.97 입니다.
</code></pre>
<h3>3등 점수 확인하기</h3>
<p>이제 3등 점수까지 확인하려면 코드를 더 많이 수정해야 하며, 더 많은 변수와 조건문을 사용해야 한다.</p>
<blockquote>
result_f = open("data/scores_list.txt")

highest_score = 0
second_highest_score = 0
third_highest_score = 0                          # 3등 점수 저장

for line in result_f: 
    record = line.split()

    try: 
        score = float(record[1])
    except:
        continue

    if highest_score < score:                     # 1, 2, 3등 점수 갱신 확인
        third_highest_score = second_highest_score
        second_highest_score = highest_score
        highest_score = score
    elif second_highest_score < score:            # 2, 3등 점수 갱신 확인
        third_highest_score = second_highest_score
        second_highest_score = score
    elif third_highest_score < score:             # 3등 점수 갱신 확인
        third_highest_score = score        
    else:
        continue

result_f.close() 

print("1등 점수는", highest_score, "입니다.")
print("2등 점수는", second_highest_score, "입니다.")
print("3등 점수는", third_highest_score, "입니다.")
</blockquote>

<pre><code>1등 점수는 23.29 입니다.
2등 점수는 22.97 입니다.
3등 점수는 22.16 입니다.
</code></pre>
<h3>나쁜 프로그래밍</h3>
<p>앞서 1등까지, 2등까지, 3등까지 점수를 확인하는 코드는 각자 다르며, 점처 길어지고 복잡해졌다.
코드를 이런 식으로 구현하면 안된다.</p>
<p>무엇보다도 원하는 등수에 따라 코드 자체가 수정되어야 하는 방식으로 프로그래밍을 하면 절대 안된다.
그럼 어떻게 할까?</p>
<p>앞선 코드의 근본적인 문제점은 각 선수의 점수를 따라따로 관리하기 때문에 발생한다.
따라서 선수의 점수를 모아서 한꺼번에 처리하는 기술이 요구된다.
여기서는 리스트 자료형을 활용하여 원하는 등수와 선수의 수에 상관없이 동일한 코드로 원하는 결과를 
리턴하는 프로그램을 구현하고자 한다.</p>
<h2>리스트 활용</h2>
<p>몇 등 점수를 알아내야 하는가와 상관없이 모든 질문에 답을 하는 하나의 프로그램을 리스트를 활용하여
구현하고자 하며, 아이디어는 다음과 같다.</p>
<ul>
<li>서핑 대회 참가선수들의 점수만을 따로 모아 놓은 리스트를 생성한다.</li>
<li>리스트의 항목들을 숫자크기 역순으로 정렬(sorting)한다.</li>
<li>역순, 즉 내림차순으로 정렬된 리스트의 색인을 이용하여 원하는 등수의 점수를 확인한다.</li>
</ul>
<h3>기본 아이디어</h3>
<p><strong>질문:</strong> 그렇다면 점수만 뽑아서 모은 다음에 점수들을 순서대로 나열하는 방법이 있으면 좋지 않을까?</p>
<p><strong>답:</strong> 매우 그렇다.</p>
<p><strong>방법:</strong> <code>split()</code>, <code>append()</code> 메소드를 아래와 같이 <code>for</code> 문과 함께 활용하면 됨.</p>
<blockquote>
result_f = open("data/scores_list.txt")

score_list = []                         # 점수 저장 리스트 생성

for line in result_f: 
    (name, score) = line.split()        # 각 줄을 두 단어의 리스트로 쪼개기
    try:
        score_list.append(float(score)) # 첫째 줄 제외. 숫자만 scores 리스트에 추가
    except:
        continue

result_f.close() 

score_list.sort()                       # 리스트를 크기순으로 정렬(오름차순)
score_list.reverse()                    # 리스트의 항목들의 순서 뒤집기

print("The top scores were:") 
print(score_list[0])                    # 0번 색인값 = 1등 점수
print(score_list[1])                    # 1번 색인값 = 2등 점수
print(score_list[2])                    # 2번 색인값 = 3등 점수
</blockquote>

<pre><code>The top scores were:
23.29
22.97
22.16
</code></pre>
<h4>주의사항</h4>
<p>위 코드의 4번 줄에 사용된 <code>line.split()</code>이 선수이름과 점수를 쪼개는 과정이다.</p>
<p>아래 코드는 위 코드를 좀 더 세련되게 구현한 것이다. 
아래 코드의 4번 줄 내용은 <code>split()</code> 메소드를 이용하여 선수 이름과 점수로 쪼개진
각각의 값을 갖는 변수를 동시에 선언하고 있다.
(<strong>주의:</strong> <code>split()</code>의 결과로 길이가 2인 리스트를 얻는다는 것을 미리 예상하였음에 주의하라.)</p>
<blockquote>
(name, score) = line.split()
</blockquote>

<p>위와 같이 하면 다음 처럼 한 것과 동일한 일을 하게 된다.</p>
<blockquote>
name = line.split()[0]
score = line.split()[1]
</blockquote>

<h4>주의사항</h4>
<p>아래 두 줄의 코드는 리스트를 내림차순으로 정렬한다.</p>
<blockquote>
score_list.sort()
score_list.reverse()
</blockquote>

<p>위 두 줄의 코드를 아래와 같이 한 줄로 구현할 수 있다.</p>
<blockquote>
score_list.sort(reverse=True)
</blockquote>

<blockquote>
result_f = open("data/scores_list.txt")

score_list = []                        

for line in result_f: 
    (name, score) = line.split()       
    try:
        score_list.append(float(score))
    except:
        continue

result_f.close() 

score_list.sort(reverse=True)           # 리스트를 내림차순으로 정렬

print("The top scores were:") 
print(score_list[0])   
print(score_list[1])   
print(score_list[2])   
</blockquote>

<pre><code>The top scores were:
23.29
22.97
22.16
</code></pre>
<h2>함수 활용</h2>
<p>앞서 살펴본 코드를 함수로 추상화하면 원하는 등수의 점수를 함수호출로 간단하게 확인할 수 있다.</p>
<p><strong>주의:</strong> 함수의 정의화 기초적인 활용법에 대한 자세한 설명은 
    <a href="https://github.com/liganega/bpp/blob/master/notes/03-ThinkPython-Functions.ipynb">여기</a>를
    참조한다.</p>
<blockquote>
def ranking(rank):                        # 원하는 등수를 인자로 사용
    result_f = open("data/scores_list.txt")

    score_list = [] 

    for line in result_f: 
        (name, score) = line.split() 
        try:
            score_list.append(float(score)) 
        except:
            continue
    result_f.close() 

    score_list.sort(reverse=True) 

    return score_list[rank-1]               # 원하는 등수의 점수 리턴
</blockquote>

<p>이제 1, 2, 3등 점수를 가볍게 확인 할 수 있다.</p>
<blockquote>
print(ranking(1), ranking(2), ranking(3))
</blockquote>

<pre><code>23.29 22.97 22.16
</code></pre>
<h2>연습문제</h2>
<h3>연습</h3>
<p>빈 리스트는 아무 것도 포함하지 않는 리스트를 의미한다.</p>
<blockquote>
empty_list = []
</blockquote>

<p>빈 리스트의 길이는 0이다.</p>
<blockquote>
len(empty_list)
</blockquote>

<pre><code>0
</code></pre>
<p>빈 리스트는 아무 것도 포함하지 않는다. 
따라서 0번 인덱스 값도 없다.</p>
<blockquote>
empty_list[0]
</blockquote>

<pre><code>---------------------------------------------------------------------------

IndexError                                Traceback (most recent call last)

&lt;ipython-input-16-29438dbc2832&gt; in &lt;module&gt;()
----&gt; 1 empty_list[0]


IndexError: list index out of range
</code></pre>
<h4>주의</h4>
<p>빈 리스트를 아래와 같이 작성할 수도 있다.</p>
<blockquote>
empty_list = list()
</blockquote>

<p>반면에 아래 리스트는 빈 리스트가 아니다.</p>
<blockquote>
a_singleton = [[]]
</blockquote>

<p>위 리스트는 빈 리스트를 포함한 리스트이다.
따라서 길이가 1이다.</p>
<blockquote>
len(a_singleton)
</blockquote>

<pre><code>1
</code></pre>
<p>포함된 유일한 항목은 빈 리스트이다.</p>
<blockquote>
a_singleton[0]
</blockquote>

<pre><code>[]
</code></pre>
<h3>연습</h3>
<p>리스트는 중첩을 허용한다.
아래 리스트는 3중 리스트이다. </p>
<blockquote>
a_nested_list = [1, 2, [3, 4], [[5, 6, 7], 8]]
</blockquote>

<ul>
<li>첫째, 둘째 항목은 정수인 1과 2이다.</li>
<li>셋쩨 항목은 3과 4로 이루어진 길이가 2인 리스트 <code>[3, 4]</code>이다.</li>
<li>넷째 항목은 리스트 <code>[5, 6, 7]</code>과 정수 8로 이루어진 리스트 <code>[[5, 6, 7], 8]</code>이다.</li>
</ul>
<p>질문: 위 리스트에서 2를 인덱스로 얻는 방법은?</p>
<p>견본답안:</p>
<blockquote>
a_nested_list[1]
</blockquote>

<pre><code>2
</code></pre>
<p>질문: <code>[3, 4]</code>를 인덱스로 얻는 방법은?</p>
<p>견본답안:</p>
<blockquote>
a_nested_list[2]
</blockquote>

<pre><code>[3, 4]
</code></pre>
<p>질문: <code>3</code>을 인덱스로 얻는 방법은?</p>
<p>견본답안: 인덱스를 연속해서 적용한다.</p>
<blockquote>
a_nested_list[2][0]
</blockquote>

<pre><code>3
</code></pre>
<p>질문: <code>[5, 6, 7]</code>을 인덱스로 얻는 방법은?</p>
<p>견본답안: 역시 인덱스를 연속해서 적용한다.</p>
<blockquote>
a_nested_list[3][0]
</blockquote>

<pre><code>[5, 6, 7]
</code></pre>
<p>질문: <code>7</code>을 인덱스로 얻는 방법은?</p>
<p>견본답안: 역시 인덱스를 연속해서 적용한다.</p>
<blockquote>
a_nested_list[3][0][2]
</blockquote>

<pre><code>7
</code></pre>
<h3>연습: 슬라이싱과 인덱싱의 차이점</h3>
<p>아래 예제는 슬라이싱과 인덱싱의 작동방식이 다르다는 것을 잘 보여준다.</p>
<p>동물들의 리스트 <code>animals</code>를 아래와 같이 정의하자.</p>
<blockquote>
animals = ['dog', 'cat', 'pig']
</blockquote>

<p>이제 인덱싱을 사용하여 1번 색인값으로 <code>cat</code> 대신에 새로운 리스트인 <code>['tiger', 'lion', 'rabbit']</code>를 지정해보자.</p>
<blockquote>
animals[1] = ['tiger', 'lion', 'rabbit']
</blockquote>

<p>그러면 <code>animals</code>는 이 경우 2중 리스트가 된다.</p>
<blockquote>
animals
</blockquote>

<pre><code>['dog', ['tiger', 'lion', 'rabbit'], 'pig']
</code></pre>
<p>반면에 아래와 같이 슬라이싱을 사용하면 전혀 다른 결과를 얻는다.</p>
<blockquote>
animals = ['dog', 'cat', 'pig']
animals[1:2] = ['tiger', 'lion', 'rabbit']
</blockquote>

<p>슬라이싱을 활용하면 2중 리스트 대신에 확장된 리스트를 얻게 된다.</p>
<blockquote>
animals
</blockquote>

<pre><code>['dog', 'tiger', 'lion', 'rabbit', 'pig']
</code></pre>
<p>슬라이싱을 활용하여 특정 항목을 삭제할 수도 있다.
예를 들어, 2번 ~ 3번 색인값인 <code>tiger</code>와 <code>lion</code>을 삭제하려면 아래와 같이 할 수 있다.</p>
<blockquote>
animals[2:4] = []
animals
</blockquote>

<pre><code>['dog', 'tiger', 'pig']
</code></pre>
<h3>연습: 리스트의 중요 메소드 활용</h3>
<blockquote>
animals = ['dog', 'cat', 'pig']
</blockquote>

<p>문자열에 포함된 문자들의 순서가 중요하듯 리스트에 포함된 항목들의 순서도 절대적으로 중요하다.
문자열과는 달리 리스트는 수정이 가능하다. </p>
<p>예를 들어, <code>append()</code> 메소드는 리스트의 끝에 항목을 하나 추가한다. </p>
<blockquote>
animals.append('coq')
animals
</blockquote>

<pre><code>['dog', 'cat', 'pig', 'coq']
</code></pre>
<p>동시에 여러 개의 항목을 추가하고자 할 때는 <code>append()</code> 메소드를 아래처럼 이용하면 된다고 생각하면 안된다.</p>
<blockquote>
animals.append(['eagle', 'bear'])
animals
</blockquote>

<pre><code>['dog', 'cat', 'pig', 'coq', ['eagle', 'bear']]
</code></pre>
<p>위에서는 원래의 리스트에 다른 리스트 <strong>하나</strong>를 마지막 항목으로 추가한 것이다.</p>
<p>그게 아니라 <code>eagle</code>과 <code>bear</code> 두 개의 항목을 원래의 리스트에 추가하고자 한다면 <code>append()</code> 메소드를 두 번 적용하거나
아니면 <code>extend()</code> 메소드를 사용하면 된다. </p>
<p>먼저 앞서 추가한 항목을 제거하자.</p>
<blockquote>
animals.remove(['eagle', 'bear'])
animals
</blockquote>

<pre><code>['dog', 'cat', 'pig', 'coq']
</code></pre>
<p><code>extend()</code> 메소드의 활용은 다음과 같다.</p>
<blockquote>
animals.extend(['eagle', 'bear'])
animals
</blockquote>

<pre><code>['dog', 'cat', 'pig', 'coq', 'eagle', 'bear']
</code></pre>
<p>두 개의 리스트를 덧셈 기호를 이용하여 확장할 수도 있다. 하지만 원래의 리스트를 변경하는 게 아니라 새로운 리스트를 생성한다. </p>
<p>항목 추가 및 제거 이외에도 항목 자체를 변경할 수도 있다. </p>
<p><code>cat</code>를 <code>cow</code>으로 변경해보자.
방법은 간단하게 인덱싱을 사용한다. </p>
<blockquote>
animals[1] = 'cow'
animals
</blockquote>

<pre><code>['dog', 'cow', 'pig', 'coq', 'eagle', 'bear']
</code></pre>
<p>리스트에 포함된 항목의 인덱스를 알고자 한다면 <code>index()</code> 메소드를 이용한다. </p>
<blockquote>
animals.index('pig')
</blockquote>

<pre><code>2
</code></pre>
<p><strong>주의</strong>: 만약에 <code>'pig'</code>가 여러 번 포함되어 있으면 <code>index()</code> 메소드는 가장 작은 인덱스를 리턴한다. </p>
<blockquote>
animals.append('pig')
animals
</blockquote>

<pre><code>['dog', 'cow', 'pig', 'coq', 'eagle', 'bear', 'pig']
</code></pre>
<blockquote>
animals.index('pig')
</blockquote>

<pre><code>2
</code></pre>
<p><code>pop()</code> 메소드는 인자가 없을 경우 맨 끝에 위치한 항목을 삭제하며, 인덱스를 인자로 사용하면 해당 항목을 삭제한다. </p>
<blockquote>
animals.pop()
</blockquote>

<pre><code>'pig'
</code></pre>
<blockquote>
animals.pop(2)
</blockquote>

<pre><code>'pig'
</code></pre>
<p><code>animals</code>에 할당된 리스트가 어떻게 변경되었는지 확인해야 한다.</p>
<blockquote>
animals
</blockquote>

<pre><code>['dog', 'cow', 'coq', 'eagle', 'bear']
</code></pre>
<p>특정 인덱스 위치에 항목을 추가할 경우 <code>insert()</code> 메소드를 사용한다. </p>
<blockquote>
animals.insert(5, 'leopard')
animals
</blockquote>

<pre><code>['dog', 'cow', 'coq', 'eagle', 'bear', 'leopard']
</code></pre>
<p><strong>주의</strong>: 각 메소드의 리턴값에 주의해야 한다.</p>
<ul>
<li><code>pop()</code>: 리스트에서 삭제한 항목을 리턴한다.</li>
<li><code>append()</code>, <code>remove()</code>, <code>insert()</code> 등은 기존의 리스트를 변경하지만 리턴값은 <code>None</code>, 즉 아무 것도 리턴하지 않는다. </li>
</ul>
<p><strong>주의</strong>: <code>pop()</code> 메소드는 인덱스를 사용하거나 아니면 맨 끝 항목만 삭제한다. 인덱스 번호를 모를 경우에 특정 항목을 삭제하고자 한다면 <code>remove()</code> 
메소드를 사용한다.</p>
<blockquote>
animals.insert(2, 'hamster')
print(animals)
</blockquote>

<pre><code>['dog', 'cow', 'hamster', 'coq', 'eagle', 'bear', 'leopard']
</code></pre>
<blockquote>
removed_pet = animals.remove('hamster')
print(animals)
</blockquote>

<pre><code>['dog', 'cow', 'coq', 'eagle', 'bear', 'leopard']
</code></pre>
<p><strong>주의</strong>:</p>
<ul>
<li>
<p>특정 항목이 여러 번 포함되어 있을 경우 <code>remove()</code> 메소드는 맨 왼쪽에 위치한 항목 하나만 삭제한다. 
    더 삭제하려면 또 사용해야 한다.</p>
</li>
<li>
<p><code>remove()</code>, <code>index()</code> 등은 삭제 또는 찾고자 하는 항목이 없을 경우 오류를 발생시킨다. </p>
</li>
</ul>
<blockquote>
animals.remove('hamster')
animals
</blockquote>

<pre><code>---------------------------------------------------------------------------

ValueError                                Traceback (most recent call last)

&lt;ipython-input-48-23a85b0eacf2&gt; in &lt;module&gt;()
----&gt; 1 animals.remove('hamster')
      2 animals


ValueError: list.remove(x): x not in list
</code></pre>
<p>이외에 <code>del</code> 함수를 이용하여 리스트의 일부 또는 전체를 삭제할 수 있다. </p>
<p><strong>주의</strong>: <code>del</code> 함수(메소드 아님)는 매우 주의해서 사용해야 한다. 잘못하면 데이터 자체를 메모리에서 삭제시킬 수 있다. </p>
<blockquote>
del animals[-1]
animals
</blockquote>

<pre><code>['dog', 'cow', 'coq', 'eagle', 'bear']
</code></pre>
<blockquote>
animals_sample = ['dog']
</blockquote>

<blockquote>
del animals_sample
</blockquote>

<blockquote>
animals_sample
</blockquote>

<pre><code>---------------------------------------------------------------------------

NameError                                 Traceback (most recent call last)

&lt;ipython-input-52-2fd0a356f881&gt; in &lt;module&gt;()
----&gt; 1 animals_sample


NameError: name 'animals_sample' is not defined
</code></pre>
<p><code>reverse()</code> 메소드는 리스트의 순서를 뒤집는다.</p>
<blockquote>
print('기존 동물 리스트: ', animals)
animals.reverse()
print('뒤집어진 동물 리스트: ', animals)
</blockquote>

<pre><code>기존 동물 리스트:  ['dog', 'cow', 'coq', 'eagle', 'bear']
뒤집어진 동물 리스트:  ['bear', 'eagle', 'coq', 'cow', 'dog']
</code></pre>
<p><code>sort()</code> 메소드를 이용하여 리스트의 항목들을 정렬할 수 있다. </p>
<ul>
<li>숫자의 경우는 크기 순서대로.</li>
<li>문자열의 경우는 사전식으로.</li>
</ul>
<blockquote>
print('기존 동물 리스트', animals)
animals.sort()
print('정렬된 동물 리스트', animals)
</blockquote>

<pre><code>기존 동물 리스트 ['bear', 'eagle', 'coq', 'cow', 'dog']
정렬된 동물 리스트 ['bear', 'coq', 'cow', 'dog', 'eagle']
</code></pre>
<p><strong>주의</strong>:</p>
<ul>
<li><code>sort()</code>와 <code>reverse()</code> 메소드는 원래의 리스트 자체를 변경한다. </li>
<li>원래의 리스트를 건드리지 않으면서 정렬된 또는 뒤집어진 리스트를 생성하고자 한다면 <code>sorted()</code> 또는 <code>reversed()</code> 함수(메소드 아님)를 사용한다.</li>
</ul>
<blockquote>
animals.append('horse')
print(animals)
print(sorted(animals))
print(animals)
</blockquote>

<pre><code>['bear', 'coq', 'cow', 'dog', 'eagle', 'horse']
['bear', 'coq', 'cow', 'dog', 'eagle', 'horse']
['bear', 'coq', 'cow', 'dog', 'eagle', 'horse']
</code></pre>
<p><code>reversed()</code> 함수에 대해서는 자세히 알아보지 않는다.</p>
<h3>연습</h3>
<p>어떤 모임에 등록하는 참가자들의 리스트를 관리하는 간단한 프로그램을 아래와 같이 구현할 수 있다.</p>
<blockquote>
menu_input = 0
name_list = []

while menu_input != 9:
    print("==========")
    print("1. 참가 여부 확인")
    print("2. 참가 신청")
    print("3. 참가 취소")
    print("4. 참가자명 변경")
    print("5. 참가명단")
    print("6. 참가 인원수 확인")
    print("9. 종료")
    print("==========")

    try:
        menu_input = int(input("원하는 항목 번호를 입력하세요: "))

        if menu_input == 1:
            name = input("확인할 이름을 입력하세요: ")
            if name in name_list:
                print("참가자 명단에 있습니다.")
            else:
                print("참가자 명단에 없습니다.")

        if menu_input == 2:
            name = input("참가 신청할 이름을 입력하세요: ")
            name_list.append(name)

        if menu_input == 3:
            name = input("참가 취소할 이름을 입력하세요: ")
            name_list.remove(name)

        if menu_input == 4:
            name = input("등록한 이름을 입력하세요: ")
            name_re = input("수정할 이름을 입력하세요: ")
            index = name_list.index(name)
            name_list[index] = name_re

        if menu_input == 5:
            print("참가자 명단은 ", name_list, "입니다.")

        if menu_input == 6:
            print("참가 인원수는 ", len(name_list), "입니다.")

        if menu_input == 9:
            print("프로그램을 종료합니다.")
            break

    except:
        print("정수를 입력하세요.")
</blockquote>

<pre><code>==========
1. 참가 여부 확인
2. 참가 신청
3. 참가 취소
4. 참가자명 변경
5. 참가명단
6. 참가 인원수 확인
9. 종료
==========
원하는 항목 번호를 입력하세요: 2
참가 신청할 이름을 입력하세요: alice
==========
1. 참가 여부 확인
2. 참가 신청
3. 참가 취소
4. 참가자명 변경
5. 참가명단
6. 참가 인원수 확인
9. 종료
==========
원하는 항목 번호를 입력하세요: 2
참가 신청할 이름을 입력하세요: bob
==========
1. 참가 여부 확인
2. 참가 신청
3. 참가 취소
4. 참가자명 변경
5. 참가명단
6. 참가 인원수 확인
9. 종료
==========
원하는 항목 번호를 입력하세요: 6
참가 인원수는  2 입니다.
==========
1. 참가 여부 확인
2. 참가 신청
3. 참가 취소
4. 참가자명 변경
5. 참가명단
6. 참가 인원수 확인
9. 종료
==========
원하는 항목 번호를 입력하세요: 9
프로그램을 종료합니다.
</code></pre>