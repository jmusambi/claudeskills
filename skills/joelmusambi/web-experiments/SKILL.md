---
name: Web Experiments
description: "Use this skill when running website experiments, improving conversion rates, setting up A/B tests, analyzing heatmaps and session recordings, creating experiment hypotheses, or making data-driven website changes. Covers hypothesis creation, visual behavior analysis, event tracking, and the 1-2% compounding improvement philosophy."
category: CRO
access: free
---

# Web Experiments — Running Experiments to Increase Conversion

This playbook covers how to run web experiments that produce measurable improvements. Most website changes are made on gut instinct. This approach uses quantitative data and visual behavior analysis to make changes that compound over time.

## Core Philosophy: 1-2% Compounding Improvements

A 1-2% increase in conversion seems minimal at first. But when you break down your analytics by yearly numbers, these small changes compound significantly.

**Example:**
- 10,000 monthly visitors × 2% conversion = 200 leads/month
- Improve to 3% conversion = 300 leads/month
- That's 1,200 additional leads per year from a single improvement
- Run 6 experiments and improve 1% each time → meaningful revenue impact

The goal isn't one massive experiment. It's a discipline of continuous small improvements.

## Phase 1: Hypothesis Creation

Before making any changes, answer two essential questions:
1. **Why are you looking to make changes?** — What data or observation triggered this?
2. **What do you believe the outcome will be?** — What specific metric will improve, and by how much?

### Hypothesis Template

```
Observation: [What you noticed in the data]
Problem: [Why this is a problem]
Hypothesis: If we [change X], then [metric Y] will [improve/decrease] by [Z%]
because [reason based on data]
Measurement: [How you'll measure success]
Duration: [How long to run the experiment]
Success criteria: [What constitutes a win]
```

### Example

```
Observation: Heatmap data shows 40% of mobile visitors click on
feature icons on homepage, but they aren't clickable
Problem: Visitors expect interactivity and leave when icons don't respond
Hypothesis: If we make the feature icons clickable and add content
behind each one, bounce rate will decrease by 15% and engagement
(pages/session) will increase by 25%
Measurement: Bounce rate, pages per session, time on site
Duration: 30 days
Success criteria: Statistically significant improvement in both metrics
```

## Phase 2: Visual Data Collection

### Heatmaps

Heatmaps show you what visitors click, where they hover, and how far they scroll. This visual data catches UX issues you'd never find in analytics alone.

**What to look for:**
- **Click clustering on non-clickable elements** — If visitors repeatedly click something they think is a button, make it a button
- **Dead zones** — Areas of the page that get zero interaction
- **Scroll depth drop-off** — Where visitors stop scrolling
- **Rage clicks** — Rapid clicking indicating frustration
- **Mobile vs. desktop differences** — Mobile users interact differently

### Session Recordings

Watch actual visitor sessions. This is the most underused tool in marketing. Session recordings reveal:

**Common discoveries:**
- A subscribe top bar that works on desktop destroys mobile UX
- Users try to interact with design elements that aren't functional
- Navigation confusion that GA data alone can't surface
- Form abandonment patterns and where users get stuck
- How visitors from different channels behave differently

**Best practice:** Watch at least 20-30 sessions per experiment. Look for patterns, not individual behaviors.

### Event Tracking

Set up event tracking to measure specific interactions:

**Events to track:**
- Button clicks (all CTAs)
- Form field interactions (where do they drop off?)
- Video plays and completion rates
- Scroll depth milestones (25%, 50%, 75%, 100%)
- Tab/accordion interactions
- Download clicks
- Share/social clicks

Tools like Mixpanel provide real-time event data with funnel analysis and segmentation. The analytics are easy to decipher and give you immediate feedback.

## Phase 3: The Experiment Process

### Step-by-Step

1. **Identify the opportunity** — Use GA flow analysis, heatmaps, and session recordings
2. **Create hypothesis** — Document what you expect to happen and why
3. **Design the variation** — Build the alternate version
4. **Set up the test** — Use A/B testing tools with even traffic distribution
5. **Run for statistical significance** — Don't stop early on promising results
6. **Analyze results** — Compare variation to control
7. **Implement permanently** — If the variation wins, roll it out to 100%

### Choosing Your Test

**What to test first (highest impact):**
1. Headlines and value propositions
2. CTA button text and placement
3. Form length and fields
4. Page layout and content order
5. Social proof placement
6. Navigation structure
7. Mobile-specific optimizations

### How to Run A/B Tests

Use tools like Optimizely to:
- Split traffic evenly (50/50) between control and variation
- Ensure statistical significance before declaring a winner
- Track multiple metrics simultaneously
- Run tests without needing deep technical skills (basic HTML is sufficient)

**One tool for behavior analysis, another for controlled experiments.** Use session recording tools to identify problems, then use A/B testing tools to validate solutions. This two-tool approach gives you both qualitative insights and quantitative proof.

