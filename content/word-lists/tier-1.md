---
title: "Tier 1: Replace Immediately"
---

Terms in this list should be replaced immediately when encountered. Read the [Overview](/word-lists/overview) for more information.

## Whitelist, blacklist

### Terms

* blacklist
* whitelist

### Concept

Noun: A list of authorized or unauthorized entities that might be permitted or denied access to computers and networks.

Verb: The computer administration practice of creating a list of authorized or unauthorized entities to protect computers and networks and to prevent unnecessary demand for resources.

### Recommendation

Replace immediately.

### Recommended replacement terms

**Preferred replacement terms**

* blocklist/denylist/block
* allowlist/allow

**Alternative replacement terms**

* passlist
* deny

### Unsuitable replacement terms

### Use context

* blocklist or denylist: A list of entities that are denied access
* allowlist or passlist: A list of entities that are permitted access

### Rationale for replacement

These terms are based on a metaphor where black represents bad and white represents good, which reinforces systemic racial bias. Terms that use color representationally, such as “black box” and “white glove,” do not reinforce this discriminatory metaphor and are fine to use.

From a technical communication perspective, using whitelist/blacklist as a naming convention applies metaphor (and, in turn, unintended meaning) when it isn’t needed. More directly descriptive words like blocklist/allowlist enhance understanding.

**Supporting research and precedents:**

* [“Blacklists” and “whitelists”: a salutary warning concerning the prevalence of racist language in discussions of predatory publishing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/)
* [IETF Network Working Group: Terminology, Power and Oppressive Language](https://tools.ietf.org/html/draft-knodel-terminology)
* [Android PR](https://9to5google.com/wp-content/uploads/sites/4/2020/06/android-aosp-allowlist-explanation.png)
* [cURL PR](https://github.com/curl/curl/pull/5546)

## Master, slave

**Definition(s):**

The “master/slave” metaphor in computing refers to a system with a single store of record and a set of replicas which maintain copies of the original data.

**Proposed alternatives:**

These recommendations are broken into two groups. The preferred group does not use a new metaphor while the also acceptable group does. We recommend choosing an alternative that does not replace one metaphor with another, but understand that some projects may feel that Leader/follower or Parent/child communicates best.

Preferred:

* Control plane/control plane node
* Controller/doer
* Primary/replica
* Primary/secondary

Also acceptable:

* Leader/follower
* Parent/child

**Reasoning:**

As the IETF puts it, “Master-slave is an oppressive metaphor that will and should never become fully detached from history.”
The word’s origins and historicial use reveal use that is at best chauvinistic and racist, and in almost all cases connotative of ownership.
While there is some small ambiguity about the term master, the term slave is unambiguously about the ownership and subjugation of another person, and has been since its inception.

The master/slave terminology normalizes and perpetuates the historical practice of enslavement.
Additionally, the terms master/slave are directly harmful to Black, indigenous, and people of color (BIPOC).
Slavery is a tradition barely 3 generations abolished – there are grandparents alive today who were actual, non-metaphorical slaves.
Segregation and Apartheid are even more recent.
In accordance with most open source codes of conduct and company handbooks, the mandate of all people in a project is to create a welcoming space, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Master/slave are not welcoming words.

**Recommendation:** Adopt immediately

**Supporting research and precedents:**

* [Broken Metaphor: The Master-Slave Analogy in Technical Literature](https://www.researchgate.net/publication/236752849_Broken_Metaphor_The_Master-Slave_Analogy_in_Technical_Literature)
* [IETF Network Working Group: Terminology, Power and Oppressive Language](https://tools.ietf.org/id/draft-knodel-terminology-00.html)
* [django/django PR #2692](https://github.com/django/django/pull/2692)
* [Python issue #34605](https://bugs.python.org/issue34605)
* [Drupal issue](https://www.drupal.org/node/2275877)
* [COUCHDB-2248](https://issues.apache.org/jira/browse/COUCHDB-2248)

## Master

In computing, A “master” often refers to the original or main version of an entity.

* main
* original
* source
* control plane

**Reasoning:**

While master in and of itself is potentially neutral, the propensity in which it is associated with the term slave in computing makes master on its own guilty by association. Though it is used as a standalone, it's impossible to remove the association with command and control entirely, and thus we recommend moving away from even singular use.

**Recommendation:** Adopt immediately.

**Supporting research and precedents:**

The above, as well as:

* [github/renaming](https://github.com/github/renaming)
