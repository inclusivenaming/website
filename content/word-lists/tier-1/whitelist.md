---
title: "Whitelist"
type: wordlist
layout: wordlist
outputs:
    - html
    - json


tier: 1
term: "whitelist"
related_terms:
    - blacklist
definition: "Lists which permit or deny a set of nouns, or select enabled features."
use_context: "N/A"
recommendation: "Adopt immediately"
recommended_replacements:
    - allowlist/denylist
    - allowedNouns/deniedNouns
unsuitable_replacements:
    - N/A
rationale: |
    The underlying assumption of the whitelist/blacklist metaphor is that white = good and black = bad. Because colors in and of themselves have no predetermined meaning, any meaning we assign to them is cultural: for example, the color red in many Southeast Asian countries is lucky, and is often associated with events like marriages, whereas the color white carries the same connotations in many European countries. In the case of whitelist/blacklist, the terms originate in the publishing industry – one dominated by the USA and England, two countries which participated in slavery and which grapple with their racist legacies to this day.

    From a technical communication perspective, using whitelist/blacklist as a naming convention applies metaphor (and, in turn, unintended meaning) when it isn’t needed. More directly descriptive words like allowlist/denylist enhances understanding. Allowlist/denylist, or simply using allowed/denied as an entity prefix has the added benefit of being easily translatable to other human languages.


status: | 
    N/A
supporting_content: | 
    (1) [“Blacklists” and “whitelists”: a salutary warning concerning the prevalence of racist language in discussions of predatory publishing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/)
    (2) [IETF Network Working Group: Terminology, Power and Oppressive Language](https://tools.ietf.org/html/draft-knodel-terminology)
    (3) [Android PR](https://9to5google.com/wp-content/uploads/sites/4/2020/06/android-aosp-allowlist-explanation.png)
    (4) [cURL PR](https://github.com/curl/curl/pull/5546)

---
