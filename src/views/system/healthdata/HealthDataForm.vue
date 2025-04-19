<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="老人编号" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入老人编号" />
      </el-form-item>
      <el-form-item label="身高" prop="height">
        <el-input v-model="formData.height" placeholder="请输入身高" />
      </el-form-item>
      <el-form-item label="体重" prop="weight">
        <el-input v-model="formData.weight" placeholder="请输入体重" />
      </el-form-item>
      <el-form-item label="体温" prop="temperature">
        <el-input v-model="formData.temperature" placeholder="请输入体温" />
      </el-form-item>
      <el-form-item label="心率" prop="heartRate">
        <el-input v-model="formData.heartRate" placeholder="请输入心率" />
      </el-form-item>
      <el-form-item label="收缩血压" prop="systolicBloodPressure">
        <el-input v-model="formData.systolicBloodPressure" placeholder="请输入收缩血压" />
      </el-form-item>
      <el-form-item label="舒张血压" prop="diastolicBloodPressure">
        <el-input v-model="formData.diastolicBloodPressure" placeholder="请输入舒张血压" />
      </el-form-item>
      <el-form-item label="空腹血糖" prop="fastingBloodGlucose">
        <el-input v-model="formData.fastingBloodGlucose" placeholder="请输入空腹血糖" />
      </el-form-item>
      <el-form-item label="餐后血糖" prop="postprandialBloodGlucose">
        <el-input v-model="formData.postprandialBloodGlucose" placeholder="请输入餐后血糖" />
      </el-form-item>
      <el-form-item label="血氧饱和度" prop="bloodOxygenSaturation">
        <el-input v-model="formData.bloodOxygenSaturation" placeholder="请输入血氧饱和度" />
      </el-form-item>
      <el-form-item label="总胆固醇" prop="cholesterol">
        <el-input v-model="formData.cholesterol" placeholder="请输入总胆固醇" />
      </el-form-item>
      <el-form-item label="尿酸" prop="uricAcid">
        <el-input v-model="formData.uricAcid" placeholder="请输入尿酸" />
      </el-form-item>
      <el-form-item label="左眼" prop="leftEye">
        <el-input v-model="formData.leftEye" placeholder="请输入左眼" />
      </el-form-item>
      <el-form-item label="右眼" prop="rightEye">
        <el-input v-model="formData.rightEye" placeholder="请输入右眼" />
      </el-form-item>
      <el-form-item label="左耳" prop="leftEar">
        <el-input v-model="formData.leftEar" placeholder="请输入左耳" />
      </el-form-item>
      <el-form-item label="右耳" prop="rightEar">
        <el-input v-model="formData.rightEar" placeholder="请输入右耳" />
      </el-form-item>
      <el-form-item label="肌肉率" prop="musclePercentage">
        <el-input v-model="formData.musclePercentage" placeholder="请输入肌肉率" />
      </el-form-item>
      <el-form-item label="体脂率" prop="bodyFatPercentage">
        <el-input v-model="formData.bodyFatPercentage" placeholder="请输入体脂率" />
      </el-form-item>
      <el-form-item label="腰围" prop="waistCircumference">
        <el-input v-model="formData.waistCircumference" placeholder="请输入腰围" />
      </el-form-item>
      <el-form-item label="臀围" prop="hipCircumference">
        <el-input v-model="formData.hipCircumference" placeholder="请输入臀围" />
      </el-form-item>
      <el-form-item label="水分率" prop="moistureContent">
        <Editor v-model="formData.moistureContent" height="150px" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { HealthDataApi, HealthDataVO } from '@/api/system/healthdata'

/** 老人健康数据 表单 */
defineOptions({ name: 'HealthDataForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  userId: undefined,
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
  moistureContent: undefined
})
const formRules = reactive({
  userId: [{ required: true, message: '老人编号不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await HealthDataApi.getHealthData(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as HealthDataVO
    if (formType.value === 'create') {
      await HealthDataApi.createHealthData(data)
      message.success(t('common.createSuccess'))
    } else {
      await HealthDataApi.updateHealthData(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    userId: undefined,
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
    moistureContent: undefined
  }
  formRef.value?.resetFields()
}
</script>