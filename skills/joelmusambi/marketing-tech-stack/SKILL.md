---
name: Marketing Tech Stack
description: >
  How to evaluate, implement, and integrate a marketing technology stack for full-funnel visibility.
  Trigger phrases: marketing tech stack, martech stack, marketing technology, CRM selection,
  HubSpot vs Salesforce, Pardot setup, marketing automation platform, CRM implementation,
  marketing tools, email platform selection, marketing integration, tech stack audit,
  marketing operations tools, Salesforce integration, NetSuite integration, marketing platform,
  GTM setup, Google Tag Manager, email deliverability, DKIM SPF, landing page tools,
  A/B testing tools, marketing stack evaluation, martech evaluation
category: Marketing Ops
access: free
---

# Marketing Tech Stack

A growth marketer manages the entire technology stack rather than relying on specialists for each platform. Siloing tools leads to data gaps, integration failures, and blind spots. This playbook covers how to evaluate, implement, and integrate a marketing tech stack that gives you full lifecycle visibility from lead source through pipeline to closed-won revenue.

---

## 1. The Principle: Own Your Entire Stack

The most effective growth marketers do not just "use" their tools. They manage, configure, integrate, and optimize every platform in the stack. This means:

- Understanding the data model of every platform you use
- Building and maintaining integrations between platforms
- Configuring tracking, automation, and reporting yourself (or directing it)
- Knowing when a platform is not working and what to replace it with
- Being the person who can answer "where did this lead come from and what happened to them?" for any lead in the system

If you hand off your tech stack to specialists or agencies, you lose visibility. And without visibility, you cannot make data-driven decisions.

---

## 2. Platform Selection Criteria by Company Stage

### Early Stage (Seed to Series A, 1-20 employees)

| Need | Recommended Approach | Why |
|------|---------------------|-----|
| CRM | HubSpot Free or Pipedrive | Low cost, easy to set up, marketing features included |
| Email | HubSpot or Mailchimp | Built-in email marketing with basic automation |
| Website | WordPress or Webflow | Flexible, SEO-friendly, low maintenance |
| Analytics | GA4 + Google Tag Manager | Free, comprehensive, industry standard |
| Ads | Google Ads + LinkedIn | Start with 2 channels max, do them well |

**Key principle**: At this stage, simplicity beats sophistication. You need tools you can set up in days, not months. Do not buy enterprise software until you have enterprise problems.

### Growth Stage (Series A to C, 20-200 employees)

| Need | Recommended Approach | Why |
|------|---------------------|-----|
| CRM | HubSpot Pro/Enterprise or Salesforce | More automation, lead scoring, reporting capabilities |
| Marketing Automation | HubSpot, Pardot, or Marketo | Sophisticated nurture workflows, segmentation |
| Email | Platform-native (HubSpot/Pardot) | Integrated with CRM for seamless data flow |
| Website | WordPress with headless CMS or custom | SEO optimization, scalability |
| Analytics | GA4 + GTM + data warehouse | Cross-platform analysis, custom reporting |
| Ads | Multi-channel with attribution | Google, LinkedIn, Facebook, retargeting |
| Sales Enablement | Salesloft, Outreach, or Gong | ABM sequences, call intelligence |

**Key principle**: At this stage, integration is everything. Every tool must connect to every other tool. Data silos kill growth.

### Enterprise (Series D+ or established, 200+ employees)

| Need | Recommended Approach | Why |
|------|---------------------|-----|
| CRM | Salesforce | Industry standard, deepest integration ecosystem |
| Marketing Automation | Marketo, Pardot, or HubSpot Enterprise | Enterprise-grade automation and governance |
| Data | Snowflake/BigQuery + dbt + BI tool | Centralized data warehouse for cross-platform analysis |
| ABM | Demandbase, 6sense, or Terminus | Account-level intelligence and orchestration |
| Analytics | GA4 + GTM + CDP | Customer data platform for unified profiles |

**Key principle**: At this stage, governance and data quality are as important as capability. Standardize everything.

---

## 3. CRM Implementation Playbook

### HubSpot

