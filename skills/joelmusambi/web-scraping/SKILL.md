---
name: Web Scraping
description: "Use this skill when building targeted lead lists through web scraping, using search operators to find hidden data, extracting contact information from websites, or automating data collection. Covers Google operators, browser inspect tools, shortlink enumeration, the scraping-to-campaign workflow, and using Claude Code as a scraping tool alongside traditional methods to hit APIs, clean data, and assemble final lead lists."
category: Scraping
access: free
---

# Web Scraping

This playbook covers how to use web scraping and search operators to build targeted lead lists that kickstart marketing campaigns. This isn't about buying lists — it's about the growth hacking mindset of digging relentlessly to find information that others can't.

## Core Principle: The Growth Hacking Mindset

The goal isn't just the technical scraping. It's the mindset of digging and digging to obtain the information you need. When the data you need isn't available through conventional channels, creative sourcing becomes your competitive advantage.

**The mindset:**
- Assume the data exists somewhere
- Be willing to spend hours investigating before you find it
- Use multiple techniques in combination
- Automate once you find the pattern
- Always think about what you'll do with the data once you have it

## Phase 1: Identifying Data Sources

### The Brainstorming Step

Before you start scraping, create a spreadsheet of web sources where your target contacts could be listed:

| Source Type | Examples | Data Available |
|------------|---------|----------------|
| Industry directories | Chamber of Commerce, association member lists | Names, businesses, addresses |
| Government databases | Licensing boards, permit records, business registrations | Legal names, addresses, some emails |
| Professional associations | Industry-specific member directories | Titles, companies, sometimes emails |
| Review sites | Industry-specific review platforms | Company names, sometimes contact info |
| Conference attendee lists | Past event programs, speaker lists | Names, titles, companies |
| Job posting sites | Indeed, LinkedIn, industry job boards | Company names, hiring managers |
| Social media | LinkedIn, Twitter/X | Professional profiles, connections |
| Mobile/alternate websites | Mobile versions of corporate sites | Sometimes different data than desktop |
| Public filings | Annual reports, regulatory filings | Detailed company information |

### Key Insight: Mobile vs. Desktop Discrepancies

Some websites have different data on their mobile versions than their desktop versions. Data that's hidden or structured differently on the main site might be accessible through the mobile version. Always check both.

Similarly, some data is only accessible through specific URL paths that aren't linked from the main navigation. Search operators help you find these hidden pages.

## Phase 2: Google Search Operators

### Essential Operators for Lead Finding

**Site-specific search:**
```
site:chamberofcommerce.com "your target industry"
```
Searches only within that domain for your target.

**Finding specific file types:**
```
site:targetdomain.com filetype:pdf "member directory"
```
Finds PDF directories that might not be linked from the main site.

**Finding email addresses:**
```
"@targetcompany.com" -site:targetcompany.com
```
Finds their emails mentioned on other sites.

**Quoted exact match:**
```
"john.doe@company.com"
```
Using quotation marks around an email you've found helps discover other pages where that email appears, often revealing larger data sources.

**Combining operators:**
```
site:chamberofcommerce.com "your target industry" "email" "phone"
```
Narrow multiple criteria simultaneously.

**Finding login-protected directories:**
```
inurl:directory site:targetassociation.org
inurl:members site:industrygroup.com
```

**Finding specific data formats:**
```
inurl:store site:targetcompany.com/mobile
"@gmail.com" OR "@yahoo.com" site:directory.com "your industry"
```

### The Chain Discovery Technique

1. Find one contact through manual searching
2. Put their email in quotes in Google: `"contact@example.com"`
3. This often reveals other directories or data sources where they're listed
4. Those sources may contain hundreds of other contacts
5. One contact leads to a data source that leads to your entire target list

## Phase 3: Browser Inspect Tools for Data Extraction

### The Network Tab Technique

When you find a page with useful data but can't see the underlying source:

1. **Right-click → Inspect** (or F12 to open Developer Tools)
2. **Select the "Network" tab**
3. **Refresh the page** — Watch the requests populate
4. **Look for document-type requests** — These often reveal the API endpoints or data sources the page pulls from
5. **Click on the document request** — This often takes you to the raw data source

### Finding the Data Source URL

The highlighted data source URL is the key. It might be:
- A JSON API endpoint returning structured data
- A raw HTML page with all records
- A PDF or CSV file
- An internal page template

### The Shortlink Enumeration Technique

This is one of the most powerful scraping techniques for directory-style data:

1. **Find the `rel="shortlink"` in the page source** — Right-click → View Page Source, search for "shortlink"
2. **Copy that shortlink URL** — It typically looks like `https://example.com/?p=1234`
3. **Replace the number** — Change 1234 to 1235, 1236, etc.
4. **Each number reveals a new record** — This lets you enumerate all records in the directory

