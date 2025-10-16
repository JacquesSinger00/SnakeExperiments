/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'imagePaths.xlsx', 'path': 'imagePaths.xlsx'},
    {'name': 'SnakePhotos/1110.jpg', 'path': 'SnakePhotos/1110.jpg'},
    {'name': 'SnakePhotos/1080.jpg', 'path': 'SnakePhotos/1080.jpg'},
    {'name': 'SnakePhotos/5.jpeg', 'path': 'SnakePhotos/5.jpeg'},
    {'name': 'SnakePhotos/17.jpg', 'path': 'SnakePhotos/17.jpg'},
    {'name': 'SnakePhotos/1019.jpg', 'path': 'SnakePhotos/1019.jpg'},
    {'name': 'SnakePhotos/1030.jpg', 'path': 'SnakePhotos/1030.jpg'},
    {'name': 'SnakePhotos/1022.jpg', 'path': 'SnakePhotos/1022.jpg'},
    {'name': 'SnakePhotos/1033.jpg', 'path': 'SnakePhotos/1033.jpg'},
    {'name': 'SnakePhotos/1090.jpg', 'path': 'SnakePhotos/1090.jpg'},
    {'name': 'SnakePhotos/19.jpg', 'path': 'SnakePhotos/19.jpg'},
    {'name': 'SnakePhotos/1051.jpg', 'path': 'SnakePhotos/1051.jpg'},
    {'name': 'SnakePhotos/1114.jpg', 'path': 'SnakePhotos/1114.jpg'},
    {'name': 'SnakePhotos/1112.jpg', 'path': 'SnakePhotos/1112.jpg'},
    {'name': 'SnakePhotos/15.jpg', 'path': 'SnakePhotos/15.jpg'},
    {'name': 'SnakePhotos/1050.jpg', 'path': 'SnakePhotos/1050.jpg'},
    {'name': 'SnakePhotos/1026.jpg', 'path': 'SnakePhotos/1026.jpg'},
    {'name': 'SnakePhotos/18.jpg', 'path': 'SnakePhotos/18.jpg'},
    {'name': 'SnakePhotos/1120.jpg', 'path': 'SnakePhotos/1120.jpg'},
    {'name': 'SnakePhotos/1070.jpg', 'path': 'SnakePhotos/1070.jpg'},
    {'name': 'SnakePhotos/1040.jpg', 'path': 'SnakePhotos/1040.jpg'},
    {'name': 'SnakePhotos/20.jpg', 'path': 'SnakePhotos/20.jpg'},
    {'name': 'SnakePhotos/1052.jpg', 'path': 'SnakePhotos/1052.jpg'},
    {'name': 'SnakePhotos/1101.jpg', 'path': 'SnakePhotos/1101.jpg'},
    {'name': 'SnakePhotos/7.jpeg', 'path': 'SnakePhotos/7.jpeg'},
    {'name': 'SnakePhotos/1113.jpg', 'path': 'SnakePhotos/1113.jpg'},
    {'name': 'SnakePhotos/1111.jpg', 'path': 'SnakePhotos/1111.jpg'},
    {'name': 'SnakePhotos/grayscale-white-noise.png', 'path': 'SnakePhotos/grayscale-white-noise.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var RestClock;
var text;
var Backward_MaskClock;
var image;
var PrimeClock;
var prime;
var Forward_MaskClock;
var image_2;
var ReportClock;
var prompt;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Rest"
  RestClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Backward_Mask"
  Backward_MaskClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'SnakePhotos/grayscale-white-noise.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Prime"
  PrimeClock = new util.Clock();
  prime = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prime', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Forward_Mask"
  Forward_MaskClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'SnakePhotos/grayscale-white-noise.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Report"
  ReportClock = new util.Clock();
  prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'prompt',
    text: 'As there a snake?\nPress y for yes and n for no',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'imagePaths.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(RestRoutineBegin(snapshot));
      trialsLoopScheduler.add(RestRoutineEachFrame());
      trialsLoopScheduler.add(RestRoutineEnd(snapshot));
      trialsLoopScheduler.add(Backward_MaskRoutineBegin(snapshot));
      trialsLoopScheduler.add(Backward_MaskRoutineEachFrame());
      trialsLoopScheduler.add(Backward_MaskRoutineEnd(snapshot));
      trialsLoopScheduler.add(PrimeRoutineBegin(snapshot));
      trialsLoopScheduler.add(PrimeRoutineEachFrame());
      trialsLoopScheduler.add(PrimeRoutineEnd(snapshot));
      trialsLoopScheduler.add(Forward_MaskRoutineBegin(snapshot));
      trialsLoopScheduler.add(Forward_MaskRoutineEachFrame());
      trialsLoopScheduler.add(Forward_MaskRoutineEnd(snapshot));
      trialsLoopScheduler.add(ReportRoutineBegin(snapshot));
      trialsLoopScheduler.add(ReportRoutineEachFrame());
      trialsLoopScheduler.add(ReportRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var RestMaxDurationReached;
var RestMaxDuration;
var RestComponents;
function RestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    RestClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    RestMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Rest.started', globalClock.getTime());
    RestMaxDuration = null
    // keep track of which components have finished
    RestComponents = [];
    RestComponents.push(text);
    
    RestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function RestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Rest' ---
    // get current time
    t = RestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Rest' ---
    RestComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Rest.stopped', globalClock.getTime());
    if (RestMaxDurationReached) {
        RestClock.add(RestMaxDuration);
    } else {
        RestClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Backward_MaskMaxDurationReached;
var Backward_MaskMaxDuration;
var Backward_MaskComponents;
function Backward_MaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Backward_Mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Backward_MaskClock.reset();
    routineTimer.reset();
    Backward_MaskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Backward_Mask.started', globalClock.getTime());
    Backward_MaskMaxDuration = null
    // keep track of which components have finished
    Backward_MaskComponents = [];
    Backward_MaskComponents.push(image);
    
    Backward_MaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Backward_MaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Backward_Mask' ---
    // get current time
    t = Backward_MaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    if (image.status === PsychoJS.Status.STARTED && frameN >= (image.frameNStart + 3)) {
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Backward_MaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Backward_MaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Backward_Mask' ---
    Backward_MaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Backward_Mask.stopped', globalClock.getTime());
    // the Routine "Backward_Mask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PrimeMaxDurationReached;
var PrimeMaxDuration;
var PrimeComponents;
function PrimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Prime' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    PrimeClock.reset();
    routineTimer.reset();
    PrimeMaxDurationReached = false;
    // update component parameters for each repeat
    prime.setImage(imgPath);
    psychoJS.experiment.addData('Prime.started', globalClock.getTime());
    PrimeMaxDuration = null
    // keep track of which components have finished
    PrimeComponents = [];
    PrimeComponents.push(prime);
    
    PrimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PrimeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Prime' ---
    // get current time
    t = PrimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prime* updates
    if (t >= 0 && prime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prime.tStart = t;  // (not accounting for frame time here)
      prime.frameNStart = frameN;  // exact frame index
      
      prime.setAutoDraw(true);
    }
    
    if (prime.status === PsychoJS.Status.STARTED && frameN >= (prime.frameNStart + 1.5)) {
      prime.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PrimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PrimeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Prime' ---
    PrimeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Prime.stopped', globalClock.getTime());
    // the Routine "Prime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Forward_MaskMaxDurationReached;
var Forward_MaskMaxDuration;
var Forward_MaskComponents;
function Forward_MaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Forward_Mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Forward_MaskClock.reset();
    routineTimer.reset();
    Forward_MaskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Forward_Mask.started', globalClock.getTime());
    Forward_MaskMaxDuration = null
    // keep track of which components have finished
    Forward_MaskComponents = [];
    Forward_MaskComponents.push(image_2);
    
    Forward_MaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Forward_MaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Forward_Mask' ---
    // get current time
    t = Forward_MaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    if (image_2.status === PsychoJS.Status.STARTED && frameN >= (image_2.frameNStart + 30)) {
      image_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Forward_MaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Forward_MaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Forward_Mask' ---
    Forward_MaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Forward_Mask.stopped', globalClock.getTime());
    // the Routine "Forward_Mask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ReportMaxDurationReached;
var _key_resp_allKeys;
var ReportMaxDuration;
var ReportComponents;
function ReportRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Report' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ReportClock.reset();
    routineTimer.reset();
    ReportMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Report.started', globalClock.getTime());
    ReportMaxDuration = null
    // keep track of which components have finished
    ReportComponents = [];
    ReportComponents.push(prompt);
    ReportComponents.push(key_resp);
    
    ReportComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ReportRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Report' ---
    // get current time
    t = ReportClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prompt* updates
    if (t >= 0.0 && prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prompt.tStart = t;  // (not accounting for frame time here)
      prompt.frameNStart = frameN;  // exact frame index
      
      prompt.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
      key_resp.clearEvents();
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == snake) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ReportComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ReportRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Report' ---
    ReportComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Report.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(snake)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Report" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
