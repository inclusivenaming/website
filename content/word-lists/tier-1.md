---
title: "Tier 1: Replace Immediately"
---

## Abort, abortion

**Recommended Replacement Terms**

Depending on context, the INI recommends the following alternative terms.

- User-Initiated Termination
- Force quit
- Cancel 
- System-Initiated Termination
- Fail 

**Other Replacement Terms**

- Close (app, program, connection)
- End
- Halt
- Hard stop
- Stop (something you triggered)

**Unsuitable Replacement Terms**

- Kill (as in Linux systems) 

**Use Context**

“Abort” usually refers to the abnormal, abrupt termination of a process, either by the system itself or by a user.

**Recommendation**

Replace when possible.

**Rationale for Replacement**

The term “abort” frequently appeared in Inclusive Language Initiative surveys and standards reviews. Multiple organizations felt that usage of the word posed an issue worth addressing in their individual companies and projects. Given this widespread interest, the INI has decided to offer its own guidance.

INI recommends replacing “abort” wherever possible. In accordance with the INI’s language framework, the term does not necessarily constitute a first-order concern. However, because it is such a charged term outside of computing, “abort” fails to provide a clear description of the action being taken, and serves primarily to distract. There are numerous other words in the English language that can serve the same purpose in computing without invoking the emotionally charged cultural context of “abort.”

Although the INI debated whether the word “abort” itself or the procedure commonly associated with it (“abortion”) caused the aforementioned distractions, the etymology of the word has a direct and unambiguous link to the termination of a pregnancy. Alternative uses of the word “abort” are in use today, such as in rocketry. However, the INI concluded that the term itself was insufficiently distanced from its original meaning for those alternative definitions to be its primary association.

All this being said, the INI does not advocate for a blanket replacement of the term. “Abort” appears in many standards organization documents, and is deeply embedded in some operating systems. As such, the INI acknowledges that the term may need to be retained in certain contexts to remain in compliance with those standards, or to preserve accurate documentation for bedrock functions and processes that are too fundamental to be changed.

Some organizations have noted that using “abort” in contexts other than the medical or political serves to de-stigmatize the term, thereby promoting reproductive rights and bodily autonomy. Conversely, discouraging the term could be interpreted as accepting a framing that denies a pregnant person’s right to control their body. The judgment of the INI is that the term causes discomfort or offense without providing a necessary degree of technical clarity, and therefore it should be avoided. At some future point, because language changes over time, “abort” may become a less contentious term; at that juncture, the appropriateness of the term may be revisited.

**Status** 

Version: 0.1 
Created: August 2021
Review status:
[x] Reviewed by Inclusive Naming Initiative
[x] Approved by Inclusive Naming Initiative Language Workstream 
[ ] Reviewed by URM organizations and working groups 
[ ] Reviewed by professional diversity consultants 

## Whitelist, blacklist

**Definition:** 

Lists which permit or deny a set of nouns, or select enabled features.

**Proposed alternative:** 

* allowlist/denylist 
* allowedNouns/deniedNouns

**Reasoning:** 

The underlying assumption of the whitelist/blacklist metaphor is that white = good and black = bad. 
Because colors in and of themselves have no predetermined meaning, any meaning we assign to them is cultural: for example, the color red in many Southeast Asian countries is lucky, and is often associated with events like marriages, whereas the color white carries the same connotations in many European countries. 
In the case of whitelist/blacklist, the terms originate in the publishing industry – one dominated by the USA and England, two countries which participated in slavery and which grapple with their racist legacies to this day.

From a technical communication perspective, using whitelist/blacklist as a naming convention applies metaphor (and, in turn, unintended meaning) when it isn’t needed. 
More directly descriptive words like allowlist/denylist enhances understanding. Allowlist/denylist, or simply using allowed/denied as an entity prefix has the added benefit of being easily translatable to other human languages.

**Recommendation:** Adopt immediately

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

The terms master/slave are harmful to Black and people of color contributors and employees. 
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
