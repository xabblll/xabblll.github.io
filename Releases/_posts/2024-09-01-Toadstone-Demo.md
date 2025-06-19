---
layout: post
author: Xabblll
permalink: toadstone-demo
image: /assets/images/jab-500.png
description: Our Game Jam entry. Short Demo game about frog
---


# Toadstone
## Demo


![Screen1](https://img.itch.zone/aW1hZ2UvMjg0Mzk4My8xNzE1ODI1Ny5wbmc=/original/BKulfW.png "Screenshot 1")
![Screen1](https://img.itch.zone/aW1hZ2UvMjg0Mzk4My8xNzE1ODI3NS5wbmc=/original/G0TVTz.png "Screenshot 2")
![Screen1](https://img.itch.zone/aW1hZ2UvMjg0Mzk4My8xNzE1ODI4NS5wbmc=/original/TE%2F4Yy.png "Screenshot 3")


<div style="margin: 4rem">
<a href="https://lachuga.itch.io/toadstone" 
style="
background-color: #000;padding: 2rem;border-radius:1rem;
font-size: 2rem;
font-weight: bold;
text-decoration:none;
">
Play on itch.io</a></div>


## Dev Notes

This short game was created for Pirate GameJam 15. The total development time was about 10 days, plus 3 initial days spent brainstorming ideas.
The game was made using the Unity engine.

---

### Render

The game runs in browsers. I’m not very experienced with web builds, but compared to other entries, ours had one of the smallest build/load sizes, while still featuring some of the most advanced 3D graphics—mainly thanks to my custom Scriptable Render Pipeline (SRP).

For example, an empty Unity WebGL build using URP weighs about 12MB, while an empty project with my SRP is around 8MB. Graphically, my renderer is fairly simple, but features like PCF shadows, ACES tonemapping, and bloom help it look quite decent.

Most of the game is rendered using a single PBR-lit shader, with exceptions for the frog character, transparent glass, and particles.

---

### Assets

We created almost all assets by hand. Fonts and some VFX sounds use freely available open assets.

The game level was primarily built in Blender, then finalized in Unity. For some reason, I decided to model most of the environment as unique meshes. This allowed for more flexibility in shapes, but in hindsight, it was more time-consuming than necessary. A better approach would have been using modular assets and adding unique details later.

Most environmental assets share one of three materials, with AO baked into vertex colors (though not all models use this).

The lovely frog character and his animations were made by my friend **Pag1iaccio**, along with most of the VFX assets.

The sound effects were created from recorded samples of me slapping my hands on ceramic tiles and similar improvised methods.
The music was composed in Ableton during the final hours of the jam. As a result, it feels rushed, and probably doesn’t fit the game as well as it could have.

---

### Code

Nothing too special here, but I wasted some time building a custom player controller, spline system, and a complex “Light Swapper” system.
I had planned for more levels, which is why I went with a more scalable approach.

The controller supports my interaction system and moving platforms. Combined with the Light Swapper, we were hoping to create a "mine cart level". The Light Swapper could handle multiple colored lights and their combinations. For example:

* In shadow → Obj1
* Lit by red light → Obj2
* Lit by green light → Obj3
* Lit by yellow (red + green) → Obj4

Sadly, all of that ended up unused.

---

### Great Camerawork!

At some point, we decided to lock the camera and use automatic transitions between views.
I used the Cinemachine package to set up automatic camera rigs and wrote a custom trigger system, but it turned out to be quite challenging.

Cinemachine isn’t ideal for highly dynamic systems. For example, trying to move the camera smoothly around the player based on position is almost impossible to get right.
Even worse, the player’s input depends on the camera angle—so if the camera suddenly shifts or moves continuously, the controls can become very frustrating.
In tight corridors, the camera would also clip through walls, which hurt the overall polish.

Despite these issues, most players enjoyed the result, and I think the locked camera angles added a cinematic feel.
It also had a practical benefit: since players can’t look around freely, we only had to design the visible side of each level section.

For the full version of the game, though, this is one of the core systems that would need to be rewritten into a fully custom solution.

---

### Why the Game Is So Short

We originally planned to make around 6 levels, with the first introducing the frog’s journey and the final one being a boss fight. The three rooms in the demo represent about half of the original second level.

Unfortunately, our friend who offered to help with level design became busy and dropped out right after the jam started. That left most of the level design to me, with help from my girlfriend (**z1s**).

We only really figured out how we wanted the levels to feel and play in the last couple of days. With even one or two extra days, the game could have been twice as long in terms of gameplay.

---

### Final Thoughts

Despite how short it is, I’m really happy with the finished demo. It helped me re-learn fast development, and I enjoyed working with a team again.

Right after submissions closed, I was excited to start working on a full version with better graphics, a proper story and lore—maybe even a 2-hour game for Steam.

But a few things made me put the project on hold:

---

#### Why I Put the Game on Ice

1. Visual Style Search
   I want the final game to be polished, beautiful, and stylized in 3D. But the mechanics require dark environments, which are tricky to make look appealing in screenshots. It's doable, but needs a lot of work.

2. Unclear Lore/Story
   The current story probably isn’t strong enough. If I want something in the spirit of *Limbo* or *Inside*, I’ll need to level it up significantly.

3. Pirate Software & Jam Organization (Minor but Frustrating)

    * About 2,500 submissions were made.
    * The judging stage was closed, unlike GMTK’s more transparent community + jury voting.
    * Very few (and seemingly unqualified) judges were assigned to a huge number of games. Some games were played by zero or one judge, with comments like “I can’t understand” even when the game had full instructions on the itch.io page.
    * The judging deadline was extended, which is fair, but it looks like they picked 50–200 games at random, played them for a week, and then had Thor show the “top 10.”
    * I don’t know Thor well—mostly from inspirational shorts. I watched his final stream, hoping he’d give a quick overview of the top \~200, but instead he coded in Java for 9 hours, then showed 10 games, making nearly identical comments like *“I’ve never seen anything like this!”* about each one. It felt… random and frustrating.
    * I don’t want to discredit the top 10. They may fully deserve the spotlight. But the process was handled poorly, and I left very disappointed. Never meet your heroes, I guess.

---

I hope to return to this project someday. But for now, I’m working on other ideas and not ready to revisit this one just yet.







