<template>
    <div>
      <div v-if="!error">
        <SubsList v-if="loaded" :class="style" :listIcons="icons" :listUsers="userlist" :pageTimer="parseInt(paginationTimer)" :listAmount="parseInt(paginationAmount)"/>
        <p v-else><img height="30" width="30" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7IiB4PSIwcHgiIHk9IjBweCI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwogICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7CiAgICAgICAgICAgICAgZnJvbSB7CiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpCiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHRvIHsKICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM1OWRlZykKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHsKICAgICAgICAgICAgICBmcm9tIHsKICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpCiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHRvIHsKICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNTlkZWcpCiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIHN2ZyB7CiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlOwogICAgICAgICAgICB9CiAgICAgICAgXV0+PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJvdXRlciI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwwQzIyLjIwNTgsMCAyMy45OTM5LDEuNzg4MTMgMjMuOTkzOSwzLjk5MzlDMjMuOTkzOSw2LjE5OTY4IDIyLjIwNTgsNy45ODc4MSAyMCw3Ljk4NzgxQzE3Ljc5NDIsNy45ODc4MSAxNi4wMDYxLDYuMTk5NjggMTYuMDA2MSwzLjk5MzlDMTYuMDA2MSwxLjc4ODEzIDE3Ljc5NDIsMCAyMCwwWiIgc3R5bGU9ImZpbGw6YmxhY2s7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44NTc4Niw1Ljg1Nzg2QzcuNDE3NTgsNC4yOTgxNSA5Ljk0NjM4LDQuMjk4MTUgMTEuNTA2MSw1Ljg1Nzg2QzEzLjA2NTgsNy40MTc1OCAxMy4wNjU4LDkuOTQ2MzggMTEuNTA2MSwxMS41MDYxQzkuOTQ2MzgsMTMuMDY1OCA3LjQxNzU4LDEzLjA2NTggNS44NTc4NiwxMS41MDYxQzQuMjk4MTUsOS45NDYzOCA0LjI5ODE1LDcuNDE3NTggNS44NTc4Niw1Ljg1Nzg2WiIgc3R5bGU9ImZpbGw6cmdiKDIxMCwyMTAsMjEwKTsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwzMi4wMTIyQzIyLjIwNTgsMzIuMDEyMiAyMy45OTM5LDMzLjgwMDMgMjMuOTkzOSwzNi4wMDYxQzIzLjk5MzksMzguMjExOSAyMi4yMDU4LDQwIDIwLDQwQzE3Ljc5NDIsNDAgMTYuMDA2MSwzOC4yMTE5IDE2LjAwNjEsMzYuMDA2MUMxNi4wMDYxLDMzLjgwMDMgMTcuNzk0MiwzMi4wMTIyIDIwLDMyLjAxMjJaIiBzdHlsZT0iZmlsbDpyZ2IoMTMwLDEzMCwxMzApOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjQ5MzksMjguNDkzOUMzMC4wNTM2LDI2LjkzNDIgMzIuNTgyNCwyNi45MzQyIDM0LjE0MjEsMjguNDkzOUMzNS43MDE5LDMwLjA1MzYgMzUuNzAxOSwzMi41ODI0IDM0LjE0MjEsMzQuMTQyMUMzMi41ODI0LDM1LjcwMTkgMzAuMDUzNiwzNS43MDE5IDI4LjQ5MzksMzQuMTQyMUMyNi45MzQyLDMyLjU4MjQgMjYuOTM0MiwzMC4wNTM2IDI4LjQ5MzksMjguNDkzOVoiIHN0eWxlPSJmaWxsOnJnYigxMDEsMTAxLDEwMSk7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNMy45OTM5LDE2LjAwNjFDNi4xOTk2OCwxNi4wMDYxIDcuOTg3ODEsMTcuNzk0MiA3Ljk4NzgxLDIwQzcuOTg3ODEsMjIuMjA1OCA2LjE5OTY4LDIzLjk5MzkgMy45OTM5LDIzLjk5MzlDMS43ODgxMywyMy45OTM5IDAsMjIuMjA1OCAwLDIwQzAsMTcuNzk0MiAxLjc4ODEzLDE2LjAwNjEgMy45OTM5LDE2LjAwNjFaIiBzdHlsZT0iZmlsbDpyZ2IoMTg3LDE4NywxODcpOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTUuODU3ODYsMjguNDkzOUM3LjQxNzU4LDI2LjkzNDIgOS45NDYzOCwyNi45MzQyIDExLjUwNjEsMjguNDkzOUMxMy4wNjU4LDMwLjA1MzYgMTMuMDY1OCwzMi41ODI0IDExLjUwNjEsMzQuMTQyMUM5Ljk0NjM4LDM1LjcwMTkgNy40MTc1OCwzNS43MDE5IDUuODU3ODYsMzQuMTQyMUM0LjI5ODE1LDMyLjU4MjQgNC4yOTgxNSwzMC4wNTM2IDUuODU3ODYsMjguNDkzOVoiIHN0eWxlPSJmaWxsOnJnYigxNjQsMTY0LDE2NCk7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYuMDA2MSwxNi4wMDYxQzM4LjIxMTksMTYuMDA2MSA0MCwxNy43OTQyIDQwLDIwQzQwLDIyLjIwNTggMzguMjExOSwyMy45OTM5IDM2LjAwNjEsMjMuOTkzOUMzMy44MDAzLDIzLjk5MzkgMzIuMDEyMiwyMi4yMDU4IDMyLjAxMjIsMjBDMzIuMDEyMiwxNy43OTQyIDMzLjgwMDMsMTYuMDA2MSAzNi4wMDYxLDE2LjAwNjFaIiBzdHlsZT0iZmlsbDpyZ2IoNzQsNzQsNzQpOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjQ5MzksNS44NTc4NkMzMC4wNTM2LDQuMjk4MTUgMzIuNTgyNCw0LjI5ODE1IDM0LjE0MjEsNS44NTc4NkMzNS43MDE5LDcuNDE3NTggMzUuNzAxOSw5Ljk0NjM4IDM0LjE0MjEsMTEuNTA2MUMzMi41ODI0LDEzLjA2NTggMzAuMDUzNiwxMy4wNjU4IDI4LjQ5MzksMTEuNTA2MUMyNi45MzQyLDkuOTQ2MzggMjYuOTM0Miw3LjQxNzU4IDI4LjQ5MzksNS44NTc4NloiIHN0eWxlPSJmaWxsOnJnYig1MCw1MCw1MCk7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" /></p>
      </div>
      <div v-else class="error">{{error}}</div>
    </div>
