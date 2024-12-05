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

- *2024.07*: &nbsp; One paper is accepted to ECCV 2024.
- *2024.06*: &nbsp; One paper is accepted to TCSVT.
- *2024.03*: &nbsp; One paper is accepted to TIP.
- *2024.02*: &nbsp; One paper is accepted to ToG.
- *2024.02*: &nbsp; Two papers are accepted to CVPR 2024.

# Publications


**2024**
<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_PointGPT/PointGPT.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**PointGPT: Boosting 3D Point Cloud Registration using Generative Point-Cloud Pairs for Training**

*IEEE/CVF European Conference on Computer Vision (**ECCV**), 2024*

Suyi Chen, Hao Xu, **Haipeng Li**, Kunming Luo, Guanghui Liu, Chi-Wing Fu, Ping Tan, Shuaicheng Liu

Paper \| Video \| Code \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_CodingHomo/CodingHomo.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**CodingHomo: Bootstrapping Deep Homography
with Video Coding**

*IEEE Transactions on Circuits and Systems for Video Technology (**TCSVT**)*

Yike Liu, **Haipeng Li**, Shuaicheng Liu, Bing Zeng

[Paper]() \| [Code]() \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_YOHO/YOHO.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Single-Image-Based Deep Learning for Segmentation of Early Esophageal Cancer Lesions**

*IEEE Transactions on Image Processing (**TIP**)*

**Haipeng Li**\*(equal contribution), Dingrui Liu\*, Yu Zeng, Shuaicheng Liu, Tao Gan, Nini Rao, Jinlin Yang, Bing Zeng

[Paper](https://ieeexplore.ieee.org/document/10480373/) \| [Code](https://github.com/lhaippp/YOHO) \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_DMHomo/DMHomo.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**DMHomo: Learning Homography with Diffusion Models**

*ACM Transactions on Graphics (**ToG**), Present at SIGGRAPH 2024*

**Haipeng Li**, Hai Jiang, Ao Luo, Ping Tan, Haoqiang Fan, Bing Zeng, Shuaicheng Liu

[[Paper](https://dl.acm.org/doi/10.1145/3652207)] \| Video \| [Code: [Pytorch](https://github.com/lhaippp/DMHomo)] \| [BibTex](collections/2024_DMHomo/DMHomo.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_RecDiffusion/RecDiffusion.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**RecDiffusion: Rectangling for Image Stitching with Diffusion Models**

*IEEE/CVF Computer Vision and Pattern Recognition Conference (**CVPR**), 2024*

Tianhao Zhou\*, **Haipeng Li**\*(equal contribution), Ziyi Wang, Ao Luo, Chen-Lin Zhang, Jiajun Li, Bing Zeng, Shuaicheng Liu

[Paper](https://arxiv.org/abs/2403.19164) \| Video \| [Code](https://github.com/lhaippp/RecDiffusion) \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2024_HandBooster/HandBooster.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**HandBooster: Boosting 3D Hand-Mesh Reconstruction by Conditional Synthesis and Sampling of Hand-Object Interactions**

*IEEE/CVF Computer Vision and Pattern Recognition Conference (**CVPR**), 2024*

Hao Xu, **Haipeng Li**, Yinqiao Wang, Shuaicheng Liu, Chi-Wing Fu

[Paper](https://arxiv.org/abs/2403.18575) \| Video \| [Code](https://github.com/hxwork/HandBooster_Pytorch) \| BibTex <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

<!-- ######################################################### -->

<div class='paper-box'><div class='paper-box-image'><img src='collections/2023_GyroFlowPlus/GyroFlowPlus.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**GyroFlow+: Gyroscope-Guided Unsupervised Deep Homography and Optical Flow Learning**

*International Journal of Computer Vision (**IJCV**)*

**Haipeng Li**, Kunming Luo, Bing Zeng, Shuaicheng Liu

[[Paper](https://link.springer.com/article/10.1007/s11263-023-01978-5)] \| [Code: [Pytorch](https://github.com/lhaippp/GyroFlowPlus)] \| [BibTex](collections/2023_GyroFlowPlus/GyroFlowPlus.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

**2023**

<div class='paper-box'><div class='paper-box-image'><img src='collections/2023_RSHomo/RSHomo.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Supervised Homography Learning with Realistic Dataset Generation**

*International Conference on Computer Vision (**ICCV**), 2023*

Hai Jiang\*, **Haipeng Li**\*(equal contribution), Songchen Han, Haoqiang Fan, Bing Zeng, Shuaicheng Liu

[[Paper](https://openaccess.thecvf.com/content/ICCV2023/papers/Jiang_Supervised_Homography_Learning_with_Realistic_Dataset_Generation_ICCV_2023_paper.pdf)] \| [Code: [Pytorch](https://github.com/JianghaiSCU/RealSH)] \| [BibTex](collections/2023_RSHomo/RSHomo.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><img src='collections/2023_LBHomo/LBHomo.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Semi-supervised Deep Large-baseline Homography Estimation with Progressive Equivalence Constraint**

Thirty-Seventh AAAI Conference on Artificial Intelligence (**AAAI**), 2023.

Hai Jiang\*, **Haipeng Li**\*(equal contribution), Yuhang Lu, Songchen Han, Shuaicheng Liu

[[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/25183)] \| [Code: [Pytorch](https://github.com/megvii-research/LBHomo)] \| [BibTex](collections/2023_LBHomo/LBHomo.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

**2021**

<div class='paper-box'><div class='paper-box-image'><img src='collections/2021_GyroFlow/GyroFlow.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**GyroFlow: Gyroscope-Guided Unsupervised Optical Flow Learning**

International Conference on Computer Vision (**ICCV**), 2021.

**Haipeng Li**, Kunming Luo, Shuaicheng Liu

[[Paper](https://openaccess.thecvf.com/content/ICCV2021/html/Li_GyroFlow_Gyroscope-Guided_Unsupervised_Optical_Flow_Learning_ICCV_2021_paper.html)] \| [Code: [Pytorch](https://github.com/lhaippp/GyroFlow-PyTorch)] \| [BibTex](collections/2021_GyroFlow/GyroFlow.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><img src='collections/2021_DeepOIS/DeepOIS.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**DeepOIS: Gyroscope-Guided Deep Optical Image Stabilizer Compensation**

IEEE Transactions on Circuits and Systems for Video Technology (**TCSVT**)

Shuaicheng Liu, **Haipeng Li**, Zhengning Wang, Jue Wang, Shuyuan Zhu, Bing Zeng

[[Paper](https://ieeexplore.ieee.org/document/9509028)] \| [Code: [Pytorch](https://github.com/lhaippp/DeepOIS)] \| [BibTex](collections/2021_DeepOIS/DeepOIS.md) <strong><span class='show_paper_citations' data='3WQTKocAAAAJ:WF5omc3nYNoC'></span></strong>
</div>
</div>


# Education

- *2022.09 - Present*, Ph.D. candidate, University of Electronic Science and Technology of China (UESTC)
- *2017.07 - 2020.03*, M.Sc., École Nationale Supérieure des Télécommunications de Bretagne
- *2013.09 - 2017.06*, B.E., University of Electronic Science and Technology of China (UESTC)

# Experience

- *2020.06 - 2022.09*, Researcher, Megvii Research 

# Academic Services
- **Journals:** TPAMI, TIP, TCSVT
- **Conferences:** CVPR2024/2025, ICLR2025, AAAI2025, MM2024

<!-- # Projects

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
</div> -->
