<script>
function uploadImage() {
  debugger;
}
</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
  <link href="/app.css" rel="stylesheet" />
  <link href="/cssgram.css" rel="stylesheet" />
</svelte:head>
<div id="app">
  <div class="app-phone">
    <div class="phone-header">
      <a href="/">
        <img src="/logo.png" alt="Sveltegram" />
      </a>
      <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" alt="Instagram!" /> -->
    </div>
    <div class="phone-body">
      <slot />
    </div>
    <div class="phone-footer">
      <div class="home-cta">
        <i class="fas fa-home fa-lg"></i>
      </div>
      <div class="upload-cta">
        <input type="file"
            name="file"
            id="file"
            class="inputfile"
            on:change={uploadImage}
          />
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>
      </div>
    </div>
  </div>
</div>
