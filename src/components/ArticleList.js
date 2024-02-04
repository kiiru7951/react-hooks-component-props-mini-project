import React from "react";
import Article from "./Article"

function ArticleList({posts}){
/*    title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,*/

      console.log(posts);
      const articleElement = posts.map((post) => {
        return <div key={post.id}>
            <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
        </div>
      })
      return (
        <main className="ArticleList">
            {articleElement}
        </main>
    )
};

export default ArticleList;