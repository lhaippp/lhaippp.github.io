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

I am a second-year Ph.D. student at the CSE Department, the Chinese University of Hong Kong (CUHK), supervised by [Prof. Chi-Wing FU, Philip](https://www.cse.cuhk.edu.hk/~cwfu/). I received my Master's degree at the School of Information and Communication Engineering from the University of Electronic Science and Technology of China (UESTC), supervised by [Prof. Guanghui LIU](https://scholar.google.com.hk/citations?user=AjfD95EAAAAJ&hl=zh-CN&oi=ao) and [Prof. Shuaicheng LIU](http://www.liushuaicheng.org/). Before that, I got my Bachelor's degree from Sichuan University (SCU). My research interests include 3D registration, 3D point cloud representation, and 3D hand mesh reconstruction.

# News

- *2023.12*: &nbsp; One paper is accepted to AAAI 2024.
- *2023.07*: &nbsp; One paper is accepted to ICCV 2023.
- *2023.03*: &nbsp; One paper is accepted to CVPR 2023.

# Publications

**2023**

<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_SiMA/SiMA.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**SiMA-Hand: Boosting 3D Hand-Mesh Reconstruction by Single-to-Multi-view Adaptation**

*The 38th Annual AAAI Conference on Artificial Intelligence (**AAAI**), 2024*

Yinqiao Wang, **Hao Xu**, Pheng-Ann Heng, Chi-Wing Fu

Paper \| Video \| Code \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>



<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2023_SIRA/SIRA.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**SIRA-PCR: Sim-to-Real Adaptation for 3D Point Cloud Registration**

*IEEE/CVF International Conference on Computer Vision (**ICCV**), 2023*

Suyi Chen\*, **Hao Xu**\*, Ru Li, Guanghui Liu, Chi-Wing Fu, Shuaicheng Liu (\* Joint first author)

[Paper](https://openaccess.thecvf.com/content/ICCV2023/papers/Chen_SIRA-PCR_Sim-to-Real_Adaptation_for_3D_Point_Cloud_Registration_ICCV_2023_paper.pdf) \| [Video](https://youtu.be/TJfONIn5p_k) \| [Code](https://github.com/Chen-Suyi/SIRA_Pytorch) \| [BibTex](collections/2023_SIRA/SIRA.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>



<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2023_H2ONet/H2ONet.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**H2ONet: Hand-Occlusion-and-Orientation-aware Network for Real-time 3D Hand Mesh Reconstruction**

*IEEE/CVF Computer Vision and Pattern Recognition Conference (**CVPR**), 2023*

**Hao Xu**, Tianyu Wang, Xiao Tang, Chi-Wing Fu

[Paper](https://openaccess.thecvf.com/content/CVPR2023/papers/Xu_H2ONet_Hand-Occlusion-and-Orientation-Aware_Network_for_Real-Time_3D_Hand_Mesh_Reconstruction_CVPR_2023_paper.pdf) \| [Video](https://www.youtube.com/watch?v=JN-G8ePC3Mk) \| [Code](https://github.com/hxwork/H2ONet_Pytorch) \| [BibTex](collections/2023_H2ONet/H2ONet.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>



**2022**

<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2022_FINet/FINet.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**FINet: Dual Branches Feature Interaction for Partial-to-Partial Point Cloud Registration**

<!-- *Proceedings of the AAAI Conference on Artificial Intelligence (**AAAI**), 2022* -->
*The 36th Annual AAAI Conference on Artificial Intelligence (**AAAI**), 2022*

**Hao Xu**, Nianjin Ye, Guanghui Liu, Bing Zeng, Shuaicheng Liu

[Paper](https://ojs.aaai.org/index.php/AAAI/article/download/20189/19948) \| [Video](https://www.youtube.com/watch?v=XDmE9iSx9WM) \| [Code](https://github.com/hxwork/FINet_Pytorch) \| [BibTex](collections/2022_FINet/FINet.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>



**2021**

<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2021_OMNet/OMNet.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**OMNet: Learning Overlapping Mask for Partial-to-Partial Point Cloud Registration**

*IEEE/CVF International Conference on Computer Vision (**ICCV**), 2021*

**Hao Xu**, Shuaicheng Liu, Guangfu Wang, Guanghui Liu, Bing Zeng

[Paper](https://openaccess.thecvf.com/content/ICCV2021/papers/Xu_OMNet_Learning_Overlapping_Mask_for_Partial-to-Partial_Point_Cloud_Registration_ICCV_2021_paper.pdf) \| [Video](https://www.youtube.com/watch?v=u2lTKsom8oU) \| [Code](https://github.com/hxwork/OMNet_Pytorch) \| [BibTex](collections/2021_OMNet/OMNet.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
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