**Example:**
```
https://example.com/?p=1001  → Record 1 (First Business)
https://example.com/?p=1002  → Record 2 (Second Location)
https://example.com/?p=1003  → Record 3 (Third Company)
...
https://example.com/?p=1500  → Record 500 (Last record)
```

### Automating the Extraction

Once you've identified the URL pattern, write a script to:
1. Iterate through all numbers in the range
2. Fetch each page
3. Parse the relevant data (name, email, phone, address)
4. Output to a spreadsheet

**Python example structure:**
```python
import requests
from bs4 import BeautifulSoup
import csv

results = []
for i in range(1001, 1501):
    url = f"https://example.com/?p={i}"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    # Parse relevant fields
    name = soup.find('h1').text
    email = soup.find('a', href=lambda x: x and 'mailto:' in x)
    # Add to results
    results.append({'name': name, 'email': email})

# Write to CSV
with open('leads.csv', 'w') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'email'])
    writer.writeheader()
    writer.writerows(results)
```

Alternatively, if the technical work is complex, have a developer write a more robust script. The important thing is identifying the pattern — the automation is the easy part.

## Phase 4: From Scraped Data to Campaign

### Personal Emails vs. Corporate Emails

This is a critical distinction for social media targeting:

**The problem:** Most scraping tools find corporate emails. But few people sign up for Facebook or LinkedIn with their corporate email. Custom audiences built from corporate emails will have low match rates.

**The solution:**
- Prioritize finding personal emails when your campaign involves social media custom audiences
- Personal emails match at much higher rates on Facebook and LinkedIn
- Some directories list personal contact information that corporate databases don't have
- Mobile versions of websites sometimes show personal contact details

### The Campaign Workflow

Once you have your scraped list, the campaign follows this sequence:

1. **Upload to social platforms as custom audiences**
   - Facebook Custom Audiences: More flexible minimum sizes
   - LinkedIn Matched Audiences: Requires 300+ contacts minimum (may not work for small lists)

2. **Run awareness campaigns first**
   - Use engagement objective campaigns (not conversion)
   - Show relevant content about your product/service
   - Goal: Make them recognize your brand before you email them

3. **Launch email campaign**
   - First email should be personalized and relevant
   - Open rates may be higher when the recipient has already seen your brand on social media compared to standard cold email
   - No unsubscribes when brand awareness precedes email

4. **Segment and nurture**
   - Segment contacts by title, profession, and engagement level
   - Build longer automation sequences for each segment
   - Softer content to maintain engagement without burning the list

### Why the Order Matters

Without the initial social media awareness campaign, your first email campaign looks like any other cold email. With prior brand exposure:
- Recipients recognize your company name
- Open rates may be higher
- Click rates may be higher
- Unsubscribe rates may decrease

## Phase 5: Custom Audience Targeting from Scraped Lists

### Facebook Custom Audiences

After uploading your list:
- Target owners/contacts with engagement-focused content
- Engagement campaigns consistently outperform conversion campaigns for niche B2B audiences
- Create a Lookalike Audience to expand your market beyond the original list
- Retarget people who engage with your content (including those tagged in comments by others)

### Engagement Results from Scraped Lists

With properly targeted content to a scraped and uploaded list:
- Engagement campaigns produce higher ROI than conversion campaigns
- Other people in the target's network get tagged in comments, growing your audience organically
- This creates a retargeting pool for secondary campaigns

### Scaling Beyond the Original List

The scraped list is your seed. Grow it through:
1. **Lookalike audiences** — Facebook creates audiences similar to your uploaded list
2. **Engagement retargeting** — People who interact with your content become a new audience
3. **Comment taggers** — People tagged by your original audience are new prospects
4. **Email opt-ins** — Scraped contacts who opt in to your email list expand your owned database

## Phase 6: Email Automation from Scraped Lists

### First Email Campaign

The first email to a scraped list should be:
- Personal and conversational (not corporate/marketing)
- Reference something specific and relevant
- Short (under 100 words)
- End with a simple question that invites reply

Email performance improves when preceded by social awareness campaigns — open rates, click-through rates, and unsubscribe rates all trend favorably compared to cold outreach. Results vary by list quality and targeting precision.

### Post-Opt-In Automation

Once contacts opt in, segment into lists based on:
- Title and profession
- Industry or sub-segment
- Engagement level
- Geographic location

Then deploy targeted drip campaigns for each segment. This keeps engagement high because subscribers receive emails specifically relevant to them.

## Ethical and Legal Considerations

### Best Practices

- **Only scrape publicly available data** — Information visible on public websites
- **Comply with CAN-SPAM / GDPR** — Include unsubscribe links, honor opt-outs immediately
- **Don't misrepresent yourself** — Be honest about who you are and why you're reaching out
- **Provide value** — Your content should be genuinely useful, not just sales pitches
- **Respect rate limits** — Don't hammer websites with rapid requests
- **Check robots.txt** — Respect sites' crawling preferences

