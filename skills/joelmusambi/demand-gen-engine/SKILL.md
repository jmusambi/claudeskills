---
name: Demand Gen Engine
description: "Use this skill when building a demand generation engine from scratch, setting up B2B lead generation, creating marketing infrastructure, revamping demand gen, increasing lead flow, or planning acquisition strategy for a new company. Covers data infrastructure cleanup, persona creation, lead stages, CRM optimization, channel selection, and experimental loops."
category: Growth
access: free
---

# Demand Gen Engine — Building B2B Demand Generation from Scratch

This is a complete playbook for building a demand generation engine at a B2B company, whether you're the first marketer or inheriting a broken system. This framework has been used to increase lead generation by 1000-1400% at multiple companies.

## Core Principle: Start with a Blank Slate

What worked at your last company is irrelevant. Every company has different buyer personas, different sales cycles, different competitive landscapes. Senior marketers who can't adapt their tactics to a new environment fail repeatedly.

Go into every new company with:
- No assumptions about which channels will work
- Willingness to learn the new market from scratch
- An experimental mindset
- Creativity to figure out what's going to work here, not what worked before

## Phase 1: Analyze Existing Data Infrastructure

Before you run a single campaign, audit what exists. You cannot optimize what you cannot measure.

### Common Problems You'll Find

1. **GA goals set up as events instead of destination pages** — This is the #1 mistake. Event-based goals produce inaccurate data. Turn them off immediately.
2. **No conversion matching across platforms** — Your GA goals, Google Ads conversions, and LinkedIn Campaign Manager conversions should all point to the same destination pages.
3. **No lead source tracking** — If you can't attribute leads to their source, you're running campaigns blindly.
4. **No sales data connection** — Marketing data lives in one system, sales pipeline in another, with no bridge.

### The Fix

1. Create destination page goals in GA for each conversion event (form submissions, demo requests, content downloads)
2. Upload those same goals as conversions in Google Ads
3. Create matching conversions in LinkedIn Campaign Manager
4. Set up lead source tracking in your CRM with custom fields for original source and last source
5. Ensure the data from all sources matches — when GA says 10 form submissions, your CRM should show 10 new contacts from that source

**Without accurate data sources, you're running campaigns blindly, which makes optimization impossible.** Cleaning up your data infrastructure is absolutely key to improving lead gen.

## Phase 2: Customer Persona Creation

You cannot run effective acquisition campaigns without understanding who you're targeting.

### Process

