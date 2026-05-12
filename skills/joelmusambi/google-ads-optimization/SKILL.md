---
name: Google Ads Optimization Playbook
description: |
  Advanced Google Ads optimization playbook covering keyword diagnosis, quality score engineering, dynamic keyword insertion,
  GCLID offline conversion tracking, Target ROAS, audience strategies, Performance Max, attribution models, and bid strategy fixes.
  Trigger phrases: Google Ads, AdWords, quality score, keyword insertion, GCLID, conversion tracking, Target ROAS,
  Performance Max, customer match, bid strategy, Google Ads optimization, search ads, Gmail ads, CPA simulator,
  campaign experiments, auction insights, competitor targeting, paid search, PPC optimization
category: Paid Media
access: free
---

# Google Ads Optimization Playbook

A practitioner-level guide to advanced Google Ads management, covering the techniques that separate efficient, ROI-positive accounts from bloated spend with poor returns.

---

## 1. Keyword Diagnosis Before Campaign Launch

### Ad Preview and Diagnosis Tool

Before adding any keyword to a live campaign, test it using the Ad Preview and Diagnosis Tool (found under Tools and Settings then Planning).

**What this tells you:**
- Whether your ad is actually showing for the keyword
- What competitor ads appear for that term
- Whether the keyword matches actual search intent (the results page reveals what Google thinks users want when they search this term)
- Geographic variations in ad display

**Why this matters:** Many advertisers add keywords based on volume data alone without checking whether the search results page matches their intent. A keyword with 10,000 monthly searches is worthless if Google interprets the intent as informational and your landing page is transactional.

**Process:**
1. Enter the keyword in the Ad Preview tool
2. Set the geographic location to your target market
3. Set the device type (mobile vs desktop)
4. Review the organic and paid results that appear
5. Ask: "Would someone searching this term genuinely want what I am offering?"
6. If the results page is dominated by informational content (blog posts, Wikipedia, how-to guides), your commercial landing page will have poor Quality Score and high CPC

### Keyword Intent Classification

Classify every keyword before adding it:

| Intent Type | Signals | Expected CPC | Conversion Likelihood |
|---|---|---|---|
| Navigational | Brand names, specific products | Low-Medium | High (if your brand) |
| Informational | How to, what is, guide, tutorial | Low | Low |
| Commercial Investigation | Best, review, comparison, vs | Medium | Medium-High |
| Transactional | Buy, pricing, demo, free trial | High | High |

Focus budget on commercial investigation and transactional keywords. Use informational keywords only in separate campaigns with content-focused landing pages and lower bids.

---

## 2. Quality Score Engineering

### The 1 Ad Group Per Keyword Structure

For campaigns with fewer than 50 keywords, the single keyword ad group (SKAG) structure is the most reliable way to engineer high Quality Scores from launch.

**How it works:**
- Create one ad group per keyword
- Name the ad group exactly matching the keyword
- Write ad headlines that include the exact keyword
- Direct to a landing page with the keyword in the H1 and URL

**Why this works:** Quality Score is composed of three factors:
1. **Expected CTR** (historical performance of the keyword)
2. **Ad relevance** (how closely your ad matches the keyword)
3. **Landing page experience** (how relevant and useful the landing page is)

When your ad group contains a single keyword, and your ad headline includes that exact keyword, you achieve near-perfect ad relevance. This virtually guarantees a starting Quality Score of 4-6 out of 10, which is above the median and means you pay less per click from day one.

**Naming convention:**
- Keyword: `b2b marketing software`
- Ad group name: `b2b marketing software`
- Ad headline 1: `B2B Marketing Software`
- Landing page H1: `B2B Marketing Software for Growing Teams`
- Landing page URL: `/b2b-marketing-software`

**When NOT to use SKAGs:** If you have 200+ keywords, the management overhead becomes unsustainable. In that case, group tightly related keywords (3-5 per ad group) by theme and use dynamic keyword insertion.

### Quality Score Improvement Levers

| Quality Score | Action |
|---|---|
| 1-3 | Pause keyword -- landing page or intent mismatch is severe |
| 4-5 | Improve ad relevance and landing page alignment |
| 6-7 | Good baseline -- optimize CTR with ad copy testing |
| 8-10 | Excellent -- scale spend on these keywords |

---

## 3. Dynamic Keyword Insertion

### On Ads

Dynamic Keyword Insertion (DKI) automatically inserts the user's search term into your ad headline or description.

**Syntax:** `{KeyWord:Default Text}`

- `{KeyWord:}` capitalizes Each Word
- `{Keyword:}` capitalizes First word only
- `{keyword:}` no capitalization
- `{KEYWORD:}` ALL CAPS

