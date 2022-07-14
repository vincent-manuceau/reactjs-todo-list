

export default function Item(props) {
  return (
    <li className="border justify-content-between align-items-center d-flex p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button className="btn btn-danger p-2 h-50"
            onClick={()=>props.delFunc(props.id)}
        >Supprimer</button>
    </li>

  )
}
