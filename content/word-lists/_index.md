---
title: "Overview"
type: wordlist
layout: wordlist
outputs:
    - html
    - json
    - custom
---

# Language recommendation lists

The Inclusive Naming Initiative produces three tiers of language recommendation. These are compiled into lists for easy consumption by adopters. Terms are separated into lists based on the severity of the term in question as well as the level of review the terms have received.

To add new terms to the lists, review the [Wordlist template](/word-lists/template/) page.


## [Tier 1: Replace Immediately](/word-lists/tier-1/)

Tier 1 terms should be replaced whenever encountered.
Terms included in this list have one or all of the following:

- Strong social consensus within the software development community on replacements
- Are identified by the Inclusive Naming Initiative as high-severity terms in need of immediate replacement
- Terms where the impact of change or removal is low: for example, there is little entanglement in low-level systems or standardized language set by standards bodies
- Have passed through all the review stages in Tiers 2 and 3

## [Tier 2: Strongly Consider Replacing](/word-lists/tier-2/)

Terms in this list should be replaced whenever possible, barring major breaking changes.
Terms included in this list have one or all of the following:

- Are terms from Tier 3 that have undergone through external review by underrepresented minority groups and outside consultants
- Terms which would otherwise be in Tier 1 but have dependencies on language set by standards bodies, or are deeply embedded in low-level systems and thus difficult to change

## [Tier 3: Recommendations to Replace](/word-lists/tier-3/)

Terms in this list should be considered for replacement.
Terms included in this list have one or all of the following:

- Review by the Inclusive Naming Initiative, with particular attention paid to finding consensus among member companies and participants' companies for replacements
- Research conducted by the Inclusive Naming Initiative on the etymology of the word and non-tech cultural connotations, per the [Language Evaluation Framework](https://inclusivenaming.org/language/evaluation-framework/)
- A consensus-based replacement term or terms proposed by the Language Workstream and sent for approval and review to the larger Initiative.

## [No-Change](/word-lists/no-change/)

This word list captures terms the Inclusive Naming Initiative and its partner organizations evaluated but did not recommend any changes for.


## JSON Formatted list

The complete wordlist can be accessed in a single [JSON file](/word-lists/index.json), formatted as follows:

```json
{
    "data" :
        [
            {
                "term": "abort",
                "tier" : "1",
                "recommendation": "Replace when possible.",
                "recommended_replacements": ["User-Initiated Termination","Force quit","Cancel","System-Initiated Termination","Fail","Close (app, program, connection)","End","Halt","Hard stop","Stop (something you triggered)"],
                "term_page" : "http://inclusivenaming.org/word-lists/tier-1/abort/index.html"
            }
        ]
}
```

