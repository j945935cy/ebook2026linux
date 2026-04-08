const chapters = [
  {
    title: "第一章・Linux 是什麼",
    content: [
      "Linux 是一套以核心為基礎發展出來的作業系統家族，常見於伺服器、雲端平台、嵌入式設備，也越來越多人拿來當成日常開發環境。它最大的特色之一，是自由開放、可高度客製化，而且工具鏈非常完整。",
      "對初學者來說，可以先把 Linux 理解成一種重視文字指令、檔案結構清楚、權限觀念明確的系統。雖然一開始看起來沒有圖形介面那麼直覺，但一旦熟悉後，操作效率通常會非常高。",
      "你不一定要立刻安裝 Linux 到實體電腦上，很多人會先從虛擬機、WSL，或線上 Linux 練習環境開始。重點不是一次學完，而是建立對系統運作方式的基本感覺。"
    ],
    examples: [
      {
        title: "範例：在 Windows 上用 WSL 開始學 Linux",
        code: "wsl\nuname -a\npwd",
        output: "Linux DESKTOP-12345 6.x.x-microsoft-standard-WSL2 x86_64 GNU/Linux\n/home/your-name",
        explanation: "這組指令示範如何進入 WSL、查看目前系統資訊，以及確認目前所在目錄。對初學者來說，這是很好的第一步。"
      }
    ],
    pitfalls: [
      {
        problem: "輸入 `wsl` 後顯示找不到指令。",
        fix: "先確認 Windows 是否已安裝並啟用 WSL 功能，再重新開啟終端機。"
      },
      {
        problem: "看不懂 `uname -a` 的輸出內容。",
        fix: "先把它當成辨識系統版本的資訊即可，重點是知道它能幫你確認目前正在什麼 Linux 環境。"
      }
    ],
    summary: [
      "Linux 常見於伺服器、雲端、嵌入式與開發環境。",
      "Linux 的強項之一是命令列工具與高度客製化。",
      "初學者可以先從 WSL 或虛擬機開始，不必急著安裝實體雙系統。"
    ],
    quiz: [
      {
        question: "Linux 最常見的應用場景不包含下列哪一項？",
        options: ["伺服器", "雲端平台", "嵌入式設備", "只能用來打電動的主機"],
        answer: 3
      },
      {
        question: "對新手來說，較低風險的 Linux 入門方式是什麼？",
        options: ["直接格式化主機", "先用 WSL 或虛擬機", "完全不碰終端機", "只看影片不練習"],
        answer: 1
      },
      {
        question: "Linux 的一個重要特色是什麼？",
        options: ["完全封閉", "只能圖形操作", "高度客製化", "不能用於開發"],
        answer: 2
      }
    ],
    tasks: [
      "安裝或開啟 WSL，進入 Linux 環境後執行 `pwd` 與 `uname -a`，截圖或記下輸出內容。",
      "用自己的話寫下 3 句對 Linux 的介紹，包含用途、特色與你想學它的原因。"
    ],
    exercises: [
      { question: "Linux 最常見於哪些類型的設備或環境？", answer: "常見於伺服器、雲端平台、嵌入式設備與開發環境。", explanation: "這些場景重視穩定性、可客製化與自動化能力，而 Linux 正好在這些面向表現很強。" },
      { question: "為什麼很多開發者會選擇 Linux 作為工作環境？", answer: "因為它開放、穩定，而且開發工具鏈完整。", explanation: "從程式語言、套件管理到伺服器部署，Linux 通常都有很成熟的工具可直接使用。" },
      { question: "Linux 與一般圖形化作業系統相比，有什麼操作習慣上的差異？", answer: "Linux 更常使用終端機與文字指令操作。", explanation: "這不代表沒有圖形介面，而是 Linux 的強項之一在於命令列能高效率完成管理與自動化工作。" },
      { question: "什麼是「自由開放」？它對使用者有什麼幫助？", answer: "表示原始碼可被查看、修改與再散布，使用者有更高控制權。", explanation: "這讓使用者不必完全依賴單一廠商，也更容易客製、學習與延伸系統功能。" },
      { question: "如果你是初學者，為什麼不一定要先把 Linux 安裝到實體電腦？", answer: "因為可以先用虛擬機或 WSL 降低學習風險。", explanation: "這樣就算操作失誤，也不容易影響主要工作環境，適合先建立基本信心。" },
      { question: "WSL 在學習 Linux 的過程中可以扮演什麼角色？", answer: "它能讓 Windows 使用者直接練習 Linux 指令與環境。", explanation: "WSL 提供了一個進入門檻較低的 Linux 學習方式，不必先做完整雙系統安裝。" },
      { question: "你會怎麼向朋友簡單介紹 Linux？", answer: "Linux 是一種常用於開發與伺服器的開放式作業系統。", explanation: "重點是讓對方先理解用途與特色，不必一開始就講太多技術細節。" },
      { question: "Linux 的高度客製化代表什麼意思？", answer: "代表使用者可以依需求調整系統、工具與工作流程。", explanation: "從桌面環境到系統服務，Linux 都提供大量可調整空間。" },
      { question: "對新手來說，學習 Linux 最重要的第一步是什麼？", answer: "先建立對檔案系統與基本指令的理解。", explanation: "只要先掌握目錄、檔案與常見指令，後面很多主題都會更容易吸收。" },
      { question: "請寫出你目前對 Linux 的第一印象。", answer: "可接受多元答案，例如穩定、專業、偏命令列。", explanation: "這題屬於反思題，重點是整理自己對 Linux 的初步理解與期待。" }
    ]
  },
  {
    title: "第二章・認識檔案與目錄",
    content: [
      "Linux 的操作核心之一，就是理解檔案系統。系統中的資料幾乎都以檔案形式存在，而目錄則用來組織這些檔案。和 Windows 不同，Linux 通常從根目錄 `/` 開始往下展開，而不是以 `C:`、`D:` 這樣的磁碟代號為主。",
      "初學時最常遇到的幾個目錄包括：`/home` 用來存放使用者個人資料，`/etc` 放系統設定，`/var` 常存放記錄與變動資料，`/usr` 則收納大量應用程式與共用資源。先記住用途，比硬背更重要。",
      "你可以先熟悉幾個基本指令：`pwd` 查看目前位置，`ls` 列出檔案，`cd` 切換目錄，`mkdir` 建立資料夾，`touch` 建立檔案。這些指令會是後面幾乎所有操作的基礎。"
    ],
    examples: [
      {
        title: "範例：建立練習目錄與檔案",
        code: "mkdir linux-practice\ncd linux-practice\ntouch note.txt\npwd\nls",
        output: "/home/your-name/linux-practice\nnote.txt",
        explanation: "這個範例會建立一個練習資料夾與文字檔，接著查看目前位置與檔案列表，適合剛開始熟悉目錄概念時操作。"
      }
    ],
    pitfalls: [
      {
        problem: "`cd linux-practice` 顯示沒有此目錄。",
        fix: "先確認上一行 `mkdir linux-practice` 是否成功執行，並且目前所在位置是否正確。"
      },
      {
        problem: "`ls` 沒有看到想像中的檔案。",
        fix: "先用 `pwd` 確認目前目錄，再重新檢查是否真的建立過該檔案。"
      }
    ],
    summary: [
      "Linux 從根目錄 `/` 開始展開整個檔案系統。",
      "理解 `/home`、`/etc`、`/var` 等常見目錄用途很重要。",
      "`pwd`、`ls`、`cd`、`mkdir`、`touch` 是最基礎的操作指令。"
    ],
    quiz: [
      {
        question: "Linux 檔案系統的起點是哪裡？",
        options: ["/", "/home", "C:", "/root-only"],
        answer: 0
      },
      {
        question: "哪個指令可以顯示目前目錄位置？",
        options: ["ls", "pwd", "cd", "mkdir"],
        answer: 1
      },
      {
        question: "`mkdir` 的用途是什麼？",
        options: ["建立檔案", "刪除目錄", "建立資料夾", "查看權限"],
        answer: 2
      }
    ],
    tasks: [
      "建立 `linux-practice` 資料夾，並在裡面新增 `notes`、`labs`、`logs` 三個子資料夾。",
      "切換到你建立的資料夾後，用 `touch` 建立 `readme.txt`、`todo.txt`、`day1.txt` 三個檔案。"
    ],
    exercises: [
      { question: "Linux 檔案系統通常從哪個目錄開始？", answer: "從根目錄 `/` 開始。", explanation: "Linux 的整體檔案結構是由根目錄向下展開，其他目錄都位於這個起點之下。" },
      { question: "`/home` 目錄通常用來存放什麼？", answer: "存放使用者個人資料與個人目錄。", explanation: "一般使用者的文件、設定與工作檔案，多半都會在自己的 home 目錄中。" },
      { question: "`/etc` 與 `/var` 各自常見的用途是什麼？", answer: "`/etc` 放系統設定，`/var` 放會變動的資料。", explanation: "例如服務設定常在 `/etc`，而日誌、快取等常在 `/var`。" },
      { question: "請說明 `pwd` 指令的功能。", answer: "顯示目前所在的工作目錄。", explanation: "當你不確定自己目前位於哪個資料夾時，`pwd` 是最直接的查詢方式。" },
      { question: "如果你要查看目前目錄中的檔案列表，應該輸入哪個指令？", answer: "輸入 `ls`。", explanation: "`ls` 是最基本的列表指令，也常搭配其他參數一起使用。" },
      { question: "請寫出切換到其他目錄時會使用的基本指令。", answer: "使用 `cd`。", explanation: "`cd` 是 change directory 的縮寫，用來切換目前工作位置。" },
      { question: "`mkdir` 與 `touch` 的用途有什麼不同？", answer: "`mkdir` 建資料夾，`touch` 建檔案或更新時間戳記。", explanation: "兩者都很常用，但操作對象不同，一個是目錄、一個是檔案。" },
      { question: "為什麼理解目錄用途，比死記路徑更重要？", answer: "因為理解用途能幫助你在不同系統中舉一反三。", explanation: "不同環境的實際內容可能不同，但目錄設計的核心概念通常相近。" },
      { question: "Linux 與 Windows 在磁碟結構觀念上有什麼不同？", answer: "Linux 以單一根目錄展開，Windows 常以磁碟代號區分。", explanation: "這是兩者在檔案系統理解上的一個重要差異。" },
      { question: "請設計一個你自己的練習資料夾結構。", answer: "可接受多元答案，例如 `linux-practice/projects`, `linux-practice/notes`, `linux-practice/tests`。", explanation: "這題重點在於把檔案管理概念轉成自己的實際練習方式。" }
    ]
  },
  {
    title: "第三章・常用指令入門",
    content: [
      "學 Linux 不代表要背很多指令，而是要知道每個指令解決什麼問題。像 `cp` 用來複製、`mv` 用來移動或重新命名、`rm` 用來刪除、`cat` 用來快速查看檔案內容，這些都是每天會碰到的基本工具。",
      "初學時很值得養成一個習慣：每次輸入指令前，先想清楚『我要操作哪個檔案』『會不會改到重要內容』。尤其是 `rm` 這類刪除指令，在 Linux 裡通常沒有資源回收桶的保護，做錯就可能直接消失。",
      "如果你忘記某個指令怎麼用，可以輸入 `man 指令名稱` 來看說明文件，例如 `man ls`。不用想著把所有參數一次記住，能知道去哪裡查，反而是更重要的能力。"
    ],
    examples: [
      {
        title: "範例：複製、重新命名與查看檔案",
        code: "cp note.txt backup.txt\nmv backup.txt final.txt\ncat final.txt",
        output: "如果 note.txt 有內容，cat 會顯示 final.txt 的文字內容。",
        explanation: "這裡示範了 `cp`、`mv`、`cat` 三個基本指令的常見連續用法，能幫助你理解檔案操作流程。"
      },
      {
        title: "範例：安全刪除前先確認",
        code: "ls\nrm final.txt\nls",
        output: "第一次 ls 會看到 final.txt，刪除後第二次 ls 就不會再出現它。",
        explanation: "刪除檔案前先用 `ls` 確認目標，刪除後再檢查一次，這是很值得養成的操作習慣。"
      }
    ],
    pitfalls: [
      {
        problem: "`cp` 或 `mv` 顯示 `No such file or directory`。",
        fix: "先用 `ls` 檢查檔案名稱是否正確，並確認你正在正確的目錄中。"
      },
      {
        problem: "`rm` 刪錯檔案。",
        fix: "刪除前先用 `ls` 或 `pwd` 確認位置與目標，重要檔案先備份再操作。"
      }
    ],
    summary: [
      "`cp`、`mv`、`rm`、`cat` 是日常最常用的基本指令。",
      "刪除指令風險較高，操作前一定要先確認目標。",
      "學會查 `man` 文件，比硬背全部參數更重要。"
    ],
    quiz: [
      {
        question: "哪個指令可用來複製檔案？",
        options: ["cp", "mv", "rm", "cat"],
        answer: 0
      },
      {
        question: "哪個指令既能移動也能重新命名檔案？",
        options: ["pwd", "mv", "touch", "man"],
        answer: 1
      },
      {
        question: "哪個指令使用前最需要小心確認目標？",
        options: ["ls", "cat", "rm", "pwd"],
        answer: 2
      }
    ],
    tasks: [
      "建立一個文字檔後，使用 `cp` 複製成另一份，再用 `mv` 把副本改成新的檔名。",
      "用 `cat` 查看檔案內容，最後刪除其中一個練習檔，並用 `ls` 確認結果。"
    ],
    exercises: [
      { question: "`cp` 指令主要用來做什麼？", answer: "用來複製檔案或目錄。", explanation: "當你需要保留原檔並建立副本時，`cp` 是基本工具。" },
      { question: "`mv` 除了移動檔案，還能做什麼？", answer: "也可以重新命名檔案或目錄。", explanation: "在同一個位置使用 `mv` 改名稱，是很常見的操作方式。" },
      { question: "為什麼使用 `rm` 前要特別小心？", answer: "因為刪除後通常不會經過資源回收桶，很難復原。", explanation: "尤其加上遞迴參數時，可能一次刪掉大量資料。" },
      { question: "`cat` 在初學階段最常拿來做什麼？", answer: "快速查看檔案內容。", explanation: "對於短文字檔來說，`cat` 是最直接也最方便的查看方式之一。" },
      { question: "請寫出一個你認為使用指令前應先確認的事項。", answer: "先確認操作目標是否正確。", explanation: "例如檔案名稱、所在目錄、是否為重要資料，這些都會影響操作風險。" },
      { question: "如果忘記 `ls` 的用法，你會如何查詢？", answer: "使用 `man ls`。", explanation: "`man` 文件是 Linux 內建的重要說明來源。" },
      { question: "`man` 文件對 Linux 學習有什麼幫助？", answer: "可以查詢指令用途、參數與說明。", explanation: "比起死背，學會查文件能讓你更獨立地解決問題。" },
      { question: "背誦所有參數與知道如何查詢，哪一個更重要？為什麼？", answer: "知道如何查詢更重要。", explanation: "實務上不可能記住全部細節，但知道怎麼找答案就能持續進步。" },
      { question: "請舉一個你會用 `mv` 重新命名檔案的情境。", answer: "例如把 `draft.txt` 改成 `final.txt`。", explanation: "這是 `mv` 在同資料夾中最直觀的重新命名用法。" },
      { question: "請說明良好的命令列操作習慣為什麼重要。", answer: "因為能降低誤操作風險並提高效率。", explanation: "習慣先確認位置與目標，能避免很多常見錯誤。" }
    ]
  },
  {
    title: "第四章・權限與使用者",
    content: [
      "Linux 很重視權限管理。每個檔案或目錄通常會有擁有者、群組，以及讀取、寫入、執行三種權限設定。這種設計能讓多人共用同一台系統時，仍然保持明確的安全邊界。",
      "你可以用 `ls -l` 查看檔案權限，例如最前面的 `rwxr-xr--` 就是在描述不同身分可做的事情。雖然剛開始看起來有點抽象，但只要記住 `r` 是讀、`w` 是寫、`x` 是執行，很快就能看懂基本結構。",
      "當你需要管理權限時，常用指令有 `chmod`、`chown`，而需要暫時提升權限執行管理工作時，則常看到 `sudo`。初學者要特別注意，不要習慣把所有指令都加上 `sudo`，因為那代表你正在用更高風險的方式操作系統。"
    ],
    examples: [
      {
        title: "範例：查看與修改腳本執行權限",
        code: "ls -l hello.sh\nchmod +x hello.sh\nls -l hello.sh",
        output: "修改前可能看到 `-rw-r--r--`，修改後會變成類似 `-rwxr-xr-x`。",
        explanation: "這個範例先看原本權限，再加入執行權限，最後重新確認結果，很適合用來理解 `x` 權限的作用。"
      }
    ],
    pitfalls: [
      {
        problem: "執行腳本時出現 `Permission denied`。",
        fix: "先用 `ls -l` 檢查是否有執行權限，必要時使用 `chmod +x 檔名`。"
      },
      {
        problem: "濫用 `sudo` 導致重要檔案被錯誤修改。",
        fix: "只有在確認需要管理權限時才使用 `sudo`，平時先用一般使用者權限操作。"
      }
    ],
    summary: [
      "Linux 權限核心是讀取、寫入、執行三種能力。",
      "`ls -l` 能快速查看權限、擁有者與群組資訊。",
      "`chmod`、`chown`、`sudo` 都和權限管理密切相關，但使用時要謹慎。"
    ],
    quiz: [
      {
        question: "Linux 權限中的 `x` 代表什麼？",
        options: ["刪除", "執行", "壓縮", "複製"],
        answer: 1
      },
      {
        question: "哪個指令常用來修改權限？",
        options: ["chmod", "touch", "pwd", "echo"],
        answer: 0
      },
      {
        question: "使用 `sudo` 時應該抱持什麼態度？",
        options: ["所有指令都加", "隨便試", "只在必要時使用", "完全不用理解"],
        answer: 2
      }
    ],
    tasks: [
      "建立一個 `hello.sh` 檔案，加入簡單內容後，用 `ls -l` 查看權限。",
      "替 `hello.sh` 加上執行權限，再次用 `ls -l` 比較修改前後差異。"
    ],
    exercises: [
      { question: "Linux 檔案權限常見的三種基本權限是什麼？", answer: "讀取、寫入、執行。", explanation: "英文通常寫作 `r`, `w`, `x`，是 Linux 權限系統的基本元素。" },
      { question: "`ls -l` 可以讓你看到哪些資訊？", answer: "可看到權限、擁有者、群組、大小與修改時間等資訊。", explanation: "它是觀察檔案屬性的常用方式。" },
      { question: "`rwxr-xr--` 中的 `r`、`w`、`x` 分別代表什麼？", answer: "分別代表讀取、寫入、執行。", explanation: "看到這三個符號，就能快速判斷不同角色能做哪些操作。" },
      { question: "為什麼 Linux 要區分擁有者、群組與其他人？", answer: "為了在多使用者環境中進行更細緻的權限控制。", explanation: "這樣不同身分的人就能擁有不同操作範圍。" },
      { question: "`chmod` 通常用來處理什麼事情？", answer: "用來修改檔案或目錄的權限。", explanation: "當你需要調整誰能讀、寫、執行時，通常會用到它。" },
      { question: "`chown` 與權限管理的關係是什麼？", answer: "它用來變更擁有者或群組。", explanation: "除了權限本身，檔案的歸屬對可操作範圍也很重要。" },
      { question: "`sudo` 的作用是什麼？", answer: "以較高權限執行指令。", explanation: "通常用於管理工作，但也因此需要更謹慎使用。" },
      { question: "為什麼不應該習慣把所有指令都加上 `sudo`？", answer: "因為會提高誤操作風險。", explanation: "高權限代表更大破壞力，不該在不必要時使用。" },
      { question: "請描述一個需要調整檔案權限的實際情境。", answer: "例如讓腳本檔加上執行權限。", explanation: "像 shell script 若沒有 `x` 權限，就無法直接執行。" },
      { question: "你認為權限管理和系統安全之間有什麼關係？", answer: "權限管理是系統安全的基礎之一。", explanation: "透過限制可操作範圍，可以降低誤用與未授權存取的風險。" }
    ]
  },
  {
    title: "第五章・套件管理與安裝軟體",
    content: [
      "在 Linux 中，安裝軟體通常不是去網站下載安裝精靈，而是透過套件管理工具處理。不同發行版會使用不同工具，例如 Ubuntu 常見 `apt`，Fedora 常見 `dnf`，Arch Linux 則常用 `pacman`。",
      "套件管理工具的好處是能幫你一起處理版本與相依性問題。像在 Debian 或 Ubuntu 系統中，常見流程會是先執行 `sudo apt update` 更新索引，再用 `sudo apt install 套件名` 安裝需要的工具。",
      "對入門者來說，重要的不只是會安裝，更要理解『軟體來源是否可信』『這個套件是系統工具還是開發工具』『安裝後放在哪裡』。當你開始有這些意識時，就已經不是只會照抄指令，而是真的在理解系統。"
    ],
    examples: [
      {
        title: "範例：在 Ubuntu 更新索引並安裝 Git",
        code: "sudo apt update\nsudo apt install git",
        output: "會先下載套件索引，之後顯示安裝資訊，完成後可以用 `git --version` 驗證。",
        explanation: "這是 Ubuntu 或 Debian 系統裡很常見的安裝流程。先更新索引，再安裝需要的軟體。"
      }
    ],
    pitfalls: [
      {
        problem: "`apt install` 前沒有先更新索引，導致找不到套件或版本過舊。",
        fix: "先執行 `sudo apt update`，再進行安裝。"
      },
      {
        problem: "從不可信來源安裝套件。",
        fix: "優先使用官方套件庫或可信來源，避免隨意加入不明第三方來源。"
      }
    ],
    summary: [
      "不同 Linux 發行版有不同套件管理工具，例如 `apt`、`dnf`、`pacman`。",
      "套件管理工具能協助處理版本與相依性。",
      "安裝軟體時要重視來源可信度與工具用途。"
    ],
    quiz: [
      {
        question: "Ubuntu 常見的套件管理工具是什麼？",
        options: ["apt", "pacman", "brew", "zypper-only"],
        answer: 0
      },
      {
        question: "`sudo apt update` 的用途是什麼？",
        options: ["刪除套件", "更新索引", "建立檔案", "切換目錄"],
        answer: 1
      },
      {
        question: "安裝軟體時最重要的習慣之一是什麼？",
        options: ["只看名字就裝", "忽略來源", "確認來源可信", "全部用 root 安裝"],
        answer: 2
      }
    ],
    tasks: [
      "在你的系統中查出目前使用的是哪一種套件管理工具，並記錄一個常用安裝指令。",
      "如果你是 Ubuntu 使用者，練習執行 `apt update`，並查詢 `git` 是否可安裝。"
    ],
    exercises: [
      { question: "什麼是套件管理工具？", answer: "是用來安裝、更新、移除軟體的系統工具。", explanation: "它幫助使用者統一管理套件與相依性，是 Linux 軟體管理的重要核心。" },
      { question: "Ubuntu 常見的套件管理工具是什麼？", answer: "`apt`。", explanation: "在 Debian 系統系譜中，`apt` 是最常見的套件管理指令。" },
      { question: "Fedora 與 Arch Linux 常見的套件管理工具分別是什麼？", answer: "Fedora 常用 `dnf`，Arch Linux 常用 `pacman`。", explanation: "不同發行版有不同工具，但目標都類似。" },
      { question: "為什麼 Linux 安裝軟體常透過套件管理，而不是安裝精靈？", answer: "因為這樣更容易統一管理版本與相依性。", explanation: "也更方便後續更新、移除與自動化管理。" },
      { question: "`sudo apt update` 的主要用途是什麼？", answer: "更新套件索引資訊。", explanation: "它不是直接升級軟體，而是讓系統知道目前有哪些可用版本。" },
      { question: "`sudo apt install 套件名` 代表什麼意思？", answer: "安裝指定名稱的套件。", explanation: "這是 Ubuntu 等系統中最常見的安裝命令格式之一。" },
      { question: "套件管理工具如何幫助處理相依性問題？", answer: "會自動安裝或提示所需依賴套件。", explanation: "這能大幅減少手動找套件的麻煩。" },
      { question: "安裝軟體前，為什麼要注意來源是否可信？", answer: "因為不可信來源可能帶來安全風險。", explanation: "來源可信度會直接影響系統穩定與安全。" },
      { question: "系統工具與開發工具在安裝時為什麼值得區分？", answer: "因為用途、維護方式與風險不同。", explanation: "理解工具角色，有助於後續維護與排錯。" },
      { question: "請寫出你在安裝新軟體前會先確認的三件事。", answer: "例如來源、用途、安裝後影響。", explanation: "這題強調的是良好的安裝習慣，而不是唯一正確答案。" }
    ]
  },
  {
    title: "第六章・學習 Linux 的建議路線",
    content: [
      "如果你剛開始學 Linux，最好的方法不是一次讀完所有理論，而是邊用邊學。先練習目錄切換、檔案操作、看說明文件，再慢慢接觸權限、服務管理、Shell Script，這樣比較不容易被大量名詞淹沒。",
      "可以給自己一個小任務，例如用指令建立專案資料夾、整理檔案、安裝 Git、打開編輯器，甚至寫一個簡單的備份腳本。當每個指令都對應到真實目的時，記憶會比單純背誦更牢固。",
      "Linux 的學習曲線確實存在，但回報也很高。只要你願意每天前進一點，從看得懂終端機輸出，到能獨立解決環境問題，會發現自己對電腦系統的理解正在穩定地變深。"
    ],
    examples: [
      {
        title: "範例：新手的每日 10 分鐘練習",
        code: "pwd\nls\ncd ~/linux-practice\nmkdir day1\ntouch day1/log.txt",
        output: "你會先看到目前目錄內容，接著建立 `day1` 目錄與 `log.txt` 檔案。",
        explanation: "這組練習把目錄確認、切換、建立資料夾與建立檔案串在一起，適合每天重複操作建立手感。"
      }
    ],
    pitfalls: [
      {
        problem: "一次想學太多主題，導致很快挫折。",
        fix: "把學習拆成小步驟，先熟悉最常用的指令與檔案操作。"
      },
      {
        problem: "只看文章不動手做，結果很快忘記。",
        fix: "每學一個主題就立刻做一次小練習，讓知識和實作連在一起。"
      }
    ],
    summary: [
      "Linux 更適合用持續練習的方式學，而不是一次背完。",
      "把學習拆成小任務，會更容易建立成就感。",
      "從看懂輸出到能自己排錯，是很重要的成長路徑。"
    ],
    quiz: [
      {
        question: "學 Linux 最推薦的方式是什麼？",
        options: ["一次背完所有理論", "邊用邊學", "只看別人操作", "只裝不練"],
        answer: 1
      },
      {
        question: "對新手最有幫助的學習節奏是什麼？",
        options: ["穩定的小步練習", "一天塞滿所有主題", "完全不做筆記", "只學高階工具"],
        answer: 0
      },
      {
        question: "哪一件事代表你正在成長為能獨立使用 Linux 的人？",
        options: ["記不得任何指令", "不敢打開終端機", "能看懂輸出並嘗試排錯", "完全避開錯誤訊息"],
        answer: 2
      }
    ],
    tasks: [
      "為自己排一個 7 天 Linux 入門練習計畫，每天至少一個小任務。",
      "今天實際操作 5 個基本指令，並把每個指令的用途寫成一行筆記。"
    ],
    exercises: [
      { question: "為什麼學習 Linux 不適合只靠一次讀完理論？", answer: "因為 Linux 需要透過實作建立真正理解。", explanation: "只看理論容易停留在概念層，動手操作才會形成可用能力。" },
      { question: "初學者先練哪些內容，會比較容易建立信心？", answer: "目錄切換、檔案操作與查文件。", explanation: "這些都是最常用且回饋明確的基本技能。" },
      { question: "什麼叫做「邊用邊學」？", answer: "在實際任務中一邊操作、一邊理解觀念。", explanation: "比起空背指令，把知識放進情境中會更容易記住。" },
      { question: "為什麼替自己設計小任務有助於學習 Linux？", answer: "因為任務能讓學習變得具體且有目標。", explanation: "真實任務會自然帶出指令、錯誤與解法，幫助你連結知識。" },
      { question: "請舉出一個適合新手的 Linux 小任務。", answer: "例如建立專案資料夾並整理檔案。", explanation: "這類任務能同時練到 `mkdir`, `cd`, `ls`, `mv` 等基本指令。" },
      { question: "Shell Script 在學習路線中大概屬於哪一階段？", answer: "通常在基本檔案與指令操作之後。", explanation: "先有基本命令列能力，再接觸腳本會更容易理解。" },
      { question: "看得懂終端機輸出，為什麼是一個重要里程碑？", answer: "因為那代表你開始能自己判讀系統資訊。", explanation: "這是從照抄指令走向獨立解決問題的重要一步。" },
      { question: "你認為 Linux 的學習曲線主要來自哪些地方？", answer: "來自指令操作、權限觀念與系統結構理解。", explanation: "這些主題一開始較抽象，但熟悉後就會變成優勢。" },
      { question: "如果每天只能學 20 分鐘，你會怎麼安排？", answer: "可分成短時間閱讀、操作、整理筆記。", explanation: "重點是穩定持續，不一定要一次學很久。" },
      { question: "請為自己寫下一個 Linux 入門學習計畫。", answer: "可接受多元答案，例如每週學一類指令並完成小任務。", explanation: "這題重點在把學習節奏具體化，幫助自己持續前進。" }
    ]
  }
];

