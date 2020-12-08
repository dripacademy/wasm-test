import { Universe } from "game-of-life";

// function to wait (because of tick)
function holdOn( millisecondsToWait )
{
    setTimeout( function() {
    /* do something or nothing; this waits for a minute because 60000 milliseconds have been passed */
    }, millisecondsToWait );
}

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();
  // wait 1 sec
  //holdOn(1000);

  requestAnimationFrame(renderLoop);
};

//setTimeout( () => requestAnimationFrame(renderLoop), 1000);
requestAnimationFrame(renderLoop);
