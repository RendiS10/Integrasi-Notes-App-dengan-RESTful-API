function main() {
  const baseUrl = "https://notes-api.dicoding.dev/v2";

  const renderNotes = (notes) => {
    const noteListElement = document.querySelector("#noteList");
    noteListElement.innerHTML = "";

    notes.forEach((note) => {
      const listNote = document.createElement("div");
      listNote.classList.add("noteItem");
      listNote.setAttribute("tabindex", "0");

      const title = document.createElement("h1");
      title.classList.add("title");
      title.innerText = note.title;

      const body = document.createElement("p");
      body.classList.add("noteBody");
      body.innerText = "Catatan : " + note.body;

      const createdAt = document.createElement("p");
      createdAt.classList.add("noteCreate");
      const createdAtDate = new Date(note.createdAt);
      const formatter = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const formattedWIB = formatter.format(createdAtDate);
      createdAt.innerText = "Tanggal Dibuat Catatan: " + formattedWIB;

      const archiveButton = document.createElement("button");
      archiveButton.classList.add("archive-button");
      archiveButton.innerText = "ARSIPKAN";
      archiveButton.setAttribute("type", "button");

      const buttonDelete = document.createElement("button");
      buttonDelete.innerText = "HAPUS";
      buttonDelete.classList.add("button-delete");
      buttonDelete.setAttribute("type", "button");

      buttonDelete.addEventListener("click", function () {
        const confirmation = confirm("Kamu Yakin Menghapus Note Ini ?");
        if (confirmation) {
          deleteNote(note.id);
        }
      });

      if (note.archived) {
        archiveButton.classList.add("button-back");
        archiveButton.innerText = "Kembalikan";
        archiveButton.addEventListener("click", function () {
          unArchiveNote(note.id);
        });
      } else {
        archiveButton.classList.add("archive-button");
        archiveButton.addEventListener("click", function () {
          archiveNote(note.id);
        });
      }

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("action");
      buttonContainer.append(archiveButton, buttonDelete);

      listNote.append(title, body, createdAt, buttonContainer);
      noteListElement.appendChild(listNote);
    });
  };

  const addNote = async (note) => {
    try {
      showLoad();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      };
      const response = await fetch(`${baseUrl}/notes`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getUnArchiveNotes();
    } catch (error) {
      showResponseMessage(error);
    } finally {
      hideLoad();
    }
  };

  const getUnArchiveNotes = async () => {
    try {
      showLoad();
      const response = await fetch(`${baseUrl}/notes`);
      const responseJson = await response.json();

      if (responseJson.data.length > 0) {
        renderNotes(responseJson.data);
      } else {
        showResponseMessage("Tidak Ada Note / Note Kosong !");
        renderNotes(responseJson.data);
      }
    } catch (error) {
      showResponseMessage(error);
    } finally {
      hideLoad();
    }
  };

  const getArchiveNotes = async () => {
    try {
      showLoad();
      const response = await fetch(`${baseUrl}/notes/archived`);
      const responseJson = await response.json();

      if (responseJson.data.length > 0) {
        renderNotes(responseJson.data);
      } else {
        showResponseMessage("Tidak Ada Note Yang Diarsipkan");
        renderNotes(responseJson.data);
      }
    } catch (error) {
      showResponseMessage(error);
    } finally {
      hideLoad();
    }
  };

  const deleteNote = (noteId) => {
    showLoad();
    fetch(`${baseUrl}/notes/${noteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        if (statusNotes.selectedIndex == 0) {
          getUnArchiveNotes();
        } else {
          getArchiveNotes();
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      })
      .finally(() => {
        hideLoad();
      });
  };

  const archiveNote = async (id) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${baseUrl}/notes/${id}/archive`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getUnArchiveNotes();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const unArchiveNote = async (id) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${baseUrl}/notes/${id}/unarchive`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getArchiveNotes();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getUnArchiveNotes();
    statusNotes.selectedIndex = 0;
  });

  document.addEventListener("addNote", function (event) {
    const { title, body } = event.detail;

    const newNote = {
      title: title,
      body: body,
    };

    addNote(newNote);
    statusNotes.selectedIndex = 0;
  });

  const showLoad = () => {
    document.getElementById("load").style.display = "block";
  };

  const hideLoad = () => {
    document.getElementById("load").style.display = "none";
  };

  const statusNotes = document.getElementById("statusNotes");

  statusNotes.addEventListener("change", function () {
    if (statusNotes.selectedIndex == 0) {
      getUnArchiveNotes();
    } else {
      getArchiveNotes();
    }
  });
}

export default main;
