# Quest Log
- GitHub
- VS
- Python

# Windows Terminal Directory Nav.
- cd /.            = get back to home (C:/ for instance)
- cd refresh-repo  = create directory named refresh-repo
- cd ..            = go back one directory
- cd ../other-repo = change directory by one level (going back) then access other-repo folder 
- del .\<filename> = delete filename inside current folder
- ls               = list all file inside current folder
- cls              = clear terminal screen
- ssh-keygen -t ed25519 -C "your@email.com" = generate ssh key using ed25519 algorithm with working git email
- ssh-keygen -t rsa -b 4096 -C "your_email@example.com" = same as above but for legacy (incase ed25519 is not supported)
- cat .\<filename> = view the file as text content
- mkdir            = make directory/folder
- mkdir ../<filename> = go back one level then make a directory/folder
- rmdir            = remove or delete directory/folder
- move <filename> ./python/ = move a file into python folder (the operation must be done within working directory)

# Visual Studio Shortcuts
- Ctrl + ` = Open internal terminal (cmd)
- Ctrl + Shift + P = Open command palette

# Visual Studio Git Status
- U = Untracked
- M = Modified
- A = Added
- ! = Conflicted

# Git Cheat Sheet
- git clone https://github.com/istamosh/refresh-repo.git  = clone git repo into local repo (on current folder)
- git add .                                               = add all untracked(U) and modified(M) changes into staging area (queue before commit)
- git add app.py                                          = add app.py to staging area
- git reset                                               = unstage any file from staging area
- git reset app.py                                        = unstage app.py from staging area
- git status                                              = check the git status
- git commit -m "title desc."                             = commit staging area with the title message
- git commit -m "title desc." -m "desc."                  = same as above with extended description (optional)
- git push origin master                                  = pushes changes/commit from local repo into "master" branch using origin link from the start
- git push origin --delete <branchname>                   = delete a remote branch
- git init                                                = initialize a git repo on local directory if it isn't already there
- git remote add origin <https/ssh address>               = add origin address for fetching or pushing
- git remote -v                                           = view remote address
- git remote set-url origin <address>                     = set a remote origin URL for fetch, push, or pull.
- git branch                                              = view the branch name you are working on marked by asterisk (*)
- git branch -a                                           = view all detailed local and remote branches
- git branch -a -vv                                       = view all listed branch with their hash and commit message, useful for knowing the upstream of local branches
- git branch -d <branchname>                              = delete a local branch
- git branch <branchname> <hash>                          = create a local branch based on revision hash (start at one point in commit history based on hash number)
- git branch -m <newbranchname>                           = rename local branch you currently on
- git branch -r                                           = view only remote branches
- git checkout -b <branch name>                           = switch local branch to new desired branch name and make it active, any changes within local before adding and commiting will be dragged into new branch
- git checkout main                                       = switch active branch to "main" branch
- git diff <branch name>                                  = compare difference changes between current branch and branch name (quit diff by pressing q (like vim editor))
- git push -u origin <branch name>                        = push local branch into remote branch by upstream (if the remote branch didn't have the corresponding branch already) (-u is the same as --set-upstream)
- git pull                                                = pull any changes done in remote into local branch if there are any
- git pull origin <branch>                                = same as above but with specific remote address and branch name
- git commit -am "<message>"                              = shortcut for add modified file into staging area and insert commit message (doesn't work if there are any file with A tag on Visual Studio)
- git merge main                                          = if you are in branch other than main branch, this will merge both branch into main
- git reset HEAD                                          = undo any changes from latest commit (only on local repo)
- git reset HEAD~1                                        = undo any changes 1-step from latest commit (ex. a commit before latest commit) (only on local repo)
- git reset <hash>                                        = undo any changes back to latest commit pointed by hash address
- git reset --hard <hash or HEAD~number(arg)>             = undo any changes and get rid of stages
- git log                                                 = view commit log with its hash addresses (above is latest)
- git config --global user.email                          = view global settings of email address used for commits
- git config --global user.email <email>                  = set global email address for commits
- git clone <http/ssh address>                            = clone remote repo into your current directory (local)
- git clone <http/ssh address> <dirname>                  = clone remote repo into ./dirname folder

# Merging
1. git checkout <branchname> = checkout this branch as a base of merging process
2. git merge <featurename> = merge feature branch into base branch
3. git push origin main = push the merging process into remote main branch

# Git Log Navigation
- q = Quit log viewing
- j = Scroll down (arrow down button)
- k = Scroll up (arrow up button)
- PgUp = Scroll up
- PgDn = Scroll down
- Space = Scroll down

# Using SSH (optional, Windows)
- ssh-keygen -t ed25519 -C "your@email.com"
- Enter file in which to save the key (local) = just enter for default path (C:\Users\<user>/.ssh/)
- Enter passphrase = can be empty
- key.pub for public key, while the other is private.
- insert public key into SSH entry
- start-ssh-agent.cmd = start an SSH agent
- ssh -T git@github.com = add github's pull/push address into SSH trusted hosts (known_hosts)

# Another Explanation
- PR (Pull request) is an act to merge feature branch into parent or base branch, with other still working on that parent branch, with their consent to accept/reject, compare, review, or even comment on your request. After accepting, merge can be done and your feature branch will be no longer needed.
- Conflicts occur when there are both file changes in two separate branch that are ready to be merged together, resolve manually by navigating into conflicted file one by one marked by <<<, ===, and >>>. and then re-commit again.
- Fork is an act of copying other author's full project into self for contribution or studying the codes inside it. For contribution purpose, modify some file you desire then create pull request to original author's project, if they accept your request, they will merge your branch into their branch and you are marked as one of their contributors.
- HEAD is an active branch (currently working on) or checked out branch ("git checkout" command)
- 90% of the time working on branches means working locally.