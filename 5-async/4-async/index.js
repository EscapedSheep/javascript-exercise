async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const response = await fetch(url);
    const result = await response.json();
    document.writeln(result.name);
  } catch (e) {
    console.log(e);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
