---
title: "Graphs in Motion: Learning from the Pulse of Dynamical Systems"
collection: talks
type: "Talk"
permalink: /talks/graphs-in-motion-ethz
venue: "VIScon Symposium 2025"
date: 2025-10-11
location: "ETH HG Zürich, Switzerland"
excerpt: "I discuss how to improve long range spatio-temporal propagation in dynamic graphs via non-dissipative propagation."
---


## What I discussed

Many real-world systems, from climate and weather patterns to transportation networks, social platforms, and biological systems, are inherently dynamic. They evolve. Their structure changes, their entities shift, and their interactions unfold across both space and time. To model them effectively, we need machine learning methods that can reason over **dynamic graphs**, where both nodes and edges are in flux.

While [Graph Neural Networks (GNNs)](https://arxiv.org/pdf/1912.09893)  have become a cornerstone for learning on structured data, most approaches rely on localized message passing, aggregating information primarly from immediate neighbors. This restricts their capacity to capture **long-range dependencies** (interactions between distant nodes), which are crucial in most of the above mentioned domains. Recent work has shown that GNNs can be interpreted as discretizations of continuous dynamic processes (see [Graph-ODE](https://arxiv.org/pdf/1911.07532) and [ADGN](https://arxiv.org/pdf/2210.09789)), offering a framework for better modeling how information diffuses through a graph over time.

When dealing with graphs that evolve over time, we encounter unique challenges and opportunities. In such graphs, nodes, edges, and features can change continuously, making it essential (but difficult) to capture both **spatial and temporal dependencies**. A key challenge is that relevant information may be separated by large spatial distances and long temporal intervals, complicating the learning of effective representations. Because information in dynamic graphs is distributed across both time and structure, modeling complex patterns requires reasoning jointly over these dimensions. To capture relevant temporal patterns, dynamic GNNs must adaptively retain or dissipate information, selectively propagating crucial signals through the graph while discarding less relevant ones.

In this talk, I will present a new framework for learning on dynamic graphs that pushes dynamic GNNs beyond their current boundaries, including:

- A methodology inspired by dynamical systems theory that improves dynamic GNNs’ capacity to model long-range spatio-temporal dependencies in **Discrete-Time Dynamic Graphs** (D-TDG);
- **Novel benchmarks** designed to test models on challenging, long-range spatio-temporal tasks.

By capturing these complex interactions more effectively, this framework opens new avenues for reasoning about and predicting the behavior of evolving systems, enabling advances across scientific, technological, and social domains. 

## Key Contributions

The contributions of this work span methodological, theoretical, and empirical dimensions. On the methodological side, new architectures that address the core challenges of dynamic graphs from complementary perspectives. A central idea underlying these models is the ability to adaptively learn the degree of dissipation required for a given task, while also capturing higher-order patterns and interactions in the diffusion process. To rigorously evaluate these methods, we construct new benchmark datasets specifically designed to test a model’s ability to handle long-range spatio-temporal dependencies, thus filling an important gap in current research practice. From a theoretical standpoint, we provide an analysis of the proposed models, offering insights into their representational capacity and effectiveness.

The outcomes of this work are intended not only to advance the theoretical understanding of dynamic graph learning but also to provide practical improvements in domains where long-range spatio-temporal reasoning is of critical importance.
