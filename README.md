# Spider Riders Online Server

Attempt at reverse Engineering the old flash game Battle for Arachna

In order to use this, you will need a copy of the game downloaded to `files/SpiderRider_2.swf`. The Game is not distributed with this repository for copyright reasons. This repository simply attempts to emulate the server-side behavior of the game.

You will need node and npm for this game. The first time you run, you will need to initialize with `npm install`.
Then you can run with `PORT=8080 node server.js`. 

This repository is licensed under MIT

## Required Files

The game requires several files, a (non-exhaustive) list is provided here. Each of them can be downloaded using the wayback machine, and must be downloaded to `files/`

1. `SpiderRider_2.swf` (Main Game)
2. `battleSystem_2.swf`
3. `scr1_2.swf`
4. `character_2.swf` (Note: it seems to not be possible to obtain this file specifically from the wayback machine)

It may be possible in the future to develop similar versions of each file,
 when more is understood about the game. 

## Additional Resources

By default this project uses flash player. This of course requires that your browser support flash. 

The ruffle project can also be used to provide flash support.
