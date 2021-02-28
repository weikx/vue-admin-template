<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item
          size="mini"
          class="fucking-search_line"
        >
          <el-button
            class="filter-item"
            type="primary"
            @click="dialogVisible = true"
          >
            添加产品
          </el-button>
        </el-form-item>
        <el-form-item
          label="产品名称:"
          size="mini"
          class="fucking-search_input"
        >
          <el-input
            clearable
          />
        </el-form-item>
        <el-form-item
          size="mini"
          class="fucking-search_button"
        >
          <el-button
            class="filter-item"
            type="primary"
          >
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :header-cell-style="{background:'#F3F5F7'}"
      v-loading="listLoading"
      :data="tableData"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        prop="address"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="标注价格">
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否打折">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
    <pagination v-show="tableTotal > 0" :total="tableTotal" :page.sync="listQuery.page" :limit.sync="listQuery.count" @pagination="getLogList" />
    <el-dialog
      title="提示"
      center
      :visible.sync="dialogVisible"
      width="700px"
      :before-close="handleClose">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="项目名称：">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="项目名称：">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="项目名称：">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="项目名称：">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="特殊资源：">
            <el-radio-group v-model="formInline.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-divider></el-divider>
          <el-form-item label="卡类型：">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="会员价格：">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      tableTotal:10,
      dialogVisible: true,
      listLoading: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      formInline: {
        user: '',
        region: ''
      },
      listQuery: {
        filterItemA: '',
        title: this.$route.query.title || '',
        count: 20,
        page: 1
      },
    }
  },

  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style>

</style>