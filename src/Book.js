import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExemple = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference exemple
      </button>
      <button type="button" onClick={() => complexExemple(author)}>
        More complexe exemple
      </button>
    </article>
  );
};

export default Book;