**Example:**
- Headline: `Best {KeyWord:Marketing Software}`
- User searches "email automation tool"
- Ad displays: `Best Email Automation Tool`

**Guardrails:**
- Always set a sensible default text in case the search term is too long (30 character headline limit, 90 character description limit)
- Review your search terms report weekly to ensure DKI is not inserting irrelevant or embarrassing terms
- Do not use DKI with broad match keywords -- the inserted terms will be too unpredictable

### On Landing Pages

This is where most advertisers miss a significant optimization. Use URL parameters to dynamically change landing page headlines to match the keyword that triggered the ad.

**Implementation:**
1. Append `{keyword}` parameter to your final URL: `example.com/solution?kw={keyword}`
2. Use JavaScript on the landing page to read the URL parameter and replace the H1 text
3. The landing page headline now matches the exact search term

**Impact:** This improves Quality Score's landing page experience component and increases on-page conversion rates by 15-30% in testing, because the visitor sees exact continuity from their search query through the ad to the landing page.

---

## 4. GCLID Offline Conversion Tracking

### Why This Matters for B2B

Most B2B conversions do not happen online. A form submission is not a sale -- it is a lead. The actual conversion (closed deal, signed contract) happens weeks or months later in a CRM. Without offline conversion tracking, Google Ads optimizes for form fills, not revenue.

### Implementation Steps

1. **Enable auto-tagging** in Google Ads settings (this appends the GCLID parameter to your URLs automatically)
2. **Capture the GCLID** on your landing page using a hidden form field -- when the form is submitted, the GCLID is stored alongside the lead in your CRM
3. **Map conversions in your CRM** -- when a lead closes as won, export the GCLID with the conversion value and date
4. **Upload to Google Ads** via the Conversions section (manual upload or automated via API)

**Automation option:** Connect your CRM to Google Ads using Zapier or a native integration to automatically push offline conversions when deal stages change. This keeps your data fresh without manual exports.

### Using Offline Conversions for Bidding

Once you have 90+ days of offline conversion data uploaded, switch your bid strategy to Target ROAS or Maximize Conversion Value. The algorithm will now optimize for actual revenue, not just form submissions. This single change can transform campaign ROI because the algorithm learns which keyword-audience-time combinations produce real customers, not just leads.

---

## 5. Target ROAS Setup and Calculation

### Calculating Your Target ROAS

**Formula:** Target ROAS = (Revenue from Ads / Cost of Ads) x 100

**Example:**
- Average deal value: $50,000
- Close rate from Google Ads leads: 10%
- Expected revenue per lead: $5,000
- Target CPA (what you can afford per lead): $500
- Target ROAS: ($5,000 / $500) x 100 = 1,000%

### Implementation Guidelines

- **Do not set Target ROAS immediately** on a new campaign. Run with Maximize Clicks or Maximize Conversions for 4-6 weeks to build conversion history.
- **Minimum conversion volume:** You need at least 15 conversions in the last 30 days before Target ROAS bidding can function. For offline conversions, this means waiting until enough data has been uploaded.
- **Start conservative:** Set your initial Target ROAS 20% below your actual target. If your real target is 1,000%, set it to 800%. This gives the algorithm room to learn without immediately restricting delivery.
- **Adjust gradually:** Increase Target ROAS by 10-20% increments every 2 weeks. Aggressive jumps cause the algorithm to severely restrict impressions.

### CPA Simulator

Use the CPA Simulator (found in keyword-level columns) to model how raising or lowering your target CPA affects projected conversions and spend. This helps you find the efficiency frontier -- the point where increasing CPA no longer produces proportional conversion gains.

**How to access:** Add the "CPA Simulator" columns to your keyword view. It shows estimated conversions at various CPA levels so you can identify diminishing returns.

---

## 6. Audience Strategies

### Customer Match

Upload your contact list (emails, phone numbers, mailing addresses) to target known contacts across Google Search, Gmail, YouTube, and Display.

**Use cases:**
- **Branded awareness:** Show ads to your CRM contacts when they search for your brand or competitors
- **Upsell campaigns:** Target existing customers with upgrade offers on YouTube and Gmail
- **Exclusion:** Exclude existing customers from acquisition campaigns to avoid wasted spend
- **Similar audiences:** Google automatically creates "similar to Customer Match" audiences you can target

**Requirements:**
- Account must have a good history of policy compliance
- Minimum 1,000 active members in the list
- Lists must be updated at least every 90 days

### Custom Affinity Audiences

Build audiences based on interests, URLs, and apps your target customers engage with.

