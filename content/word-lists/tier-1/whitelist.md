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
    - allowedNouns/deniedNouns (or other verbs)
    - allowlist/denylist
unsuitable_replacements:
    - N/A
rationale: |
    The underlying assumption of the whitelist/blacklist metaphor is that white = good and black = bad. Because colors in and of themselves have no predetermined meaning, any meaning we assign to them is cultural: for example, the color red in many Southeast Asian countries is lucky, and is often associated with events like marriages, whereas the color white carries the same connotations in many European countries.

    From a technical communication perspective, using whitelist/blacklist as a naming convention applies metaphor (and, in turn, unintended meaning) when it isn’t needed. A suitable verb or adjective enhances understanding by replacing the metaphor with a direct description.

    In English, "whitelist" and "blacklist" can be used as either verbs or nouns.  As a verb, commonly used words such as "allow" or "deny" can be used directly.  Depending on the context, other verbs such as "skip", "ignore", "block", "waive", "disable" can be used instead.  As a noun, words such as "allowlist" and "denylist" are in use and are more descriptive than whitelist/blacklist, but they may be difficult to translate to other human languages.  Consider prefixed forms instead, such as "allowedRecipients" as a replacement for "recipientWhitelist"; in descriptive text (as opposed to code) you may want to prepend "list of", as in "list of allowed recipients".


status: | 
    N/A
supporting_content: | 
    (1) [“Blacklists” and “whitelists”: a salutary warning concerning the prevalence of racist language in discussions of predatory publishing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/)
    (2) [IETF Network Working Group: Terminology, Power and Oppressive Language](https://tools.ietf.org/html/draft-knodel-terminology)
    (3) [Android PR](https://9to5google.com/wp-content/uploads/sites/4/2020/06/android-aosp-allowlist-explanation.png)
    (4) [cURL PR](https://github.com/curl/curl/pull/5546)

---
