import React from "react";

function NewPostForm() {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Title"></input>
        <input type="text" placeholder="Author"></input>
        <textarea rows="10" cols="60" placeholder="Write your post"></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
