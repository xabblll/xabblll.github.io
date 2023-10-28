---
layout: post
author: Xabblll
image: /assets/images/solitude/thumbSolitude1.png
title: Meet Solitude Engine
description: My own engine with C++ and OpenGL
tags: devlog, solitude
---

## Intro

<br>

### Breaking up with Unity

After decade of working in Unity, making a career as a technical artist and later as graphics programmer,
I decided to take a break from office job, and start making own indie game.
This was in September, I'm sure if you follow gamedev industry news, you already know what happen.

So basically Unity dropped terrible licence changes. First versions were poorly composed as well.
All industry was on fire. Indie devs mostly because they can't understand bad written post,
and mobile F2P studios because price changes will hurt them badly. Later Unity tried to fix situation, by
posting new, more thoughtfully placed changes, and thankfully fired John R, who was proposing same per-install
monetization model while working at EA. But damage was already done.


### Why not Unreal Engine, Godot or other 3rd party engines?

Unreal is very good, but quite hard to alter, even with publicly available source code. 
Also some of new features aren't ready for production in my opinion. Lumen is performance heavy, produces lots
of visual artefacts even on highest settings, and I wasn't enjoying fighting with engine to make it more or less
UE4 with Nanite experience.

Godot is cool too, despite some missing features. I got indie gamedev vibes from it for sure.

After trying these and some other less heard engines, an idea of making my own engine struck me.
If I'm going to take my time learning new programming language and engine architecture, why not to try
building my own? 

### Benefits of writing own engine

Firstly to learn
- C/C++
- Low-level rendering stuff
- Architecture of game engines

I think these alone will make my attempts worth it despite final result.

<br>

And secondly to use in own projects
- Total control of how things are done and what is in roadmap
- Independence from companies
- Potentially faster development of tools and games

<br><br>

So,

# {{ page.title }}

<br>

## devlog[0]

<br>

### IDE and Project setup

I started with a chose of IDE. For Unity I used Jetbrains Rider for last couple of years, and Microsoft Visual Studio
before. Rider is awesome, so I downloaded CLion. Most things were ok, did some hello world programs and moved forward to
CMake setup.

CMake is awful experience in my opinion. Unintuitive syntax, poor documentation, at least for beginners.

