<script context="module">

    export async function load({fetch, url, params}) {
        console.log("====================== page ==> ", url, " & ", params);
        const post = await fetch(`/posts/${params.url}.json`).then((r) => r.json());

        return {
            props: {post}
        }
    }
</script>

<script>
    export let post;
</script>

<style>
    :global(article) {
        padding: 4vw;
    }
</style>

<article>
    <h1 class="section-header">{post.attributes.title}</h1>
    {@html post.html}
</article>