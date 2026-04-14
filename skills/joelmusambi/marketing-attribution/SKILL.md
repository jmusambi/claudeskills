---
name: Marketing Attribution
description: "Use this skill when building marketing attribution, tracking campaign ROI, analyzing pipeline influence by channel, creating attribution models, building ROI spreadsheets, or determining which marketing activities drive revenue. Covers first-touch, multi-touch, pipeline analysis, and the opportunities sheet framework."
category: Analytics
access: free
---

# Marketing Attribution — Tracking What Actually Drives Revenue

This playbook covers how to build marketing attribution tracking that goes beyond surface-level metrics. Most marketers can tell you how many leads they generated but can't tell you which channels create pipeline vs. which channels close deals — and those are often different channels.

## Core Principle: Spreadsheets Beat Dashboards for Deep Analysis

Dashboards are great for monitoring. But for deep attribution analysis, spreadsheets and pivot tables are often superior because:
- You can manipulate data in ways dashboards don't support
- Pivot tables let you slice data by any combination of dimensions
- You can build custom formulas for attribution models
- It's faster to iterate on analysis

**Use dashboards for monitoring, spreadsheets for analysis.**

## The Opportunities Sheet Framework

This is the most powerful tool in your attribution stack. It connects marketing activity to pipeline outcomes.

### Building the Sheet

1. **Export all opportunities/deals** from your CRM (last 12 months minimum)
2. **Add these columns:**

| Column | Source | Purpose |
|--------|--------|---------|
| Company name | CRM | Identification |
| Deal value | CRM | Revenue tracking |
| Deal status | CRM | Won/Lost/Open |
| Close date | CRM | Timing analysis |
| Original lead source | CRM custom field | First-touch attribution |
| Last lead source | CRM custom field | Last-touch attribution |
| All touchpoints | Marketing platform | Multi-touch attribution |
| Campaign source | UTM/CRM | Campaign-level attribution |
| Channel | Derived | Channel-level attribution |
| Time to close | Calculated | Sales cycle analysis |
| Pipeline stage | CRM | Funnel analysis |

3. **Use formulas to aggregate** — SUM, COUNTIF, AVERAGEIF
4. **Build pivot tables** for every dimension you want to analyze

### Key Pivot Table Views

**Pipeline Created by Channel:**
- Rows: Channel (Email, LinkedIn, Google, Events, etc.)
- Values: Count of opportunities, Sum of pipeline value
- Filter: Date range

**Pipeline Won by Channel:**
- Same as above but filtered to Closed-Won deals only
- This often tells a very different story than pipeline created

**Campaign ROI:**
- Rows: Campaign name
- Values: Spend, Leads generated, Pipeline created, Pipeline won
- Calculated field: ROI = (Revenue - Spend) / Spend

### The Critical Insight

Some channels are better at creating pipeline while others close deals. For example:
- **LinkedIn ads** might create the most pipeline opportunities
- **Email nurture** might influence the most closed-won deals
- **Events** might create fewer leads but those leads close at a higher rate
- **Webinars** might be the leading pipeline driver with the highest total value

Without the opportunities sheet, you'd only see lead volume and miss these crucial differences.

## Attribution Models

### First-Touch Attribution

Credits the channel that first brought the lead to you.

**When to use:** Understanding which channels drive awareness and new leads.

**How to implement:**
- Track the original lead source in a CRM custom field
- This field should never change once set
- Use UTM parameters to capture the source automatically

### Last-Touch Attribution

Credits the last marketing touchpoint before the lead converted or the deal closed.

**When to use:** Understanding which channels drive conversion actions.

**How to implement:**
- Track the last lead source in a separate CRM field
- This field updates every time the lead engages with a new campaign
- Useful for understanding what triggers the buying action

### Multi-Touch Attribution

Credits all touchpoints in the buyer's journey.

**Linear model:** Equal credit to all touchpoints
```
Credit per touchpoint = Deal value / Number of touchpoints
```

**Time-decay model:** More credit to touchpoints closer to close
```
Most recent touchpoint: 40%
Second most recent: 25%
Third most recent: 15%
Remaining touchpoints: 20% split equally
```

**Position-based (U-shaped):** First and last touch get more credit
```
First touch: 40%
Last touch: 40%
Middle touchpoints: 20% split equally
```

### Which Model to Use

- **New company / early stage:** First-touch (you need to know what drives awareness)
- **Established pipeline:** Multi-touch time-decay (you need to know what accelerates deals)
- **Evaluating channels for budget:** Last-touch (you need to know what converts)

In practice, run all models simultaneously and compare. The differences reveal insights.

## Campaign ROI Templates

### Pre-Campaign Hypothesis

Before launching any campaign, document:

```
Campaign Name: _______________
Channel: _______________
Target Audience: _______________
Budget: $_______________
Duration: _______________ weeks
Expected Traffic: _______________
Expected Landing Page Conversion: ___%
Expected Form Submissions: Traffic × Conversion Rate = ___
Expected CPL: Budget / Expected Submissions = $___
Hypothesis: _______________
```

