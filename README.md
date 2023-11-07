# Quest Log
- GitHub
- VS
- Python

# Windows Terminal Directory Nav.
- cd /.            = get back to home (C:/ for instance)
- cd refresh-repo  = create directory named refresh-repo
- cd ..            = go back one directory
- del .\<filename> = delete filename inside current folder
- ls               = list all file inside current folder
- ssh-keygen -t ed25519 -C "your@email.com" = generate ssh key using ed25519 algorithm with working git email
- ssh-keygen -t rsa -b 4096 -C "your_email@example.com" = same as above but for legacy (incase ed25519 is not supported)
- cat .\<filename> = view the file as text content
- mkdir            = make directory/folder
- rmdir            = remove or delete directory/folder

# Visual Studio Git Status
- U = Untracked
- M = Modified
- A = Added

# Git Cheat Sheet
- git clone https://github.com/istamosh/refresh-repo.git  = clone git repo into local repo (on current folder)
- git add .                                               = add all untracked(U) and modified(M) changes into staging area (queue before commit)
- git add app.py                                          = add app.py to staging area
- git status                                              = check the git status
- git commit -m "title desc."                             = commit staging area with the title message
- git commit -m "title desc." -m "desc."                  = same as above with extended description (optional)

# Using SSH (optional, Windows)
- ssh-keygen -t ed25519 -C "your@email.com"
- Enter file in which to save the key (local) = just enter for default path (C:\Users\user/.ssh/)
- Enter passphrase = can be empty
- key.pub for public key, while the other is private.