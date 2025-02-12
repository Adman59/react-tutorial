import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://i.imgflip.com/fzomi.jpg?a482784",
    title: "What the fuck dude ?",
    author: "Merlin",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/e3/24/f7/e324f790cfe0a51d76f98356475cc408.jpg",
    title: "Hi !",
    author: "Minouche",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=",
    title: "Hi !",
    author: "Minouche",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
