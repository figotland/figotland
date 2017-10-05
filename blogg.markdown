---
title: Blogg
date: 2017-10-05 07:31:00 Z
layout: blog
---

<ul class="list">
{% for post in site.posts limit: 10 %}
  {% include post.html post=post is_excerpt=true %}
{% endfor %}
</ul>