**For B2B, define custom affinity audiences using:**
- URLs of industry publications your buyers read
- URLs of competitor websites
- Keywords related to your buyers' professional interests
- Apps your target audience uses

### Competitor Keyword Targeting

Bidding on competitor brand keywords is a legitimate and often highly profitable strategy.

**Advanced tactic:** When targeting competitor keywords, exclude geographic areas where the competitor has physical offices. Employees at those offices frequently search their own company name, and they are not prospects. They inflate your impression count without converting. Most competitors neglect to check Auction Insights, so they will not notice you are bidding on their terms.

**Exclusion method:**
1. Identify competitor office locations
2. Create location exclusions for those cities or zip codes
3. This eliminates employee searches and focuses spend on actual prospects evaluating the competitor

### Gmail Ads with Competitor Targeting

Gmail ads appear in the Promotions tab of Gmail. Target users who receive emails from competitors by using competitor domain names as keywords in a custom audience.

**Setup:**
1. Create a Display campaign (Gmail ads are now part of Display/Discovery)
2. Use custom segments with competitor URLs and keywords
3. Write ad copy that positions against competitor pain points
4. Link to a comparison or switching page

---

## 7. Campaign Structure and Strategy

### Performance Max Campaigns

Performance Max (PMax) campaigns use automation to deliver ads across all Google surfaces (Search, Display, YouTube, Gmail, Maps, Discover).

**When to use PMax:**
- Ecommerce with product feeds (strongest use case)
- Lead generation when you have strong offline conversion data feeding back
- When you want incremental reach beyond Search

**When to avoid PMax:**
- New accounts with no conversion history
- When you need granular keyword-level control
- When your conversion tracking is incomplete (PMax with bad data optimizes toward bad outcomes)

**PMax best practices:**
- Provide the highest quality creative assets possible (images, videos, headlines, descriptions)
- Create separate asset groups for distinct audience segments
- Add audience signals to guide the algorithm (Customer Match lists, custom segments)
- Run PMax alongside standard Search campaigns -- PMax does not fully replace Search for high-intent keywords

### Attribution Model Selection

**Available models:**
- Last click (default, but least informative)
- First click
- Linear
- Time decay
- Position-based
- Data-driven (recommended when you have enough conversion volume)

**Recommendation:** Switch to data-driven attribution as soon as your account qualifies (requires 300+ conversions and 3,000+ ad interactions in the last 30 days). Data-driven attribution uses machine learning to distribute credit based on actual conversion path analysis, giving you a more accurate picture of which keywords and campaigns truly drive results.

### The Bid Strategy Alignment Fix

**Symptom:** Impressions suddenly drop despite no changes to budget, keywords, or targeting.

**Diagnosis:** Check whether your Marketing Objective (set at the campaign level) aligns with your bid strategy. A mismatch causes the algorithm to restrict delivery.

**Common mismatch:** Campaign objective set to "Leads" but bid strategy set to "Maximize Clicks." The system detects conflicting signals and throttles delivery.

**Fix:**
1. Go to Campaign Settings
2. Verify the campaign objective
3. Ensure the bid strategy matches (Leads objective should use Maximize Conversions or Target CPA, not Maximize Clicks)
4. If you changed bid strategies recently, allow 7-14 days for the learning phase to stabilize before making further changes

---

## 8. Campaign Experiments

### A/B Testing Ad Strategies

Google Ads Experiments let you split traffic between your original campaign and a test variant.

**Setup:**
1. Go to the campaign you want to test
2. Click Experiments then Create Experiment
3. Choose the variable to test (bid strategy, ad copy, landing page, audience)
4. Set the traffic split (50/50 for fastest statistical significance)
5. Set the experiment duration (minimum 2-4 weeks, ideally until you reach 100+ conversions per variant)
6. Monitor results and apply the winner

**What to test:**
- Bid strategy changes (Manual CPC vs Target CPA vs Maximize Conversions)
- Landing page variations
- Ad copy themes (benefit-driven vs feature-driven vs social proof)
- Audience targeting additions
- Match type changes

### Location of Interest Targeting

**Default setting:** Google targets people "in or who show interest in" your target locations. This means someone in another country researching your target city will see your ads.

**For local businesses:** Change to "Presence: People in or regularly in your target locations" to avoid irrelevant clicks.

**Radius experimentation:** Test different radius sizes around your target locations:
- Start with a wider radius (50+ miles) to gather data
- Analyze conversion rates by distance
- Narrow the radius to the distance bands that convert profitably
- Layer bid adjustments by distance (increase bids for closer, decrease for further)

---

## 9. Automated Rules and Scripts

### Essential Automated Rules

