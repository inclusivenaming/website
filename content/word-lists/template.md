---
title: "WordList Template"
ignore: true
---

The Hugo software used to build this website uses Frontmatter of each page to determine how to process each page. The Wordlist section of this website uses the frontmatter to generate the pages for each Wordlist term and the JSON file containing all of them. To ensure consistency, the template below has been created. It is based on YAML.

We you are creating a Pull Request for a new term, copy the template from the first `---` to the last one, make sure to include both `---`.

**You can change the values of every field in the front matter, where necessary, except `type, layout and outputs`. These are used by Hugo to process the pages**


```
---

############################
### DO NOT CHANGE THESE VALUES ###
type: wordlist
layout: wordlist
outputs:
    - html
    - json
############################

## YOU CAN CHANGE THE VALUES OF THE FIELDS BELOW ##
## DO NOT CHANGE THE FIELD NAMES ##

## Related terms, Recommended Replacements & Unsuitable Replacements fields expect a buletted list using - symbol ##

## Rationale, Status & Supporting Content allows multiline content, you can also use markdown format. Please make use the | symbol is not deleted.

title: "Test1"

tier: 1
term: "test1"
related_terms:
    - None
definition: "N/A"
use_context: "N/A"
recommendation: "N/A"

recommended_replacements:
    - None


unsuitable_replacements:
    - None

rationale: |
    N/A
status: | 
    N/A
supporting_content: | 
    N/A

---
```
