// メニューのデータ構造
const menuData = {
  "北海道": {
    "札幌市": {
      "中央区": null,
      "北区": null
    },
    "函館市": {
      "五稜郭": null,
      "湯の川温泉": null
    }
  },
  "東京都": {
    "新宿区": {
      "西新宿": null,
      "歌舞伎町": null
    },
    "渋谷区": {
      "恵比寿": null,
      "原宿": null
    }
  }
};

// 再帰的にメニューを作成
function createMenu(data) {
  const ul = document.createElement("ul");

  for (const key in data) {
    const li = document.createElement("li");
    li.textContent = key;

    // サブメニューがある場合
    if (data[key]) {
      const subMenu = createMenu(data[key]);
      subMenu.classList.add("hidden");
      li.appendChild(subMenu);

      // クリックで表示/非表示を切り替え
      li.addEventListener("click", (e) => {
        e.stopPropagation(); // 親要素へのイベント伝播を防ぐ
        subMenu.classList.toggle("hidden");
        li.classList.toggle("open");
      });
    }

    ul.appendChild(li);
  }

  return ul;
}

// 初期化
const menuContainer = document.getElementById("menu-container");
menuContainer.appendChild(createMenu(menuData));
