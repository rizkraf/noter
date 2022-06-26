import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      characterLeft: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      const maxChar = 50;
      const inputTitle = event.target.value.slice(0, maxChar);
      const inputTitleLength = inputTitle.length;

      return {
        ...prevState,
        title: inputTitle,
        characterLeft: maxChar - inputTitleLength,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState((prevState) => {
      return {
        ...prevState,
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <section id="inputForm" className="mb-10">
        <h2 className="mb-3 text-3xl font-bold">Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="title" className="mb-1 inline-block">
            Judul
          </label>
          <input
            type="text"
            className="mb-1 w-full rounded-lg border-2 border-black py-2 text-black placeholder-gray-700 focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700"
            name="title"
            id="title"
            placeholder="Isi Judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <p className="mb-5">Sisa Karakter: {this.state.characterLeft}</p>
          <label htmlFor="body" className="mb-1 inline-block">
            Isi Catatan
          </label>
          <textarea
            className="mb-5 h-32 w-full rounded-lg border-2 border-black py-2 text-black placeholder-gray-700 focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700"
            name="body"
            id="body"
            placeholder="Isi Catatan..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
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
}

export default NotesInput;
