<template>
  <h1 class="title">ToDo</h1>
  <div class="contents">
    <slot />
  </div>
</template>

<style>
  body {
    font-family: "Meiryo","Hiragino Kaku Gothic ProN","MS PGothic",sans-serif;
    margin: 0;
    color: #333;
  }
  
  h1 {
    margin-top: 0;
    background-color: #3b83cb;
    color: #fff;
    padding: 0.7rem 1rem;
  }
  .contents {
    padding: 1rem;
  }
  .title {
    padding-left: 70px; /* タイトルを右寄せにする */
  }
  button {
    padding: 0.4rem 1rem;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
  }
  form {
    display: grid;
    grid-template-columns: auto 25%;
    gap: 10px;
  }
  input {
    padding: 0.7rem;
    border: 1px solid #dddddd;
    border-radius: 7px;
    font-size: inherit;
    color: inherit;
  }
  form > button {
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    color: #fff;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 2rem;
    padding: 0;
  }
  ul li {
    display: grid;
    grid-template-columns: auto 25%;
    align-items: center;
    gap: 10px;
  }
  /* ul li button {
    background-color: #dc3545;
    border: 1px solid #dc3545;
    color: #fff;
  } */
  .contents > button {
    display: block;
    width: 100%;
    margin-top: 2rem;
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
    color: #0bb365;
  }
  .content-wrapper {
    width: 40%;
    margin: 0 auto; /* Centering the content horizontally */
    text-align: right; /* Clear All Tasks ボタンを右寄せにする */
  }
  .deleteButton {
    background-color: #dc3545;
    color: #fff;
  }
  .editButton {
    margin-left: 10px;
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    color: #000;
  }
  .clear-button {
    margin-top: 50px;
  }
  .tasktable{
    margin-top: 80px;
  }
  .no-tasks-message {
    text-align: center; /* テキストを中央に配置 */
    font-size: 30px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  button {
    cursor: pointer;
  }
  ul li td button,
  td button {
    background-color: #dc3545;
    border: 1px solid #dc3545;
    color: #fff;
  }

  .edit-modal {
    width: 400px; /* 幅を変更 */
    height: 200px; /* 高さを変更 */
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  /* モーダルのスタイル */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.5);  /* 青色の背景 */
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    
    /* モーダルの幅と高さを設定 */
    width: 500px;
    height: 300px;
  }

</style>