class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.customValidationTitleHandler =
      this.customValidationTitleHandler.bind(this);
    this.customValidationBodyHandler =
      this.customValidationBodyHandler.bind(this);
  }

  _updateStyle() {
    this._style.textContent = `
      /* Style untuk input dan textarea */
      input, textarea {
        font-size: 12px;
        font-family: "Lexend", sans-serif;
      }

      /* Style untuk form */
      form {
        box-sizing: border-box;
      }

      /* Style untuk judul form */
      form > h1 {
        margin-top: 3rem;
        background-color: #71c9ce;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        width: 100%;
      }

      /* Style untuk input judul dan textarea */
      form > .input-title, textarea {
        width: 100%;
        padding: 12px;
        border-radius: 3px;
        border: 1px solid #ccc;
      }

      /* Style untuk tombol simpan */
      form > .simpanNote {
        background-color: #71c9ce;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
      }

      /* Efek hover pada tombol simpan */
      form > .simpanNote:hover, form > .simpanNote:focus-visible {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
    this.setEventListener();
  }

  render() {
    this._emptyContent();

    this._updateStyle();

    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
      <form id="noteForm" class="noteForm">
        <h1>Tambah Notes</h1>
        <input class="input-title" type="text" id="title" name="title" placeholder="Masukan Judul Notes" required>
        <p id="titleValidation" aria-live="polite"></p>
        <textarea id="body" name="body" rows="4" required placeholder="Masukan Catatan"></textarea>
        <p id="bodyValidation" aria-live="polite"></p>
        <input class="simpanNote" type="submit" value="Simpan">
      </form>
    `;

    this._shadowRoot
      .querySelector("#noteForm")
      .addEventListener("submit", this.OnSubmit.bind(this));
  }

  OnSubmit(event) {
    event.preventDefault();

    const title = this._shadowRoot.querySelector("#title").value;
    const body = this._shadowRoot.querySelector("#body").value;

    const addNoteEvent = new CustomEvent("addNote", {
      detail: { title, body },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(addNoteEvent);

    this._shadowRoot.querySelector("#title").value = "";
    this._shadowRoot.querySelector("#body").value = "";
  }

  setEventListener() {
    const titleInput = this._shadowRoot.querySelector("#title");
    const bodyInput = this._shadowRoot.querySelector("#body");

    titleInput.addEventListener("input", this.customValidationTitleHandler);

    bodyInput.addEventListener("input", this.customValidationBodyHandler);
  }

  customValidationTitleHandler(event) {
    const titleInput = event.target;
    const titleValidationMessage =
      this._shadowRoot.querySelector("#titleValidation");

    if (!titleInput.value.trim()) {
      titleValidationMessage.innerText = "Judul Tidak boleh Dikosongkan";
    } else {
      titleValidationMessage.innerText = "";
    }
  }

  customValidationBodyHandler(event) {
    const bodyInput = event.target;
    const bodyValidationMessage =
      this._shadowRoot.querySelector("#bodyValidation");

    if (!bodyInput.value.trim()) {
      bodyValidationMessage.innerText = "Catatan Tidak Boleh dikosongkan";
    } else {
      bodyValidationMessage.innerText = "";
    }
  }
}

customElements.define("note-form", NoteForm);