Set up these rules to catch problems early:

1. **Pause keywords with 0 conversions and 200+ clicks** (check weekly)
2. **Increase budget by 15% when campaign is limited by budget and CPA is below target** (check daily)
3. **Pause ads with CTR below 1% after 1,000+ impressions** (check weekly)
4. **Alert when daily spend exceeds 150% of daily budget** (check every 6 hours)
5. **Pause keywords with Quality Score below 3** (check weekly)

### Useful Scripts

- **Search terms mining script:** Automatically reviews search terms and adds high-performing queries as exact match keywords
- **Bid adjustment by hour of day:** Analyzes conversion data by hour and adjusts bids automatically
- **Budget pacing script:** Ensures monthly budget is spent evenly rather than front-loaded
- **Broken URL checker:** Flags ads pointing to pages returning 404 or 500 errors

---

## 10. Connecting Paid and Organic

### Using Top-Converting Paid Keywords for SEO

Your Google Ads search terms report is a goldmine for organic keyword strategy.

**Process:**
1. Export your search terms report for the last 90 days
2. Filter for terms with conversion rate above your account average
3. Check current organic rankings for these terms
4. Prioritize terms where you rank on page 2-3 (close to page 1 but not there yet)
5. Create or optimize content targeting these terms
6. As organic rankings improve, reduce paid spend on those terms

This creates a flywheel: paid validates which keywords convert, organic captures that traffic for free, paid budget shifts to new test keywords.

### Retargeting with Discount Offers

For ecommerce or SaaS with free trials, retarget website visitors who did not convert with a discount or extended trial offer.

**Structure:**
- Audience: Website visitors in the last 14 days who did not convert
- Exclude: Users who visited fewer than 2 pages (likely accidental clicks)
- Creative: Lead with the discount/offer, include urgency (limited time)
- Frequency cap: 3-5 impressions per user per day across Display
- Duration: 14-30 days (longer retargeting windows have diminishing returns)

---

## 11. Taking Over Underperforming Accounts

### The Agency Audit Pattern

A common pattern: an agency running campaigns at high spend with high CPL and unqualified leads. The typical fixes when taking over an underperforming account:

1. **Audit search terms report** -- often reveals significant spend going to irrelevant queries
2. **Add negative keywords aggressively** -- build a comprehensive negative keyword list from wasted spend
3. **Restructure match types** -- agencies often over-rely on broad match for volume
4. **Fix conversion tracking** -- frequently misconfigured (counting page views as conversions, double-counting, missing offline conversions)
5. **Reduce geographic targeting** -- agencies often target too broadly to inflate impression numbers
6. **Rebuild landing pages** -- agencies rarely optimize landing pages because it is outside their scope

**Typical result:** Reducing wasted spend while producing better results with positive ROI by eliminating waste and focusing budget on the keywords and audiences that actually convert. High spend often masks inefficiency — more spend does not equal more results when targeting and tracking are broken.

---

## 12. Keyword Research Deep Dive

Keyword research is not a one-time exercise you do before launching campaigns. It is an ongoing process that should inform budget allocation, content creation, and competitive strategy across both paid and organic channels.

### Seasonal Search Volume Analysis

Every market has seasonality. Ignoring it means you either overspend during slow periods or underspend when demand peaks.

**How to identify seasonal patterns:**
1. Run your core keywords through Google Trends to see 12-month and 5-year patterns
2. Look for predictable spikes — holiday periods, industry events, fiscal year timelines, back-to-school, tax season, budget planning cycles
3. Note the ramp-up period before each spike. Demand does not spike overnight — it builds over 2-4 weeks before the peak

**How to capitalize on seasonality:**
- Increase budgets 2-3 weeks before a predicted demand spike. If you wait until demand peaks, competitors have already claimed the impression share.
- Pre-build seasonal ad copy and landing pages so they are ready to deploy immediately. Rushing creative during peak demand leads to mediocre performance.
- Some markets see 3-5x normal search volume during peak periods. The CPCs may increase, but so does conversion intent. A keyword that costs $5 during off-season might cost $12 during peak — but if conversion rates also double, the peak CPC is actually more efficient.
- Reduce budgets 1-2 weeks after the peak passes. Trailing demand converts at lower rates because the urgency is gone.

### Negative Keyword Discovery Process

The most expensive mistake in Google Ads is not failing to find good keywords — it is failing to exclude bad ones. Negative keywords should be identified during research, not after you have wasted budget.

