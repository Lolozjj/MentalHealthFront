<!-- 用户资料卡  -->
<template>
  <div class="postcard-box">
    <el-dialog title="修改信息" :visible.sync="showModifPanel">
      <el-row>
        <el-col :span="2" :offset="2">
          <span class="modif-span">昵称:</span>
        </el-col>
        <el-col :span="8">
          <el-input size="mini" class="modif-input" v-model="modifName" placeholder="请输入昵称"></el-input>
        </el-col>
        <el-col :span="2" :offset="2">
          <span class="modif-span">性别:</span>
        </el-col>
        <el-col :span="8">
          <el-radio v-model="modifSex" :label="women">女</el-radio>
          <el-radio v-model="modifSex" :label="man">男</el-radio>
        </el-col>
      </el-row>
      <el-row style="margin-top:5%">
        <el-col :span="2" :offset="2">
          <span class="modif-span">个性签名:</span>
        </el-col>
        <el-col :span="8">
          <el-input size="mini" class="modif-input" v-model="modifMotto" placeholder="请输入昵称"></el-input>
        </el-col>
        <el-col :span="12">
          <el-button
            size="mini"
            type="primary"
            class="modif-sure-btn"
            @click="modificationInfo"
          >确认修改</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <el-dialog title="修改密码" :visible.sync="showModifPWPanel">
      <el-input show-password class="input-pw" size="mini" v-model="newPW" placeholder="请输入新密码"></el-input>
      <el-input show-password class="input-pw" size="mini" v-model="newPW2" placeholder="重复新密码"></el-input>
      <el-button class="btn-pw" size="mini" @click="modifPW">确定</el-button>
    </el-dialog>
    <el-row>
      <el-col :span="12">
        <div>
          <el-avatar
            @mouseenter.native="leave()"
            @mouseleave.native="enter()"
            v-if="showHead"
            :size="80"
            class="avatar"
            :src="userInfo.headImgUrl"
          ></el-avatar>
          <el-upload
            v-else
            @mouseenter.native="leave()"
            @mouseleave.native="enter()"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            class="avatar-uploader"
            name="file"
            action="http://localhost:8756/user/headImg"
          >
            <i class="el-icon-circle-plus-outline avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="info">
          <i class="el-icon-user-solid"></i>
          昵 称 : {{ userInfo.name }}
        </div>
        <div class="margin">
          <i class="el-icon-male"></i>
          性 别 : {{ userInfo.sex==1?'男':'女' }}
        </div>
        <div class="margin">
          <i class="el-icon-edit"></i>
          签 名 : {{ userInfo.motto }}
        </div>
      </el-col>
    </el-row>
    <el-row class="nums">
      <el-col :span="2" :offset="3" class="divider">
        <div class="num">{{ nums.articleSum }}</div>
        <div class="num">文章</div>
      </el-col>
      <el-col :span="2" class="divider">
        <div class="num">{{ nums.questionSum }}</div>
        <div class="num">提问</div>
      </el-col>
      <el-col :span="2" class="divider">
        <div class="num">{{ nums.answerSun }}</div>
        <div class="num">回答</div>
      </el-col>
    </el-row>
    <el-row class="attention">
      <el-col :span="14" :offset="2">0 关注</el-col>
      <el-col :span="6" :offset="2">
        <span class="showModif" @click="showPanel">修改信息</span>
        <span class="showModif" @click="showPWPanel">修改密码</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  userInfoService,
  sumInfoService,
  modifUserInfoService,
  modifPasswordService,
} from "@/utils/frontServer";
export default {
  name: "postcard",
  data() {
    return {
      headers: {},
      imageUrl: "",
      women: 0,
      man: 1,
      userInfo: {
        name: "zjj",
        motto: "you must true",
        sex: 1,
        headImgUrl:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      },
      nums: {
        articleSum: 5,
        questionSum: 10,
        answerSum: 12,
      },
      showModifPanel: false,
      showModifPWPanel: false,
      modifName: "",
      modifSex: 0,
      modifMotto: "",
      newPW: "",
      newPW2: "",
      showHead: true, //true显示头像，false显示上传图标
    };
  },
  methods: {
    handleAvatarSuccess(res, file, files) {
      this.getUserInfo();
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    enter() {
      this.showHead = true;
    },
    modifPW() {
      if(this.newPW!==this.newPW2){
        this.$message.error("两次密码不一致");
        return;
      }
      modifPasswordService
        .setSucceed((msg) => {
          this.$message({
            showClose: true,
            message: "修改成功",
            type: "success",
          });
          this.showModifPWPanel=false;
        })
        .setParam({
          password:this.newPW
        })
        .sendPostService();
    },
    leave() {
      this.showHead = false;
    },
    getSumInfo() {
      sumInfoService
        .setSucceed((msg) => {
          this.nums = msg.data;
        })
        .sendGetService();
    },
    getUserInfo() {
      userInfoService
        .setSucceed((msg) => {
          this.userInfo = msg.data;
        })
        .sendGetService();
    },
    showPanel() {
      this.showModifPanel = true;
      this.modifName = this.userInfo.name;
      this.modifSex = parseInt(this.userInfo.sex);
      this.modifMotto = this.userInfo.motto;
    },
    showPWPanel() {
      this.showModifPWPanel = true;
    },
    modificationInfo() {
      modifUserInfoService
        .setSucceed((msg) => {
          this.$message({
            showClose: true,
            message: "修改成功",
            type: "success",
          });
        })
        .setParam({
          name: this.modifName,
          sex: this.modifSex,
          motto: this.modifMotto,
        })
        .sendPostService();
    },
  },
  created() {
    this.getSumInfo();
    this.getUserInfo();
    this.headers = {
      token: localStorage.getItem("token"),
    };
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 80px;
  color: #8c939d;
  width: 120px;
  height: 126px;
  line-height: 126px;
  text-align: center;
  position: absolute;
  left: 18%;
}
.avatar {
  width: 120px;
  height: 126px;
  display: block;
}
.modif-sure-btn {
  margin-left: 40%;
}
.modif-span {
  line-height: 2em;
}
.postcard-box {
  background-color: white;
  height: 280px;
  padding: 0 0 6% 0;
}
.avatar {
  margin: 10% 0 0 40%;
  cursor: pointer;
}
.showModif {
  cursor: pointer;
  color: grey;
  font-size: 12px;
}
.showModif:hover {
  color: black;
}
.info {
  margin-top: 10%;
}
.margin {
  margin-top: 2%;
}
.nums {
  margin-top: 4%;
}
.num {
  text-align: center;
}
.divider {
  border-right: 1px solid gainsboro;
}
.attention {
  margin-top: 8%;
  margin-left: 2%;
}
.input-pw {
  width: 80%;
  margin-top: 1%;
}
.btn-pw {
  margin-left: 85%;
  margin-top: 5%;
  display: block;
}
</style>