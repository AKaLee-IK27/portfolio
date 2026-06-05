---
title: "Coming to Native iOS from Flutter: What Actually Transfers"
description: "I've shipped mobile in Flutter for a few years and build SwiftUI tools on the side. Here's what carried over to native iOS — and what didn't."
pubDate: "Jun 07 2026"
translationKey: "ios-from-flutter"
tags: ["iOS", "Flutter", "Swift", "SwiftUI"]
---

For a couple of years now my day job has been Flutter — real-time apps, a livestreaming feature, the occasional fight with a janky list on a low-end device. On the side, I've been building small SwiftUI tools for macOS. The two have started to bleed into each other, and it pushed me toward a question I didn't expect to find interesting: when you move from Flutter to native iOS, what actually transfers?

The short version is *more than I expected — but not the parts I assumed.*

## The mental models come with you

The biggest one is free. If you've internalised that **UI is a function of state** — that you don't reach in and mutate the screen, you mutate the state and let the framework redraw — then SwiftUI already thinks the way you do.

```dart
// Flutter
setState(() => count++);
```

```swift
// SwiftUI
struct CounterView: View {
    @State private var count = 0
    var body: some View {
        Button("\(count)") { count += 1 }
    }
}
```

Different syntax, identical idea: a source of truth, a declarative view tree, and a framework that diffs and redraws what changed. SwiftUI even has Previews, which scratch the same itch as hot reload.

Async is almost a copy-paste. Dart's `Future` / `async` / `await` map onto Swift's `async` / `await` so closely that this was the part I worried about for no reason. State management rhymes too: a BLoC or a Riverpod provider is, structurally, the same thing as an `ObservableObject` (or the newer `@Observable`) — a thing that holds state and a UI that observes it.

## So do the instincts

The less obvious transfer is judgment, and it's the part I'd actually pay for.

The hardest bug I ever fixed in Flutter was a state-sync issue: nested stream subscriptions quietly fighting each other across a handful of screens. The code compiled. It looked right. It was wrong. Catching that *class* of bug — the one where the framework does exactly what you told it and you told it the wrong thing — has nothing to do with Flutter. It maps straight onto SwiftUI and Combine, where the same trap is waiting with new syntax.

Performance instincts come along the same way. Measure first, find the rebuild storm, fix the cause not the symptom. That habit doesn't care what framework you learned it in.

## What doesn't transfer (the honest part)

Two things made me slow down.

**Value vs. reference semantics.** Coming from Dart, I didn't spend much time thinking about whether a thing was copied or shared. Swift makes you: a `struct` is copied, a `class` is shared, and picking the wrong one is a real bug, not a style note.

**Memory.** Dart has a garbage collector; Swift has ARC. Most of the time you don't notice — until a closure captures `self` the wrong way and quietly leaks:

```swift
onDone = { self.cleanup() }          // leaks: strong capture cycle
onDone = { [weak self] in self?.cleanup() }  // fixed
```

`[weak self]` was the one piece of Swift I had to *actually learn* — not because it's hard, but because nothing in Flutter ever forced me to think about object lifetimes.

The other non-transfer isn't the language at all — it's history. A mature iOS app isn't all shiny SwiftUI. There's UIKit underneath, and often Objective-C under that. Flutter handed me one consistent surface; native iOS is a decade and a half of the platform, in layers. That's not a downside. It's just tuition you agree to pay.

## Why I think the trade is worth it

Flutter is a genuinely good abstraction. But every time I dropped through a platform channel into the native layer, that's where it got interesting to me — the place where the app meets the actual device: the camera, Bluetooth, the file system, secure storage. Native iOS is *that*, all the time. Building my own Swift tools made me want more of that, not less.

---

So here's where I landed: the mental models and the instincts cross over for free, and the language quirks and the platform's history are what you pay to learn. For work that lives close to the device, that seems like a good trade — and I'm enjoying paying it.