**Proactive negative keyword research:**
1. When building your keyword list, pay attention to related terms that show high volume but irrelevant intent
2. Common negative keyword categories that apply to almost every B2B account: customer service, jobs, careers, hiring, cancel, cancellation, phone number, help desk, login, sign in, down, outage, free (if you are not running free offers)
3. Add these as campaign-level negative keywords before the first ad runs
4. For ecommerce: add competitor brand names you do not want to appear for, product names you do not carry, and service terms you do not offer

**Ongoing negative keyword maintenance:**
- Review the Search Terms Report weekly for the first 3 months of any campaign
- Move to bi-weekly review once the account is mature
- Export converting and non-converting search terms separately — terms that drive impressions but never convert are negative keyword candidates
- Build a shared negative keyword list that applies across all campaigns to prevent wasted spend on known irrelevant terms

### Competitor Keyword Categories

When researching keywords in a competitive market, organize your findings into categories based on who or what the searcher is looking for. Each category has different economics.

**Category mapping:**

| Category | Example Keywords | Typical CPC | Intent Level |
|---|---|---|---|
| Brand terms | Your own brand name, misspellings | Low | Very High |
| Competitor terms | Competitor brand names, "vs" queries | Medium-High | High |
| Category terms | Generic product/service category | High | Medium-High |
| Platform/aggregator terms | Marketplace or directory names | Medium | Medium |
| Creator/influencer terms | People associated with your space | Low | Low-Medium |
| Informational terms | How-to, what is, guide, tutorial | Low | Low |

**Why this categorization matters:** Budget should flow to categories with the best ROI, not the highest volume. Brand terms convert at the highest rate but have limited volume. Category terms have the most volume but the highest competition. Competitor terms sit in a sweet spot — high intent (they already understand the category) with competition limited to you and the named competitor.

**Test before committing:** Run small-budget tests across all categories for 2-4 weeks. Measure cost per conversion, not just CPC or CTR. A $15 CPC keyword that converts at 8% is more valuable than a $3 CPC keyword that converts at 0.5%.

### CPC as an SEO Difficulty Proxy

The cost-per-click advertisers pay for a keyword in Google Ads is a reliable indicator of how competitive the organic landscape is for that same keyword.

**The logic:** Keywords with high CPCs attract that level of spending because they convert well and generate revenue. The same commercial intent that makes a keyword expensive in paid search makes it attractive to organic competitors. More companies competing organically means more content, more backlinks, and more authority concentrated on page 1.

**How to use this insight:**
- When planning organic content, sort your keyword opportunities by estimated CPC
- Prioritize creating content for keywords where CPC is moderate (commercially valuable but not dominated by deep-pocketed competitors)
- Very high CPC keywords may require 6-12 months of dedicated SEO effort to crack page 1. Factor this into your content calendar.
- Very low CPC keywords often have low commercial intent — they may drive traffic but not conversions. Create this content for brand awareness, not lead generation.

### Budget Forecasting from Keyword Data

Keyword research data enables realistic budget planning rather than arbitrary spend targets.

**Building a 6-month forecast:**
1. List your target keywords with monthly search volumes and estimated CPCs
2. Estimate your expected click-through rate by position (position 1-3: 5-15%, position 4-7: 2-5%)
3. Apply your historical conversion rate to estimate monthly conversions per keyword
4. Multiply estimated clicks by CPC to get monthly spend per keyword
5. Sum across all keywords for total monthly budget requirement
6. Build three scenarios: conservative (lower impression share), moderate (target impression share), aggressive (maximum impression share)

**Account for people costs:** Even if the founder or a team member manages the campaigns themselves, that time has value. Failing to account for the hours spent on campaign management biases your ROI calculations. A channel that looks "free" because nobody is paying an agency may actually have a higher effective cost than a channel where you pay for managed service but spend zero internal hours.

**Track time by channel:** Log hours spent managing each marketing channel monthly. When you combine ad spend plus time cost, the true channel ROI often looks very different from the ad-spend-only calculation. This data prevents the common mistake of over-investing in "cheap" channels that consume enormous amounts of time.

## Connecting Google Ads to Claude Code via MCP

The Model Context Protocol (MCP) lets you connect your Google Ads account directly to Claude Code, turning ad optimization into a conversation instead of a CSV export workflow. Once configured, Claude can read account data, run queries against your campaigns, and surface recommendations in the same session where you discuss strategy.

**How to connect:**
- Install an MCP server that supports the Google Ads API (community servers exist; some require a developer token and OAuth credentials from your Google Ads manager account)
- Register the server in your Claude Code configuration so it is available as a data source in your sessions
- Scope access to the specific accounts you want Claude to see — avoid granting broader permissions than necessary

