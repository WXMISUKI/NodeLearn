// 等待DOM加载完成
// document.addEventListener('DOMContentLoaded', function() {
  //获取所有的 td
  let tds = document.querySelectorAll('td');
  //遍历
  tds.forEach(item => {
    item.onclick = function () {
      this.style.background = '#222';
    }
  })
// });