**Strengths:**
- Best-in-class marketing automation, forms, email, and lead scoring for SMB and mid-market.
- Intuitive UI. Marketers can configure most things without developer support.
- Strong native integrations with ad platforms, webinar tools, and content platforms.
- Free tier is genuinely useful for early-stage companies.
- Reporting is visual and accessible for non-technical stakeholders.

**Gotchas:**
- Pricing scales aggressively. Contact-based pricing means costs grow with your database.
- Customization has limits compared to Salesforce. Complex deal structures or multi-entity hierarchies are harder to model.
- HubSpot's CRM is good but not as deep as Salesforce for complex sales processes.
- If you outgrow HubSpot, migrating away is painful. Plan for this.

**Implementation Timeline:** 2-4 weeks for basic setup. 2-3 months for full configuration with automation, lead scoring, and integrations.

### Pardot (Salesforce Marketing Cloud Account Engagement)

**Strengths:**
- Native Salesforce integration. If your sales team lives in Salesforce, Pardot is the path of least resistance for marketing.
- Powerful automation and lead scoring capabilities.
- Strong B2B email marketing features.
- Engagement history syncs directly to Salesforce contact and lead records.

**Gotchas:**
- Pardot is often inherited incomplete. Previous owners set up the basics but did not configure automation rules, scoring models, or engagement programs fully. Be ready to take ownership and rebuild.
- UI is less intuitive than HubSpot. Steeper learning curve.
- Reporting requires Salesforce report builder or B2B Marketing Analytics, which adds complexity.
- Form builder is functional but not as flexible as HubSpot's or standalone tools.
- DKIM and SPF authentication setup requires coordination with IT/developers. Do not skip this. Deliverability depends on it.

**Implementation Timeline:** 4-8 weeks for basic setup. 3-6 months for full configuration including Salesforce sync optimization.

### Salesforce

**Strengths:**
- The industry standard sales CRM. Deepest customization, most integrations, largest ecosystem.
- Handles complex sales processes: multi-product, multi-entity, channel sales, enterprise deal structures.
- Pipeline data and reporting are unmatched.
- AppExchange has thousands of integrations.

**Gotchas:**
- Salesforce is a sales tool first. Marketing visibility is limited without a connected marketing automation platform.
- Without integration to a marketing platform, you can see pipeline data but cannot see what marketing did to create that pipeline.
- Requires a Salesforce admin (internal or outsourced) to maintain. Configuration drift is real.
- Licensing is expensive and complex. Plan your license allocation carefully.

**Integration requirement:** Salesforce must be connected to your marketing automation platform (HubSpot, Pardot, or Marketo) for any meaningful marketing operations.

### NetSuite

**Strengths:**
- Strong ERP with financial data, inventory, and operations visibility.
- Good for companies where marketing needs to understand order history, billing, and product usage.

**Gotchas:**
- NetSuite has limited marketing visibility without integration. You can see customer records but not marketing engagement data.
- Marketing automation in NetSuite is minimal. It is not designed for it.
- Integration with marketing platforms (HubSpot, Pardot) requires third-party connectors or custom development.
- The HubSpot-NetSuite integration, for example, requires careful field mapping and sync rule configuration. Expect 4-8 weeks for a reliable integration.

**Bottom line:** NetSuite is a financial/operations system. Do not try to make it your marketing platform. Integrate it with a purpose-built marketing tool.

---

## 4. Integration Architecture

### The Integration Principle

Data must flow bidirectionally between marketing and sales platforms. Marketing creates leads and tracks engagement. Sales closes deals and records revenue. Without bidirectional flow, neither team has the full picture.

### Common Integration Architectures

**Architecture 1: HubSpot + Salesforce**
```
HubSpot (Marketing) ←→ Salesforce (Sales)
        ↑                      ↑
   Website Forms          Sales Activities
   Email Engagement       Pipeline Stages
   Lead Scoring           Deal Values
   Content Tracking       Close Dates
```

- Native two-way sync available.
- Configure sync rules carefully: which object types sync, which direction, which fields, conflict resolution.
- Set HubSpot as the system of record for marketing data. Set Salesforce as the system of record for pipeline/revenue data.