**What this unlocks in practice:**
- **Search terms analysis:** Ask Claude to pull the last 30 days of search terms across a campaign, cluster them by intent, and flag high-spend terms with zero conversions as negative keyword candidates
- **Keyword performance review:** Have Claude rank keywords by cost per conversion, highlight ones drifting above your target CPA, and suggest bid adjustments or match-type changes
- **Wasted spend audit:** Request a weekly scan for auto-applied recommendations, low-quality-score keywords, and placements on irrelevant sites — then discuss which ones to disable
- **Campaign-level diagnostics:** Ask "why did conversions drop this week?" and let Claude correlate impression share, auction insights, quality score shifts, and search volume changes
- **Optimization backlog:** Turn the findings into a prioritized action list you can execute directly, with Claude drafting the negative keyword lists, ad copy variations, or bid adjustments inline

The point is not to automate decisions — it is to compress the loop between asking a question about your account and having the data in front of you. What used to take a 20-minute CSV pull and a pivot table becomes a follow-up question.

## The Wrong Primary Conversion Problem

The single highest-leverage fix in most Google Ads accounts has nothing to do with bids, keywords, or creative. It is making sure Google is optimizing on the right conversion event in the first place.

Most accounts have this problem and do not know it. Google reports a healthy CPA. The dashboard looks fine. Meanwhile the actual cost per real customer in your CRM is 3-6x higher. This happens when Google is counting page visits, form impressions, or shallow form completions as conversions, while your business cares about something deeper (account creation, qualified lead, paying customer).

The diagnostic is simple. Pull your Google Ads reported conversions for a period. Pull your CRM source of truth for the same period (actual signups, qualified leads, or whatever your business considers a real conversion). Reconcile the two numbers. If Google reports 220 conversions and your CRM shows 62 real signups, you have a 3.5x inflation problem and every bidding decision the algorithm is making is being trained on the wrong signal.

The fix sequence:

1. Identify the real conversion event (the one that maps to actual business value)
2. Implement tracking for that event in GA4 or your conversion platform
3. Mark it as a Key Event in GA4 and wait 24 hours
4. Import it into Google Ads as a new conversion action
5. Set the new event as Primary and demote the old (inflated) event to Secondary in observation mode
6. Recalibrate Target CPAs across all campaigns using the new baseline (the new CPA will be 3-6x higher than what Google was reporting)
7. Allow a 2-week learning period before making any other changes

Every downstream decision compounds whatever is wrong with the primary conversion. Get the conversion event right first. Everything else is downstream of that.

## The Paid vs Organic Reconciliation Diagnostic

Before making budget decisions based on attribution reports, check whether your "organic" leads actually had a paid click as their last referrer. CRMs default to first-touch attribution, which often credits the discovery channel (organic) while ignoring the channel that triggered the actual conversion (paid).

The diagnostic: pull contacts your CRM has classified as organic and check the Last Referrer URL or Ad Activity logs for a Google Click ID (gclid). The percentage will vary by industry, brand strength, and buyer behavior, but the exercise often reveals that organic and paid are working together rather than independently.

Run this before assuming that cutting paid will leave organic untouched. If a meaningful share of organic-attributed leads have a paid touchpoint as their last referrer, then paid and organic are co-dependent in your funnel. Cutting paid will reduce "organic" conversions too, because the discovery layer (organic) needs the conversion layer (paid) to close.

Build parallel reporting under both attribution models: first-touch for content and discovery strategy decisions, last-touch (or data-driven) for budget allocation decisions. The gap between the two reveals which channels are doing awareness work versus conversion work, and prevents the recurring "let's cut paid, organic is doing well" misread.

## Cross-Campaign Keyword Routing via Negatives

The same search term can perform 3-4x differently across campaigns based on geo, audience signals, ad copy, and landing page alignment. Instead of pausing a term globally because one campaign performs poorly on it, route the traffic to where it converts best by using negatives strategically.

The pattern: a service-category term performs at $4 CPA in Campaign A but $15 CPA in Campaign B. The instinct is to pause the term or add it as a global negative. The smarter move is to add it as a negative only in Campaign B (the underperformer) while leaving it open in Campaign A (the winner). This forces the algorithm to route that query to the campaign where it converts efficiently.

This works because Google fills the auction based on which campaigns are eligible. If multiple campaigns can serve a query, the algorithm picks based on its own logic. Adding the term as a negative in the losing campaign removes it from contention and concentrates impression share in the winning campaign.

How to implement:

1. Pull a search terms report covering 30+ days
2. Identify terms appearing in multiple campaigns
3. For each duplicate term, compare CPA, CVR, and conversion volume across campaigns
4. Add the term as a campaign-level negative in the underperformers
5. Leave it open in the winning campaign
6. Monitor for 2 weeks to confirm the routing held

