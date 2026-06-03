---
title: "Agentic AI Changed How I Work. I'm Not Sure How I Feel About It."
description: "A real look at putting AI coding agents into daily workflow: faster, yes, but at what cost?"
pubDate: "Jun 03 2025"
tags: ["AI", "coding agent", "workflow"]
---

When I first started using AI coding agents, I thought the win was simple: I'd ship faster. And I do. But the more interesting thing isn't the speed. It's how the work itself has changed, and what that means for me as an engineer.

## From Copilot to Cursor

I had used [GitHub Copilot](https://github.com/features/copilot) before. Inline suggestions were helpful, like a smarter autocomplete. It made typing easier but didn't change the way I thought about building things.

Then I switched to [Cursor](https://cursor.com). The difference was context. Cursor actually reads your codebase — not just the open file, but the project structure, the patterns you've already established, the imports you're using. When I tell it to build something, it knows where to put it and what to follow.

That was the moment it went from a neat trick to a real workflow shift.

## How I Work Now

My process looks like this: I figure out what needs to exist, point Cursor at the relevant files, and say "do it." Not a detailed spec. Not a step-by-step plan. Just a short instruction and a file path. Then I review what it produces.

It works surprisingly often. I recently had it build a custom Flutter widget — something I would have spent an hour on — and it got most of it right on the first pass:

- The widget rendered correctly
- The props were typed
- The layout matched what I described
- I tweaked a few things and moved on

> The best part: it followed the patterns already in my codebase. I didn't have to tell it my naming conventions or project structure. It just read the files and matched.

## The Confidence Problem

Here's the part that keeps me up: Cursor is confident. Always. And sometimes that confidence is wrong.

The worst ones are **state management mistakes**. The code looks right at a glance. It compiles. The widget renders. But the state doesn't update when it should, or it rebuilds too aggressively, or it misses an edge case that only shows up after ten interactions.

These bugs are subtle. I catch them only because I know the domain well enough to spot them. If I had been more hands-off, I wouldn't have caught them at all.

## The Skill Drift

That's the tension. I design and the agent writes, but I still need to understand the domain deeply enough to review what it produces. And I'm starting to worry: if I keep delegating the implementation, will I lose the deep understanding that makes me a good reviewer in the first place?

There's a real skill drift risk here.

1. If I don't write the code myself, I don't struggle through the decisions that build intuition
2. I don't learn the edge cases the hard way
3. I just read diffs that look correct and move on

Over time, that feels like it could hollow out the knowledge that makes me useful.

## Still Figuring It Out

I'm not sure I have the answer yet. I'm still in the middle of the learning curve.

Some days I feel like I've unlocked a superpower — I can build things in hours that used to take days. Other days I feel like I'm outsourcing my own growth to a tool that's good at sounding right.

---

The honest summary: **agentic AI is transformative for how I work, but it's early, it's imperfect, and I'm still figuring out how to use it without losing the parts of myself that make me a good engineer.**

I'll keep writing about this as I learn.
