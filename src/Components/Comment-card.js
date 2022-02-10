import {deleteComment} from "../utils/api"
import "../styles/Comment-card.css"

const CommentCard = (props) => {
const { body, author, votes, comment_id } = props;
const handleDelete = (event) => {
    event.preventDefault()
    deleteComment(comment_id)
    .then((res) => {
    alert("comment deleted")
    window.location.reload();
    console.log(res)
   }) 
    .catch((err) => {
        console.log(err)
        alert("delete unsuccessful")
    })
}

  return (<form onSubmit={handleDelete} 
  className="commentCard"> 
     
    <div>{body}</div>
    <div>{author}</div>
    <div>{votes}</div>

<button className="deleteButton">delete</button>

  </form>)
};

export default CommentCard;
