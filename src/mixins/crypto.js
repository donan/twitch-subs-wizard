export default {
    methods:{
        encrypt(data,keyCode){
            const b64 = this.$CryptoJS.AES.encrypt(data,keyCode).toString();
            const e64 = this.$CryptoJS.enc.Base64.parse(b64);
            const eHex = e64.toString(this.$CryptoJS.enc.Hex);
            return eHex
        },
        decrypt(data,keyCode){
            const reb64 = this.$CryptoJS.enc.Hex.parse(data);
            const bytes = reb64.toString(this.$CryptoJS.enc.Base64);
            const decrypt = this.$CryptoJS.AES.decrypt(bytes,keyCode);
            const plain = decrypt.toString(this.$CryptoJS.enc.Utf8);
            return plain
        }
    }
  }