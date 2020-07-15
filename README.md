# 第三周支線任務

[_心理測驗 API_](https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json)
[**Demo**](https://gn00678465.github.io/PersonalityTest/)

開發拆解重點：

- 以一個行為、方法、流程進行拆解
- 每個行為開發時間約 20min ~ 1hr，如果超過 1hr 請再細分
- 拆解的內容並非不可變，開發過程如果遇到問題，可再重新修正、補充
- 先拆解再進行開發上的排序，影響「資料結構」的先開發
- 順序定好後，請**先定義「資料結構」或與「資料結構」具相關性的先開發**

## 拆解

- 資料結構 (分類 API)
  - Title - (Object)
  - ProblemMap - (Object)
  - ProblemList - (Array)
  - Final description - (Object)
  - Count 計數器 - (Number)
  - Totcal 分數 - (Object)
  - nowIs - (String)
  - nowProps - (Object)
- Components
  - Home - (base)
  - title - props: {Title}
  - problem - props: {ProblemMap, ProblemList}
  - Final - props: {Totcal, Final description}
  - button
  - input radio
  - process steps
  - 左上角 1/4 圓 - props:{Count}
- Methods
  - button click 切換 problem component || Final component
  - 計數 ++ 取 ProblemMap 值,並 filter ProblemList 取得問題 & v-for radio
  - next step click 取得分數, 分類 計算 傳至 Totcal
- 畫面繪製 render
  - 切換測驗效果
  - process steps - [demo](https://codepen.io/hugo/pen/eoaDw)
  - input radio - [demo](https://codepen.io/opheliafl/pen/LGKMNL)
  - 切換結果 - [demo](https://codepen.io/nailaahmad/full/MyZXVE)

## 問題

### 多層 components 傳遞事件

`$emit` 通常使用於單層間父子組件事件的傳遞，當位於更內層的 component 便無法使用。

- 解法
  1. 使用修飾符`native`, `v-on:click.native`
  2. 使用 `$linstener`
