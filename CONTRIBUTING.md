# Contributing to \{ reactForums \}

When contributing to this repository, please first discuss the change you wish to make via issue, email, Slack, LinkedIn, or any other method with the owners of this repository before making a change.

Please note we have a [Code of Conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Using the issue tracker

The [issue tracker](https://github.com/reactForums/reactForums/issues) is the preferred channel for spelling mistakes, errors or any general smaller feedback. Please respect the following restriction:

- Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

## Pull requests

Please adhere to the coding conventions used throughout the project (spelling, indentation, punctuation etc.).

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo) the project, clone your fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone git@github.com/<your-username>/reactForums.git
   # Navigate to the newly cloned directory
   cd reactForums
   # Assign the original repo to a remote called "upstream"
   git remote add upstream git@github.com:reactForums/reactForums.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

5. Run the dev:setup script before you start working to install npm packages and see the current state of the tests:

   ```bash
   npm run dev:setup
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
   with a clear title and description.

**IMPORTANT**: By submitting patches, you agree to allow the project owners to license your work under the terms of the [MIT License](LICENSE).
