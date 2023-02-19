Chest Game

In order to have the game running, please:
- clone git repository
- open terminal and type ' npm install '
- (in case of vulnerabilities, type ' npm audit fix ')
- type ' npm run-script build '
- type ' npm run serve ' 
- open the link where the project is running

Presented is a game that contain play button and 6 chests.
You are required to create a production ready game (resources can be generated by code or you can create your own) that will include all the main objects/classes according to the following game’s description.

Game description:
The game contains a play button and 6 chests.
At the initial state, the play button is enabled while the chests are disabled.

When pressing on the play button:
Play button becomes disabled.
All chests become clickable.

When clicking on a chest:
All other elements in the game should become disabled.
The game should randomly determine rather the chest is a winner. 
If the chest is a winner, the game should randomly determine rather it is a regular win or bonus win.
The Chest should open with the appropriate regular win /bonus/ loose animation. 
At the end of the chest animation:
If it is a bonus win by the end of chest open animation, the player will be redirected to a new screen where a bonus animation and winning amount will be presented to the user and only by the end of the animation user will be returned back to main screen
If all chests opened present enable play button again.
At the end of the chest animation:
If it is a bonus win by the end of chest open animation, the player will be redirected to a new screen where a bonus animation and winning amount will be presented to the user and only by the end of the animation user will be returned back to main screen
If all chests opened present enable play button again.