## Phase 4: Proven Experiment Types

### Making Non-Clickable Elements Clickable

This is one of the highest-ROI experiments you can run.

**The discovery:** While analyzing session recordings, you notice visitors clicking on what they think are buttons — feature icons, image cards, section headers — but nothing happens. Many visitors who don't find another path leave the site entirely.

**The fix:** Add content behind each element. When visitors click a feature icon, they see a detailed description, benefits, and a CTA.

**Typical results:**
- Bounce rate decreased
- Pages per session increased
- Visitors gain better product understanding
- Sales team has data on which features generate most interest

### Button Text Testing

Small CTA changes produce measurable differences:
- "Get Started" vs. "Start Free Trial" vs. "See a Demo"
- One word change can move conversion 10-20%
- Use A/B testing with even traffic distribution
- Track events on each variation with separate event names

### Feature Interest Mapping

After making elements clickable and tracking interactions, you have data on what your target market finds most interesting. Compare this to what existing customers actually use most — the gap reveals messaging opportunities.

**If visitors click "Analytics Dashboard" more than any other feature but your sales team leads with "Automation"** → test leading with analytics in your next campaign.

### Continuous Rotation

After tracking events for a period, swap the least interactive elements with new options:
- Use even traffic distribution for statistical significance
- Keep winners, replace losers
- Build a library of tested and proven elements over time

## Phase 5: Mobile-Specific Experiments

### Common Mobile Issues Discovered Through Recordings

1. **Top bars and popups blocking content** — Subscribe bars that work on desktop can cover 50% of mobile screens
2. **Tap targets too small** — Buttons that work with a mouse cursor but not with a finger
3. **Forms too long on mobile** — 6 fields on desktop = manageable; 6 fields on mobile = abandonment
4. **Horizontal scroll** — Content wider than screen width causing confusion

### Mobile Testing Best Practices

- Always test on actual mobile devices, not just responsive preview
- Watch mobile session recordings separately from desktop
- Prioritize speed — every 100ms of load time reduces mobile conversion
- Use progressive disclosure — show less initially, reveal on interaction

## Phase 6: Combining Behavior Tools with Experiment Tools

### The Two-Tool Stack

| Tool Type | Purpose | Examples |
|-----------|---------|---------|
| Behavior analysis | Discover problems | Hotjar, Smartlook, Microsoft Clarity |
| Controlled experiments | Validate solutions | Optimizely, Google Optimize, VWO |

### Workflow

1. **Discover** — Hotjar heatmaps show a dead zone on the pricing page
2. **Investigate** — Session recordings reveal visitors are confused by pricing tiers
3. **Hypothesize** — Simplified pricing layout will increase pricing page conversion by 20%
4. **Test** — Optimizely runs the A/B test with even traffic split
5. **Validate** — Mixpanel tracks conversion events for both variations
6. **Implement** — Winner goes live permanently

### Advanced: Segment by Traffic Source

Different traffic sources behave differently on your site:
- **Paid traffic** tends to be more intent-driven, higher scroll depth
- **Organic traffic** browses more broadly, longer sessions
- **Email traffic** is familiar with your brand, higher conversion
- **Social traffic** has shorter attention spans, higher bounce

Run separate heatmaps and session analyses for each traffic source. An experiment that improves paid traffic conversion might hurt organic, and vice versa.

## Metrics to Track

### Primary Metrics

| Metric | Description | Target Direction |
|--------|-------------|-----------------|
| Conversion rate | Visitors who complete goal / Total visitors | Up |
| Bounce rate | Single-page sessions / Total sessions | Down |
| Pages per session | Average pages viewed per visit | Up |
| Time on site | Average session duration | Up (usually) |
| Scroll depth | Percentage who reach key content | Up |

### Secondary Metrics

| Metric | Description | Why It Matters |
|--------|-------------|----------------|
| Rage click rate | Frustrated click patterns | UX problems |
| Form abandonment | Users who start but don't finish forms | Form optimization |
| Feature interest | Which elements get most clicks | Messaging strategy |
| Mobile vs. desktop conversion | Conversion gap between devices | Mobile optimization |
| Exit pages | Where visitors leave | Content/UX issues |

## Building an Experiment Culture

### Document Everything

Keep a log of every experiment:
- Hypothesis
- What you changed
- Duration
- Results (statistically significant or not)
- Learnings
- Next experiment inspired by this one

### Monthly Experiment Cadence

- **Week 1:** Analyze previous month's data, identify next experiment
- **Week 2:** Design variation, set up test
- **Week 3-4:** Run experiment
- **Month end:** Analyze, document, implement winners

### Share Results

When experiments produce results, share them with the broader team:
- Sales benefits from knowing which features interest buyers most
- Product benefits from understanding user behavior
- Leadership sees concrete ROI from optimization work

The compounding effect of continuous experimentation is one of the most reliable ways to grow revenue without increasing spend.
