---
layout: default
title: 홈
---

# 환영합니다.
- 이곳은 Jekyll로 만든 블로그 입니다.
- > 마크다운 아주 편하다.
  
# 최근 포스트
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y년 %m월 %d일" }}
{% endfor %}
