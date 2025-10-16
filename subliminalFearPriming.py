# pip install psychopy
from psychopy import visual, core, event
import os, glob, math

# --- settings ---
FOLDER_NAME   = "SnakePhotos"   # folder next to this script
TARGET_STIM_S = 0.010           # 10 ms target
TARGET_MASK_S = 0.200           # e.g., 200 ms mask; set 0 to disable mask
BG            = [0, 0, 0]       # black background
# ----------------

BASE = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(BASE, FOLDER_NAME)

files = sorted(sum([glob.glob(os.path.join(IMG_DIR, f"*.%s" % ext))
                    for ext in ("png","jpg","jpeg","gif","bmp","webp")], []))
if not files:
    raise SystemExit(f"No images in {IMG_DIR}")

# Fullscreen, frame-locked window
win = visual.Window(fullscr=True, color=BG, units="pix", allowGUI=False)
win.mouseVisible = False

# Try to get actual frame rate; fall back if needed
fps = win.getActualFrameRate(nIdentical=20, nMaxFrames=120, nWarmUpFrames=60)
if fps is None or fps <= 0:
    # Fallback: assume 60 Hz if measurement fails
    fps = 60.0

# Convert desired durations to whole frames (minimum 1)
stim_frames = max(1, int(round(TARGET_STIM_S * fps)))
mask_frames = int(round(TARGET_MASK_S * fps)) if TARGET_MASK_S > 0 else 0

print(f"Detected refresh ≈ {fps:.2f} Hz")
print(f"Stim frames: {stim_frames}  (~{1000*stim_frames/fps:.1f} ms)")
if mask_frames:
    print(f"Mask frames: {mask_frames}  (~{1000*mask_frames/fps:.1f} ms)")

# Stimulus and mask
stim = visual.ImageStim(win, size=win.size)  # auto-preserves aspect
mask = visual.Rect(win, width=2*win.size[0], height=2*win.size[1],
                   fillColor=[-0.2, -0.2, -0.2], lineColor=None)

# Main loop: flicker each image for stim_frames, then mask (optional)
while True:
    # Allow quit any time
    if event.getKeys(keyList=["escape", "esc", "q"]):
        win.close(); core.quit()

    for path in files:
        if event.getKeys(keyList=["escape", "esc", "q"]):
            win.close(); core.quit()

        stim.image = path

        # Show image for ~10ms (rounded to nearest frames)
        for _ in range(stim_frames):
            stim.draw()
            win.flip()

        # Optional mask
        for _ in range(mask_frames):
            mask.draw()
            win.flip()