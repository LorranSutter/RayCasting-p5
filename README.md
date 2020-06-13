# Raycasting-p5
Ray casting with reflections implementation using p5js inspired by [Daniel Shiffman](https://github.com/shiffman)

---

<div align="center">

![Preview](../assets/preview.gif?raw=true)

</div>


## :runner: How to run

Just open index.html file in browser.

## :bulb: What is Ray Casting?

Ray casting is a famous approach that aims to detect intersections between casted rays and surfaces. It is used to solve problems in Computer Graphics and Computational Geometry. An well known problem, named [Ray Tracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics)), employs ray casting to generate images by tracing the light path in a scene. Also it is possible to provide more sophisticated images using physical phenomena such as reflection and refraction.

In this code, ray casting was implemented and extendend using simple reflection. As it is possible to see in the equation and image below, it aims to define the reflected ray (<b>R</b>) from the incident ray (<b>I</b>) through the normal of the surface (<b>N</b>).

<div align="center">

![formula](https://render.githubusercontent.com/render/math?math=\vec{R}=\vec{I}-2(\vec{N}\cdot%20\vec{I})\vec{N})

<img src='https://res.cloudinary.com/lorransutter/image/upload/v1588886557/Reflection.svg' height=200>

</div>

## :book: Resources
- [The Coding Train - 2D Raycasting](https://www.youtube.com/watch?v=TOEi6T2mtHo) - video of 2D raycasting implementation
- [Reflection](https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-shading/reflection-refraction-fresnel) - understanding reflection

## :computer: Technologies
- [P5js](https://p5js.org/) - drawing library

## :cookie: Credits
- [Daniel Shiffman](https://github.com/shiffman) - provider of The Coding Train