### What to Avoid

- Scraping behind login walls without authorization
- Selling scraped data to third parties
- Ignoring unsubscribe requests
- Sending to purchased lists without consent context
- Scraping personal data protected by privacy regulations

## The Growth Hacker's Toolbox

| Task | Tool/Method |
|------|------------|
| Finding hidden pages | Google search operators |
| Examining page source | Browser Developer Tools → Network tab |
| Enumerating records | Shortlink pattern discovery |
| Automating extraction | Python (BeautifulSoup, Scrapy) or developer scripts |
| Validating emails | ZeroBounce, NeverBounce |
| Uploading audiences | Facebook Business Manager, LinkedIn Campaign Manager |
| Email automation | ActiveCampaign, HubSpot, or similar |
| Tracking results | CRM lead source tracking |

The power of scraping isn't just the data — it's the campaigns you build around it. One well-executed scraping-to-campaign workflow can kickstart an entire marketing program.

## Using Claude Code for Scraping and Lead List Building

Claude Code is the fastest path from "I need a lead list" to "I have a clean spreadsheet ready for outreach." Instead of writing scrapers yourself or paying for SaaS tools, you describe what you want and Claude Code writes the script, calls the APIs, processes the results, and hands back a finished file.

### API-Based Scraping Workflow

Most government procurement databases, public data portals, and modern SaaS platforms expose APIs. Claude Code can hit them directly. The flow:

1. Give Claude Code your API key and the endpoint documentation (or just the platform name — it can usually find the docs).
2. Define your keywords, NAICS codes, geographic filters, date ranges, or whatever the platform supports.
3. Tell it to search across each target state, region, or segment and aggregate the results.
4. Have it output an Excel file with separate sheets per territory, industry, or buyer persona.

Claude Code writes the Python script, paginates through results, handles rate limits, deduplicates, and structures the output. A search across 50 states that would take a full day of manual exporting and merging finishes in minutes.

### Email Validation Without the CSV Shuffle

Email validation services like ZeroBounce, NeverBounce, and Hunter all have APIs. Claude Code can plug into them directly. Hand it a CSV, give it your validation API key, and it reads each email, validates through the API, and writes a clean output file with only valid addresses. No manual upload, no waiting on a dashboard, no downloading the cleaned file. The whole step happens in one command.

### Platforms Without an API

For platforms behind a login or without API access (LinkedIn Sales Navigator, certain industry directories, gated databases), do the searching and exporting inside the platform manually. Then hand the raw CSV to Claude Code. It will parse the columns, normalize the data, filter by your criteria, deduplicate against previous lists, and organize the result into the final deliverable format.

### CRM Cross-Referencing Before Outreach

Before launching outreach against any scraped list, cross-reference it against your CRM. Export your existing customers, open opportunities, and recently contacted accounts as CSVs. Hand them to Claude Code along with the scraped list. It will exclude any overlapping companies and contacts, so you do not accidentally cold-email a customer or step on an active deal.

### Why This Matters

What used to take hours of manual searching, copying, cleaning, and validating compresses into minutes. Claude Code writes the script, runs it, processes the data, and returns a ready-to-use lead list. The scraping mindset stays the same — you still need to know where the data lives and how to find it. The execution layer just got cheaper and faster.

## Real-World API Scraping Workflow

This is the end-to-end pattern for using Claude Code to pull, filter, and cross-reference public records at scale. The pattern works for any sector where procurement records, meeting minutes, budget documents, or other government data is publicly accessible.

**Step 1: Connect to the source API**

Start with a saved search or API endpoint that returns public records. In one real project, this meant connecting to a government spending and meeting intelligence database, passing in an API key, and searching public meeting records across 10 states for mentions of specific service shortages relevant to the product being sold. Hand Claude Code the API key, the endpoint, and the filter criteria. It writes the request, paginates, and aggregates the results.

**Step 2: Filter raw results to actionable signals**

The raw pull returned over 1,500 records. Most of that volume was noise — routine mentions of the service category that did not indicate any actual demand. Claude Code wrote a Python script to filter the records down to only the entries containing genuine shortage or hiring difficulty language. This filtering step is the single most important part of the pipeline. Without it, the sales team drowns in irrelevant records. After filtering, the dataset dropped to 65 actionable leads with documented need.

**Step 3: Cross-reference against three internal lists**

Never run outreach against a raw scraped list. Cross-reference first to avoid wasting outreach on existing relationships. Load three files into Claude Code:

- The CRM customer list (active accounts you do not want to cold-email)
- The active opportunities export (open deals that should not get a parallel cold pitch)
- The do-not-contact list (accounts excluded for legal, contractual, or relationship reasons)