const cheatSheet = [
  { command: "pwd", description: "顯示目前所在目錄", example: "pwd" },
  { command: "ls", description: "列出目錄內容", example: "ls" },
  { command: "cd", description: "切換目錄", example: "cd /home/user" },
  { command: "mkdir", description: "建立資料夾", example: "mkdir projects" },
  { command: "touch", description: "建立空檔案或更新時間", example: "touch note.txt" },
  { command: "cp", description: "複製檔案或目錄", example: "cp note.txt backup.txt" },
  { command: "mv", description: "移動或重新命名檔案", example: "mv old.txt new.txt" },
  { command: "rm", description: "刪除檔案或目錄", example: "rm note.txt" },
  { command: "cat", description: "查看檔案內容", example: "cat note.txt" },
  { command: "ls -l", description: "顯示詳細檔案資訊與權限", example: "ls -l" },
  { command: "chmod", description: "修改檔案權限", example: "chmod +x hello.sh" },
  { command: "chown", description: "修改擁有者或群組", example: "chown user:user file.txt" },
  { command: "man", description: "查看指令說明文件", example: "man ls" },
  { command: "sudo", description: "以較高權限執行指令", example: "sudo apt update" },
  { command: "apt update", description: "更新套件索引", example: "sudo apt update" },
  { command: "apt install", description: "安裝套件", example: "sudo apt install git" },
  { command: "uname -a", description: "查看系統核心與版本資訊", example: "uname -a" }
];

