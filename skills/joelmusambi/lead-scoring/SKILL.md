---
name: Lead Scoring
description: "Use this skill when setting up lead scoring, creating lead qualification criteria, building behavior-based scoring models, configuring CRM workflows for lead routing, or implementing predictive scoring. Covers opportunity-based scoring, correlation analysis, trigger formulas, multi-signal scoring, and automation."
category: Analytics
access: free
---

# Lead Scoring — Behavior-Based Scoring for B2B

This playbook covers how to build a lead scoring system that actually predicts which leads will convert. Most lead scoring implementations fail because they're built too early or based on assumptions instead of data.

## The Cardinal Rule: Wait for Data

Lead scoring should be one of the **last** things you implement in your demand gen engine, not the first. You need sufficient data to build scores that correlate with actual outcomes.

**Prerequisites before implementing lead scoring:**
- At least 6 months of lead data with outcomes (won/lost/disqualified)
- Clean CRM with consistent lead source tracking
- Established lead stages (Lead → MQL → SQL → Opportunity → Closed)
- An opportunities spreadsheet or pipeline report with enough records to find patterns

If you implement scoring too early, you'll create arbitrary scores that don't reflect reality, and sales will lose trust in the system.

## Phase 1: Build Your Opportunities Dataset

### Creating the Foundation

Before writing a single scoring rule, build a spreadsheet that connects lead behavior to outcomes:

1. **Export your opportunities/deals** from your CRM
2. **Add columns for:**
   - Company name
   - Lead source (original)
   - Last lead source
   - Deal status (won, lost, open)
   - Deal value
   - Time to close
   - All engagement data points (emails opened, pages visited, content downloaded, webinars attended, forms filled)

3. **Aggregate by company** — Sum all engagement scores per company into a single row

### The Correlation Test

Add a column for company lead status (active customer, lost deal, open opportunity, dormant lead) and create a formula to determine if there's a correlation between total engagement score and deal outcome.

**In practice, this correlation analysis typically shows that 90% of positive lead statuses match high engagement scores.** This validates that behavior-based scoring works for your business.

### What to Look For

| Signal | Score Impact | Why It Matters |
|--------|-------------|----------------|
| Visited pricing page | High (+15) | Direct buying intent |
| Attended webinar | Medium (+10) | Active engagement |
| Downloaded whitepaper | Medium (+8) | Research phase |
| Opened 3+ emails | Low (+5) | Baseline engagement |
| Visited careers page | Negative (-10) | Likely a job seeker |
| Free email domain | Negative (-5) | May not be decision maker |

## Phase 2: Define Your Scoring Model

### Demographic Scoring (Fit)

Score based on how well a lead matches your ideal customer profile:

**Positive signals:**
- Job title matches buyer persona (+20)
- Company size in target range (+15)
- Industry match (+10)
- Geographic location in target territory (+5)

**Negative signals:**
- Student or intern title (-20)
- Company too small/too large (-10)
- Competitor company (-50)
- Personal email domain (gmail, yahoo) (-5)

### Behavioral Scoring (Intent)

Score based on actions that indicate buying intent:

**High-intent actions (15-25 points each):**
- Requested a demo or consultation
- Visited pricing page
- Viewed product comparison page
- Replied to a sales email
- Attended a product-focused webinar

**Medium-intent actions (5-15 points each):**
- Downloaded a case study or whitepaper
- Attended a thought leadership webinar
- Visited 5+ pages in a session
- Returned to site within 7 days
- Engaged with 3+ emails in a sequence

**Low-intent actions (1-5 points each):**
- Opened a marketing email
- Visited the blog
- Followed on social media
- Viewed the about page

**Score decay:**
- Reduce score by 10% for every 30 days of inactivity
- After 120 days of no engagement, reset behavioral score to 0

## Phase 3: Multi-Signal Scoring

Beyond basic demographic and behavioral scoring, the most predictive models layer in external signals:

### Job Posting Urgency Language

Monitor target companies' job postings for signals:
- **High urgency:** "Immediate need," "ASAP," "backfill," "urgent"  — +25 points
- **Standard:** Regular job posting for relevant role — +10 points
- **Multiple openings:** Company has 3+ relevant positions open — +15 points

### Visit Frequency Patterns

- Visited 1x in 30 days — +5 points
- Visited 3x in 30 days — +15 points
- Visited 5+ times in 30 days — +25 points
- Visited and then returned within 48 hours — +20 points

### Email Engagement Depth

- Opened email — +2 points
- Clicked link in email — +5 points
- Clicked pricing or demo link — +15 points
- Replied to email — +25 points
- Forwarded email to colleague — +20 points

### Budget Signals

- Company budget in target range (from public data, RFPs, or enrichment) — +20 points
- Recently received funding — +15 points
- Fiscal year starts within 60 days — +10 points

