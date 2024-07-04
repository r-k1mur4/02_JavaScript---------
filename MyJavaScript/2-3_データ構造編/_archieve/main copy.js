'use strict';

const rate = 1.1;

// 価格150以上160以下のときまでまわるfor文
for (let price = 150; price <= 160; price++) {
  // 今、いくらのときの売上高を表示しているか０;テンプレートリテラルを使用
  console.log(`Price: ${price}`);
  // 量が120から140以下まで10ずつ増えて回るfor文
  for (let amount = 120; amount <= 140; amount+=10) {
    console.log(price * amount * rate);
  }
}
