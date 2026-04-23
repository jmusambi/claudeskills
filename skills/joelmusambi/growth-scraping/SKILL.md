---
name: Growth Scraping
description: "Use this skill when building targeted lead lists through web scraping, using search operators to find hidden data, extracting contact information from websites, automating data collection, or growth hacking through creative data sourcing. Covers Google operators, browser inspect tools, shortlink enumeration, and the scraping-to-campaign workflow."
category: Scraping
access: free
---

# Growth Scraping — Web Scraping and Search Operators for Lead Generation

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
