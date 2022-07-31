import { useState } from "react";
import PropTypes from "prop-types";

function Input({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [characterLeft, setCharacterLeft] = useState(50);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isBodyEmpty, setIsBodyEmpty] = useState(false);

  const onTitleChangeEventHandler = (event) => {
    const maxChar = 50;
    const inputTitle = event.target.value.slice(0, maxChar);
    const inputTitleLength = inputTitle.length;

    setTitle(inputTitle);
    setCharacterLeft(maxChar - inputTitleLength);
    setIsTitleEmpty(false);
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
    setIsBodyEmpty(false);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (title === "" && body === "") {
      setIsTitleEmpty(true);
      setIsBodyEmpty(true);

      return;
    } else if (title === "") {
      setIsTitleEmpty(true);

      return;
    } else if (body === "") {
      setIsBodyEmpty(true);

      return;
    } else {
      addNote({ title, body });
      setTitle("");
      setBody("");
      setCharacterLeft(50);

      return;
    }
  };

  return (
    <section id="inputForm" className="mb-10">
      <h2 className="mb-3 text-3xl font-bold">Buat Catatan</h2>
      <form onSubmit={onSubmitEventHandler}>
        <label htmlFor="title" className="mb-1 inline-block">
          Judul
        </label>
        <input
          type="text"
          className="mb-1 w-full rounded-lg border-2 border-black py-2 text-black placeholder-gray-700 focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700"
          name="title"
          id="title"
          placeholder="Isi Judul..."
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        <div className="mb-5 flex items-center justify-between">
          <p>Sisa Karakter: {characterLeft}</p>
          {isTitleEmpty ? (
            <p className="text-red-500">Judul tidak boleh kosong</p>
          ) : null}
        </div>
        <label htmlFor="body" className="mb-1 inline-block">
          Isi Catatan
        </label>
        <textarea
          className={`h-32 w-full rounded-lg border-2 border-black py-2 text-black placeholder-gray-700 focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700 ${
            !isBodyEmpty ? "mb-5" : ""
          }`}
          name="body"
          id="body"
          placeholder="Isi Catatan..."
          value={body}
          onChange={onBodyChangeEventHandler}
        ></textarea>
        {isBodyEmpty ? (
          <p className="mb-5 text-right text-red-500">
            Isi catatan tidak boleh kosong
          </p>
        ) : null}
        <button
          type="submit"
          className="block w-full flex-1 rounded-lg border-2 border-black bg-cyan-400 py-2"
        >
          Buat
        </button>
      </form>
    </section>
  );
}

Input.propTypes = {
  addNote: PropTypes.func,
};

export default Input;
