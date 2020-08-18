//シフトの順番通りに配列を用意
var shiftList = ["296", "296-", "283", "283-", "特", "特/公", "280", "275", "290", "290-", "特", "公", "276", "271", "289", "289-", "特", "予/公/特", "292", "292-", "281", "281-", "特", "公", "277", "273", "284", "284-", "公/特", "295", "295-", "288", "288-", "特", "公", "293", "293-", "286", "286-", "特", "予/公/特", "285", "285-", "291", "291-", "特", "公", "278", "274", "282", "282-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "279", "272", "294", "294-", "特", "公", "296", "296-", "283", "283-", "特", "特/公", "280", "275", "290", "290-", "特", "公", "276", "271", "289", "289-", "特", "予/公/特", "292", "292-", "281", "281-", "特", "公", "277", "273", "284", "284-", "公/特", "295", "295-", "288", "288-", "特", "公", "293", "293-", "286", "286-", "特", "予/公/特", "285", "285-", "291", "291-", "特", "公", "278", "274", "282", "282-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "279", "272", "294", "294-", "特", "公", "296", "296-", "283", "283-", "特", "特/公", "280", "275", "290", "290-", "特", "公", "276", "271", "289", "289-", "特", "予/公/特", "292", "292-", "281", "281-", "特", "公", "277", "273", "284", "284-", "公/特", "295", "295-", "288", "288-", "特", "公", "293", "293-", "286", "286-", "特", "予/公/特", "285", "285-", "291", "291-", "特", "公", "278", "274", "282", "282-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "279", "272", "294", "294-", "特", "公", "296", "296-", "283", "283-", "特", "特/公", "280", "275", "290", "290-", "特", "公", "276", "271", "289", "289-", "特", "予/公/特", "292", "292-", "281", "281-", "特", "公", "277", "273", "284", "284-", "公/特", "295", "295-", "288", "288-", "特", "公", "293", "293-", "286", "286-", "特", "予/公/特", "285", "285-", "291", "291-", "特", "公", "278", "274", "282", "282-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "279", "272", "294", "294-", "特", "公", "296", "296-", "283", "283-", "特", "特/公", "280", "275", "290", "290-", "特", "公", "276", "271", "289", "289-", "特", "予/公/特", "292", "292-", "281", "281-", "特", "公", "277", "273", "284", "284-", "公/特", "295", "295-", "288", "288-", "特", "公", "293", "293-", "286", "286-", "特", "予/公/特", "285", "285-", "291", "291-", "特", "公", "278", "274", "282", "282-", "特", "公", "297", "297-", "287", "287-", "特", "予/公/特", "279", "272", "294", "294-", "特", "公",]

//調べるボタンが押された時に計算
function calc() {
    // 最近やったシフトに対応する番号を取得してk1に
    var a = document.getElementById("recently").value;
    var k1 = shiftList.indexOf(a);

    //調べたい日(day2)と日付(day1)の差を計算してdayに
    var day1 = document.getElementById("day1").value;
    var day1 = new Date(day1);
    var day2 = document.getElementById("day2").value;
    var day2 = new Date(day2);
    var day = (day2 - day1) / 86400000;

    //対応する番号と日付の差を足してk3へ
    var k3 = k1 + day;

    //k3に対応するシフトを取得してresultに表示
    var k4 = shiftList[k3];
    document.getElementById("result").textContent = k4;
}