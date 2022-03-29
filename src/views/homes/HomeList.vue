<template>
  <div class="HomeList">
    <el-table :data="arrs">
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="llq" label="浏览器"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "HomeList",
  data(){
      return {
        tableData: [{
          title: '舌尖上的美食',
          name: '王小虎',
          llp: '234',
        }, {
          title: '舌尖上的美食',
          name: '王小虎',
          llp: '234',
        }, {
         title: '舌尖上的美食',
          name: '王小虎',
          llp: '234',
        }, {
          title: '舌尖上的美食',
          name: '王小虎',
          llp: '234',
        }]
      }
  }
};
</script>