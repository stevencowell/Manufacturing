# Metal tool library manifest

Repository: `stevencowell/Manufacturing`

Purpose: source and visual-quality record for the student identification library at `metal-tool-library/index.html`.

Boundary: these assets identify tools only. They do not define a safe operating procedure, machine permission, wheel or blade selection, settings, dimensions, workholding or a project-specific construction process. Teacher-issued instructions and demonstrations remain authoritative.

## Source and visual audit

| Tool | Repository file | Source and licence | Alt text | Visual QA decision |
| --- | --- | --- | --- | --- |
| Jenny callipers | `assets/jenny-calipers.jpg` | Glenn McKechnie, `OddlegCalipers.jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:OddlegCalipers.jpg), CC BY-SA 3.0 | Two examples of Jenny callipers, each with one straight leg and one inward-pointing marking leg | Pass: both odd-leg forms are visible; no operation or dimensions implied. |
| Dividers | `assets/dividers.jpg` | Auckland Museum, `Dividers (AM 2004.44.9-3).jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dividers_(AM_2004.44.9-3).jpg), CC BY 4.0 | Steel dividers with two pointed legs joined at a curved spring and adjustment screw | Pass: both pointed legs and adjuster are clear; no scale or measurement claim added. |
| Scribes | `assets/scribers.jpg` | Glenn McKechnie, `Scribers.jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Scribers.jpg), CC BY-SA 3.0 | Assortment of straight and bent metalworking scribes with pointed steel tips | Pass: several common forms are visible; caption warns that the points are sharp. |
| Centre punches | `assets/centre-punch.jpg` | Luke Milburn, `Centre Punch.jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Centre_Punch.jpg), CC BY 2.0 | Single steel centre punch with a knurled body and pointed end | Pass: one clear example is shown; copy explicitly avoids implying all punches are identical. |
| Ball-pein hammer | `assets/ball-pein-hammer.jpg` | Connie Posites, `Hammer ball peen (12640076755).jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hammer_ball_peen_(12640076755).jpg), CC BY-SA 2.0 | Ball-pein hammer with a flat face and rounded pein on opposite ends of its metal head | Pass: rounded pein is identifiable; no striking action or work setup shown. |
| Bossing mallet | `assets/bossing-mallet.png` | Generated with OpenAI image generation for this library on 4 August 2026; original output `exec-18952216-da90-42f7-bfcc-2085fe3a98ee.png`; prompt required one label-free pear-headed hardwood bossing mallet at rest and excluded hands, workpieces and action | Wooden bossing mallet with a smooth rounded pear-shaped head and straight handle | Pass: smooth rounded hardwood head is clear; no process, force or support is implied. |
| Tinman’s mallet | `assets/tinmans-mallet.png` | Generated with OpenAI image generation for this library on 4 August 2026; corrected output `exec-4ec81a65-dd48-4f1c-aa89-f112af82cd24.png`; the first rejected render had an incorrect head orientation, and the accepted prompt required a horizontal double-faced wooden head across the handle | Wooden tinman's mallet with a broad double-faced head mounted across a straight handle | Pass after replacement: head orientation and two broad wooden faces are plausible; no process is shown. |
| Tin snips | `assets/tin-snips.jpg` | Zkabirkhan, `Tin Snips.jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tin_Snips.jpg), CC0 1.0 | Pair of hand-operated tin snips with two cutting blades and loop handles | Pass: tool is isolated and recognisable; caption defers type and cutting direction to the demonstration. |
| Manual nibbler | `assets/manual-nibbler.jpg` | Richard Frantz Jr, `Nibbler1.jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nibbler1.jpg), public domain | Manual sheet-metal nibbler with two handles and a compact punch-and-die cutting head | Pass: manual nibbler form is recognisable; low resolution is acceptable at the card’s rendered size and the full source remains available. |
| Angle grinder | `assets/angle-grinder.jpg` | soulfish, `AngleGrinder.jpg`, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:AngleGrinder.jpg), CC BY-SA 2.0 | Handheld angle grinder at rest with its side handle and wheel guard fitted | Pass: final inspection confirms the guard and side handle are both visible; page copy requires training, permission, the correct wheel and an approved setup. |
| Stationary metal cut-off saw | `assets/stationary-metal-cutoff-saw.png` | Generated with OpenAI image generation for this library on 4 August 2026; original output `exec-577d2154-7b61-4704-bf9d-82cd4459fed9.png`; prompt required a stationary pedestal saw at rest with guarded circular wheel, vice and no workpiece, people, sparks, settings or action | Stationary pedestal metal cut-off saw at rest with a guarded circular wheel and built-in vice | Pass: guard, pivoting head, vice and pedestal are clear; caption does not identify a specific model or prescribe operation. |

## Rejected or excluded candidates

- The first generated tinman’s mallet output (`exec-c3c09e3b-fdde-4e73-8418-7a842cbf581b.png`) was rejected because its head orientation made the working-face geometry misleading.
- Existing repository product images with no recoverable source/licence record were not copied into this new library merely because their filenames looked relevant.
- Watermarked catalogue images, Google image-result captures, active cutting/grinding photographs with unclear guards or workholding, and project-specific drawings were excluded.

## Required release checks

- Every listed asset route returns successfully.
- Every card has accurate alt text, a visible caption and a keyboard-operable `Open larger` link.
- Desktop and 390 px layouts have no horizontal overflow.
- The angle-grinder image visibly retains its guard and side handle.
- Generated images remain identification-only and contain no labels, brands, dimensions, settings, people or operating action.
