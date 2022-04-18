<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-title">Config your broadcasting APP</h1>
        </div>
        <div class="card-body">
            <div class="row" v-if="isAuthenticated">
                <h2>Option 1 - <em>Remote List</em></h2>
                <p class="text-danger"><strong>Security notice: Never share/expose the urls to anyone</strong></p>
                <h3>Verification</h3>
                <ol>
                    <li>1. Click the button to generate and copy a new verification URL</li>
                    <li><a @click.prevent="copyToClipboard(securityCode())" class="btn btn-warning">Generate and copy verification URL</a></li>
                    <li>2. Open the url on a visible browser source inside your Streaming APP</li>
                    <li class="mt-2 mb-2"><img src="../assets/img/obsverification.png" class="rounded mx-auto d-block img-fluid"/></li>
                    <li><em class="text-danger">Note: On auth token renewal, you must do the verification steps again</em></li>
                </ol>
                <h3 class="text-danger d-block" v-if="!verification">To continue, follow the verification steps first</h3>
                <div :class="{ blur: !verification }">
                    <h3 class="">Usage</h3>
                    <ol>
                        <li>1. Click this button to generate a new subs list URL</li>
                        <li><button @click.prevent="copyToClipboard(easyURL)" class="btn btn-success" :disabled="!verification">Generate and copy URL</button></li>
                        <li>2. Use the copied URL on a browser source URL inside your streaming APP:</li>
                        <li class="mt-2 mb-2"><img src="../assets/img/obs.png" class="rounded mx-auto d-block img-fluid"/></li>
                        <li><em class="text-danger">Note: If you wanna change the styles, do the changes and generate a new URL</em></li>
                    </ol>
                </div>
                <p v-if="isDebug"><a @click.prevent="clearSecurityCode" class="btn btn-danger">Clear verification Code (debug)</a></p>
                <hr/>
                <h2>Option 2 - <em>Local list</em></h2>
                <ol>
                    <li>1. Open the url {{serverURL}} on a browser source inside your Streaming APP</li>
                    <li>2. Navigate to the Authorize page by enabling interact on the browser source</li>
                    <li>3. Copy the Authorize code of this website on the manual input and press submit or do the authorization inside the window</li>
                    <li>4. Navigate to config and change the styles</li>
                    <li>5. Use the list URL on a browser source URL inside your streaming APP:</li>
                    <li><router-link to="/list" target="_blank">{{listURL('List')}}</router-link></li>
                    <li><a @click.prevent="copyToClipboard(listURL('List'))" class="btn btn-success">Copy List URL</a></li>
                    <li class="mt-2 mb-2"><img src="../assets/img/obs.png" class="rounded mx-auto d-block img-fluid"/></li>
                </ol>
            </div>
            <div class="row" v-else>
                <p>Please, do the authentication step first</p>
            </div>
        </div>
    </div>
</template>
<script>
import cryptoMixin from '@/mixins/crypto'
export default {
    name: 'ShareView',
    mixins: [cryptoMixin],
    data(){
        return{
            verification: localStorage.twSubsVerification || '',
            error:''
        }
    },
    computed:{
        isAuthenticated(){
            return localStorage.twSubsAuth
        },
        serverURL(){
            return process.env.VUE_APP_SERVER_URL
        },
        easyURL(){
            const urlPag = parseInt(localStorage.twSubsPagAmount)
            const urlSty = localStorage.twSubsStyle
            const urlIco = JSON.parse(localStorage.twSubsIcons)
            const urlLog = localStorage.twSubsLogin
            const urlAut = localStorage.twSubsAuth    
            const urlTimer = localStorage.twSubsTime
            const shareURL = `auth=${urlAut}&login=${urlLog}&icon=${urlIco}&style=${urlSty}&pagination=${urlPag}&pagtimer=${urlTimer}`
            return `${this.listURL('List')}?${this.encrypt(shareURL,this.verification)}`
        },
        isDebug(){
            return process.env.NODE_ENV ==='development'
        }
    },
    methods:{
        listURL(path){
            const listPath = this.$router.resolve({ name: path}).href
            const finalURL = `${process.env.VUE_APP_SERVER_ROOT}${listPath.substring(1)}`
            return finalURL
        },
        securityCode(){
            const urlAut = localStorage.twSubsAuth  
            const key = `${urlAut}/${new Date().getFullYear()}`
            this.verification = this.encrypt(urlAut,key)
            localStorage.twSubsVerification = this.verification 
            this.$notify({type:'warn',text: 'Code generated!'})
            return `${this.listURL('Verification')}?code=${this.verification}`
        },
        clearSecurityCode(){
            localStorage.removeItem("twSubsVerification")
            this.verification = ''
        }
    }
}
</script>
<style scoped>
    ol li{list-style-type: none}
    img{max-width:300px}
    .blur{filter: blur(4px);}
</style>