This pattern works at scale across hundreds of terms and is one of the most underused optimization levers in Google Ads.

## PMax Asset Group Policy Diagnosis

Performance Max campaigns can sit with "limited by policy" status on asset groups for weeks, quietly throttling delivery while you assume the issue is bidding or budget. Policy limits are independent of bid strategy and budget. No amount of optimization on those levers will fix a policy-throttled asset group.

The diagnostic: open each PMax campaign and check the Asset Groups tab. Look for "limited" or "limited by policy" status. Click into the flagged asset group to see the specific policy reason.

Common policy triggers:

- Personalized Ads policy (second-person "you" and "your" language in regulated verticals)
- Healthcare and Medicines policy (any health-adjacent framing, even if your service is not strictly medical)
- Image asset restrictions (clinical imagery, before/after photos, sensitive content)
- Restricted financial services language
- Prohibited claims (guaranteed outcomes, exaggerated results)

Resolution sequence:

1. Read the specific policy reason flagged on each asset
2. Rewrite the flagged copy in third person where possible (replace "your child" with "children" or "kids")
3. Submit the rewritten assets for re-review
4. If the original asset stays stuck in policy review for more than a week, duplicate the asset group with the rewritten copy and submit the duplicate fresh
5. The duplicate often clears when the original stays flagged because policy review is asset-specific, not query-specific

Fixing a policy-throttled asset group often unlocks 20-30% more impression share immediately. Run a policy audit on every PMax campaign before making any other optimization changes.

## PMax Hidden Spend Awareness

PMax search term reports only show 45-50% of your actual spend on search queries. The remaining 50-55% goes to a bucket Google calls "Other search terms" or "Other," and those terms are not visible to the advertiser.

This has two practical implications.

First, you cannot optimize what you cannot see. The hidden bucket caps how much waste cleanup is possible in PMax. Even with aggressive negative keyword management on the visible terms, you cannot prune the half of spend that is invisible.

Second, the visible terms must be aggressively pruned because they are the only ones controllable. Every visible junk term costs you twice: once in the wasted spend on that term, and once in training the algorithm to find more terms like it. The hidden bucket likely contains similar junk because the algorithm is learning from the same signal.

The practical move: review the visible search terms weekly. Build aggressive negative keyword lists. Apply them at the account level via shared negative lists since PMax does not support campaign-level negatives directly. Accept that you can only control a portion of PMax spend and factor that into your evaluation of the channel.

If PMax performance degrades and your visible search terms look clean, the cause is almost certainly in the hidden bucket. Your options are limited: tighten audience signals, reduce budget, restrict geographic targeting, or pause the campaign and rebuild with stronger guardrails.

## AI Max as a Keyword Discovery Engine

AI Max Search (Performance Max for Search) is most valuable when treated as a keyword discovery tool, not as a primary conversion driver. The campaign's expanded matching surfaces converting search terms you would never have thought to bid on. Mine those terms, validate them, and promote the winners to dedicated Search campaigns at exact match for tighter bid control.

The workflow:

1. Launch AI Max with broad seed terms in your category
2. Let the algorithm run for 2-4 weeks while you mine the search terms report weekly
3. Categorize converting terms into tiers:
   - Validated converters (3+ conversions): pull into dedicated Search campaign at exact match
   - Emerging converters (1-2 conversions): keep in AI Max for further validation
   - Discovery terms (zero conversions but high impressions): monitor weekly
4. Add aggressive negatives for off-intent themes that appear in the report
5. As your dedicated Search campaign matures, AI Max becomes a feeder for new discoveries while the Search campaign captures the validated demand at lower CPCs

This approach uses each campaign type for what it does best. AI Max for breadth and discovery. Search for precision and efficiency. Running them in parallel with deliberate handoff between them produces better account-wide CPA than running either one in isolation.

The biggest mistake is treating AI Max as a set-and-forget conversion driver. Without active search term mining, AI Max drifts toward broad, expensive, low-intent queries and the CPA degrades over time.

## The Junk Traffic Signature in PMax

PMax can quietly dump budget on bot or low-quality Display network traffic that looks like clicks but never converts. The signature is recognizable once you know what to look for.

The pattern: very low CPC (around $0.05) combined with high CTR (4-6%) and zero conversions, concentrated in specific geographic regions. Real human traffic from search does not look like this. A $0.05 CPC with 5% CTR and no conversions across hundreds of clicks is almost always bot or junk Display inventory.

The diagnostic: pull the location report from each PMax campaign and look for geographic regions where spend is meaningful, CPC is unusually low, CTR is unusually high, and conversions are zero. These regions are your suspects.

