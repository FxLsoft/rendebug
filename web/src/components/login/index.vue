<template>
    <div id="login">
      <Form ref="formInline" :model="formData" :rules="rule">
        <FormItem prop="userName">
            <Input type="text" v-model="formData.userName" placeholder="User Name">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="projectName" v-if="showRegister">
            <Input type="text" v-model="formData.projectName" placeholder="Project Name">
                <Icon type="ios-folder" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formData.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button v-show="!showRegister" class="submit" type="primary" @click="handleSubmit('formInline')">Login</Button>
            <Button class="register" @click="register('formInline')">Register</Button>
        </FormItem>
      </Form>
    </div>
</template>

<script>
import { sendAjax, setCookies } from '@utils'
export default {
  data () {
    return {
      formData: {
        userName: '',
        projectName: '',
        password: ''
      },
      rule: {
        userName: [{required: true, message: 'Please fill in the User Name', trigger: 'blur'}],
        projectName: [{required: true, message: 'Please fill in the Project Name', trigger: 'blur'}],
        password: [{required: true, message: 'Please fill in the Password', trigger: 'blur'}]
      },
      showRegister: false
    }
  },
  methods: {
    // 登录
    handleSubmit (name) {
      this.$refs[name].validate( valid => {
        if (valid) {
          let url = `/userLogin?loginName=${this.formData.userName}&password=${this.formData.password}`
          sendAjax({ 
            url
          }).then(res => {
            if (res.success) {
              this.$Message.success('Login success')
              // 设置cookie
              setCookies({
                appKey: res.data.app_key,
                loginName: res.data.login_name,
                projectName: res.data.name
              })
              location.href = '/#/home';
            } else {
              this.$Message.error('登录费给了吗？')
            }
          })
        } 
      })
    },
    register (name) {
      if (!this.showRegister) this.showRegister = true
      else {
        // 发送注册请求
        this.$refs[name].validate( valid => {
          if (valid) {
            let url = `/userRegister?loginName=${this.formData.userName}&password=${this.formData.password}&name=${this.formData.projectName}`
            sendAjax({
              url
            }).then(res => {
              if (res.success) {
                this.$Message.success('Register success')
                this.showRegister = false
              } else {
                this.$Message.error('注册费给了吗？')
              }
            })
          }
        })
      }
    }
  },
}
</script>

<style lang="less">
  #login {
    display: flex;
    justify-content: center;
    form {
      width: 400px;
      padding: 40px 20px;
      border-radius: 4px;
      border: 1px solid #E1E2E6;
      box-shadow: 0 4px 10px 0 rgba(0, 10, 30, 0.1);
      .ivu-form-item-content{
        display: flex;
        justify-content: center;
      }
      .submit {
        margin-right: 20px;
      }
    }
  }
</style>
