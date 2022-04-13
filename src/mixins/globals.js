export default {
    methods:{
    copyToClipboard(url){
        navigator.clipboard.writeText(url)
        this.$notify({type:'success',text: 'Copied to clipboard!'})
    }
  }
}