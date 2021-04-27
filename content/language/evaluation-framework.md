---
title: "A framework for evaluating harmful language"
---

## About

The language evaluation framework is a guidance document developed by the Inclusive Naming Initiative. It is intended to be a companion document to the [Principles](/principles). 

It outlines a structured framework for evaluating language and terminology for harm to the community. 
This enables the community to navigate divisive conversations with a measure of clarity.

The framework was created for an open source technology project. 
The framework may be applicable to other fields as well.

If you are using the framework for another open source project, 
it might be helpful to use it in conjunction with the [approval workflow](https://github.com/kubernetes/community/blob/master/wg-naming/workflow.md) the Naming Working Group defined alongside it.

## Using the framework

The framework is divided into three sections: first-, second-, and third-order concerns, ranked in order of potential harm to the community. 

First-order concerns are language where harm is egregious, overt, and clearly problematic. Second-order concerns are language which is problematic but with a less definite impact. Third-order concerns indicate language that could use improvement but does no demonstrable harm.

Answer all questions for each term evaluated.


When complete, consider questions answered in the affirmative: in general, the more questions answered “yes” or “possibly”, the more likely it is that the language in question needs to be replaced. 

If any first-order concerns are a “yes”, replace the language. 

If a significant number of second- or third- order concerns are a “yes”, strongly consider replacing the language. 

This framework is intentionally non-prescriptive. The intention in this work is to reduce harm for the community; let harm reduction guide your decisions.

### First-order concerns: bias, stereotypes, and a history of injustice

First-order concerns should be immediate candidates for replacement and correspond to the following principles:

- Do not use a term or phrase if it perpetuates bias or stereotypes.
- Do not use terms associated with identity or status of a historically underrepresented group in a way that is negative or judgmental.
- Avoid use of terms and phrases that are unnecessarily gendered.

You can use the following questions to evaluate whether a term is discordant with the principles:

1. Is the term racist?
    - i.e. “master/slave”.
2. Is the term sexist, transphobic, or pejorative about a gender identity?
3. Is the term ableist, or pejorative to neurodiverse or disabled people?
    - i.e. performing “sanity checks”. 
4. Is the term homophobic or exlcusionary to non-straight people?
5. Is the term biased, or does it assign positive connotation to some characteristics and negative to others?

### Second-order concerns: violence, injustice and cultural appropriation

Second order concerns correspond to the following principles, and should be strongly considered for future removal:
 
- Avoid use of unnecessarily violent, oppressive, or elitist terms.
- Avoid terms or phrases that originate from a history of injustice, oppression, or identity-based discrimination except when referring to the actual historical events.
- Avoid terms which are culturally appopriated

You can use the following questions to evaluate whether a term is discordant with the principles:

1. Is the term violent and could a non-violent replacement be used?
    - i.e. "kill" commands
2. Does the historical context of a term, regardless of its current useage, originate from or link to a historicial context of injustice, opression or identity-based descrimination?
    - i.e. "grandfathering in" services
3. Is the term cuturally appropriated or otherwise does it have a history of being used pejoratively?
    - i.e. "opening the kimono", or having a "pow-wow"


### Third-order concerns: language clarity

Third-order concerns center around language clarity and correspond to the following principles: 

- Clarity: is the language in use a metaphor that could be described more precisely using different words?

- Anthropomorphism: does language unnecessarily humanize components or processes?

- Idiomatic: Is language unclear to someone outside a specific culture?


#### Is the term evocative instead of descriptive?

Examples include “PetSet” (evocative) versus “StatefulSet” (descriptive). 

#### Is the term ambiguous?

Examples include the use of ABORT/STOP/KILL in Unix-like systems, where they map to specific behaviors, versus general usage in programming languages, where they map to different behaviors or are used interchangeably. 

## Footnotes 

### Changes over time

In general, strong democratic societies become more progressive and accepting as time passes. This is a feature, not a bug. 

As a result, terms that were once deemed acceptable may, at some future point, be deemed unacceptable. 

We recommend:

- Placing a date at the top of any documents/recommendations related to naming, language inclusivity, or harm reduction 
- Expecting that some of your work will need re-evaluation at a later date
- Openness to updating language as readers and cultures change


### Dealing with trolls

In the handful of months since this work began, both Kubernetes as a whole and WG Naming have dealt with a number of issues and comments from trolls. We anticipate that anyone using this document to guide their own work will receive the same kind of attention. 

In Kubernetes we mostly encounter [sea lions](http://wondermark.com/1k62/) (concern trolls), who seek to legitimize debate over false concerns in order to use up contributors' energy and time.

We work with our GitHub and other moderation teams to shut down trolling behavior at the source and remove trolling content. 

In cases where it’s unclear whether the poster is a legitimate user or a troll, we direct the work back to them: because they’re clearly “legitimately interested” in this topic, we ask them to join us in the WG Naming mailing list, drafting a formal suggestion (attached to an email address and identity we can track) and suggesting replacement terminology. Most trolls do not want to put in the effort.

Rather than be discouraged by trolls, consider it a heartening sign that you are engaged in meaningful work. 

### Kudos

This work would not have come into shape without referencing the following resources freely available online. We thank the authors of these original documents for helping guide our thoughts on the topic:

- [APA Style Guide: General Principles for reducing bias](https://apastyle.apa.org/style-grammar-guidelines/bias-free-language/general-principles) 
- [Shopify Polaris Content Guidelines: Descriptive vs. Evocative names](https://polaris.shopify.com/content/naming#section-descriptive-vs-evocative-names)
- [CNET: Twitter engineers: out with the old words...](https://www.cnet.com/news/twitter-engineers-replace-racially-loaded-tech-terms-like-master-slave/) 
