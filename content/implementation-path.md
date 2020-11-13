---
title: "Implementation Path"
---

The work to be done in support of naming changes does not require a huge investment of engineering time, but can have consequences. We suggest the following:

1. Divide changes into internal changes, customer-facing changes, and build/tooling changes
2. Assess the scope of changes to make in each of these categories using simple tools like `grep` searches.
3. Make changes incrementally, providing concurrent support
4. Deprecate old terminology

We also suggest doing these changes in order:

1. Internal changes 
2. Customer-facing changes
3. Build/tooling changes

## Internal changes

### Assess the project's source code

1. Do a recursive search of the project source code and documentation (e.g., `grep -Ri XYZ .`), where `XYZ` is the old term. 
2. Review the results to identify changes, and do them incrementally. Do not edit generated files. Instead, fix the source files and regenerate the files. 

### Check the results 

There are many ways to do a search and replace of files once you have determined that the changes are correct. A general command line command on POSIX systems to recursively rename `foo` into `bar` (when GNU sed is used) for filenames ending in `.txt` is:

```bash
find . -type f -name '*.txt' -exec sed -i'' -e 's/foo/bar/g' {} +
```
On MacOS and other BSD-based systems, put a space after `-i` (GNU sed requires no space while BSD sed requires a space).

Change `find .` to `find NAME` to start at directory `NAME` instead of the current directory. This is a case-sensitive match that replaces the original term even within other terms/phrases.

### Add concurrent support 

Where practical add support for new names while supporting old names. This allows projects to change incrementally instead of requiring changes to occur simultaneously across all related projects and organizations. It also reduces the risk of system failure.

For projects that have automated test suites, add tests to ensure that either both old and new names work, or that at a minimum new names work. This allows end users to incrementally transition with confidence.

In some projects this work will take significant time, be gracious to those doing the work, and be understanding that it will take time to do all this coordination.
 
## Customer-facing changes

Changes to customer facing terminology like URLs are harder to deal with. Run through the steps for internal changes in addition to the following two points.

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

## Project tooling

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

## Deprecating old terminology

At some point, old naming should be deprecated. This will drive true adoption across open source user communities as opposed to optical adoption of changes, and will show our support as an organization in a concrete manner. 

The timelines involved are dependent on the nature of the project and the size of the end user communities. However projects must communicate and follow through on an eventual deprecation of all old terminology. We also encourage projects to make an announcement of new terminology to their communities, for example through a blog post or similar.


## Communications and maintenance

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

Defending your community and its contributors from harassment should be your top priority. We encourage you to take a stance of banning/blocking as quickly as possible. 
