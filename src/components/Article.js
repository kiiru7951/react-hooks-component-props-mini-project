import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){
    const renderCoffee = function(){
        const coffeeCupsCount = Math.ceil(minutes / 5);
        return '☕️'.repeat(coffeeCupsCount);
    }
    const renderMeal = function() {
        const mealCount = Math.ceil(minutes / 10);
        return '🍱'.repeat(mealCount);
      };
    
    if (minutes < 30){
        return (
        <article className="Article">
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{renderCoffee()} {minutes} min read</p>
            <p>{preview}</p>
        </article>
        )
    } else return (
        <article className="Article">
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{renderMeal()} {minutes} min read</p>
            <p>{preview}</p>
        </article>
    )
}

export default Article;