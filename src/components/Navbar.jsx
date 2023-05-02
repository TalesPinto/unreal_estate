export default function NavBar({ user, onLogout }) {
  return (
    <header>
      logged in as {user.email}{" "}
      <button onClick={e => onLogout()}>logout</button>
    </header>
  )
}
