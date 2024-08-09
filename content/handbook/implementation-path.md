---
title: "Implementation Path"
aliases:
- /language/implementation-path/
---

## Implementation path

While at first glance, changing words in a project may seem like a
simple search-and-replace, it would be dangerous, and harmful to your
users, to approach it that simplistically. We recommend a more
methodical approach.

### Assess the project's source code and documentation

Not all phrasing changes are equal. We encourage you to think of changes
in four broad categories:

1. Non-functional words: Words and phrases that appear in documentation, web pages, or code comments, but do not directly relate to keywords, variables, function names, and so on, in the actual code. These can simply be changed to better alternatives with no functional impact.
2. Internal-only words: Words that are in code can sometimes be changed with no functional impact (eg, local variable names, function names that are only called inside the project code and not accessed externally.)
3. External-facing functional words: Function names or configuration directives which are exposed externally, such as via an API or a configuration file, require a deprecation plan, so that you do not risk breaking production deployments.
4. Dependencies: Finally there are functional calls into other projects, APIs, services, and so on, which you cannot change until that other project/service changes. We recommend writing wrapper functions so your code can be “clean”, but still work with third-party code.

We recommend using tooling, from the beginning, that identifies what
remains to be changed, and tracks your progress towards that goal. In
the coming weeks we hope to provide or recommend tooling to accomplish
this.

### Change gradually, test constantly

While it may be tempting to do a global search and replace, this will
have unexpected results on projects of any complexity. Make your changes
in small increments, running your test suite every time to ensure that
nothing has broken.

Words in category 1 (above) can often be changed very quickly for an
early, public, visible change. As you progress through the 4 categories,
changes should be increasingly more cautious, with particular attention
paid to changes that may break existing installations of the software.

Where practical add support for new names while supporting old names. This allows projects to change incrementally instead of requiring changes to occur simultaneously across all related projects and organizations. It also reduces the risk of system failure. Issuing non-breaking warnings when the deprecated term is used, with a notice of when it will no longer be supported, will give existing users a chance to make these changes without taking down their production installations.

For projects that have automated test suites, add tests to ensure that either both old and new names work, or that at a minimum new names work. This allows end users to incrementally transition with confidence.

In some projects this work will take significant time, be gracious to those doing the work, and be understanding that it will take time to do all this coordination.
 
### URLs, URL fragments, command, and API names

For HTML URLs like documentation, add new `id` values, or rename the page and set up a server 301 redirect from the old URL to the new one.

Where possible, API endpoints should accept both terms for a period of time, and eventually deprecate the old term.

Similarly, command names and flags for CLI tooling should accept both terms for a period of time. Ideally, serve a deprecation notice when a user uses the old command or flag.


### Assess downstream impact

Assess whether downstream projects have a specific dependency on any of the following:

* Git branch names
* Specific URLs
* Specific keywords or commands

Catalog downstream tools which have a specific dependency on git branch names. Any tool that needs to know the specific URL of a git repository should be checked for references to the branch name.

If the work is done well, projects which consume open source software won’t face any immediate impact: old API endpoints, method names, URLs and more will continue to work in the short-term – about 1-3 years, depending on the project. 

However, in the long term, if downstream projects keep their dependencies up to date, they will need to change calls to methods, endpoints, and other exposed functionality. URLs will likely maintain aliases in the long term.

### Project tooling

Review all systems that build or test systems. This includes:

* any continuous integration / continuous delivery (CI/CD) systems
* git branch names
* GitHub Actions
* Static site generator CDNs like Netlify 

Check their external configuration settings, especially all that are not controlled by the version control system for the source code.

Review anything that has branch-specific information, such as protected branch rules

### Changing the git branch name

The best resource for changing branch names is [GitHub's renaming repository](https://github.com/github/renaming).

Their recommendation is to wait until later in the year (2020) to change branch names. However, if you want to start work, we recommend the following:

1. Rename branches to `main` in repositories that are not customer facing and are low impact first, for example, documentation repositories.
2. Next rename repositories with deeper integrations that are outside of the critical release path: adjacent tooling, GitHub organization automation, and smaller projects are good next candidates.
3. Finally, rename repositories that are in the critical path for a project release. These should be done carefully and scoped out fully before executing.


When renaming, any system that uses “master” may now point to an old, unmaintained branch. Some projects may prefer this to start, as it can reduce the systems that break, and then later remove the “master” branch once the new name is being widely used.

Then, communicate it to your contributors with local git clones.
Contributors must go through the process outlined [here](https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx). 

Communicate the change in advance of making it, to reduce friction for contributors. We recommend a one month lead time. 

### Communications and maintenance

Communicate changes with your broader project communities.

Communication should include the following:
* The changes being made
* Change timelines
* Deprecation timelines, if any
* What new and existing contributors and users may need to do to adapt to the change. For example:
  * Do contributors need to make sure their local git repositories point to a new branch name?
  * Do users need to change URLs or hard-coded commands?

Be aware that members of your community will use this as an opportunity to troll. In the weeks after announcing changes, be extra vigilant of the following spaces:

* Issues opened, particularly by new GitHub accounts and people who don’t contribute to your project
* Discussion threads and mail list replies
* Twitter mentions to key maintainers and project accounts

Defending your community and its contributors from harassment should be your top priority. We encourage you to take a stance of banning/blocking as quickly as possible. Remember whose side you're on, and that you are making these changes for the benefit of your users and project community

