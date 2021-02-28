<template>
  <div class="dashboard-container">
    <div class="left">
      <div class="numbers-wrap">
        <div class="number checked">全部<br>员工</div>
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
      <div class="names-wrap">
        <div class="name checked">杨师傅</div>
        <div class="name" v-for="item in 20" :key="item">{{item}}师傅</div>
      </div>
    </div>
    <div class="right">
      <div class="projects-wrap">
        <el-tabs v-model="activeName">
          <el-tab-pane class="tab-pane" label="项目" name="project">
            <el-row :gutter="20">
              <el-col style="width:20%" v-for="item in 100" :key="item">
                <div class="priject">
                  <div class="project-name">普通项目{{item}}</div>
                  <div class="project-price">48.00</div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="产品" name="product">
            <el-row :gutter="20">
              <el-col style="width:20%" v-for="item in 100" :key="item">
                <div class="priject">
                  <div class="project-name">普通产品{{item}}</div>
                  <div class="project-price">18.00</div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="details-wrap">
        <el-table
          :data="tableData"
          :header-cell-style="{background:'#F3F5F7'}"
          height="calc(100% - 100px)"
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
            width="150"
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
        <div class="details-control">
          <el-row style="height: 50px;line-height: 50px">
            <el-col class="" :span="8">
              合计100元
            </el-col>
            <el-col :span="8">
              合计100元
            </el-col>
            <el-col :span="8">
              合计100元
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-button style="width: 100%" type="primary">散客买单</el-button>
            </el-col>
            <el-col :span="7">
              <el-button style="width: 100%" type="primary">会员买单</el-button>
            </el-col>
            <el-col :span="5">
              <el-button style="width: 100%" type="primary">挂单(暂存)</el-button>
            </el-col>
            <el-col :span="5">
              <el-button style="width: 100%" type="primary">取单</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
      activeName: 'project',
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
      },
      {
        project: '普通项目',
        uplockType: '轮钟',
        server: '美羊羊',
        price: 19,
        count: 1
      }]
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
    display: flex;
    justify-content: space-between;
    background: #F3F5F7;
    .checked {
      background: #3296FA !important;
      color: #fff !important;
      border: 0 !important;
    }
    .left {
      // 50 = navBar
      height: calc(100vh - 50px);
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
      width: 202px;
      background: #fff;
      overflow: hidden;
    }
    .right {
      width: calc(100vw - 202px);
      height: calc(100vh - 50px);
      display: flex;
      flex: 1;
      padding: 15px 15px 0 15px;
      box-sizing: border-box;
    }
    .projects-wrap {
      width: 600px;
    }
    .details-wrap {
      flex: 1;
    }
    .numbers-wrap {
      height: 100%;
      text-align: center;
      overflow-y: scroll;
      margin-left: 10px;
      &::-webkit-scrollbar {display:none}
      .number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border: 2px solid #E7E7E7;
        border-radius: 4px;
        margin-bottom: 10px;
        font-size: 20px;
        color: #333;
        font-weight: bold;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          background: #F3F5F7;
        }
      }
    }
    .names-wrap {
      height: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {display:none}
      margin-right: 10px;
      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 108px;
        height: 64px;
        border: 2px solid #E7E7E7;
        border-radius: 4px;
        margin-bottom: 5px;
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
      height: 100%;
      background: #fff;
      border: 2px solid #E7E7E7;
      padding: 15px;
      &::-webkit-scrollbar {display:none};
      .priject {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 68px;
        border: 2px solid #E7E7E7;
        border-radius: 4px;
        margin-top: 10px;
        font-size: 14px;
        color: #666;
        text-align: center;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          background: #F3F5F7;
        }
      }
    }
    .details-wrap {
      height: 100%;
      padding: 15px;
      background: #fff;
      border: 2px solid #E7E7E7;
      border-left: 0px;
      .details-control {
        height: 100px;
      }
    }
  }
}
.projects-wrap ::v-deep .el-tabs__nav-wrap::after {
  display: none;
}
.projects-wrap ::v-deep .el-tabs__item {
  width: 70px;
  text-align: center;
  padding: 0;
}
.projects-wrap ::v-deep .el-tabs__active-bar {
  width: 70px;
}
.projects-wrap ::v-deep .el-tabs {
  height: 100%;
}
.projects-wrap ::v-deep .el-tabs__content {
  height: calc(100% - 40px);
  overflow-y: scroll;
  &::-webkit-scrollbar {display:none};
}
</style>