</template>
<script>
import SubsList from '@/components/SubsList.vue'
import cryptoMixin from '@/mixins/crypto'

export default {
  components:{
    SubsList
  },
  mixins: [cryptoMixin],
  data(){
        return{
            apiUsers: 'users',
            apiSubs: 'subscriptions',
            broadID: null,
            userlist: [],
            totalSubs: 0,
            loaded:false,
            error: null,
            auth: null,
            login:null,
            icons: true,
            style: {type: String, default: 'default'},
            paginationAmount: 100,
            requestAmount:100,
            refreshRate:60, //time in seconds
            paginationTimer:0 //time in seconds
        }
    },
    created()
    {
      //Get the query string parameters on created
      const key = localStorage.twSubsVerification
      if(key){
        const uri = window.location.search.substring(1)
        const params = new URLSearchParams(this.decrypt(uri, key))
        if(params.get("auth")){
          this.auth = params.get("auth")
          this.login = params.get("login")
          if(params.get("style")){ this.style = params.get("style") }
          if(params.get("icons")){ this.icons = JSON.parse(params.get("icons"))}
          if(params.get("pagination")){ this.paginationAmount = parseInt(params.get("pagination")) }
          if(params.get("pagtimer")){ this.paginationTimer = parseInt(params.get("pagtimer")) }
        }else{
          this.localDataCheck()
        }
      }else{
        this.localDataCheck()
      }
    },
    mounted(){
      //Required params check
      if(this.auth&&this.login){
        this.getUserId()
      }else{
        if(!this.error){
          this.error='Auth, login or config missing'
        }
      }
      //Refresh cycle to update the subs list
      this.refreshCycle = setInterval(function () {
        if(!this.error){
          this.refreshData()
        }
      }.bind(this), (this.refreshRate*1000))
    },
    beforeDestroy: function(){
      clearInterval(this.refreshCycle)
    },
    methods:{
      localDataCheck(){
        this.auth = localStorage.twSubsAuth
        if(this.auth){
          this.paginationAmount = parseInt(localStorage.twSubsPagAmount)
          this.style = localStorage.twSubsStyle
          this.icons = localStorage.twSubsIcons === 'true'
          this.login = localStorage.twSubsLogin
          this.paginationTimer = parseInt(localStorage.twSubsTime)
        }else{
          const key = localStorage.twSubsVerification
          if(!key){
            this.error='Verification, auth, login or config missing'
          }
        }
      },
      async getUserId(){
        //Get broadcasterID
        let headers = {
          "Authorization": `Bearer ${this.auth}`,
          "Client-ID": process.env.VUE_APP_CID
        }
        try {
          const response = await this.axios
          .get(`${process.env.VUE_APP_API_SERVER}${this.apiUsers}`,{params:{"login":this.login}, headers:headers})
          const resp_data = response.data
          this.broadID = resp_data.data[0].id     
          //Request Subs List to twitch
          this.getSubsList()
        } catch (error) {
          this.error=error
        }
      },
      async getSubsList(){
        let hasNextPage = true
        let nextCursor = null
        //Loop to get all the subs
        while (hasNextPage) {
          let resp = await this.requestSubs(nextCursor)
          if (resp && resp.pagination.cursor) {
              if (resp.data) {
                  this.userlist = [...this.userlist, ...resp.data]
                  this.totalSubs = resp.data.total
              }
              if (resp.pagination.cursor) {
                  nextCursor = resp.pagination.cursor
                  this.pages++
              } else {
                  //Fail-safe
                  hasNextPage = false
                  this.orderSubsList()
              }
          }else{
            //Finish the loop and order the list
            hasNextPage = false
            this.orderSubsList()
          }
        }
      },
      orderSubsList(){
        //First we gotta remove the owner of the channel from the list
        let loginIndex = this.userlist.map(e => e.user_login).indexOf(this.login)
        this.userlist.splice(loginIndex, 1)
        //Order by sub or gifted
        this.userlist.sort(function(a, b) {
          return a.is_gift - b.is_gift
        })
        this.loaded=true
      },
      async requestSubs(nextCursor){
        let headers = {
          "Authorization": `Bearer ${this.auth}`,
          "Client-ID": process.env.VUE_APP_CID
        }
        let params = {
          "broadcaster_id": this.broadID,
          "first": this.requestAmount
        }
        if (nextCursor){
          params.after = nextCursor
        }
        try {
          const resp = await this.axios.get(`${process.env.VUE_APP_API_SERVER}${this.apiSubs}`,{params:params, headers:headers})
          return await resp.data
        } catch (error) {
          this.error=error
        }
      },
      refreshData(){
          if(this.broadID){
            this.loaded=false
            this.userlist=[]
            this.getSubsList()
          }
      }
    }
  }
</script>

<style scoped>
  .error{color:red;padding:10px}
</style>
