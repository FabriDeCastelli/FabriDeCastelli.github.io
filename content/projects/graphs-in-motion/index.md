---
title: "Graphs in Motion: Learning from the Pulse of Dynamic Systems"
date: 2025-07-02
tags: ["Dynamic Systems", "Machine Learning", "Graph Neural Networks", "D-TDG", ]
author: "Fabrizio De Castelli"
description: "A framework for advancing learning on dynamic graphs with long-range spatiotemporal dependencies."
summary: "How do we make sense of systems that constantly change, like cells, traffic, or social networks? These are best modeled as dynamic graphs, where both the connections and the entities themselves evolve over time. However, most ML methods still reduce these systems to static snapshots, missing the temporal complexity at the core of their behaviour. In this project, I’ll break down a new approach that enables reasoning over long-range, time-evolving graph structures." 
cover:
    image: "graphs-in-motion-logo.png"
    alt: "Dynamic Neural Networks"
    relative: true
showToc: true
disableAnchoredHeadings: false

---

## Introduction

Many real-world systems (transportation networks, social platforms, biological systems and communication infrastructures) are not static. They evolve. Their structure changes, their entities shift, and their interactions unfold across both space and time. To model them effectively, we need machine learning methods that can reason over **dynamic graphs**, where both nodes and edges are in flux.

While Graph Neural Networks (GNNs) have become a cornerstone for learning on structured data, most approaches reduce dynamic systems to static snapshots. This simplification overlooks critical **long-range spatiotemporal dependencies**, limiting our ability to model delayed effects, indirect influences, or global patterns.

In this talk, I will present a new framework for learning on dynamic graphs that pushes GNNs beyond their current boundaries, including:

- **Novel benchmarks** designed to test models on challenging, long-range temporal and spatial tasks
- A methodology inspired by dynamical systems theory that improves GNNs’ capacity to model long-range spatiotemporal dependencies in **Discrete-Time Dynamic Graphs** (D-TDG)

This framework is broadly applicable to systems in which temporal evolution is fundamental, including domains such as transportation, digital communication, and social dynamics. Whether the task involves modeling cascading failures, monitoring evolving influence patterns, or forecasting structural changes, the ability to capture complex, long-range interactions is essential. 

## Key Contributions

- **Benchmarking Dynamic Graphs**: We introduce a suite of benchmarks that evaluate models on their ability to capture long-range dependencies in dynamic graphs. These benchmarks are designed to challenge existing methods and highlight the limitations of current approaches.
- **Dynamical Systems-Inspired Methodology**: We propose a new methodology that leverages concepts from dynamical systems theory to enhance GNNs' ability to model long-range spatiotemporal dependencies. This approach allows models to better capture the temporal evolution of graph structures and their interactions.
- **Empirical Validation**: We validate our approach on a range of dynamic graph datasets, demonstrating significant improvements over existing methods in capturing long-range dependencies and improving predictive performance.