By that time I was trying to build an app with [SDL library](https://github.com/libsdl-org/SDL). It's popular framework to take care of OS windows, inputs,
sound, and it even can do some basic 2D render. Also it is super cross-platform, it can even run on old Nokia N-Gage!
But "standard" way of using it, is to provide prebuilt DLL, and I was against it, because it can be stripped if linked
statically, also static linking is easier to work with, and have zero performance cost compared to dynamic linking.

After couple of days fighting with CMake, SDL3 was linked successfully. I found about [Dear ImGui](https://github.com/ocornut/imgui/tree/docking) 
library for user interface, tried it, and begin integration in project.

Another day of pleasant CMake experience and it worked together with SDL.

While learning CMake and how C/C++ linking work, I found very good [Youtube series about C++](https://youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb&si=lsfGFUIEckNWdAir)
and Game engines from Cherno. He also recommends Dear ImGui for game engine UI and uses it with his own engine Hazel.
Also he showed his project setup with Premake and it was much easier that CMake.

I was having trouble with CMake again, while trying to link modern OpenGL extension library, so I switched to Premake and
Visual Studio and was done in no time. Highly recommend it, it's easy, it can generate VS/Xcode/GNU make files and even 
CMake with some extensions. Visual Studio with Resharper C++ is more convenient on Windows that CLion, but it's more 
personal preference, maybe I'll give CLion or something else a shot later, but for now it is Visual Studio with Premake for me,
and I recommend it for beginners.


### OpenGL

time to choose graphical API.

For modern engine you want to use Vulkan, DirectX12 and Metal, so why OpenGL?

Mainly because it is easier to start. Did you saw [sample code](https://github.com/SaschaWillems/Vulkan/blob/master/examples/triangle/triangle.cpp)
for drawing a triangle with VK? Same thing in OpenGL can be down in 5-20 lines of code, depending of what profile you use.
DirectX12 and Metal are better documented and have better debug tools, compared to Vulkan, but still quite deep for start.
Surely I'll switch API later, but modern OpenGL is absolutely fine for now. Also it will good to compare wrapper for them after.

Also take a look at godlike [OpenGL tutorials](https://learnopengl.com/)


### Editor UI

ImGui samples are awesome, also **Docking** branch makes it behave just like Unity, Unreal and other modular window apps.
Still I make some changes so it work even more similar to them
- big second main menu for game state control other toolbar buttons
- last window can't be undocked
- upon undocking window area collapsed so no hole left

Changes I made are quite hacky and need to be revisited later.

ImGuiRender implementation was slightly modified, basically integrated in my render loop, but render state setup and other GL calls are still
there. ImGuiSDL implementation was modified to work with my window abstraction

Scene View window was most tough. I decided to now use custom render target and just draw inside window with Scissor and Viewport Rect, 
and after, I render ImGui without alpha and background, so Editor's Scene View is very close to final game viewport, without
render target blit overhead. But I almost sure, I will replace my method with render to UI image later anyway, we will see.


### Render

Modern OpenGL extensions are done using [glad](https://github.com/Dav1dde/glad)

For now I implemented
- Shader
- Uniforms*
- Material*
- Texture 2D
- GraphicsBuffer for Index and Vertex buffers
- Vertex Layout
- Mesh

_* partially made and not fully in use_

with these basic elements I was able to draw 2D meshes in my viewports
![2D Meshes](/assets/images/solitude/solitude-devlog0-img1.jpeg "2D Meshes")

after that I added some Math structs and methods for them
- Vector2/3/4
- Matrix3x3
- Matrix4x4
- Quaternion 

and with some uniform bindings went 3D
![3D Meshes](/assets/images/solitude/solitude-devlog0-img2.jpeg "3D Meshes")

For image file loading I use [stb image](https://github.com/nothings/stb)
For model file loading I use [Assimp](https://github.com/assimp/assimp)


### Entity and Components

First I was thinking about ECS, but I'm not sure where to use it. Complex systems can be done as components,
just like Particles, where instead of using 1000 game entities, you use 1 that handles 1000 particles. ECS maybe good for strategy,
factory and other games with crazy amount of units and stuff, but for all else this architecture can be excessive and 
performance heavy. So for now I use most basic approach - Objects with Components.

{% highlight c++ %}
class Entity : public Object
{
public:
    uint64                      ID;
    Array<Component*>           Components;
    
    Entity(const uint64 id);
    void                        Destroy();

    template <typename T> void  AddComponent(T* component);
    template <typename T> T*    GetComponent(const uint32 componentID);
};
{% endhighlight %}

Only 2 components are available right now

#### Transform

- Vector3 of position, scale, euler rotation
- cached Local TRS Matrix4x4
- cached Local to World Matrix4x4
- parent
- children

#### Renderer

- pointer to local to World Matrix4x4 from Transform Component
- Mesh
- Material (just Shader for now)

Current state

![Models and Transforms](/assets/images/solitude/solitude-devlog0-img3.jpg "Models and Transforms")


## What's next?

Refactor and tech debt first. Many things are in very draft stage, need to clean them before moving forward.
Also need to create my own Log system, Assert system, better abstraction for Editor UI

After that I'll do
- Missing basic rendering features like Materials, Framebuffers
- Event system


<br>

## Conclusion

Compared to C#, C/C++ syntax is a bit tough, headers and specification of ".", "->", "::" in my opinion is 
redundant, std library and modern C++ features mostly unreadable and have additional performance cost, so better to
not use them by default. Project setup quite unintuitive for beginners.

In other hand low level control is awesome, syntax is very similar to C#, ability to use macros is godlike, just don't
overuse them.

Of course I don't have much to show right now, but I think for first month of learning new language and
game engines my progress is more than fine.

Also I downloaded some other engine source code repos, to be able to look how they did things themself. It was very
helpful, to compare common approaches.

Research repos I use
- [Doom3](https://github.com/id-Software/DOOM-3-BFG)
- [UE5](https://docs.unrealengine.com/5.3/en-US/downloading-unreal-engine-source-code/)
- [Hazel](https://github.com/TheCherno/Hazel)
- [Godot](https://github.com/godotengine/godot)

<br>

Thanks for reading :*
