<template>
  <div class="container">
    <!-- 数据筛选模块 -->
    <div class="chooseContainer">
      <div class="text1">
        数据筛选
      </div>
      <div class="inputSearch">
        <span>输入查询: </span><input type="text" placeholder="姓名/账号/手机/部门">
        <span>用户角色：</span> <el-select v-model="select" placeholder="全部">
        </el-select>
        <div class="btn">
          <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
          <el-button type="primary" icon="el-icon-edit" size="small">重置</el-button>
        </div>
      </div>
    </div>
    <!-- 数据列表模块 -->
    <div class="dataList">
      <div class="heades">
        <div class="list1">数据列表</div>
        <el-button type="primary" icon="el-icon-search" size="small">添加</el-button>
      </div>
      <el-table border stripe>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="account" label="登录账号"> </el-table-column>
        <el-table-column prop="username" label="用户姓名"></el-table-column>
        <el-table-column prop="r_roles" label="当前角色"></el-table-column>
        <el-table-column prop="depatrment" label="所属部门"></el-table-column>
        <el-table-column prop="phone" label="手机"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="text" size="small" icon="el-icon-edit">编辑</el-button>
            <el-button type="text" size="small" icon="el-icon-edit">冻结</el-button>
            <el-button type="text" size="small" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    // 用户数据
      formData: {
        account: '',
        username: '',
        r_roles: '',
        department: '',
        phone: ''
      }
    }
  },
  created() {
    this.getlist()
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.proles {
  margin: 15px 0;
}
.container {
  background-color: #f0f2f5;
  height: 100%;
}
.chooseContainer {
  width: 1200px;
  background-color: #fff;
  margin: 20px auto;
  border: 1px solid #e9e9e9;

}
.text1 {
  color: #666;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 0;
  padding-left: 25px;
  border-bottom: 1px solid #e9e9e9;
}
.inputSearch {
  padding: 30px 0;
}
.inputSearch>span {
  color: #666;
  margin: 0 30px;
  font-size: 14px;
}
input::placeholder {
  color: #ccc;
}
.inputSearch>input {
  border: 1px solid #e9e9e9;
  outline: none;
  padding: 10px;
  color: #ccc;
}
.btn {
  display: inline-block;
  margin-left: 80px;
}
.dataList {
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
}

</style>