**Architecture 2: Pardot + Salesforce**
```
Pardot (Marketing) ←→ Salesforce (Sales)
        ↑                      ↑
   Email Campaigns        Opportunities
   Landing Pages          Sales Tasks
   Lead Scoring           Revenue Data
   Engagement History     Account Hierarchy
```

- Native integration (same ecosystem).
- Pardot prospects sync to Salesforce leads or contacts.
- Engagement history visible on Salesforce records.
- Ensure Connected Users and Connector User are properly configured.

**Architecture 3: HubSpot + NetSuite**
```
HubSpot (Marketing) ←→ NetSuite (Sales/Finance)
        ↑                      ↑
   Lead Generation        Customer Records
   Email Marketing        Order History
   Form Submissions       Revenue Data
   Automation             Product Information
```

- Requires third-party integration (Bedrock Data, Celigo, or custom API development).
- Field mapping is critical. NetSuite's data model is different from HubSpot's.
- Test sync thoroughly before going live. Run parallel for 2-4 weeks.

### Integration Health Monitoring

- Set up a weekly sync report that compares record counts across platforms.
- Monitor error logs for sync failures. Common errors: duplicate records, field type mismatches, API rate limit hits.
- Create a shared integration document that maps every field between platforms.
- Assign an owner for integration maintenance. Integrations break when nobody is watching.

---

## 5. Tracking System Setup with Google Tag Manager

GTM is the hub for tracking across your full marketing stack. Every tracking pixel, analytics tag, and conversion event should be managed through GTM.

### What Lives in GTM

| Tag | Purpose | Priority |
|-----|---------|----------|
| GA4 Configuration | Site analytics | Must have |
| GA4 Event Tags | Custom event tracking | Must have |
| Google Ads Conversion | Paid search attribution | Must have |
| Google Ads Remarketing | Retargeting audiences | Must have |
| LinkedIn Insight Tag | LinkedIn conversion tracking + retargeting | Must have |
| Facebook/Meta Pixel | Facebook/Instagram ad tracking | If running Facebook ads |
| Hotjar | Heatmaps, session recordings, UI/UX analysis | Recommended |
| Mixpanel | Product event tracking | If tracking in-app behavior |
| Optimizely/VWO | A/B testing | If running website experiments |
| HubSpot Tracking Code | Marketing automation tracking | If using HubSpot |
| Pardot Tracking Code | Marketing automation tracking | If using Pardot |

### GTM Configuration Best Practices

1. **Naming convention**: [Platform] - [Type] - [Description]. Example: "GA4 - Event - Form Submit - Demo Request."
2. **Workspace management**: Use workspaces for development. Never edit directly in the default workspace.
3. **Version control**: Name every published version with a description. "v47 - Added LinkedIn conversion for webinar registration." This is your audit trail.
4. **Trigger organization**: Group triggers by type (page views, clicks, form submissions, scroll depth, custom events). Reuse triggers across tags where possible.
5. **Variable management**: Create reusable variables for UTM parameters, page paths, click classes, and data layer values.
6. **Testing protocol**: Always use Preview mode before publishing. Verify every tag fires on the correct pages with the correct data.

### Data Layer Implementation