The fix: exclude those locations from the campaign entirely rather than letting the algorithm continue to dump budget there. PMax will not self-correct because the algorithm is rewarded for clicks, and the junk traffic produces clicks reliably.

Run this diagnostic monthly on every PMax campaign. New junk sources appear regularly as bot networks rotate inventory. Treat geographic location exclusions as an ongoing hygiene task, not a one-time setup.

The deeper issue is that PMax's broad delivery across networks (Search, Display, YouTube, Gmail, Discover) means any single asset group can be serving multiple traffic types simultaneously. The location report is one of the few diagnostic tools that surfaces the junk because the bot networks tend to concentrate geographically.

## Bid Strategy Sequencing for New Campaigns

New campaigns with zero conversion history should not start on Target CPA or Target ROAS. The algorithm has no signal to optimize against, and it will either under-bid (refusing to spend) or over-bid (burning budget without learning).

The phased approach for new campaigns:

Phase 1 (Days 1-30): Maximize Clicks with a max CPC cap, or Maximize Conversions without a target. The goal is data collection. You are buying conversion history that the algorithm can later optimize against. Set a CPC cap that reflects your market (look at competitor auction insights or planner estimates) to prevent runaway bids.

Phase 2 (Days 30-60): Once you have 15-20 conversions, switch to Maximize Conversions or Target CPA at 10-20% above your average CPA from Phase 1. Starting above your real target gives the algorithm room to learn without immediately restricting delivery.

Phase 3 (Day 60+): Gradually tighten Target CPA by 10-15% increments every 2 weeks until you reach your true target. Aggressive jumps cause the algorithm to severely restrict impressions because the new target requires throwing out most of what it learned.

The common failure mode: setting Target CPA on a new campaign because you saw a competitor recommend it, then watching the campaign spend 2% of budget at $0.50 CPCs in a $10 CPC market. The algorithm interprets the tight target as "do not bid unless you can convert at this exact cost," and it refuses to bid because it has no data showing it can hit the target.

Bid strategy is a journey, not a starting position. Start loose, gather data, then tighten.

## Location and Language Targeting Defaults

Google's default location targeting setting is "Presence or interest: People in, regularly in, or who show interest in your included locations." This sends ads to people anywhere in the world who Google thinks might be interested in your target geography. For most accounts, this is not what you want.

The result: clicks from users in countries you do not serve, researching topics related to your target market but unable to actually buy from you. Form submissions from junk traffic. Inflated CTRs that mask poor commercial intent. CPA degradation that looks like a market problem but is actually a targeting problem.

The fix: change location targeting to "Presence: People in or regularly in your included locations." This restricts ads to users physically located in your target geography. You will see impression volume drop, but conversion volume should stay flat or improve because you are removing junk traffic.

Run the same check on language targeting. The default is often "All languages" or includes languages you do not serve. Set language targeting explicitly to the languages you can support, and add foreign-language negative keywords as a secondary filter (users with English browser settings sometimes search in other languages, and the negative keywords catch what the language setting misses).

These two settings are five-minute fixes that can produce 20-40% CPA improvement on accounts where they have been left at default. Audit them on every campaign before making any other optimization changes.

## The Search Partners Attribution Fix

Google search partner traffic (search engines that license Google's results, like AOL, Ask.com, and various niche search sites) is real paid traffic, but it often gets misclassified by CRMs as referral traffic. The referrer URL contains a string like syndicatedsearch.goog instead of google.com, and CRMs default to treating non-Google referrers as Referrals rather than Paid Search.

The result: a meaningful portion of your paid Google Ads conversions get attributed to "Referral" in your CRM, which inflates the apparent performance of organic and referral channels while understating your paid Google performance. Budget decisions based on this attribution will favor channels that are not actually driving the volume.

The fix has two parts:

1. CRM workflow: build a workflow triggered on contact creation that checks the Last Referrer URL for syndicatedsearch.goog (or your platform's search partner pattern). If matched, auto-reclassify the Original Source to Paid Search > Search Partner. This catches new contacts going forward.

2. Historical backfill: run a one-time export of contacts whose Last Referrer URL matches the search partner pattern. Manually reclassify those records in the CRM so historical reporting reflects accurate attribution.

Do not disable search partners as a workaround. The traffic is real and often converts at lower CPCs than core Google Search. The issue is the attribution plumbing, not the channel quality. Fix the plumbing and let the volume flow.

After implementing the fix, expect your reported paid Google Ads contribution to increase by 5-15% as the misattributed traffic moves into the correct bucket. Adjust budget allocation accordingly.