const chapterCheatSheetMap = [
  ["uname -a", "pwd", "ls"],
  ["pwd", "ls", "cd", "mkdir", "touch"],
  ["cp", "mv", "rm", "cat", "man"],
  ["ls -l", "chmod", "chown", "sudo"],
  ["apt update", "apt install", "sudo", "man"],
  ["pwd", "ls", "cd", "mkdir", "touch", "man"]
];

const siteTitle = "Linux 入門電子書";
const storageKey = "linux-ebook-gh-pages-state";
const chapterTitle = document.querySelector("#chapter-title");
const chapterKicker = document.querySelector("#chapter-kicker");
const chapterContent = document.querySelector("#chapter-content");
const toc = document.querySelector("#toc");
const chapterCount = document.querySelector("#chapter-count");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const progressText = document.querySelector("#progress-text");
const progressBarFill = document.querySelector("#progress-bar-fill");
const decreaseFontBtn = document.querySelector("#decrease-font");
const increaseFontBtn = document.querySelector("#increase-font");
const fontSizeLabel = document.querySelector("#font-size-label");
const toggleThemeBtn = document.querySelector("#toggle-theme");

const defaultState = {
  chapterIndex: 0,
  currentView: "chapter",
  fontSize: 18,
  theme: "light"
};

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return { ...defaultState };
    }

    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return { ...defaultState };
  }
}

