<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import type { Navigation } from "@sveltejs/kit";

    afterNavigate(
        ({ from }: Navigation) => console.log(from)
    );
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
