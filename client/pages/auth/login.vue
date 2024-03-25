<template>
  <NuxtLayout>
    <p>logintest</p>
    
  </NuxtLayout>
</template>

<style scoped>
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

  