<script lang="ts">
import Header from "./lib/Header.svelte";
import Footer from "./lib/Footer.svelte";
import BreedsPage from "./lib/BreedsPage.svelte";

</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <div class="container grow mx-auto px-5 py-7">
    <BreedsPage />
  </div>

  <Footer />
</div>
