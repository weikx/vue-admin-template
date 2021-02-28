<template>
  <div class="dashboard-container">
    <el-row>
      <el-col style="width: 6%">
        <div class="numbers-wrap">
          <div class="number checked">全部员工</div>
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
      </el-col>
      <el-col style="width: 10%">
        <div class="names-wrap">
          <div class="name checked">杨师傅</div>
          <div class="name" v-for="item in 20" :key="item">{{item}}师傅</div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="projects-wrap">
          <el-row :gutter="20">
            <el-col style="width:20%" v-for="item in 100" :key="item">
              <div class="priject">
                <div class="project-name">普通项目{{item}}</div>
                <div class="project-price">48.00</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="details-wrap">
          <el-table
            :data="tableData"
            height="100%"
            border
            style="width: 100%">
            <el-table-column
              align="center"
              prop="project"
              label="产品/项目">
            </el-table-column>
            <el-table-column
              align="center"
              prop="uplockType"
              label="上钟方式">
            </el-table-column>
            <el-table-column
              align="center"
              prop="server"
              label="服务员工">
            </el-table-column>
            <el-table-column
              align="center"
              prop="price"
              label="金额">
            </el-table-column>
            <el-table-column
              align="center"
              prop="count"
              label="数量">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.count" :min="1" :max="10" label="描述文字"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="删除">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
      tableData: [{
        project: '普通项目',
        uplockType: '轮钟',
        server: '美羊羊',
        price: 19,
        count: 1
      },
      {
        project: '普通项目',
        uplockType: '轮钟',
        server: '美羊羊',
        price: 19,
        count: 1
      },
      {
        project: '普通项目',
        uplockType: '轮钟',
        server: '美羊羊',
        price: 19,
        count: 1
      },
      {
        project: '普通项目',
        uplockType: '轮钟',
        server: '美羊羊',
        price: 19,
        count: 1
      },
      {
        project: '普通项目',
        uplockType: '轮钟',
        server: '美羊羊',
        price: 19,
        count: 1
      },]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    .checked {
      background: #3296FA !important;
      color: #fff !important;
      border: 0 !important;
    }
    .numbers-wrap {
      // 50 = navBar
      height: calc(100vh - 50px);
      text-align: center;
      padding: 10px;
      overflow-y: scroll;
      &::-webkit-scrollbar {display:none}
      .number {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #E7E7E7;
        height: 64px;
        border-radius: 4px;
        margin-top: 10px;
        font-size: 20px;
        color: #333;
        font-weight: bold;
        box-sizing: border-box;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          background: #F3F5F7;
        }
      }
    }
    .names-wrap {
      height: calc(100vh - 50px);
      overflow-y: scroll;
      &::-webkit-scrollbar {display:none}
      text-align: center;
      padding: 10px;
      .name {
        border: 2px solid #E7E7E7;
        padding: 20px 0;
        border-radius: 4px;
        margin-top: 5px;
        color: #999;
        font-size: 18px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          background: #F3F5F7;
        }
      }
    }
    .projects-wrap {
      position: relative;
      border-top: 25px solid #F3F5F7;
      border-left: 25px solid #F3F5F7;
      padding: 20px 20px 0 20px;
      height: calc(100vh - 50px);
      overflow-y: scroll;
      background: #fff;
      &::-webkit-scrollbar {display:none};
      &::after {
        position: absolute;
        z-index: -1;
        top: -2px;
        left: -2px;
        display: block;
        content: "";
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background: red;
      }
      .priject {
        border: 2px solid #E7E7E7;
        border-radius: 4px;
        margin-top: 10px;
        padding: 10px 0;
        font-size: 14px;
        color: #666;
        text-align: center;
        line-height: 20px;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          background: #F3F5F7;
        }
      }
    }
    .details-wrap {
      height: calc(100vh - 50px);
      border-top: 25px solid #F3F5F7;
      border-left: 2px solid #F3F5F7;
      border-right: 25px solid #F3F5F7;
      padding: 20px 0 0 20px;
    }
  }
}
</style>
