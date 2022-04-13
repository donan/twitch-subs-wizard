<template>
    <div class="card mb-4">
        <div class="card-header">
            <h1 class="card-title">Subs style settings</h1>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <label>Show icons:</label><br/>
                    <input id="icons" name="icons" type="checkbox" v-model="icons" class="form-check-input" checked @change="saveConfig">
                </div>
                <div class="col">
                    <label>Style:</label>
                    <select name="style" id="style" v-model="style" class="form-select form-control" @change="saveConfig">
                        <option value="default">default</option>
                        <option value="white">white</option>
                        <option value="twitch" selected="selected">twitch</option>
                        <option value="purple" selected="selected">purple</option>
                        <option value="rainbow" selected="selected">rainbow</option>
                        <option value="mirror" selected="selected">mirror</option>
                        <option value="bloody" selected="selected">bloody</option>
                        <option value="retro" selected="selected">retro</option>
                    </select>
                </div>
                <div class="col">
                    <label>Pagination Amount (W.I.P.):</label>
                    <select name="pagination" id="pagination" class="form-select form-control" v-model="paginationAmount" @change="saveConfig">
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100" selected="selected">100</option>
                    </select>
                </div>
            </div>
            <h2 class="mt-4">Preview</h2>
            <div class="p2 previewBox mb-4">
                <SubsList :class="style" :listIcons="icons" :listUsers="userlist" :listPages="0" :listAmount="parseInt(paginationAmount)"/>
            </div>
            <p v-if="isDebug"><a @click.prevent="clearConfig" class="btn btn-danger">Clear Config (debug button)</a></p>
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
            icons: { type: Boolean },
            style: { type:String, default: 'default' },
            paginationAmount: { type:Number, default: 100 },
            userlist:dummyList
        }
    },
    created(){
        this.icons = JSON.parse(localStorage.twSubsIcons)
        this.style = localStorage.twSubsStyle
        this.paginationAmount = localStorage.twSubsPagAmount
    },
    computed:{
        isDebug(){
            return process.env.NODE_ENV ==='development'
        }
    },
    methods:{
        saveConfig(){
            localStorage.twSubsIcons=this.icons
            localStorage.twSubsStyle=this.style
            localStorage.twSubsPagAmount=this.paginationAmount
                this.$notify({
                    type:'success',
                    text: 'Config saved!'
                });
        },
        clearConfig(){
            localStorage.removeItem("twSubsIcons")
            localStorage.removeItem("twSubsStyle")
            localStorage.removeItem("twSubsPagAmount")
        }
    }
}
</script>

<style scoped>
    .previewBox{border:1px dotted #000;border-radius:6px;padding:15px;background:#c3d1f2}
    .row{align-items:flex-end}
    @media (max-width: 480px) {
        .col{min-width:90%}
    }
</style>
