import { useState } from "react"
import "../styles/Search.scss";

function Search({ handleSearch }) {
  return (
<div className="search-bar">
<i class="fa-solid fa-magnifying-glass"></i>
<input type="text" onChange={(event)=>handleSearch(event.target.value)} placeholder="Search your lilypad..." className="search"/>
</div>
  )
}

export default Search