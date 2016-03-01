Frontend Nanodegree Arcade Game - Guillaume's version
===============================

Author
----

##### of game engine & origin file

The udacity tean, especially the [Github contribution team](https://github.com/udacity/frontend-nanodegree-arcade-game/graphs/contributors)


##### of current version
Guillaume Simler, a Udacity Frontend Nanodegree, more information and contact details on my [Github profile](https://github.com/guillaumesimler)

Aim of the project
----
The aim of the project is to build a arcade game :-) ! Obviously this is only the secondary aim. The main target is to learn how to 
* use object-oriented javascript
* use HTML 5 Canvas

For detailed instructions about the tasks [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


How to install
----
The easiest way to install the latest version of the project is to fork and [clone its github repository](https://github.com/guillaumesimler/nanofep3)

How to start the game
---- 
Simply launch the index.html file, the game in its current version will be started (please read also the improvement discussion)

How to play 
----
The aim of the game is to accumulate the highest possible score. In order to earn point the player needs to leave the safe zone (the _grass_) and move to the _rocks_ and the _sea_ while avoiding the bugs. 

The score will:
* slowly increase while staying on the _rocks_
* jump by 10 points while reaching the _sea_. This will also reset the player on the _grass_.
* skyrocket by 25 points by catching a gem. 

Beware of the bugs!!!! They will not only reset the player, but also _suck_ 15 points. 

The player can play with the 4 keyboard arrows.   



Latest Updates (more details on [Github](https://github.com/guillaumesimler/nanofep3/commits/master))
----
2016 03 01: Implement gem class and increase randomnes of the game
2016 02 29: Improve the bugs (enemies), add scoring model and collision management
2016 02 28: Implement of the first bug 
2016 02 27: Understand engine.js, import the first variable
2016 02 26: Init the project (Readme, License, replacement of the fork by a real repositery as no pull request is to expected)


Known bugs, improvements and major changes
----
The known bugs are published [here](https://github.com/guillaumesimler/nanofep3/issues). Should you find a unknown bug, please be so kind to update the issue. 

The improvements and major changes are discussed on the [Github wiki](https://github.com/guillaumesimler/nanofep3/wiki)

Used repository 
----
* the [forked project](https://github.com/guillaumesimler/frontend-nanodegree-arcade-game) (_git remote **origin**_)
* the [working project](https://github.com/guillaumesimler/nanofep3) (_git remote **github**_)


License
----
The **original file** had no license at the time of the forking (2016-02-16 11:11 CET), please check the [github page](https://github.com/udacity/frontend-nanodegree-arcade-game) for any changes

The **current version** follows the [_MIT License_](https://github.com/guillaumesimler/nanofep3/blob/master/LICENSE.txt) 