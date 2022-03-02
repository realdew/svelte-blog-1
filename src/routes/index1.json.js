import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown";

let postFiles = importMarkdowns("src/posts/");

export function get() {
    console.log("index.json.js 호출됨. postFiles: ", postFiles)
    let posts = postFiles.map((file) => convertToPostPreview(file));

    let body = posts;
    //let body = JSON.stringify(posts);

    console.log("index.json.js body 리턴 ==> ", body)
    return {body}
}