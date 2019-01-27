---
layout: post
title: GongSu02_Anaconda_Installation
date: 2019-01-26 22:34:46 +0900
categories: qwerty
---
<h1>아나콘다(Anaconda) 소개</h1>
<h4>수정 사항</h4>
<ul>
<li>파이썬3 이용 아나콘다 팩키지 설치 이미지 업데이트 필요</li>
</ul>
<h2>아나콘다 패키지 소개</h2>
<ul>
<li>파이썬 프로그래밍 언어 개발환경 </li>
<li>파이썬 기본 패키지 이외에 데이터분석용 필수 패키지 포함 </li>
<li>기본적으로 스파이더 에디터를 활용하여 강의 진행</li>
</ul>
<h2>아나콘다 패키지 다운로드</h2>
<p>아나콘다 패키지를 다운로드 하려면 아래 사이트를 방문한다</p>
<p>https://www.anaconda.com/download/</p>
<p>이후 아래 그림을 참조하여 다운받는다.</p>
<h4><em>주의: 강의에서는 파이썬 3 최신 버전을 사용한다.</em></h4>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda01.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>

<p><strong>주의:</strong> Python 3.6 이상의 버전을 다운받아야 한다. 아래 그림은 파이썬 2.7을 다운받는 것을 보여준다.</p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda02.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>

<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda03.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>

<h2>아나콘다 패키지 설치</h2>
<p>아래 그림에 표시된 부분에 주의하여 설치한다.</p>
<ul>
<li>주의: 경로설정 부분은 무슨 의미인지 알고 있는 경우 체크 가능. 모르면 해제 권장.</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda04.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda05.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda06.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda07.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda08.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>
</p>

<h2>스파이더(Spyder) 파이썬 편집기 실행</h2>
<ul>
<li>윈도우키를 누른 후 스파이더(Spyder) 선택</li>
<li>방화벽 설정은 기본 사용</li>
<li>업데이트 확인 부분은 체크 해제</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda09.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda10.PNG" | relative_url }}" style="height=60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda11.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda12.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>
</p>

<h2>스파이더(Spyder) 파이썬 편집기 활용</h2>
<ul>
<li>주의: 업그레이드 확인 부분은 체크 해제할 것. 업그레이드를 임의로 하지 말 것. </li>
<li>스파이더는 편집기 기능과 터미널 기능을 동시에 제공</li>
<li>편집기 부분은 긴 코드를 작성할 때 사용</li>
<li>터미널 부분은 짧은 코드를 테스트할 때 사용</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda13.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>
</p>

<p>실행버튼을 처음으로 눌렀을 경우 파이썬 해석기와 관련된 설정창이 뜬다. 
설정을 굳이 변경할 필요 없이 Run 버튼을 누른다.</p>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda14.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>
</p>

<h2>스파이더(Spyder) 파이썬 편집기 활용 예제</h2>
<ul>
<li>편집기 부분과 터미널 부분은 파이썬 해석기를 공유한다.</li>
<li>편집기 부분에 코드 입력 후 실행하면, 터미널 부분에서도 편집기 부분에서 정의된 변수, 함수 등 사용 가능</li>
<li>또한 터미널 부분에서 정의된 변수, 함수 등도 편집기에서 사용 가능.<ul>
<li>주의: 이 방식은 추천하지 않음. 편집기 부분을 저장할 때 터미널 부분에 정의된 코드는 저장되지 않음.</li>
</ul>
</li>
</ul>
<p>
<table cellspacing="20">

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda15.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda16.PNG" | relative_url }}" style="height:60">
</td>
</tr>

<tr>
<td>
<img src="{{ "assets/images/anaconda/anaconda17.PNG" | relative_url }}" style="height:60">
</td>
</tr>

</table>
</p>

<h2>스파이더 터미널 창에서 파이썬 코드 실행하기</h2>
<p>아래와 같이 명령을 바로 실행하여 결과를 확인할 수 있다.</p>
<blockquote>
a = 2
</blockquote>

<blockquote>
b = 3
</blockquote>

<blockquote>
a + b
</blockquote>

<pre><code>5
</code></pre>
<h3>변수는 선언을 먼저 해야 사용할 수 있다.</h3>
<blockquote>
a_number * 2
</blockquote>

<pre><code>---------------------------------------------------------------------------

NameError                                 Traceback (most recent call last)

&lt;ipython-input-4-ee8dca8ca34f&gt; in &lt;module&gt;()
----&gt; 1 a_number * 2


NameError: name 'a_number' is not defined
</code></pre>
<blockquote>
a_number = 5
</blockquote>

<blockquote>
type(a_number)
</blockquote>

<pre><code>int
</code></pre>
<blockquote>
print(a_number)
</blockquote>

<pre><code>5
</code></pre>
<blockquote>
a_number * 2
</blockquote>

<pre><code>10
</code></pre>
<h3>간단한 코드를 작성하여 실행할 수 있다.</h3>
<blockquote>
if a_number > 2:
    print('Greater than 2!')
else:
    print('Not greater than 2!')
</blockquote>

<pre><code>Greater than 2!
</code></pre>
<h2>스파이더 에디터 창에서 파이썬 코드 작성 요령</h2>
<p>탭완성 기능과 다양한 단축키 기능을 활용하여 매우 효율적인 코딩을 할 수 있다.</p>
<h3>탭완성 기능</h3>
<p>탭완성 기능은 편집기 및 터미널 모두에서 사용할 수 있다.</p>
<blockquote>
# 먼저 `a_`까지만 작성한 후에 탭키를 누르면 나머지가 자동으로 완성된다.

a_number
</blockquote>

<pre><code>5
</code></pre>
<h3>주석 활용</h3>
<p>이미 여러 번 사용했듯이 코드셀에서 샵(#)이 맨 앞에 있는 경우 해당 줄은 주석으로 처리되어 파이썬 해석기에 의해 무시된다. 
주석은 코드를 읽는 이들에게 코드에 대한 정보를 주기위해 사용된다.
주석은 보통 개발자가 직접 작성한 코드에 대해서 작성한다.</p>
<p>스파이더 에디터에서 주석 처리 단축키: 주석처리하고자 하는 부분을 마우스 또는 키보드를 이용하여 설정한 후에 "Ctrl+1"
조합을 이용하여 주석 설정 및 해제를 실행할 수 있다.</p>
<p>맥에서는 "Command+1" 조합을 사용한다.</p>
<h3>단축키 활용</h3>
<p>스파이더 메뉴에 있는 항목들 마다 대부분 단축키가 설정되어 있다. 
반복해서 사용하는 기능은 단축키를 외워두면 매우 유용하다.
특히, Edit 항목에 있는 기능들은 필수적이다.</p>