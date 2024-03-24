<template>
  <NuxtLayout>
    <div class="content-wrapper">
      <form @submit.prevent="addTask">
        <input v-model="newTask" name="newTask" autocomplete="off" />
        <button>追加</button>
      </form>
      <div class="table-container">
        <table class="tasktable" v-if="tasks.length > 0">
          <thead>
            <tr>
              <th style="width: 70%;">タスク</th>
              <th style="width: 30%;">アクション</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in tasks" :key="task">
              <td>
                <span v-if="!isEditing || editIndex !== index">{{ task }}</span>
              </td>
              
              <td>
                <button class="deleteButton" @click="deleteTask(index)">削除</button>
                <button class="editButton" @click="openEditModal(index)">編集</button>
              </td>
            </tr>
          </tbody>
          
        </table>

        <div v-else class="no-tasks-message">
          <p>TODOデータはありません</p>
        </div>
      </div>
      <form v-if="editIndex === index" @submit.prevent="saveEditedTask(index)" class="edit-modal">
          <input v-model="editedTask" type="text" />
          <button type="submit">保存</button>
        </form>
      <button
        class="clear-button"
        @click="clearTask"
        v-if="tasks.length > 0">
        クリア
      </button>
      <!-- ボタン -->
    <button @click="openModal">モーダルを開く</button>

    <!-- モーダル -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h2>モーダルのタイトル</h2>
        <p>モーダルの内容をここに記述します。モーダルの内容をここに記述します。モーダルの内容をここに記述します。</p>
        <button @click="closeModal">閉じる</button>
      </div>
    </div>
      
    </div>
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

<script setup>
  import { ref } from 'vue'
  
  const tasks = useCookie(
    'tasks',
    {
      default: () => []
    }
  )
  const editedTask = ref('')
  const editIndex = ref(-1)
  const showAddFormFlag = ref(false)
  const newTask = ref('')
  const isEditing = ref(false)

  // モーダルの開閉状態を管理する変数
  const isModalOpen = ref(false)

  // モーダルを開く関数
  function openModal() {
    isModalOpen.value = true
  }

  // モーダルを閉じる関数
  function closeModal() {
    isModalOpen.value = false
  }

  function addTask() {
    if(newTask.value.length >= 1) {
      tasks.value.push(newTask.value)
    }
    newTask.value = ''
  }

  function editTask(index) {
    editIndex.value = index
    editedTask.value = tasks.value[index]
  }
  function openEditModal(index) {
    isEditing.value = true
    editIndex.value = index
    editedTask.value = index === -1 ? '' : tasks.value[index]
  }
  
  function deleteTask(index) {
    tasks.value.splice(index, 1)
  }
 
  function clearTask() {
    tasks.value = []
  }
  function saveEditedTask(index) {
  tasks.value[index] = editedTask.value
  editedTask.value = ''
  editIndex.value = -1
}

  function showAddForm() {
    showAddFormFlag.value = true
  }

  const counter = useCookie('counter')
  counter.value = counter.value || Math.round(Math.random() * 1000)

</script>
