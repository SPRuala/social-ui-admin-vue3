<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="医院名称" prop="hospital">
        <el-input v-model="formData.hospital" placeholder="请输入医院名称" />
      </el-form-item>
      <el-form-item label="医疗类型" prop="treatmenttype">
        <el-select v-model="formData.treatmenttype" placeholder="请选择医疗类型">
          <el-option
            v-for="dict in getStrDictOptions(DICT_TYPE.HOSPITAL_TYPE)"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="预约时间" prop="appointmenttime">
        <el-date-picker
          v-model="formData.appointmenttime"
          type="date"
          value-format="x"
          placeholder="选择预约时间"
        />
      </el-form-item>
      <el-form-item label="预约备注" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入预约备注" />
      </el-form-item>
      <el-form-item label="预约者名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入预约者名称" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { getStrDictOptions, DICT_TYPE } from '@/utils/dict'
import { SubscribeApi, SubscribeVO } from '@/api/system/subscribe'

/** 医疗预约 表单 */
defineOptions({ name: 'SubscribeForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  hospital: undefined,
  treatmenttype: undefined,
  appointmenttime: undefined,
  remark: undefined,
  name: undefined
})
const formRules = reactive({
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
      formData.value = await SubscribeApi.getSubscribe(id)
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
    const data = formData.value as unknown as SubscribeVO
    if (formType.value === 'create') {
      await SubscribeApi.createSubscribe(data)
      message.success(t('common.createSuccess'))
    } else {
      await SubscribeApi.updateSubscribe(data)
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
    hospital: undefined,
    treatmenttype: undefined,
    appointmenttime: undefined,
    remark: undefined,
    userId: undefined,
    name: undefined
  }
  formRef.value?.resetFields()
}
</script>