### Time Since Last Contact

- Contacted within last 7 days — Neutral (0)
- 8-30 days since contact — +5 points (follow-up opportunity)
- 31-90 days since contact — +10 points (re-engagement opportunity)
- 90+ days since contact — -10 points (going cold)

## Phase 4: Calculate the Trigger Score

### Finding Your Threshold

Using your opportunities dataset:

1. For every won deal, note the lead score at the time they became an SQL
2. Calculate the average, median, and mode of these scores
3. The **median score of won deals** is your starting trigger threshold

**Example:**
- Won deals had scores ranging from 45 to 120
- Median score at SQL stage: 65
- Set initial trigger at 60 (slightly below median to capture edge cases)

### The Trigger Formula

```
Trigger Score = Demographic Score + Behavioral Score + External Signals - Decay
```

When a lead crosses the threshold:
1. CRM workflow fires automatically
2. Lead status changes to MQL
3. Sales rep is notified with full engagement history
4. Lead is assigned based on territory or round-robin rules

### Auto-Scored Urgency Ranking

Layer urgency on top of the base score:

| Urgency Level | Criteria | Action |
|--------------|----------|--------|
| Hot | Score > 90 + recent demo request | Immediate sales outreach within 1 hour |
| Warm | Score 60-90 + multiple recent touchpoints | Sales outreach within 24 hours |
| Nurture | Score 30-59 | Continue marketing sequences |
| Cold | Score < 30 or 120+ days inactive | Re-engagement campaign or archive |

## Phase 5: CRM Workflow Automation

### HubSpot Implementation

1. **Create a custom score property** — Use HubSpot's lead scoring tool or build custom calculated properties
2. **Build enrollment triggers:**
   - When score crosses threshold → Change lifecycle stage to MQL
   - When score crosses threshold → Create task for sales rep
   - When score crosses threshold → Send internal notification email
   - When score crosses threshold → Add to sales sequence

3. **Build demotion workflows:**
   - When score drops below threshold after 30 days → Move back to Lead stage
   - When lead is disqualified by sales → Reset score and exclude from future scoring

### Salesforce Implementation

1. Use Pardot scoring or build custom roll-up fields
2. Create Process Builder or Flow automations for threshold-based routing
3. Build reports that show score distribution across pipeline stages

## Phase 6: Close Probability Modeling

### Signals That Predict Close

Combine lead score with pipeline-specific signals:

| Signal | Close Probability Impact |
|--------|------------------------|
| Champion identified (internal advocate) | +30% |
| Multiple stakeholders engaged | +20% |
| Budget confirmed | +25% |
| Timeline defined | +15% |
| Competitor mentioned (comparing) | +10% |
| Legal/procurement involved | +20% |
| Decision pushed once | -15% |
| Decision pushed twice | -30% |
| Single-threaded (one contact only) | -20% |

### Building the Model

1. Export all closed deals (won and lost) from the past 12 months
2. For each deal, note which signals were present
3. Calculate the win rate for deals with each signal combination
4. Weight signals by their predictive power
5. Apply to current pipeline to prioritize

## Phase 7: Continuous Optimization

### Monthly Review Process

1. **Pull all leads that crossed the threshold** in the past 30 days
2. **Track outcomes** — What percentage became SQLs? Opportunities? Won deals?
3. **Identify false positives** — High-scoring leads that turned out to be unqualified
4. **Identify false negatives** — Deals that closed but had low scores
5. **Adjust weights** — Increase weight on signals that predict, decrease on those that don't

### Key Metrics

- **Score-to-SQL conversion rate** — What percentage of leads that hit threshold become SQLs?
- **MQL-to-Opportunity rate** — How often do scored leads create pipeline?
- **Score accuracy** — Correlation between score and deal outcome
- **Sales acceptance rate** — How often does sales agree the lead is qualified?

### Target Benchmarks

- Score-to-SQL conversion: 40-60%
- MQL-to-Opportunity: 20-35%
- Sales acceptance rate: > 70%
- Score accuracy (correlation with closed-won): > 80%

If sales acceptance rate drops below 50%, your scoring model needs recalibration. The fastest way to lose sales trust is sending them unqualified leads with high scores.

## Common Mistakes

1. **Scoring too many activities equally** — A pricing page visit is not the same as a blog visit
2. **No score decay** — Leads that engaged 6 months ago aren't the same as those engaging today
3. **Ignoring negative signals** — Competitors, job seekers, and students should be scored down
4. **Not validating with data** — Always test your model against historical outcomes before deploying
5. **Setting it and forgetting it** — Scoring models need monthly tuning as your business evolves
6. **Implementing too early** — You need data to build accurate scores. Don't guess.
