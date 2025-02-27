---
title: "Towards More Inclusive Infrastructure"
date: 2021-04-14
slug: inclusive-infra
author: Reinhardt Quelle
---
This post will be short, because it really is _that simple_.

My team at Cisco builds platform services that underlie the multiple projects within the Emerging Technology and Incubation group.  Our mission is to build 'paved roads' for developers; we create common reusable patterns and services that any engineer or venture needs to deliver an application.

Recently, one of my peers pinged me in chat and pointed out that someone on my team had just announced the expansion of our CI build environment with the addition of "slaves 10-15". She inquired about the use of the term “slave” and I immediately knew she was pointing to a form of microaggression in code and something not in line with our values.


She is right.  It's not only inappropriate to perpetuate the use of terms that are harmful to our diverse employees; it's also specifically against our company [policy](https://www.cisco.com/c/en/us/about/social-justice/inclusive-language-policy.html) to do so. 

Since these hosts had been created via "infrastructure as code", it was a simple matter to send a pull request to the repo containing that code with more inclusive - and indeed more descriptive - names, and re-deploy. 

But, since we are site reliability engineers, we are conditioned to ask "how could we prevent this from happening again?" Policy is fine, but we like to fix things in code. We enforce computer language standards and security policies via linters in our pipelines, so why not inclusive language? 

Again, it really is this simple.  To make our platform more inclusive: 

> ```rules + audit = change + progress``` 

Indeed, a quick web search turns up not just one, but several open source projects. I posted a request to my team that afternoon, and when I got back into the office in the morning I found one of my platform engineers had already done a quick survey of the available tools and added a stage to our common build pipeline. More "X-as-code" for the win. We didn't have to modify hundreds of builds, but simply updated our common pipeline code which is already in place to do security, licensing, and other types of scans.

This is where things became even more interesting. When announcing the change to let all of our engineering teams (SRE and product) know that they would be seeing warnings from the inclusive linter in their build outputs, we were immediately met with resistance. That then prompted a very healthy discussion around the "why" and the underlying context.  What was even more interesting was the response from the global team - it turns out that our linter is very US-centric and is missing language that is problematic to our international community. 

Yes, there is more to be done – working with upstream projects, expanding to the other groups in our company, reporting back to our Office of Inclusive Futures, improving tools, and the list goes on. But, the most important thing is to just take the first step. 

This has been an incredibly rewarding experience; in one simple exercise, we have seen the power of infrastructure as code, the open source community, and robust collaboration technology that "powers an inclusive future for all". 

This was cross-posted from our [Cisco Tech Blog](https://ciscotechblog.com/blog/inclusive-infrastructure/). We are excited to be a part of the [Inclusive Naming Initiative](https://inclusivenaming.org) and we are looking forward to working with this community. Through the INI and the open source community at large, we believe we can illuminate and amplify the efforts happening across our whole industry.


Reinhardt Quelle  
Director, Site Reliability Engineering, Cisco Emerging Technologies and Incubation

---

Tools:

 * [woke](https://github.com/get-woke/woke)
 * [inclusivelint-lib](https://github.com/inclusivelint/inclusivelint-lib)

References:

 * [Inclusive Naming Initiative](https://inclusivenaming.org)
 * [Linux Kernel inclusive-terminology merge tag](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=49decddd39e5f6132ccd7d9fdc3d7c470b0061bb)
 * [Cisco Social Justice Beliefs and Actions ](https://www.cisco.com/c/en/us/about/social-justice.html)

