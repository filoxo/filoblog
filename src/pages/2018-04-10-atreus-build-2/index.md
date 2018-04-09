---
path: "/posts/build-2-atreus62"
title: "Build #2: Atreus62"
date: 2018-04-10
tags: ['keyboards']
---

After my [first Atreus keyboard build](), I was super excited to start over again. I didn't want to build the exact same keyboard so I chose to build an Atreus62, an extended version of the Atreus that has an extra row and column on each half. Here's what I learned while building this one.

### Mo' pins, mo' problems

The matrix on this size keyboard consisted of 5 rows and 13 columns, meaning the controller would need at least 17 pins available. I usually rely on a Arduino Pro Micro controller, which only has 16 available pins. There were two alternative controller options: the Teensy++ and the Teensy LC, and they each had their own unique issues. The Teensy++ has a longer form factor, and has only half of on-board memory of a pro micro. The Teensy LC has an ARM-based chip and requires more modification of the firmware<sup>[1](https://github.com/qmk/qmk_firmware/blob/master/keyboards/chibios_test/teensy_lc_onekey/instructions.md)</sup>.

I found this [Reddit article that describes 2 additional pins on the pro micro]() for the LED indicators that can be (ab)used. I decided to solder a sip socket to this joint. In case something didn't workout, I could just disconnect it without additional work. 

The problem I encountered during this was that the resister required for the LED to function is very tiny, and soldering to it caused the whole thing to become unsoldered. I was eventually able to resolder the resistor but then it tore the solder pad off completely when working with it to connect the wire. No more LED, but fortunately the controller works just fine without it. Perhaps some flux here would have helped too.

![]()

A second attempt on the other LED indicator was successful but I'm still nervous of touching it. Using a SIP socket is definitely the right route though, so you can add and remove the wire as needed and prevent strain on the solder joint/controller pad. 

### Planning for success

This time around I was able to organize and improve the layout of the wires. Even so, there were quite a few changes I made last minute purely for asthetics. The final result looks pretty cool, a bit like bird wings.

![]()

This layout was designed to minize the amount of wire needed to cross, which helps with neatness and keeps the overall height low. All of these wires are also using SIP sockets so I can move them at will, but comes with needing additional height. Maybe next time I can use horizontal facing sockets. 

### Acrylic case

This time around, I was able to laser cut the acrylic case myself at Provolt in Provo. The case files are avaiable freely, so this was easy work. I experimented with single-edge sandwich layers in order to minimize the waste of material. An added side benefit is that it allows the internals to be visible without requiring a clear bottom layer. 

I chose 3/8" white translucent acrylic for this top plate layer, which is a bit thicker than usual. This was mainly to prevent the keyboard from flexing too much.

![]()

I hadn't anticipated how well the LEDs would shine through the top but I think it looks great! If I were to redo this part, I would have added switches that have milky white bottom housings to allow slightly more light through. I'm adding some translucent keycaps which should look great with this shine through light.