The expected form submissions calculation is simple but powerful. If you know your landing page converts at 3% and you're sending 2,000 visitors, you should expect 60 form submissions. If you get 30, either your traffic quality or landing page needs work.

### Post-Campaign ROI

```
Campaign Name: _______________
Actual Spend: $_______________
Leads Generated: _______________
Actual CPL: $_______________
Pipeline Created: $_______________
Pipeline Won: $_______________
Campaign ROI: (Pipeline Won - Spend) / Spend = ___%
Time to Pipeline: _______________ days
Time to Revenue: _______________ days
```

### Platform-Level ROI Tracking

Track monthly across all platforms:

| Month | Platform | Spend | Leads | CPL | MQLs | SQLs | Pipeline | Won | ROI |
|-------|----------|-------|-------|-----|------|------|----------|-----|-----|
| Jan | LinkedIn | $5K | 45 | $111 | 12 | 5 | $150K | $50K | 900% |
| Jan | Google | $3K | 20 | $150 | 4 | 1 | $30K | $0 | -100% |
| Jan | Email | $500 | 80 | $6 | 25 | 10 | $200K | $75K | 14,900% |

This data makes budget conversations easy. When leadership sees email producing $75K on $500 spend while Google produced $0 on $3K, the reallocation decision is obvious.

## Custom Fields for Attribution

### Essential CRM Fields

Set up these custom fields on every lead/contact record:

1. **Original Lead Source** — First channel that brought this lead (never overwritten)
   - Values: Direct, Organic Search, Paid Search, LinkedIn Ads, Facebook Ads, Email, Event, Referral, Webinar, Content Syndication, Partner

2. **Last Lead Source** — Most recent channel interaction (updates with each engagement)
   - Same values as above

3. **Original Campaign** — First campaign that generated this lead

4. **Last Campaign** — Most recent campaign interaction

5. **UTM Source** — Captured from URL parameters

6. **UTM Medium** — Captured from URL parameters

7. **UTM Campaign** — Captured from URL parameters

### Building Full Lifecycle Attribution

The goal is to track the complete journey:

```
Lead Source → Lead → MQL → SQL → Opportunity → Closed-Won
```

Every step should be timestamped and attributed. This lets you calculate:
- Time from lead to MQL (by source)
- Time from MQL to SQL (by source)
- Time from SQL to Close (by source)
- Total sales cycle length (by source)

Different channels produce leads with different velocity. Email leads might close in 30 days while event leads take 90 days. Both can be valuable, but you need this data to set expectations.

## Trade Show and Event ROI

### Tracking Framework

Events are expensive and often poorly measured. Fix this:

1. **Pre-show:** Set up unique landing pages, QR codes, and UTM links for each event
2. **At the show:** Scan badges or collect cards with a system that feeds into CRM
3. **Post-show:** Tag all contacts with event name in CRM, create a nurture sequence
4. **Measure:**
   - Total leads collected
   - Leads that became MQLs
   - Pipeline created (within 6 months of event)
   - Revenue closed (within 12 months of event)
   - Event ROI = (Revenue - Total Cost) / Total Cost

### Building Event Dashboards

Track across all events in a single view:
- Leads per event
- CPL per event
- Pipeline per event
- Revenue per event
- ROI per event

This data drives next year's event strategy. If a $10K conference generated $200K in pipeline, increase investment. If a $15K conference generated zero, cut it.

## Advanced: SQL Database Attribution

### When Spreadsheets Aren't Enough

When your marketing stack generates too much data for spreadsheets, build an SQL database:

1. Connect marketing platforms to a central database
2. Store referral URLs and UTM parameters in separate tables with session IDs
3. Join tables to map complete user journeys:

```sql
SELECT
  u.email,
  s.first_session_source,
  s.first_session_medium,
  s.total_sessions,
  o.deal_value,
  o.deal_status
FROM users u
JOIN sessions s ON u.user_id = s.user_id
JOIN opportunities o ON u.email = o.contact_email
WHERE o.deal_status = 'Closed Won'
GROUP BY u.email
```

This enables patterns that spreadsheets can't find:
- Multi-session attribution paths
- Cross-device tracking
- Lead score to pipeline correlations
- Channel interaction effects (leads who see LinkedIn + Email close at 2x the rate of email alone)

## The Monthly Attribution Review

### Process

1. Pull the opportunities sheet for the past 30 days
2. Update all pivot tables
3. Compare channel performance to previous month
4. Identify trends (channels gaining or losing effectiveness)
5. Calculate blended CAC and CAC by channel
6. Present findings to leadership with specific recommendations
7. Adjust budget allocation based on data

### Questions to Answer Monthly

- Which channel produced the most pipeline this month?
- Which channel closed the most revenue?
- What's our blended CAC vs. target?
- Are there channels with improving or declining efficiency?
- Which campaigns over-performed or under-performed vs. hypothesis?
- Where should we shift budget next month?

Once attribution is in place, every marketing dollar becomes accountable. You can walk into any budget conversation with data that shows exactly which activities drive revenue and which don't.