For advanced tracking, implement a data layer on your site. The data layer is a JavaScript object that holds structured data about the page and user:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'form_submit',
  'form_name': 'demo_request',
  'lead_source': 'organic',
  'utm_source': 'google',
  'utm_medium': 'organic',
  'utm_campaign': 'none'
});
```

GTM reads from the data layer to fire tags with the correct data. This is cleaner and more reliable than scraping data from page elements.

---

## 6. Email Platform Evaluation

### Key Evaluation Criteria

| Criteria | Why It Matters | What to Test |
|----------|---------------|-------------|
| Deliverability | If emails do not reach the inbox, nothing else matters | Send test campaigns to multiple email providers (Gmail, Outlook, Yahoo). Check inbox vs. spam placement |
| Automation | Drip campaigns, triggered emails, behavioral workflows | Build a test automation workflow. How complex can you get? |
| CRM capabilities | Lead management, contact records, deal tracking | Does the platform double as a CRM or require integration? |
| Firewall compatibility | Some platforms are blocked by government, public-sector, and enterprise firewalls | Send test emails to contacts at target organizations. If they do not receive them, the platform may be blocked |
| Reporting | Open rates, click rates, deliverability metrics, revenue attribution | Review reporting dashboards. Can you track from email to pipeline? |
| Scalability | Will the platform handle your list as it grows from 5K to 50K to 500K? | Review pricing tiers and feature availability at each tier |

### Firewall Issues: A Critical Consideration

Certain email platforms are blocked by government agencies, public-sector organizations, and large enterprises with strict email firewalls. If your target audience includes these organizations, you must test deliverability before committing to a platform.

**How to test:**
1. Get email addresses from 5-10 contacts at target organizations.
2. Send test emails from the platform you are evaluating.
3. Ask contacts to confirm receipt and check if emails landed in inbox, spam, or were blocked entirely.
4. If emails are consistently blocked, the platform's sending IP reputation may be flagged in the target organization's firewall.

**Solution:** Consider platforms with dedicated IP options or strong sender reputation. Sometimes the issue is not the platform but your own domain's DKIM and SPF configuration.

### ActiveCampaign: Full-Stack Option

ActiveCampaign deserves special mention as a full-stack email marketing platform with built-in CRM:
- Email marketing with advanced automation (visual workflow builder is excellent)
- Built-in CRM for deal tracking (simpler than Salesforce but functional for SMB)
- Lead scoring and site tracking included
- Pricing is reasonable compared to HubSpot Pro/Enterprise
- Strong deliverability reputation
- Good for companies that want marketing automation + CRM in one tool without Salesforce complexity

---

## 7. The Website Architecture Lesson

Website architecture can break your SEO strategy regardless of how good your content is. This is a hard lesson that many marketers learn too late.

### Common Architecture Problems

1. **Subdomain fragmentation**: Blog on blog.domain.com, docs on docs.domain.com, app on app.domain.com. Each subdomain is treated as a separate site by Google, diluting domain authority.
2. **JavaScript-heavy rendering**: Single-page applications (SPAs) built with React, Angular, or Vue that render content client-side. Google can index JavaScript-rendered content but often does it poorly and slowly.
3. **Orphan pages**: Important content pages with no internal links pointing to them. Google cannot find them, and they do not rank.
4. **Slow page speed**: Core Web Vitals are a ranking factor. A slow site with great content loses to a fast site with good content.
5. **Duplicate content**: Multiple URLs serving the same content without canonical tags. This splits ranking signals.
6. **Poor URL structure**: Dynamic URLs with parameters, deeply nested paths, or non-descriptive slugs. Clean, descriptive URLs perform better.

### Architecture Audit Checklist

- [ ] All marketing content on the primary domain (not subdomains)
- [ ] Server-side rendering or static generation for SEO-critical pages
- [ ] Internal linking structure connects all important pages
- [ ] Page load time under 3 seconds on mobile
- [ ] Canonical tags on all pages
- [ ] XML sitemap submitted to Google Search Console and Bing Webmaster Tools
- [ ] Robots.txt allows crawling of all SEO-critical pages
- [ ] Schema.org markup on product, service, and article pages

### Bing Webmaster Setup

Do not ignore Bing. While it has smaller search volume than Google, it has:
- Lower competition for rankings
- Higher conversion rates for certain B2B demographics (enterprises using Microsoft Edge)
- Growing importance as the backbone for AI-powered search features

Set up Bing Webmaster Tools, submit your sitemap, and monitor indexing alongside Google Search Console.

---

## 8. Full Lifecycle Tracking

The ultimate goal of your tech stack is to track every lead from first touch through closed-won revenue.

### The Lifecycle Stages

```
Anonymous Visitor → Known Lead → MQL → SQL → Opportunity → Customer
      ↑                ↑          ↑       ↑        ↑            ↑
   GA4/GTM         Form Fill   Lead     Sales    Pipeline    Revenue
   Web Tracking    CRM Entry   Score    Accept   Created     Closed
