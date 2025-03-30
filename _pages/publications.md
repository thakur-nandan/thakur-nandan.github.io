---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---

## :mag: Research

My research is focused on three aspects: (i) Constructing challenging & realistic benchmarks, focusing on evaluation and benchmarking (ii) Building efficient retrieval systems, whose quality and cost can be optimized and generalize to challenging domains, and (iii) Standardizing RAG evaluation, building a better foundation within the IR & NLP community. 

To answer these questions, my research develops *new benchmarks* such as [BEIR](http://beir.io) or [MIRACL](http://miracl.ai) to enable realistic evaluations, and constructs *efficient models* with [GPL](https://arxiv.org/abs/2205.11498) & [SWIM-IR](https://arxiv.org/abs/2311.05800). This accelerates [RAG systems](https://trec-rag.github.io) to help craft language model answers with reduced [hallucinations](https://aclanthology.org/2024.findings-emnlp.730/) and improved accuracy seen across [domains]() and [languages](https://arxiv.org/abs/2410.13716).


### :bar_chart: Data Efficiency: Transfer Learning, Data Augmentation, and Zero-shot Learning 
In order to train neural retriever systems, large amounts of human-labeled training data are required, which is often cumbersome and expensive to generate for real-world tasks. Data efficiency plays a crucial role in addressing this challenge. Transfer learning is motivated by distilling knowledge from pretrained models or LLMs to train data-efficient models. Data augmentation techniques involve generating high-quality synthetic data for training purposes. Zero-shot learning enables models to generalize to unseen classes or queries without any training examples.

### :speaking_head: Languages: Multilingual Retrieval
Multilingual retrieval aims to provide relevant search results for users searching across multiple languages. Multilingual retrieval involves various challenges, including language mismatch, translation ambiguity, and language-specific resource limitations. To overcome these challenges, machine translation, cross-lingual IR, and multilingual embeddings have been employed. However, training data for such tasks is even scarcer than English, making it an important challenge.

## :scroll: Publications
For an updated list of publications, please refer either to my [Google Scholar profile](https://scholar.google.com/citations?user=CE9GJoMAAAAJ&hl=en) or [Semantic Scholar profile](https://www.semanticscholar.org/author/Nandan-Thakur/47583894).

\* denotes equal contribution

{% assign publications_by_year = site.publications | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign sorted_publications_by_year = publications_by_year | sort: "name" | reverse %}

{% for year in sorted_publications_by_year %}
### {{ year.name }}
<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  {% for post in year.items %}
  <tr>
    <td style="border: none; padding:2.5%;width:25%;vertical-align:middle;max-width:100px;max-height:100px">
      <img src="/{{ post.image }}" alt="project image" style="width:auto; height:auto; max-width:100%;" />
    </td>
    <td style="border: none; padding:2.5%;width:75%;vertical-align:middle">
      <h3>{{ post.title }}</h3>
      {{ post.authors }}<br>
      <em>{{ post.venue }}</em>, {{ post.date | date: "%Y" }}.<br>
      {{ post.affiliation }}<br>
      <div class="publication-links">
        {% if post.paperurl %}
          <a href="{{ post.paperurl }}"><i class="fas fa-file-alt"></i> [paper]</a>
        {% endif %}
        {% if post.page %}
          <a href="{{ post.page }}"><i class="fas fa-globe"></i> [website]</a>
        {% endif %}
        {% if post.code %}
          <a href="{{ post.code }}"><i class="fas fa-code"></i> [code]</a>
        {% endif %}
        {% if post.video %}
          <a href="{{ post.video }}"><i class="fas fa-video"></i> [video]</a>
        {% endif %}
        {% if post.poster %}
          <a href="{{ post.poster }}"><i class="fas fa-image"></i> [poster]</a>
        {% endif %}
        {% if post.slides %}
          <a href="{{ post.slides }}"><i class="fas fa-slideshare"></i> [slides]</a>
        {% endif %}
        {% if post.dataset %}
          <a href="{{ post.dataset }}"><i class="fas fa-database"></i> [dataset]</a>
        {% endif %}
      </div>
      <p></p>
      {{ post.excerpt }}
    </td>
  </tr>
  {% endfor %}
</table>
{% endfor %}
