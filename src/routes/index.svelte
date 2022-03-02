<script context="module">
    export async function load({fetch}) {
        const posts = await fetch("/index1.json").then((r) => {
            console.log("=============> ", r);
            return r.json();
        });

        console.log("load ==> ", posts);

        return {
            props: {posts}
        }
    }
</script>


<script>
    import PostCard from "/src/components/post-card.svelte";
    export let posts;

    // let posts = [
    //     {title: "Post 1", description: "Short Description 1", url: "/post1"},
    //     {title: "Post 2", description: "Short Description 2", url: "/post2"},
    // ];

    // console.log(posts);

    // console.log("\n\n======================");
</script>


<style>
    main {
        padding: 4vw;
    }

    :global(article) {
        border-bottom: 1px solid lightgray;
    }
</style>


<svelte:head>
    <title>My Blog</title>
    <meta name="description" content="this is my personal blog created with SvelteKit">
</svelte:head>

<main>
    <h1>Posts</h1>
    <p>Here we will place all the different blog posts</p>


    {#each posts as post}
        <PostCard {...post} />
    {/each}
</main>