```

### What Gets Tracked at Each Stage

| Stage | Data Captured | Platform |
|-------|--------------|----------|
| Anonymous Visitor | Pages viewed, time on site, referral source, device | GA4, web visitor ID tools |
| Known Lead | Name, email, company, lead source, UTM data | Marketing automation platform |
| MQL | Lead score threshold crossed, qualifying behaviors | Marketing automation platform |
| SQL | Sales accepted, qualification criteria met | CRM |
| Opportunity | Deal stage, value, expected close date, products | CRM |
| Customer | Close date, actual revenue, products purchased | CRM |

### Connecting the Dots

- Marketing automation platform captures the journey from anonymous to MQL.
- CRM captures the journey from SQL to customer.
- The integration between the two platforms connects these journeys into a single story.
- Reporting on the full lifecycle reveals which channels, campaigns, and content create customers, not just leads.

---

## 9. Platform Migration Considerations

At some point, you will need to migrate from one platform to another. This is one of the highest-risk projects a marketing ops team undertakes.

### Migration Planning Checklist

1. **Data audit**: What data exists in the current platform? Contacts, email history, automation workflows, forms, landing pages, tracking data, integrations.
2. **Data cleaning**: Migrate is your opportunity to clean. Remove duplicates, standardize fields, archive stale contacts.
3. **Field mapping**: Map every field in the old platform to a field in the new platform. Document fields that do not have a direct match.
4. **Automation recreation**: Document every automation workflow in the old platform. Recreate in the new platform. Test each one.
5. **Integration reconnection**: Every integration must be rebuilt. CRM sync, ad platform connections, webinar tools, form handlers.
6. **Tracking code swap**: Replace old tracking code with new tracking code across your entire site. Use GTM to make this cleaner.
7. **Historical data**: Decide what historical data to migrate. Email engagement history? Lead scoring history? Campaign data? Not everything needs to come over.
8. **Parallel running**: Run both platforms in parallel for 2-4 weeks. Compare data to verify the new platform is capturing correctly.
9. **Cutover plan**: Define the exact date/time for final cutover. Communicate to all stakeholders.
10. **Post-migration audit**: Run a thorough audit 1 week and 1 month after migration. Verify data integrity, tracking accuracy, and workflow function.

### Common Migration Pitfalls

- Underestimating timeline. Plan for 2-3x longer than you think.
- Not cleaning data before migration. Garbage in, garbage out.
- Losing email engagement history. This data is valuable for segmentation.
- Breaking integrations. Every connected tool needs testing after migration.
- Not communicating to the sales team. They will notice when their workflow changes.

---

## 10. Sales Enablement Tools

### Salesloft for ABM Sequences

- Build multi-step, multi-channel outreach sequences: email, call, LinkedIn, direct mail.
- Personalize at scale with templates and dynamic fields.
- Track engagement: opens, clicks, replies, calls made, calls connected.
- Integrate with CRM for seamless data flow.
- Use for: outbound prospecting, event follow-up, renewal outreach, expansion campaigns.

### Key Features to Configure

- **Cadence builder**: Define the sequence of touches, timing between each, and fallback actions.
- **Templates**: Create a library of email templates organized by use case (cold outreach, warm follow-up, event invitation, renewal).
- **Analytics**: Track reply rates, meeting rates, and pipeline created by sequence.
- **Integration**: Sync activities back to CRM so marketing has visibility into sales outreach.

---

## 11. Landing Page and Testing Tools

### Unbounce for Landing Pages

- Drag-and-drop landing page builder. No developer required for most pages.
- A/B testing built in. Test headlines, CTAs, form layouts, hero images.
- Dynamic text replacement: swap headline text based on the ad keyword that drove the click.
- Form builder with hidden fields for UTM capture.
- Integrations with CRM, marketing automation, and ad platforms.

### Litmus for Email Testing

- Preview emails across 100+ email clients and devices before sending.
- Catch rendering issues that break your email layout in Outlook, Gmail, Apple Mail, etc.
- Link checking: verify every link in the email works.
- Spam testing: check if your email triggers spam filters before you send.
- Analytics: track opens and engagement across different email clients.

### Optimizely for A/B Testing

- Run A/B and multivariate tests on your website without developer deployments.
- Test: headlines, CTAs, page layouts, pricing displays, form designs, navigation.
- Statistical significance calculator built in. Know when you have a winner.
- Feature flags: roll out new features to a percentage of users for testing.
- Full Stack option for server-side experiments on web applications.

---

## 12. DKIM and SPF Authentication

Email authentication is non-negotiable. Without proper DKIM and SPF setup, your emails will land in spam.

### What They Are

- **SPF (Sender Policy Framework)**: A DNS record that tells receiving email servers which IP addresses are authorized to send email on behalf of your domain.
- **DKIM (DomainKeys Identified Mail)**: A DNS record that adds a digital signature to your emails, verifying they were not tampered with in transit.
- **DMARC (Domain-based Message Authentication, Reporting, and Conformance)**: A policy that tells receiving servers what to do with emails that fail SPF or DKIM checks.

### Setup Process

1. Work with your IT team or developer to access DNS settings for your sending domain.
2. Add SPF record: include the sending IPs of every platform that sends email on your behalf (marketing automation, CRM, transactional email service, etc.).
3. Add DKIM record: your email platform provides the DKIM key. Add it as a DNS TXT record.
4. Add DMARC record: start with a monitoring policy (p=none) to see what is happening. Gradually move to quarantine and then reject.
5. Verify: use tools like MXToolbox or DMARC Analyzer to verify your records are correctly configured.
6. Monitor: review DMARC reports monthly. They show who is sending email using your domain and whether it is passing authentication.

### Impact

- Proper authentication improves inbox placement by 10-25%.
- Required for sending from custom domains via most marketing automation platforms.
- Prevents domain spoofing (someone else sending emails pretending to be you).
- ISPs and corporate email filters increasingly require all three (SPF + DKIM + DMARC) for inbox delivery.

---

## 13. Competitive Intelligence Tools

### Wappalyzer

- Browser extension that shows the technology stack of any website you visit.
- Identifies: CMS, analytics tools, marketing automation, A/B testing, CRM, ad platforms, chat tools, CDN, hosting.
- Use for: understanding what competitors are using, identifying potential integration partners, discovering new tools.
- Competitive analysis workflow: visit your top 10 competitors' sites with Wappalyzer active. Document their stacks. Look for patterns (what tools do successful competitors all use?) and gaps (what tools are you missing?).

### How to Use Competitive Stack Intelligence

1. If competitors are all using a tool you are not, investigate whether that tool solves a problem you have.
2. If you find a competitor is not running retargeting pixels, their visitors are not being remarketed to. Target those visitors with your own ads.
3. Track competitor stack changes over time. A switch from one platform to another signals dissatisfaction with the old platform (and potentially an opportunity for the new platform's competitors).

---

## 14. Analytics and UX Tools

### Hotjar for UI/UX Analysis

- **Heatmaps**: See where users click, scroll, and move their mouse. Identify which elements get attention and which are ignored.
- **Session recordings**: Watch real user sessions to understand navigation patterns, confusion points, and drop-off moments.
- **Surveys**: Deploy on-site surveys to gather qualitative feedback (why did you visit? did you find what you needed?).
- **Funnels**: Visualize where users drop off in multi-step processes (signup, checkout, onboarding).

### Mixpanel for Event Tracking

- Track granular user events within your product: feature usage, button clicks, workflow completions.
- Build cohort analyses: how do users who adopt feature X compare to those who do not?
- Retention analysis: at what point do users become sticky?
- Integration with marketing data: correlate product usage with marketing touchpoints to understand which campaigns drive the most engaged users.

---

## Summary: Stack Assessment Checklist

| Capability | Do You Have It? | Platform |
|-----------|----------------|----------|
| Marketing Automation | | |
| Sales CRM | | |
| Bidirectional Integration | | |
| Website Analytics (GA4) | | |
| Tag Management (GTM) | | |
| UTM Tracking System | | |
| Lead Scoring | | |
| Email Authentication (DKIM/SPF/DMARC) | | |
| Landing Page Builder | | |
| A/B Testing | | |
| Heatmap/Session Recording | | |
| Conversion Tracking (all ad platforms) | | |
| Full Lifecycle Reporting | | |
| Competitive Intelligence | | |

Score yourself. Every gap in this list is a gap in your visibility. Close the gaps methodically, starting with the ones that have the highest revenue impact.
