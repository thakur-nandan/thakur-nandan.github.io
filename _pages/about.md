---
layout: archive
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

:wave: Hello! I'm Nandan Thakur (नंदन ठाकुर / নন্দন ঠাকুর). I'm a ~~(third)~~ fourth-year PhD student at [University of Waterloo](https://cs.uwaterloo.ca/) working on building efficient embedding models and realistic evaluation benchmarks. I'm lucky to be advised by [Professor Jimmy Lin](https://cs.uwaterloo.ca/~jimmylin/). My PhD is partially supported by the David R. Cheriton Graduate Scholarship [[link](https://cs.uwaterloo.ca/current-graduate-students/funding-and-awards/david-r-cheriton-graduate-scholarship)]. 

I have interned at [Google](https://research.google/), [Vectara](https://vectara.com/) and [Databricks](https://www.databricks.com/research/mosaic). I've also collaborated with industry partners including Snowflake, Micrsoft and Huawei. Previously, I worked at [UKP Lab](https://www.informatik.tu-darmstadt.de/ukp/ukp_home/index.en.jsp) in TU Darmstadt advised by [Professor Iryna Gurevych](https://www.informatik.tu-darmstadt.de/ukp/ukp_home/head_ukp/index.en.jsp) and [Nils Reimers](https://www.nils-reimers.de/), and KNOLSKAPE. I received my undergraduate degree from BITS Pilani KK Birla Goa Campus in 2018.

Visit [Research](/publications/) to learn more about my work. You can reach me at nandan.thakur@uwaterloo.ca. I'd love to hear from you!

Curriculum Vitae: [CV](https://thakur-nandan.github.io/files/Nandan_Thakur_CV_latest.pdf)

<!-- <span style="color:red">PS: I will be in the academic job market in 2026!</span> -->

## :mag: Research

My research is focused on three aspects: (i) Constructing challenging & realistic benchmarks, focusing on evaluation and benchmarking (ii) Building efficient retrieval systems, whose quality and cost can be optimized and generalize to challenging domains, and (iii) Standardizing RAG evaluation, building a better foundation within the IR & NLP community. 

To answer these questions, my research develops *new benchmarks* such as [BEIR](http://beir.io) or [MIRACL](http://miracl.ai) to enable realistic evaluations, and constructs *efficient models* with [GPL](https://arxiv.org/abs/2205.11498) & [SWIM-IR](https://arxiv.org/abs/2311.05800). This accelerates [RAG systems](https://trec-rag.github.io) to help craft language model answers with reduced [hallucinations](https://aclanthology.org/2024.findings-emnlp.730/) and improved accuracy seen across [domains](https://arxiv.org/abs/2505.16967) and [languages](https://arxiv.org/abs/2410.13716).

## :fire: 2025 (Recent Updates)
- **[Jun 2025]** :speaking_head: I have been invited to talk at Hamel's mini RAG course on "Modern Information Retrieval Evaluation In The RAG Era". Sign up here: [[https://maven.com/p/fae749/modern-ir-evaluation-in-the-generative-rag-era]](https://maven.com/p/fae749/modern-ir-evaluation-in-the-generative-rag-era).
- **[May 2025]** :page_facing_up: Our new work on nuggetizing search arena RAG answers is available as a preprint now!
- **[Apr 2025]** :page_facing_up: My exciting internship work at Databricks on FreshStack to create realistic RAG benchmarks is available on arXiv!
- **[Apr 2025]** :partying_face: Our TREC 2024 RAG support and Nuggets preprints have been accepted at SIGIR 2025!
- **[Jan 2025]** :speaking_head: Gave a research talk on "Accelerating Multilingual RAG Systems" at Microsoft Research, Bangalore. [[video]](https://www.youtube.com/watch?v=usvu6Sk1ynk).
- **[Jan 2025]** :page_facing_up: My work during my internship at Vectara on "MIRAGE-Bench: Automatic Multilingual Benchmark Arena for Retrieval-Augmented Generation Systems" is now accepted at NAACL 2025.
- **[Jan 2025]** :page_facing_up: Our contribution on including MIRACL in "MMTEB: Massive Multilingual Text Embedding Benchmark" is now accepted at ICLR 2025.

## Selected Talks & Recordings
{% include spotify_episode.html id="5vj6fr5SLPDvpj4nWE9Qqr" %}

## :scroll: Selected Publications

<div class="filter-controls">

  <!-- Year filters -->
  <div class="filter-group year-filters">
    <label>Year:</label>
    <button type="button" data-year="all" class="active">All</button>
    <button type="button" data-year="2025">2025</button>
    <button type="button" data-year="2024">2024</button>
    <button type="button" data-year="2023">2023</button>
    <button type="button" data-year="2022">2022</button>
    <button type="button" data-year="2021">2021</button>
  </div>

  <!-- Divider for spacing -->
  <div class="filter-divider"></div>

  <!-- Conference filters -->
  <div class="filter-group conf-filters">
    <label>Conference:</label>
    <button type="button" data-conf="all" class="active">All</button>
    <button type="button" data-conf="preprint">Preprint</button>
    <button type="button" data-conf="sigir">SIGIR</button>
    <button type="button" data-conf="naacl">NAACL</button>
    <button type="button" data-conf="iclr">ICLR</button>
    <button type="button" data-conf="emnlp">EMNLP</button>
    <button type="button" data-conf="acl">ACL</button>
    <button type="button" data-conf="ecir">ECIR</button>
    <button type="button" data-conf="tacl">TACL</button>
    <button type="button" data-conf="neurips">NeurIPS</button>
  </div>

</div>

<div class="publications-grid">

<!-- 2025 -->
<div class="card preprint" data-year="2025" data-conf="preprint">
  <strong>Fixing Data That Hurts Performance: Cascading LLMs to Relabel Hard Negatives for Robust Information Retrieval</strong><br>
  <u>N. Thakur*</u>, C. Zhang*, X. Ma, J. Lin<br>
  <strong>Preprint 2025</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2505.16967"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://huggingface.co/rlhn"><i class="fas fa-database"></i> Dataset</a>
    | <a href="https://github.com/castorini/rlhn"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card preprint" data-year="2025" data-conf="preprint">
  <strong>Chatbot Arena Meets Nuggets: Towards Explanations & Diagnostics in the Evaluation of LLM Responses</strong><br>
  S. Sharifymoghaddam*, S. Upadhyay*, <u>N. Thakur*</u>, R. Pradeep, J. Lin<br>
  <strong>Preprint 2025</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2504.20006"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card preprint" data-year="2025" data-conf="preprint">
  <strong>FreshStack: Building Realistic Benchmarks for Evaluating Retrieval on Technical Documents</strong><br>
  <u>N. Thakur</u>, J. Lin, S. Havens, M. Carbin, O. Khattab, A. Drozdov<br>
  <strong>Preprint 2025</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2504.13128"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://fresh-stack.github.io"><i class="fas fa-globe"></i> Website</a>
    | <a href="https://huggingface.co/freshstack"><i class="fas fa-database"></i> Dataset</a>
    | <a href="https://github.com/fresh-stack/freshstack"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card sigir" data-year="2025" data-conf="SIGIR">
  <strong>Support Evaluation for the TREC 2024 RAG Track: Comparing Human versus LLM Judges</strong><br>
  <u>N. Thakur</u>, R. Pradeep, S. Upadhyay, D. Campos, N. Craswell, J. Lin<br>
  <strong>SIGIR 2025 (short)</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2504.15205"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card sigir" data-year="2025" data-conf="SIGIR">
  <strong>The Great Nugget Recall: Automating Fact Extraction and RAG Evaluation with Large Language Models</strong><br>
  R. Pradeep, <u>N. Thakur</u>, S. Upadhyay, D. Campos, N. Craswell, J. Lin<br>
  <strong>SIGIR 2025</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2504.15068"><i class="fas fa-file-alt"></i> Paper</a>
    <a href="https://github.com/castorini/nuggetizer"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card ecir" data-year="2025" data-conf="ECIR">
  <strong>Ragnarök: A Reusable RAG Framework and Baselines for TREC 2024 Retrieval-Augmented Generation Track</strong><br>
  R. Pradeep*, <u>N. Thakur*</u>, S. Sharifymoghaddam, E. Zhang, R. Nguyen, D. Campos, N. Craswell, J. Lin<br>
  <strong>ECIR 2025 (Findings)</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2411.09607"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card naacl" data-year="2025" data-conf="NAACL">
  <strong>MIRAGE-Bench: Automatic Multilingual Benchmark Arena for Retrieval-Augmented Generation Systems</strong><br>
  <u>N. Thakur</u>, S. Kazi, G. Luo, J. Lin, A. Ahmad<br>
  <strong>NAACL 2025</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2410.13716"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/vectara/mirage-bench"><i class="fas fa-code"></i> Code</a>
    | <a href="https://mirage-bench.github.io"><i class="fas fa-globe"></i> Website</a>
  </div>
</div>

<div class="card iclr" data-year="2025" data-conf="ICLR">
  <strong>MMTEB: Massive Multilingual Text Embedding Benchmark</strong><br>
  K. Enevoldsen, I. Chung, …, <u>N. Thakur</u>, …<br>
  <strong>ICLR 2025</strong><br>
  <div class="publication-links">
    <a href="https://openreview.net/forum?id=zl3pfz4VCV"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://huggingface.co/spaces/mteb/leaderboard"><i class="fas fa-globe"></i> Website</a>
  </div>
</div>

<!-- 2024 -->
<div class="card sigir" data-year="2024" data-conf="SIGIR">
  <strong>A Large-Scale Study of Relevance Assessments with Large Language Models: An Initial Look</strong><br>
  S. Upadhyay, R. Pradeep, <u>N. Thakur</u>, D. Campos, N. Craswell, I. Soboroff, H. T. Dang, J. Lin<br>
  <strong>ICTIR 2024</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2411.08275"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card preprint" data-year="2024" data-conf="preprint">
  <strong>UMBRELA: UMbrela is the (Open-Source Reproduction of the) Bing RELevance Assessor</strong><br>
  S. Upadhyay, R. Pradeep, <u>N. Thakur</u>, N. Craswell, J. Lin<br>
  <strong>Preprint 2024</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2406.06519"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/castorini/umbrela"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card emnlp" data-year="2024" data-conf="EMNLP">
  <strong>“Knowing When You Don’t Know”: A Multilingual Relevance Assessment Dataset for Robust Retrieval-Augmented Generation</strong><br>
  <u>N. Thakur</u>, L. Bonifacio, X. Zhang, O. Ogundepo, E. Kamalloo, D. A. Hermelo, …, M. Rezagholizadeh, J. Lin<br>
  <strong>EMNLP 2024 (Findings)</strong><br>
  <div class="publication-links">
    <a href="https://aclanthology.org/2024.findings-emnlp.730/"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/project-miracl/nomiracl"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card sigir" data-year="2024" data-conf="SIGIR">
  <strong>Systematic Evaluation of Neural Retrieval Models on the Touché 2020 Argument Retrieval Subset of BEIR</strong><br>
  <u>N. Thakur</u>, L. Bonifacio, M. Fröbe, A. Bondarenko, E. Kamalloo, M. Potthast, M. Hagen, J. Lin<br>
  <strong>SIGIR 2024 (Repro)</strong><br>
  <div class="publication-links">
    <a href="https://dl.acm.org/doi/10.1145/3626772.3657861"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/castorini/touche-error-analysis"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card sigir" data-year="2024" data-conf="SIGIR">
  <strong>Resources for Brewing BEIR: Reproducible Reference Models and Statistical Analyses</strong><br>
  E. Kamalloo, <u>N. Thakur</u>, C. Lassance, X. Ma, J. H. Yang, J. Lin<br>
  <strong>SIGIR 2024 (Resource)</strong><br>
  <div class="publication-links">
    <a href="https://dl.acm.org/doi/abs/10.1145/3626772.3657862"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card naacl" data-year="2024" data-conf="NAACL">
  <strong>Leveraging LLMs for Synthesizing Training Data Across Many Languages in Multilingual Dense Retrieval</strong><br>
  <u>N. Thakur</u>, J. Ni, G. H. Abrego, J. Wieting, J. Lin, D. Cer<br>
  <strong>NAACL 2024</strong><br>
  <div class="publication-links">
    <a href="https://aclanthology.org/2024.naacl-long.426/"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/google-research-datasets/swim-ir"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<!-- 2023 -->
<div class="card preprint" data-year="2023" data-conf="preprint">
  <strong>HAGRID: A Human-LLM Collaborative Dataset for Generative Information-Seeking with Attribution</strong><br>
  E. Kamalloo, A. Jafari, X. Zhang, <u>N. Thakur</u>, J. Lin<br>
  <strong>Preprint 2023</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2307.16883"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card preprint" data-year="2023" data-conf="preprint">
  <strong>Simple Yet Effective Neural Ranking and Reranking Baselines for Cross-Lingual Information Retrieval</strong><br>
  J. Lin, D. Alfonso-Hermelo, V. Jeronymo, E. Kamalloo, C. Lassance, …, <u>N. Thakur</u>, J. H. Yang, X. Zhang<br>
  <strong>Preprint 2023</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/pdf/2304.01019"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card tacl" data-year="2023" data-conf="TACL">
  <strong>MIRACL: A Multilingual Retrieval Dataset Covering 18 Diverse Languages</strong><br>
  X. Zhang*, <u>N. Thakur*</u>, O. Ogundepo, E. Kamalloo, D. A. Hermelo, …, M. Rezagholizadeh, J. Lin<br>
  <strong>TACL 2023</strong><br>
  <div class="publication-links">
    <a href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00595/117438"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://project-miracl.github.io"><i class="fas fa-globe"></i> Website</a>
  </div>
</div>

<div class="card acl" data-year="2023" data-conf="ACL">
  <strong>Evaluating Embedding APIs for Information Retrieval</strong><br>
  E. Kamalloo, X. Zhang, O. Ogundepo, <u>N. Thakur</u>, D. A. Hermelo, M. Rezagholizadeh, J. Lin<br>
  <strong>ACL 2023 (Industry)</strong><br>
  <div class="publication-links">
    <a href="https://aclanthology.org/2023.acl-industry.50/"><i class="fas fa-file-alt"></i> Paper</a>
  </div>
</div>

<div class="card sigir" data-year="2023" data-conf="SIGIR">
  <strong>SPRINT: A Unified Toolkit for Evaluating and Demystifying Zero-shot Neural Sparse Retrieval</strong><br>
  <u>N. Thakur</u>, K. Wang, I. Gurevych, J. Lin<br>
  <strong>SIGIR 2023 (Resource)</strong><br>
  <div class="publication-links">
    <a href="https://dl.acm.org/doi/abs/10.1145/3539618.3591902"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/thakur-nandan/sprint"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card sigir" data-year="2023" data-conf="SIGIR">
  <strong>Injecting Domain Adaptation with Learning-to-hash for Effective and Efficient Zero-shot Dense Retrieval</strong><br>
  <u>N. Thakur</u>, N. Reimers, J. Lin<br>
  <strong>ReNeuIR 2023</strong><br>
  <div class="publication-links">
    <a href="https://dl.acm.org/doi/abs/10.1145/3539618.3591902"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/thakur-nandan/income"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<!-- 2022 -->
<div class="card naacl" data-year="2022" data-conf="NAACL">
  <strong>GPL: Generative Pseudo Labeling for Unsupervised Domain Adaptation of Dense Retrieval</strong><br>
  K. Wang, <u>N. Thakur</u>, N. Reimers, I. Gurevych<br>
  <strong>NAACL 2022</strong><br>
  <div class="publication-links">
    <a href="https://aclanthology.org/2022.naacl-main.168/"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://github.com/UKPLab/gpl"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<!-- 2021 -->
<div class="card neurips" data-year="2021" data-conf="NeurIPS">
  <strong>BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models</strong><br>
  <u>N. Thakur</u>, N. Reimers, A. Rücklé, A. Srivastava, I. Gurevych<br>
  <strong>NeurIPS 2021 (D&B)</strong><br>
  <div class="publication-links">
    <a href="https://arxiv.org/abs/2104.08663"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://beir.ai"><i class="fas fa-globe"></i> Website</a>
    | <a href="https://beir.ai"><i class="fas fa-code"></i> Code</a>
  </div>
</div>

<div class="card naacl" data-year="2021" data-conf="NAACL">
  <strong>Augmented SBERT: Data Augmentation Method for Improving Bi-Encoders for Pairwise Sentence Scoring Tasks</strong><br>
  <u>N. Thakur</u>, N. Reimers, J. Daxenberger, I. Gurevych<br>
  <strong>NAACL 2021</strong><br>
  <div class="publication-links">
    <a href="https://aclanthology.org/2021.naacl-main.28/"><i class="fas fa-file-alt"></i> Paper</a>
    | <a href="https://sbert.net/examples/sentence_transformer/training/data_augmentation/README.html"><i class="fas fa-globe"></i> Website</a>
  </div>
</div>
</div>

## Old Updates

<details markdown="1"><summary><b>2024</b></summary>
- **[Dec 2024]** :page_facing_up: My work on "Ragnarök: A Reusable RAG Framework and Baselines for TREC 2024 Retrieval-Augmented Generation Track" has been accepted at **ECIR 2025 (Resource)**.
- **[Sep 2024]** :computer: I started my Fall 2024 internship at <span style="color:red">Databricks</span> in San Francisco, mentored by Omar Khattab and managed by Sam Havens and Michael Carbin.
- **[Aug 2024]** :fire: We have received over 40+ participants in the first year of the TREC 2024 RAG Track. One of the best participated tracks up to date!
- **[May 2024]** :trophy: I have been awarded the <span style="color:red">David R. Cheriton Graduate Scholarship</span> starting Fall 2024 for my scholastic excellence in my PhD! [[Link]](https://cs.uwaterloo.ca/current-graduate-students/funding-and-awards/david-r-cheriton-graduate-scholarship)
- **[May 2024]** :handshake: Collaboration with Snowflake AI towards building better BEIRv2 and TREC-RAG [[blogpost]](https://www.snowflake.com/blog/snowflake-ai-research-joins-forces-with-the-university-of-waterloo/).
- **[Apr 2024]** :airplane: I will be attending in-person NAACL 2024 in Mexico City, Mexico between 16-20 June 2024 and SIGIR in Washington DC, USA between 14-18 July 2024. If interested, do reach out!
- **[Apr 2024]** :moneybag: Received a 3K USD grant from Google to attend the NAACL 2024 Conference in Mexico City, 2024.
- **[Apr 2024]** :page_facing_up: My work on "Systematic Evaluation of Neural Retrieval Models on the Touch{\'e}~2020 Argument Retrieval Subset of BEIR" has been accepted at **SIGIR 2024 (Reproduction)**.
- **[Apr 2024]** :page_facing_up: My work on "Resources for Brewing BEIR: Reproducible Reference Models and Statistical Analyses" has been accepted at **SIGIR 2024 (Resource)**.
- **[Mar 2024]** :page_facing_up: My Google internship work on "SWIM-IR: Leveraging LLMs for Synthesizing Training Data Across Many Languages in Multilingual Dense Retrieval" has been accepted at **NAACL 2024**.
- **[Feb 2024]** :bulb: Started part time research collaboration on improving multilingual RAG systems with [Vectara](https://vectara.com/).
- **[Jan 2024]** :speaking_head: Gave two research talks on "Heterogeneous Benchmarking of Information Retrieval" in IIT-D (Delhi) and IIIT-Delhi [[presentation]](https://docs.google.com/presentation/d/1IxwfL8zZnq6hn6KFuYm8vm9uM8Zq4B8d/edit#slide=id.p1) [[video]](https://www.youtube.com/watch?v=5ujaTVx-AkI).

</details>

<details markdown="1"><summary><b>2023</b></summary>

- **[Nov 2023]** :scroll: TREC RAG 2024 has been accepted and will be conducted as a shared task in TREC 2024.
- **[Nov 2023]** :newspaper: My internship work at Google is out on [Arxiv](https://arxiv.org/abs/2311.05800), dataset is released [here](https://github.com/google-research-datasets/swim-ir).
- **[Jul 2023]** :computer: I will be attending the SIGIR 2023 virtual conference being held in Taipei, Taiwan! Say hi to me (virtually)!
- **[Jul 2023]** :cityscape: I will be attending the ACL 2023 in-person conference being held in Toronto, Canada! Say hi to me!
- **[Jun 2023]** :page_facing_up: The Domain Adaptation Paper has been accepted in [ReNeuIR 2023 Workshop](https://reneuir.org/) to be held jointly with SIGIR 2023!
- **[Jun 2023]** :page_facing_up: The SPRINT Toolkit Paper has been accepted in [SIGIR 2023 Resource Track](https://sigir.org/sigir2023/)!
- **[May 2023]** :page_facing_up: The MIRACL Paper has been accepted in [TACL 2023](https://transacl.org/index.php/tacl)!
- **[May 2023]** :page_facing_up: The Evaluating Embedding API Paper has been accepted in [ACL 2023 Industry Track](https://2023.aclweb.org/calls/industry_track/)!

</details>

<details markdown="1"><summary><b>2022</b></summary>

- **[Sep 2022]** :trophy: The MIRACL Challenge was accepted in [WSDM Cup 2023](https://www.wsdm-conference.org/2023/program/wsdm-cup). The Challenge is now live and looking for participants.
- **[Aug 2022]** :briefcase: I started my Fall Internship at the Language Team in [Google Research](https://research.google/teams/language/) with Daniel Cer and Jianmo Ni.

</details>

<details markdown="1"><summary><b>2021</b></summary>

- **[Mar 2021]** :page_facing_up: Augmented SBERT got accepted as a long paper at NAACL 2021! [PDF](https://aclanthology.org/2021.naacl-main.28/)
- **[Feb 2021]** :globe_with_meridians: Designed and attended The First ELLIS NLP 2021 Workshop. [Website](https://sites.google.com/view/ellisnlp2021/organization?authuser=0#h.jhoas58vwjmn)
- **[Jan 2021]** :globe_with_meridians: Designed the Second 2021 SustaiNLP Workshop Website. [Website](https://sites.google.com/view/sustainlp2021)

</details>

<details markdown="1"><summary><b>2020</b></summary>

- **[Nov 2020]** :no_entry_sign: [Cancelled (COVID-19)] Selected to speak at PyCon Italia 2020: "Extract or Replace Keywords in sentences 28x times faster than Regex - FlashText". [Abstract](https://pycon.it/en/talk/extract-or-replace-keywords-in-sentences-28x-times-faster-than-regex-flashtexttm) [YouTube](https://www.youtube.com/watch?v=s8WP79QU1zw) [Github](https://github.com/vi3k6i5/flashtext)
- **[Jul 2020]** :trophy: ArgumenText won 4th place amongst 3000+ startups in Nordbayerischen Businessplan. [Link](https://www.baystartup.de/startupdate/aus-den-wettbewerben/sieger-der-phase-2-im-businessplan-wettbewerb-nordbayern-2020)
- **[Jul 2020]** :computer: I attended the Association for Computational Linguistics (ACL) 2020 virtual conference.

</details>