Claude Code normalizes company names across all four files, runs fuzzy matching, and color-codes the output. In this project, 26 matches were flagged as existing opportunities (red), 2 matched the exclusion list (yellow), and 37 were completely net-new leads with documented needs (green). The green rows are the only ones that go to outreach.

**Step 4: Run a parallel competitor frustration search**

The same data source can be scraped for competitor frustration signals. Run a separate query for mentions of competitor vendor names in the same public records. Claude Code then filters for language that indicates genuine dissatisfaction: billing disputes, service discontinuations, contract non-renewals, cost complaints, or votes to switch providers. In one run, this surfaced 5 accounts across 2 competitors where the public record showed active dissatisfaction. These are the highest-value outreach targets because the account already has budget allocated and is actively looking for an alternative — you are not creating demand, you are catching demand mid-flight.

**Step 5: Output a clean, ranked deliverable**

The final output is a single Excel workbook with the cross-referenced and color-coded lead list, a separate tab for competitor frustration accounts, and source citations on every row. The entire process from API call to cleaned, cross-referenced, color-coded file took under 30 minutes with Claude Code. Doing this manually would take a full day or more.

This is a repeatable pattern for any B2B company that sells to government agencies, public institutions, or any sector where procurement records, meeting minutes, or budget documents are publicly available. Build the workflow once, then run it weekly with a single prompt.

## Automated Website Visitor to Outreach Pipeline

This is a Python pipeline built with Claude Code that automates the path from anonymous website visitor to personalized sales outreach. It is designed for any B2B company that uses a website visitor identification tool (Snitcher, Leadfeeder, Clearbit Reveal, or similar) and wants to turn that data into qualified outreach without hours of manual work each week.

**Stage 1: Exclusion list building**

Load your CRM closed-won customers and active opportunities into the script. Normalize company names by stripping common words like "Inc," "LLC," "Corporation," and common industry terms. Use fuzzy matching with a tuned threshold. In the real build, the threshold started at 0.75 and produced false positives — two similarly named companies in different regions matched because both normalized names were short and generic. The threshold was raised incrementally to 0.88 before accuracy stabilized. Also cross-reference by email domain to catch matches the name matching misses.

**Stage 2: Visitor data ingestion**

Load the website visitor export. Filter by recency (default 30 days). Filter to your target industry. Remove your own company's visits. Sort by session count so the highest-engagement accounts get processed first.

**Stage 3: Company classification**

This is the hardest engineering problem in the pipeline. Visitor identification tools tag companies broadly. A single industry tag can catch everything from actual target accounts to software vendors, consultants, publishers, and international organizations that have nothing to do with your market. The classifier needs layers:

- Country filter (skip non-target geographies)
- Domain filter (boost certain domain patterns, skip others)
- Negative keyword matching (30+ keywords covering vendors, consultants, software companies, publishers, and unrelated industries)
- Positive pattern matching (regex patterns for your target company naming conventions)
- An ambiguous bucket for entities that need human review

In the real build, this classifier correctly identified the majority of target companies, auto-skipped the non-targets, and flagged a handful of ambiguous entities for manual review.

**Stage 4: Contact enrichment with a two-tier approach**

Tier 1: Use the Claude API with web search to find decision-maker contact info for each qualifying company. The prompt instructs Claude to search the company's staff directory, leadership page, and public records for anyone with a relevant leadership title. Claude returns structured JSON with name, title, email, phone, source URL, and confidence rating.

Key technical learning: Claude's web search responses often wrap JSON in markdown fences or include nested objects that break simple parsing. The real build required three fallback parsing methods (direct JSON parse, nested brace depth tracking, and regex field extraction) because the majority of initial enrichment results silently failed due to the parsing issue. Build all three fallbacks from the start.

Tier 2: If web search fails or returns low confidence, fall back to your existing sales engagement lead database. Match by company name, email domain, or fuzzy name matching. When multiple contacts match, prioritize by title relevance using a weighted scoring system.

**Stage 5: Email gate**

Strict rule: no valid email means the contact goes to manual lookup, regardless of how much other info was found. Clean all field values before output so there are no NaN or "None" strings in the final file.

**Stage 6: Output**

Two files: an Excel workbook with four tabs (Ready for Outreach, Manual Lookup, Excluded, Non-Target Skipped) and a sales-engagement-platform-ready CSV with clean formatting and no empty values.

**Weekly operational workflow**

Download the visitor export, open Claude Code, paste one prompt, approve the command, import the resulting CSV into your sales engagement platform. Total time: about 8 minutes including the 3-5 minute enrichment run. Cost: roughly $0.05-0.10 per company lookup via the Claude API. A typical weekly run of 20-30 new companies costs $1-3.

This is a repeatable pattern for any B2B company tracking website visitors that wants to automate the path from anonymous visit to personalized outreach. Build it once, then it runs every week with a single command.
