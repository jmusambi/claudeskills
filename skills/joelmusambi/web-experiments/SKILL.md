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

## Experiment Tracking and Prioritization Framework

Every experiment needs two things before it runs: a score that tells you whether it's worth running, and a tracker that captures everything from hypothesis to outcome. Without both, you end up running low-impact tests, losing track of what you learned, and repeating mistakes.

### The Prioritization Scorecard

Before running any experiment, score it across three dimensions — Probability, Impact, and Ease. Each dimension has two sub-scores rated 1–5. Multiply all six scores together to get a composite priority score.

**Probability** — How likely is this to work?
- Is this a real bottleneck? (5 = clear bottleneck backed by data, 1 = gut feeling)
- Are you confident this change will move the needle? (5 = strong evidence from heatmaps/session recordings/analytics, 1 = speculative)

**Impact** — How big is the potential upside?
- How many people does this affect? (5 = high-traffic page or flow, 1 = niche page with minimal visits)
- How different is this from the current experience? (5 = significant change in layout, messaging, or flow, 1 = minor copy tweak)

**Ease** — How hard is this to execute?
- How much time does it take to build and launch? (5 = under a day, 1 = multi-week dev project)
- How much does it cost? (5 = free or negligible, 1 = requires significant budget or tools)

**Scoring formula:** Probability1 × Probability2 × Impact1 × Impact2 × Ease1 × Ease2

A test scoring 3,600 (high impact, reasonable probability, easy to execute) gets prioritized over a test scoring 600 (low impact even though it's easy). This prevents the common trap of running easy-but-meaningless tests while high-impact opportunities sit in a backlog.

Build this as a simple spreadsheet. One tab for scoring, one tab for tracking. Score every experiment idea before it enters the pipeline. Run the highest-scoring tests first.

### The Experiment Tracker

Every experiment gets a single row in a tracking spreadsheet with three sections:

**Section 1 — Experiment Overview**
- Experiment name (descriptive, not "Test 1")
- Status (Idea → Queued → Live → Complete)
- Owner (who is running this test)
- Time period (how long will it run — minimum two full business weeks)
- Explanation (one paragraph: what exactly are you changing and why)
- Resources (who needs to be involved — design, dev, content)

**Section 2 — Research**
- Assumption: State it as "I believe that [change] will [outcome] because [reason]." This forces clarity. If you cannot complete this sentence, the experiment is not ready to run.
- Target audience: Who sees this test? All visitors, mobile only, returning visitors, paid traffic only?
- Metrics to track: Primary metric (conversion rate, bounce rate, form submissions) and one or two secondary metrics.
- Definitely successful when: Define the win condition before the test starts. "Form submissions increase by 15% with 95% confidence" is a success condition. "We see improvement" is not.
- Definitely failed when: Define the failure condition. "No statistically significant difference after 30 days" or "Bounce rate increases by more than 10%."

**Section 3 — Results**
- Results: What actually happened? Include the numbers.
- Validated? Yes or No — did the test confirm or reject the assumption?
- Learnings: What did you learn beyond the primary metric? Did anything unexpected happen in secondary metrics or specific segments?
- Next steps: If validated, implement permanently and move to the next hypothesis. If invalidated, what's the next test based on what you learned?
- Comments: Anything unusual — seasonal effects, a marketing campaign running simultaneously, technical issues during the test, traffic from non-target audiences skewing results.

### Example — Homepage Lead Capture Test

Here is what a real experiment looks like in the tracker:

**Scoring:** The team scores a homepage redesign test. Probability: 2 and 3 (moderate confidence — heatmaps show visitors interact with the header area but current elements are not driving clicks). Impact: 4 and 3 (homepage gets significant traffic and the change is visually substantial). Ease: 5 and 5 (no dev work needed, can be done with the CMS and existing assets). Composite score: 3,600. This ranks as the top priority.

**Tracker entry:**
- Name: Homepage Whitepaper Gate
- Status: Live
- Owner: Marketing team
- Time period: One month
- Explanation: Replace the two content blocks under the homepage header with new images and CTAs pointing to gated resources (whitepaper downloads) instead of ungated pages.
- Resources: Designer for new images, marketer for CTA copy and form setup.
- Assumption: "I believe that we can increase organic lead capture from homepage visitors by replacing informational content blocks with gated resource CTAs, because heatmap data shows visitors engage with this area but current elements do not collect any contact information."
- Target audience: Homepage visitors from organic search.
- Metrics to track: Homepage form submissions (primary), bounce rate (secondary).
- Success condition: Form submissions increase with statistical significance.
- Failure condition: No change in form submissions after 30 days, or bounce rate increases by more than 10%.
- Comments: "Potential risk — form submissions from non-target-market visitors may inflate results. Filter by geography and company type when analyzing."

After the test completes, the results section captures what happened, what was learned, and what to test next. This creates a permanent record that prevents your team from re-running failed tests or forgetting what worked.

**You can build this in a spreadsheet or use a dedicated experimentation platform.** A spreadsheet works perfectly for teams running 2–5 tests per month. If you scale beyond that, platforms like Mouseflow, VWO, or Optimizely offer built-in experiment tracking alongside their testing tools. The framework is the same regardless of where you track it — the discipline of scoring, documenting, and reviewing is what separates teams that compound improvements from teams that run random tests.