const state = loadState();

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getChapterCheatSheet(index) {
  const commands = chapterCheatSheetMap[index] || [];
  return cheatSheet.filter((item) => commands.includes(item.command));
}

function getOptionLabel(index) {
  return String.fromCharCode(65 + index);
}

function renderToc() {
  toc.innerHTML = "";
  chapterCount.textContent = `${chapters.length} 章 + 1 附錄`;

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = chapter.title;
    button.classList.toggle("active", state.currentView === "chapter" && index === state.chapterIndex);
    button.addEventListener("click", () => {
      state.currentView = "chapter";
      state.chapterIndex = index;
      renderChapter();
      saveState();
    });
    toc.appendChild(button);
  });

  const appendixButton = document.createElement("button");
  appendixButton.type = "button";
  appendixButton.textContent = "附錄：Linux 指令速查表";
  appendixButton.classList.toggle("active", state.currentView === "appendix");
  appendixButton.addEventListener("click", () => {
    state.currentView = "appendix";
    renderChapter();
    saveState();
  });
  toc.appendChild(appendixButton);
}

function renderChapter() {
  if (state.currentView === "appendix") {
    chapterKicker.textContent = "附錄";
    document.title = `Linux 指令速查表｜${siteTitle}`;
    chapterTitle.textContent = "Linux 指令速查表";
    chapterContent.innerHTML = `
      <section class="cheatsheet-block appendix-only">
        <h3>附錄：Linux 指令速查表</h3>
        <div class="cheatsheet-list">
          ${cheatSheet.map((item) => `
            <article class="cheatsheet-card">
              <p class="cheatsheet-command"><code>${item.command}</code></p>
              <p>${item.description}</p>
              <p class="cheatsheet-example"><code>${item.example}</code></p>
            </article>
          `).join("")}
        </div>
      </section>
    `;

    progressText.textContent = "附錄內容";
    progressBarFill.style.width = "100%";
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    document.querySelectorAll(".toc button").forEach((button, index) => {
      const isAppendixButton = index === chapters.length;
      button.classList.toggle("active", isAppendixButton);
    });
    return;
  }

  const chapter = chapters[state.chapterIndex];
  const chapterCheatSheet = getChapterCheatSheet(state.chapterIndex);
  chapterKicker.textContent = `第 ${state.chapterIndex + 1} 章`;
  document.title = `${chapter.title}｜${siteTitle}`;
  chapterTitle.textContent = chapter.title;
  chapterContent.innerHTML = `
    ${chapter.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    ${chapter.examples ? `
      <section class="example-block">
        <h3>操作範例</h3>
        <div class="example-list">
          ${chapter.examples.map((example) => `
            <article class="example-card">
              <h4>${example.title}</h4>
              <pre><code>${example.code}</code></pre>
              <div class="example-output-wrap">
                <p class="label">預期輸出</p>
                <pre><code>${example.output}</code></pre>
              </div>
              <p>${example.explanation}</p>
            </article>
          `).join("")}
        </div>
      </section>
    ` : ""}
    ${chapter.pitfalls ? `
      <section class="pitfall-block">
        <h3>常見錯誤與排除</h3>
        <div class="pitfall-list">
          ${chapter.pitfalls.map((item) => `
            <article class="pitfall-card">
              <p class="pitfall-problem"><strong>常見錯誤：</strong>${item.problem}</p>
              <p><strong>排除方式：</strong>${item.fix}</p>
            </article>
          `).join("")}
        </div>
      </section>
    ` : ""}
    ${chapter.summary ? `
      <section class="summary-block">
        <h3>重點整理</h3>
        <ul class="summary-list">
          ${chapter.summary.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </section>
    ` : ""}
    ${chapter.tasks ? `
      <section class="task-block">
        <h3>練習任務</h3>
        <ul class="task-list">
          ${chapter.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      </section>
    ` : ""}
    <section class="exercise-block">
      <h3>章末練習</h3>
      ${chapter.quiz ? `
        <div class="exercise-group">
          <h4 class="exercise-group-title">快速檢查</h4>
          <div class="quiz-list">
          ${chapter.quiz.map((item, index) => `
            <article class="quiz-card">
              <h5>選擇題 ${index + 1}</h5>
              <p class="quiz-question">${item.question}</p>
              <ol class="quiz-options">
                ${item.options.map((option, optionIndex) => `
                    <li><span class="option-label">${getOptionLabel(optionIndex)}.</span> ${option}</li>
                  `).join("")}
                </ol>
                <p class="quiz-answer"><strong>正確答案：</strong>${getOptionLabel(item.answer)}. ${item.options[item.answer]}</p>
              </article>
            `).join("")}
          </div>
        </div>
      ` : ""}
      <div class="exercise-group">
        <h4 class="exercise-group-title">問答練習</h4>
        <div class="exercise-list">
          ${chapter.exercises.map((exercise, index) => `
            <article class="exercise-card">
              <h5>問答題 ${index + 1}</h5>
              <p class="exercise-question">${exercise.question}</p>
              <p><strong>解答：</strong>${exercise.answer}</p>
              <p class="exercise-explanation"><strong>解析：</strong>${exercise.explanation}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="cheatsheet-block">
      <h3>本章常用指令</h3>
      <div class="cheatsheet-list">
        ${chapterCheatSheet.map((item) => `
          <article class="cheatsheet-card">
            <p class="cheatsheet-command"><code>${item.command}</code></p>
            <p>${item.description}</p>
            <p class="cheatsheet-example"><code>${item.example}</code></p>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  const progress = ((state.chapterIndex + 1) / chapters.length) * 100;
  progressText.textContent = `閱讀進度 ${Math.round(progress)}%`;
  progressBarFill.style.width = `${progress}%`;

  prevBtn.disabled = state.chapterIndex === 0;
  nextBtn.disabled = state.chapterIndex === chapters.length - 1;

  document.querySelectorAll(".toc button").forEach((button, index) => {
    button.classList.toggle("active", index === state.chapterIndex);
  });
}

function applyFontSize() {
  chapterContent.style.fontSize = `${state.fontSize}px`;
  fontSizeLabel.textContent = `${state.fontSize}px`;
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  toggleThemeBtn.textContent = state.theme === "dark" ? "切換為淺色主題" : "切換為深色主題";
}

prevBtn.addEventListener("click", () => {
  if (state.currentView !== "chapter") {
    return;
  }
  if (state.chapterIndex > 0) {
    state.chapterIndex -= 1;
    renderChapter();
    saveState();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentView !== "chapter") {
    return;
  }
  if (state.chapterIndex < chapters.length - 1) {
    state.chapterIndex += 1;
    renderChapter();
    saveState();
  }
});

decreaseFontBtn.addEventListener("click", () => {
  state.fontSize = Math.max(14, state.fontSize - 2);
  applyFontSize();
  saveState();
});

increaseFontBtn.addEventListener("click", () => {
  state.fontSize = Math.min(30, state.fontSize + 2);
  applyFontSize();
  saveState();
});

toggleThemeBtn.addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme();
  saveState();
});

renderToc();
renderChapter();
applyFontSize();
applyTheme();