1. **Schedule company-wide brainstorming sessions** — Include sales, customer success, product, and leadership. Use a structured template (HubSpot's persona template works well as a starting framework).
2. **Document these elements for each persona:**
   - Job title and role
   - Company size and industry
   - Pain points and challenges
   - Goals and motivations
   - Where they spend time online
   - How they make purchasing decisions
   - Who else is involved in the buying process
   - What content resonates with them
   - Preferred communication channels

3. **Validate with data** — Cross-reference your personas with actual customer data. Look at your best customers and work backward.

### Key Insight: Buyer Decision Components

For larger accounts, multiple stakeholders are involved:
- **The end user** cares about quality and ease of use
- **The purchasing team** cares about cost and compliance
- **The executive sponsor** cares about ROI and strategic alignment

Your messaging and content must address all stakeholders in the buying committee.

## Phase 3: Lead Stage Definition and Qualification Criteria

### Define Your Stages

Establish clear definitions that everyone agrees on:

- **Lead** — Someone who has expressed interest (form fill, content download, webinar registration)
- **MQL (Marketing Qualified Lead)** — A lead that meets your persona criteria AND has engaged with multiple touchpoints
- **New MQL** — A fresh MQL that hasn't been worked by sales yet
- **SQL (Sales Qualified Lead)** — Sales has accepted the lead and confirmed fit through conversation
- **Opportunity** — Active deal in pipeline with defined next steps

### Content Mapping by Stage

Once lead qualifications are agreed upon, list the content needed at each stage to move a lead down the funnel:

| Stage | Content Type | Goal |
|-------|-------------|------|
| Awareness | Blog posts, social content, webinars | Attract and educate |
| Interest | Case studies, whitepapers, guides | Build credibility |
| Consideration | Product demos, comparison guides, ROI calculators | Prove value |
| Decision | Free trials, custom proposals, references | Close the deal |

## Phase 4: CRM Optimization and Data Flow

### The Dual-Platform Challenge

Most B2B companies run two systems: a marketing platform (HubSpot, Pardot, ActiveCampaign) and a sales CRM (Salesforce, NetSuite, Pipedrive). Making data flow between them is critical.

### What You Need

1. **Integration between marketing and sales platforms** — Either native (like Pardot + Salesforce) or through a custom integration or middleware
2. **Bidirectional data sync** — Marketing activities should be visible in the sales CRM, and sales pipeline data should inform marketing
3. **Custom fields for attribution** — Lead source, last lead source, campaign source, UTM parameters
4. **Lifecycle stage tracking** — Every lead should have a clear status that both systems recognize

### CRM Cleanup Checklist

- [ ] Deduplicate contacts
- [ ] Standardize field values (no more "USA" vs "United States" vs "US")
- [ ] Set up lead source tracking with consistent naming conventions
- [ ] Create lifecycle stage properties
- [ ] Build dashboards for marketing attribution
- [ ] Train sales on the new process

### The Payoff

Once this is in place, AEs can finally see the source of their leads and their engagement history. This transforms the sales team's ability to personalize outreach and close deals.

## Phase 5: Acquisition Channel Selection

### The Framework

1. **Create a list of all potential acquisition channels** — Email, LinkedIn, Google Ads, Facebook, events/trade shows, webinars, content syndication, partnerships, referrals, direct mail, ABM sequences, community, SEO, etc.

2. **Research audience presence** — Go into each acquisition platform and determine your audience size there. If your total addressable market on a platform is 500 people, that changes your strategy.

3. **Assess feasibility** — Can you realistically execute on this channel with your current team and budget?

4. **Create an ROI hypothesis per channel** — Before spending a dollar, estimate what you expect to get back.

5. **Prioritize and experiment** — Start with 3-4 channels, run controlled experiments, and double down on what works.

### Channel Selection Insights

- **Email** is almost always the #1 B2B acquisition channel. Start building your list immediately.
- **Events and webinars** are high-touch but produce quality pipeline
- **LinkedIn** is often the best digital advertising platform for B2B, but only when targeting and creative are done right
- **Google Ads** works for intent-based searches but can be expensive for broad keywords
- **Content syndication** often disappoints — leads are high volume but low quality

### Market Segmentation by Budget

Segment your target market by budget size:
- **Enterprise** ($100M+) — Requires ABM approach, long sales cycles, multiple stakeholders
- **Mid-market** ($30-100M) — Sweet spot for most B2B companies, balanced approach
- **SMB** (under $30M) — Higher volume, faster sales cycles, more self-serve

Focus on where you can win. Often this means targeting the mid-tier where competition is less intense than enterprise and deal sizes are meaningful.

### Strategic Advantage: Go Where They Aren't

Focus on markets where competitors aren't competing heavily:
- Rural and underserved markets
- Niche verticals
- Geographic regions competitors have neglected

This is often where the biggest wins come from.

## Phase 6: The Experimental Loop

### Hypothesis-Driven Campaigns

Before any campaign goes live, create a hypothesis document:

```
Campaign: [Name]
Channel: [Platform]
Audience: [Target segment]
Budget: [Amount]
Duration: [Time period]
Landing page conversion rate (historical): [X%]
Expected traffic: [N visitors]
Expected form submissions: [Traffic × Conversion Rate]
Expected CPL: [Budget ÷ Expected Submissions]
Hypothesis: [What you believe will happen and why]
```

The "expected form submissions" is calculated from your average landing page conversion rate. If you're sending 1,000 visitors to a page that converts at 3%, you should expect ~30 form submissions.

### Platform ROI Template

Track ROI per platform on a rolling basis:

| Platform | Spend | Leads | CPL | Pipeline Created | Pipeline Won | ROI |
|----------|-------|-------|-----|-----------------|-------------|-----|
| LinkedIn | $X | N | $Y | $Z | $W | W/X |
| Google | $X | N | $Y | $Z | $W | W/X |
| Email | $X | N | $Y | $Z | $W | W/X |

This should be updated monthly and shared with leadership.

### The Experiment Cycle

1. **Hypothesis** — What do you expect to happen?
2. **Execute** — Run the campaign for a statistically significant period
3. **Measure** — Compare results to hypothesis
4. **Learn** — What worked? What didn't? Why?
5. **Iterate** — Double down on winners, kill losers, test new variations

### Reducing Spend While Improving Results

It's common to find that a previous team or agency was overspending on underperforming channels. After auditing, you may find you can:
- Reduce Google Ads spend by 60% while producing better results by focusing on the right keywords
- Shift budget to channels with proven ROI
- Eliminate campaigns that produce unqualified leads

## Phase 7: Building the Team

### The Two-Person Engine

A demand gen engine can be built with just two people if they have complementary skills:
- **Data marketer** — Analytics, CRM, automation, paid acquisition, tracking, experimentation
- **Content writer** — Storytelling, copywriting, thought leadership, case studies, email sequences

With the right combination of experience and expertise, two people can cover the skills needed to build demand gen from scratch and produce results that rival larger teams.

### What Each Person Needs

The data marketer should have knowledge of all marketing platforms. This helps determine which channels to pursue and how to optimize them. Keeping a marketing notes journal with 1000+ lines of tactics, experiments, and learnings is invaluable.

The content writer needs storytelling capabilities and understanding of the buyer's journey. Softer content in nurture sequences reduces unsubscribes. Content should be fun and personable, not generic corporate messaging.

## Measuring Success

### Key Metrics to Track

- **Lead volume** — Month-over-month growth in total leads
- **Lead quality** — Percentage of leads that become MQLs, then SQLs
- **Pipeline created** — Total pipeline value attributed to marketing
- **Pipeline won** — Closed-won revenue attributed to marketing
- **CAC** — Customer acquisition cost by channel
- **CPL** — Cost per lead by channel
- **Time to MQL** — How long leads take to qualify
- **Channel ROI** — Return on investment per acquisition channel

### Realistic Timelines

- **Month 1-2** — Data infrastructure cleanup, persona creation, CRM optimization
- **Month 3-4** — First experiments launched, initial data collection
- **Month 5-6** — Patterns emerge, double down on winners
- **Month 7-9** — Scaled campaigns, lead scoring implementation
- **Month 9-12** — Mature engine producing consistent pipeline

With this framework, 1000%+ lead generation growth in 9-12 months is achievable. The key is disciplined execution of each phase in sequence — don't skip ahead to running ads before your data infrastructure is clean.

## Common Mistakes to Avoid

1. **Relying on agency tactics from the past** — Agencies often bid on broad keywords that are technically related to your product but not what buyers actually search for
2. **Running campaigns without tracking** — Every dollar should be attributable
3. **Skipping the persona work** — You'll waste budget targeting the wrong people
4. **Not cleaning up the CRM first** — Dirty data produces misleading insights
5. **Expecting instant results** — Demand gen is a system, not a campaign. It takes months to build but compounds over time
6. **Not documenting learnings** — Keep a journal of what works and what doesn't. This institutional knowledge is invaluable
