## 🤖 Lovelace
Lovelace is _(not yet)_ the **best Discord bot to bootstrap your Discord server.**

I challenged myself to build a complete Discord bot from scratch. The development will be _sometimes_ on [**my Twitch channel**](https://www.twitch.tv/imloosha). **Feel free to join the adventure!** Any support or contribution will be appreciated. 🤩

## 🎁 Contributing
As I use this on [**my own Discord server**](https://discord.gg/sWjqFm3), I built several features that I really wanted to have. If you have any suggestions, just
[**open an issue**](https://github.com/qcarpentier/lovelace/issues/new) and tell me what you think.  
If you'd like to contribute, please fork the repository and make changes as
you'd like.  
**Pull requests are warmly welcome.** (see below how to do it)

## 🐣 Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
First, you should install [**Git**](https://git-scm.com/download/win) and [**Node.js**](https://nodejs.org/). 
You will use **NPM**. It's distributed with **Node** - which means that when you download **Node.js**, you automatically get **NPM** installed on your computer.

### Installation
1. Create a [**personal fork**](https://guides.github.com/activities/forking/) of the project on Github.
2. You can easily **clone the fork** on your local machine with the following command:
    ```
    git clone <fork_project>
    ```
3. Then, you should install all the dependencies with the wonderful help of **NPM**:
    ```
    npm install
    ```
4. Your remote repo on Github is called `origin`. Add the **original repository** (this one) as a remote called `upstream`:
    ```
    git remote add upstream https://github.com/qcarpentier/arsg-bot
    ```
5. Add a new branch to work on! Don't work directly on the `master` branch:
    ```
    git checkout -b <new_feature>
    ```

### Adding A Feature
- When implementing or fix a feature, **comment your code.**
- Follow the code style of the project, **including indentation.**
- Add or change the **documentation** as needed. (for example, the `!help` command)

### Submitting A Pull Request

1. Prior to submitting your pull request, you should double check **if any commits have been made** to the `upstream master` branch:
    ```bash
    # Fetch upstream master and merge with your repo's master branch
    git fetch upstream
    git checkout master
    git merge upstream/master
    ```
2. If there were any new commits (and to avoid conflicts), you should [**rebase**](https://help.github.com/articles/about-git-rebase/) your development branch:
    ```
    git checkout <new_feature>
    git rebase master
    ```
3. It's desirable to **squash your commits** into a single cohesive commit. These commands will open up a text editor where you can specify which commits to squash:
    ```bash
    # Rebase all commits on your development branch
    git checkout 
    git rebase -i master
    ```
4. Now, you can **commit and push all of your changes** to your fork on Github, the remote `origin`. 
5. From your fork, **open a pull request in the correct branch**. Target the project's `develop` branch if there is one, else go for `master`! 
6. Once the pull request is approved and merged, you can pull the changes from `upstream` to your local repo and delete your extra branch(es).

## 📚 Built With
* [node.js](https://github.com/nodejs/node) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [discord.js](https://github.com/discordjs/discord.js/) - A powerful JavaScript library for interacting with the Discord API.
* [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from `.env` for Node.js projects.
* [colors.js](https://github.com/marak/colors.js/) - Get colors in your Node.js console.

## ❤️ Credits

> **Quentin Carpentier** &nbsp;&middot;&nbsp; 
> *Author and maintenance* &nbsp;&middot;&nbsp; 
> [qcarpentier](https://github.com/qcarpentier)

> **David Joly** &nbsp;&middot;&nbsp; 
> *Contributor and maintenance* &nbsp;&middot;&nbsp; 
> [ASmallCookie](https://github.com/ASmallCookie)

## 🎓 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 📝 Acknowledgments
* **The project isn't finished yet**. 
It's just the beginning! It should come with wonderful features such as leveling, ranks, and of course an awesome web interface. Actually, it will be **HUGE**! 😁
