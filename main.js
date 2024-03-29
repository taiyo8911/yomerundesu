"use strict"


const SHIFT_LIST = [
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
    "278", "272", "292", "292-", "特", "公", "293", "293-", "280", "280-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "285", "285-", "公", "295", "295-", "282", "282-", "特", "公", "279", "274", "284", "284-", "特", "予/公/特", "291", "291-", "290", "290-", "特", "公", "281", "275", "288", "288-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "294", "294-", "286", "286-", "特", "公",
];

// 入力値が正しいか判定する関数
const isInvalidDate = (date) => Number.isNaN(date.getTime());




// 調べるボタンが押された時に計算
function search() {
    // 入力フォームの値を取得する
    const targetDay = new Date(document.getElementById("target-day").value);
    const myWork = document.getElementById("work").value;
    const pastDay = new Date(document.getElementById("work-day").value);

    // 日付の差を計算する
    const dateGap = (targetDay - pastDay) / 86400000;

    // 交番表を検索して当該勤務のインデックスを調べる
    const workIndex = SHIFT_LIST.indexOf(myWork);

    // 調べたい日のインデックスを計算する
    const targetIndex = workIndex + dateGap;


    // 出力用に整形
    let year = targetDay.getFullYear();
    let month = targetDay.getMonth() + 1;
    let day = targetDay.getDate()
    let dayOfWeek = targetDay.getDay();
    let dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];


    // 入力値が正しい場合に表示する
    if (isInvalidDate(new Date(targetDay)) || isInvalidDate(new Date(pastDay)) || myWork === "選択▼") {
        alert("すべての項目を入力して下さい。");
    } else {
        document.getElementById('target_day').textContent = `${year}年 ${month}月${day}日(${dayOfWeekStr})の勤務`;
        document.getElementById('target_work').textContent = `${SHIFT_LIST[targetIndex]}`
    }
}