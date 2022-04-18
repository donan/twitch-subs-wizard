<template>
    <div class="card mb-4">
        <div class="card-header">
            <h1 class="card-title">Subs style settings</h1>
        </div>
        <div class="card-body">
            <div class="row" v-if="isAuthenticated">
                <div class="col">
                    <label>Show icons:</label><br/>
                    <input id="icons" name="icons" type="checkbox" v-model="icons" class="form-check-input" checked @change="saveConfig">
                </div>
                <div class="col">
                    <label>Style:</label>
                    <select name="style" id="style" v-model="style" class="form-select form-control" @change="saveConfig">
                        <option v-for="style in styles" :value="style" :key="style">{{style}}</option>
                    </select>
                </div>
                <div class="col">
                    <label>Pagination:</label>
                    <select name="pagination" id="pagination" class="form-select form-control" v-model="paginationAmount" @change="saveConfig">
                        <option v-for="pagAmount in pagination" :value="pagAmount" :key="pagAmount">{{pagAmount}}</option>
                    </select>
                </div>
                <div class="col">
                    <label>Timer</label>
                    <select name="paginationTime" id="paginationTime" class="form-select form-control" v-model="paginationTime" @change="saveConfig">
                        <option v-for="timer in timers" :value="timer" :key="timer">{{timer}}</option>
                    </select>
                </div>
            <h2 class="mt-4">Preview</h2>
            <div class="p2 previewBox mx-auto mb-4">
                <SubsList :class="style" :listIcons="icons" :listUsers="userlist" :pageTimer="parseInt(paginationTime)" :listAmount="parseInt(paginationAmount)"/>
            </div>
            <p v-if="isDebug"><a @click.prevent="clearConfig" class="btn btn-danger">Clear Config (debug button)</a></p>
            </div>
            <div class="row" v-else>
                <p>Please, do the authentication step first</p>
            </div>
        </div>
    </div>
</template>
<script>
import SubsList from '@/components/SubsList.vue'
import dummyList from '@/json/listexample.json'

export default {
    components:{
        SubsList
    },
    data(){
        return{
            icons: { type: Boolean, default: true},
            style: { type:String, default: 'default' },
            paginationAmount: { default: 5 },
            userlist:dummyList,
            paginationTime: { default: 0 },
            styles:['default','white','twitch','purple','rainbow','mirror','bloody','retro'],
            pagination:[5,10,25,50,100,200,500],
            timers:[0,5,10,15,20]
        }
    },
    created(){
        if(localStorage.twSubsStyle){
            this.icons = JSON.parse(localStorage.twSubsIcons)
            this.style = localStorage.twSubsStyle
            this.paginationAmount = localStorage.twSubsPagAmount
            this.paginationTime = localStorage.twSubsTime
        }
    },
    computed:{
        isAuthenticated(){
            return localStorage.twSubsAuth
        },
        isDebug(){
            return process.env.NODE_ENV ==='development'
        }
    },
    methods:{
        saveConfig(){
            localStorage.twSubsIcons=this.icons
            localStorage.twSubsStyle=this.style
            localStorage.twSubsPagAmount=this.paginationAmount
            localStorage.twSubsTime=this.paginationTime
            this.$notify({
                type:'success',
                text: 'Config saved!'
            });
        },
        clearConfig(){
            localStorage.removeItem("twSubsIcons")
            localStorage.removeItem("twSubsStyle")
            localStorage.removeItem("twSubsPagAmount")
            localStorage.removeItem("twSubsTime")
        }
    }
}
</script>

<style scoped>
    .previewBox{border:1px dotted #000;border-radius:6px;padding:15px;background:#c3d1f2; max-width:97%}
    .row{align-items:flex-end}
    @media (max-width: 480px) {
        .col{min-width:90%}
    }
</style>
