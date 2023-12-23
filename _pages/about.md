---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me

I am currently a Ph.D. student at the SICE from the University of Electronic Science and Technology of China (UESTC), supervised by [Prof. Shuaicheng Liu](http://www.liushuaicheng.org/) and [Prof. Bing Zeng](https://www.researchgate.net/profile/Bing-Zeng-4). I received my Master's degree at École Nationale Supérieure des Télécommunications de Bretagne, supervised by [Prof. Laurent Brisson](http://www.laurent-brisson.fr/). Before that, I got my Bachelor's degree from the University of Electronic Science and Technology of China (UESTC). My research interests include image alignment, and generative model.

# News

- *2023.12*: &nbsp; One paper is accepted to IJCV.
- *2023.07*: &nbsp; One paper is accepted to ICCV 2023.

# Publications

**2023**

<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2023_GyroFlowPlus/GyroFlowPlus.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**GyroFlow+: Gyroscope-Guided Unsupervised Deep Homography and Optical Flow Learning**

*International Journal of Computer Vision (**IJCV**)*

**Haipeng Li**, Kunming Luo, Bing Zeng, Shuaicheng Liu

[[Paper](https://arxiv.org/abs/2301.10018)] \| [Code: [Pytorch](https://github.com/lhaippp/GyroFlowPlus)] \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>


# Education

- *2022.08 - Present*, Ph.D. candidate, The Chinese University of Hong Kong (CUHK)
- *2019.09 - 2022.06*, M.Sc., University of Electronic Science and Technology of China (UESTC)
- *2015.09 - 2019.06*, B.E., Sichuan University (SCU)

# Experience

- *2018.12 - 2022.06*, Intern, Megvii Research

<!-- # Academic Services
- **Journals:** Signal Processing Letters (SPL); Computer Graphics Fourm (CGF)
- **Conferences:** AAAI; Pacific Graphics (PG); International Conference on Intelligent Robots and Systems (IROS) -->

# Projects

- *2018.12 - 2019.07, Driver Monitor System (DMS)*

Design a light-weighted end-to-end network running on an onboard chip to detect smoking, phoning, and drinking in driving.

<div>
       <video src='collections/DMS/DMS_smoke_demo1.mp4' controls="controls" width="30%" height="200px"></video>
       <video src='collections/DMS/DMS_smoke_demo2.mp4' controls="controls" width="30%" height="200px"></video>
       <video src='collections/DMS/DMS_phone_demo.mp4' controls="controls" width="30%" height="200px"></video>
</div>

- *2019.07 - 2020.03, NIO Gaze Estimation*

Design a light-weighted end-to-end network running on an onboard chip to estimate gaze and detect eye closure and occlusion at the same time.

<div>
       <video src='collections/Gaze/gaze_demo.mp4' controls="controls" width="30%" height="200px"></video>
</div>