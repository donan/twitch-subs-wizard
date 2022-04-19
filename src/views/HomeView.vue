<template>
  <div>
      <div class="card mb-4">
          <div class="card-header">
              <h1 class="card-title">Follow this wizard to show your subs list</h1>
          </div>
          <div class="card-body">
            <div class="row">
              <p>The purpose of this project is to let streamers show their subs list on their streamings without any technical knowledge. This website will only store your authorization code on your browser and use it to connect to the twitch API and my twitch APP only serves as a key to let you read your subs data.</p>
              <ol>
                <li><strong>1. Authorize the app to get access to Twitch API</strong><br/><em>(No data is stored on this website)</em></li>
                <li><strong>2. Config the style</strong><br/></li>
                <li><strong>3. Config your broadcasting APP</strong><br/><em>(You can use a special URL or use this website inside your APP)</em></li>
                <li><strong>4. Display your subs list</strong><br/></li>
              </ol>
            </div>
          </div>
      </div>
    <div class="card">
          <div class="card-header">
              <h2 class="card-title">Recent Changes</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <ul>
                <li>
                  <h3>1.6</h3>
                  <p>Pagination slideshow and bug fixes.</p>
                </li>
                <li>
                  <h3>1.5</h3>
                  <p>New security method for url generation.<br/><strong>You must generate a verification URL, open it on the APP and then get a new list url</strong></p>
                </li>
                <li>
                  <h3>1.4</h3>
                  <p>List automatic refresh, new styles and css improvements.</p>
                </li>
                <li>
                  <h3>1.3</h3>
                  <p>Code improvements and mobile tweaks.</p>
                </li>
                <li>
                  <h3>1.2</h3>
                  <p>New layout.</p>
                </li>
                <li>
                  <h3>1.1</h3>
                  <p>New generated URL method.</p>
                </li>
                <li>
                  <h3>1.0</h3>
                  <p>First release.</p>
                </li>
              </ul>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
<style scoped>
  ul{margin-bottom:0}
  ol li, ul li{list-style-type: none}
</style>
