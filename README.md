# Readme
Quest Log
- GitHub
- VS
- Python

Apps Used
- Editor : Visual Studio Code
- VS Extensions : Python, Git Graph, Material Icon

Windows Terminal Directory Nav.
- cd /.            = get back to home (C:/ for instance)
- cd refresh-repo  = create directory named refresh-repo
- cd ..            = go back one directory
- cd ../other-repo = change directory by one level (going back) then access other-repo folder 
- cd . > <filename> = create a file
- del .\<filename> = delete filename inside current folder
- ls               = list all file inside current folder
- cls              = clear terminal screen
- ssh-keygen -t ed25519 -C "your@email.com" = generate ssh key using ed25519 algorithm with working git email
- ssh-keygen -t rsa -b 4096 -C "your_email@example.com" = same as above but for legacy (incase ed25519 is not supported)
- cat .\<filename> = view the file as text content
- mkdir            = make directory/folder
- mkdir ../<filename> = go back one level then make a directory/folder
- rmdir .\<foldername>\ = remove or delete directory/folder
- rmdir .\<foldername>\ -force = force delete directory/folder
- move <filename> ./python/ = move a file into python folder (the operation must be done within working directory)

Visual Studio Shortcuts
- Ctrl + ` = Open internal terminal (cmd)
- Ctrl + Shift + P = Open command palette
- CTRL + K, CTRL + T = Open Custom Themes

Visual Studio Git Status
- U = Untracked
- M = Modified
- A = Added after tracked with git add
- ! = Conflicted

Check all remote branches
1. git remote update = check remote branches
2. git branch -r
3. git log --oneline = check log
4. git checkout <branch>
5. git status
6. git pull origin <branch> = pull any changes done on remote and sync. into local 
7. git checkout -b <localbranch> <remotename/remotebranch> = create local branch in sync with existing remote branch
8. git pull

Git Cheat Sheet
- git clone https://github.com/istamosh/refresh-repo.git  = clone git repo into local repo (on current folder)
- git clone <http/ssh address>                            = clone remote repo into your current directory (local)
- git clone <http/ssh address> <dirname>                  = clone remote repo into ./dirname folder
- git add .                                               = add all untracked(U) and modified(M) changes into staging area (queue before commit)
- git add <file>                                          = add a file to staging area
- git reset                                               = unstage any file from staging area
- git reset <file>                                        = unstage a file from staging area
- git reset --hard <commithash>                           = hard reset and unstage any changes back to last commit checkpoint
- git status                                              = check the git status
- git commit -m "title desc."                             = commit staging area with the title message
- git commit -m "title desc." -m "desc."                  = same as above with extended description (optional)
- git commit -am "<message>"                              = "git add ." + "git commit -m" shortcut (doesn't work if there are any file with A and U tag on Visual Studio)
- git commit --amend -m "<commit msg>"                    = Edit the typo of latest commit message
- git commit --amend --no-edit                            = Update the latest commit to include unstaged files that were left behind with no changes of commit message
- git push origin master                                  = pushes changes/commit from local "master" branch into remote "master" branch using original remote repo address from the start
- git push origin <branch>                                = if remote branch is not existed yet, push local branch into newly created remote <branch> name
- git push origin --delete <branchname>                   = delete a remote branch
- git push origin <branch> --force                        = this will overwrite all states in remote to be synced with yours, use this ONLY if there are no other remote push other than yours
- git push -u origin <branch name>                        = push local branch into remote branch by upstream (if the remote branch didn't have the corresponding branch already) (-u is the same as --set-upstream)
- git init                                                = initialize a git repo on local directory if it isn't already there
- git remote add origin <https/ssh address>               = add origin address for fetching or pushing
- git remote -v                                           = view remote address
- git remote set-url origin <address>                     = set a remote origin URL for fetch, push, or pull.
- git remote update                                       = update the state of remote branches.
- git branch                                              = view the branch name you are working on marked by asterisk (*)
- git branch -a                                           = view all detailed local and remote branches
- git branch -a -vv                                       = view all listed branch with their hash and commit message, useful for knowing the upstream of local branches
- git branch -d <branchname>                              = delete a local branch
- git branch <branchname> <hash>                          = create a local branch based on revision hash (start at one point in commit history based on hash number)
- git branch -m <newbranchname>                           = rename local branch you currently on
- git branch -r                                           = view only remote branches
- git checkout -b <branch name>                           = switch local branch to new desired branch name and make it active, any changes within local before adding and commiting will be dragged into new branch
- git checkout -                                          = checkout to previous branch (if you forget or don't want to type the name all the way)
- git checkout main                                       = switch active branch to "main" branch
- git checkout -- <filename>                              = undo any modified uncommited changes of a file (remove M flag)
- git diff <branch name>                                  = compare difference changes between current branch and branch name (quit diff by pressing q (like vim editor))
- git pull                                                = pull any changes done in remote into local branch if there are any
- git pull origin <branch>                                = same as above but with specific remote address and branch name
- git merge main                                          = if you are in branch other than main branch, this will merge both branch INTO main
- git merge main --no-ff                                  = merging with no fast forward method (default is ff)
- git revert <commit hash>                                = undo a commit (pointed by hash) with a new commit (doesn't remove the original commit from the history)
- git reset HEAD                                          = undo any changes from latest commit (only on local repo)
- git reset HEAD~1                                        = undo any changes 1-step from latest commit (ex. a commit before latest commit) (only on local repo)
- git log                                                 = view commit log with its hash addresses (above is latest)
- git log --oneline                                       = view one-liner commit log
- git log --oneline --graph --all                         = shows all graphical log of commits in one line
- git config --global user.email                          = view global settings of email address used for commits
- git config --global user.email "<email>"                = set global email address for commits
- git config --global user.name "<name>"                  = set global name for commits
- git config --global alias.ac "commit -am"               = set global configuration alias for automatic adding files and local commits ("-am" flag), then you can use your custom alias by using command "git ac <commit message>". Using alias makes you work more faster (QoL). More alias explanation on [here](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases).
- git config --global --edit                              = edit the global config, using cmd-line VIM editor. See below.
- git config --global --unset <alias.myalias>           = remove "alias.myalias" alias settings from global configuration
- git rebase <branch>                                     = rebase current branch you worked on against the desired branch
- git fetch origin main                                   = fetch branch from remote branch named "main" into "origin/main" local branch
- git stash save <savename>                               = stash any changes after git add before working on other branch
- git stash list                                          = view list of stashes (addressed by index)
- git stash apply <index number>                          = apply stashed files into current branch
- git stash pop <savename>                                = pop out stashed works on current branch (similar to apply)
- git restore --staged <file>                             = opposite of git add <file>, remove a file from staging area

# VIM Editor Navigation:
Exit Commands (press ":"), after command press Enter:
- :wq = write changes and quit editor
- :q! = quit without saving
- :q = quit with prompt (overwrite changes, etc.)
- (Insert button) = shows :INSERT: mode, allowing edits, if done press "Esc button".

Merging
1. git checkout <branchname> = checkout this branch as a base of merging process
2. git merge <featurename> = merge feature branch into base branch
3. git push origin main = push the merging process into remote main branch
4. git branch -d <branchname> = delete local branch after merge (optional)
5. git push origin -d <branchname> = delete remote branch after merge (optional)

Creating new repository
1. cd <localdir>
2. git init
3. git remote add origin <http/ssh addr.>
4. git add .
5. git commit -m <message>
6. git push -u origin <master/main branchname>

Creating new local branch in sync with remote
1. git checkout -b <branchname> = create new local branch
2. (do and commit something.)
3. git push -u origin <branchname> = push local into newly created remote branch and set upstream

Stashing changes and switching
1. git add <files> = add files for stashing
2. git stash save "<stashname>" = save with stash name
3. git checkout <branch> = swap to target branch (if wanted to just checking files or bring changes here)
4. git stash list = view a list of stashed saves (index started from 0)
5. git stash apply <index> = apply saved stash by index number
6. git stash drop <index> = drop (delete) saved stash by index number

Git Log Navigation
- q = Quit log viewing
- j = Scroll down (arrow down button)
- k = Scroll up (arrow up button)
- PgUp = Scroll up
- PgDn = Scroll down
- Space = Scroll down

Using SSH (optional, Windows)
- ssh-keygen -t ed25519 -C "your@email.com"
- Enter file in which to save the key (local) = just enter for default path (C:\Users\<user>/.ssh/)
- Enter passphrase = can be empty
- key.pub for public key, while the other is private.
- insert public key into account's SSH entry
- start-ssh-agent.cmd = start an SSH agent
- ssh -T git@github.com = add github's pull/push address into SSH trusted hosts (known_hosts)
- git clone <repoSSHaddress>

Rebasing
1. git checkout feature-branch
2. (switched to feature-branch)
3. git rebase master --interactive = pulls out interactive view of branch hash to be picked or squashed
3a. pick = to be used for commits, squash = use and squash two commits into one commit
3b. (if you are done, save the interactive file (git-rebase-todo) and close it.)
3c. (another file popped up named COMMITMSG, edit commit messages for each commit, then save and close it.)

Merge Conflict (No fast-forwarding)
1. git checkout main = merge feature to main
2. git merge feature --no-ff
3. (conflict occured, edit conflicted file, then save)
4. git status
5. git add .
6. git commit -m "fix conflicts..."
7. git push

Using --amend to revise a latest commit (works only on local)
- git commit --amend -m "<commit msg>" = update the latest commit message because of a typo or something without changing the already tracked commits
-- If there any left behind files post-commit:
1. git add .
2. git commit --amend = add staged files to latest commit without adding new commit (use --no-edit for same message, or -m for update the message too)
-- If the commit already pushed into the remote repo:
- git push origin <branch> --force = this will overwrite all states in remote to be synced with yours, use this ONLY if there are no other remote push other than yours

Another Explanation
- Checkout act will bring all uncommited changes into active branch.
- You can work on other repo by initiating a git on other directory away from already initiated git local repo (checked using git branch -a -vv)
- PR (Pull request) is an act to merge feature branch into parent or base branch, with other still working on that parent branch, with their consent to accept/reject, compare, review, or even comment on your request. After accepting, merge can be done and your feature branch will be no longer needed.
- Conflicts occur when there are both file changes in two separate branch that are ready to be merged together, resolve manually by navigating into conflicted file one by one marked by <<<, ===, and >>>. and then re-commit again.
- To minimize branch conflicts and navigating easier, use graph feature provided by Git.
- Fork is an act of copying other author's full project into self for contribution or studying the codes inside it. For contribution purpose, modify some file you desire then create pull request to original author's project, if they accept your request, they will merge your branch into their branch and you are marked as one of their contributors.
- HEAD is an active branch (currently working on) or checked out branch ("git checkout" command)
- 90% of the time working on branches means working locally.
- Rebase is an act to re-anchor a feature branch against the master branch IF the master have new commit (ahead of feature branch) on the remote while you working on feature, ofcourse after you do pull check on master. This can be done by checkout on feature then "git rebase master", a test will performed (if there are no conflict) and a new anchor is placed on that recent master commit (feature branch will move forward to last master commit), then you checkout back to master then do "git rebase feature-branch" to merge any commits on feature branch into master (any number of commits on feature will be applied to master, thus rewriting master's history).
- Fast-forward merge will integrate checkouts branch's (B) commits history into the selected branch (A), making A have NO branching history of (B).
- git fetch is different from git pull because fetch copies any changes done in remote repo into new local branch named origin/<branch>.
- Stashing (git stash) is used for "wrap" added files (git add .) yet uncommited changes away prior to switching branch. Useful for checking another branch without bringing file changes from current branch. Stash is considered local branch.
- git revert is the easiest and safest way to undo a commit, this way creates a new commit that undoes the desired previous commit (A(created file1), B(edited file1), C(created file2), D(revert "edited file1")), thus making it stay in commit history (helps for tracking mistakes)
- git reset is used for deleting commits and getting back to desired commit pointer, e.g A-B-C-D (latest is D), git reset C will result in A-B-C, while still maintaining local saved files in place and unstage them. To remove local changes too, use --hard parameter, this will effectively going back in time and loses latest tracks permanently, so proceed with caution.
- Before commiting, notice the colored vertical lines on the left besides Line Number in Visual Studio Code, anything added from nothing will be denoted with green lines, while anything changed denoted with blue lines (including deletion, modification, and revision), you can click on that lines to reveal which is changed and the differences from past commits, this helps keeping the track of what you have done for the commit messages later (besides file flags like U, M, A, etc.). This feature is called "Git Local Working Changes".