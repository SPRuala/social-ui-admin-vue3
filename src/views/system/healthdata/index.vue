<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="身高" prop="height">
        <el-input
          v-model="queryParams.height"
          placeholder="请输入身高"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="体重" prop="weight">
        <el-input
          v-model="queryParams.weight"
          placeholder="请输入体重"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="体温" prop="temperature">
        <el-input
          v-model="queryParams.temperature"
          placeholder="请输入体温"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="心率" prop="heartRate">
        <el-input
          v-model="queryParams.heartRate"
          placeholder="请输入心率"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <!--<el-form-item label="收缩血压" prop="systolicBloodPressure">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.systolicBloodPressure"-->
      <!--    placeholder="请输入收缩血压"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="舒张血压" prop="diastolicBloodPressure">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.diastolicBloodPressure"-->
      <!--    placeholder="请输入舒张血压"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="空腹血糖" prop="fastingBloodGlucose">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.fastingBloodGlucose"-->
      <!--    placeholder="请输入空腹血糖"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="餐后血糖" prop="postprandialBloodGlucose">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.postprandialBloodGlucose"-->
      <!--    placeholder="请输入餐后血糖"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="血氧饱和度" prop="bloodOxygenSaturation">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.bloodOxygenSaturation"-->
      <!--    placeholder="请输入血氧饱和度"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="总胆固醇" prop="cholesterol">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.cholesterol"-->
      <!--    placeholder="请输入总胆固醇"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="尿酸" prop="uricAcid">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.uricAcid"-->
      <!--    placeholder="请输入尿酸"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="左眼" prop="leftEye">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.leftEye"-->
      <!--    placeholder="请输入左眼"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="右眼" prop="rightEye">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.rightEye"-->
      <!--    placeholder="请输入右眼"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="左耳" prop="leftEar">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.leftEar"-->
      <!--    placeholder="请输入左耳"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="右耳" prop="rightEar">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.rightEar"-->
      <!--    placeholder="请输入右耳"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="肌肉率" prop="musclePercentage">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.musclePercentage"-->
      <!--    placeholder="请输入肌肉率"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="体脂率" prop="bodyFatPercentage">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.bodyFatPercentage"-->
      <!--    placeholder="请输入体脂率"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="腰围" prop="waistCircumference">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.waistCircumference"-->
      <!--    placeholder="请输入腰围"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="臀围" prop="hipCircumference">-->
      <!--  <el-input-->
      <!--    v-model="queryParams.hipCircumference"-->
      <!--    placeholder="请输入臀围"-->
      <!--    clearable-->
      <!--    @keyup.enter="handleQuery"-->
      <!--    class="!w-240px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <!--<el-form-item label="创建时间" prop="createTime">-->
      <!--  <el-date-picker-->
      <!--    v-model="queryParams.createTime"-->
      <!--    value-format="YYYY-MM-DD HH:mm:ss"-->
      <!--    type="daterange"-->
      <!--    start-placeholder="开始日期"-->
      <!--    end-placeholder="结束日期"-->
      <!--    :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"-->
      <!--    class="!w-220px"-->
      <!--  />-->
      <!--</el-form-item>-->
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['system:health-data:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['system:health-data:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="身高" align="center" prop="height" />
      <el-table-column label="体重" align="center" prop="weight" />
      <el-table-column label="体温" align="center" prop="temperature" />
      <el-table-column label="心率" align="center" prop="heartRate" />
      <el-table-column label="收缩血压" align="center" prop="systolicBloodPressure" />
      <el-table-column label="舒张血压" align="center" prop="diastolicBloodPressure" />
      <el-table-column label="空腹血糖" align="center" prop="fastingBloodGlucose" />
      <el-table-column label="餐后血糖" align="center" prop="postprandialBloodGlucose" />
      <el-table-column label="血氧饱和度" align="center" prop="bloodOxygenSaturation" />
      <el-table-column label="总胆固醇" align="center" prop="cholesterol" />
      <el-table-column label="尿酸" align="center" prop="uricAcid" />
      <el-table-column label="左眼" align="center" prop="leftEye" />
      <el-table-column label="右眼" align="center" prop="rightEye" />
      <el-table-column label="左耳" align="center" prop="leftEar" />
      <el-table-column label="右耳" align="center" prop="rightEar" />
      <el-table-column label="肌肉率" align="center" prop="musclePercentage" />
      <el-table-column label="体脂率" align="center" prop="bodyFatPercentage" />
      <el-table-column label="腰围" align="center" prop="waistCircumference" />
      <el-table-column label="臀围" align="center" prop="hipCircumference" />
      <el-table-column label="水分率" align="center" prop="moistureContent" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="操作" align="center" min-width="120px">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['system:health-data:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['system:health-data:delete']"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <HealthDataForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { HealthDataApi, HealthDataVO } from '@/api/system/healthdata'
import HealthDataForm from './HealthDataForm.vue'

/** 老人健康数据 列表 */
defineOptions({ name: 'HealthData' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<HealthDataVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  height: undefined,
  weight: undefined,
  temperature: undefined,
  heartRate: undefined,
  systolicBloodPressure: undefined,
  diastolicBloodPressure: undefined,
  fastingBloodGlucose: undefined,
  postprandialBloodGlucose: undefined,
  bloodOxygenSaturation: undefined,
  cholesterol: undefined,
  uricAcid: undefined,
  leftEye: undefined,
  rightEye: undefined,
  leftEar: undefined,
  rightEar: undefined,
  musclePercentage: undefined,
  bodyFatPercentage: undefined,
  waistCircumference: undefined,
  hipCircumference: undefined,
  moistureContent: undefined,
  createTime: []
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await HealthDataApi.getHealthDataPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  console.log(type, id)
  formRef.value.open(type, id)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await HealthDataApi.deleteHealthData(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await HealthDataApi.exportHealthData(queryParams)
    download.excel(data, '老人健康数据.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
