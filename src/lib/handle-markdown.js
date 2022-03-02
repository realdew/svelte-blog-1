import fs from 'fs';
import glob from "glob";
import fm from "front-matter";

// import {remark} from "remark";
// import remarkHtml from "remark-html";
// import rehypePrism from "@mapbox/rehype-prism";
// import {rehype} from "rehype";

import {unified} from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

export function importMarkdowns(markdownPath) {
    console.log("importMarkdowns markdownPath [", markdownPath, "]")
    let fileNames = glob.sync(`${markdownPath}*.md`);
    console.log("fileNames ==> ", fileNames)
    return fileNames.map((path) => convertMarkdown(path));
}


export function convertMarkdown(path) {
    let file = fs.readFileSync(path, 'utf8');
    let { attributes, body } = fm(file);

    console.log("converMarkdown 1==> ", attributes);
    console.log("converMarkdown 2==> ", body);

    // let result = remark().use(remarkHtml).processSync(body).contents;
    // console.log("RESULT 1st: ", result)
    // result = rehype().use(rehypePrism).processSync(result).contents;
    // console.log("RESULT 2nd: ", result)

    let result = unified().use(markdown).use(remark2rehype).use(html).processSync(body).value;


    console.log("handle-markdown.js convertMarkdown ==> ", result);

    return { path, attributes, html: result};
}


export function convertToPostPreview(object) {
    const url = object.path.replace(".md", "").replace("src/", "");

    return {...object.attributes, url};
}