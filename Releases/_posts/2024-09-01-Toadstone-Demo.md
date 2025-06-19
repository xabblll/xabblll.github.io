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
Short game was done for Pirate GameJam 15. In total development took about 10 days + 3 first days we were searching for ideas.
Game made using Unity engine.
          
### Render
Game plays in browsers. I'm not very familiar with web builds, but comparing to other entries, our have one of smallest build/load sizes,
while having one of most advanced 3D graphics. Largely because it's using my custom SRP. For example empty Unity Project WebBuild with URP weights about 12Mb, 
while empty project with my SRP weight about 8Mb. Graphics wise my render is pretty simple, but big PCF shadow filter, ACES tonemapping and Bloom makes it look not that bad.

Most of the game rendered with single PBR-Lit shader, with some exceptions for Frog, transparent glass and particles

### Assets
We made pretty much all assets by hand. Fonts and some of vfx sounds uses open free assets.

Game level built in Blender (mostly) and finished in Unity. For some reason I decided to model most environment as unique meshes.
It slightly helped with freedom of shapes, but in hindsight was more time-consuming. Probably better to use more modular assets, and add unique touches later.
Most environment asset uses one of 3 materials, with baked AO stored in Vertex Color (not all models) 

Lovely frog guy and his animations made by my friend Pag1iaccio. Alongside with most of VFX assets.

Sounds are recorded samples of me, slapping hands on ceramic floor and other similar stuff. 
Music composed by me in Ableton in last hours of jam, so in my opinion came out very rushed and probably doesn't fit our game very well.
                                                                  

### Code
Nothing special, but I wasted some time, writing player controller, splines and complex "Light-Swapper" system.
I was planning making more levels, this is why I decided to do it this way. For example controller supports my interaction system and moving platforms,
combined with advanced light-swapper system we were hoping to make "mine cart level", light-swapper can work with different light colors, and any of combination of them,
for example it can do stuff like:
- In shadow - Obj1
- Lit by Red light - Obj2
- Lit by Green light - Obj3
- Lit by Yellow(Red+Green) light - Obj4

But it all ended up unused

### Why the Game is so short
Originally we planned to make about 6 levels, first level was about how frog started his journey, and last was a fight with final boss.
3 rooms in demo are more or less half of original 2nd level.

Unfortunately, our friend, who wanted to help with level design was busy, and left us right after jam started, so most level design done by me,
with help of my girlfriend (z1s), but we cracked how we wanted levels to plays and feels on last couple of days. If we had another day or two,
game probably became twice as long, gameplay-wise.

### Final thoughts
I really happy with finished demo, even with it being so short. I re-learned a lot of forgotten fast development skills and enjoyed working with team.

Right after jam submissions concluded, I was ready to start working on full game with better graphics, proper story & lore. Finally make ~2 hours game for steam.
But combinations of some factors made me freeze this project for better times.
What factors?
1. Search of final visual stile. I want to make polished, beautiful, stylized 3D game. Game mechanics requires dark locations, which are tough to make look good and interesting from screenshots. This is pretty doable, but needs a lot of work
2. Not sure about current Lore/Store. Probably should be leveled up, if I want to make similar game to "Limbo"/"Inside"
3. Less important, but still messed me up - Pirate Software and jam organisation was a complete mess:
   a) About 2500 submission was made 
   b) They decided to make judging stage totally closed, instead of GMTK's style community + judges voting
   c) Very few and how it looks unqualified judges were assigned to play huge amount of games. Some games played by 0-1 judge, or have single judge's verdict like "I can't understand" in simple game with all needed information on itch page
   d) They extended judging time, which is understandable, but instead of continue judging process, it looks like they just selected 50-200 games by random, then played them for a week, and then let Thor show 10 best games.
   e) I do not know Thor for long, mostly I know him as "Indie inspirational guy from shorts". Of course, I watched his stream, when jam ended. I don't really understand if he counts himself as game developer, since he streams ~everyday for 12 hours, either programming his minecraft server, either playing games. But ok, at least he is doing great work to inspire people like myself. Finally, last day of "extended judgement", Thor streams. I think - oh, nice, he will show all ~200 finalist in quick overview (since submission list was 2500, it's pretty common to extend honorable mentions to at least 100), but no, he decided to program in Java for 9 hours, and then show 10, most (in my opinion) random games, while making same exact comment about each one "I never saw something like that!", about literally everything, most gamedevs or even players, who played indie knew.
   f) I don't want to make top 10 games look bad, and for sure don't think our game is better, but situation handled awfully. I was very disappointed. Never meet your heroes, I guess.

I hope someday I will continue, but for now I'm doing other projects, and not ready to return to this game. 






