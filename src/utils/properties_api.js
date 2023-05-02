import axios from "axios"

export function agentValidation(note) {
  return fetch(`/notes/${note.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(note),
  }).then(res => res.json())
}

export function deleteNote(id) {
  return fetch(`/api/notes/${id}`, {
    method: "delete",
  })
}

export function fetchNotes() {
  return axios
    .get("/api/notes", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}
