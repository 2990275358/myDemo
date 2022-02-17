<template>
  <div class="profile">
    <NavBar class="bar"><div slot="center">我的</div></NavBar>
    <ProfileLogin/>
    <ProfileInfo/>
    <ProfileMessage/>
    <ProfileTrade/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ProfileLogin from './childComps/ProfileLogin.vue'
import ProfileInfo from './childComps/ProfileInfo.vue'
import ProfileMessage from './childComps/ProfileMessage.vue'
import ProfileTrade from './childComps/ProfileTrade.vue'
  export default {
    name: "Profile",
    components: {
      NavBar,
      ProfileLogin,
      ProfileInfo,
      ProfileMessage,
      ProfileTrade
    }
  }
</script>

<style scoped>
.bar{
  background-color: var(--color-tint);
  color: white;
}
</style>
